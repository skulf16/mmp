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
  title: "Dalmatien segeln: Route, Reviere, Häfen & Highlights",
  description:
    "Dalmatien segeln Route: Nord-, Mittel- und Süddalmatien im Überblick – wichtigste Häfen, Marinas, Inseln und Highlights für den perfekten Segeltörn.",
  openGraph: {
    title: "Segeln in Dalmatien – Reviere, Häfen & Highlights",
    description:
      "Der Revier-Guide für Dalmatien: Nord bis Süd, die wichtigsten Häfen und Marinas, schönste Inseln und Highlights für deinen Segeltörn.",
    images: [{ url: "/images/yacht-sailing-coast.jpg", width: 1200, height: 630, alt: "Segelyacht vor der dalmatinischen Küste Kroatiens" }],
  },
};

const reviere = [
  {
    icon: "anchor" as const,
    region: "Norddalmatien",
    spanne: "Zadar – Kornaten – Šibenik – Krka",
    text: "Das naturreichste Revier Dalmatiens. Die Kornaten mit 89 Inseln, der Krka-Nationalpark mit seinen Wasserfällen und das Naturschutzgebiet Telašćica prägen das Bild. Marinas in Zadar, Biograd und Šibenik (Mandalina). Ideal für Naturtörns mit kurzen Schlägen.",
  },
  {
    icon: "waves" as const,
    region: "Mitteldalmatien",
    spanne: "Trogir – Split – Šolta – Brač – Hvar – Vis",
    text: "Das vielseitigste Revier: lebhafte Städte wie Split und Trogir, die Inseln Brač, Hvar und das abgelegene Vis. Gute Drehscheibe mit großen Marinas und kurzen Inselhops. Perfekt für die Mischung aus Stadt, Strand und Buchten.",
  },
  {
    icon: "sun" as const,
    region: "Süddalmatien",
    spanne: "Korčula – Mljet – Elaphiten – Dubrovnik",
    text: "Der Süden ist ruhiger und einsamer: Korčula mit seiner Altstadt, der grüne Mljet-Nationalpark, die Elaphiten und am Ende Dubrovnik. Längere Distanzen, weniger Charterverkehr – ein Revier für erfahrenere Crews mit Zeit.",
  },
];

const inseln = [
  { icon: "leaf" as const, name: "Kornaten", text: "89 Inseln, karg und mondhaft, Nationalpark mit Vignettenpflicht. Das Naturhighlight Norddalmatiens." },
  { icon: "sun" as const, name: "Hvar", text: "Sonnenreichste Insel der Adria, mondäne Hafenstadt, Lavendelfelder und die vorgelagerten Pakleni-Inseln." },
  { icon: "anchor" as const, name: "Vis", text: "Am weitesten draußen, lange militärisches Sperrgebiet – heute ursprünglich, mit der Blauen Grotte auf Biševo." },
  { icon: "waves" as const, name: "Mljet", text: "Grünste Insel Süddalmatiens, Nationalpark mit zwei Salzseen und einem Inselkloster auf dem kleinen Eiland." },
];

