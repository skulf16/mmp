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
  title: "Maestral Wind: Der verlässliche Segelwind der Adria | Miss Moneypenny",
  description:
    "Maestral Wind erklärt: Entstehung, Tagesrhythmus, typische Stärke und wie Segler diesen nordwestlichen Thermikwind in Kroatien optimal nutzen.",
  openGraph: {
    title: "Maestral Wind – Entstehung, Rhythmus & Seglertipps für Kroatien",
    description: "Der Maestral ist der verlässlichste Segelwind der Adria. Alles über Entstehung, Stärke, Tagesrhythmus und wie ihr ihn auf dem Törn nutzt.",
    images: [{ url: "/images/yacht-sailing-side.jpg", width: 1200, height: 630, alt: "Katamaran segelt bei Maestral auf der Adria" }],
  },
};

const tagesrhythmus = [
  { uhrzeit: "06:00 – 09:00", zustand: "Windstille / schwach", hinweis: "Ruhige See, ideal für Hafenmanöver" },
  { uhrzeit: "09:00 – 11:00", zustand: "Aufbau", hinweis: "1–2 Bft, erste Kräuselwellen" },
  { uhrzeit: "11:00 – 14:00", zustand: "Voll entwickelt", hinweis: "3–4 Bft, schöne Segelfahrt" },
  { uhrzeit: "14:00 – 17:00", zustand: "Höhepunkt", hinweis: "4–5 Bft, lebhafter Seegang" },
  { uhrzeit: "17:00 – 20:00", zustand: "Abschwächung", hinweis: "Einlaufen, Anker setzen" },
  { uhrzeit: "ab 20:00", zustand: "Windstille / Nachtbrise", hinweis: "Ruhige Nacht vor Anker" },
];

const vorteile = [
  {
    icon: "sun" as const,
    title: "Kein Überraschungsmoment",
    text: "Der Maestral baut sich jeden Tag zur selben Zeit auf – und legt sich ebenso zuverlässig ab. Wer einmal mit ihm gesegelt ist, plant den nächsten Törn automatisch nach seinem Rhythmus.",
  },
  {
    icon: "wind" as const,
    title: "Ideale Stärke",
    text: "3 bis 5 Beaufort ist der Traumbereich für Segelkatamarane: genug Wind für Fahrt und Krängung, nicht genug für Seekrankheit oder unkontrollierten Seegang. Der Maestral landet dort fast täglich.",
  },
  {
    icon: "waves" as const,
    title: "Kurzer Fetch, kurzer Seegang",
    text: "Der Maestral weht von der Küste aufs Meer – die Wellen haben wenig Zeit aufzubauen. Der Seegang bleibt kurz und übersichtlich, ganz anders als beim Jugo mit seinem Tiefdruckseegang.",
  },
  {
    icon: "anchor" as const,
    title: "Ruhige Nächte",
    text: "Sobald sich das Land abkühlt, stirbt der Maestral. Ankerplätze, die tagsüber von 4 Bft bewegt werden, liegen abends oft spiegelglatt. Ruhige Nächte vor Anker sind mit dem Maestral fast garantiert.",
  },
];

const routentipps = [
  {
    icon: "sparkle" as const,
    title: "Morgens ablegen, nachmittags ankommen",
    text: "Früh am Morgen bei Windstille ablegen, mit dem aufbauenden Maestral Kurs aufnehmen und früh am Nachmittag die Zielbucht ansteuern – bevor es zu leb­haft wird. Klassischer Tagesrhythmus auf der Adria.",
  },
  {
    icon: "leaf" as const,
    title: "Mit dem Wind, nicht gegen ihn",
    text: "Da der Maestral von Nordwesten weht, ist der Kurs von Nord nach Süd – also beispielsweise von Šibenik in Richtung Kornaten oder Lastovo – ein angenehmes Halbwindssegeln. Zurück geht es morgens motortörnend.",
  },
  {
    icon: "shield" as const,
    title: "Regattataktik: Luvseite nutzen",
    text: "An raumschots Kursen entwickelt ein Katamaran auf Maestral die besten Geschwindigkeiten. Direkt am Wind ist die Luvseite der Inseln oft geschützt und windärmer – dort liegen die ruhigsten Ankerbuchten.",
  },
  {
    icon: "sun" as const,
    title: "Mai und September bevorzugen",
    text: "In der Nebensaison ist der Maestral etwas moderater (3–4 Bft) und die Häfen deutlich leerer. Juli und August bringen zuverlässigere Winde, aber auch mehr Verkehr auf dem Wasser.",
  },
];

