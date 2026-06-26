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
  title: "Welcher Bootsführerschein für Kroatien? Der komplette Überblick",
  description:
    "Bootsführerschein Kroatien: Welche Lizenz und welches Funkzeugnis du fürs Bareboat-Chartern brauchst, welche Scheine anerkannt sind – und wie es ganz ohne Schein geht.",
  openGraph: {
    title: "Welcher Bootsführerschein für Kroatien?",
    description:
      "Welche Lizenz brauchst du fürs Chartern in Kroatien? Anerkannte Scheine, Funkzeugnis und die Option ohne eigenen Führerschein.",
    images: [
      {
        url: "/images/yacht-helm.jpg",
        width: 1200,
        height: 630,
        alt: "Steuerstand der Yacht – Bootsführerschein für den Kroatien-Törn",
      },
    ],
  },
};

const facts = [
  "Wer in Kroatien bareboat – also ohne professionellen Skipper – chartern will, braucht einen anerkannten Sportbootführerschein für den Seebereich (mindestens SBF See bzw. gleichwertig) und zusätzlich ein Funkzeugnis (SRC oder UBI).",
  "Als gleichwertige Lizenzen gelten unter anderem der deutsche Sportbootführerschein See, der weiterführende Sportküstenschifferschein (SKS) und das internationale ICC – die genaue Anerkennung prüft das Charterunternehmen vor der Übergabe.",
  "Das Funkzeugnis ist Pflicht, weil moderne Charteryachten wie die Lagoon 400 S2 mit Seefunk und AIS ausgestattet sind und der Skipper im Notfall korrekt funken können muss.",
  "Vor jedem Törn muss eine vollständige Crew-Liste mit allen Mitseglern eingereicht werden – sie ist in Kroatien für die Anmeldung der Yacht erforderlich.",
  "Wer keinen passenden Schein, kein Funkzeugnis oder schlicht zu wenig Erfahrung hat, bucht einen erfahrenen Skipper dazu – bei der Miss Moneypenny rund 1.000 bis 1.500 € pro Woche.",
  "Die Miss Moneypenny liegt in der Marina Mandalina in Šibenik in Mitteldalmatien; von dort erreicht ihr die Kornaten, den Krka-Nationalpark und die Städte Dalmatiens.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Welcher Bootsführerschein wird für Kroatien benötigt?",
    a: "Fürs Bareboat-Chartern braucht der verantwortliche Skipper einen anerkannten Sportbootführerschein für den Seebereich – in Deutschland mindestens den Sportbootführerschein See (SBF See) oder eine gleichwertige Lizenz wie SKS oder ICC. Zusätzlich ist ein Funkzeugnis (SRC oder UBI) erforderlich. Welche konkreten Nachweise akzeptiert werden, legt das Charterunternehmen fest – klärt das immer vor der Buchung.",
  },
  {
    q: "Reicht der SBF See oder brauche ich den SKS?",
    a: "Formal genügt für Kroatien in der Regel ein anerkannter Schein ab SBF-See-Niveau. Viele Vermieter empfehlen den weiterführenden Sportküstenschifferschein (SKS), weil er mehr Praxis und Manövererfahrung voraussetzt – gerade auf einem 12-Meter-Katamaran ist das hilfreich. Pflicht ist der SKS aber nicht überall; entscheidend ist die Anerkennung durch das Charterunternehmen.",
  },
  {
    q: "Brauche ich neben dem Bootsschein wirklich ein Funkzeugnis?",
    a: "Ja. Für Kroatien ist neben dem Sportbootführerschein ein Funkzeugnis vorgeschrieben, weil die Yachten mit Seefunk ausgestattet sind. In Deutschland sind das SRC (Short Range Certificate) für den UKW-Seefunk oder das UBI für den Binnenbereich. Ohne gültiges Funkzeugnis darf bareboat nicht übergeben werden.",
  },
  {
    q: "Kann ich in Kroatien chartern, wenn ich keinen Segelschein habe?",
    a: "Ja – dann bucht ihr einfach einen Skipper dazu. Mit einem erfahrenen Skipper an Bord ist die Miss Moneypenny auch ohne eigenen Bootsführerschein und ohne Vorerfahrung buchbar. Der Skipper kostet rund 1.000 bis 1.500 € pro Woche zusätzlich und übernimmt Navigation, Manöver und Sicherheit.",
  },
  {
    q: "Was ist die Crew-Liste und wann brauche ich sie?",
    a: "Die Crew-Liste ist ein Verzeichnis aller Personen an Bord mit Namen und Ausweisdaten. Sie wird in Kroatien vor Törnbeginn für die Anmeldung der Yacht benötigt und muss dem Charterunternehmen rechtzeitig vorliegen. Reicht eure Daten daher schon vor der Anreise ein, damit der Check-in am Hafen reibungslos läuft.",
  },
];