const facts = [
  "Dalmatien gliedert sich in drei Segelreviere: Norddalmatien (Zadar bis Šibenik), Mitteldalmatien (Trogir bis Vis) und Süddalmatien (Korčula bis Dubrovnik).",
  "Norddalmatien ist das naturreichste Revier mit den Kornaten (89 Inseln, Nationalpark), dem Krka-Nationalpark und dem Naturschutzgebiet Telašćica.",
  "Mitteldalmatien verbindet lebhafte Städte wie Split, Trogir und Hvar mit kurzen Inselhops und gilt als das vielseitigste Revier.",
  "Süddalmatien rund um Korčula, Mljet und die Elaphiten bis Dubrovnik ist ruhiger, einsamer und verlangt längere Tagesschläge.",
  "Der Maestral, ein thermischer Nordwestwind, baut sich von Mai bis September verlässlich auf und erreicht nachmittags 3–5 Beaufort.",
  "Die Miss Moneypenny startet ab der Marina Mandalina in Šibenik – an der Grenze von Nord- zu Mitteldalmatien und damit zentral für beide Reviere.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Welche Reviere gehören zur Dalmatien-Segeln-Route?",
    a: "Dalmatien teilt sich in drei Segelreviere. Norddalmatien reicht von Zadar über die Kornaten und Šibenik bis zum Krka-Nationalpark. Mitteldalmatien umfasst Trogir, Split und die Inseln Šolta, Brač, Hvar und Vis. Süddalmatien beginnt bei Korčula, führt über Mljet und die Elaphiten und endet in Dubrovnik. Jedes Revier hat einen eigenen Charakter – von naturnah im Norden bis einsam und weitläufig im Süden.",
  },
  {
    q: "Welches Segelrevier in Dalmatien eignet sich für Einsteiger?",
    a: "Norddalmatien rund um Šibenik und die Kornaten ist ideal für Einsteiger: kurze Distanzen, viele geschützte Ankerbuchten und Marinas in kurzer Reichweite. Mitteldalmatien bietet ebenfalls bequeme Inselhops. Süddalmatien mit seinen längeren Schlägen über offene Seegebiete passt eher zu erfahreneren Crews mit mehr Zeit an Bord.",
  },
  {
    q: "Wo liegen die wichtigsten Häfen und Marinas in Dalmatien?",
    a: "Im Norden sind das die Marinas in Zadar, Biograd und Šibenik (unter anderem Mandalina). In Mitteldalmatien zählen Trogir, Split (Marina Kaštela, ACI Split) und Häfen auf Brač und Hvar zu den wichtigsten Stützpunkten. Im Süden dienen Korčula, Vela Luka und der Raum Dubrovnik als Anlaufpunkte. Liege- und Mooringgebühren bewegen sich grob zwischen etwa 50 und 150 € pro Nacht (Richtwerte, Stand 2026 – variiert je nach Saison, Bootsgröße und Anbieter; verbindliche Zahlen auf Anfrage).",
  },
  {
    q: "Wann ist die beste Reisezeit für einen Dalmatien-Törn?",
    a: "Die Saison reicht von Mai bis Oktober. Juni und September gelten als die goldenen Monate: warm, mit verlässlichem Maestral und weniger Betrieb. Juli und August sind heiß und stark frequentiert. Verlässlichen Segelwind mit 3–5 Beaufort am Nachmittag liefert der Maestral vor allem von Mai bis September.",
  },
  {
    q: "Wo startet die Miss Moneypenny in Dalmatien?",
    a: "Die Miss Moneypenny liegt in der Marina Mandalina in Šibenik – genau an der Grenze von Nord- zu Mitteldalmatien. Von dort erreicht ihr in wenigen Stunden die Kornaten, den Krka-Nationalpark und Telašćica im Norden sowie Trogir, Split und Hvar Richtung Süden. Das macht Šibenik zu einem zentralen Ausgangspunkt für beide Reviere.",
  },
];

