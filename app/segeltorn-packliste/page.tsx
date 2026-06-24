import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ArticleByline from "@/components/ArticleByline";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import FaqSection from "@/components/FaqSection";
import { Icon } from "@/components/Icons";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Segeltörn Packliste – Was wirklich an Bord gehört | Miss Moneypenny",
  description:
    "Die vollständige Segeltörn Packliste: Kleidung, Ausrüstung, Dokumente und Bordleben – was ihr für eine Woche auf dem Katamaran wirklich braucht und was ihr getrost zuhause lasst.",
  openGraph: {
    title: "Segeltörn Packliste – Was wirklich an Bord gehört",
    description: "Kleidung, Schuhe, Elektronik, Dokumente – die vollständige Packliste für eine Woche Segelurlaub auf dem Katamaran.",
    images: [{ url: "/images/yacht-cabin.jpg", width: 1200, height: 630, alt: "Ordentlich gepackte Kabine an Bord der Miss Moneypenny" }],
  },
};

const kategorien = [
  {
    titel: "Kleidung & Schutzausrüstung",
    icon: "leaf" as const,
    items: [
      "Leichte Hosen & Shorts (2–3 Stück)",
      "T-Shirts & Longsleeves (4–5 Stück)",
      "Badeanzug / Badehose (2–3 Stück)",
      "Winddichte Softshell-Jacke",
      "Handschuhe",
      "Hut / Kopfbedeckung",
    ],
  },
  {
    titel: "Schuhe",
    icon: "anchor" as const,
    items: [
      "Bootsschuhe mit abriebfester Sohle",
      "Flip-Flops für Hafen und Strand",
      "Sportliche Sandalen für Landgänge",
      "Warme Socken für kühle Abende",
    ],
  },
  {
    titel: "Persönliches & Hygiene",
    icon: "droplet" as const,
    items: [
      "Sonnencreme SPF 50+ (reichlich!)",
      "Lippenpflege mit LSF",
      "Insektenschutzmittel",
      "Kleine Reiseapotheke (Übelkeit, Ibu, nach Bedarf)",
      "Handtücher (sind an Bord gestellt)",
    ],
  },
  {
    titel: "Elektronik",
    icon: "wifi" as const,
    items: [
      "Powerbank (groß – WLAN ist an Bord)",
      "Ladeadapter & Kabel (europäischer Standard)",
      "Kopfhörer",
      "Offline-Karten (maps.me, NavionicsApp)",
    ],
  },
  {
    titel: "Dokumente",
    icon: "shield" as const,
    items: [
      "Reisepass (Kroatien: auch Personalausweis möglich)",
      "Sportbootführerschein (SBF See) – Original",
      "Funkzeugnis (SRC oder UBI)",
      "Krankenversicherungskarte (EHIC für EU-Bürger)",
    ],
  },
  {
    titel: "Angenehm, aber kein Muss",
    icon: "sparkle" as const,
    items: [
      "Polarisationsbrille (reduziert Blendung auf dem Wasser)",
      "Schnorchelausrüstung",
      "Leichter Tagesrucksack für Landgänge",
      "Kindle oder Taschenbuch",
      "Kartenspiel für windstille Nachmittage",
    ],
  },
];

