// Datenmodell & Helfer für das Skipper-Bordbuch.
//
// Diese Datei ist bewusst frei von React/"use client" und von Browser-APIs,
// damit sie sowohl in der Client-Komponente (Eingabe + Download) als auch in der
// API-Route (E-Mail-Versand) importiert werden kann – eine gemeinsame Quelle für
// Typen, Standardwerte, Zusammenfassung und Validierung.

export type LogPhoto = {
  id: string; // zugleich Schlüssel im IndexedDB-Foto-Store
  caption: string; // optionale Bildunterschrift
  w: number; // Pixelbreite (für PDF-Seitenverhältnis)
  h: number; // Pixelhöhe
  /** Komprimierte JPEG-Daten-URL. Wird NICHT in localStorage gehalten (liegt in
   *  IndexedDB), aber für PDF-Erzeugung und E-Mail-Versand eingehängt. */
  dataUrl?: string;
};

export type LogDay = {
  id: string;
  date: string; // YYYY-MM-DD
  from: string; // Auslaufhafen / Ankerplatz
  to: string; // Ziel / Ankerplatz
  depart: string; // HH:MM
  arrive: string; // HH:MM
  distance: string; // Seemeilen (Freitext, erlaubt z. B. "18,5")
  engine: string; // Motorstunden
  windDir: string; // Windrichtung
  windForce: string; // Windstärke (Bft)
  weather: string; // Wetter & Seegang
  crew: string; // Crew an Bord / Wache
  incidents: string; // Besondere Vorkommnisse (Sicherheits-/Logteil)
  highlight: string; // Highlight des Tages (Erinnerungsteil)
  notes: string; // Freie Notizen
  photos: LogPhoto[]; // Fotos des Tages (Referenzen; Bilddaten in IndexedDB)
};

export type LogTrip = {
  yacht: string;
  skipper: string;
  crew: string;
  region: string;
  homePort: string;
  start: string; // YYYY-MM-DD
  end: string; // YYYY-MM-DD
  email: string; // Empfänger (eigene Adresse)
  days: LogDay[];
};

export const STORAGE_KEY = "missm-bordbuch-v1";

/** Standardwerte – Yacht & Revier sind vorausgefüllt, damit der Einstieg schnell geht. */
export const DEFAULT_YACHT = "Miss Moneypenny · Lagoon 400 S2";
export const DEFAULT_REGION = "Kroatien – Kornaten & Šibenik";
export const DEFAULT_HOME_PORT = "Marina Mandalina, Šibenik";

/** Grenzen (auch serverseitig erzwungen), damit die Nutzlast und das PDF beschränkt bleiben. */
export const MAX_DAYS = 30;
export const MAX_FIELD = 600; // Zeichen je Feld
export const MAX_NOTE = 1500; // Zeichen für längere Textfelder

/* ---- Foto-Limits ---- */
export const MAX_PHOTOS_PER_DAY = 4;
/** Budget für den E-Mail-Versand: Summe der Daten-URL-Längen (≈ base64-Zeichen).
 *  Konservativ gewählt, damit die Mail auch bei Hosting-Body-Limits durchgeht. */
export const MAX_PHOTO_DATAURL_CHARS = 900_000; // je Foto (~660 KB Rohbild)
export const MAX_TOTAL_PHOTO_CHARS = 3_600_000; // gesamt (~2,6 MB Rohbild)
const DATAURL_RE = /^data:image\/(jpeg|png);base64,[A-Za-z0-9+/=]+$/;

function uid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `d-${Math.random().toString(36).slice(2)}`;
}

export function emptyDay(date = ""): LogDay {
  return {
    id: uid(),
    date,
    from: "",
    to: "",
    depart: "",
    arrive: "",
    distance: "",
    engine: "",
    windDir: "",
    windForce: "",
    weather: "",
    crew: "",
    incidents: "",
    highlight: "",
    notes: "",
    photos: [],
  };
}

export function emptyTrip(): LogTrip {
  return {
    yacht: DEFAULT_YACHT,
    skipper: "",
    crew: "",
    region: DEFAULT_REGION,
    homePort: DEFAULT_HOME_PORT,
    start: "",
    end: "",
    email: "",
    days: [emptyDay()],
  };
}