export default function DalmatienSegelnRoutePage() {
  return (
    <>
      <PageHero
        eyebrow="Revier-Guide"
        title="Segeln in Dalmatien: Reviere, Häfen & Highlights"
        lede="Die Dalmatien-Segeln-Route von Nord nach Süd: drei Reviere, ihre wichtigsten Häfen und Marinas, die schönsten Inseln und woran ihr euch bei der Planung orientiert."
        image="/images/yacht-sailing-coast.jpg"
        imageAlt="Segelyacht vor der dalmatinischen Küste Kroatiens"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/ratgeber" }, { label: "Segeln in Dalmatien" }]}
      />

      <ArticleByline slug="dalmatien-segeln-route" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Einleitung */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Das Revier im Überblick</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Dalmatien als Segelrevier – von Zadar bis Dubrovnik.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Wer eine <strong>Dalmatien-Segeln-Route</strong> plant, hat eines der
              dichtesten und abwechslungsreichsten Segelreviere des Mittelmeers vor
              sich. Über mehrere hundert Kilometer reiht sich Insel an Insel, dazwischen
              liegen geschützte Kanäle, Nationalparks und Hafenstädte mit jahrhundertealten
              Altstädten. Für die Planung lohnt es sich, das Revier in drei Abschnitte zu
              denken: Nord-, Mittel- und Süddalmatien. Jeder Abschnitt hat seinen eigenen
              Charakter – und je nachdem, wo ihr startet, ergibt sich daraus fast von selbst
              eine sinnvolle Route.
            </p>
            <p>
              Das Schöne am <em>Segeln in Dalmatien</em>: Die Distanzen zwischen den Inseln
              sind kurz, der Wind ist im Sommer berechenbar und Ankerbuchten gibt es im
              Überfluss. Eine Woche reicht gut für einen Abschnitt; wer beide Hälften eines
              Reviers verbinden will, plant besser zwei Wochen. Im Folgenden gehen wir die
              drei Reviere von Nord nach Süd durch – mit Charakter, den wichtigsten Häfen
              und Marinas, den Highlights und einer ehrlichen Einschätzung, für wen sich
              das jeweilige <em>Dalmatien-Segelrevier</em> eignet.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Reviere-Überblick Grid */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Drei Reviere</span>
            <h2 className="section-title">Nord, Mitte, Süd – auf einen Blick.</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {reviere.map((r, i) => (
              <Reveal key={r.region} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={r.icon} /></span>
                  <h3>{r.region}</h3>
                  <p style={{ fontSize: "0.86rem", color: "var(--brass-600)", fontWeight: 600, marginTop: "0.2rem" }}>{r.spanne}</p>
                  <p>{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Norddalmatien */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Revier 1</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Norddalmatien – Kornaten, Krka und Šibenik.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Norddalmatien reicht grob von Zadar bis Šibenik und ist das
                  naturreichste Revier der Region. Sein Herzstück sind die Kornaten:
                  ein Nationalpark aus 89 kargen, fast mondhaften Inseln, für den eine
                  Vignette nötig ist – am besten vorab online vorbestellen. Direkt
                  benachbart liegt das Naturschutzgebiet Telašćica mit seinen Steilklippen
                  und dem Salzsee. Auf dem Festland lockt der Krka-Nationalpark mit seinen
                  Wasserfällen, erreichbar über den Fluss ab Skradin.
                </p>
                <p>
                  Wichtigste Häfen und Marinas sind hier Zadar, Biograd und Šibenik –
                  letzteres mit der Marina Mandalina. Die Distanzen zwischen den Inseln
                  sind kurz, geschützte Ankerbuchten zahlreich. Das macht Norddalmatien
                  zum idealen Revier für Naturtörns und für Crews, die kurze Schläge und
                  viel Zeit vor Anker bevorzugen. Wer es ganz genau wissen will, findet in
                  unseren Revierguides zu den <Link href="/segeln-in-den-kornaten">Kornaten</Link>{" "}
                  und zum <Link href="/revier-sibenik">Revier Šibenik</Link> die Details.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Kornaten-Nationalpark</span>
                <span className="tag-pill">Krka-Wasserfälle</span>
                <span className="tag-pill">kurze Schläge</span>
                <span className="tag-pill">Einsteiger-freundlich</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/region-kornati-cove.png" alt="Geschützte Ankerbucht in den Kornaten in Norddalmatien" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mitteldalmatien */}
      <section className="section surface-dark">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div" delay={1}>
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/city-split.png" alt="Hafenstadt Split in Mitteldalmatien" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Revier 2</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Mitteldalmatien – Split, Trogir und die großen Inseln.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Mitteldalmatien spannt sich von Trogir über Split bis zu den Inseln
                  Šolta, Brač, Hvar und dem abgelegenen Vis. Es ist das vielseitigste
                  Revier Dalmatiens: Hier treffen lebhafte Hafenstädte mit UNESCO-Altstädten
                  auf weltbekannte Inseln. Split ist die größte Stadt der Küste und eine
                  zentrale Drehscheibe, Trogir ein mittelalterliches Juwel. Hvar gilt als
                  sonnenreichste Insel der Adria, Brač ist berühmt für das Zlatni-Rat-Strandhorn,
                  Vis als ursprünglichste Insel weit draußen.
                </p>
                <p>
                  An Häfen und Marinas mangelt es nicht: rund um Split liegen große Anlagen
                  wie die Marina Kaštela und die ACI-Marina, dazu Stadthäfen auf Hvar und
                  Brač. Die Inselhops bleiben kurz, sodass sich Stadt, Strand und einsame
                  Bucht bequem in einer Woche verbinden lassen. Wer mehr über die einzelnen
                  Hafenstädte lesen möchte, findet das in unserem Guide zu den{" "}
                  <Link href="/staedte-dalmatiens">Städten Dalmatiens</Link>.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Städte & Inseln</span>
                <span className="tag-pill">Split · Trogir · Hvar</span>
                <span className="tag-pill">große Marinas</span>
                <span className="tag-pill">vielseitig</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Süddalmatien */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Revier 3</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Süddalmatien – Korčula, Mljet und Dubrovnik.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Süddalmatien beginnt rund um Korčula, führt über den grünen
                  Mljet-Nationalpark und die Elaphiten und endet in Dubrovnik. Dieses
                  Revier ist ruhiger und einsamer als der Norden: Korčula besticht mit
                  einer kompakten, von Mauern umfassten Altstadt, Mljet schützt zwei
                  Salzseen und ein Inselkloster, die Elaphiten sind eine Gruppe
                  beschaulicher, teils autofreier Inseln vor den Toren Dubrovniks. Den
                  krönenden Abschluss bildet die berühmte Stadtmauer von Dubrovnik.
                </p>
                <p>
                  Die Tagesschläge sind hier länger und führen teils über offenere
                  Seegebiete, der Charterverkehr ist deutlich dünner. Das macht
                  Süddalmatien zu einem Revier für erfahrenere Crews, die Weite und Ruhe
                  suchen und genug Zeit mitbringen. Als Anlaufpunkte dienen Korčula,
                  Vela Luka und der Raum Dubrovnik. Für einen kompletten Süd-Törn solltet
                  ihr eher zwei Wochen einplanen oder eine One-Way-Strecke wählen.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Mljet-Nationalpark</span>
                <span className="tag-pill">Korčula · Elaphiten</span>
                <span className="tag-pill">längere Distanzen</span>
                <span className="tag-pill">ruhig & weit</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/city-hvar.png" alt="Altstadt und Hafen in Süddalmatien an der kroatischen Küste" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Inseln-Highlights Grid */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Highlights</span>
            <h2 className="section-title">Vier Inseln, die jeden Törn lohnen.</h2>
          </Reveal>
          <div className="grid-4" style={{ marginTop: "3rem" }}>
            {inseln.map((isl, i) => (
              <Reveal key={isl.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <article className="feature">
                  <span className="ic"><Icon name={isl.icon} /></span>
                  <h3 style={{ fontSize: "1rem" }}>{isl.name}</h3>
                  <p style={{ fontSize: "0.88rem" }}>{isl.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Winde & Reisezeit */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Wind & Reisezeit</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Maestral, Bora, Jugo – und wann es sich lohnt.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Der prägende Sommerwind in ganz Dalmatien ist der Maestral, ein thermischer
              Nordwestwind. Er baut sich an verlässlichen Tagen zwischen 10 und 12 Uhr auf,
              erreicht nachmittags 3–5 Beaufort und legt sich nach Sonnenuntergang wieder –
              ideale Verhältnisse für entspanntes Segeln. Gegenspieler sind die Bora, ein
              böiger, katabatischer Fallwind aus Nordost, der in Böen 8–10 Beaufort erreichen
              kann, und der Jugo aus Süd-Südost, der warm und feucht ist und langen Seegang
              aufbaut. Die Bora weht häufiger im Winter; im Sommer ist sie seltener, sollte
              aber ernst genommen werden.
            </p>
            <p>
              Die Saison reicht von Mai bis Oktober. Juni und September sind die goldenen
              Monate: warm, mit verlässlichem Maestral und weniger Betrieb auf dem Wasser.
              Juli und August sind heiß und stark frequentiert. Wie die drei Winde im
              Detail funktionieren und welcher Monat sich am besten eignet, lest ihr in
              unserem Ratgeber zu den <Link href="/winde-kroatien">Winden in Kroatien</Link>.
              Konkrete Routenvorschläge für verschieden lange Törns findet ihr in unserer
              Übersicht der <Link href="/segeltorn-routen-kroatien">Segeltörn-Routen in Kroatien</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Wo startet die Miss Moneypenny */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Ehrlich gesagt</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Wir starten ab Šibenik – mittendrin.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die Miss Moneypenny liegt in der Marina Mandalina in Šibenik, genau an der
              Grenze von Nord- zu Mitteldalmatien. Von dort erreicht ihr in wenigen
              Stunden die Kornaten, den Krka-Nationalpark und Telašćica – und Richtung
              Süden ebenso schnell Trogir, Split und Hvar. Ein idealer Ausgangspunkt für
              beide Reviere, ohne lange Anreisestrecken auf dem Wasser.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/kontakt" className="btn btn-primary">Verfügbarkeit anfragen</Link>
              <Link href="/charter-infos" className="btn btn-ghost">Charter-Infos &amp; Preise</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Dalmatien-Segeln-Route – häufige Fragen.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/dalmatien-segeln-route#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-sailing-coast.jpg" />
    </>
  );
}
