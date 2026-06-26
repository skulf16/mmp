import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ArticleByline from "@/components/ArticleByline";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import FaqSection from "@/components/FaqSection";
import { Icon, ArrowRight } from "@/components/Icons";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Segelrevier Kroatien: Nord vs. Süd & wo am besten starten",
  description:
    "Segelrevier Kroatien im Überblick: Istrien, Kvarner Bucht, Mittel- und Süddalmatien im Vergleich – wo es sich am besten startet und welches Revier zu dir passt.",
  openGraph: {
    title: "Segelrevier Kroatien – Nord vs. Süd im Überblick",
    description:
      "Welches Segelrevier in Kroatien passt zu dir? Istrien, Kvarner, Mittel- und Süddalmatien im Vergleich – mit klarer Startempfehlung.",
    images: [
      {
        url: "/images/yacht-aerial-wide.jpg",
        width: 1200,
        height: 630,
        alt: "Luftaufnahme eines Katamarans in einer Bucht der kroatischen Adria",
      },
    ],
  },
};

const reviere = [
  {
    icon: "wind" as const,
    name: "Istrien (Nordadria)",
    inseln: "wenige",
    distanzen: "größer",
    wind: "wechselhaft, Bora-exponiert",
    crowds: "moderat",
    eignung: "Genuss & Kultur",
  },
  {
    icon: "waves" as const,
    name: "Kvarner Bucht",
    inseln: "mittel",
    distanzen: "mittel",
    wind: "Bora-anfällig",
    crowds: "ruhiger",
    eignung: "Fortgeschrittene",
  },
  {
    icon: "anchor" as const,
    name: "Norddalmatien (Zadar/Šibenik/Kornaten)",
    inseln: "sehr viele",
    distanzen: "kurz",
    wind: "geschützt, Maestral",
    crowds: "gemischt",
    eignung: "Einsteiger & Familien",
  },
  {
    icon: "sun" as const,
    name: "Mitteldalmatien (Split/Hvar)",
    inseln: "viele",
    distanzen: "kurz–mittel",
    wind: "verlässlicher Maestral",
    crowds: "hoch im Sommer",
    eignung: "Allrounder",
  },
  {
    icon: "sparkle" as const,
    name: "Süddalmatien (Korčula/Mljet/Dubrovnik)",
    inseln: "viele",
    distanzen: "größer",
    wind: "Maestral & Jugo",
    crowds: "hoch um Dubrovnik",
    eignung: "Erfahrene & Genießer",
  },
];

