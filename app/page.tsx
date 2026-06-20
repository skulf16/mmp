import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Brandmark from "@/components/Brandmark";
import { Icon, ArrowRight, Check, Droplet, Sun } from "@/components/Icons";
import { advantages, heroStats, included, regions, site, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Katamaran mieten ab Šibenik | Miss Moneypenny (Lagoon 400)",
  description:
    "Autarker Segelkatamaran ab Šibenik: Lagoon 400 S2 mit Wassermacher & Solaranlage. Tagelang frei vor Anker in den Kornaten. Jetzt Verfügbarkeit anfragen.",
  openGraph: {
    title: "Katamaran mieten ab Šibenik | Miss Moneypenny (Lagoon 400)",
    description: "Autarker Segelkatamaran ab Šibenik: Lagoon 400 S2 mit Wassermacher & Solaranlage. Tagelang frei vor Anker in den Kornaten.",
    images: [{ url: "/images/yacht-hero-anchored.jpg", width: 1200, height: 630, alt: "Katamaran Miss Moneypenny vor Anker in einer türkisen Bucht der Adria" }],
  },
};

const ldService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://bond-yachting.de/#charter-service",
  "name": "Katamaran-Charter Miss Moneypenny",
  "description": "Autarker Katamaran-Charter ab Šibenik, Kroatien: Lagoon 400 S2 mit Wassermacher und Solaranlage für 2–8 Personen. Bareboat oder mit Skipper.",
  "provider": { "@id": "https://bond-yachting.de/#organization" },
  "areaServed": { "@type": "Place", "name": "Adria, Kroatien" },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "2500",
    "highPrice": "5200",
    "offerCount": "1",
    "priceValidUntil": "2026-12-31",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "4",
    "bestRating": "5",
    "worstRating": "1",
  },
  "review": [
    {
      "@type": "Review",
      "reviewBody": "Was mich an der Miss Moneypenny total begeistert hat: Wir konnten tagelang von Bucht zu Bucht ziehen, ohne je die Batterien laden oder Wasser tanken zu müssen.",
      "author": { "@type": "Person", "name": "Thomas" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    },
    {
      "@type": "Review",
      "reviewBody": "Mich haben die großzügigen Kabinen mit ihrem vielen Stauraum überzeugt – und das eigene Bad direkt von der Kabine aus, das ich mit niemandem teilen muss außer mit meinem Mann.",
      "author": { "@type": "Person", "name": "Carmen" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    },
    {
      "@type": "Review",
      "reviewBody": "Früher waren Motor-Katamarane für mich das Maß der Dinge. Heute liegt mir die Umwelt am Herzen – und ich genieße es, leise und störungsfrei über das Meer zu gleiten.",
      "author": { "@type": "Person", "name": "Heiko" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    },
    {
      "@type": "Review",
      "reviewBody": "Fürs Ankermanöver bin ich nicht zu gebrauchen – also übernehme ich an Bord den Abspüldienst. Und gerade dabei hat mich die große Kombüse restlos überzeugt.",
      "author": { "@type": "Person", "name": "Axel" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldService) }}
      />
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/yacht-hero-anchored.jpg" alt="Katamaran Miss Moneypenny vor Anker in einer türkisen Bucht der kroatischen Adria" />
        </div>

        <div className="container hero-inner">
          <Reveal as="div">
            <span className="eyebrow on-dark">{site.yacht} · Šibenik, Kroatien</span>
          </Reveal>
          <Reveal as="h1" delay={1} className="display">
            Autarkes Segel&shy;abenteuer auf der <em>Adria</em>
          </Reveal>
          <Reveal as="p" delay={2} className="lede">
            Ihr Zuhause auf dem Wasser: Die Lagoon 400 S2 „Miss Moneypenny" – mit
            Wassermacher und Solaranlage für tagelange Freiheit fernab überfüllter Marinas.
          </Reveal>
          <Reveal as="div" delay={3} className="hero-actions">
            <Link href="/kontakt" className="btn btn-primary">Verfügbarkeit anfragen <ArrowRight /></Link>
            <Link href="/die-yacht" className="btn btn-ghost">Die Yacht entdecken</Link>
          </Reveal>

          <Reveal as="div" delay={4} className="hero-meta">
            {heroStats.map((s) => (
              <div key={s.l}>
                <div className="k">{s.k}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>

        <span className="scroll-cue">Scrollen</span>
      </section>

      {/* ============ INTRO / split ============ */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Ihr Zuhause auf der Adria</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">
                Grenzenlose Freiheit,<br />ganz nach Ihrem Kurs.
              </Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Stellen Sie sich vor: Sie ankern in einer einsamen Bucht der Kornaten,
                  die Sonne lädt lautlos Ihre Batterien, der Wassermacher füllt die Tanks –
                  und Sie bleiben einfach. Keine Hafensuche, kein Bunkern, kein Kompromiss.
                </p>
                <p>
                  Die Miss Moneypenny ist eine Lagoon 400 S2 in Top-Zustand. Ein stabiler,
                  großzügiger Katamaran, der Komfort und echte Unabhängigkeit verbindet –
                  für Familien, Freunde und alle, die das Mittelmeer auf ihre Weise erleben wollen.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} style={{ marginTop: "2rem" }}>
                <Link href="/die-yacht" className="link-arrow">Mehr über die Yacht <ArrowRight /></Link>
              </Reveal>
            </div>

            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-salon.jpg" alt="Heller Salon der Lagoon 400 S2 mit Pantry und Panoramablick" />
                <div className="float-card">
                  <div className="k">2016</div>
                  <div className="l">Baujahr · gepflegt & startklar</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ VORTEILE ============ */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Warum Miss Moneypenny</span>
            <h2 className="section-title">Sechs Vorteile, die den Unterschied machen.</h2>
            <p className="lede">
              Jedes Detail an Bord dient einem Ziel – mehr Zeit auf dem Wasser, mehr Komfort,
              mehr Unabhängigkeit.
            </p>
          </Reveal>

          <div className="grid-3" style={{ marginTop: "3.5rem" }}>
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="feature">
                  <span className="ic"><Icon name={a.icon} /></span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AUTARKIE HIGHLIGHT ============ */}
      <section className="section surface-navy relative">
        <div className="compass-bg" style={{ inset: "auto -120px -160px auto", width: 520, height: 520, color: "#fff" }}>
          <Brandmark style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="container relative">
          <div className="split">
            <Reveal as="div">
              <div className="media-frame wide frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-aerial-topdown.jpg" alt="Luftaufnahme der Miss Moneypenny über kristallklarem Wasser" />
              </div>
            </Reveal>

            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Energie- & Wasserautark</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">
                Die Freiheit, einfach zu&nbsp;bleiben.
              </Reveal>
              <Reveal as="p" delay={2} className="lede">
                Zwei Systeme machen den entscheidenden Unterschied – und verwandeln jeden Törn
                in echte Autonomie.
              </Reveal>

              <div style={{ marginTop: "2rem" }}>
                <Reveal as="div" delay={2}>
                  <div className="feature-min" style={{ borderTop: "none" }}>
                    <Droplet className="ic" />
                    <div>
                      <h3>Wassermacher</h3>
                      <p>Die Umkehrosmose-Anlage gewinnt frisches Süßwasser direkt aus dem Meer.
                        Duschen ohne Rationieren, volle Tanks ohne Hafenstopp.</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal as="div" delay={3}>
                  <div className="feature-min">
                    <Sun className="ic" />
                    <div>
                      <h3>Solaranlage</h3>
                      <p>Leistungsstarke Module laden Ihre Batterien lautlos – Kühlschrank,
                        Licht und Navigation laufen autark, ganz ohne Generatorlärm.</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal as="div" delay={4} style={{ marginTop: "2.2rem" }}>
                <Link href="/charter-infos" className="link-arrow on-dark">So funktioniert das Chartern <ArrowRight /></Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DIE YACHT TEASER (Bildband) ============ */}
      <section className="section">
        <div className="container">
          <div className="head-flex">
            <Reveal as="div" className="head-block">
              <span className="eyebrow">An Bord der Lagoon 400 S2</span>
              <h2 className="section-title">Komfort auf jedem Quadratmeter.</h2>
            </Reveal>
            <Reveal as="div" delay={1}>
              <Link href="/die-yacht" className="link-arrow">Alle Eindrücke & Daten <ArrowRight /></Link>
            </Reveal>
          </div>

          <div className="grid-4" style={{ marginTop: "3rem" }}>
            {[
              { src: "/images/yacht-cabin.jpg", alt: "Helle Doppelkabine an Bord" },
              { src: "/images/yacht-galley.jpg", alt: "Voll ausgestattete Pantry mit Meerblick" },
              { src: "/images/yacht-cockpit-dining.jpg", alt: "Cockpit mit gedecktem Frühstückstisch" },
              { src: "/images/yacht-helm.jpg", alt: "Steuerstand mit Kartenplotter und Blick auf ein Dorf" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link href="/die-yacht" className="region-card" style={{ minHeight: 320 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REVIERE ============ */}
      <section className="section surface-dark">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Reviere & Routen</span>
            <h2 className="section-title">Von Šibenik in die schönsten Ecken der Adria.</h2>
            <p className="lede">
              Geschützte Gewässer, ein Nationalpark voller einsamer Buchten und Städte
              wie aus dem Bilderbuch – alles in Reichweite einer Woche.
            </p>
          </Reveal>

          <div className="grid-3" style={{ marginTop: "3.5rem" }}>
            {regions.map((r, i) => (
              <Reveal key={r.href} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <Link href={r.href} className="region-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.image} alt={r.imageAlt} />
                  <div className="rc-body">
                    <span className="rc-kicker">{r.kicker}</span>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                    <span className="rc-more">Entdecken <ArrowRight /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INKLUSIVE ============ */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div">
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-swim-platform.jpg" alt="Teak-Badeplattform mit Schnorchelausrüstung über türkisem Wasser" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow">Sorgenfrei an Bord</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Alles dabei, was den Törn leicht macht.</Reveal>
              <Reveal as="p" delay={2} className="lede" style={{ marginBottom: "1.5rem" }}>
                Im Charter ist bereits das Wesentliche enthalten – Sie packen nur die Badesachen.
              </Reveal>
              <Reveal as="ul" delay={2} className="checklist">
                {included.map((item) => (
                  <li key={item}><Check /> {item}</li>
                ))}
              </Reveal>
              <Reveal as="div" delay={3} style={{ marginTop: "2.2rem" }}>
                <Link href="/charter-infos" className="link-arrow">Charter-Infos & Preise <ArrowRight /></Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STIMMEN VON BORD ============ */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block center mx-auto">
            <span className="eyebrow centered">Stimmen von Bord</span>
            <h2 className="section-title">Was Gäste an Bord erleben.</h2>
          </Reveal>
          <div className="testimonials" style={{ marginTop: "3.5rem" }}>
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={((i % 2) + 1) as 1 | 2}>
                <figure className="testimonial">
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <span className="avatar">{t.initial}</span>
                    <span>
                      <span className="who-name">{t.name}</span>
                      <span className="who-role">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
