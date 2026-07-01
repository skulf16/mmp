# Serverseitiges Tracking – Server-Side GTM auf Hetzner/Coolify

Anleitung, um einen **serverseitigen Google Tag Manager (sGTM)** auf dem
Hetzner-Server via Coolify zu betreiben. Ergebnis: GA4 und Google Ads laufen
first-party über `sst.chartern-in-kroatien.de` – resistent gegen Ad-Blocker
und Safari-ITP, mit den Tracking-Daten unter eigener Kontrolle in der EU.

> Die Website selbst (Next.js) bleibt auf All-Inkl. Nur die Tracking-Subdomain
> zeigt auf Hetzner. Der Repo-Code ist bereits vorbereitet (siehe unten).

---

## Architektur in einem Satz

Browser → `sst.chartern-in-kroatien.de` (sGTM auf Hetzner) → GA4 / Google Ads.
Der Web-Container (GTM-XXXX) im Browser schickt die Events an die Subdomain,
der Server-Container leitet sie an Google weiter.

---

## Schritt 1 – GTM-Container in der GTM-Oberfläche anlegen

1. In [tagmanager.google.com](https://tagmanager.google.com) das Konto öffnen.
2. **Web-Container** anlegen (Ziel „Web") → ID der Form `GTM-XXXXXXX`. Diese ID
   kommt später in die Env-Variable `NEXT_PUBLIC_GTM_ID`.
3. **Server-Container** anlegen (Ziel „Server").
4. Im Server-Container: **Container-Einstellungen → „Manuell bereitstellen"**.
   Dort wird der **Container-Config-String** angezeigt (lange Zeichenkette).
   → Das ist der Wert für `CONTAINER_CONFIG`. Kopieren und sicher ablegen.

---

## Schritt 2 – DNS bei All-Inkl setzen

In der DNS-Zone von `chartern-in-kroatien.de` (KAS-Verwaltung) zwei A-Records
auf die **öffentliche IP des Hetzner-Servers** anlegen:

| Name          | Typ | Ziel               |
|---------------|-----|--------------------|
| `sst`         | A   | `<Hetzner-IP>`     |
| `sst-preview` | A   | `<Hetzner-IP>`     |

(Falls IPv6 gewünscht, zusätzlich AAAA-Records auf die IPv6 des Servers.)
Kurz warten, bis die Auflösung greift (`dig sst.chartern-in-kroatien.de`).

---

## Schritt 3 – sGTM in Coolify deployen

In Coolify ein neues Projekt → **Resource → Docker Compose** anlegen und
folgende Compose-Datei einfügen. Zwei Services: der eigentliche Tagging-Server
und der Preview-Server (für den GTM-Debug-Modus).

Die Domain-Zuweisung ist über die Coolify-Magic-Variable
`SERVICE_FQDN_<SERVICE>_<PORT>` direkt in die Compose gebacken (überlebt
Redeploys, kein Klicken in der UI nötig). Der Wert ist die feste Domain, die
Zahl der interne Container-Port – TLS terminiert Traefik weiterhin auf 443.

```yaml
services:
  tagging:
    image: gcr.io/cloud-tagging-10302018/gtm-cloud-image:stable
    restart: unless-stopped
    environment:
      # Domain → Service tagging, interner Port 8080 (Traefik + Let's Encrypt)
      SERVICE_FQDN_TAGGING_8080: "https://sst.chartern-in-kroatien.de"
      # Container-Config-String aus dem GTM-Server-Container (Schritt 1.4)
      CONTAINER_CONFIG: "${CONTAINER_CONFIG}"
      # HTTPS-URL des Preview-Servers (Schritt 2)
      PREVIEW_SERVER_URL: "https://sst-preview.chartern-in-kroatien.de"
    # KEIN Docker-healthcheck: das sGTM-Image bringt weder wget noch curl mit,
    # ein solcher Check meldet fälschlich "unhealthy" → Traefik antwortet mit 503.
    # Coolify überwacht die Container-Liveness selbst.

  preview:
    image: gcr.io/cloud-tagging-10302018/gtm-cloud-image:stable
    restart: unless-stopped
    environment:
      SERVICE_FQDN_PREVIEW_8080: "https://sst-preview.chartern-in-kroatien.de"
      CONTAINER_CONFIG: "${CONTAINER_CONFIG}"
      RUN_AS_PREVIEW_SERVER: "true"
    # KEIN Docker-healthcheck: das sGTM-Image bringt weder wget noch curl mit,
    # ein solcher Check meldet fälschlich "unhealthy" → Traefik antwortet mit 503.
    # Coolify überwacht die Container-Liveness selbst.
```

> **Kein `ports:`-Mapping** ergänzen – das würde Host-Ports binden und mit
> Traefik kollidieren. Der Port wird ausschließlich über `SERVICE_FQDN_..._8080`
> (bzw. das Domain-Feld in der UI) vermittelt.

Danach:

1. Unter **Environment Variables** `CONTAINER_CONFIG` mit dem String aus
   Schritt 1.4 hinterlegen, per Schloss als **„Locked Secret"** markieren.
2. Domains sind bereits über `SERVICE_FQDN_...` gesetzt. Alternativ in der UI je
   Service unter **Domains** eintragen – mit Port-Suffix für den Container-Port:
   `https://sst.chartern-in-kroatien.de:8080` bzw.
   `https://sst-preview.chartern-in-kroatien.de:8080`.
3. **Wichtig:** Die DNS-A-Records (Schritt 2) müssen bereits auf die Server-IP
   auflösen, sonst schlägt die Zertifikatsausstellung fehl.
4. **Deploy**. Coolify holt das Image, Traefik stellt automatisch
   Let's-Encrypt-Zertifikate für beide Subdomains aus.

**Verifikation:**
- `https://sst.chartern-in-kroatien.de/healthy` → HTTP 200.
- Im GTM-Server-Container „Vorschau" starten → der Debug-Modus muss sich über
  `sst-preview…` verbinden und Requests anzeigen.

---

## Schritt 4 – Web-Container auf den Server-Container zeigen

Im **Web-Container** (GTM-XXXX):

1. **„Google-Tag"** anlegen (Tag-Typ „Google-Tag" – hat 2024 den früheren
   Typ „Google Analytics: GA4-Konfiguration" abgelöst). Tag-ID =
   `G-D5PXZXJWTC`. Unter **Konfigurationseinstellungen** einen Parameter
   `server_container_url` = `https://sst.chartern-in-kroatien.de` ergänzen.
   GA4-Ereignisse laufen separat über den Tag-Typ „Google Analytics:
   GA4-Ereignis" und verweisen auf diesen Google-Tag.
2. **Consent-Einstellungen**: Der GA4-Tag und die Google-Ads-Tags werden auf die
   passenden Consent-Signale gesetzt (`analytics_storage` bzw. `ad_storage`,
   `ad_user_data`, `ad_personalization`). Consent Mode v2 liefert die Website
   bereits (siehe `components/Analytics.tsx`).
3. **Google-Ads-Conversion-Tracking-Tag** + **Conversion-Linker** ergänzen,
   Auslöser = Custom Event `generate_lead` (das die Website beim Absenden des
   Anfrageformulars pusht). Für **Enhanced Conversions** die `user_data`-Felder
   aus dem dataLayer (E-Mail/Telefon) mappen.

Im **Server-Container** entsprechende GA4- und Google-Ads-Clients/Tags
aktivieren, damit die eingehenden Events weitergeleitet werden.

---

## Schritt 5 – Website-Env-Variablen setzen

Im Deployment der Next.js-Seite (All-Inkl) diese Variablen setzen und neu bauen:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GTM_LOADER_URL=https://sst.chartern-in-kroatien.de
```

Danach lädt die Seite GTM first-party über die eigene Subdomain. Vorlage:
siehe `.env.example`. Solange `NEXT_PUBLIC_GTM_ID` leer ist, läuft der
GA4-Direkt-Fallback (consent-gated) weiter – es entsteht keine Tracking-Lücke.

---

## Betrieb / Wartung

- **Image-Updates:** Google aktualisiert `:stable` regelmäßig. In Coolify
  „Redeploy" (bzw. Auto-Update per Schedule) einplanen, damit der Container
  aktuell bleibt.
- **Monitoring:** Health-Check `/healthy` überwacht Coolify automatisch und
  startet bei Ausfall neu. Optional einen Uptime-Check auf
  `https://sst.chartern-in-kroatien.de/healthy` legen – fällt der Container aus,
  fehlen sonst still Tracking-Daten.
- **Ressourcen:** Der Container braucht ~256–512 MB RAM; eine kleine
  Hetzner-Instanz genügt für die Traffic-Menge locker.

---

## Referenz

- Offizielle Doku (verifiziert): Image `gcr.io/cloud-tagging-10302018/gtm-cloud-image:stable`,
  Env `CONTAINER_CONFIG`, `PREVIEW_SERVER_URL`, `RUN_AS_PREVIEW_SERVER`,
  optional `PORT` (Default 8080), Health-Check-Pfad `/healthy`.
- <https://developers.google.com/tag-platform/tag-manager/server-side/manual-setup-guide>
