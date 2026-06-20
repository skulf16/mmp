import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Link from "next/link";
import { Icon, Wind, ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Segeltörn Kornaten – Katamaran-Törn ab Šibenik",
  description:
    "89 Inseln, einsame Buchten, Bojenfelder statt Marina-Trubel: Tipps für den Kornaten-Törn mit dem Katamaran ab Šibenik – inkl. Anlegen, Konobas und Windbedingungen.",
  openGraph: {
    title: "Segeltörn Kornaten – Katamaran-Törn ab Šibenik",
    description: "89 Inseln, einsame Buchten, Bojenfelder statt Marina-Trubel – alles zum Kornaten-Törn mit der Miss Moneypenny.",
    images: [{ url: "/images/region-kornati-aerial.png", width: 1200, height: 630, alt: "Luftaufnahme Kornaten – Nationalpark mit 89 Inseln im türkisen Meer" }],
  },
};

const ldDestination = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": "Kornati-Nationalpark – Segeln in den Kornaten",
  "description": "89 Inseln, steile Klippen und kristallklares Wasser – der Kornati-Nationalpark ist das nautische Paradies der Adria.",
  "url": "https://bond-yachting.de/segeln-in-den-kornaten",
  "touristType": "Segler und Natur-Enthusiasten",
  "containedInPlace": { "@type": "Country", "name": "Kroatien" },
};

const features = [
  { icon: "anchor" as const, title: "89 Inseln & Inselchen", text: "Ein Labyrinth aus Felsen und Riffen, größtenteils unbewohnt – Stille und Natur, soweit das Auge reicht." },
  { icon: "waves" as const, title: "Steile Klippen", text: "Die berühmten „Kronen” stürzen senkrecht ins tiefblaue Meer. Eine Kulisse, die man nur vom Wasser aus erlebt." },
  { icon: "leaf" as const, title: "Telašćica", text: "Der angrenzende Naturpark mit Steilküste, Salzsee und geschützter Bucht – ein perfekter Tagesankerplatz." },
  { icon: "sparkle" as const, title: "Buchten für sich allein", text: "Abseits der Routen finden sich Ankerplätze, an denen Sie abends ganz allein vor Anker liegen." },
];

const konobas = [
  { name: "Konoba Smokvica", text: "Fangfrischer Fisch und Meeresfrüchte in entspannter Bucht – ein Klassiker der Kornaten." },
  { name: "Konoba Ante", text: "Traditionelle Kornaten-Küche unter freiem Himmel, mit eigenem Bojenfeld für Gäste." },
  { name: "Restoran Festa", text: "Gehobene Küche zwischen Olivenhainen – ideal für einen besonderen Abend an Land." },
];

