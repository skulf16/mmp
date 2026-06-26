# Sitemap automatisch bei der Google Search Console einreichen

Das Script `scripts/submit-sitemap.mjs` reicht `sitemap.xml` per API ein – ohne externe
Abhängigkeiten. Die folgenden Schritte sind **einmalig** nötig (nur du kannst sie machen,
weil sie deinen Google-Account betreffen).

## 1. Google-Cloud-Projekt & API

1. Auf <https://console.cloud.google.com/> ein Projekt anlegen (oder ein bestehendes nutzen).
2. Unter **APIs & Dienste → Bibliothek** die **„Google Search Console API"** suchen und **aktivieren**.

## 2. Service-Account + JSON-Key

1. **APIs & Dienste → Anmeldedaten → Anmeldedaten erstellen → Dienstkonto**.
2. Namen vergeben (z. B. `sitemap-submitter`), erstellen. Rollen können leer bleiben.
3. Das Dienstkonto öffnen → Tab **Schlüssel → Schlüssel hinzufügen → Neuen Schlüssel erstellen → JSON**.
4. Die heruntergeladene Datei im Projekt-Root als **`gsc-service-account.json`** ablegen.
   (Sie ist über `.gitignore` vom Commit ausgeschlossen – Key niemals committen.)
5. Die **`client_email`** aus der JSON-Datei kopieren (Form: `…@…iam.gserviceaccount.com`).

## 3. Service-Account in der Search Console freischalten

1. In der **Search Console** die Property `chartern-in-kroatien.de` öffnen.
2. **Einstellungen → Nutzer und Berechtigungen → Nutzer hinzufügen**.
3. Die **`client_email`** des Service-Accounts eintragen, Berechtigung **„Inhaber"** (oder „Vollständig").

## 4. Einreichen

```bash
npm run submit-sitemap
```

Das Script ermittelt die passende Property automatisch und reicht
`https://chartern-in-kroatien.de/sitemap.xml` ein. Erfolg:

```
✅ Sitemap eingereicht
   Sitemap:  https://chartern-in-kroatien.de/sitemap.xml
   Property: sc-domain:chartern-in-kroatien.de
```

### Optionale Umgebungsvariablen

| Variable          | Default                                          | Zweck |
|-------------------|--------------------------------------------------|-------|
| `GSC_KEY_FILE`    | `./gsc-service-account.json`                     | Pfad zum Key |
| `GSC_SITEMAP_URL` | `https://chartern-in-kroatien.de/sitemap.xml`    | Sitemap-URL |
| `GSC_SITE_URL`    | _(auto-erkannt)_                                 | Property explizit setzen, falls die Auto-Erkennung scheitert: `sc-domain:chartern-in-kroatien.de` (Domain-Property) **oder** `https://chartern-in-kroatien.de/` (URL-Präfix-Property) |

## Gut zu wissen

- **Pro neuer Unterseite musst du das nicht erneut tun** – Google liest die einmal eingereichte
  Sitemap regelmäßig neu ein. Das Script ist v. a. fürs **erstmalige** Registrieren bzw. ein
  bewusstes Antippen nach größeren Änderungen gedacht.
- Die Search-Console-API kann **keine** „Indexierung für eine einzelne URL beantragen" – das geht
  nur manuell (URL-Prüfung) oder über die Indexing-API, die Google offiziell nur für JobPosting/
  BroadcastEvent freigibt.
- **Voll automatisch beim Deploy:** lässt sich über eine GitHub Action realisieren, die nach dem
  Deploy `npm run submit-sitemap` ausführt – der Key liegt dann als GitHub-Secret. Sag Bescheid,
  dann richte ich die Action ein.
