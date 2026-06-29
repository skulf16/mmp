import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import FactBox from "@/components/FactBox";
import FaqSection from "@/components/FaqSection";
import { Icon, ArrowRight, Droplet, Sun } from "@/components/Icons";
import { cabins, equipment, specs, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lagoon 400 S2 mieten – autarker Katamaran",
  description:
    "Die Miss Moneypenny: Lagoon 400 S2 mit 4+2 Kabinen, Wassermacher & Solar. Alle technischen Daten, Ausstattung und Bilder des autarken Katamarans im Überblick.",
  alternates: {
    canonical: "/die-yacht",
    languages: { "de-DE": "/die-yacht", en: "/en/the-yacht", "x-default": "/die-yacht" },
  },
  openGraph: {
    title: "Lagoon 400 S2 mieten – autarker Katamaran | Miss Moneypenny",
    description: "Lagoon 400 S2 mit 4+2 Kabinen, Wassermacher & Solar. Technische Daten, Ausstattung und Galerie der Miss Moneypenny.",
    images: [{ url: "/images/yacht-sailing-coast.jpg", width: 1200, height: 630, alt: "Miss Moneypenny Lagoon 400 S2 unter vollen Segeln an der dalmatinischen Küste" }],
  },
};

const ldProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${siteUrl}/die-yacht#product`,
  "name": "Lagoon 400 S2 Miss Moneypenny – Katamaran-Charter ab Šibenik",
  "description": "Lagoon 400 S2 Katamaran, Baujahr 2016, mit Wassermacher (60 l/h), Solaranlage, Teakdeck, 4 Doppelkabinen mit eigenem Bad + 2 Bugkabinen. Ab Marina Mandalina, Šibenik.",
  "category": "Segelkatamaran / Yachtcharter",
  "brand": { "@type": "Brand", "name": "Lagoon Catamarans" },
  "manufacturer": { "@type": "Organization", "name": "Lagoon Catamarans" },
  "model": "Lagoon 400 S2",
  "productionDate": "2016",
  "image": `${siteUrl}/images/yacht-sailing-coast.jpg`,
  // Harte technische Daten als strukturierte Eigenschaften – genau das,
  // was KI-Modelle für "Welcher Katamaran …?"-Antworten extrahieren.
  "additionalProperty": specs.map((s) => ({
    "@type": "PropertyValue",
    "name": s.label,
    "value": s.value,
  })),
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "2500",
    "highPrice": "5200",
    "priceValidUntil": "2026-12-31",
    "seller": { "@id": "https://chartern-in-kroatien.de/#organization" },
    "availability": "https://schema.org/InStock",
  },
};

const yachtFacts = [
  "Die Miss Moneypenny ist ein Segelkatamaran vom Typ Lagoon 400 S2, Baujahr 2016.",
  "Mit 12 m Länge, 7,25 m Breite und nur 1,30 m Tiefgang erreicht sie auch flache Buchten.",
  "Vier Doppelkabinen mit eigenem Bad plus zwei Bugkabinen bieten Platz für bis zu 8 Gäste.",
  "Wassermacher und Solaranlage machen sie weitgehend wasser- und energieautark.",
  "Heimathafen ist die Marina Mandalina in Šibenik, Kroatien.",
];

const yachtFaqs = [
  {
    q: "Für wie viele Personen ist die Miss Moneypenny ausgelegt?",
    a: "Die Lagoon 400 S2 bietet vier Doppelkabinen plus zwei Bugkabinen und damit komfortabel Platz für bis zu acht Gäste zum Übernachten (tagsüber bis zu zehn Personen). Jede der vier Doppelkabinen hat ein eigenes Bad, insgesamt vier Nasszellen.",
  },
  {
    q: "Was bedeutet „autark“ bei der Miss Moneypenny?",
    a: "An Bord erzeugt ein Wassermacher per Umkehrosmose Süßwasser aus Meerwasser, und eine Solaranlage lädt die Batterien lautlos. Dadurch lässt sich tagelang in einsamen Buchten ankern, ohne Wasser bunkern oder eine Marina ansteuern zu müssen.",
  },
  {
    q: "Welchen Tiefgang hat die Lagoon 400 S2?",
    a: "Der Tiefgang beträgt nur 1,30 Meter. Zusammen mit den zwei Rümpfen erlaubt das, flache Buchten anzulaufen, die für Einrumpfyachten mit tieferem Kiel unzugänglich sind.",
  },
  {
    q: "Ist ein Katamaran auch für Einsteiger und Familien geeignet?",
    a: "Sehr gut sogar. Ein Katamaran liegt stabil im Wasser und krängt kaum – das senkt das Risiko von Seekrankheit deutlich und schafft ein ruhiges Raumgefühl. Auf Wunsch ist ein erfahrener Skipper an Bord, dann ist kein eigener Segelschein nötig.",
  },
  {
    q: "Wo liegt die Yacht und wo startet der Törn?",
    a: "Heimathafen ist die Marina Mandalina in Šibenik. Von dort sind die Kornaten, der Krka-Nationalpark und die Städte Dalmatiens bequem innerhalb einer Woche erreichbar.",
  },
];

