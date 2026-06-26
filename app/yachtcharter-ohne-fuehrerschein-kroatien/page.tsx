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
  title: "Yacht chartern ohne Führerschein in Kroatien – so geht es",
  description:
    "Yacht chartern ohne Führerschein in Kroatien: Mit einem erfahrenen Skipper an Bord geht es problemlos – so funktioniert es, das kostet es, das dürft ihr selbst übernehmen.",
  openGraph: {
    title: "Yacht chartern ohne Führerschein in Kroatien – geht das?",
    description:
      "Ohne Segelschein in Kroatien chartern? Mit Skipper kein Problem – Ablauf, Kosten und was ihr an Bord selbst übernehmen könnt.",
    images: [
      {
        url: "/images/yacht-cockpit-dining.jpg",
        width: 1200,
        height: 630,
        alt: "Entspannte Crew im Cockpit – chartern ohne eigenen Führerschein mit Skipper",
      },
    ],
  },
};

const koennen = [
  {
    icon: "wheel" as const,
    title: "Unter Aufsicht steuern",
    text: "Wer möchte, übernimmt unter dem wachsamen Auge des Skippers das Ruder – auf offener See, bei ruhigem Wind und mit klarer Ansage. So bekommt ihr ein echtes Gefühl für den Katamaran.",
  },
  {
    icon: "anchor" as const,
    title: "Bei Manövern mit anpacken",
    text: "Segel setzen, Schoten dichtholen, beim Ankern und Anlegen mithelfen: Der Skipper erklärt jeden Handgriff und teilt Aufgaben ein. Mitsegeln statt nur Mitfahren.",
  },
  {
    icon: "waves" as const,
    title: "Navigation lernen",
    text: "Kartenplotter lesen, Buchten auswählen, Wind und Wetter einschätzen – der Skipper nimmt euch mit in seine Entscheidungen, wenn ihr Lust habt, mehr zu verstehen.",
  },
  {
    icon: "sun" as const,
    title: "Einfach genießen",
    text: "Genauso gut könnt ihr die Füße hochlegen. Verantwortung, Wache und Routenführung liegen beim Skipper – ihr entscheidet selbst, wie aktiv ihr mit an Bord seid.",
  },
];

const fuerWen = [
  {
    icon: "leaf" as const,
    title: "Einsteiger ohne Schein",
    text: "Ihr wolltet immer mal segeln, habt aber nie einen Führerschein gemacht? Mit Skipper steigt ihr ohne Vorkenntnisse ein und lernt unterwegs so viel, wie ihr möchtet.",
  },
  {
    icon: "bed" as const,
    title: "Familien",
    text: "Eltern müssen sich nicht zwischen Verantwortung und Urlaub entscheiden. Der Skipper kümmert sich ums Schiff, ihr habt den Kopf frei für die Kinder und das Erlebnis.",
  },
  {
    icon: "sparkle" as const,
    title: "Genießer & Gruppen",
    text: "Freundeskreise, die einfach entspannen wollen, sind mit Skipper bestens bedient: keine Wache, keine Sorgen ums Anlegen, dafür ortskundige Tipps zu Buchten und Konobas.",
  },
];

