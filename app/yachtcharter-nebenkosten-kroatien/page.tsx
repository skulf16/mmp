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
  title: "Yachtcharter Nebenkosten Kroatien: Mooring, Transitlog & Kaution",
  description:
    "Nebenkosten beim Yachtcharter in Kroatien: Endreinigung, Transitlog, Kurtaxe, Mooring/Liegegebühren, Kaution und Vignetten erklärt – was inklusive ist und was extra kommt. Mooring Kroatien Kosten im Überblick.",
  openGraph: {
    title: "Nebenkosten beim Yachtcharter in Kroatien",
    description:
      "Mooring, Transitlog, Endreinigung, Kurtaxe, Kaution und Vignetten – alle Nebenkosten beim Kroatien-Charter transparent erklärt.",
    images: [
      {
        url: "/images/yacht-aerial-topdown.jpg",
        width: 1200,
        height: 630,
        alt: "Katamaran von oben – Überblick über die Charter-Nebenkosten",
      },
    ],
  },
};

const posten = [
  {
    icon: "shield" as const,
    title: "Transitlog",
    text: "Das amtliche Bordpapier (Crew-Liste, Yachtdaten, Reviererlaubnis) – Pflicht für jedes Charterschiff in Kroatien. Wird beim Check-in im Heimathafen ausgestellt. Bei der Miss Moneypenny ist es inklusive.",
  },
  {
    icon: "leaf" as const,
    title: "Kurtaxe",
    text: "Touristenabgabe pro Person und Tag, gestaffelt nach Saison. Wird mit der Crew-Liste verrechnet. Bei der Miss Moneypenny bereits im Charterpreis enthalten.",
  },
  {
    icon: "sparkle" as const,
    title: "Endreinigung",
    text: "Einmalige Pauschale für die Reinigung nach dem Törn. Bei vielen Anbietern extra (Richtwert 150–300 €, Stand 2026 – variiert je nach Anbieter) – an Bord der Miss Moneypenny inklusive.",
  },
  {
    icon: "droplet" as const,
    title: "Gas & Bordausstattung",
    text: "Gas für die Pantry sowie Außenborder fürs Beiboot. Bei der Miss Moneypenny Teil des Preises; viele Charterfirmen rechnen Gas und Dinghy-Motor separat ab.",
  },
  {
    icon: "anchor" as const,
    title: "Mooring & Liegegebühren",
    text: "Liegeplätze in Marinas, Bojenfelder oder freies Ankern. Der größte variable Posten unterwegs – stark abhängig von Bootsgröße, Saison und Komfortwunsch.",
  },
  {
    icon: "shield" as const,
    title: "Kaution",
    text: "Sicherheit für mögliche Schäden, vor Törnbeginn fällig und nach schadensfreier Rückgabe zurück. Per Kautionsversicherung lässt sich der Eigenanteil reduzieren.",
  },
];