const gallery: GalleryImage[] = [
  { src: "/images/yacht-sailing-coast.jpg", alt: "Miss Moneypenny unter Segeln vor der dalmatinischen Küste", span: "wide" },
  { src: "/images/yacht-aerial-village.jpg", alt: "Luftaufnahme des Katamarans vor einem Küstendorf", span: "tall" },
  { src: "/images/yacht-salon.jpg", alt: "Heller Salon mit Pantry und Essbereich" },
  { src: "/images/yacht-galley.jpg", alt: "Voll ausgestattete Pantry mit Meerblick" },
  { src: "/images/yacht-cockpit-dining.jpg", alt: "Cockpit mit gedecktem Frühstückstisch", span: "half" },
  { src: "/images/yacht-cabin.jpg", alt: "Gemütliche Doppelkabine mit Tageslicht", span: "half" },
  { src: "/images/yacht-helm.jpg", alt: "Steuerstand mit B&G-Kartenplotter" },
  { src: "/images/yacht-nav-station.jpg", alt: "Navigationsecke mit Seekarte und Fernglas" },
  { src: "/images/yacht-bathroom.jpg", alt: "Eigenes Bad mit Waschbecken" },
  { src: "/images/yacht-swim-platform.jpg", alt: "Teak-Badeplattform mit Schnorchelausrüstung", span: "tall" },
  { src: "/images/yacht-bow-front.jpg", alt: "Bug des Katamarans mit Trampolinnetzen", span: "wide" },
  { src: "/images/yacht-deck-lagoon.jpg", alt: "Seitendeck der Lagoon 400 S2", span: "half" },
  { src: "/images/yacht-sailing-genoa.jpg", alt: "Katamaran unter Genua vor Inselkulisse", span: "half" },
];

export default function YachtPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldProduct) }}
      />
      <PageHero
        eyebrow="Die Yacht"
        title="Lagoon 400 S2 – Miss Moneypenny"
        lede="Ein Katamaran, der Komfort, Stabilität und echte Autarkie vereint – in gepflegtem Top-Zustand, startklar in Šibenik."
        image="/images/yacht-sailing-coast.jpg"
        imageAlt="Miss Moneypenny unter vollen Segeln auf der Adria"
        crumbs={[{ label: "Start", href: "/" }, { label: "Die Yacht" }]}
      />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={yachtFacts} /></Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Im Überblick</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Großzügig, stabil, unabhängig.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Die Lagoon 400 S2 zählt zu den beliebtesten Fahrtenkatamaranen der Welt –
                  und das aus gutem Grund. Zwei Rümpfe sorgen für Stabilität und Raum,
                  der flache Tiefgang öffnet Buchten, die anderen verschlossen bleiben.
                </p>
                <p>
                  An Bord der Miss Moneypenny treffen helles Holz, ein lichtdurchfluteter
                  Salon und ein geschütztes Cockpit auf durchdachte Technik. Wassermacher
                  und Solaranlage machen sie zur idealen Yacht für lange, entspannte Törns.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Teakdeck</span>
                <span className="tag-pill">Komplette Persenning</span>
                <span className="tag-pill">Standheizung</span>
                <span className="tag-pill">Autopilot</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-aerial-village.jpg" alt="Miss Moneypenny vor Anker, aus der Luft fotografiert" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Technische Daten */}
      <section className="section surface-navy">
        <div className="container">
          <div className="head-flex" style={{ marginBottom: "2.5rem" }}>
            <Reveal as="div" className="head-block">
              <span className="eyebrow on-dark">Technische Daten</span>
              <h2 className="section-title">Daten & Fakten</h2>
            </Reveal>
            <Reveal as="p" delay={1} className="lede" style={{ maxWidth: "34ch" }}>
              Alle wichtigen Eckdaten der Miss Moneypenny auf einen Blick.
            </Reveal>
          </div>
          <Reveal as="dl" className="specs">
            {specs.map((s) => (
              <div className="spec-row" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Layout / Kabinen */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Raumaufteilung</span>
            <h2 className="section-title">Platz für acht – mit Privatsphäre für alle.</h2>
            <p className="lede">
              Vier Doppelkabinen mit eigenem Bad, zwei zusätzliche Bugkabinen und ein
              offener Wohnbereich, der Innen und Außen verschmelzen lässt.
            </p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {cabins.map((c, i) => (
              <Reveal key={c.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={i === 0 ? "bed" : i === 1 ? "users" : i === 2 ? "ship" : "wheel"} /></span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ausstattung */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Ausstattung</span>
            <h2 className="section-title">Durchdacht bis ins Detail.</h2>
          </Reveal>
          <div className="grid-3" style={{ marginTop: "3rem" }}>
            {equipment.map((e, i) => (
              <Reveal key={e.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="feature">
                  <span className="ic"><Icon name={e.icon} /></span>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Autarkie Streifen */}
      <section className="section surface-dark">
        <div className="container">
          <div className="grid-2" style={{ gap: "3rem", alignItems: "center" }}>
            <Reveal as="div" className="feature-min" style={{ borderTop: "none", padding: 0 }}>
              <Droplet className="ic" style={{ width: 40, height: 40 }} />
              <div>
                <h3 style={{ fontSize: "1.5rem" }}>Wassermacher</h3>
                <p>Frisches Süßwasser aus dem Meer – für Unabhängigkeit von jeder Marina.</p>
              </div>
            </Reveal>
            <Reveal as="div" delay={1} className="feature-min" style={{ borderTop: "none", padding: 0 }}>
              <Sun className="ic" style={{ width: 40, height: 40 }} />
              <div>
                <h3 style={{ fontSize: "1.5rem" }}>Solaranlage</h3>
                <p>Lautlose Energie für Tage vor Anker, ganz ohne Generator.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="section">
        <div className="container container-wide">
          <Reveal as="div" className="head-flex" style={{ marginBottom: "2.5rem" }}>
            <div className="head-block">
              <span className="eyebrow">Galerie</span>
              <h2 className="section-title">Einmal an Bord, bitte.</h2>
            </div>
            <Link href="/kontakt" className="link-arrow">Jetzt anfragen <ArrowRight /></Link>
          </Reveal>
          <Reveal as="div">
            <Gallery images={gallery} />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Gut zu wissen vor dem Törn.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={yachtFaqs} id={`${siteUrl}/die-yacht#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-sailing-genoa.jpg" />
    </>
  );
}