const facts = [
  "Kroatien hat über 1.000 Inseln; das Segelrevier zieht sich von Istrien im Nordwesten über die Kvarner Bucht bis Süddalmatien rund um Dubrovnik.",
  "Norddalmatien rund um Šibenik und die Kornaten gilt mit über 89 Inseln im Nationalpark und kurzen Etappen als eines der geschütztesten Reviere für Einsteiger und Familien.",
  "Der Maestral, ein thermischer Nordwestwind, baut sich von Mai bis September zwischen 10 und 12 Uhr auf und erreicht nachmittags verlässlich 3–5 Beaufort.",
  "Mitteldalmatien ab Šibenik verbindet kurze Distanzen, geschützte Kanäle und verlässlichen Maestral – ein idealer Allrounder für die erste Woche unter Segeln.",
  "Die Miss Moneypenny, ein Lagoon 400 S2, liegt in der Marina Mandalina in Šibenik und erreicht von dort Kornaten, Krka-Nationalpark, Trogir, Split und Hvar in wenigen Stunden.",
  "Für die Kornaten und Telašćica wird eine Nationalpark-Vignette benötigt, die am besten online vorbestellt wird.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Welches Segelrevier in Kroatien eignet sich am besten für Einsteiger und Familien?",
    a: "Norddalmatien und Mitteldalmatien rund um Zadar, Šibenik und Split gelten als die einsteiger- und familienfreundlichsten Reviere. Die Distanzen zwischen den Inseln sind kurz, viele Kanäle und Buchten liegen geschützt, und der thermische Maestral weht von Mai bis September verlässlich mit 3–5 Beaufort. Wer entspannt segeln und trotzdem täglich neue Inseln entdecken möchte, ist hier richtig.",
  },
  {
    q: "Wo segeln in Kroatien – Nord oder Süd?",
    a: "Der Norden (Istrien, Kvarner) punktet mit Kultur, größeren Etappen und weniger Inseln, ist aber stärker der Bora ausgesetzt. Der Süden (Korčula, Mljet, Dubrovnik) ist landschaftlich spektakulär, dafür länger in den Distanzen und im Hochsommer rund um Dubrovnik voll. Dazwischen liegt Dalmatien mit der höchsten Inseldichte und den kürzesten Wegen – für die meisten Crews der beste Kompromiss.",
  },
  {
    q: "Wie viele Inseln hat das Segelrevier Kroatien?",
    a: "Die kroatische Adria zählt über 1.000 Inseln, Inselchen und Riffe, von denen nur ein kleiner Teil dauerhaft bewohnt ist. Besonders dicht ist das Archipel in Dalmatien: Allein der Kornaten-Nationalpark vor Šibenik umfasst 89 Inseln auf engem Raum – ein Grund, warum dieses Revier so kurze Segeletappen erlaubt.",
  },
  {
    q: "Welche Segelreviere in Kroatien sind am stärksten frequentiert?",
    a: "Im Hochsommer (Juli und August) sind die Hotspots Hvar in Mitteldalmatien und der Raum um Dubrovnik im Süden am vollsten. Ruhiger bleibt es in der Kvarner Bucht und in den Seitenarmen Norddalmatiens. Wer Trubel meiden möchte, segelt in den goldenen Monaten Juni und September – dann ist es warm, der Maestral verlässlich und in den Buchten deutlich mehr Platz.",
  },
  {
    q: "Welches Segelrevier in Kroatien empfehlt ihr für die erste eigene Woche?",
    a: "Mitteldalmatien ab Šibenik. Die Distanzen sind kurz, die Kanäle geschützt, der Maestral verlässlich, und in wenigen Stunden erreicht man die Kornaten, den Krka-Nationalpark sowie die Städte Trogir, Split und Hvar. Diese Mischung aus Naturrevier und Kulturhäfen auf engem Raum macht es zum idealen Allrounder. Genau hier liegt auch die Miss Moneypenny in der Marina Mandalina.",
  },
];

