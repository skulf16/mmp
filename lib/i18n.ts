// Leichtgewichtiges i18n-Grundgerüst für den Sprach-Piloten.
//
// Ansatz: Die deutschen Seiten bleiben unverändert am Wurzel-Pfad (Default-Locale).
// Englische Seiten liegen parallel unter /en/. Diese Datei kennt die Zuordnung
// zwischen den Sprachfassungen und liefert die UI-Strings für Header/Footer.
//
// Hinweis: Sobald mehr Sprachen/Seiten dazukommen, lohnt der Umstieg auf eine
// echte [locale]-Segment-Architektur (z. B. next-intl). Für den Piloten genügt das hier.

export type Locale = "de" | "en";
export const locales: Locale[] = ["de", "en"];
export const defaultLocale: Locale = "de";

/** Paare aus deutschem Pfad → englischem Pfad. Nur Seiten, die es auf Englisch gibt. */
export const routePairs: Record<string, string> = {
  "/": "/en",
  "/die-yacht": "/en/the-yacht",
};

const reversePairs: Record<string, string> = Object.fromEntries(
  Object.entries(routePairs).map(([de, en]) => [en, de])
);

/** Ermittelt die Locale aus dem Pfad. /en oder /en/... → en, sonst de. */
export function getLocale(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

/**
 * Liefert zum aktuellen Pfad die Entsprechung in der jeweils anderen Sprache.
 * Existiert keine Übersetzung der konkreten Seite, wird auf die Startseite der
 * anderen Sprache zurückgefallen (sauberer als ein toter Link).
 */
export function alternatePath(pathname: string): { locale: Locale; href: string; hasExact: boolean } {
  if (getLocale(pathname) === "de") {
    const href = routePairs[pathname];
    return { locale: "en", href: href ?? "/en", hasExact: Boolean(href) };
  }
  const href = reversePairs[pathname];
  return { locale: "de", href: href ?? "/", hasExact: Boolean(href) };
}

type NavLink = { label: string; href: string };
type FooterCol = { heading: string; links: NavLink[] };

type Dict = {
  /** vereinfachte Hauptnavigation (nur übersetzte Seiten verlinken) */
  nav: NavLink[];
  cta: string;
  /** Label des Sprach-Buttons (zeigt die Zielsprache) */
  switchTo: string;
  switchAria: string;
  footerAbout: string;
  footerCols: FooterCol[];
  rights: string;
  legal: NavLink[];
};

export const t: Record<Locale, Dict> = {
  de: {
    nav: [], // Deutsch nutzt weiterhin die volle nav aus lib/site.ts (mit Submenüs)
    cta: "Verfügbarkeit anfragen",
    switchTo: "EN",
    switchAria: "Switch to English",
    footerAbout:
      "Autarkes Segelabenteuer auf der kroatischen Adria. Die Lagoon 400 S2 „Miss Moneypenny“ – mit Wassermacher und Solaranlage für grenzenlose Freiheit ab Šibenik.",
    footerCols: [
      {
        heading: "Entdecken",
        links: [
          { label: "Die Yacht", href: "/die-yacht" },
          { label: "Charter-Infos", href: "/charter-infos" },
          { label: "Katamaran mieten", href: "/katamaran-mieten-kroatien" },
          { label: "Skipper-Bordbuch", href: "/bordbuch" },
          { label: "Anfragen", href: "/kontakt" },
        ],
      },
      {
        heading: "Reviere",
        links: [
          { label: "Revier Šibenik", href: "/revier-sibenik" },
          { label: "Kornaten", href: "/segeln-in-den-kornaten" },
          { label: "Städte Dalmatiens", href: "/staedte-dalmatiens" },
        ],
      },
    ],
    rights: "Alle Rechte vorbehalten.",
    legal: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
  en: {
    nav: [{ label: "The Yacht", href: "/en/the-yacht" }],
    cta: "Check availability",
    switchTo: "DE",
    switchAria: "Zur deutschen Version",
    footerAbout:
      "A self-sufficient sailing adventure on the Croatian Adriatic. The Lagoon 400 S2 “Miss Moneypenny” – with watermaker and solar power for boundless freedom from Šibenik.",
    footerCols: [
      {
        heading: "Discover",
        links: [
          { label: "The Yacht", href: "/en/the-yacht" },
          { label: "Request availability", href: "/kontakt" },
        ],
      },
    ],
    rights: "All rights reserved.",
    legal: [
      { label: "Imprint", href: "/impressum" },
      { label: "Privacy", href: "/datenschutz" },
    ],
  },
};