const facts = [
  "Bei der Miss Moneypenny sind Endreinigung, Gas, Kurtaxe sowie Transitlog und die Hafengebühr im Heimathafen bereits im Charterpreis enthalten.",
  "Die größten variablen Nebenkosten in Kroatien sind Mooring/Liegegebühren, Treibstoff und die Kaution – sie hängen von Bootsgröße, Saison und Fahrstil ab.",
  "Der Transitlog ist das amtliche Pflichtdokument für jedes Charterschiff und wird beim Check-in im Heimathafen Marina Mandalina in Šibenik ausgestellt.",
  "Für die Nationalparks Kornaten und Telašćica ist eine Vignette nötig, die sich am günstigsten online vorbestellen lässt.",
  "Frei ankern ist kostenlos; Bojenfelder und Marina-Liegeplätze kosten je nach Saison und Komfort spürbar mehr.",
  "Eine Kautionsversicherung kann optional dazugebucht werden und senkt den Eigenanteil im Schadensfall.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Was kostet Mooring in Kroatien – wie hoch sind die Liegegebühren?",
    a: "Bei den Mooring Kroatien Kosten gibt es drei Stufen: Frei ankern ist kostenlos, ein Platz an einem Bojenfeld kostet als Richtwert rund 25–60 € pro Nacht und ein Marina-Liegeplatz für einen Katamaran dieser Größe je nach Marina und Saison etwa 80–200 € pro Nacht (Richtwerte, Stand 2026 – variiert je nach Saison, Bootsgröße und Anbieter; verbindliche Zahlen auf Anfrage). Wer überwiegend ankert, hält die Liegegebühren niedrig.",
  },
  {
    q: "Welche Yachtcharter-Nebenkosten sind bei der Miss Moneypenny schon enthalten?",
    a: "Im Charterpreis enthalten sind Endreinigung, Gas, Kurtaxe sowie der Transitlog und die Hafengebühr im Heimathafen – dazu Bettwäsche und Handtücher, der Außenborder fürs Beiboot, WLAN, Schnorchelausrüstung und die 24/7-Notfallbereitschaft. Genau diese Posten rechnen viele Anbieter separat ab, sodass ihr hier gegenüber dem Gesamtpaket spart.",
  },
  {
    q: "Was ist der Transitlog und brauche ich ihn wirklich?",
    a: "Der Transitlog ist das amtliche Bordpapier für Charterschiffe in Kroatien. Er enthält Yachtdaten, die Crew-Liste und die Reviererlaubnis und ist Pflicht – ohne ihn darf das Schiff nicht auslaufen. Er wird beim Check-in im Heimathafen ausgestellt. Bei der Miss Moneypenny ist der Transitlog im Preis enthalten.",
  },
  {
    q: "Wie hoch ist die Kaution und kann ich sie absichern?",
    a: "Die Kaution ist eine Sicherheit für mögliche Schäden, die vor Törnbeginn hinterlegt und nach schadensfreier Rückgabe vollständig zurückerstattet wird. Für einen Katamaran dieser Klasse liegt sie als Richtwert grob im Bereich von 2.000–4.000 € (Richtwert, Stand 2026 – variiert je nach Saison, Bootsgröße und Anbieter; verbindliche Zahlen auf Anfrage). Mit einer optionalen Kautionsversicherung lässt sich der Eigenanteil deutlich reduzieren.",
  },
  {
    q: "Brauche ich für die Kornaten eine Vignette und was kostet sie?",
    a: "Für die Nationalparks Kornaten und Telašćica ist eine Vignette nötig, die nach Bootslänge und teils nach Vorbestellung gestaffelt ist. Als Richtwert solltet ihr mit einem niedrigen bis mittleren dreistelligen Betrag pro Tag rechnen, online vorbestellt ist sie günstiger als vor Ort (Richtwerte, Stand 2026 – variiert je nach Saison, Bootsgröße und Anbieter; verbindliche Zahlen auf Anfrage). In Schutzgebieten gilt zudem teils Bojenpflicht.",
  },
];

export default function YachtcharterNebenkostenKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Kosten-Transparenz"
        title="Nebenkosten beim Yachtcharter in Kroatien: der Überblick"
        lede="Mooring, Transitlog, Kurtaxe, Kaution und Co. – welche Yachtcharter-Nebenkosten in Kroatien anfallen, wie sie berechnet werden und was bei der Miss Moneypenny schon im Preis steckt."
        image="/images/yacht-aerial-topdown.jpg"
        imageAlt="Katamaran von oben – Überblick über die Charter-Nebenkosten"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Ratgeber", href: "/ratgeber" },
          { label: "Nebenkosten Yachtcharter" },
        ]}
      />

      <ArticleByline slug="yachtcharter-nebenkosten-kroatien" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Einleitung */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Worum es geht</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Der Charterpreis ist nur die halbe Rechnung.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Wer eine Yacht in Kroatien chartert, vergleicht zuerst den Wochenpreis – ab rund
              2.500 € in der Nebensaison für einen Katamaran wie die Miss Moneypenny, bei
              Luxusyachten bis weit in den fünfstelligen Bereich. Doch der Preis ist nur ein Teil
              des Budgets. Die <strong>Yachtcharter-Nebenkosten in Kroatien</strong> entscheiden
              am Ende mit darüber, was ein Törn wirklich kostet. Manche Posten sind Pflicht und
              fix, andere – allen voran die <strong>Mooring Kroatien Kosten</strong> – steuert ihr
              durch euren Fahrstil selbst.
            </p>
            <p>
              Dieser Überblick erklärt jeden Posten einzeln: was er ist, wie er berechnet wird und
              mit welchen Richtwerten ihr rechnen könnt. Wichtig vorweg: Alle Beträge außerhalb des
              eigentlichen Charterpreises sind <em>Richtwerte (Stand 2026)</em> und variieren je nach
              Saison, Bootsgröße und Anbieter – verbindliche Zahlen für die Miss Moneypenny gibt es
              in den <Link href="/charter-infos">Charter-Infos</Link> und auf Anfrage. Eine
              vollständige Beispielrechnung für eine Törnwoche findet ihr außerdem im Ratgeber zu
              den <Link href="/segeltorn-kroatien-kosten">Kosten eines Segeltörns in Kroatien</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Posten-Übersicht */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Die Posten im Überblick</span>
            <h2 className="section-title">Diese Nebenkosten fallen an.</h2>
            <p className="lede">Sechs typische Positionen – einige fix und vorgeschrieben, andere von eurem Törn abhängig.</p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {posten.map((p, i) => (
              <Reveal key={p.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={p.icon} /></span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pflichtdokumente & Fixkosten */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Pflicht & fix</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Transitlog, Kurtaxe & Endreinigung.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Der <strong>Transitlog</strong> ist das zentrale Pflichtdokument: ein amtliches
                  Bordpapier mit Yachtdaten, Crew-Liste und Reviererlaubnis, das beim Check-in im
                  Heimathafen ausgestellt wird. Ohne gültigen Transitlog darf kein Charterschiff in
                  Kroatien auslaufen – deshalb müsst ihr vor Törnbeginn auch die Crew-Liste
                  einreichen. Bei vielen Anbietern wird der Transitlog samt Hafengebühr im
                  Heimathafen als eigene Position berechnet.
                </p>
                <p>
                  Die <strong>Kurtaxe</strong> ist eine Touristenabgabe pro Person und Tag,
                  saisonal gestaffelt und über die Crew-Liste verrechnet. Die <strong>Endreinigung</strong>
                  ist eine einmalige Pauschale (Richtwert grob 150–300 €, Stand 2026 – variiert je
                  nach Saison, Bootsgröße und Anbieter; verbindliche Zahlen auf Anfrage). Dazu kommt
                  bei manchen Firmen <strong>Gas</strong> für die Pantry als Extraposten.
                </p>
                <p>
                  Genau hier liegt der Unterschied: Bei der <strong>Miss Moneypenny sind Endreinigung,
                  Gas, Kurtaxe sowie Transitlog und Hafengebühr im Heimathafen bereits im Charterpreis
                  enthalten</strong>. Diese vier Posten müsst ihr also nicht obendrauf rechnen – ein
                  spürbarer Vorteil gegenüber vielen Anbietern, bei denen sie das Gesamtpaket
                  verteuern.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-hero-anchored.jpg" alt="Katamaran Miss Moneypenny vor Anker – inklusive Endreinigung, Gas und Transitlog" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mooring & Liegegebühren */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Der variable Hauptposten</span>
            <h2 className="section-title">Mooring Kroatien Kosten: Marina, Boje oder frei ankern.</h2>
            <p className="lede">Wo ihr die Nacht verbringt, bestimmt euer Budget unterwegs am stärksten.</p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            <Reveal delay={1}>
              <article className="feature">
                <span className="ic"><Icon name="wheel" /></span>
                <h3>Marina-Liegeplatz</h3>
                <p>
                  Voller Komfort: Strom, Wasser, Duschen, oft Restaurant und Supermarkt in der Nähe.
                  Dafür der teuerste Posten – für einen Katamaran dieser Größe als Richtwert grob
                  80–200 € pro Nacht, je nach Marina und Saison (Stand 2026, variiert; verbindliche
                  Zahlen auf Anfrage).
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="feature">
                <span className="ic"><Icon name="anchor" /></span>
                <h3>Bojenfeld</h3>
                <p>
                  Der Mittelweg: eine feste Mooring-Boje in einer geschützten Bucht oder Konoba-Bucht,
                  meist betreut. Richtwert grob 25–60 € pro Nacht (Stand 2026, variiert). In
                  Schutzgebieten der Nationalparks ist die Boje oft Pflicht statt frei zu ankern.
                </p>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="feature">
                <span className="ic"><Icon name="waves" /></span>
                <h3>Frei ankern</h3>
                <p>
                  Die günstigste Variante: in einer offenen Bucht ankern kostet nichts. Die Miss
                  Moneypenny ist mit Wassermacher, 300-l-Tank, starker Solaranlage und Inverter
                  tagelang autark – ideal, um Liegegebühren zu sparen. Mehr dazu im Ratgeber{" "}
                  <Link href="/ankern-kroatien">Ankern in Kroatien</Link>.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="feature">
                <span className="ic"><Icon name="droplet" /></span>
                <h3>Treibstoff</h3>
                <p>
                  Die beiden 45-PS-Motoren laufen vor allem beim Ein- und Auslaufen sowie bei
                  Flaute. Wer viel segelt, verbraucht wenig Diesel. Der Spritverbrauch wird nach
                  Tankfüllung abgerechnet und hängt stark davon ab, wie viel ihr unter Motor fahrt.
                </p>
              </article>
            </Reveal>
          </div>
          <Reveal as="div" delay={3} className="prose" style={{ marginTop: "2.5rem", maxWidth: "60ch" }}>
            <p style={{ color: "var(--text-on-dark, inherit)" }}>
              Faustregel: Eine Mischung aus zwei bis drei Marina-Nächten pro Woche und ansonsten
              Ankern hält die Mooring Kroatien Kosten überschaubar – und gibt euch zugleich
              Duschen, Strom und einen Stadtbummel, wenn ihr sie braucht.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Kaution, Versicherung & Vignetten */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div" delay={1}>
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-cockpit-dining.jpg" alt="Cockpit der Miss Moneypenny – Kaution und Versicherung vor dem Törn klären" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow">Sicherheit & Genehmigungen</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Kaution, Kautionsversicherung & Vignetten.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Die <strong>Kaution</strong> ist kein verlorenes Geld, sondern eine Sicherheit:
                  Sie wird vor Törnbeginn hinterlegt und nach schadensfreier Rückgabe vollständig
                  zurückerstattet. Für einen Katamaran dieser Klasse liegt sie als Richtwert grob im
                  Bereich von 2.000–4.000 € (Stand 2026 – variiert je nach Saison, Bootsgröße und
                  Anbieter; verbindliche Zahlen auf Anfrage). Wer den Eigenanteil im Schadensfall
                  senken möchte, kann optional eine <strong>Kautionsversicherung</strong> dazubuchen.
                </p>
                <p>
                  Für die Nationalparks <strong>Kornaten und Telašćica</strong> ist eine{" "}
                  <strong>Vignette</strong> nötig, gestaffelt nach Bootslänge und Vorbestellung.
                  Online vorbestellt ist sie günstiger als vor Ort am Eingang des Parks – plant das
                  als Richtwert mit einem niedrigen bis mittleren dreistelligen Betrag pro Tag ein
                  (Stand 2026, variiert). In den Schutzzonen gilt zudem teils Bojenpflicht.
                </p>
                <p>
                  Optional kommen je nach Crew weitere Posten hinzu: ein erfahrener{" "}
                  <strong>Skipper</strong> (Richtwert rund 1.000–1.500 € pro Woche), ein{" "}
                  <strong>SUP-Board</strong> oder ein früher Check-in. Für Bareboat – also ohne
                  Skipper – braucht ihr einen anerkannten Sportbootführerschein (mindestens SBF See)
                  und ein Funkzeugnis (SRC/UBI).
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Transparent kalkulieren – statt böse Überraschungen.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Endreinigung, Gas, Kurtaxe und Transitlog sind bei der Miss Moneypenny schon drin.
              Was übrig bleibt, sind nur die Posten, die ihr selbst steuert. Nennt uns euren
              Wunschtermin – wir rechnen euch eine ehrliche Gesamtsumme auf.
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
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Nebenkosten beim Kroatien-Charter – kurz erklärt.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/yachtcharter-nebenkosten-kroatien#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-aerial-topdown.jpg" />
    </>
  );
}
