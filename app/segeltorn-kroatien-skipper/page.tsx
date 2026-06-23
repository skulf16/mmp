import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ArticleByline from "@/components/ArticleByline";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Segeltörn Kroatien mit Skipper – 7 Tage ab Šibenik | Miss Moneypenny",
  description:
    "Kroatien segeln ohne Segelschein: Mit einem erfahrenen Skipper an Bord der Miss Moneypenny entspannt die Adria genießen – Lagoon 400 S2, 7 Tage ab Šibenik.",
  openGraph: {
    title: "Segeltörn Kroatien mit Skipper – ohne Segelschein ab Šibenik",
    description: "Mit erfahrenem Skipper an Bord der Miss Moneypenny: Kroatien segeln ohne Führerschein – entspannt, sicher, unvergesslich.",
    images: [{ url: "/images/yacht-helm.jpg", width: 1200, height: 630, alt: "Skipper am Steuer der Miss Moneypenny auf der Adria" }],
  },
};

const ldSkipperFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was kostet ein Skipper?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein erfahrener Skipper kostet typischerweise 1.000–1.500 € pro Woche zuzüglich Tagegeld (ca. 35–50 €/Tag für Verpflegung). Die Miss Moneypenny nennt euch auf Anfrage aktuelle Konditionen.",
      },
    },
    {
      "@type": "Question",
      "name": "Schläft der Skipper auch an Bord?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja – der Skipper übernachtet in einer der Bugkabinen. Die vier Doppelkabinen der Miss Moneypenny bleiben ausschließlich für eure Crew.",
      },
    },
    {
      "@type": "Question",
      "name": "Kann ich trotzdem selbst steuern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selbstverständlich. Der Skipper übernimmt nur, wenn es nötig oder gewünscht ist. Viele Crews wechseln sich am Steuer ab und nutzen ihn als Lehrer.",
      },
    },
    {
      "@type": "Question",
      "name": "Brauche ich mit Skipper gar keinen Ausweis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Für Kroatien gilt: Mit einem zertifizierten Skipper an Bord entfällt das Erfordernis eines Sportbootführerscheins für die Charterer. Wir klären das vorab verlässlich mit euch.",
      },
    },
  ],
};

const vorteile = [
  {
    icon: "wheel" as const,
    title: "Kein Segelschein nötig",
    text: "Wer keinen SBF See hat oder einfach nicht selbst das Steuer übernehmen möchte, bucht einen erfahrenen Skipper dazu. Der Schein ist sein Problem, das Genießen eures.",
  },
  {
    icon: "sparkle" as const,
    title: "Lernen auf der Route",
    text: "Viele Crews nutzen den Skipper bewusst zum Lernen: Anlegemanöver, Wetterlesen, Navigation. Guter Skipper, gute Schule – ohne Druck und Prüfungsangst.",
  },
  {
    icon: "anchor" as const,
    title: "Ankern & Anlegen ohne Stress",
    text: "Enge Häfen, Ankermanöver auf kleinem Raum, Boje in Windböen – das übernimmt der Skipper routiniert. Ihr schaut zu oder helft, wie ihr mögt.",
  },
  {
    icon: "leaf" as const,
    title: "Ortskenntnis inklusive",
    text: "Ein guter Skipper kennt die besten Ankerbuchten, die ruhigen Konobas und die Abkürzungen durchs Revier. Das ist durch kein Buch zu ersetzen.",
  },
];

const ablauf = [
  { title: "Tag 1 – Šibenik", text: "Anreise und Einweisung am Nachmittag. Der Skipper stellt das Boot vor, erklärt Sicherheitsausrüstung und stimmt die Wochentour mit euch ab." },
  { title: "Tage 2–6 – Kornaten & Küste", text: "Ihr bestimmt das Tempo, der Skipper die Route. Typisch: zwei Nächte Kornaten, eine Nacht Šibenik-Region, ein Hafenstädtchen." },
  { title: "Tag 7 – Rückkehr", text: "Frühzeitig zurück in die Marina Mandalina. Check-out bis 09:00 Uhr – oder entspannt am Vorabend abgeschlossen." },
];