const facts = [
  "Der Maestral ist ein thermischer Nordwestwind und gilt als verlässlichster Segelwind der Adria.",
  "Der Maestral baut sich von Mai bis September fast täglich auf und folgt einem festen Tagesrhythmus: Ruhe am Morgen, Aufbau bis etwa 11 Uhr, Höhepunkt am frühen Nachmittag, Abflauen nach Sonnenuntergang.",
  "Typischerweise erreicht der Maestral 3 bis 5 Beaufort – an heißen Hochsommertagen auch 5 bis 6 Beaufort.",
  "Weil der Maestral von der Küste aufs Meer weht, bleibt der Seegang kurz und übersichtlich.",
  "Sobald sich das Land abends abkühlt, schläft der Maestral ein – Ankerplätze liegen nachts oft spiegelglatt.",
  "Die Miss Moneypenny, ein Lagoon-400-S2-Katamaran, liegt in der Marina Mandalina bei Šibenik – genau dort, wo der Maestral jeden Sommer zuverlässig aufbaut.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Wie stark weht der Maestral typischerweise?",
    a: "Meist erreicht der Maestral 3 bis 5 Beaufort – der Traumbereich für einen Segelkatamaran. An heißen Hochsommertagen kann er auch 5 bis 6 Beaufort erreichen, an bewölkten Tagen mit schwachem Wärmegradienten bleibt er schwach oder bleibt ganz aus.",
  },
  {
    q: "Wann am Tag weht der Maestral?",
    a: "Der Maestral folgt der Sonne: Am Morgen herrscht Windstille, ab etwa 9 Uhr baut er sich auf, voll entwickelt ist er ab Mittag und erreicht seinen Höhepunkt am frühen Nachmittag. Nach Sonnenuntergang flaut er wieder ab.",
  },
  {
    q: "Wann ist die beste Zeit, um mit dem Maestral zu segeln?",
    a: "Der Maestral weht von Mai bis September fast täglich. In der Nebensaison wie Mai und September ist er etwas moderater (3–4 Bft) und die Häfen sind leerer, während Juli und August zuverlässigere Winde, aber mehr Verkehr auf dem Wasser bringen.",
  },
  {
    q: "Wie plane ich meinen Törn nach dem Maestral?",
    a: "Klassisch legt ihr früh am Morgen bei Windstille ab, nehmt mit dem aufbauenden Maestral Kurs auf und steuert früh am Nachmittag die Zielbucht an, bevor es zu lebhaft wird. Da der Wind aus Nordwesten kommt, ist ein Kurs von Nord nach Süd – etwa von Šibenik Richtung Kornaten – angenehmes Halbwindsegeln.",
  },
  {
    q: "Wie unterscheidet sich der Maestral von Bora und Jugo?",
    a: "Der Maestral ist der angenehmste der drei Hauptwinde: thermisch, tagsüber begrenzt und verlässlich. Die Bora ist ein katabatischer, böiger Fallwind, der ohne viel Vorwarnung mit Sturmstärke einsetzen kann; der Jugo ist warm und ausdauernd und bringt einen langen Seegang, der noch stundenlang nachrollt.",
  },
];

