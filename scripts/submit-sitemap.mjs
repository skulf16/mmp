// Reicht die sitemap.xml automatisch bei der Google Search Console ein.
//
// Ohne externe Abhängigkeiten: signiert ein Service-Account-JWT mit Node-Bordmitteln
// (node:crypto), holt sich ein Access-Token und ruft die Search-Console-API auf.
//
// Voraussetzungen (einmalig, siehe scripts/gsc-sitemap-setup.md):
//   1. Google-Cloud-Projekt + "Google Search Console API" aktiviert
//   2. Service-Account mit JSON-Key (Key liegt als gsc-service-account.json im Projekt,
//      ist via .gitignore vom Commit ausgeschlossen)
//   3. Service-Account-E-Mail in der Search Console als Nutzer der Property hinzugefügt
//
// Aufruf:
//   npm run submit-sitemap
//
// Konfiguration per Umgebungsvariablen (alle optional):
//   GSC_KEY_FILE     Pfad zum Service-Account-Key      (Default: ./gsc-service-account.json)
//   GSC_SITEMAP_URL  Voll-URL der Sitemap               (Default: https://chartern-in-kroatien.de/sitemap.xml)
//   GSC_SITE_URL     Property explizit setzen, z. B.
//                    "sc-domain:chartern-in-kroatien.de" (Domain-Property) oder
//                    "https://chartern-in-kroatien.de/"  (URL-Präfix-Property).
//                    Leer lassen → wird automatisch aus den Properties ermittelt.

import crypto from "node:crypto";
import fs from "node:fs";

const KEY_FILE = process.env.GSC_KEY_FILE || "./gsc-service-account.json";
const SITEMAP_URL = process.env.GSC_SITEMAP_URL || "https://chartern-in-kroatien.de/sitemap.xml";
const API = "https://www.googleapis.com/webmasters/v3";
let SITE_URL = process.env.GSC_SITE_URL || "";

const b64url = (input) =>
  Buffer.from(input).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

function loadKey() {
  let raw;
  try {
    raw = fs.readFileSync(KEY_FILE, "utf8");
  } catch (e) {
    fail(`Service-Account-Key nicht lesbar: ${KEY_FILE}\n   ${e.message}\n   → Key dort ablegen oder GSC_KEY_FILE setzen (siehe scripts/gsc-sitemap-setup.md).`);
  }
  const key = JSON.parse(raw);
  if (!key.client_email || !key.private_key) fail(`Key-Datei ${KEY_FILE} enthält kein client_email/private_key.`);
  return key;
}

async function getAccessToken(key) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(
    JSON.stringify({
      iss: key.client_email,
      scope: "https://www.googleapis.com/auth/webmasters",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  );
  const signingInput = `${header}.${claims}`;
  const signature = crypto
    .createSign("RSA-SHA256")
    .update(signingInput)
    .sign(key.private_key)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${signingInput}.${signature}`,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) fail(`Token konnte nicht geholt werden (${res.status}): ${JSON.stringify(data)}`);
  return data.access_token;
}

async function listSites(token) {
  const res = await fetch(`${API}/sites`, { headers: { Authorization: `Bearer ${token}` } });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) fail(`Properties konnten nicht gelesen werden (${res.status}): ${JSON.stringify(data)}`);
  return (data.siteEntry || []).map((s) => s.siteUrl);
}

function resolveSite(sites, domain) {
  // exakte Domain-Property bevorzugen, sonst URL-Präfix mit passendem Host
  return (
    sites.find((s) => s === `sc-domain:${domain}`) ||
    sites.find((s) => {
      try {
        return new URL(s).hostname === domain;
      } catch {
        return false;
      }
    }) ||
    ""
  );
}

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

const key = loadKey();
const token = await getAccessToken(key);

if (!SITE_URL) {
  const domain = new URL(SITEMAP_URL).hostname;
  const sites = await listSites(token);
  SITE_URL = resolveSite(sites, domain);
  if (!SITE_URL) {
    console.error(`❌ Keine passende Search-Console-Property für "${domain}" gefunden.`);
    console.error(`   Für diesen Service-Account (${key.client_email}) verfügbar:`);
    if (sites.length) sites.forEach((s) => console.error(`     • ${s}`));
    else console.error(`     (keine – der Account ist noch keiner Property zugeordnet)`);
    fail(`Service-Account in der GSC unter "Einstellungen → Nutzer und Berechtigungen" als Nutzer der Property hinzufügen (Berechtigung: Inhaber/Vollständig).`);
  }
}

const siteSeg = encodeURIComponent(SITE_URL);
const feedSeg = encodeURIComponent(SITEMAP_URL);

const submit = await fetch(`${API}/sites/${siteSeg}/sitemaps/${feedSeg}`, {
  method: "PUT",
  headers: { Authorization: `Bearer ${token}` },
});
if (!submit.ok) {
  const body = await submit.text();
  fail(`Sitemap-Einreichung fehlgeschlagen (${submit.status}): ${body}`);
}

console.log(`✅ Sitemap eingereicht`);
console.log(`   Sitemap:  ${SITEMAP_URL}`);
console.log(`   Property: ${SITE_URL}`);

// Status zur Bestätigung nachladen (best effort)
const statusRes = await fetch(`${API}/sites/${siteSeg}/sitemaps/${feedSeg}`, {
  headers: { Authorization: `Bearer ${token}` },
});
if (statusRes.ok) {
  const st = await statusRes.json().catch(() => ({}));
  console.log(`   Zuletzt abgerufen: ${st.lastDownloaded || "— (Erstabruf folgt)"}`);
  if (st.contents?.[0]) console.log(`   Eingereichte URLs: ${st.contents[0].submitted ?? "—"}`);
  if (st.errors || st.warnings) console.log(`   Fehler: ${st.errors ?? 0} · Warnungen: ${st.warnings ?? 0}`);
}
