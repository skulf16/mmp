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
  title: "Segeltörn-Routen Kroatien: Die 7 schönsten Routen im Überblick",
  description:
    "Segeltörn Kroatien Route: Die 7 schönsten Segelrouten von den Kornaten über Dalmatien bis Istrien – Dauer, Highlights und für wen sich welche Route eignet.",
  openGraph: {
    title: "Die 7 schönsten Segeltörn-Routen in Kroatien",
    description:
      "Von den Kornaten über Mittel- und Süddalmatien bis Istrien: die 7 schönsten Segelrouten Kroatiens mit Dauer, Highlights und Eignung.",
    images: [
      {
        url: "/images/croatia-map.png",
        width: 1200,
        height: 630,
        alt: "Karte der kroatischen Adriaküste mit den schönsten Segelrouten",
      },
    ],
  },
};

const routen = [
  {
    icon: "leaf" as const,
    nr: "01",
    titel: "Kornaten-Runde ab Šibenik",
    dauer: "1 Woche",
    highlights: "Nationalpark Kornati (89 Inseln), Telašćica, einsame Ankerbuchten, Krka-Wasserfälle als Auftakt.",
    fuer: "Naturliebhaber, die karge Inselwelt und Stille über Trubel stellen.",
    direkt: true,
  },
  {
    icon: "compass" as const,
    nr: "02",
    titel: "Mitteldalmatien: Šibenik – Trogir – Split – Hvar",
    dauer: "1 Woche",
    highlights: "Mix aus Stadt und Bucht: UNESCO-Altstadt Trogir, Diokletianpalast Split, Lavendel-Insel Hvar.",
    fuer: "Crews, die Kultur, Nachtleben und Badebuchten kombinieren wollen.",
    direkt: true,
  },
  {
    icon: "waves" as const,
    nr: "03",
    titel: "Süddalmatien: Split – Korčula – Mljet – Dubrovnik",
    dauer: "1–2 Wochen",
    highlights: "Weininsel Korčula, Nationalpark Mljet mit Salzseen, Finale vor der Altstadt von Dubrovnik.",
    fuer: "Erfahrene Crews mit Zeit für die längere Süd-Strecke.",
    direkt: false,
  },
  {
    icon: "anchor" as const,
    nr: "04",
    titel: "Kvarner Bucht: Krk – Rab – Cres",
    dauer: "1 Woche",
    highlights: "Nordadria mit grünen Inseln, geschützten Kanälen, Sandstränden auf Rab und ruhigeren Häfen.",
    fuer: "Wer die Nordadria abseits der Dalmatien-Klassiker entdecken will.",
    direkt: false,
  },
  {
    icon: "sun" as const,
    nr: "05",
    titel: "Istrien: Pula – Rovinj – Brijuni",
    dauer: "1 Woche",
    highlights: "Römisches Amphitheater Pula, venezianisches Rovinj, Nationalpark-Inseln Brijuni.",
    fuer: "Liebhaber von Geschichte, Kulinarik und mediterranem Flair im Nordwesten.",
    direkt: false,
  },
  {
    icon: "sparkle" as const,
    nr: "06",
    titel: "Elaphiten ab Dubrovnik",
    dauer: "1 Woche",
    highlights: "Die weitgehend autofreien Inseln Lopud und Koločep sowie das größere Šipan, kurze Distanzen, Dubrovnik als Start und Ziel.",
    fuer: "Genuss-Segler im Süden mit Faible für ruhige, autofreie Inseln.",
    direkt: false,
  },
  {
    icon: "droplet" as const,
    nr: "07",
    titel: "Krka & Šibenik-Archipel",
    dauer: "Wochenende – 1 Woche",
    highlights: "Krka-Nationalpark mit Wasserfällen, die kleinen Inseln Zlarin und Prvić, kurze Etappen.",
    fuer: "Einsteiger und Familien mit Kindern – entspannt und nah am Heimathafen.",
    direkt: true,
  },
];

