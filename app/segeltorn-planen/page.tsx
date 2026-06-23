import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ArticleByline from "@/components/ArticleByline";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Icon, ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Segeltörn planen – Die komplette Schritt-für-Schritt-Anleitung | Miss Moneypenny",
  description:
    "Segeltörn planen leicht gemacht: Von der Crew-Zusammenstellung über Reisezeit und Ausrüstung bis zur Buchung – alles, was ihr für einen Kroatien-Törn wissen müsst.",
  openGraph: {
    title: "Segeltörn planen – Schritt-für-Schritt-Anleitung Kroatien",
    description: "In 8 Schritten von der Idee zum Törn: Crew, Reisezeit, Route, Skipper, Packliste und Buchung für Kroatien.",
    images: [{ url: "/images/croatia-map.png", width: 1200, height: 630, alt: "Karte der dalmatinischen Küste – Segelrevier Kroatien ab Šibenik" }],
  },
};

const schritte = [
  {
    nr: "01",
    titel: "Crew & Termin festlegen",
    text: "Wie viele Personen, wann, wie viele Tage? Die Miss Moneypenny bietet 4 Doppelkabinen für bis zu 8 Gäste. Saison: Mai bis Oktober. Hochsaison Juli/August früh buchen.",
    link: null,
  },
  {
    nr: "02",
    titel: "Reisezeit & Wetter verstehen",
    text: "Juni und September sind die goldenen Monate: warm, verlässlicher Maestral, weniger Betrieb. Juli/August heißer und voller. Winde und Wetterregeln kennen.",
    link: { href: "/winde-kroatien", label: "Winde Kroatien" },
  },
  {
    nr: "03",
    titel: "Route grob planen",
    text: "Kornaten oder Städte? Oder beides? Eine Woche reicht für eine Richtung gut – Kornaten-Natur oder Dalmatien-Städte. Törnvorschlag als Ausgangspunkt nutzen.",
    link: { href: "/toernvorschlag-kornaten", label: "Törnvorschlag Kornaten" },
  },
  {
    nr: "04",
    titel: "Mit oder ohne Skipper entscheiden",
    text: "Kein Segelschein? Kein Problem. Mit einem Skipper an Bord ist die Miss Moneypenny auch für Einsteiger buchbar. Skipper kostet ca. 1.000–1.500 €/Woche extra.",
    link: { href: "/segeltorn-kroatien-skipper", label: "Segeln mit Skipper" },
  },
  {
    nr: "05",
    titel: "Packliste & Ausrüstung",
    text: "Eine weiche Reisetasche pro Person (max. 60–70 l), Segelschuhe, Ölzeug. Bettwäsche, Handtücher und Schnorchel sind an Bord. Kroatien-Spezifisches vorab klären.",
    link: { href: "/segeltorn-packliste", label: "Zur Packliste" },
  },
  {
    nr: "06",
    titel: "Proviant & Einkauf planen",
    text: "Großeinkauf am Anreisetag in Šibenik. Frischen Fisch und Brot täglich im Hafen. 2–3 Konoba-Abende einplanen – das gehört zum Erlebnis.",
    link: { href: "/einkaufsliste-segeltorn", label: "Einkaufsliste" },
  },
  {
    nr: "07",
    titel: "Nationalpark-Vignette besorgen",
    text: "Für die Kornaten und Telašćica wird eine Nationalpark-Vignette benötigt. Online vorbestellen ist einfacher als vor Ort kaufen – früh genug erledigen.",
    link: { href: "/ankern-kroatien", label: "Ankern & Regeln" },
  },
  {
    nr: "08",
    titel: "Verfügbarkeit anfragen & buchen",
    text: "Wunschtermin und Crewgröße nennen – wir melden uns innerhalb von 24 Stunden. Nach Bestätigung Crew-Liste einreichen und Anreise abstimmen.",
    link: { href: "/kontakt", label: "Jetzt anfragen" },
  },
];