export default function KornatenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldDestination) }}
      />
      <PageHero
        eyebrow="Nationalpark"
        title="Segeln in den Kornaten"
        lede="Das nautische Paradies der Adria: ein Archipel aus 89 Inseln, kristallklarem Wasser und einsamen Ankerbuchten."
        image="/images/region-kornati-aerial.png"
        imageAlt="Luftaufnahme des Kornati-Nationalparks mit zahlreichen Inseln im türkisen Meer"
        crumbs={[{ label: "Start", href: "/" }, { label: "Reviere", href: "/revier-sibenik" }, { label: "Kornaten" }]}
      />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Die Magie des Kornati-Nationalparks</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Eine ruhige Inselkette, wie aus einer anderen Zeit.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Kein anderes Revier der Adria ist so unberührt. Auf engstem Raum drängen
                  sich 89 Inseln und Riffe – karg, schroff und von atemberaubender Schönheit.
                  Hier gibt es keine Straßen, kaum Häuser, nur Fels, Wind und tiefblaues Wasser.
                </p>
                <p>
                  Mit dem Wassermacher und der Solaranlage der Miss Moneypenny können Sie
                  genau das auskosten, was die Kornaten ausmacht: tagelang bleiben, wo es am
                  schönsten ist – ganz ohne Marina.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/region-kornati-cove.png" alt="Felsige Bucht im Kornati-Nationalpark" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Höhepunkte</span>
            <h2 className="section-title">Warum die Kornaten verzaubern.</h2>
          </Reveal>
          <div className="grid-4" style={{ marginTop: "3rem" }}>
            {features.map((f, i) => (
              <Reveal key={f.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <article className="feature">
                  <span className="ic"><Icon name={f.icon} /></span>
                  <h3 style={{ fontSize: "1.2rem" }}>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Anlegen */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div">
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/kornati-panorama.png" alt="Panorama des Kornati-Nationalparks aus der Vogelperspektive" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow">Sichere Anlegemöglichkeiten</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Bojenfelder statt Marina-Trubel.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.4rem" }}>
                <p>
                  Im Nationalpark ersetzen Bojenfelder und Ankerbuchten die großen Marinas.
                  Viele Plätze lassen sich vorab über das Portal <em>mySea</em> reservieren –
                  so haben Sie Ihren Liegeplatz sicher.
                </p>
              </Reveal>
              <Reveal as="div" delay={2} style={{ marginTop: "0.5rem" }}>
                <div className="feature-min">
                  <Icon name="anchor" className="ic" />
                  <div><h3>ACI Marina Piškera</h3><p>Zentral im Park gelegen, mit Restaurant und Versorgung.</p></div>
                </div>
                <div className="feature-min">
                  <Icon name="ship" className="ic" />
                  <div><h3>Marina Kornati</h3><p>Proviant, Wasser und Service am Rand des Reviers.</p></div>
                </div>
                <div className="feature-min">
                  <Icon name="pin" className="ic" />
                  <div><h3>mySea-Portal</h3><p>Bojen und Liegeplätze bequem im Voraus reservieren.</p></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Konobas */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Einkehren</span>
            <h2 className="section-title">Konobas mit Charakter.</h2>
            <p className="lede">Nach einem Tag auf dem Wasser locken urige Tavernen mit dalmatinischer Küche.</p>
          </Reveal>
          <div className="grid-3" style={{ marginTop: "3rem" }}>
            {konobas.map((k, i) => (
              <Reveal key={k.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="feature">
                  <span className="ic"><Icon name="sparkle" /></span>
                  <h3 style={{ fontSize: "1.25rem" }}>{k.name}</h3>
                  <p>{k.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wind */}
      <section className="section surface-dark">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Windbedingungen</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Verlässlicher Maestral, respektierte Bora.</Reveal>
              <Reveal as="p" delay={2} className="lede">
                Im Sommer sorgt der thermische Maestral für ideale Segelnachmittage – die
                Bora bleibt meist eine Sache der kühleren Monate.
              </Reveal>
            </div>
            <Reveal as="div" delay={2} className="grid-2" style={{ gap: "1.5rem" }}>
              <article className="feature">
                <span className="ic"><Wind /></span>
                <h3>Maestral</h3>
                <p>Nordwestwind, nachmittags rund 20 Knoten (3–5 Bft) – angenehm und planbar.</p>
              </article>
              <article className="feature">
                <span className="ic"><Wind /></span>
                <h3>Bora</h3>
                <p>Böiger Nordost aus den Bergen, im Winter über 40 Knoten – Wetterbericht beachten.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Törnvorschlag-Teaser */}
      <section className="section surface-sand">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Route planen</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Wie sieht eine Woche in den Kornaten konkret aus?</Reveal>
              <Reveal as="p" delay={2} className="lede" style={{ marginTop: "1.2rem" }}>
                Törnvorschlag mit Etappenplan, Ankerbuchten, Entfernungen und Insider-Tipps –
                Tag für Tag von Šibenik durch den Nationalpark.
              </Reveal>
              <Reveal as="div" delay={3} style={{ marginTop: "2rem" }}>
                <Link href="/toernvorschlag-kornaten" className="btn btn-outline">
                  Törnvorschlag ansehen <ArrowRight />
                </Link>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-aerial-wide.jpg" alt="Miss Moneypenny auf dem Weg in die Kornaten" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand image="/images/region-kornati-aerial.png" />
    </>
  );
}
