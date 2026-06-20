import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Ankern in Kroatien – Regeln, Buchten & Tipps | Miss Moneypenny",
  description:
    "Ankern in Kroatien: Was ist erlaubt, was kostet es, welche Buchten sind die schönsten? Regeln für Nationalparks, Bojenpflicht und die besten Ankerspots ab Šibenik.",
  openGraph: {
    title: "Ankern in Kroatien – Regeln, beste Buchten & Tipps",
    description: "Ankern in Kroatien: Nationalpark-Regeln, Bojenpflicht und die schönsten Ankerbuchten ab Šibenik.",
    images: [{ url: "/images/yacht-hero-anchored.jpg", width: 1200, height: 630, alt: "Miss Moneypenny liegt ruhig vor Anker in einer dalmatinischen Bucht" }],
  },
};

const buchten = [
  {
    name: "Bucht Lavsa (Kornaten)",
    tag: "Nationalpark · Boje",
    text: "Gilt als eine der schönsten Buchten der Adria: türkis, still, von Kalkfelsen umgeben. Bojenfeld vorhanden – Reservierung über mySea empfehlenswert.",
    icon: "sparkle" as const,
  },
  {
    name: "Telašćica (Dugi Otok)",
    tag: "Naturpark · Anker & Boje",
    text: "Riesige, geschützte Bucht auf 7 km Länge. Auch bei Bora sicher. Ankern in mehreren Zonen möglich, Bojenfelder an den Steilhängen.",
    icon: "anchor" as const,
  },
  {
    name: "Bucht Hramina (Murter)",
    tag: "Außerhalb Nationalpark · frei",
    text: "Ruhige Bucht auf Murter, gut geschützt. Kein Nationalpark – freies Ankern außerhalb der Fahrrinnen erlaubt. Restaurant an Land.",
    icon: "waves" as const,
  },
  {
    name: "Kaprije & Žirje",
    tag: "Außerhalb Nationalpark · frei",
    text: "Die äußeren Inseln des Šibeniker Reviers haben zahlreiche ruhige Buchten. Weniger besucht als Kornaten – oft mehr Platz und mehr Stille.",
    icon: "leaf" as const,
  },
];

const regeln = [
  {
    icon: "shield" as const,
    title: "Nationalpark-Vignette",
    text: "Für die Einfahrt in den Kornati-Nationalpark und den Naturpark Telašćica wird eine Vignette benötigt. Diese kann online oder an Ranger-Stationen erworben werden.",
  },
  {
    icon: "anchor" as const,
    title: "Anker- vs. Bojenpflicht",
    text: "In vielen Nationalpark-Buchten ist nur Bojenpflicht, kein freies Ankern erlaubt – um den Meeresboden zu schützen. Außerhalb der Parks gilt freies Ankern, solange Fahrrinnen und Mindestabstände eingehalten werden.",
  },
  {
    icon: "waves" as const,
    title: "Mindestabstand",
    text: "Kroatisches Seerecht schreibt Abstände zu Badenden (50 m), zum Ufer in Schutzzonen und zu anderen Ankerliegern vor. In der Praxis: Respektabstand halten, Ankerkette vollständig ausgeben.",
  },
  {
    icon: "droplet" as const,
    title: "Abwasser & Umwelt",
    text: "Innerhalb der Nationalparks gilt absolutes Verbot für Schwarzwasser-Einleitung. Toilette nur mit geschlossenem Tank betreiben – die Miss Moneypenny ist entsprechend ausgestattet.",
  },
];

export default function AnkernKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Ankern in Kroatien"
        title="Frei vor Anker liegen – so geht's"
        lede="Die schönsten Momente eines Törns passieren vor Anker. Was ihr über Regeln, Nationalparks und die besten Buchten ab Šibenik wissen müsst."
        image="/images/yacht-hero-anchored.jpg"
        imageAlt="Miss Moneypenny liegt ruhig vor Anker in einer dalmatinischen Bucht"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber" }, { label: "Ankern Kroatien" }]}
      />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Die Freiheit des Ankers</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Ankern ist das Herzstück des Kroatien-Törns.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Keine Marina, kein Steg, keine Nachbarn auf zwei Meter Abstand –
                  wer einmal in einer einsamen Bucht vor Anker gelegen hat, will
                  keine Nacht im Hafen mehr. Kroatien bietet hunderte solcher Buchten,
                  von den Kornaten bis zu den Außeninseln um Šibenik.
                </p>
                <p>
                  Voraussetzung: das richtige Boot. Mit Wassermacher und Solaranlage
                  ist die Miss Moneypenny vollständig autark. Kein täglicher Hafenstopp
                  für Wasser, kein Generator-Lärm für den Kühlschrank.
                  Ihr bleibt, solange die Bucht gefällt.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill"><Icon name="droplet" style={{ width: 15 }} /> Wassermacher an Bord</span>
                <span className="tag-pill">Solar statt Generator</span>
                <span className="tag-pill">tagelang autark</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/region-kornati-cove.png" alt="Einsame Bucht in den Kornaten" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Regeln */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Regeln & Vorschriften</span>
            <h2 className="section-title">Was beim Ankern in Kroatien gilt.</h2>
            <p className="lede">Besonders in und um Nationalparks gibt es klare Spielregeln – hier die wichtigsten.</p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {regeln.map((r, i) => (
              <Reveal key={r.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={r.icon} /></span>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Buchten */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Ab Šibenik</span>
            <h2 className="section-title">Die schönsten Ankerbuchten in Reichweite.</h2>
            <p className="lede">Alle innerhalb einer Woche erreichbar – je nach Route und Windlage.</p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {buchten.map((b, i) => (
              <Reveal key={b.name} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={b.icon} /></span>
                  <div>
                    <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--brass-600)", fontWeight: 700 }}>{b.tag}</span>
                    <h3 style={{ marginTop: "0.3rem" }}>{b.name}</h3>
                    <p>{b.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bojen reservieren */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Praxistipp</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Bojen in der Hauptsaison reservieren.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.4rem" }}>
                <p>
                  In den Kornaten und Telašćica sind die Bojenfelder in Juli und August
                  oft bis nachmittags ausgebucht. Die Apps <strong>mySea</strong> und
                  <strong> Anchor</strong> ermöglichen Reservierungen – am besten
                  morgens reservieren, wenn man das Tagesziel kennt.
                </p>
                <p>
                  Wer flexibel bleibt: Frühzeitig ansteuern (vor 13 Uhr) oder auf
                  freie Ankerbereiche ausweichen. Gerade abseits der bekanntesten
                  Buchten gibt es noch viele ruhige Alternativen.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">mySea App</span>
                <span className="tag-pill">Anchor App</span>
                <span className="tag-pill">vor 13 Uhr ansteuern</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-swim-platform.jpg" alt="Badeplattform der Miss Moneypenny vor Anker" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA intern */}
      <section className="section surface-sand">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow centered">Mehr entdecken</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Törnvorschlag mit den besten Ankerbuchten.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die 1-Woche-Kornaten-Route führt durch die schönsten Ankerbuchten
              des Reviers – mit konkreten Empfehlungen für jeden Tag.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/toernvorschlag-kornaten" className="btn btn-primary">Törnvorschlag ansehen</Link>
              <Link href="/kontakt" className="btn btn-outline">Verfügbarkeit anfragen</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand image="/images/yacht-hero-anchored.jpg" />
    </>
  );
}
