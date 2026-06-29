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
  title: "Sportbootführerschein (SBF See) für den Kroatien-Törn",
  description:
    "Sportbootführerschein Kroatien: Warum der SBF See die Basis fürs Chartern ist, wie er mit SKS und SRC/UBI zusammenspielt und was er für deinen Kroatien-Törn bedeutet.",
  openGraph: {
    title: "Sportbootführerschein See für den Kroatien-Törn",
    description:
      "Der SBF See als Basis fürs Chartern in Kroatien: Geltung, Zusammenspiel mit SKS und Funkzeugnis und was er praktisch bedeutet.",
    images: [
      {
        url: "/images/yacht-helm.jpg",
        width: 1200,
        height: 630,
        alt: "Skipper am Steuer – Sportbootführerschein See in der Praxis",
      },
    ],
  },
};

const facts = [
  "Der Sportbootführerschein See (SBF See) ist der grundlegende deutsche Befähigungsnachweis für das Führen von Sportbooten mit mehr als 15 PS auf Seeschifffahrtsstraßen und Küstengewässern.",
  "Für das Chartern in Kroatien ist der SBF See der anerkannte Mindeststandard: Wer eine Yacht bareboat – also ohne Skipper – übernehmen will, braucht einen amtlich anerkannten Sportbootführerschein und zusätzlich ein Funkzeugnis (SRC oder UBI).",
  "Der Sportküstenschifferschein (SKS) baut auf dem SBF See auf und ist für größere Yachten wie einen 12-Meter-Katamaran empfehlenswert – viele Charterunternehmen verlangen ihn oder fragen ihn ab.",
  "Das Funkzeugnis SRC (Short Range Certificate) berechtigt zur Bedienung von UKW-Seefunk und ist in Kroatien neben dem Führerschein vorgeschrieben; das UBI ist das entsprechende Binnenfunkzeugnis.",
  "Autor Dominik Theis, Co-Eigner der Miss Moneypenny, hält den Sportbootführerschein See und segelt seit dem 14. Lebensjahr.",
  "Die Miss Moneypenny ist ein 12-Meter-Katamaran (Lagoon 400 S2) mit Heimathafen Marina Mandalina in Šibenik – wer keinen passenden Schein hat, kann einen erfahrenen Skipper dazubuchen.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Reicht der Sportbootführerschein See für einen Kroatien-Törn?",
    a: "Für das Chartern in Kroatien ist der SBF See der anerkannte Mindeststandard, der bei den meisten Vercharterern als Basis akzeptiert wird. Zusätzlich verlangt Kroatien ein Funkzeugnis (SRC oder UBI). Für größere Yachten ab etwa 10 bis 12 Metern fragen viele Charterunternehmen jedoch zusätzliche Praxis oder den SKS ab. Verbindlich entscheidet immer das Charterunternehmen – im Zweifel vorab anfragen. Dies ist keine Rechtsberatung.",
  },
  {
    q: "Was ist der Unterschied zwischen SBF See und SKS?",
    a: "Der SBF See ist der grundlegende Befähigungsnachweis für Sportboote auf See. Der Sportküstenschifferschein (SKS) baut darauf auf, verlangt nachgewiesene Seemeilen und eine umfangreichere Praxisprüfung. Für einen 12-Meter-Katamaran wie die Miss Moneypenny ist der SKS empfehlenswert, weil er Manöver, Navigation und Schwerwetter abdeckt, die in der Praxis gefragt sind.",
  },
  {
    q: "Brauche ich neben dem Sportbootführerschein in Kroatien ein Funkzeugnis?",
    a: "Ja. Für eine bareboat gecharterte Yacht in Kroatien sind ein anerkannter Sportbootführerschein (mindestens SBF See oder gleichwertig) und ein Funkzeugnis vorgeschrieben. Üblich ist das SRC (Short Range Certificate) für den UKW-Seefunk; das UBI ist das Binnenfunkzeugnis. Mindestens eine Person an Bord muss diese Nachweise führen.",
  },
  {
    q: "Reicht der SBF See, um die Miss Moneypenny selbst zu fahren?",
    a: "Die Miss Moneypenny ist ein 12-Meter-Katamaran. Der SBF See ist die anerkannte Basis, in der Praxis wünschen sich Vercharterer für ein Boot dieser Größe aber zusätzliche Erfahrung – häufig in Form des SKS und nachgewiesener Seemeilen. Ob euer Schein und eure Erfahrung ausreichen, prüft das Charterunternehmen anhand der Crew-Liste. Wer den Nachweis nicht erbringt, bucht einfach einen erfahrenen Skipper dazu.",
  },
  {
    q: "Wo wird der Sportbootführerschein in Kroatien überprüft?",
    a: "Spätestens beim Check-in im Heimathafen legt der Skipper Führerschein und Funkzeugnis vor; vor dem Törn ist außerdem eine Crew-Liste einzureichen. Die kroatischen Behörden können die Dokumente an Bord kontrollieren. Welche Scheine konkret akzeptiert werden, legt das jeweilige Charterunternehmen fest – das ist der verbindliche Ansprechpartner und keine Rechtsauskunft dieser Seite.",
  },
];

export default function SportbootfuehrerscheinKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Führerschein & Crew"
        title="Sportbootführerschein See für den Kroatien-Törn"
        lede="Der SBF See ist die anerkannte Basis fürs Chartern in Kroatien. Was er abdeckt, wie er mit SKS und Funkzeugnis zusammenspielt – und was er für deinen Törn auf der Miss Moneypenny bedeutet."
        image="/images/yacht-helm.jpg"
        imageAlt="Skipper am Steuer – Sportbootführerschein See in der Praxis"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Ratgeber", href: "/ratgeber" },
          { label: "Sportbootführerschein See" },
        ]}
      />

      <ArticleByline slug="sportbootfuehrerschein-kroatien" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Was ist der SBF See */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Die Grundlage</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Was der Sportbootführerschein See abdeckt.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Der Sportbootführerschein See – kurz SBF See – ist der grundlegende
              deutsche Befähigungsnachweis für das Führen von Sportbooten mit mehr
              als 15 PS Antriebsleistung auf den Seeschifffahrtsstraßen und in den
              Küstengewässern. Er besteht aus einem theoretischen Teil (Navigation,
              Wetterkunde, Seemannschaft, Verkehrsrecht) und einer praktischen
              Prüfung, in der grundlegende Manöver und der sichere Umgang mit dem
              Boot gezeigt werden. Damit ist er für viele die erste Station auf dem
              Weg zum eigenständigen Törn.
            </p>
            <p>
              Wer sich mit dem Thema <strong>Sportbootführerschein Kroatien</strong>{" "}
              beschäftigt, stößt schnell auf den SBF See, weil er der Einstieg in die
              motorisierte Sportschifffahrt auf See ist. Er vermittelt das Rüstzeug,
              um ein Boot sicher zu führen, Kurse abzusetzen und Vorfahrtsregeln auf
              dem Wasser anzuwenden. Für die Adria ist das die Grundlage – aber, wie
              wir gleich sehen, in der Praxis selten die ganze Geschichte. Welche
              Scheine es darüber hinaus gibt und wie sie zusammenhängen, ordnet
              unsere{" "}
              <Link href="/bootsfuehrerschein-kroatien" className="link-arrow">
                Übersicht zum Bootsführerschein in Kroatien
              </Link>{" "}
              ein.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Warum der SBF See die Basis ist */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Anerkannte Basis</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Warum der SBF See die Basis fürs Chartern in Kroatien ist.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Wer in Kroatien eine Yacht bareboat – also ohne mitgebuchten Skipper –
              übernehmen möchte, muss zwei Dinge nachweisen: einen amtlich anerkannten
              Sportbootführerschein und ein Funkzeugnis. Der SBF See gilt dabei als
              anerkannter Mindeststandard und wird von vielen Vercharterern als Basis
              akzeptiert. „SBF See Kroatien" und „Sportbootführerschein See Kroatien"
              meinen genau diese Konstellation: ein international gebräuchlicher
              deutscher Schein, der die grundlegende Eignung dokumentiert.
            </p>
            <p>
              Wichtig ist die Unterscheidung zwischen „anerkannt" und „ausreichend".
              Anerkannt ist der SBF See als Befähigungsnachweis – ob er für ein
              konkretes Boot ausreicht, hängt von dessen Größe und vom jeweiligen
              Charterunternehmen ab. Verbindlich entscheidet immer der Vercharterer
              anhand der eingereichten Crew-Liste, nicht diese Seite. Im Zweifel
              klärt ihr eure Scheine und eure Erfahrung daher vor der Buchung direkt
              mit dem Charterunternehmen ab. Dieser Ratgeber ersetzt keine
              Rechtsberatung.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Zusammenspiel SKS / Funk – Karten-Grid */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Das Zusammenspiel</span>
            <h2 className="section-title">SBF See, SKS und Funkzeugnis.</h2>
            <p className="lede">
              Drei Bausteine, die in der Praxis zusammengehören – je nach Bootsgröße
              und Revier in unterschiedlicher Kombination.
            </p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            <Reveal delay={1}>
              <article className="feature">
                <span className="ic"><Icon name="wheel" /></span>
                <h3>SBF See – die Basis</h3>
                <p>
                  Grundlegender Befähigungsnachweis für Sportboote über 15 PS auf
                  See. Vermittelt Navigation, Wetterkunde, Seemannschaft und
                  Verkehrsrecht – die Eintrittskarte in die eigenständige
                  Sportschifffahrt und der anerkannte Mindeststandard fürs Chartern.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="feature">
                <span className="ic"><Icon name="anchor" /></span>
                <h3>SKS – für größere Yachten</h3>
                <p>
                  Der Sportküstenschifferschein baut auf dem SBF See auf, verlangt
                  nachgewiesene Seemeilen und eine umfangreiche Praxisprüfung. Für
                  einen 12-Meter-Katamaran empfehlenswert – viele Vercharterer fragen
                  ihn ab oder setzen ihn für Boote dieser Größe voraus.
                </p>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="feature">
                <span className="ic"><Icon name="shield" /></span>
                <h3>SRC / UBI – das Funkzeugnis</h3>
                <p>
                  In Kroatien neben dem Führerschein vorgeschrieben. Das SRC (Short
                  Range Certificate) berechtigt zum UKW-Seefunk, das UBI ist das
                  Binnenfunkzeugnis. Mindestens eine Person an Bord muss den Nachweis
                  führen – ohne Funkzeugnis keine Bareboat-Übernahme.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="feature">
                <span className="ic"><Icon name="calendar" /></span>
                <h3>Crew-Liste & Check-in</h3>
                <p>
                  Vor dem Törn reicht ihr eine Crew-Liste ein, beim Check-in legt der
                  Skipper Führerschein und Funkzeugnis vor. Welche Scheine konkret
                  akzeptiert werden, definiert das Charterunternehmen – es ist der
                  verbindliche Ansprechpartner.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Praxisbezug Bild-Split */}
      <section className="section surface-navy">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div" delay={1}>
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-nav-station.jpg" alt="Navigationsstation mit Kartenplotter – Praxis mit Sportbootführerschein an Bord" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Aus der Praxis</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Was der Schein an Bord wirklich bedeutet.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Der SBF See ist die Theorie; die Adria ist die Praxis. Autor Dominik
                  Theis, Co-Eigner der Miss Moneypenny, segelt seit dem 14.
                  Lebensjahr und hält den Sportbootführerschein See. Seine Erfahrung:
                  Der Schein gibt das nötige Grundgerüst – aber das, was den Törn sicher
                  macht, ist die Routine im Umgang mit Wind, Strömung und Manövern
                  unter realen Bedingungen.
                </p>
                <p>
                  An Bord der Miss Moneypenny stehen ein B&amp;G-Kartenplotter, GPS
                  und Autopilot bereit – Werkzeuge, deren Grundlagen genau der SBF
                  See vermittelt. Wer den Maestral am Nachmittag und die Eigenheiten
                  eines Katamarans kennt, fährt entspannter. Wie eine Woche auf der
                  Adria mit eigenem Skipper an Bord abläuft, zeigt unser{" "}
                  <Link href="/segeltorn-kroatien-skipper" className="link-arrow on-dark">
                    Ratgeber zum Segeltörn mit Skipper
                  </Link>.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Reicht der SBF See für die Miss Moneypenny? */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Konkreter Fall</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Reicht der SBF See für die Miss Moneypenny?</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Die Miss Moneypenny ist ein Lagoon 400 S2: ein Katamaran mit 12 Metern
              Länge über alles, 7,25 Metern Breite und 2 × 45 PS Motorisierung. Für
              ein Boot dieser Größe ist der SBF See die anerkannte Basis, in der
              Praxis wünschen sich Vercharterer aber meist mehr Erfahrung – häufig in
              Form des SKS und nachgewiesener Seemeilen. Ob euer Schein und eure
              Praxis ausreichen, prüft am Ende das Charterunternehmen anhand der
              Crew-Liste, nicht diese Seite.
            </p>
            <p>
              Wer den geforderten Nachweis (noch) nicht erbringt, muss deshalb nicht
              auf den Törn verzichten: Zur Miss Moneypenny lässt sich ein erfahrener
              Skipper dazubuchen, der das Boot führt und euch das Revier zeigt – eine
              gute Option auch dann, wenn ihr lieber mitsegeln als verantwortlich
              fahren wollt. Wie das ohne eigenen Führerschein funktioniert, beschreibt
              unser{" "}
              <Link href="/yachtcharter-ohne-fuehrerschein-kroatien" className="link-arrow">
                Ratgeber zum Yachtcharter ohne Führerschein
              </Link>. Die technischen Eckdaten des Katamarans findet ihr auf der Seite{" "}
              <Link href="/die-yacht" className="link-arrow">die Yacht</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Mit oder ohne Schein – wir finden den Weg.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die Miss Moneypenny liegt in der Marina Mandalina, Šibenik. Sagt uns,
              welche Scheine ihr habt und wie viel Erfahrung an Bord ist – wir klären,
              ob ihr bareboat fahrt oder einen Skipper dazubucht.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/kontakt" className="btn btn-primary">Verfügbarkeit anfragen</Link>
              <Link href="/charter-infos" className="btn btn-ghost">Charter-Infos</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Sportbootführerschein Kroatien – kurz erklärt.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/sportbootfuehrerschein-kroatien#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-helm.jpg" />
    </>
  );
}
