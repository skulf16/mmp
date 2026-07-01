/**
 * Zentrale Analytics-/Tracking-Konfiguration.
 *
 * Alle Werte kommen aus NEXT_PUBLIC_-Env-Variablen (build-time inline).
 * Reihenfolge der Auswertung im Client (siehe components/Analytics.tsx):
 *   1. Ist eine GTM-Container-ID gesetzt → Google Tag Manager laden
 *      (GA4 + Google Ads werden im GTM-Web-Container konfiguriert und an
 *      den serverseitigen Container geschickt).
 *   2. Sonst Fallback: GA4 direkt per gtag (Übergang, bis GTM live ist).
 *
 * In beiden Fällen greift Google Consent Mode v2 – vor dem Laden wird alles
 * auf „denied" gesetzt, der Cookie-Banner gibt nach Einwilligung frei.
 */
export const analytics = {
  /** GTM-Web-Container-ID, z. B. "GTM-XXXXXXX". Leer = GTM aus. */
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",

  /**
   * GA4-Mess-ID für den Direkt-Fallback, solange kein GTM konfiguriert ist.
   * Default = bestehende Property, damit die Messung ohne Env-Änderung
   * weiterläuft (jetzt aber consent-gated). Auf "" setzen, um sie abzuschalten.
   */
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "G-D5PXZXJWTC",

  /**
   * First-Party-Loader-Origin des serverseitigen GTM-Containers,
   * z. B. "https://sst.chartern-in-kroatien.de". Von dort werden gtm.js /
   * gtag/js / ns.html ausgeliefert → umgeht Ad-Blocker & Safari-ITP.
   * Leer = Google-CDN (www.googletagmanager.com).
   */
  gtmLoaderUrl: process.env.NEXT_PUBLIC_GTM_LOADER_URL ?? "",
} as const;

/** Origin, von dem GTM/gtag geladen werden (First-Party bevorzugt). */
export const tagLoaderOrigin =
  analytics.gtmLoaderUrl || "https://www.googletagmanager.com";

/** localStorage-Key, unter dem die Einwilligung gespeichert wird. */
export const CONSENT_STORAGE_KEY = "cik-consent-v1";

/** Custom-Event, mit dem der Footer-Link den Banner erneut öffnet. */
export const CONSENT_REOPEN_EVENT = "cik:open-consent";

export type ConsentChoice = {
  /** analytics_storage (GA4) */
  analytics: boolean;
  /** ad_storage + ad_user_data + ad_personalization (Google Ads) */
  ads: boolean;
};