const facts = [
  "Kroatien zählt über 1.000 Inseln und gilt mit kurzen Distanzen, geschützten Gewässern und verlässlichem Maestral als eines der besten Segelreviere des Mittelmeers.",
  "Die sieben beliebtesten Segelrouten reichen von der Kornaten-Runde über Mittel- und Süddalmatien und die Kvarner Bucht bis nach Istrien, zu den Elaphiten und in den Šibenik-Archipel.",
  "Für eine klassische Eine-Woche-Route plant man rund 15 bis 25 Seemeilen pro Tag ein – kurz genug, um Vormittage zum Baden und Ankern frei zu halten.",
  "Die Miss Moneypenny liegt in der Marina Mandalina in Šibenik (Mitteldalmatien); direkt ab dort fahrbar sind vor allem die Kornaten-Runde, die Mitteldalmatien-Route und der Šibenik-Archipel.",
  "Für den Nationalpark Kornati und Telašćica wird eine Vignette benötigt, die sich am besten vorab online vorbestellen lässt; in Schutzgebieten gilt teils Bojenpflicht.",
  "Die Segelsaison reicht von Mai bis Oktober – Juni und September gelten als die goldenen Monate mit warmem Wetter, verlässlichem Maestral und weniger Betrieb.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Welche Segeltörn-Route in Kroatien passt zu mir?",
    a: "Das hängt von Crew und Vorlieben ab: Wer Natur sucht, segelt die Kornaten-Runde oder den Šibenik-Archipel; wer Stadt und Bucht mischen will, nimmt die Mitteldalmatien-Route von Šibenik über Trogir und Split nach Hvar. Erfahrene Crews mit mehr Zeit fahren Süddalmatien Richtung Korčula, Mljet und Dubrovnik. Für Einsteiger und Familien sind kurze Etappen rund um Krka und Šibenik ideal.",
  },
  {
    q: "Welche Segelrouten in Kroatien sind direkt ab Šibenik fahrbar?",
    a: "Direkt ab dem Heimathafen Marina Mandalina in Šibenik lassen sich vor allem drei der sieben Routen ohne Verlegung fahren: die Kornaten-Runde, die Mitteldalmatien-Route (Trogir, Split, Hvar) und der Šibenik-Archipel mit dem Krka-Nationalpark. Die übrigen Reviere wie Süddalmatien, Kvarner Bucht, Istrien oder die Elaphiten liegen weiter entfernt und werden in der Regel von anderen Häfen aus gestartet.",
  },
  {
    q: "Wie lang sollte ein Segeltörn in Kroatien sein?",
    a: "Eine Woche reicht gut für eine Richtung – etwa die Kornaten-Natur oder die Städte Mitteldalmatiens. Wer Süddalmatien bis Dubrovnik in Ruhe segeln möchte, plant besser zwei Wochen ein. Bei rund 15 bis 25 Seemeilen pro Tag bleibt genug Zeit zum Baden, Ankern und für einen Konoba-Abend an Land.",
  },
  {
    q: "Brauche ich für die Routen durch Nationalparks etwas Besonderes?",
    a: "Ja. Für den Nationalpark Kornati und das Naturschutzgebiet Telašćica wird eine Vignette benötigt, die ihr am besten frühzeitig online vorbestellt. In Schutzgebieten gilt zudem teils Bojenpflicht, also Festmachen an vorgegebenen Mooring-Bojen statt freiem Ankern. Die Krka-Wasserfälle erreicht man von der Anlegestelle aus zu Fuß.",
  },
  {
    q: "Wann ist die beste Zeit, diese Segelrouten zu fahren?",
    a: "Die Saison läuft von Mai bis Oktober. Juni und September sind die goldenen Monate: warmes Wetter, verlässlicher Maestral am Nachmittag und weniger Betrieb in Buchten und Häfen. Juli und August sind heiß und stark frequentiert – dann lohnt sich frühes Buchen und ein zeitiger Start am Morgen, bevor der Wind auffrischt.",
  },
];