const faqs = [
  {
    q: "Was kostet ein Skipper?",
    a: "Ein erfahrener Skipper kostet typischerweise 1.000–1.500 € pro Woche zuzüglich Tagegeld (ca. 35–50 €/Tag für Verpflegung). Die Miss Moneypenny nennt euch auf Anfrage aktuelle Konditionen.",
  },
  {
    q: "Schläft der Skipper auch an Bord?",
    a: "Ja – der Skipper übernachtet in einer der Bugkabinen. Die vier Doppelkabinen der Miss Moneypenny bleiben ausschließlich für eure Crew.",
  },
  {
    q: "Kann ich trotzdem selbst steuern?",
    a: "Selbstverständlich. Der Skipper übernimmt nur, wenn es nötig oder gewünscht ist. Viele Crews wechseln sich am Steuer ab und nutzen ihn als Lehrer.",
  },
  {
    q: "Brauche ich mit Skipper gar keinen Ausweis?",
    a: "Für Kroatien gilt: Mit einem zertifizierten Skipper an Bord entfällt das Erfordernis eines Sportbootführerscheins für die Charterer. Wir klären das vorab verlässlich mit euch.",
  },
];

export default function SegeltornKroatienSkipperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSkipperFaq) }}
      />
      <PageHero
        eyebrow="Mit Skipper"
        title="Segeltörn Kroatien mit Skipper"
        lede="Entspannt segeln, nichts verpassen, sicher ankommen – mit einem erfahrenen Skipper an Bord genießt ihr die Adria ohne Stress."
        image="/images/yacht-helm.jpg"
        imageAlt="Skipper am Steuer der Miss Moneypenny auf der Adria"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/ratgeber" }, { label: "Mit Skipper" }]}
      />

      <ArticleByline slug="segeltorn-kroatien-skipper" />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Für wen ist das richtig?</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Segeln ohne Führerschein – vollständig legal und entspannt.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Nicht jede Crew hat einen Sportbootführerschein – und das ist
                  völlig in Ordnung. Mit einem lizenzierten Skipper an Bord ist das
                  Chartern der Miss Moneypenny in Kroatien auch ohne eigenen Schein
                  möglich. Ihr lebt das Segelurlaub-Gefühl, ohne euch mit
                  Manövern, Wetterkunde oder Routenplanung belasten zu müssen.
                </p>
                <p>
                  Genauso gefragt: erfahrene Segler, die einfach einen Törn ohne
                  Stress wollen. Ankern lassen, Cocktail in der Hand, Blick auf
                  die Kornaten – und jemand anderes kümmert sich um die Boje.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-cockpit-dining.jpg" alt="Crew entspannt im Cockpit der Miss Moneypenny" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Warum mit Skipper?</span>
            <h2 className="section-title">Vier gute Gründe, die Verantwortung abzugeben.</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {vorteile.map((v, i) => (
              <Reveal key={v.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={v.icon} /></span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Die Woche in Kürze</span>
            <h2 className="section-title">Wie läuft ein Törn mit Skipper ab?</h2>
          </Reveal>
          <div className="steps" style={{ marginTop: "3rem", maxWidth: "720px" }}>
            {ablauf.map((s) => (
              <Reveal key={s.title} as="div" className="step">
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Das Boot */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div">
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-aerial-wide.jpg" alt="Miss Moneypenny Lagoon 400 S2 Luftaufnahme" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow">Die Miss Moneypenny</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Lagoon 400 S2 – viel Raum für acht Gäste.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.4rem" }}>
                <p>
                  Vier Doppelkabinen, jede mit eigenem Bad. Der Skipper schläft
                  in einer der beiden Bugkabinen und ist damit klar von eurem
                  Bereich getrennt. Ihr habt eure Privatsphäre – er hat seinen Schlafplatz.
                </p>
                <p>
                  Autarker Katamaran bedeutet: kein täglicher Marina-Stopp für Wasser
                  oder Strom. Ihr bleibt in eurer Lieblingsbucht – auch der Skipper
                  schätzt das.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Lagoon 400 S2</span>
                <span className="tag-pill">4 Kabinen mit Bad</span>
                <span className="tag-pill">Skipper: Bugkabine</span>
                <span className="tag-pill">bis 8 Gäste</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Häufige Fragen</span>
            <h2 className="section-title">Alles zum Skipper-Charter.</h2>
          </Reveal>
          <div className="faq" style={{ marginTop: "3rem" }}>
            {faqs.map((f) => (
              <Reveal key={f.q} as="div" className="faq-item">
                <div style={{ padding: "1.4rem 0" }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--navy-900)", marginBottom: "0.6rem" }}>{f.q}</h3>
                  <p style={{ color: "var(--text-soft)", fontSize: "0.95rem", lineHeight: 1.65 }}>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal as="div" style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/kontakt" className="btn btn-primary">Skipper-Anfrage stellen</Link>
            <Link href="/charter-infos" className="btn btn-outline">Charter-Infos & Preise</Link>
          </Reveal>
        </div>
      </section>

      <CtaBand image="/images/yacht-sailing-coast.jpg" />
    </>
  );
}