export default function MaestralWindPage() {
  return (
    <>
      <PageHero
        eyebrow="Winde Kroatiens"
        title="Maestral – der beste Freund der Segler"
        lede="Jeden Tag pünktlich, selten zu stark, nie langweilig: Der Maestral ist der Nordwestwind, der Kroatien zu einem der schönsten Segelreviere der Welt macht."
        image="/images/yacht-sailing-side.jpg"
        imageAlt="Katamaran segelt bei Maestral auf der Adria"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/ratgeber" }, { label: "Maestral Wind" }]}
      />

      <ArticleByline slug="maestral-wind" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Entstehung */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Thermikwind</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Wie der Maestral entsteht – Physik hinter dem Segelwind.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Der Maestral ist ein klassischer Thermikwind oder Seewind: Das
                  dalmatinische Festland und die Kalksteininseln heizen sich unter der
                  Sommersonne stark auf – deutlich schneller als das Adria­wasser.
                  Die warme Landluft steigt auf, kühle Meeresluft strömt vom
                  Nordwesten nach – der Maestral setzt ein.
                </p>
                <p>
                  Dieser Prozess wiederholt sich von Mai bis September fast täglich
                  und folgt einem verlässlichen Tagesrhythmus: Ruhe am Morgen,
                  Aufbau bis 11 Uhr, Höhepunkt am frühen Nachmittag, Abflauen nach
                  Sonnenuntergang. Für Segler bedeutet das absolute Planbarkeit.
                </p>
                <p>
                  Je heißer der Tag, desto stärker der Maestral – in Hochsommertagen
                  kann er durchaus 5 bis 6 Beaufort erreichen. An bewölkten Tagen mit
                  schwächerem Wärmegradienten bleibt er schwach oder bleibt ganz aus.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Nordwest</span>
                <span className="tag-pill">thermisch</span>
                <span className="tag-pill">3–5 Bft</span>
                <span className="tag-pill">Mai – September</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-sailing-genoa.jpg" alt="Segelboot mit großer Genua bei Maestral" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tagesrhythmus */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Tagesrhythmus</span>
            <h2 className="section-title">Der Maestral – stündlich vorhersehbar.</h2>
            <p className="lede">Kein Wettermodell nötig: Der Maestral folgt der Sonne. Diesen Rhythmus sollte jeder kennen, der auf der Adria segelt.</p>
          </Reveal>
          <div style={{ marginTop: "2.5rem", overflowX: "auto" }}>
            <Reveal as="table" style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.94rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--sand-line)", textAlign: "left" }}>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Uhrzeit</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Windzustand</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Törnplanung</th>
                </tr>
              </thead>
              <tbody>
                {tagesrhythmus.map((row, i) => (
                  <tr key={row.uhrzeit} style={{ borderBottom: "1px solid var(--sand-line)", background: i % 2 === 0 ? "transparent" : "rgba(197,163,106,0.04)" }}>
                    <td style={{ padding: "0.8rem 1rem", fontWeight: 600, whiteSpace: "nowrap" }}>{row.uhrzeit}</td>
                    <td style={{ padding: "0.8rem 1rem", color: "var(--navy-900)" }}>{row.zustand}</td>
                    <td style={{ padding: "0.8rem 1rem", color: "var(--text-soft)" }}>{row.hinweis}</td>
                  </tr>
                ))}
              </tbody>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Segelwind</span>
            <h2 className="section-title">Warum der Maestral so beliebt ist.</h2>
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

      {/* Maestral vs. andere Winde */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Im Vergleich</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Maestral, Bora und Jugo – drei völlig verschiedene Winde.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Der Maestral ist der angenehmste der drei Hauptwinde. Er ist
                  thermisch, tagsüber begrenzt und verlässlich. Die{" "}
                  <Link href="/bora-kroatien">Bora</Link> dagegen ist katabatisch,
                  winterlastig und böig – sie kann ohne viel Vorwarnung mit
                  Sturmstärke einsetzen.
                </p>
                <p>
                  Der <Link href="/jugo-wind-kroatien">Jugo</Link> ist das Gegenteil:
                  warm, langsam aufbauend, aber ausdauernd. Was ihn gefährlicher als
                  den Maestral macht, ist sein langer Seegang – nicht die Windstärke
                  selbst, sondern das Rollen, das er bringt und das nach dem Wind noch
                  stundenlang anhält.
                </p>
                <p>
                  In der Segelhauptsaison von Mai bis September dominiert der
                  Maestral. Bora und Jugo sind seltener, aber Segler sollten ihre
                  Warnsignale kennen.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-sailing-coast.jpg" alt="Segelboot auf der Adria" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Routentipps */}
      <section className="section surface-dark">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Törnplanung</span>
            <h2 className="section-title">Den Maestral in die Routenplanung einbauen.</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {routentipps.map((t, i) => (
              <Reveal key={t.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={t.icon} /></span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Intern */}
      <section className="section surface-sand">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow centered">Winde der Adria</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Auch Bora und Jugo kennenlernen.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Auf einem Kroatien-Törn begegnet euch früher oder später auch die
              Bora oder der Jugo. Die eigenen Seiten erklären ihre Entstehung,
              Warnsignale und Tipps.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/bora-kroatien" className="btn btn-primary">Bora in Kroatien</Link>
              <Link href="/jugo-wind-kroatien" className="btn btn-outline">Jugo Wind Kroatien</Link>
              <Link href="/winde-kroatien" className="btn btn-outline">Alle Winde im Überblick</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Charter */}
      <section className="section">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Den Maestral mit uns erleben.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die Miss Moneypenny liegt in der Marina Mandalina bei Šibenik –
              genau dort, wo der Maestral jeden Sommer zuverlässig aufbaut.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/kontakt" className="btn btn-primary">Verfügbarkeit anfragen</Link>
              <Link href="/charter-infos" className="btn btn-outline">Charter-Infos</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Maestral – kurz erklärt.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/maestral-wind#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-sailing-side.jpg" />
    </>
  );
}
