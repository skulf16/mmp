"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import {
  MAX_PHOTOS_PER_DAY,
  MAX_TOTAL_PHOTO_CHARS,
  STORAGE_KEY,
  emptyDay,
  emptyTrip,
  formatDay,
  isValidEmail,
  pdfFilename,
  summarize,
  type LogDay,
  type LogPhoto,
  type LogTrip,
} from "@/lib/logbook";
import { compressImage, deletePhoto, getPhotos, putPhoto } from "@/lib/logbookPhotos";
import { ArrowRight, BookOpen, Check, Download, Mail, Plus, Trash } from "./Icons";

type InstallPrompt = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

const genLabel = () =>
  new Date().toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

export default function Logbook() {
  const [trip, setTrip] = useState<LogTrip>(() => emptyTrip());
  const [hydrated, setHydrated] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [online, setOnline] = useState(true);

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);

  const [installEvt, setInstallEvt] = useState<InstallPrompt | null>(null);
  const [previews, setPreviews] = useState<Record<string, string>>({});
  const [uploading, setUploading] = useState(false);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const honeypot = useRef("");

  // --- Laden aus localStorage (nach dem ersten Render, vermeidet Hydration-Mismatch) ---
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as LogTrip;
        if (parsed && Array.isArray(parsed.days) && parsed.days.length) {
          // Vorwärtskompatibel normalisieren (ältere Stände kennen `photos` noch nicht).
          parsed.days = parsed.days.map((d) => ({ ...emptyDay(), ...d, photos: Array.isArray(d.photos) ? d.photos : [] }));
          setTrip(parsed);
          const ids = parsed.days.flatMap((d) => d.photos.map((p) => p.id));
          if (ids.length) getPhotos(ids).then(setPreviews).catch(() => {});
        }
      }
    } catch {
      /* defekter Eintrag wird ignoriert */
    }
    setHydrated(true);
  }, []);

  // --- Autospeichern ---
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trip));
      setSavedAt(
        new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })
      );
    } catch {
      /* z. B. Speicher voll – still ignorieren */
    }
  }, [trip, hydrated]);

  // --- Online-Status, PWA-Installation, Service Worker ---
  useEffect(() => {
    setOnline(navigator.onLine);
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);

    const onInstall = (e: Event) => {
      e.preventDefault();
      setInstallEvt(e as InstallPrompt);
    };
    window.addEventListener("beforeinstallprompt", onInstall);

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* SW optional – die Eingabe funktioniert auch ohne */
      });
    }

    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
      window.removeEventListener("beforeinstallprompt", onInstall);
    };
  }, []);

  // --- Mutationen ---
  const setField = (k: keyof LogTrip) => (e: { target: { value: string } }) =>
    setTrip((t) => ({ ...t, [k]: e.target.value }));

  const setDay = (id: string, k: keyof LogDay) => (e: { target: { value: string } }) =>
    setTrip((t) => ({
      ...t,
      days: t.days.map((d) => (d.id === id ? { ...d, [k]: e.target.value } : d)),
    }));

  const addDay = useCallback(() => {
    setTrip((t) => {
      const last = t.days[t.days.length - 1];
      let next = "";
      if (last?.date) {
        const d = new Date(`${last.date}T12:00:00`);
        d.setDate(d.getDate() + 1);
        next = d.toISOString().slice(0, 10);
      } else if (t.start) {
        next = t.start;
      }
      return { ...t, days: [...t.days, emptyDay(next)] };
    });
  }, []);

  const removeDay = (id: string) => {
    const day = trip.days.find((d) => d.id === id);
    day?.photos.forEach((p) => void deletePhoto(p.id));
    if (day?.photos.length) {
      setPreviews((prev) => {
        const next = { ...prev };
        day.photos.forEach((p) => delete next[p.id]);
        return next;
      });
    }
    setTrip((t) => {
      const days = t.days.filter((d) => d.id !== id);
      return { ...t, days: days.length ? days : [emptyDay()] };
    });
  };

  const reset = () => {
    if (typeof window !== "undefined" && window.confirm("Alle Einträge dieses Bordbuchs wirklich löschen?")) {
      trip.days.forEach((d) => d.photos.forEach((p) => void deletePhoto(p.id)));
      setPreviews({});
      setTrip(emptyTrip());
      setSent(false);
      setError(null);
      setPhotoError(null);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
    }
  };

  // --- Fotos (komprimiert in IndexedDB; Referenzen im Törn-Datensatz) ---
  const usedPhotoChars = () =>
    trip.days.reduce((sum, d) => sum + d.photos.reduce((s, p) => s + (previews[p.id]?.length ?? 0), 0), 0);

  const pickPhotos = (dayId: string) => async (e: { target: HTMLInputElement }) => {
    const input = e.target;
    const files = Array.from(input.files ?? []);
    input.value = ""; // erlaubt erneutes Wählen derselben Datei
    if (!files.length) return;
    setPhotoError(null);
    setUploading(true);
    try {
      const day = trip.days.find((d) => d.id === dayId);
      let slots = MAX_PHOTOS_PER_DAY - (day?.photos.length ?? 0);
      let used = usedPhotoChars();
      const added: LogPhoto[] = [];
      const fresh: Record<string, string> = {};
      for (const file of files) {
        if (slots <= 0) {
          setPhotoError(`Mehr als ${MAX_PHOTOS_PER_DAY} Fotos pro Tag sind nicht möglich.`);
          break;
        }
        if (!file.type.startsWith("image/")) continue;
        const comp = await compressImage(file).catch(() => null);
        if (!comp) {
          setPhotoError("Ein Bild konnte nicht verarbeitet werden – das Format wird evtl. nicht unterstützt.");
          continue;
        }
        if (used + comp.dataUrl.length > MAX_TOTAL_PHOTO_CHARS) {
          setPhotoError("Die Fotos sind zusammen zu groß für den E-Mail-Versand. Bitte vorhandene entfernen, bevor neue dazukommen.");
          break;
        }
        const id = crypto.randomUUID();
        try {
          await putPhoto(id, comp.dataUrl);
        } catch {
          setPhotoError("Foto konnte nicht gespeichert werden.");
          continue;
        }
        added.push({ id, caption: "", w: comp.w, h: comp.h });
        fresh[id] = comp.dataUrl;
        used += comp.dataUrl.length;
        slots--;
      }
      if (added.length) {
        setPreviews((p) => ({ ...p, ...fresh }));
        setTrip((t) => ({ ...t, days: t.days.map((d) => (d.id === dayId ? { ...d, photos: [...d.photos, ...added] } : d)) }));
      }
    } finally {
      setUploading(false);
    }
  };

  const removePhoto = (dayId: string, photoId: string) => {
    void deletePhoto(photoId);
    setPreviews((prev) => {
      const next = { ...prev };
      delete next[photoId];
      return next;
    });
    setTrip((t) => ({
      ...t,
      days: t.days.map((d) => (d.id === dayId ? { ...d, photos: d.photos.filter((p) => p.id !== photoId) } : d)),
    }));
  };

  const setCaption = (dayId: string, photoId: string) => (e: { target: { value: string } }) =>
    setTrip((t) => ({
      ...t,
      days: t.days.map((d) =>
        d.id === dayId ? { ...d, photos: d.photos.map((p) => (p.id === photoId ? { ...p, caption: e.target.value } : p)) } : d
      ),
    }));

  /** Hängt die Bilddaten aus den Previews an die Foto-Referenzen (für PDF & Versand). */
  const withPhotos = (t: LogTrip): LogTrip => ({
    ...t,
    days: t.days.map((d) => ({
      ...d,
      photos: d.photos.map((p) => ({ ...p, dataUrl: previews[p.id] })).filter((p) => p.dataUrl),
    })),
  });

  // --- PDF-Download (clientseitig, funktioniert auch offline) ---
  const download = async () => {
    setError(null);
    setDownloading(true);
    try {
      const { generateLogbookPdf } = await import("@/lib/logbookPdf");
      const buf = await generateLogbookPdf(withPhotos(trip), { generatedLabel: genLabel() });
      const blob = new Blob([buf], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = pdfFilename(trip);
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setError("Das PDF konnte nicht erzeugt werden. Bitte lade die Seite neu und versuche es erneut.");
    } finally {
      setDownloading(false);
    }
  };

  // --- Per E-Mail an den Skipper senden ---
  const send = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSent(false);
    if (!isValidEmail(trip.email)) {
      setError("Bitte trage oben eine gültige E-Mail-Adresse ein, damit wir dir das Bordbuch schicken können.");
      return;
    }
    if (!online) {
      setError("Du bist gerade offline. Lade dein Bordbuch solange als PDF herunter – der Versand klappt, sobald du wieder Internet hast.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/bordbuch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...withPhotos(trip), website: honeypot.current }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Versand fehlgeschlagen");
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Der Versand hat leider nicht geklappt. Bitte erneut versuchen.");
    } finally {
      setSending(false);
    }
  };

  const install = async () => {
    if (!installEvt) return;
    await installEvt.prompt();
    setInstallEvt(null);
  };

  const s = summarize(trip);
  const fmtNum = (n: number) => (n ? String(n).replace(".", ",") : "—");

  return (
    <div className="lb">
      {/* ---- Törn-Stammdaten ---- */}
      <div className="lb-card">
        <div className="lb-card-head">
          <span className="eyebrow"><BookOpen style={{ width: 16, height: 16 }} /> Dein Törn</span>
          <span className={`lb-save${online ? "" : " offline"}`}>
            <span className="dot" />
            {online ? (savedAt ? `Automatisch gespeichert · ${savedAt}` : "Wird automatisch gespeichert") : "Offline · lokal gespeichert"}
          </span>
        </div>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="skipper">Skipper</label>
            <input id="skipper" value={trip.skipper} onChange={setField("skipper")} placeholder="Dein Name" />
          </div>
          <div className="field">
            <label htmlFor="yacht">Yacht</label>
            <input id="yacht" value={trip.yacht} onChange={setField("yacht")} />
          </div>
          <div className="field full">
            <label htmlFor="crew">Crew an Bord</label>
            <input id="crew" value={trip.crew} onChange={setField("crew")} placeholder="z. B. Anna, Ben, Clara …" />
          </div>
          <div className="field">
            <label htmlFor="region">Revier</label>
            <input id="region" value={trip.region} onChange={setField("region")} />
          </div>
          <div className="field">
            <label htmlFor="homePort">Heimathafen</label>
            <input id="homePort" value={trip.homePort} onChange={setField("homePort")} />
          </div>
          <div className="field">
            <label htmlFor="start">Törnbeginn</label>
            <input id="start" type="date" value={trip.start} onChange={setField("start")} />
          </div>
          <div className="field">
            <label htmlFor="end">Törnende</label>
            <input id="end" type="date" value={trip.end} onChange={setField("end")} />
          </div>
        </div>
      </div>

      {/* ---- Live-Kennzahlen ---- */}
      <div className="lb-summary" aria-label="Zusammenfassung des Törns">
        <div className="lb-stat"><div className="k">{fmtNum(s.totalNm)}</div><div className="l">Seemeilen</div></div>
        <div className="lb-stat"><div className="k">{s.days || "—"}</div><div className="l">Tage</div></div>
        <div className="lb-stat"><div className="k">{fmtNum(s.totalEngine)}</div><div className="l">Motorstunden</div></div>
        <div className="lb-stat"><div className="k">{s.ports.length || "—"}</div><div className="l">Häfen & Buchten</div></div>
      </div>

      {/* ---- Tageseinträge ---- */}
      {trip.days.map((d, i) => (
        <div className="lb-day" key={d.id}>
          <div className="lb-day-head">
            <span className="lb-day-num">
              <b>Tag {i + 1}</b>
              {d.date && <span>{formatDay(d.date)}</span>}
            </span>
            {trip.days.length > 1 && (
              <button type="button" className="lb-remove" onClick={() => removeDay(d.id)} aria-label={`Tag ${i + 1} entfernen`}>
                <Trash /> Entfernen
              </button>
            )}
          </div>

          <div className="lb-grid">
            <div className="field">
              <label htmlFor={`date-${d.id}`}>Datum</label>
              <input id={`date-${d.id}`} type="date" value={d.date} onChange={setDay(d.id, "date")} />
            </div>
            <div className="field">
              <label htmlFor={`from-${d.id}`}>Von (Hafen / Bucht)</label>
              <input id={`from-${d.id}`} value={d.from} onChange={setDay(d.id, "from")} placeholder="z. B. Šibenik" />
            </div>
            <div className="field">
              <label htmlFor={`to-${d.id}`}>Nach (Hafen / Ankerplatz)</label>
              <input id={`to-${d.id}`} value={d.to} onChange={setDay(d.id, "to")} placeholder="z. B. Žut" />
            </div>
            <div className="field">
              <label htmlFor={`depart-${d.id}`}>Auslaufen</label>
              <input id={`depart-${d.id}`} type="time" value={d.depart} onChange={setDay(d.id, "depart")} />
            </div>
            <div className="field">
              <label htmlFor={`arrive-${d.id}`}>Anlaufen</label>
              <input id={`arrive-${d.id}`} type="time" value={d.arrive} onChange={setDay(d.id, "arrive")} />
            </div>
            <div className="field">
              <label htmlFor={`dist-${d.id}`}>Seemeilen</label>
              <input id={`dist-${d.id}`} inputMode="decimal" value={d.distance} onChange={setDay(d.id, "distance")} placeholder="z. B. 18,5" />
            </div>
            <div className="field">
              <label htmlFor={`eng-${d.id}`}>Motorstunden</label>
              <input id={`eng-${d.id}`} inputMode="decimal" value={d.engine} onChange={setDay(d.id, "engine")} placeholder="z. B. 1,5" />
            </div>
            <div className="field">
              <label htmlFor={`wdir-${d.id}`}>Windrichtung</label>
              <input id={`wdir-${d.id}`} value={d.windDir} onChange={setDay(d.id, "windDir")} placeholder="z. B. NW" />
            </div>
            <div className="field">
              <label htmlFor={`wfor-${d.id}`}>Windstärke (Bft)</label>
              <input id={`wfor-${d.id}`} inputMode="numeric" value={d.windForce} onChange={setDay(d.id, "windForce")} placeholder="z. B. 4" />
            </div>
            <div className="field full">
              <label htmlFor={`weather-${d.id}`}>Wetter & Seegang</label>
              <input id={`weather-${d.id}`} value={d.weather} onChange={setDay(d.id, "weather")} placeholder="z. B. sonnig, leichte Welle" />
            </div>
            <div className="field full lb-fav">
              <label htmlFor={`hl-${d.id}`}>Highlight des Tages</label>
              <textarea id={`hl-${d.id}`} value={d.highlight} onChange={setDay(d.id, "highlight")} placeholder="Der schönste Moment, die beste Bucht, das Abendessen an Land …" />
            </div>
            <div className="field full">
              <label htmlFor={`inc-${d.id}`}>Besondere Vorkommnisse</label>
              <textarea id={`inc-${d.id}`} value={d.incidents} onChange={setDay(d.id, "incidents")} placeholder="Manöver, Schäden, Beinahe-Situationen, Reparaturen – falls etwas war." />
            </div>
            <div className="field full">
              <label htmlFor={`notes-${d.id}`}>Notizen</label>
              <textarea id={`notes-${d.id}`} value={d.notes} onChange={setDay(d.id, "notes")} placeholder="Was du sonst festhalten möchtest." />
            </div>
            <div className="field full">
              <label>Fotos <span className="lb-photo-meta">{d.photos.length}/{MAX_PHOTOS_PER_DAY}</span></label>
              <div className="lb-photos">
                {d.photos.map((p) => (
                  <figure className="lb-photo" key={p.id}>
                    {previews[p.id] ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={previews[p.id]} alt={p.caption || "Bordbuch-Foto"} />
                    ) : (
                      <div className="lb-photo-missing">Bild auf diesem Gerät nicht gefunden</div>
                    )}
                    <button type="button" className="lb-photo-del" onClick={() => removePhoto(d.id, p.id)} aria-label="Foto entfernen">×</button>
                    <input className="lb-photo-cap" value={p.caption} onChange={setCaption(d.id, p.id)} placeholder="Bildunterschrift" />
                  </figure>
                ))}
                {d.photos.length < MAX_PHOTOS_PER_DAY && (
                  <label className="lb-photo-add">
                    <input type="file" accept="image/*" multiple onChange={pickPhotos(d.id)} style={{ display: "none" }} />
                    <Plus />
                    <span>{uploading ? "Lädt …" : "Foto"}</span>
                  </label>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {photoError && <p className="lb-msg err" style={{ marginTop: 0 }}>{photoError}</p>}

      <button type="button" className="lb-add" onClick={addDay}>
        <Plus /> Weiteren Tag hinzufügen
      </button>

      {/* ---- Sichern & zusenden ---- */}
      <div className="lb-card" id="senden">
        <span className="eyebrow"><Mail style={{ width: 16, height: 16 }} /> Sichern & zusenden</span>
        <p className="lb-hint" style={{ marginBottom: "1.4rem" }}>
          Schick dir dein Bordbuch als PDF an deine eigene E-Mail-Adresse – als Erinnerung und als Beleg.
          Die Eingaben bleiben automatisch in diesem Browser gespeichert.
        </p>

        <form onSubmit={send} className="form-grid" style={{ gridTemplateColumns: "1fr" }}>
          <div className="field">
            <label htmlFor="email">Deine E-Mail-Adresse</label>
            <input id="email" type="email" value={trip.email} onChange={setField("email")} placeholder="name@beispiel.de" autoComplete="email" />
          </div>

          {/* Honeypot gegen Bots – für Menschen unsichtbar */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            defaultValue=""
            onChange={(e) => (honeypot.current = e.target.value)}
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
          />

          <div className="lb-actions-row">
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? "Wird gesendet …" : <><span>Per E-Mail an mich senden</span> <ArrowRight /></>}
            </button>
            <button type="button" className="btn btn-outline" onClick={download} disabled={downloading}>
              {downloading ? "PDF wird erstellt …" : <><Download /> <span>Als PDF herunterladen</span></>}
            </button>
          </div>
        </form>

        {sent && (
          <p className="lb-msg ok">
            <Check style={{ width: 16, height: 16, display: "inline", verticalAlign: "-3px", marginRight: 6 }} />
            Dein Bordbuch ist unterwegs an {trip.email}. Schau auch im Spam-Ordner nach, falls es nicht ankommt.
          </p>
        )}
        {error && <p className="lb-msg err">{error}</p>}

        <div className="lb-actions-row" style={{ marginTop: "1.6rem", justifyContent: "space-between" }}>
          <button type="button" onClick={reset} className="lb-save" style={{ background: "none", padding: 0 }}>
            Bordbuch zurücksetzen
          </button>
          {installEvt && (
            <button type="button" className="btn btn-outline" onClick={install} style={{ padding: "0.7rem 1.2rem" }}>
              App installieren
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