/** Aus „18,5 nm" o. Ä. eine Zahl gewinnen; gibt 0 zurück, wenn nichts Sinnvolles drinsteht. */
export function num(value: string): number {
  if (!value) return 0;
  const n = parseFloat(value.replace(",", ".").replace(/[^\d.-]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export type LogSummary = {
  days: number;
  totalNm: number;
  totalEngine: number;
  ports: string[];
};

/** Kennzahlen für die Zusammenfassung – Seemeilen, Tage, Motorstunden, angelaufene Orte. */
export function summarize(trip: LogTrip): LogSummary {
  const filledDays = trip.days.filter(hasDayContent);
  const totalNm = trip.days.reduce((s, d) => s + num(d.distance), 0);
  const totalEngine = trip.days.reduce((s, d) => s + num(d.engine), 0);

  const seen = new Set<string>();
  const ports: string[] = [];
  for (const d of trip.days) {
    for (const p of [d.from, d.to]) {
      const name = p.trim();
      const key = name.toLowerCase();
      if (name && !seen.has(key)) {
        seen.add(key);
        ports.push(name);
      }
    }
  }

  return {
    days: filledDays.length,
    totalNm: Math.round(totalNm * 10) / 10,
    totalEngine: Math.round(totalEngine * 10) / 10,
    ports,
  };
}

/** Ein Tag „zählt", sobald irgendein inhaltliches Feld gefüllt ist – auch ein Foto. */
export function hasDayContent(d: LogDay): boolean {
  return Boolean(
    d.date || d.from || d.to || d.distance || d.engine || d.weather || d.incidents || d.highlight || d.notes ||
      (d.photos && d.photos.length)
  );
}

/** Hübsches Datum „Mi., 12. Juli 2026" – fällt auf den Rohwert zurück, wenn nicht parsebar. */
export function formatDay(iso: string): string {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("de-DE", { weekday: "short", day: "numeric", month: "long", year: "numeric" });
}

/** Zeitraum „12.–19. Juli 2026" für Titel/Betreff. */
export function formatRange(start: string, end: string): string {
  const fmt = (iso: string) =>
    new Date(`${iso}T12:00:00`).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
  if (start && end) return `${fmt(start)} – ${fmt(end)}`;
  if (start) return `ab ${fmt(start)}`;
  if (end) return `bis ${fmt(end)}`;
  return "";
}

const clip = (v: unknown, max: number): string => (typeof v === "string" ? v.slice(0, max) : "");

/**
 * Beschneidet eine eingehende Nutzlast auf das erwartete Schema und harte Grenzen.
 * Wird in der API-Route verwendet, bevor das PDF erzeugt wird – nie ungeprüfte
 * Strings ins PDF/in die Mail übernehmen.
 */
export function sanitizeTrip(input: unknown): LogTrip {
  const raw = (input ?? {}) as Record<string, unknown>;
  const daysRaw = Array.isArray(raw.days) ? raw.days.slice(0, MAX_DAYS) : [];

  // Läuft über alle Tage und erzwingt das Gesamt-Foto-Budget für den Versand.
  let totalPhotoChars = 0;
  const sanitizePhotos = (value: unknown): LogPhoto[] => {
    if (!Array.isArray(value)) return [];
    const out: LogPhoto[] = [];
    for (const p of value.slice(0, MAX_PHOTOS_PER_DAY)) {
      const r = (p ?? {}) as Record<string, unknown>;
      const dataUrl = typeof r.dataUrl === "string" ? r.dataUrl : "";
      // Ohne gültige, budgetkonforme Bilddaten wird das Foto verworfen.
      if (!DATAURL_RE.test(dataUrl) || dataUrl.length > MAX_PHOTO_DATAURL_CHARS) continue;
      if (totalPhotoChars + dataUrl.length > MAX_TOTAL_PHOTO_CHARS) continue;
      totalPhotoChars += dataUrl.length;
      out.push({
        id: clip(r.id, 64) || uid(),
        caption: clip(r.caption, 180),
        w: Number.isFinite(r.w) ? Math.max(1, Math.round(r.w as number)) : 1000,
        h: Number.isFinite(r.h) ? Math.max(1, Math.round(r.h as number)) : 750,
        dataUrl,
      });
    }
    return out;
  };

  const days: LogDay[] = daysRaw.map((d) => {
    const r = (d ?? {}) as Record<string, unknown>;
    return {
      id: clip(r.id, 64) || uid(),
      date: clip(r.date, 20),
      from: clip(r.from, MAX_FIELD),
      to: clip(r.to, MAX_FIELD),
      depart: clip(r.depart, 12),
      arrive: clip(r.arrive, 12),
      distance: clip(r.distance, 24),
      engine: clip(r.engine, 24),
      windDir: clip(r.windDir, 32),
      windForce: clip(r.windForce, 32),
      weather: clip(r.weather, MAX_FIELD),
      crew: clip(r.crew, MAX_FIELD),
      incidents: clip(r.incidents, MAX_NOTE),
      highlight: clip(r.highlight, MAX_NOTE),
      notes: clip(r.notes, MAX_NOTE),
      photos: sanitizePhotos(r.photos),
    };
  });

  return {
    yacht: clip(raw.yacht, MAX_FIELD) || DEFAULT_YACHT,
    skipper: clip(raw.skipper, MAX_FIELD),
    crew: clip(raw.crew, MAX_NOTE),
    region: clip(raw.region, MAX_FIELD),
    homePort: clip(raw.homePort, MAX_FIELD),
    start: clip(raw.start, 20),
    end: clip(raw.end, 20),
    email: clip(raw.email, 200),
    days: days.length ? days : [emptyDay()],
  };
}

/** Dateiname fürs PDF, z. B. „Bordbuch-Miss-Moneypenny-2026-07-12.pdf". */
export function pdfFilename(trip: LogTrip): string {
  const datePart = trip.start || trip.end || "Toern";
  return `Bordbuch-Miss-Moneypenny-${datePart}.pdf`.replace(/[^A-Za-z0-9._-]/g, "-");
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