const facts = [
  "In Kroatien dürft ihr eine Yacht ohne eigenen Führerschein chartern, wenn ein erfahrener Skipper an Bord ist, der das Schiff verantwortet.",
  "Für die Bareboat-Charter ohne Skipper verlangt Kroatien einen anerkannten Sportbootführerschein (mindestens SBF See oder gleichwertig) und ein Funkzeugnis (SRC/UBI).",
  "Ein erfahrener Skipper lässt sich für die Miss Moneypenny optional dazubuchen und kostet rund 1.000 bis 1.500 € pro Woche.",
  "Gäste dürfen mitsegeln, beim Setzen der Segel und beim Anlegen anpacken, Manöver lernen und unter Aufsicht des Skippers selbst steuern.",
  "Die Skipper-Lösung eignet sich besonders für Einsteiger ohne Schein, für Familien und für Gäste, die den Törn vor allem genießen wollen.",
  "Die Miss Moneypenny ist ein Lagoon 400 S2 mit vier Doppelkabinen für bis zu acht Übernachtungsgäste und liegt in der Marina Mandalina in Šibenik.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Kann man in Kroatien eine Yacht ohne Führerschein chartern?",
    a: "Ja. Yachtcharter ohne Führerschein in Kroatien funktioniert, indem ihr einen erfahrenen Skipper dazubucht. Er übernimmt die rechtliche Verantwortung für das Schiff und die Crew, sodass ihr keinen eigenen Sportbootführerschein und kein Funkzeugnis vorweisen müsst. Den Katamaran selbst bareboat – also ohne Skipper – zu übernehmen, ist dagegen nur mit anerkanntem Schein erlaubt.",
  },
  {
    q: "Welcher Führerschein wäre für eine Charter in Kroatien sonst nötig?",
    a: "Für die Bareboat-Charter ohne Skipper verlangt Kroatien einen anerkannten Sportbootführerschein – mindestens den SBF See oder eine gleichwertige Qualifikation – sowie ein Funkzeugnis (SRC oder UBI). Mindestens eine Person an Bord muss diese Nachweise erbringen. Wer das nicht hat, bucht einfach einen Skipper dazu und kann trotzdem chartern.",
  },
  {
    q: "Was kostet ein Skipper für eine Charterwoche?",
    a: "Für die Miss Moneypenny liegt ein erfahrener Skipper bei rund 1.000 bis 1.500 € pro Woche zusätzlich zum Charterpreis. Hinzu kommt üblicherweise die Verpflegung des Skippers an Bord. Verbindliche Zahlen nennen wir gern auf Anfrage beziehungsweise in den Charter-Infos.",
  },
  {
    q: "Darf ich mit Skipper auch selbst segeln und das Ruder übernehmen?",
    a: "Ja, wenn ihr möchtet. Beim Segeln ohne Führerschein in Kroatien entscheidet ihr selbst, wie aktiv ihr seid. Unter Aufsicht des Skippers dürft ihr steuern, beim Setzen der Segel und beim Anlegen mit anpacken und Manöver lernen. Genauso könnt ihr einfach entspannen und alles dem Skipper überlassen.",
  },
  {
    q: "Für wen lohnt sich die Charter mit Skipper besonders?",
    a: "Die Skipper-Lösung eignet sich für Einsteiger ohne Segelschein, für Familien mit Kindern und für Gruppen, die den Urlaub vor allem genießen wollen. Ihr bekommt einen ortskundigen Profi an Bord, der die schönsten Buchten kennt, sicher anlegt und euch so viel oder so wenig erklärt, wie ihr mögt.",
  },
];

export default function YachtcharterOhneFuehrerscheinKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Führerschein & Crew"
        title="Yacht chartern ohne Führerschein in Kroatien – geht das?"
        lede="Kurz gesagt: Ja. Ohne eigenen Schein chartert ihr mit einem erfahrenen Skipper an Bord – wir zeigen, wie das funktioniert, was es kostet und was ihr selbst übernehmen dürft."
        image="/images/yacht-cockpit-dining.jpg"
        imageAlt="Entspannte Crew im Cockpit – chartern ohne eigenen Führerschein mit Skipper"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Ratgeber", href: "/ratgeber" },
          { label: "Chartern ohne Führerschein" },
        ]}
      />

      <ArticleByline slug="yachtcharter-ohne-fuehrerschein-kroatien" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Die klare Antwort */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Die kurze Antwort</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Yachtcharter ohne Führerschein in Kroatien – ja, mit Skipper.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Ihr träumt von einer Woche auf dem Katamaran, habt aber keinen
              Segelschein? Dann die gute Nachricht zuerst: Eine Yacht chartern
              ohne Führerschein ist in Kroatien problemlos möglich – ihr nehmt
              einfach einen erfahrenen Skipper mit an Bord. Er führt das Schiff,
              trägt die rechtliche Verantwortung und kümmert sich um alles, was
              Erfahrung verlangt. Für euch heißt das: Urlaub von der ersten bis
              zur letzten Minute, ohne Prüfung, ohne Stress.
            </p>
            <p>
              Diese Lösung ist nicht der Notnagel, sondern der entspannteste Weg,
              Dalmatien zu erleben. Ein guter Skipper kennt die schönsten Buchten,
              liest Wind und Wetter, legt sicher an und lässt euch dabei so viel
              mitmachen, wie ihr wollt. Wer also „chartern ohne Führerschein in
              Kroatien“ in die Suchmaschine tippt, sucht in Wahrheit meist genau
              das: einen sorgenfreien Törn mit einem Profi am Ruder.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Warum sonst ein Schein nötig wäre */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Der rechtliche Hintergrund</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Warum man sonst einen Führerschein bräuchte.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Möchtet ihr eine Yacht ohne Skipper übernehmen – die sogenannte
              Bareboat-Charter –, verlangt Kroatien Qualifikationsnachweise.
              Mindestens eine Person an Bord muss einen anerkannten
              Sportbootführerschein vorweisen, in der Regel den{" "}
              <strong>SBF See</strong> oder eine gleichwertige Qualifikation.
              Hinzu kommt ein <strong>Funkzeugnis</strong> (SRC oder UBI), weil
              das Schiff über eine UKW-Seefunkanlage verfügt. Vor Törnbeginn muss
              außerdem eine Crew-Liste eingereicht werden.
            </p>
            <p>
              Wer diese Nachweise nicht hat, ist damit aber keineswegs ausgesperrt.
              Genau hier setzt die Skipper-Lösung an: Der mitgebuchte Skipper bringt
              die nötige Qualifikation und Erfahrung mit, übernimmt die Schiffsführung
              und erfüllt damit die Voraussetzungen, die ihr selbst nicht erfüllen
              müsst. Segeln ohne Führerschein in Kroatien ist also keine Grauzone,
              sondern ein völlig regulärer Weg, an Bord zu kommen. Wer später doch den
              eigenen Schein machen möchte, findet die Details in unserem{" "}
              <Link href="/bootsfuehrerschein-kroatien">
                Ratgeber zum Bootsführerschein für Kroatien
              </Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Wie die Skipper-Lösung funktioniert */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">So läuft es ab</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Wie die Skipper-Lösung funktioniert.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Der Ablauf ist denkbar einfach. Bei eurer Anfrage nennt ihr
                  Wunschtermin und Crewgröße und gebt an, dass ihr einen Skipper
                  dazubuchen möchtet. Wir stellen den Kontakt her und kümmern uns
                  um die Organisation. Am Anreisetag in der Marina Mandalina lernt
                  ihr den Skipper kennen, übernehmt gemeinsam das Schiff und besprecht
                  eure Wünsche für die Woche – ruhige Ankerbuchten, lebendige
                  Hafenstädte oder eine Mischung aus beidem.
                </p>
                <p>
                  Während des Törns übernimmt der Skipper die Schiffsführung,
                  Wachen und alle Entscheidungen rund um Wetter und Route. Er wohnt
                  meist in der Bugkabine und ist Teil der Crew, ohne euch im Weg zu
                  sein. Die Reiseplanung bleibt bei euch: Der Skipper berät, schlägt
                  Ziele vor und sagt offen, was bei welcher Wetterlage sinnvoll ist –
                  entscheiden tut ihr.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-helm.jpg" alt="Steuerstand des Katamarans – der Skipper führt das Schiff, Gäste dürfen unter Aufsicht ans Ruder" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Was Gäste selbst übernehmen dürfen */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Mitsegeln statt nur mitfahren</span>
            <h2 className="section-title">Was ihr an Bord selbst übernehmen dürft.</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {koennen.map((k, i) => (
              <Reveal key={k.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={k.icon} /></span>
                  <h3>{k.title}</h3>
                  <p>{k.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kosten */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Was es kostet</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Die Kosten für einen Skipper.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Ein erfahrener Skipper für die Miss Moneypenny kostet
              <strong> rund 1.000 bis 1.500 € pro Woche</strong> zusätzlich zum
              Charterpreis. Üblich ist außerdem, dass die Crew die Verpflegung des
              Skippers an Bord übernimmt – er isst mit, schläft an Bord und ist Teil
              der Mannschaft. Verteilt auf eine Crew von mehreren Personen ist der
              Aufpreis pro Kopf oft überschaubar, gerade wenn man den Gewinn an
              Sicherheit und Entspannung gegenrechnet.
            </p>
            <p>
              Daneben fallen die üblichen Törnkosten an, die nicht vom Skipper
              abhängen: eine Kaution beziehungsweise optionale Kautionsversicherung,
              Treibstoff, Liege- und Mooringgebühren in fremden Häfen sowie
              Nationalpark-Vignetten für die Kornaten und Telašćica. Als grobe
              Orientierung bewegen sich Mooring-Gebühren und Tagesvignetten je nach
              Saison und Bootsgröße im zweistelligen bis niedrigen dreistelligen
              Euro-Bereich pro Tag.{" "}
              <em>
                Richtwerte, Stand 2026 – variiert je nach Saison, Bootsgröße und
                Anbieter; verbindliche Zahlen auf Anfrage.
              </em>{" "}
              Im Charterpreis der Miss Moneypenny enthalten sind dagegen Bettwäsche
              und Handtücher, Endreinigung, Gas und Kurtaxe sowie das Transitlog im
              Heimathafen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Für wen ideal */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Passt das zu uns?</span>
            <h2 className="section-title">Für wen die Charter mit Skipper ideal ist.</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {fuerWen.map((f, i) => (
              <Reveal key={f.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={f.icon} /></span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal as="div" delay={3} className="prose" style={{ marginTop: "2rem", textAlign: "center" }}>
            <p>
              Wer mit Kindern unterwegs ist, findet weitere Tipps in unserem
              Ratgeber zum{" "}
              <Link href="/familien-segeltorn-kroatien">
                Familien-Segeltörn in Kroatien
              </Link>. Und wer tiefer in die Rolle des Skippers, Aufgabenteilung und
              Auswahl eintauchen möchte, liest am besten den ausführlichen Beitrag
              zum{" "}
              <Link href="/segeltorn-kroatien-skipper">
                Segeltörn in Kroatien mit Skipper
              </Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Miss Moneypenny mit Skipper */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Miss Moneypenny</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Die Miss Moneypenny – auch ohne eigenen Schein.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Die Miss Moneypenny ist ein Lagoon 400 S2 aus dem Baujahr 2016 mit
              vier Doppelkabinen – jede mit eigenem Bad – plus zwei Bugkabinen und
              Platz für bis zu acht Übernachtungsgäste. Mit Wassermacher, starker
              Solaranlage und 300-Liter-Tank liegt sie tagelang autark vor Anker;
              an Bord findet ihr B&G-Kartenplotter, AIS, Autopilot, elektrische
              Ankerwinsch, unbegrenztes WLAN, ein Beiboot mit Außenborder und
              Schnorchelausrüstung. Genau dieser Komfort macht sie zur idealen Yacht
              für eine entspannte Charter mit Skipper.
            </p>
            <p>
              Heimathafen ist die Marina Mandalina in Šibenik in Mitteldalmatien.
              Von dort erreicht ihr in wenigen Stunden den Kornaten-Nationalpark mit
              seinen 89 Inseln, die Wasserfälle des Krka-Nationalparks, die Bucht von
              Telašćica sowie die Städte Trogir, Split und Hvar. Den erfahrenen Skipper
              bucht ihr einfach optional dazu – und müsst euch um Lizenzen, Funk und
              Schiffsführung keine Gedanken machen. Bestens geeignet also für alle, die
              eine Yacht in Kroatien ohne Führerschein chartern und trotzdem das ganze
              Revier erleben wollen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Bereit für den Törn</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Ohne Schein, mit Profi am Ruder.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Nennt uns Wunschtermin und Crewgröße – wir organisieren den passenden
              Skipper und beantworten alle Fragen zur Charter ohne Führerschein.
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
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Chartern ohne Führerschein – häufige Fragen.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/yachtcharter-ohne-fuehrerschein-kroatien#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-cockpit-dining.jpg" />
    </>
  );
}
