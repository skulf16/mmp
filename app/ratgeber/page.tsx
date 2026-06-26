import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Ratgeber Segeln Kroatien – Tipps, Routen & Wetter",
  description:
    "Alles für den Segeltörn in Kroatien: Törnplanung, die Winde der Adria und alles an Bord – von Packliste bis Bordküche. Praxiswissen von der Miss Moneypenny.",
  openGraph: {
    title: "Ratgeber Segeln Kroatien – Törnplanung, Winde & Bordwissen",
    description: "Praktische Ratgeber für den Kroatien-Törn: Planung, Winde, Packlisten und Bordtipps aus erster Hand.",
    images: [{ url: "/images/yacht-sailing-genoa.jpg", width: 1200, height: 630, alt: "Katamaran unter vollen Segeln auf der Adria" }],
  },
};

type Artikel = { href: string; title: string; text: string };

const kategorien: { label: string; slug: string; artikel: Artikel[] }[] = [
  {
    label: "Törnplanung",
    slug: "toernplanung",
    artikel: [
      {
        href: "/segeltorn-planen",
        title: "Segeltörn planen",
        text: "In 8 Schritten von der Idee zum gebuchten Törn – Crew, Reisezeit, Route, Skipper und Packliste.",
      },
      {
        href: "/familien-segeltorn-kroatien",
        title: "Familien-Segeltörn Kroatien",
        text: "Segeln mit Kindern auf dem Katamaran: warum das geschützte Revier um Šibenik ideal für Familien ist.",
      },
      {
        href: "/kroatien-inselhopping",
        title: "Kroatien Inselhopping",
        text: "Von Insel zu Insel mit dem Katamaran: Warum das Revier zwischen Šibenik und Korčula ideal dafür ist.",
      },
      {
        href: "/segeltorn-kroatien-skipper",
        title: "Segeltörn mit Skipper",
        text: "Kroatien segeln ohne eigenen Schein – mit erfahrenem Skipper entspannt und sicher unterwegs.",
      },
    ],
  },
  {
    label: "Routen & Reviere",
    slug: "routen-reviere",
    artikel: [
      {
        href: "/segeltorn-routen-kroatien",
        title: "Die 7 schönsten Segeltörn-Routen",
        text: "Von den Kornaten über Mittel- und Süddalmatien bis Istrien – die schönsten Routen mit Dauer, Highlights und Eignung.",
      },
      {
        href: "/segeltorn-ab-split",
        title: "Segeltörn ab Split (7 Tage)",
        text: "Eine 7-Tage-Route durch Mitteldalmatien Tag für Tag – Trogir, Šolta, Hvar, Vis und Brač mit Etappen und Tipps.",
      },
      {
        href: "/dalmatien-segeln-route",
        title: "Segeln in Dalmatien",
        text: "Nord-, Mittel- und Süddalmatien im Überblick: wichtigste Häfen, Marinas, Inseln und Highlights fürs Revier.",
      },
      {
        href: "/segelrevier-kroatien",
        title: "Segelrevier Kroatien: Nord vs. Süd",
        text: "Istrien, Kvarner und Dalmatien im Vergleich – wo es sich am besten startet und welches Revier zu euch passt.",
      },
      {
        href: "/istrien-segeln",
        title: "Segeln in Istrien",
        text: "Das unterschätzte Revier der Nordadria: Pula, Rovinj, Brijuni und der Limski-Kanal – Häfen, Winde und Tipps.",
      },
    ],
  },
  {
    label: "Planung & Kosten",
    slug: "planung-kosten",
    artikel: [
      {
        href: "/segeltorn-kroatien-kosten",
        title: "Was kostet ein Segeltörn?",
        text: "Echte Kalkulation: Charter, Skipper, Kaution, Sprit, Liegegebühren und Vignetten – mit Beispielrechnung pro Woche.",
      },
      {
        href: "/yachtcharter-nebenkosten-kroatien",
        title: "Nebenkosten beim Yachtcharter",
        text: "Endreinigung, Transitlog, Kurtaxe, Mooring und Kaution erklärt – was inklusive ist und was extra dazukommt.",
      },
      {
        href: "/marina-liegeplatz-preise-kroatien",
        title: "Marina-Liegeplätze & Preise",
        text: "Alle Marinas ab Šibenik bis Split/Trogir mit Liegeplatz-Richtwerten für den Katamaran – inklusive Mehrrumpf-Aufschlag.",
      },
      {
        href: "/beste-reisezeit-segeln-kroatien",
        title: "Beste Reisezeit – Monat für Monat",
        text: "Mai bis Oktober im Detail: Wetter, Wassertemperatur, Wind und Betrieb – und warum Juni und September ideal sind.",
      },
    ],
  },
  {
    label: "Führerschein & Crew",
    slug: "fuehrerschein-crew",
    artikel: [
      {
        href: "/bootsfuehrerschein-kroatien",
        title: "Welcher Bootsführerschein?",
        text: "Welche Lizenz und welches Funkzeugnis ihr fürs Bareboat-Chartern braucht – und wie es ganz ohne Schein geht.",
      },
      {
        href: "/sportbootfuehrerschein-kroatien",
        title: "Sportbootführerschein (SBF See)",
        text: "Warum der SBF See die Basis fürs Chartern ist und wie er mit SKS und Funkzeugnis SRC/UBI zusammenspielt.",
      },
      {
        href: "/yachtcharter-ohne-fuehrerschein-kroatien",
        title: "Chartern ohne Führerschein",
        text: "Ohne eigenen Schein in Kroatien segeln? Mit Skipper kein Problem – Ablauf, Kosten und was ihr selbst übernehmt.",
      },
    ],
  },
  {
    label: "Wetter & Winde",
    slug: "wetter-und-winde",
    artikel: [
      {
        href: "/winde-kroatien",
        title: "Winde in Kroatien – Überblick",
        text: "Maestral, Bora und Jugo auf einen Blick: Stärke, Richtung, Jahreszeit und Seglertipps.",
      },
      {
        href: "/maestral-wind",
        title: "Maestral Wind",
        text: "Der verlässlichste Segelwind der Adria: Entstehung, Tagesrhythmus und wie ihr ihn im Törn nutzt.",
      },
      {
        href: "/bora-kroatien",
        title: "Bora in Kroatien",
        text: "Der katabatische Fallwind aus dem Norden – Warnsignale, Stärken und die besten Schutzorte.",
      },
      {
        href: "/jugo-wind-kroatien",
        title: "Jugo Wind Kroatien",
        text: "Warm, feucht, hartnäckig: der Jugo baut langen Seegang auf – Warnsignale und Strategie.",
      },
    ],
  },
  {
    label: "Buchten & Ankern",
    slug: "buchten-ankern",
    artikel: [
      {
        href: "/ankerbuchten-kroatien",
        title: "Die schönsten Ankerbuchten",
        text: "Von Telašćica über die Kornaten bis zu den Inseln Mitteldalmatiens – die schönsten Buchten und was sie besonders macht.",
      },
      {
        href: "/ankern-kroatien",
        title: "Ankern in Kroatien",
        text: "Regeln, Nationalpark-Vignetten, Gebühren, Bojenpflicht und die besten Ankerspots ab Šibenik.",
      },
    ],
  },
  {
    label: "An Bord & Proviant",
    slug: "an-bord",
    artikel: [
      {
        href: "/packliste-segeln-kroatien",
        title: "Packliste Segeln Kroatien",
        text: "Was ihr speziell für Kroatien braucht – Sonne, Maestral-Kälte, Schnorcheln und Bordleben.",
      },
      {
        href: "/segeltorn-packliste",
        title: "Segeltörn Packliste",
        text: "Die vollständige Packliste: was wirklich an Bord gehört und was ihr getrost zuhause lassen könnt.",
      },
      {
        href: "/einkaufsliste-segeltorn",
        title: "Einkaufsliste Segeltörn",
        text: "Proviant für eine Woche auf dem Wasser – Mengenangaben, Bordküchentauglichkeit und Einkaufstipps.",
      },
      {
        href: "/speiseplan-segeltorn",
        title: "Speiseplan Segeltörn",
        text: "7 Tage Bordküche: schnelle, leckere Gerichte, die auch bei Schräglage funktionieren.",
      },
      {
        href: "/apps-fuer-segler",
        title: "Apps für Segler",
        text: "Navigation, Wetter, Ankerwache und Bojenreservierung – die besten Apps für den Kroatien-Törn.",
      },
      {
        href: "/sicherheitseinweisung-yacht",
        title: "Sicherheitseinweisung Yacht",
        text: "Checkliste für die Crew-Einweisung: Sicherheitsausrüstung, MOB, Notfall und Bordroutinen.",
      },
    ],
  },
];

