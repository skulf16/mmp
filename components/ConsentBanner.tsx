"use client";

import { useEffect, useState } from "react";
import {
  CONSENT_STORAGE_KEY,
  CONSENT_REOPEN_EVENT,
  type ConsentChoice,
} from "@/lib/analytics";

/** Schreibt die Einwilligung an Google Consent Mode v2. */
function pushConsent(c: ConsentChoice) {
  const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (typeof g !== "function") return;
  g("consent", "update", {
    ad_storage: c.ads ? "granted" : "denied",
    ad_user_data: c.ads ? "granted" : "denied",
    ad_personalization: c.ads ? "granted" : "denied",
    analytics_storage: c.analytics ? "granted" : "denied",
  });
}

export default function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [ads, setAds] = useState(true);

  useEffect(() => {
    let hasChoice = false;
    try {
      const saved = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (saved) {
        hasChoice = true;
        const c = JSON.parse(saved) as ConsentChoice;
        setAnalytics(!!c.analytics);
        setAds(!!c.ads);
      }
    } catch {
      /* localStorage nicht verfügbar → Banner zeigen */
    }
    if (!hasChoice) setOpen(true);

    const reopen = () => {
      setPrefs(true);
      setOpen(true);
    };
    window.addEventListener(CONSENT_REOPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, reopen);
  }, []);

  const persist = (c: ConsentChoice) => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(c));
    } catch {
      /* ignore */
    }
    pushConsent(c);
    setOpen(false);
    setPrefs(false);
  };

  const acceptAll = () => persist({ analytics: true, ads: true });
  const rejectAll = () => persist({ analytics: false, ads: false });
  const saveSelection = () => persist({ analytics, ads });

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie-Einwilligung"
      style={{
        position: "fixed",
        insetInline: 0,
        bottom: 0,
        zIndex: 2000,
        display: "flex",
        justifyContent: "center",
        padding: "clamp(0.75rem, 2vw, 1.5rem)",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          pointerEvents: "auto",
          width: "min(680px, 100%)",
          background: "var(--navy-800)",
          color: "var(--paper)",
          border: "1px solid rgba(197,163,106,0.35)",
          borderRadius: "var(--radius)",
          boxShadow: "var(--shadow-card)",
          padding: "clamp(1.2rem, 3vw, 1.75rem)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-fraunces, serif)",
            fontSize: "1.15rem",
            color: "#fff",
            margin: 0,
          }}
        >
          Wir respektieren Ihre Privatsphäre
        </h2>
        <p style={{ fontSize: "0.92rem", lineHeight: 1.55, margin: "0.6rem 0 0", opacity: 0.9 }}>
          Wir verwenden Cookies und ähnliche Technologien, um die Nutzung unserer
          Website zu analysieren (Google Analytics) und die Wirkung unserer
          Werbung zu messen (Google Ads). Technisch notwendige Dienste sind immer
          aktiv. Sie können frei entscheiden und Ihre Wahl jederzeit im Footer
          unter „Cookie-Einstellungen" ändern. Details in unserer{" "}
          <a href="/datenschutz" style={{ color: "var(--brass-300)", textDecoration: "underline" }}>
            Datenschutzerklärung
          </a>
          .
        </p>

        {prefs && (
          <div style={{ margin: "1rem 0 0.25rem", display: "grid", gap: "0.65rem" }}>
            <label style={rowStyle}>
              <span>
                <strong style={{ color: "#fff" }}>Notwendig</strong>
                <br />
                <span style={{ opacity: 0.75, fontSize: "0.82rem" }}>
                  Für den Betrieb der Seite erforderlich – immer aktiv.
                </span>
              </span>
              <input type="checkbox" checked disabled aria-label="Notwendig (immer aktiv)" />
            </label>
            <label style={rowStyle}>
              <span>
                <strong style={{ color: "#fff" }}>Statistik</strong>
                <br />
                <span style={{ opacity: 0.75, fontSize: "0.82rem" }}>
                  Google Analytics – anonyme Reichweitenmessung.
                </span>
              </span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                aria-label="Statistik erlauben"
              />
            </label>
            <label style={rowStyle}>
              <span>
                <strong style={{ color: "#fff" }}>Marketing</strong>
                <br />
                <span style={{ opacity: 0.75, fontSize: "0.82rem" }}>
                  Google Ads – Messung des Werbeerfolgs.
                </span>
              </span>
              <input
                type="checkbox"
                checked={ads}
                onChange={(e) => setAds(e.target.checked)}
                aria-label="Marketing erlauben"
              />
            </label>
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
            marginTop: "1.1rem",
            justifyContent: "flex-end",
          }}
        >
          {prefs ? (
            <button type="button" onClick={saveSelection} style={ghostBtn}>
              Auswahl speichern
            </button>
          ) : (
            <button type="button" onClick={() => setPrefs(true)} style={ghostBtn}>
              Einstellungen
            </button>
          )}
          <button type="button" onClick={rejectAll} style={ghostBtn}>
            Ablehnen
          </button>
          <button type="button" onClick={acceptAll} style={primaryBtn}>
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

const rowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "0.6rem 0.8rem",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "var(--radius)",
  fontSize: "0.9rem",
};

const baseBtn: React.CSSProperties = {
  cursor: "pointer",
  borderRadius: "var(--radius)",
  padding: "0.6rem 1.1rem",
  fontSize: "0.9rem",
  fontWeight: 600,
  border: "1px solid rgba(197,163,106,0.5)",
  transition: "background 0.2s, color 0.2s",
};

const ghostBtn: React.CSSProperties = {
  ...baseBtn,
  background: "transparent",
  color: "var(--brass-300)",
};

const primaryBtn: React.CSSProperties = {
  ...baseBtn,
  background: "var(--brass)",
  color: "var(--ink)",
  border: "1px solid var(--brass)",
};