export default function SegeltornRoutenKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Routen-Hub"
        title="Die 7 schönsten Segeltörn-Routen in Kroatien"
        lede="Von den Kornaten über Mittel- und Süddalmatien bis Istrien: sieben Segelrouten mit Dauer, Highlights und ehrlicher Einschätzung, für wen sich welche Strecke eignet."
        image="/images/croatia-map.png"
        imageAlt="Karte der kroatischen Adriaküste mit den schönsten Segelrouten"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Ratgeber", href: "/ratgeber" },
          { label: "Segeltörn-Routen Kroatien" },
        ]}
      />

      <ArticleByline slug="segeltorn-routen-kroatien" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Warum Kroatien</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Eines der besten Segelreviere des Mittelmeers.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Wer eine Segeltörn-Route in Kroatien sucht, hat die Qual der Wahl:
              Mit über 1.000 Inseln, Inselchen und Riffen ist die kroatische Adria
              eines der dichtesten und abwechslungsreichsten Segelreviere Europas.
              Die Distanzen zwischen den Inseln sind kurz, viele Kanäle und Buchten
              liegen geschützt, und im Sommer sorgt der Maestral – ein thermischer
              Nordwestwind, der sich vormittags aufbaut und nachmittags 3–5 Beaufort
              erreicht – für verlässlichen, gut planbaren Segelwind.
            </p>
            <p>
              Diese Kombination macht Kroatien sowohl für Einsteiger als auch für
              erfahrene Crews attraktiv. Eine klassische Woche bedeutet meist 15 bis
              25 Seemeilen pro Tag – kurz genug, um Vormittage zum Baden, Ankern und
              Erkunden frei zu halten und abends entspannt in einen Hafen oder eine
              Bucht einzulaufen. Im Folgenden stellen wir die sieben schönsten
              Segelrouten Kroatiens vor: von der Natur der Kornaten über die Städte
              Dalmatiens bis in den Norden nach Kvarner Bucht und Istrien. Zu jeder
              Route findet ihr Dauer, Highlights und eine ehrliche Einschätzung,
              für wen sie sich eignet.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Die 7 Routen */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Im Überblick</span>
            <h2 className="section-title">Die 7 schönsten Segelrouten Kroatiens.</h2>
            <p className="lede">
              Sieben Routen für jeden Anspruch – mit Dauer, Highlights und Eignung.
              Routen, die direkt ab Šibenik fahrbar sind, haben wir markiert.
            </p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {routen.map((r, i) => (
              <Reveal key={r.nr} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={r.icon} /></span>
                  <h3>{r.nr} · {r.titel}</h3>
                  <p style={{ marginTop: "0.6rem" }}>
                    <strong>Dauer:</strong> {r.dauer}<br />
                    <strong>Highlights:</strong> {r.highlights}<br />
                    <strong>Für wen:</strong> {r.fuer}
                  </p>
                  <p style={{ marginTop: "0.8rem", fontSize: "0.85rem", color: "var(--brass-600)", fontWeight: 600 }}>
                    {r.direkt ? "✓ Direkt ab Šibenik fahrbar" : "Eigenes Revier – anderer Starthafen"}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Welche Route ab Šibenik */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Ehrlich gesagt</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Welche Route ab Šibenik direkt funktioniert.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Die Miss Moneypenny liegt in der Marina Mandalina in Šibenik,
                  mitten in Mitteldalmatien. Von hier aus sind drei der sieben
                  Routen ohne Verlegung des Bootes direkt fahrbar: die{" "}
                  <Link href="/segeln-in-den-kornaten">Kornaten-Runde</Link>, die
                  Mitteldalmatien-Route über{" "}
                  <Link href="/staedte-dalmatiens">Trogir, Split und Hvar</Link>{" "}
                  sowie der entspannte Šibenik-Archipel mit dem Krka-Nationalpark.
                  Innerhalb weniger Stunden erreicht ihr die 89 Inseln der Kornaten,
                  die Wasserfälle der Krka, Telašćica und die kleinen Inseln Zlarin
                  und Prvić.
                </p>
                <p>
                  Die übrigen Reviere – Süddalmatien, Kvarner Bucht, Istrien und
                  die Elaphiten – sind eigenständige Segelgebiete und werden in der
                  Regel von einem näheren Hafen aus gestartet. Wir beschreiben sie
                  hier als vollwertige Routen-Tipps, fahren euch dorthin aber nicht
                  direkt: Die Miss Moneypenny startet ab Šibenik – von dort erreicht
                  ihr Mitteldalmatien und die Kornaten bequem in einer Woche. Mehr
                  zum Revier rund um den Heimathafen findet ihr in unserer{" "}
                  <Link href="/segelrevier-kroatien">Revier-Übersicht</Link>.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/croatia-map.png" alt="Karte der kroatischen Adriaküste mit den schönsten Segelrouten" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Nord vs Süd */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Orientierung</span>
            <h2 className="section-title">Nord oder Süd – wohin segeln in Kroatien?</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            <Reveal delay={1}>
              <article className="feature">
                <span className="ic"><Icon name="anchor" /></span>
                <h3>Norden: Kvarner & Istrien</h3>
                <p>
                  Die Nordadria rund um Krk, Rab, Cres und die istrische Halbinsel
                  ist grüner, kühler und liegt näher an Mitteleuropa. Ideal für
                  Crews, die kurze Anreisewege schätzen und das mediterrane Flair
                  von Rovinj und Pula erkunden möchten.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="feature">
                <span className="ic"><Icon name="sun" /></span>
                <h3>Süden: Dalmatien & Elaphiten</h3>
                <p>
                  Dalmatien bietet das klassische Kroatien-Bild: die Kornaten,
                  Hvar, Korčula, Mljet und das spektakuläre Finale vor Dubrovnik.
                  Die Mitte rund um Šibenik verbindet beides – kurze Wege zu Natur
                  und Städten, mit dem zuverlässigen Maestral als Begleiter.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Eure Route ab Šibenik segeln.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Ob Kornaten-Natur oder die Städte Dalmatiens – die Miss Moneypenny,
              ein Lagoon 400 S2 für bis zu acht Gäste, liegt startklar in der
              Marina Mandalina. Familien planen am besten mit unserem{" "}
              <Link href="/familien-segeltorn-kroatien">Familien-Guide</Link>, einen
              fertigen Wochenplan liefert der{" "}
              <Link href="/toernvorschlag-kornaten">Törnvorschlag Kornaten</Link>.
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
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Segelrouten Kroatien – häufige Fragen.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/segeltorn-routen-kroatien#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/croatia-map.png" />
    </>
  );
}