const ratgeber = [
  { titel: "Segeltörn Packliste", beschr: "Was wirklich ins Gepäck gehört", href: "/segeltorn-packliste", icon: "leaf" as const },
  { titel: "Packliste Kroatien", beschr: "Spezifisch für das Revier", href: "/packliste-segeln-kroatien", icon: "shield" as const },
  { titel: "Einkaufsliste", beschr: "Proviant für eine Woche", href: "/einkaufsliste-segeltorn", icon: "sparkle" as const },
  { titel: "Speiseplan", beschr: "7 Tage Bordküche", href: "/speiseplan-segeltorn", icon: "sun" as const },
  { titel: "Sicherheitseinweisung", beschr: "Checkliste für die Crew", href: "/sicherheitseinweisung-yacht", icon: "anchor" as const },
  { titel: "Winde Kroatien", beschr: "Maestral, Bora & Reisezeit", href: "/winde-kroatien", icon: "wind" as const },
  { titel: "Mit Skipper segeln", beschr: "Ohne Führerschein unterwegs", href: "/segeltorn-kroatien-skipper", icon: "wheel" as const },
  { titel: "Ankern in Kroatien", beschr: "Regeln & beste Buchten", href: "/ankern-kroatien", icon: "waves" as const },
];

const ldHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Segeltörn in Kroatien planen",
  description:
    "In acht Schritten von der Idee zum gebuchten Katamaran-Törn ab Šibenik: Crew, Reisezeit, Route, Skipper, Packliste, Proviant, Nationalpark-Vignette und Buchung.",
  image: "https://chartern-in-kroatien.de/images/croatia-map.png",
  step: schritte.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.titel,
    text: s.text,
  })),
};

export default function SegeltornPlanenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldHowTo) }}
      />
      <PageHero
        eyebrow="Planung"
        title="Segeltörn planen"
        lede="In acht Schritten von der Idee zum Törn: Was ihr wann klären müsst, welche Entscheidungen zuerst fallen und wo die Miss Moneypenny ins Bild kommt."
        image="/images/croatia-map.png"
        imageAlt="Karte der dalmatinischen Küste – Segelrevier ab Šibenik"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/ratgeber" }, { label: "Segeltörn planen" }]}
      />

      <ArticleByline slug="segeltorn-planen" />

      {/* Schritte */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Schritt für Schritt</span>
            <h2 className="section-title">Vom ersten Gedanken zum Ablegen.</h2>
          </Reveal>
          <div className="steps steps-grid" style={{ marginTop: "3rem" }}>
            {schritte.map((s) => (
              <Reveal key={s.nr} as="div" className="step">
                <div style={{ flex: 1 }}>
                  <h3>{s.titel}</h3>
                  <p style={{ marginTop: "0.5rem", fontSize: "0.94rem", color: "var(--text-soft)", lineHeight: 1.6 }}>{s.text}</p>
                  {s.link && (
                    <Link href={s.link.href} className="link-arrow" style={{ marginTop: "1rem", display: "inline-flex", fontSize: "0.88rem" }}>
                      {s.link.label} <ArrowRight />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ratgeber Hub */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Alle Ratgeber</span>
            <h2 className="section-title">Alles was ihr für den Törn braucht.</h2>
          </Reveal>
          <div className="grid-4" style={{ marginTop: "3rem" }}>
            {ratgeber.map((r, i) => (
              <Reveal key={r.titel} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link href={r.href} style={{ display: "block", textDecoration: "none" }}>
                  <article className="feature" style={{ cursor: "pointer", transition: "border-color 0.3s" }}>
                    <span className="ic"><Icon name={r.icon} /></span>
                    <h3 style={{ fontSize: "1rem" }}>{r.titel}</h3>
                    <p style={{ fontSize: "0.88rem" }}>{r.beschr}</p>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Bereit, wenn ihr es seid.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die Miss Moneypenny liegt in der Marina Mandalina, Šibenik –
              bereit für euren Törn in die Kornaten oder entlang der dalmatinischen Küste.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/kontakt" className="btn btn-primary">Verfügbarkeit anfragen</Link>
              <Link href="/charter-infos" className="btn btn-ghost">Charter-Infos & Preise</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand image="/images/yacht-aerial-wide.jpg" />
    </>
  );
}
