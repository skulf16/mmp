import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import FactBox from "@/components/FactBox";
import FaqSection from "@/components/FaqSection";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import { ArrowRight, Droplet, Sun } from "@/components/Icons";
import { specs, siteUrl } from "@/lib/site";
import SmoothScroll from "@/components/cine/SmoothScroll";
import ScrubHero from "@/components/cine/ScrubHero";
import Parallax from "@/components/cine/Parallax";
import PinnedTriptych from "@/components/cine/PinnedTriptych";
import FilmFacade from "@/components/cine/FilmFacade";
import CountUp from "@/components/cine/CountUp";

const IMG = "/images/yacht";

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
    images: [{ url: `${IMG}/hero-sailing.jpg`, width: 1200, height: 630, alt: "Miss Moneypenny Lagoon 400 S2 unter vollen Segeln zwischen den Inseln Dalmatiens" }],
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
  "image": `${siteUrl}${IMG}/hero-sailing.jpg`,
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

// Breadcrumb-Schema – sonst von PageHero geliefert, hier eigenständig, da der
// Cinematic-Hero PageHero ersetzt.
const ldBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Start", "item": `${siteUrl}/` },
    { "@type": "ListItem", "position": 2, "name": "Die Yacht" },
  ],
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

// Galerie: frische, hochauflösende Entdeckung – bewusst keine Fotos, die
// schon im Hero, im Bucht-Bruch, im Film oder im Triptychon „verbraucht“ sind.
const gallery: GalleryImage[] = [
  { src: `${IMG}/deck-bow.jpg`, alt: "Teak-Vordeck der Lagoon 400 S2 über tiefblauem Wasser", span: "wide" },
  { src: `${IMG}/swim-platform.jpg`, alt: "Teak-Badeplattform mit Badeleiter an der Wasserlinie", span: "tall" },
  { src: `${IMG}/cockpit-dining.jpg`, alt: "Gedeckter Cockpit-Tisch mit Blumen – Dinner an Deck" },
  { src: `${IMG}/salon-dining.jpg`, alt: "Helle Salon-Sitzbank mit Panoramafenstern", span: "half" },
  { src: `${IMG}/galley-stove.jpg`, alt: "Pantry mit Kochfeld und Meerblick", span: "half" },
  { src: `${IMG}/helm-station.jpg`, alt: "Steuerstand mit B&G 12-Zoll-Kartenplotter" },
  { src: `${IMG}/bath.jpg`, alt: "Eigenes Bad mit Waschbecken und Spiegel" },
  { src: `${IMG}/cabin.jpg`, alt: "Doppelkabine mit Tageslicht durch die Decksluke" },
  { src: `${IMG}/salon-wide.jpg`, alt: "Lichtdurchfluteter Salon mit Cockpitblick", span: "half" },
  { src: `${IMG}/aerial-anchored.jpg`, alt: "Katamaran vor Anker bei einem dalmatinischen Küstendorf", span: "tall" },
  { src: `${IMG}/deck-foredeck.jpg`, alt: "Vordeck mit Mast und gepackten Segeln", span: "half" },
  { src: `${IMG}/aerial-topdown.jpg`, alt: "Katamaran von oben auf türkisem Wasser", span: "wide" },
];

