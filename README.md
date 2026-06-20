# Miss Moneypenny – Bond Yachting

Relaunch der Website [bond-yachting.de](https://bond-yachting.de) im maritimen Stil
(„edel & ruhig"). Mehrseitige Marketing-Website für den Katamaran-Charter der
Lagoon 400 S2 **Miss Moneypenny** ab Šibenik, Kroatien.

> Der Buchungsfunnel folgt in einem späteren Schritt – diese Version umfasst die
> Website mit allen Inhaltsseiten und ein Anfrage-Formular (öffnet vorbereitete E-Mail).

## Tech-Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- Eigenes CSS-Designsystem (`app/globals.css`) – keine UI-Library
- Schriften: **Fraunces** (Display) + **Mulish** (Text) via `next/font`
- Bilder: aus der bestehenden Website übernommen (`public/images/`)

## Lokal starten

> Hinweis: In dieser Umgebung ist Node nicht global installiert. Es liegt lokal unter
> `~/.local/node-v24.17.0-darwin-arm64/bin`. Diesen Pfad ggf. dem `PATH` voranstellen:
> `export PATH="$HOME/.local/node-v24.17.0-darwin-arm64/bin:$PATH"`

```bash
npm install        # Abhängigkeiten installieren
npm run dev        # Entwicklungsserver (http://localhost:3000)
npm run build      # Production-Build
npm run start      # Production-Server
```

## Seitenstruktur

| Seite | Pfad |
|-------|------|
| Start | `/` |
| Die Yacht | `/die-yacht` |
| Charter-Infos & Preise | `/charter-infos` |
| Revier Šibenik | `/revier-sibenik` |
| Segeln in den Kornaten | `/segeln-in-den-kornaten` |
| Städte Dalmatiens | `/staedte-dalmatiens` |
| Katamaran mieten Kroatien | `/katamaran-mieten-kroatien` |
| Kontakt / Anfrage | `/kontakt` |
| Impressum / Datenschutz | `/impressum`, `/datenschutz` |

## Projektstruktur

```
app/            Seiten (App Router) + globales CSS, Layout, sitemap/robots
components/     Header, Footer, PageHero, CtaBand, Gallery, Faq, ContactForm, Icons …
lib/site.ts     Zentrale Inhalte/Daten (Navigation, Specs, Reviere, FAQ, Preise …)
public/images/  Übernommene Bilder der bestehenden Website
_harvest/       Quell-Backup aller heruntergeladenen Originalbilder (gitignored)
```

## Noch zu erledigen (vor dem Go-Live)

- **Impressum & Datenschutz** mit echten, rechtssicheren Angaben füllen (aktuell Platzhalter).
- **Charterpreise** in `app/charter-infos/page.tsx` / `lib/site.ts` durch verbindliche Werte ersetzen.
- **Kontaktdaten** (`lib/site.ts`: `email`, `phone`, `base`) prüfen/aktualisieren.
- Echte Yacht-Fotos ggf. gegen die übernommenen austauschen (gleiche Dateinamen in `public/images/`).
- Buchungsfunnel anbinden (Platzhalter-Hinweis auf der Kontaktseite).

## Design-Tokens (Auszug)

- Navy/Ink: `#061821` – `#0b2f3e`  ·  Sand/Ivory: `#f6f1e7` / `#efe6d6`  ·  Messing: `#c5a36a`
- Alle Tokens als CSS-Variablen am Anfang von `app/globals.css`.
