// Erzeugt das Bordbuch-PDF im Marken-Look (Navy / warmes Elfenbein / Messing).
//
// Bewusst isomorph: jsPDF läuft im Browser (Sofort-Download, auch offline) wie in
// Node (E-Mail-Anhang in der API-Route). Es werden nur Text/Linien/Flächen genutzt –
// kein DOM, keine Rasterbilder –, damit dieselbe Funktion auf beiden Seiten arbeitet.

import { formatDay, formatRange, hasDayContent, num, summarize, type LogTrip } from "./logbook";

type RGB = [number, number, number];
const NAVY: RGB = [8, 37, 49];
const BRASS: RGB = [197, 163, 106];
const BRASS_300: RGB = [221, 197, 155];
const TEXT: RGB = [22, 38, 45];
const SOFT: RGB = [76, 90, 96];
const FAINT: RGB = [122, 134, 139];
const PAPER2: RGB = [239, 230, 214];
const SAND: RGB = [227, 216, 196];

const PAGE_W = 210;
const PAGE_H = 297;
const M = 16; // Seitenrand
const CONTENT_W = PAGE_W - 2 * M;
const FOOTER_Y = PAGE_H - 14;
const BOTTOM_LIMIT = PAGE_H - 22; // ab hier neue Seite

/** Zeilenhöhe (mm) für eine Schriftgröße in pt. */
const lh = (pt: number, factor = 1.2) => pt * 0.3528 * factor;