export default function YachtPage() {
  return (
    <div className="cine">
      <SmoothScroll />
      {/* LCP-Bild früh anfordern */}
      <link rel="preload" as="image" href={`${IMG}/hero-sailing.jpg`} fetchPriority="high" />
      {/* Ohne JS bleiben Reveal-Blöcke sonst unsichtbar – Fallback erzwingt Sichtbarkeit */}
      <noscript>
        <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
      </noscript>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldProduct) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />

      {/* 1 · Hero — Aufbruch */}
      <ScrubHero
        image={`${IMG}/hero-sailing.jpg`}
        imageAlt="Miss Moneypenny – Lagoon 400 S2 unter vollen Segeln zwischen den Inseln Dalmatiens"
        eyebrow="Lagoon 400 S2 · Miss Moneypenny"
        headline={<>Zwei Rümpfe.<br />Ein <em>Horizont</em>.</>}
        sub="Ein autarker Segelkatamaran für acht Gäste – ruhig im Wasser, flach im Tiefgang, startklar im Heimathafen Šibenik."
        scrollLabel="Scroll"
        coordinate="43°44′ N · Šibenik"
        stats={[
          { k: "12 m", l: "Länge" },
          { k: "4 + 2", l: "Kabinen" },
          { k: "8", l: "Gäste" },
          { k: "100 %", l: "autark" },
        ]}
      />

      {/* 2 · Auftakt — das Versprechen + Faktenbox */}
      <section className="cine-section">
        <div className="container container-narrow center">
          <Reveal as="div"><span className="eyebrow centered">Die Yacht</span></Reveal>
          <Reveal as="h2" delay={1} className="cine-statement" style={{ marginInline: "auto", marginTop: "1.3rem", maxWidth: "22ch" }}>
            Stabil wie eine Insel. Frei wie das offene <em>Meer</em>.
          </Reveal>
          <Reveal as="p" delay={2} className="cine-lede-lg" style={{ marginInline: "auto", marginTop: "1.5rem" }}>
            Die Miss Moneypenny ist gemacht für lange, entspannte Törns: kaum Krängung, viel
            Licht und genug Technik an Bord, um tagelang dort zu bleiben, wo andere nur
            vorbeisegeln.
          </Reveal>
          <Reveal as="div" delay={3} style={{ marginTop: "3.2rem", textAlign: "left" }}>
            <FactBox facts={yachtFacts} />
          </Reveal>
        </div>
      </section>

      {/* 3 · Auf See — Stabilität & Stille */}
      <section className="cine-section surface-navy">
        <div className="container">
          <div className="cine-split">
            <div className="cine-split-text">
              <Reveal as="div"><span className="eyebrow on-dark">Auf See</span></Reveal>
              <Reveal as="h2" delay={1} className="cine-statement">
                Das Meer bewegt sich. <em>Sie bleiben ruhig.</em>
              </Reveal>
              <Reveal as="div" delay={2} className="prose">
                <p>
                  Zwei Rümpfe tragen die Yacht stabil durch die Welle – sie krängt kaum und
                  liegt selbst bei frischem Maestral entspannt im Wasser. Das senkt das Risiko
                  von Seekrankheit spürbar und macht den Törn auch für Kinder und Einsteiger
                  zum Genuss.
                </p>
                <p>Wer mag, lässt sich von einem erfahrenen Skipper führen – ganz ohne eigenen Segelschein.</p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "1.9rem" }}>
                <span className="tag-pill">Kaum Krängung</span>
                <span className="tag-pill">Wenig Seekrankheit</span>
                <span className="tag-pill">Familienfreundlich</span>
                <span className="tag-pill">Skipper optional</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={1} className="cine-split-media">
              <div className="cine-frame">
                <Parallax
                  src={`${IMG}/sailing-bow.jpg`}
                  alt="Miss Moneypenny unter Segeln vor einer dalmatinischen Insel"
                  strength={10}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 · Die Bucht — Vollbild-Atempause */}
      <section className="cine-bleed">
        <Parallax
          src={`${IMG}/aerial-bay.jpg`}
          alt="Miss Moneypenny vor Anker im türkisen Wasser vor einem dalmatinischen Dorf"
          strength={12}
        />
        <div className="cine-bleed-grade" />
        <div className="cine-bleed-cap">
          <div className="container container-wide">
            <Reveal as="div"><span className="eyebrow on-dark">Der flache Tiefgang</span></Reveal>
            <Reveal as="h2" delay={1} className="cine-statement" style={{ marginTop: "1.1rem", maxWidth: "20ch" }}>
              Nur 1,30 Meter trennen Sie von der <em>einsamsten Bucht</em>.
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 · Der Film — An Bord, in Bewegung */}
      <section className="cine-section surface-dark">
        <div className="container">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center", marginBottom: "2.6rem" }}>
            <span className="eyebrow on-dark centered">Der Film</span>
            <h2 className="cine-statement" style={{ marginInline: "auto", marginTop: "1rem", maxWidth: "22ch" }}>
              Sehen Sie selbst, wie sich <em>Freiheit</em> anfühlt.
            </h2>
          </Reveal>
          <Reveal as="div" delay={1} className="cine-filmwrap">
            <div className="cine-film-hold">
              <FilmFacade
                id="K6rfIzMQOiM"
                poster={`${IMG}/sailing-genoa.jpg`}
                posterAlt="Miss Moneypenny unter Segeln vor der dalmatinischen Küste – Filmvorschau"
                label="Film ansehen"
                meta="Adria unter Segeln"
                title="Miss Moneypenny – Segelfilm auf der Adria"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 · Raum & Licht — pinned Interieur-Triptychon */}
      <PinnedTriptych
        eyebrow="Raum & Licht"
        headline={<>Eine Ebene, <em>viel Licht</em>.</>}
        panels={[
          { src: `${IMG}/cockpit-salon.jpg`, alt: "Cockpit mit offenen Glastüren zum hellen Salon", caption: "Der Salon – Rundumblick auf einer Ebene." },
          { src: `${IMG}/galley.jpg`, alt: "Voll ausgestattete Pantry aus hellem Holz mit Meerblick", caption: "Die Pantry – voll ausgestattet, mit Meerblick." },
          { src: `${IMG}/cabin-warm.jpg`, alt: "Helle Doppelkabine mit warmem Holz und Tageslicht", caption: "Die Kabinen – helles Holz, eigenes Bad, viel Stauraum." },
        ]}
      >
        <p>
          Salon, Pantry und Cockpit liegen auf einer Höhe – Glastüren lösen die Grenze zwischen
          innen und außen auf. Vier Doppelkabinen mit eigenem Bad und zwei Bugkabinen geben acht
          Gästen Komfort und Privatsphäre zugleich; kein Gast muss sich ein Bad teilen.
        </p>
      </PinnedTriptych>

      {/* 7 · Autarkie — Wasser & Sonne */}
      <section className="cine-section surface-dark cine-autarkie">
        <div className="cine-autarkie-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/aerial-village.jpg`} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        </div>
        <div className="container">
          <div className="cine-autarkie-grid">
            <div>
              <Reveal as="div"><span className="eyebrow on-dark no-rule">Autark unterwegs</span></Reveal>
              <Reveal as="h2" delay={1} className="cine-statement">
                Süßwasser aus dem Meer. <em>Strom aus der Sonne.</em>
              </Reveal>
              <Reveal as="div" delay={2}><div className="cine-hairline" style={{ marginTop: "1.7rem", width: "84px" }} /></Reveal>
              <Reveal as="p" delay={3} className="cine-lede-lg" style={{ marginTop: "1.7rem" }}>
                Ein Wassermacher per Umkehrosmose erzeugt rund 60 Liter Frischwasser pro Stunde,
                eine 700-Watt-Solaranlage und ein 2-kW-Wechselrichter laden die Batterien
                lautlos. So liegt man tagelang in einsamen Buchten vor Anker – ohne Marina, ohne
                Generator, ohne Kompromiss.
              </Reveal>
            </div>
            <div>
              <Reveal as="div" className="cine-bignum">
                <CountUp to={60} suffix=" l/h" />
                <small>Frischwasser aus Meerwasser</small>
              </Reveal>
              <div style={{ marginTop: "2.6rem" }}>
                <Reveal as="div" className="feature-min" style={{ borderTop: "none", padding: 0, marginBottom: "1.7rem" }}>
                  <Droplet className="ic" style={{ width: 34, height: 34 }} />
                  <div>
                    <h3 style={{ fontSize: "1.3rem" }}>Wassermacher</h3>
                    <p>Frisches Süßwasser aus dem Meer – Unabhängigkeit von jeder Marina.</p>
                  </div>
                </Reveal>
                <Reveal as="div" delay={1} className="feature-min" style={{ borderTop: "none", padding: 0 }}>
                  <Sun className="ic" style={{ width: 34, height: 34 }} />
                  <div>
                    <h3 style={{ fontSize: "1.3rem" }}>Solaranlage</h3>
                    <p>Lautlose Energie für Tage vor Anker, ganz ohne Generator.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 · Galerie */}
      <section className="cine-section">
        <div className="container container-wide">
          <Reveal as="div" className="head-flex" style={{ marginBottom: "2.6rem" }}>
            <div className="head-block">
              <span className="eyebrow">Galerie</span>
              <h2 className="cine-statement" style={{ marginTop: "1rem" }}>Einmal an Bord, bitte.</h2>
            </div>
            <Link href="/kontakt" className="link-arrow">Jetzt anfragen <ArrowRight /></Link>
          </Reveal>
          <Reveal as="div"><Gallery images={gallery} /></Reveal>
        </div>
      </section>

      {/* 9 · Daten & Fakten */}
      <section className="cine-section surface-navy">
        <div className="container">
          <div className="head-flex" style={{ marginBottom: "2.6rem" }}>
            <Reveal as="div" className="head-block">
              <span className="eyebrow on-dark">Technische Daten</span>
              <h2 className="cine-statement" style={{ marginTop: "1rem" }}>Daten &amp; Fakten.</h2>
            </Reveal>
            <Reveal as="p" delay={1} className="cine-lede-lg" style={{ maxWidth: "34ch" }}>
              Alle Eckdaten der Miss Moneypenny auf einen Blick – Lagoon 400 S2, Baujahr 2016,
              12 m Länge bei nur 1,30 m Tiefgang.
            </Reveal>
          </div>
          <Reveal as="dl" className="cine-specs">
            {specs.map((s) => (
              <div className="cine-spec" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 10 · FAQ */}
      <section className="cine-section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="cine-statement" style={{ marginInline: "auto", marginTop: "1rem", maxWidth: "22ch" }}>
              Gut zu wissen vor dem Törn.
            </h2>
          </Reveal>
          <div style={{ marginTop: "2.6rem" }}>
            <FaqSection items={yachtFaqs} id={`${siteUrl}/die-yacht#faq`} />
          </div>
        </div>
      </section>

      {/* 11 · Abschluss — zurück zum Horizont */}
      <CtaBand
        image={`${IMG}/sailing-side.jpg`}
        eyebrow="Bereit für die Adria?"
        title="Ihr Törn beginnt in Šibenik."
        text="Nennen Sie uns Wunschtermin und Crew – wir prüfen die Verfügbarkeit der Miss Moneypenny und melden uns innerhalb von 24 Stunden mit einem persönlichen Angebot."
      />
    </div>
  );
}
