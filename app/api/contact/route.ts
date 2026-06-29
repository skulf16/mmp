import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

  const { name, email, phone, period, guests, skipper, message } = body as Record<string, string>;

  if (!name || !email) {
    return NextResponse.json({ error: "Name und E-Mail erforderlich" }, { status: 422 });
  }

  const text = [
    `Name:          ${name}`,
    `E-Mail:        ${email}`,
    `Telefon:       ${phone || "–"}`,
    `Wunschzeitraum: ${period || "–"}`,
    `Personen:      ${guests}`,
    `Skipper:       ${skipper}`,
    "",
    message || "",
  ].join("\n");

  await transporter.sendMail({
    from: `"Miss Moneypenny Charter" <${process.env.SMTP_FROM}>`,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `Miss Moneypenny wurde angefragt von ${name}`,
    text,
  });

  return NextResponse.json({ ok: true });
}