export default function BootsfuehrerscheinKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Führerschein & Crew"
        title="Welcher Bootsführerschein für Kroatien? Der Überblick"
        lede="Bareboat oder mit Skipper, SBF See oder SKS, dazu das Funkzeugnis: Was ihr an Scheinen wirklich braucht, um in Kroatien selbst ans Steuer zu dürfen – und wie es ganz ohne geht."
        image="/images/yacht-helm.jpg"
        imageAlt="Steuerstand der Yacht – Bootsführerschein für den Kroatien-Törn"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Ratgeber", href: "/ratgeber" },
          { label: "Bootsführerschein Kroatien" },
        ]}
      />

      <ArticleByline slug="bootsfuehrerschein-kroatien" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Kernaussage */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Die kurze Antwort</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">
            Bootsführerschein Kroatien: Schein plus Funkzeugnis.
          </Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Die häufigste Frage vor dem ersten eigenen Törn lautet: Welcher
              Bootsführerschein für Kroatien? Die kanonische Antwort ist klar.
              Wer bareboat chartern, also ohne professionellen Skipper selbst
              ans Steuer will, braucht zwei Dinge: einen anerkannten
              Sportbootführerschein für den Seebereich – mindestens den SBF See
              oder eine gleichwertige Lizenz – und zusätzlich ein Funkzeugnis
              (SRC oder UBI). Beides zusammen ist die Eintrittskarte für die
              eigenständige Übernahme einer Charteryacht.
            </p>
            <p>
              Der Bootsschein allein genügt also nicht. Das Funkzeugnis ist in
              Kroatien ebenso vorgeschrieben, weil jede seetüchtige Charteryacht
              mit UKW-Seefunk ausgestattet ist und der Skipper im Ernstfall einen
              korrekten Notruf absetzen können muss. Wer beides vorweist und genug
              Praxis mitbringt, darf eine Yacht wie die Miss Moneypenny
              eigenverantwortlich führen. Diese Seite ist der Überblick – die
              feinen Unterschiede zwischen den einzelnen Scheinen vertiefen wir
              auf der Detailseite zum{" "}
              <Link href="/sportbootfuehrerschein-kroatien">Sportbootführerschein für Kroatien</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Anerkannte Scheine */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Was zählt</span>
            <h2 className="section-title">Diese Scheine sind in Kroatien anerkannt.</h2>
            <p className="lede">
              Der Bootsschein für Kroatien beginnt beim SBF See – darüber hinaus
              werden mehrere gleichwertige Qualifikationen akzeptiert.
            </p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            <Reveal delay={1}>
              <article className="feature">
                <span className="ic"><Icon name="wheel" /></span>
                <h3>SBF See – die Basis</h3>
                <p>
                  Der deutsche Sportbootführerschein See ist der Mindeststandard
                  für den Seebereich und gilt als anerkannter Bootsschein in
                  Kroatien. Er deckt Navigation, Seemannschaft und die wichtigsten
                  Vorfahrtsregeln ab – die solide Grundlage fürs Bareboat-Chartern.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="feature">
                <span className="ic"><Icon name="anchor" /></span>
                <h3>SKS – empfohlen</h3>
                <p>
                  Der Sportküstenschifferschein (SKS) baut auf dem SBF See auf und
                  verlangt deutlich mehr Praxis bei Manövern und Törnplanung. Viele
                  Vermieter empfehlen ihn als Segelschein für Kroatien, weil er
                  gerade auf einem 12-Meter-Katamaran für mehr Sicherheit sorgt.
                </p>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="feature">
                <span className="ic"><Icon name="shield" /></span>
                <h3>ICC – international</h3>
                <p>
                  Das International Certificate of Competence (ICC) ist ein
                  internationaler Befähigungsnachweis, der in vielen Ländern rund
                  ums Mittelmeer akzeptiert wird. Auch er gilt in der Regel als
                  gleichwertiger Bootsschein – die Anerkennung im Einzelfall klärt
                  das Charterunternehmen.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="feature">
                <span className="ic"><Icon name="wifi" /></span>
                <h3>SRC / UBI – das Funkzeugnis</h3>
                <p>
                  Zusätzlich zum Bootsschein ist ein Funkzeugnis Pflicht: das SRC
                  (Short Range Certificate) für den UKW-Seefunk oder das UBI für
                  den Binnenbereich. Ohne gültiges Funkzeugnis wird die Yacht nicht
                  bareboat übergeben.
                </p>
              </article>
            </Reveal>
          </div>
          <Reveal as="div" className="prose" style={{ marginTop: "2.4rem" }}>
            <p>
              Wichtig und ehrlich gesagt: Die Anerkennung einzelner Scheine ist
              keine starre Liste, sondern wird letztlich vom Charterunternehmen
              und der zuständigen Hafenbehörde entschieden. Diese Seite ersetzt
              keine rechtsverbindliche Beratung. Klärt vor der Buchung immer mit
              dem Vermieter, welche Nachweise konkret verlangt werden – das
              erspart böse Überraschungen bei der Bootsübergabe.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Funkzeugnis, Crew-Liste, Erfahrung */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Mehr als der Schein</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">
                Funkzeugnis, Crew-Liste und Erfahrung.
              </Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Das Funkzeugnis ist kein bürokratisches Beiwerk, sondern hat
                  einen handfesten Grund: Die Miss Moneypenny ist mit B&amp;G
                  Kartenplotter, GPS und AIS ausgestattet und verfügt über
                  Seefunk. Wer ans Steuer geht, sollte im Notfall einen korrekten
                  Funkspruch absetzen und AIS-Ziele deuten können – genau das
                  trainiert das SRC.
                </p>
                <p>
                  Vor Törnbeginn ist außerdem eine vollständige Crew-Liste nötig.
                  Sie verzeichnet alle Personen an Bord und wird in Kroatien für
                  die Anmeldung der Yacht gebraucht. Reicht sie rechtzeitig vor der
                  Anreise ein, damit der Check-in in der Marina Mandalina zügig
                  läuft.
                </p>
                <p>
                  Zum formalen Schein kommt die ehrliche Selbsteinschätzung: Habt
                  ihr genug Praxis, um einen 12-Meter-Katamaran mit 7,25 m Breite
                  in einer engen kroatischen Marina zu manövrieren und bei
                  auffrischendem Maestral sicher vor Anker zu gehen? Ein Schein auf
                  dem Papier ersetzt keine Seemeilen im Kielwasser. Wer unsicher
                  ist, plant lieber einen Skipper ein.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">SRC / UBI</span>
                <span className="tag-pill">Crew-Liste</span>
                <span className="tag-pill">Praxis zählt</span>
                <span className="tag-pill">AIS &amp; Plotter</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-nav-station.jpg" alt="Navigationsstation mit Plotter und Seefunk an Bord" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Kein Schein? Kein Problem - mit Skipper */}
      <section className="section surface-navy">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div" delay={1}>
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-helm.jpg" alt="Skipper am erhöhten Steuerstand der Miss Moneypenny" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Die ehrliche Alternative</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">
                Kein Schein? Kein Problem – mit Skipper.
              </Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Wer keinen passenden Bootsführerschein, kein Funkzeugnis oder
                  schlicht zu wenig Erfahrung hat, muss auf Kroatien nicht
                  verzichten. Dann nehmt ihr einfach einen erfahrenen Skipper an
                  Bord. Er übernimmt Navigation, Manöver, das Anlegen in engen
                  Marinas und die Verantwortung für die Sicherheit – ihr genießt
                  den Törn, lernt nebenbei und entscheidet selbst, wie viel ihr
                  mit anpacken wollt.
                </p>
                <p>
                  Bei der Miss Moneypenny kostet ein Skipper rund 1.000 bis
                  1.500 € pro Woche zusätzlich. Damit ist der Lagoon-400-S2-Kat
                  auch für Einsteiger und Familien ohne Schein buchbar. Alles
                  Weitere – vom Tagesablauf bis zur Aufgabenverteilung an Bord –
                  haben wir auf der Seite zum{" "}
                  <Link href="/segeltorn-kroatien-skipper">Segeltörn mit Skipper</Link>{" "}
                  zusammengefasst.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} style={{ marginTop: "2rem" }}>
                <Link href="/yachtcharter-ohne-fuehrerschein-kroatien" className="btn btn-primary">
                  Yachtcharter ohne Führerschein
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Praktische Hinweise / Kosten */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Gut zu wissen</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">
            Mindestalter, Erfahrung und versteckte Posten.
          </Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Über den Bootsschein hinaus verlangen Charterunternehmen meist ein
              Mindestalter des verantwortlichen Skippers und einen Nachweis über
              die nautische Praxis – etwa in Form eines Logbuchs oder einer
              formlosen Segel-Vita. Konkrete Grenzen sind nicht einheitlich
              geregelt, sondern Sache des jeweiligen Anbieters; fragt sie vor der
              Buchung ab.
            </p>
            <p>
              Zwei Kostenpunkte solltet ihr beim Bareboat-Chartern zusätzlich auf
              dem Schirm haben. Erstens die Kaution: Sie wird vor der Übergabe
              hinterlegt und bei schadenfreier Rückgabe erstattet – als Richtwert
              bewegt sie sich bei Yachten dieser Größenordnung im niedrigen bis
              mittleren vierstelligen Bereich; eine Kautionsversicherung lässt sich
              optional dazubuchen. Zweitens die Nationalpark-Vignette für die
              Kornaten und Telašćica, die je nach Saison und Bootsgröße anfällt und
              sich am besten online vorbestellen lässt.
            </p>
            <p>
              <em>
                Richtwerte, Stand 2026 – variiert je nach Saison, Bootsgröße und
                Anbieter; verbindliche Zahlen auf Anfrage.
              </em>{" "}
              Diese Seite ist ein sachlicher Überblick und keine
              rechtsverbindliche Beratung: Die maßgeblichen Details legt euer
              Charterunternehmen fest, und sie sind dort vor der Buchung zu prüfen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>
              Schein oder Skipper – wir finden die passende Variante.
            </h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die Miss Moneypenny liegt in der Marina Mandalina in Šibenik –
              bareboat für erfahrene Crews oder bequem mit erfahrenem Skipper an
              Bord. Sagt uns, was ihr mitbringt, und wir beraten ehrlich.
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
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Bootsführerschein für Kroatien – häufige Fragen.
            </h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/bootsfuehrerschein-kroatien#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-helm.jpg" />
    </>
  );
}