const facts = [
  "Auf dem Katamaran ist der Stauraum begrenzt, weshalb pro Person eine weiche Reisetasche oder ein Rollkoffer mit etwa 60–70 Litern und keine Hartschale empfohlen wird.",
  "Die Packliste gliedert sich in Kleidung und Schutzausrüstung, Schuhe, Persönliches und Hygiene, Elektronik, Dokumente sowie optionale Extras.",
  "Auf der Miss Moneypenny sind Bettwäsche und Handtücher gestellt, WLAN ist an Bord und auch Schnorchelausrüstung steht bereit, was beim Packen Volumen spart.",
  "Zu den wichtigen Dokumenten gehören Reisepass beziehungsweise Personalausweis, der Sportbootführerschein See im Original, ein Funkzeugnis und die Krankenversicherungskarte.",
  "Statt Hartschalenkoffer eignen sich weiche Reisetaschen oder Duffelbags, da diese in die Kojenablagen passen und sich leer zusammenfalten lassen.",
  "Die vollständige Packliste steht zusätzlich als PDF zum Ausdrucken und Abhaken bereit.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Welche Tasche eignet sich für einen Segeltörn auf dem Katamaran?",
    a: "Empfohlen wird pro Person eine weiche Reisetasche oder ein Duffelbag mit etwa 60–70 Litern, kein Hartschalenkoffer. Hartschalen passen nicht in die Kojenablagen und blockieren Gangways, während sich weiche Taschen leer zusammenfalten lassen. Was nicht in eine Tasche passt, bleibt besser an Land im Auto oder Hotel.",
  },
  {
    q: "Was muss ich an Bord der Miss Moneypenny nicht selbst mitbringen?",
    a: "Bettwäsche und Handtücher sind an Bord gestellt, ebenso steht WLAN zur Verfügung. Auch Schnorchelausrüstung ist vorhanden, sodass ihr eigenes Schnorchelzeug zuhause lassen könnt. Das spart beim Packen spürbar Volumen.",
  },
  {
    q: "Welche Dokumente brauche ich für den Segeltörn?",
    a: "Mitzunehmen sind Reisepass oder in Kroatien auch der Personalausweis, der Sportbootführerschein See im Original sowie ein Funkzeugnis wie SRC oder UBI. Hinzu kommt die Krankenversicherungskarte, für EU-Bürger die EHIC. Originale gehören in eine wasserdichte Hülle, Kopien werden am besten separat aufbewahrt.",
  },
  {
    q: "Welche Schuhe und Kleidung sollte ich einpacken?",
    a: "An Schuhen sind Bootsschuhe mit abriebfester Sohle, Flip-Flops, sportliche Sandalen für Landgänge und warme Socken für kühle Abende sinnvoll. Bei der Kleidung empfehlen sich leichte Hosen und Shorts, T-Shirts und Longsleeves, Badekleidung sowie eine winddichte Softshell-Jacke. Eine Kopfbedeckung und Handschuhe runden die Schutzausrüstung ab.",
  },
  {
    q: "Brauche ich Powerbank und Sonnenschutz an Bord?",
    a: "Eine große Powerbank ist sinnvoll, auch wenn WLAN an Bord verfügbar ist, dazu Ladeadapter und Kabel im europäischen Standard. Beim Sonnenschutz wird reichlich Sonnencreme mit SPF 50+ sowie Lippenpflege mit Lichtschutzfaktor empfohlen. Eine kleine Reiseapotheke und Insektenschutzmittel gehören ebenfalls ins Gepäck.",
  },
];

