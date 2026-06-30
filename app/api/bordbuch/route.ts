import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateLogbookPdf } from "@/lib/logbookPdf";
import { formatRange, isValidEmail, pdfFilename, sanitizeTrip, summarize } from "@/lib/logbook";

export const runtime = "nodejs";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Best-effort In-Memory-Ratelimit pro IP. Verhindert nicht jeden Missbrauch
// (setzt bei Server-Neustart zurück), bremst aber Skripte spürbar aus. Da die
// Route Mails an eine frei wählbare Adresse verschickt, ist das die wichtigste
// Schutzschicht neben Honeypot, Schema-Begrenzung und fixem, gebrandetem Inhalt.
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // simple Speicher-Bremse
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  // Honeypot: füllt ein Bot das versteckte Feld, tun wir freundlich – ohne zu senden.
  if (typeof (body as Record<string, unknown>).website === "string" && (body as Record<string, unknown>).website) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen in kurzer Zeit. Bitte einen Moment warten." },
      { status: 429 }
    );
  }

  const trip = sanitizeTrip(body);

  if (!isValidEmail(trip.email)) {
    return NextResponse.json({ error: "Bitte eine gültige E-Mail-Adresse angeben." }, { status: 422 });
  }

  const titleMain = trip.yacht.split("·")[0]?.trim() || "Miss Moneypenny";
  const range = formatRange(trip.start, trip.end);
  const s = summarize(trip);

  let pdf: ArrayBuffer;
  try {
    const generatedLabel = new Date().toLocaleString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    pdf = await generateLogbookPdf(trip, { generatedLabel });
  } catch (err) {
    console.error("Bordbuch-PDF konnte nicht erzeugt werden:", err);
    return NextResponse.json({ error: "PDF konnte nicht erstellt werden." }, { status: 500 });
  }

  const greetingName = trip.skipper.trim().split(/\s+/)[0] || "";
  const hi = greetingName ? `Ahoi ${greetingName},` : "Ahoi,";
  const summaryLine = [
    s.totalNm ? `${String(s.totalNm).replace(".", ",")} sm` : null,
    s.days ? `${s.days} Tage` : null,
    s.ports.length ? `${s.ports.length} Häfen & Buchten` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  const text = [
    hi,
    "",
    `im Anhang findest du dein Bordbuch der ${titleMain}${range ? ` (${range})` : ""} als PDF.`,
    summaryLine ? `\nDein Törn auf einen Blick: ${summaryLine}.` : "",
    "",
    "Heb es gut auf – als Erinnerung an einen schönen Törn und als Beleg, falls du ihn je brauchst.",
    "Bis zum nächsten Mal an Bord!",
    "",
    "Miss Moneypenny · Bond Yachting",
    "https://chartern-in-kroatien.de",
    "",
    "—",
    "Hinweis: Dieses persönliche Bordbuch ersetzt nicht das amtliche Schiffstagebuch an Bord.",
  ]
    .filter((l) => l !== undefined)
    .join("\n");

  try {
    await transporter.sendMail({
      from: `"Miss Moneypenny Bordbuch" <${process.env.SMTP_FROM}>`,
      to: trip.email, // ausschließlich an den Skipper
      subject: `Dein Bordbuch – ${titleMain}${range ? ` (${range})` : ""}`,
      text,
      attachments: [
        {
          filename: pdfFilename(trip),
          content: Buffer.from(pdf),
          contentType: "application/pdf",
        },
      ],
    });
  } catch (err) {
    console.error("Bordbuch-Mail konnte nicht gesendet werden:", err);
    return NextResponse.json({ error: "Versand fehlgeschlagen." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