export async function generateLogbookPdf(trip: LogTrip, opts: { generatedLabel: string }): Promise<ArrayBuffer> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });

  const set = (c: RGB) => doc.setTextColor(c[0], c[1], c[2]);
  const fill = (c: RGB) => doc.setFillColor(c[0], c[1], c[2]);
  const draw = (c: RGB) => doc.setDrawColor(c[0], c[1], c[2]);

  // Die Standard-PDF-Fonts können nur WinAnsi/CP1252. š, ž und Umlaute sind
  // enthalten – č, ć und đ jedoch nicht (würden sonst wegfallen). Diese drei
  // werden transliteriert, der Pfeil wird zum Gedankenstrich.
  const wa = (s: string) =>
    (s || "")
      .replace(/→/g, "–")
      .replace(/[čćĉ]/g, "c")
      .replace(/[ČĆĈ]/g, "C")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  const split = (s: string, w: number) => doc.splitTextToSize(wa(s), w) as string[];

  // ---- Kopfband -----------------------------------------------------------
  fill(NAVY);
  doc.rect(0, 0, PAGE_W, 46, "F");
  draw(BRASS);
  doc.setLineWidth(0.5);
  doc.line(M, 46, PAGE_W - M, 46);

  const [titleMain, ...restParts] = trip.yacht.split("·").map((s) => s.trim());
  const yachtSub = restParts.join(" · ");

  set(BRASS_300);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setCharSpace(0.9);
  doc.text("BORDBUCH · SHIP'S LOG", M, 17);
  doc.setCharSpace(0);

  set([255, 255, 255]);
  doc.setFont("times", "normal");
  doc.setFontSize(30);
  doc.text(wa(titleMain || "Bordbuch"), M, 31);

  set(BRASS_300);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const subBits = [yachtSub, trip.region, formatRange(trip.start, trip.end)].filter(Boolean);
  doc.text(wa(subBits.join("   ·   ")), M, 40);

  let y = 58;

  // ---- Törn-Stammdaten ----------------------------------------------------
  const shortField = (x: number, w: number, label: string, value: string) => {
    set(FAINT);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setCharSpace(0.5);
    doc.text(label.toUpperCase(), x, y);
    doc.setCharSpace(0);
    set(TEXT);
    doc.setFont("times", "normal");
    doc.setFontSize(11);
    const line = split(value || "—", w)[0];
    doc.text(line, x, y + 5);
  };

  const colW = CONTENT_W / 2 - 4;
  const colR = M + CONTENT_W / 2 + 4;
  shortField(M, colW, "Skipper", trip.skipper);
  shortField(colR, colW, "Zeitraum", formatRange(trip.start, trip.end) || "—");
  y += 13;
  shortField(M, colW, "Revier", trip.region);
  shortField(colR, colW, "Heimathafen", trip.homePort);
  y += 13;

  if (trip.crew.trim()) {
    set(FAINT);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setCharSpace(0.5);
    doc.text("CREW", M, y);
    doc.setCharSpace(0);
    set(TEXT);
    doc.setFont("times", "normal");
    doc.setFontSize(11);
    const lines = split(trip.crew, CONTENT_W);
    doc.text(lines, M, y + 5);
    y += 5 + lines.length * lh(11) + 3;
  }

  // ---- Kennzahlen-Leiste --------------------------------------------------
  const s = summarize(trip);
  const cards: { k: string; l: string }[] = [
    { k: s.totalNm ? String(s.totalNm).replace(".", ",") : "—", l: "Seemeilen" },
    { k: String(s.days || "—"), l: "Tage" },
    { k: s.totalEngine ? String(s.totalEngine).replace(".", ",") : "—", l: "Motorstunden" },
    { k: String(s.ports.length || "—"), l: "Häfen & Buchten" },
  ];
  const stripH = 20;
  fill(PAPER2);
  draw(SAND);
  doc.setLineWidth(0.3);
  doc.roundedRect(M, y, CONTENT_W, stripH, 1.5, 1.5, "FD");
  draw(BRASS);
  doc.setLineWidth(1.1);
  doc.line(M, y + 4, M, y + stripH - 4); // Messing-Akzent links
  const cw = CONTENT_W / cards.length;
  cards.forEach((c, i) => {
    const cx = M + cw * i + cw / 2;
    set(NAVY);
    doc.setFont("times", "normal");
    doc.setFontSize(17);
    doc.text(c.k, cx, y + 9, { align: "center" });
    set(SOFT);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.8);
    doc.setCharSpace(0.4);
    doc.text(c.l.toUpperCase(), cx, y + 15, { align: "center" });
    doc.setCharSpace(0);
  });
  y += stripH + 12;

  // ---- Seitenumbruch-Hilfen ----------------------------------------------
  const runningHeader = () => {
    set(BRASS);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setCharSpace(0.6);
    doc.text("BORDBUCH · MISS MONEYPENNY", M, 14);
    doc.setCharSpace(0);
    draw(SAND);
    doc.setLineWidth(0.3);
    doc.line(M, 17, PAGE_W - M, 17);
  };
  const ensure = (needed: number) => {
    if (y + needed > BOTTOM_LIMIT) {
      doc.addPage();
      runningHeader();
      y = 24;
    }
  };

  // Beschrifteter, umbrechender Absatz; bricht zeilenweise sauber auf neue Seiten um.
  const paragraph = (label: string, value: string, opt: { italic?: boolean; accent?: boolean } = {}) => {
    if (!value.trim()) return;
    ensure(10);
    if (opt.accent) {
      draw(BRASS);
      doc.setLineWidth(0.8);
      doc.line(M, y - 0.5, M, y + 3.5);
    }
    const tx = opt.accent ? M + 3 : M;
    set(opt.accent ? BRASS : FAINT);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setCharSpace(0.5);
    doc.text(label.toUpperCase(), tx, y);
    doc.setCharSpace(0);
    y += 4.5;
    set(TEXT);
    doc.setFont("times", opt.italic ? "italic" : "normal");
    doc.setFontSize(10.5);
    const lines = split(value, CONTENT_W - (opt.accent ? 3 : 0));
    for (const ln of lines) {
      ensure(lh(10.5));
      doc.text(ln, tx, y);
      y += lh(10.5);
    }
    y += 3;
  };

  // ---- Logbuch-Abschnitt --------------------------------------------------
  set(BRASS);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setCharSpace(0.8);
  doc.text("LOGBUCH", M, y);
  doc.setCharSpace(0);
  y += 7;

  const days = trip.days.filter(hasDayContent);

  if (!days.length) {
    set(SOFT);
    doc.setFont("times", "italic");
    doc.setFontSize(11);
    doc.text("Noch keine Tageseinträge erfasst.", M, y);
    y += 8;
  }

  days.forEach((d, i) => {
    ensure(26);

    // Tag-Kopfzeile
    set(BRASS);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setCharSpace(0.6);
    doc.text(`TAG ${i + 1}`, M, y);
    doc.setCharSpace(0);
    set(NAVY);
    doc.setFont("times", "normal");
    doc.setFontSize(11);
    doc.text(wa(formatDay(d.date) || "—"), M + 16, y);

    const route = [d.from, d.to].map((x) => x.trim()).filter(Boolean).join("  →  ");
    if (route) {
      doc.setFont("times", "italic");
      doc.setFontSize(11);
      set(NAVY);
      const r = split(route, CONTENT_W - 55)[0];
      doc.text(r, PAGE_W - M, y, { align: "right" });
    }
    y += 2.5;
    draw(SAND);
    doc.setLineWidth(0.3);
    doc.line(M, y, PAGE_W - M, y);
    y += 5;

    // Fakten-Zeile
    const facts: string[] = [];
    const times = [d.depart, d.arrive].filter(Boolean).join(" – ");
    if (times) facts.push(`Zeit ${times}`);
    if (num(d.distance)) facts.push(`${d.distance.trim()} sm`);
    if (num(d.engine)) facts.push(`Motor ${d.engine.trim()} h`);
    const wind = [d.windDir, d.windForce ? `${d.windForce} Bft` : ""].filter(Boolean).join(" ");
    if (wind) facts.push(`Wind ${wind}`);
    if (d.weather.trim()) facts.push(d.weather.trim());
    if (facts.length) {
      set(SOFT);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      const lines = split(facts.join("   ·   "), CONTENT_W);
      for (const ln of lines) {
        ensure(lh(9.5));
        doc.text(ln, M, y);
        y += lh(9.5);
      }
      y += 2.5;
    }

    if (d.crew.trim()) paragraph("Crew an Bord", d.crew);
    if (d.incidents.trim()) paragraph("Besondere Vorkommnisse", d.incidents, { accent: true });
    if (d.highlight.trim()) paragraph("Highlight des Tages", d.highlight, { italic: true });
    if (d.notes.trim()) paragraph("Notizen", d.notes);

    // Fotos des Tages – zweispaltig, mit Höhenbegrenzung und Bildunterschrift.
    const photos = (d.photos || []).filter((p) => p.dataUrl);
    if (photos.length) {
      ensure(10);
      set(FAINT);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      doc.setCharSpace(0.5);
      doc.text("FOTOS", M, y);
      doc.setCharSpace(0);
      y += 4;
      const gap = 4;
      const colW = (CONTENT_W - gap) / 2;
      const MAX_H = 58;
      for (let i = 0; i < photos.length; i += 2) {
        const row = photos.slice(i, i + 2).map((p) => {
          const ratio = p.h > 0 && p.w > 0 ? p.h / p.w : 0.75;
          let dw = colW;
          let dh = colW * ratio;
          if (dh > MAX_H) { dh = MAX_H; dw = MAX_H / ratio; }
          return { p, dw, dh };
        });
        const rowH = Math.max(...row.map((r) => r.dh));
        const capH = row.some((r) => r.p.caption.trim()) ? 5 : 0;
        ensure(rowH + capH + 4);
        let x = M;
        for (const { p, dw, dh } of row) {
          try {
            // Ohne Kompressions-Parameter: jsPDF bettet das JPEG direkt als DCTDecode
            // ein. Mit "FAST" rastert es im Browser über ein Canvas neu (→ leeres Bild).
            doc.addImage(p.dataUrl as string, "JPEG", x, y, dw, dh);
          } catch (e) {
            if (typeof console !== "undefined") console.warn("Foto konnte nicht eingebettet werden:", e);
          }
          if (p.caption.trim()) {
            set(SOFT);
            doc.setFont("times", "italic");
            doc.setFontSize(8.5);
            doc.text(split(p.caption, colW)[0], x, y + dh + 3.5);
          }
          x += colW + gap;
        }
        y += rowH + capH + 4;
      }
    }

    y += 2;
    if (i < days.length - 1) {
      ensure(6);
      draw(PAPER2);
      doc.setLineWidth(0.4);
      doc.line(M, y, PAGE_W - M, y);
      y += 6;
    }
  });

  // ---- Abschlussnotiz -----------------------------------------------------
  ensure(14);
  y += 4;
  draw(BRASS);
  doc.setLineWidth(0.3);
  doc.line(M, y, M + 24, y);
  y += 5;
  set(FAINT);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.text(
    "Persönliches Bordbuch zur Erinnerung und als Beleg – es ersetzt nicht das amtliche Schiffstagebuch an Bord.",
    M,
    y
  );

  // ---- Fußzeilen auf allen Seiten ----------------------------------------
  const pages = doc.getNumberOfPages();
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p);
    draw(SAND);
    doc.setLineWidth(0.3);
    doc.line(M, FOOTER_Y - 4, PAGE_W - M, FOOTER_Y - 4);
    set(FAINT);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text("Miss Moneypenny · Bond Yachting — chartern-in-kroatien.de", M, FOOTER_Y);
    doc.text(`Erstellt am ${opts.generatedLabel}`, M, FOOTER_Y + 3.6);
    doc.text(`Seite ${p} / ${pages}`, PAGE_W - M, FOOTER_Y, { align: "right" });
  }

  return doc.output("arraybuffer") as ArrayBuffer;
}