export default function SegeltornPacklistePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": kategorien.map((kat) => ({
              "@type": "ItemList",
              name: kat.titel,
              itemListElement: kat.items.map((item, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                name: item,
              })),
            })),
          }),
        }}
      />
      <PageHero
        eyebrow="Packliste"
        title="Segeltörn Packliste"
        lede="Was ihr wirklich braucht, was ihr besser zuhause lasst – und warum weniger an Bord fast immer mehr ist."
        image="/images/yacht-cabin.jpg"
        imageAlt="Ordentlich gepackte Kabine an Bord der Miss Moneypenny"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/segeltorn-planen" }, { label: "Packliste" }]}
      />

      <ArticleByline slug="segeltorn-packliste" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Vor dem Packen</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Weniger ist auf dem Wasser mehr.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Stauraum ist an Bord begrenzt – auch auf einem Katamaran. Die
                  Faustregel: ein Rollkoffer oder Reisetasche (keine Hartschale) pro
                  Person, max. 60–70 Liter. Was nicht reinpasst, bleibt im Auto oder
                  Hotel an Land.
                </p>
                <p>
                  Die Miss Moneypenny hat WLAN an Bord, Bettwäsche und Handtücher sind
                  gestellt. Das spart sofort Volumen. Wer Schnorchelzeug vergisst –
                  kein Problem, auch das ist an Bord.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill"><Icon name="bed" style={{ width: 15 }} /> Bettwäsche gestellt</span>
                <span className="tag-pill">Handtücher gestellt</span>
                <span className="tag-pill">Schnorchel an Bord</span>
                <span className="tag-pill">WLAN inklusive</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-salon.jpg" alt="Heller Salon der Miss Moneypenny mit Stauraum" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PDF Download */}
      <section className="section surface-navy">
        <div className="container">
          <div className="split align-center">
            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Zum Ausdrucken</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Die Packliste als PDF.</Reveal>
              <Reveal as="p" delay={2} className="lede" style={{ marginTop: "1rem" }}>
                Alle Kategorien auf einer Seite – zum Ausdrucken, Abhaken und Mitnehmen. Einfach herunterladen und vor dem Törn ausfüllen.
              </Reveal>
              <Reveal as="div" delay={3} style={{ marginTop: "2rem" }}>
                <a href="/Miss-Moneypenny-Packliste.pdf" download className="btn btn-primary">
                  Packliste herunterladen (PDF)
                </a>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div style={{ background: "rgba(197,163,106,0.08)", border: "1px solid rgba(197,163,106,0.3)", borderRadius: "12px", padding: "2rem 2.4rem", minWidth: 220, textAlign: "center" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--brass)", display: "block", margin: "0 auto 1rem" }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/>
                </svg>
                <p style={{ color: "var(--brass-300)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Miss Moneypenny</p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.78rem", marginTop: "0.3rem" }}>Segeltörn Packliste · PDF</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Packliste */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Die vollständige Liste</span>
            <h2 className="section-title">Was wirklich ins Gepäck gehört.</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem", gap: "3rem" }}>
            {kategorien.map((kat, i) => (
              <Reveal key={kat.titel} delay={((i % 2) + 1) as 1 | 2}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
                    <span className="ic" style={{ width: 36, height: 36, flexShrink: 0 }}><Icon name={kat.icon} /></span>
                    <h3 style={{ fontSize: "1.15rem" }}>{kat.titel}</h3>
                  </div>
                  <ul style={{ listStyle: "none", display: "grid", gap: "0" }}>
                    {kat.items.map((item) => (
                      <li key={item} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", padding: "0.6rem 0", borderBottom: "1px solid var(--sand-line)", fontSize: "0.93rem", color: "var(--text-soft)" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--brass-600)", flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Koffer-Tipp */}
      <section className="section surface-navy">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Gepäck-Tipp</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Keine Hartschalen-Koffer auf dem Wasser.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.4rem" }}>
                <p>
                  Hartschalenkoffer passen nicht in die Kojenablagen und blockieren
                  Gangways. Ideal sind weiche Reisetaschen oder Duffelbags, die sich
                  zusammenfalten lassen, wenn sie leer sind.
                </p>
                <p>
                  Tagesgepäck für Landgänge in einen kleinen Rucksack – der Rest bleibt
                  sicher verstaut in der Kabine. Die Lagoon 400 S2 hat unter jeder
                  Koje großzügigen Stauraum.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2} className="grid-2" style={{ gap: "1.2rem" }}>
              <article className="feature">
                <span className="ic"><Icon name="anchor" /></span>
                <h3>Weiche Tasche</h3>
                <p>Duffelbag oder Rucksack, max. 60–70 l pro Person.</p>
              </article>
              <article className="feature">
                <span className="ic"><Icon name="leaf" /></span>
                <h3>Tagesrucksack</h3>
                <p>Kleiner Rucksack für Hafenstädte und Wanderungen.</p>
              </article>
              <article className="feature">
                <span className="ic"><Icon name="droplet" /></span>
                <h3>Drybag</h3>
                <p>Für Wertsachen im Beiboot oder an feuchten Tagen.</p>
              </article>
              <article className="feature">
                <span className="ic"><Icon name="shield" /></span>
                <h3>Dokumente</h3>
                <p>Originals in wasserdichter Hülle, Kopien separat.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Weiterführend */}
      <section className="section">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow centered">Alles für den Törn</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Nächster Schritt: Kroatien-spezifische Liste.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Was für Kroatien speziell gilt – Nationalpark-Vignette, Dokumente,
              Währung und Besonderheiten des Reviers.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/packliste-segeln-kroatien" className="btn btn-primary">Kroatien-Packliste</Link>
              <Link href="/einkaufsliste-segeltorn" className="btn btn-outline">Einkaufsliste & Speiseplan</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Packliste für den Segeltörn – häufige Fragen.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/segeltorn-packliste#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-cabin.jpg" />
    </>
  );
}