export default function RatgeberPage() {
  return (
    <>
      <PageHero
        eyebrow="Ratgeber"
        title="Alles für den Kroatien-Törn"
        lede="Praktische Guides aus der Bordrealität – von der Törnplanung über die Winde der Adria bis zur Bordküche. Konkrete Reviere und Routen findet ihr im Menü unter „Reviere“."
        image="/images/yacht-sailing-genoa.jpg"
        imageAlt="Katamaran unter vollen Segeln auf der Adria"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber" }]}
      />

      {kategorien.map((kat) => (
        <section key={kat.slug} id={kat.slug} className="section" style={{ scrollMarginTop: "96px" }}>
          <div className="container">
            <Reveal as="div">
              <span className="eyebrow">{kat.label}</span>
            </Reveal>

            <div
              style={{
                marginTop: "1.8rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
                gap: "1px",
                background: "var(--sand-line)",
                border: "1px solid var(--sand-line)",
              }}
            >
              {kat.artikel.map((a, i) => (
                <Reveal key={a.href} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <Link
                    href={a.href}
                    style={{
                      display: "block",
                      padding: "1.6rem 1.8rem",
                      background: "var(--surface-base, #fff)",
                      textDecoration: "none",
                      transition: "background 0.15s",
                    }}
                    className="ratgeber-card"
                  >
                    <h2
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--navy-900)",
                        marginBottom: "0.5rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {a.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-soft)",
                        lineHeight: 1.55,
                        margin: 0,
                      }}
                    >
                      {a.text}
                    </p>
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: "1rem",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--brass-600)",
                      }}
                    >
                      Lesen →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand image="/images/yacht-sailing-genoa.jpg" />
    </>
  );
}