export default function SegelrevierKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviere im Überblick"
        title="Segelrevier Kroatien: Nord vs. Süd – wo am besten starten?"
        lede="Von Istrien bis Dubrovnik: Wir vergleichen die kroatischen Segelreviere nach Distanzen, Wind, Inseldichte und Einsteigertauglichkeit – und sagen, wo ihr am besten startet."
        image="/images/yacht-aerial-wide.jpg"
        imageAlt="Luftaufnahme eines Katamarans in einer Bucht der kroatischen Adria"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/ratgeber" }, { label: "Segelrevier Kroatien" }]}
      />

      <ArticleByline slug="segelrevier-kroatien" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Einleitung */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Ein Revier, viele Gesichter</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Das Segelrevier Kroatien reicht von Istrien bis Dubrovnik.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              „Segelrevier Kroatien" klingt nach einer Region, ist in Wahrheit aber
              eine lange, stark gegliederte Küste mit mehr als 1.000 Inseln. Vom
              istrischen Nordwesten über die Kvarner Bucht bis hinunter nach
              Süddalmatien rund um Dubrovnik unterscheiden sich die Segelreviere
              Kroatiens deutlich – in der Inseldichte, in den Distanzen zwischen den
              Ankerplätzen, im Wind und darin, wie viel Betrieb in der Hochsaison
              herrscht. Die ehrliche Antwort auf die Frage „wo segeln in Kroatien?"
              lautet daher: Es kommt darauf an, was ihr sucht.
            </p>
            <p>
              Drei Größen entscheiden, ob ein Revier zu euch passt: die <strong>Etappenlänge</strong>
              {" "}(wie weit liegt die nächste Bucht?), der <strong>Schutz vor Wind und
              Seegang</strong> und die <strong>Inseldichte</strong>. Wer zum ersten Mal selbst
              chartert oder mit Kindern unterwegs ist, will kurze Schläge und
              geschützte Reviere; erfahrene Crews suchen vielleicht den großen
              Schlag und exponiertere Ankerplätze. Im Folgenden ordnen wir die fünf
              klassischen Segelreviere Kroatiens von Nord nach Süd ein.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Norden: Istrien & Kvarner */}
      <section className="section surface-sand">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Der Norden</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Istrien & Kvarner Bucht – Kultur, größere Schläge, mehr Bora.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  <strong>Istrien</strong> ist die nördlichste Spitze der kroatischen Adria –
                  geprägt von venezianisch anmutenden Hafenstädten wie Rovinj und
                  Poreč, gutem Essen und Wein. Inseln gibt es hier vergleichsweise
                  wenige, die Distanzen entlang der Westküste sind größer, und das
                  Revier ist offener und stärker der Bora ausgesetzt, dem
                  katabatischen Fallwind aus Nordost. Istrien ist eher ein Genuss-
                  und Kulturrevier als ein klassisches Inselhopping-Gebiet.
                </p>
                <p>
                  Die <strong>Kvarner Bucht</strong> südlich davon – mit den großen Inseln Cres,
                  Lošinj, Krk und Rab – liegt dazwischen: mittlere Distanzen, ein
                  ruhigeres Revier mit weniger Charterbetrieb, aber bekannt für ihre
                  Bora-Anfälligkeit, gerade in den Übergangsmonaten. Beide Reviere im
                  Norden belohnen erfahrenere Crews, die mit wechselhaftem Wind und
                  längeren Etappen umgehen können. Wie der Wind hier tickt, lest ihr
                  im Detail in unserem Ratgeber zu den{" "}
                  <Link href="/winde-kroatien" className="link-arrow" style={{ display: "inline-flex" }}>Winden Kroatiens <ArrowRight /></Link>.
                </p>
                <p>
                  Wer den Norden vertiefen möchte, findet im eigenen{" "}
                  <Link href="/istrien-segeln" className="link-arrow" style={{ display: "inline-flex" }}>Revier-Guide Istrien <ArrowRight /></Link>{" "}
                  einen vollständigen Überblick mit Häfen, Ankerbuchten und Tipps.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-sailing-coast.jpg" alt="Segelyacht an der kroatischen Küste in der Nordadria" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mitte: Norddalmatien & Mitteldalmatien */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div" delay={1}>
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/region-kornati-aerial.png" alt="Luftaufnahme des Kornaten-Archipels in Norddalmatien" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow">Das Herzstück</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Dalmatien – die höchste Inseldichte und die kürzesten Wege.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  <strong>Norddalmatien</strong> rund um Zadar und Šibenik ist das dichteste
                  Inselrevier des Landes. Allein der Kornaten-Nationalpark umfasst 89
                  Inseln auf engstem Raum, dazu kommen der Krka-Nationalpark mit
                  seinen Wasserfällen, das Schutzgebiet Telašćica und unzählige
                  geschützte Buchten. Die Etappen sind kurz, viele Kanäle liegen
                  windgeschützt – ideal für Einsteiger und Familien. Für die Kornaten
                  und Telašćica braucht ihr eine Nationalpark-Vignette, die ihr am
                  besten vorab online bestellt.
                </p>
                <p>
                  <strong>Mitteldalmatien</strong> rund um Split und Hvar schließt nahtlos an:
                  immer noch viele Inseln, kurze bis mittlere Distanzen und der
                  verlässlichste Maestral der Adria. Hvar und Split gehören im
                  Hochsommer zu den belebtesten Häfen überhaupt – wer es ruhiger mag,
                  segelt in den goldenen Monaten Juni und September. Routen durch
                  dieses Herzstück findet ihr in unserer{" "}
                  <Link href="/dalmatien-segeln-route" className="link-arrow" style={{ display: "inline-flex" }}>Dalmatien-Routenübersicht <ArrowRight /></Link>{" "}
                  und konkret rund um den Heimathafen im{" "}
                  <Link href="/revier-sibenik" className="link-arrow" style={{ display: "inline-flex" }}>Revier-Guide Šibenik <ArrowRight /></Link>.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Süden */}
      <section className="section surface-sand">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Der Süden</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Süddalmatien – Korčula, Mljet und das Postkarten-Dubrovnik.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Süddalmatien zwischen Korčula, der grünen Insel Mljet mit ihrem
                  Nationalpark und Dubrovnik ist landschaftlich das vielleicht
                  spektakulärste Segelrevier Kroatiens. Die Inseln sind weiterhin
                  zahlreich, die Distanzen aber tendenziell größer als in Dalmatiens
                  Mitte, und neben dem Maestral spielt hier der warme, feuchte Jugo
                  aus Süd-Südost eine Rolle. Rund um Dubrovnik wird es in der
                  Hochsaison voll – die Stadt zieht Charterer aus dem ganzen
                  Mittelmeer an.
                </p>
                <p>
                  Der Süden lohnt sich besonders für Crews mit etwas Erfahrung, die
                  größere Schläge nicht scheuen und das mediterrane Flair von
                  Korčula und Dubrovnik suchen. Für eine entspannte erste Woche unter
                  Segeln ist er weniger geeignet als die dichteren, geschützteren
                  Reviere weiter nördlich.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/city-korcula.png" alt="Altstadt von Korčula in Süddalmatien" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vergleichstabelle */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Reviere im Vergleich</span>
            <h2 className="section-title">Segelreviere Kroatien – Nord bis Süd auf einen Blick.</h2>
            <p className="lede">Inseldichte, Distanzen, Wind, Andrang und Eignung der fünf klassischen Reviere im direkten Vergleich.</p>
          </Reveal>
          <div style={{ marginTop: "3rem", overflowX: "auto" }}>
            <Reveal as="table" style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.92rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(255,255,255,0.25)", textAlign: "left" }}>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700 }}>Revier</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700 }}>Inseln</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700 }}>Distanzen</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700 }}>Wind</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700 }}>Andrang</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700 }}>Eignung</th>
                </tr>
              </thead>
              <tbody>
                {reviere.map((row, i) => (
                  <tr key={row.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.12)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.04)" }}>
                    <td style={{ padding: "0.8rem 1rem", fontWeight: 600 }}>{row.name}</td>
                    <td style={{ padding: "0.8rem 1rem", opacity: 0.85 }}>{row.inseln}</td>
                    <td style={{ padding: "0.8rem 1rem", opacity: 0.85 }}>{row.distanzen}</td>
                    <td style={{ padding: "0.8rem 1rem", opacity: 0.85 }}>{row.wind}</td>
                    <td style={{ padding: "0.8rem 1rem", opacity: 0.85 }}>{row.crowds}</td>
                    <td style={{ padding: "0.8rem 1rem", color: "var(--brass-400, #d9b877)" }}>{row.eignung}</td>
                  </tr>
                ))}
              </tbody>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Kriterien-Karten */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Worauf es ankommt</span>
            <h2 className="section-title">Die vier Kriterien für die Revierwahl.</h2>
          </Reveal>
          <div className="grid-4" style={{ marginTop: "3rem" }}>
            <Reveal delay={1}>
              <article className="feature">
                <span className="ic"><Icon name="compass" /></span>
                <h3>Distanzen</h3>
                <p>Kurze Etappen (Dalmatien) bedeuten entspanntes Segeln und Zeit zum Baden. Größere Schläge im Norden und Süden verlangen mehr Routine.</p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="feature">
                <span className="ic"><Icon name="wind" /></span>
                <h3>Wind & Schutz</h3>
                <p>Der thermische Maestral ist in Dalmatien am verlässlichsten. Der Norden ist Bora-exponiert, im Süden kommt der Jugo dazu.</p>
              </article>
            </Reveal>
            <Reveal delay={3}>
              <article className="feature">
                <span className="ic"><Icon name="anchor" /></span>
                <h3>Inseldichte</h3>
                <p>Je mehr Inseln auf engem Raum, desto mehr Buchten zur Auswahl und desto kürzer der Weg zur nächsten Ankermöglichkeit.</p>
              </article>
            </Reveal>
            <Reveal delay={4}>
              <article className="feature">
                <span className="ic"><Icon name="users" /></span>
                <h3>Andrang</h3>
                <p>Hvar und Dubrovnik sind im Hochsommer voll. Juni und September bringen Platz in den Buchten bei warmem Wetter und gutem Wind.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Empfehlung */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Unsere Empfehlung</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Wo am besten starten? Mitteldalmatien ab Šibenik.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Wenn ihr uns fragt, wo man im Segelrevier Kroatien am besten startet,
              lautet die Antwort: <strong>Mitteldalmatien, konkret ab Šibenik</strong>. Dieses
              Revier vereint, was die anderen jeweils nur teilweise bieten. Die
              Distanzen sind kurz genug für entspannte Halbtagesschläge, die Kanäle
              und Buchten liegen geschützt, und der Maestral baut sich von Mai bis
              September verlässlich auf. Innerhalb weniger Stunden erreicht man von
              Šibenik aus die 89 Inseln der Kornaten, die Wasserfälle des
              Krka-Nationalparks, das Schutzgebiet Telašćica sowie die Städte
              Trogir, Split und Hvar.
            </p>
            <p>
              Damit deckt ein einziger Startpunkt beide Welten ab: das ruhige
              Naturrevier der Kornaten und die lebhaften Kulturhäfen Dalmatiens.
              Genau diese Mischung macht Šibenik zum idealen, geschützten Allrounder –
              für die erste eigene Woche ebenso wie für eine Familiencrew. Eine
              konkrete Wochenroute durch dieses Revier findet ihr in unseren{" "}
              <Link href="/segeltorn-routen-kroatien" className="link-arrow" style={{ display: "inline-flex" }}>Törn-Routen für Kroatien <ArrowRight /></Link>,
              und das Naturrevier selbst beschreiben wir im Detail im Guide{" "}
              <Link href="/segeln-in-den-kornaten" className="link-arrow" style={{ display: "inline-flex" }}>Segeln in den Kornaten <ArrowRight /></Link>.
            </p>
            <p>
              Genau hier liegt auch die Miss Moneypenny: Unser Lagoon 400 S2 hat
              seinen Heimathafen in der Marina Mandalina in Šibenik – mitten im
              Allrounder-Revier, von dem aus jede der oben genannten Etappen in
              Reichweite liegt.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Startklar im besten Allrounder-Revier.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die Miss Moneypenny liegt in der Marina Mandalina in Šibenik – von dort
              erreicht ihr Kornaten, Krka und die Städte Dalmatiens in wenigen Stunden.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/kontakt" className="btn btn-primary">Verfügbarkeit anfragen</Link>
              <Link href="/charter-infos" className="btn btn-ghost">Charter-Infos & Preise</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Segelreviere Kroatien – häufige Fragen.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/segelrevier-kroatien#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-aerial-wide.jpg" />
    </>
  );
}
