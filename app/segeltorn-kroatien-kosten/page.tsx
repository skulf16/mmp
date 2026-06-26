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
  title: "Was kostet ein Segeltörn in Kroatien? Echte Kalkulation",
  description:
    "Segeltörn Kroatien Kosten realistisch kalkuliert: Charter, Skipper, Kaution, Sprit, Liegegebühren, Vignetten und Verpflegung – mit Beispielrechnung pro Woche und Crew.",
  openGraph: {
    title: "Was kostet ein Segeltörn in Kroatien? Echte Kalkulation",
    description:
      "Alle Kostenblöcke eines Kroatien-Törns transparent: Charter, Skipper, Kaution, Sprit, Marina, Vignetten, Proviant – mit Beispielrechnung.",
    images: [
      {
        url: "/images/yacht-nav-station.jpg",
        width: 1200,
        height: 630,
        alt: "Navigationsecke an Bord – Törnplanung und Kostenkalkulation",
      },
    ],
  },
};

const kostenbloecke = [
  {
    icon: "anchor" as const,
    title: "1 · Charter der Yacht",
    text: "Der größte Posten. Ein Katamaran wie die Miss Moneypenny startet bei rund 2.500 € pro Woche in der Nebensaison; in der Hochsaison und bei Luxus-Katamaranen reicht die Spanne bis in den fünfstelligen Bereich. Konkrete Wochenpreise gibt es auf Anfrage und in den Charter-Infos.",
  },
  {
    icon: "wheel" as const,
    title: "2 · Skipper (optional)",
    text: "Wer keinen Sportbootführerschein See und kein Funkzeugnis hat, bucht einen erfahrenen Skipper dazu: rund 1.000 bis 1.500 € pro Woche. Verpflegung des Skippers kommt meist obendrauf. Mit eigenem Schein entfällt dieser Block komplett.",
  },
  {
    icon: "sparkle" as const,
    title: "3 · Nebenkosten – bei uns inklusive",
    text: "Bei vielen Anbietern fallen Endreinigung, Gas, Kurtaxe und Transitlog extra an. Bei der Miss Moneypenny sind Endreinigung, Gas, Kurtaxe sowie Transitlog und Hafengebühr im Heimathafen bereits im Preis enthalten – ebenso Bettwäsche, Handtücher, WLAN und Schnorchelausrüstung.",
  },
  {
    icon: "shield" as const,
    title: "4 · Kaution",
    text: "Eine Kaution wird vor Törnbeginn hinterlegt und nach schadenfreier Rückgabe erstattet. Bei Katamaranen liegt der Richtwert grob bei mehreren Tausend Euro. Eine Kautionsversicherung senkt den Selbstbehalt gegen eine überschaubare Pauschale.",
  },
  {
    icon: "droplet" as const,
    title: "5 · Treibstoff",
    text: "Ein Katamaran segelt viel und motort wenig – der Spritverbrauch bleibt deshalb moderat. Getankt wird meist beim Check-out nach Verbrauch. Wer den Maestral nutzt statt unter Motor zu fahren, drückt diesen Posten spürbar.",
  },
  {
    icon: "waves" as const,
    title: "6 · Liegegebühren & Mooring",
    text: "Übernachten in auswärtigen Marinas kostet pro Nacht; die Spanne hängt stark von Saison, Marina und Bootslänge ab. Mooring-Bojen in Buchten und Konoba-Buchten sind günstiger, freies Ankern ist – wo erlaubt – kostenlos.",
  },
  {
    icon: "leaf" as const,
    title: "7 · Nationalpark-Vignetten",
    text: "Für die Kornaten und Telašćica ist eine Vignette nötig, gestaffelt nach Bootslänge. Am besten bestellt ihr sie online vor – früh erledigen lohnt sich. Für den Krka-Nationalpark (Wasserfälle) plant ihr je nach Besuch einen separaten Eintritt ein.",
  },
  {
    icon: "sun" as const,
    title: "8 · Verpflegung & Konoba",
    text: "Großeinkauf am Anreisetag, frischer Fisch und Brot unterwegs, dazu zwei bis drei Konoba-Abende an Land. Wer überwiegend an Bord kocht, hält die Kosten niedrig; Restaurantbesuche kalkuliert ihr separat dazu.",
  },
];

const beispiel = [
  { posten: "Charter Katamaran (Nebensaison)", richtwert: "ab ~2.500 €", hinweis: "kanonisch, ab-Preis" },
  { posten: "Skipper (optional)", richtwert: "~1.000–1.500 €", hinweis: "kanonisch, bei Bedarf" },
  { posten: "Treibstoff", richtwert: "Richtwert niedrig–moderat", hinweis: "Katamaran segelt viel" },
  { posten: "Liegegebühren auswärtige Marinas", richtwert: "Richtwert je Nacht", hinweis: "Bojen/Ankern günstiger" },
  { posten: "Nationalpark-Vignetten", richtwert: "Richtwert, gestaffelt", hinweis: "online günstiger" },
  { posten: "Verpflegung & Konoba-Abende", richtwert: "Richtwert pro Crew", hinweis: "stark variabel" },
  { posten: "Anreise (pro Person)", richtwert: "Richtwert individuell", hinweis: "Flug/Auto, Saison" },
];

const facts = [
  "Der größte Kostenblock eines Segeltörns in Kroatien ist die Charter der Yacht – bei einem Katamaran wie der Miss Moneypenny ab rund 2.500 € pro Woche in der Nebensaison.",
  "Ein erfahrener Skipper ist optional und kostet bei der Miss Moneypenny rund 1.000 bis 1.500 € pro Woche zusätzlich; mit eigenem Sportbootführerschein See und Funkzeugnis entfällt dieser Posten.",
  "Bei der Miss Moneypenny sind Endreinigung, Gas, Kurtaxe sowie Transitlog und Hafengebühr im Heimathafen bereits im Charterpreis enthalten – viele Anbieter berechnen diese Nebenkosten extra.",
  "Zu den variablen Yachtcharter-Kosten in Kroatien zählen Kaution, Treibstoff, Liegegebühren in auswärtigen Marinas, Nationalpark-Vignetten und die Verpflegung der Crew.",
  "Weil ein Katamaran viel segelt und wenig unter Motor fährt, bleibt der Spritverbrauch und damit dieser Kostenposten moderat.",
  "Für die Kornaten und Telašćica ist eine nach Bootslänge gestaffelte Vignette nötig, die am besten online vorbestellt wird; der Krka-Nationalpark wird separat über den Eintritt abgerechnet.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Was kostet ein Segeltörn in Kroatien pro Woche?",
    a: "Den Kern der Segeltörn-Kroatien-Kosten bildet die Charter: Ein Katamaran wie die Miss Moneypenny startet bei rund 2.500 € pro Woche in der Nebensaison, Luxus-Katamarane reichen bis in den fünfstelligen Bereich. Dazu kommen variable Posten wie Treibstoff, Liegegebühren, Nationalpark-Vignetten und Verpflegung. Geteilt durch eine Crew von sechs bis acht Personen relativiert sich der Wochenpreis deutlich.",
  },
  {
    q: "Welche Nebenkosten sind bei der Miss Moneypenny inklusive?",
    a: "Endreinigung, Gas und Kurtaxe sind im Charterpreis enthalten, ebenso Transitlog und Hafengebühr im Heimathafen Šibenik. Zusätzlich gehören Bettwäsche, Handtücher, unbegrenztes WLAN, Schnorchelausrüstung, der Außenborder fürs Beiboot und die 24/7-Notfallbereitschaft dazu. Bei vielen anderen Anbietern werden genau diese Yachtcharter-Kosten in Kroatien separat berechnet.",
  },
  {
    q: "Wie hoch ist die Kaution und kann ich sie absichern?",
    a: "Bei Katamaranen liegt die Kaution als Richtwert grob im Bereich mehrerer Tausend Euro und wird vor Törnbeginn hinterlegt; nach schadenfreier Rückgabe wird sie erstattet. Wer das Risiko reduzieren möchte, bucht eine Kautionsversicherung – sie senkt den Selbstbehalt gegen eine überschaubare Pauschale. Verbindliche Zahlen nennen wir auf Anfrage.",
  },
  {
    q: "Was kostet ein Skipper und brauche ich ihn?",
    a: "Ein erfahrener Skipper kostet rund 1.000 bis 1.500 € pro Woche zusätzlich. Nötig ist er, wenn an Bord niemand einen anerkannten Sportbootführerschein See und ein Funkzeugnis (SRC/UBI) hat – das ist Voraussetzung für eine Bareboat-Charter in Kroatien. Mit eigenem Schein und Erfahrung entfällt dieser Kostenblock vollständig.",
  },
  {
    q: "Wie viel sollte ich für Vignetten, Liegegebühren und Sprit einplanen?",
    a: "Diese Beträge sind Richtwerte und schwanken stark. Die Nationalpark-Vignette für Kornaten und Telašćica ist nach Bootslänge gestaffelt und wird am besten online vorbestellt; den Krka-Nationalpark besucht ihr meist als separaten Ausflug mit eigenem Eintritt. Liegegebühren in auswärtigen Marinas fallen pro Nacht an, während Mooring-Bojen und freies Ankern günstiger oder kostenlos sind. Der Spritverbrauch bleibt beim segelfreudigen Katamaran moderat.",
  },
];

export default function SegeltornKroatienKostenPage() {
  return (
    <>
      <PageHero
        eyebrow="Kosten & Kalkulation"
        title="Was kostet ein Segeltörn in Kroatien? Echte Kalkulation"
        lede="Charter, Skipper, Kaution, Sprit, Liegegebühren, Vignetten und Proviant – jeder Kostenblock transparent erklärt, mit einer ehrlichen Beispielrechnung pro Woche und Crew."
        image="/images/yacht-nav-station.jpg"
        imageAlt="Navigationsecke an Bord – Törnplanung und Kostenkalkulation"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/ratgeber" }, { label: "Kosten Segeltörn Kroatien" }]}
      />

      <ArticleByline slug="segeltorn-kroatien-kosten" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Einleitung */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Worauf es ankommt</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Segeltörn Kroatien Kosten – ehrlich aufgeschlüsselt.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Die Frage „Was kostet ein Segeltörn in Kroatien?" lässt sich nicht mit
              einer einzigen Zahl beantworten – aber sie lässt sich sauber zerlegen.
              Der mit Abstand größte Block sind die Yachtcharter-Kosten in Kroatien,
              also die Wochenmiete der Yacht selbst. Darum herum gruppieren sich
              kleinere, teils variable Posten: ein optionaler Skipper, die Kaution,
              Treibstoff, Liegegebühren in auswärtigen Marinas, Nationalpark-Vignetten
              sowie Verpflegung und Anreise.
            </p>
            <p>
              Der entscheidende Hebel: Eine Charter ist ein Gruppenpreis. Was zunächst
              nach viel klingt, teilt sich auf eine ganze Crew auf. Bei der Miss
              Moneypenny – einem Lagoon 400 S2 mit vier Doppelkabinen und Platz für
              bis zu acht Übernachtungsgäste – verteilt sich der Wochenpreis auf sechs
              bis acht Personen. Pro Kopf liegt ein Katamaran-Törn damit oft im Bereich
              eines guten Pauschalurlaubs, bietet aber deutlich mehr Freiheit. Im
              Folgenden gehen wir jeden Kostenblock einzeln durch.
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--text-soft)", fontStyle: "italic" }}>
              Hinweis zu den Zahlen: Alle nicht fest vereinbarten Beträge in diesem
              Ratgeber – Kaution, Treibstoff, Liegegebühren, Vignetten und Verpflegung –
              sind Richtwerte, Stand 2026. Sie variieren je nach Saison, Bootsgröße und
              Anbieter; verbindliche Zahlen nennen wir gern auf Anfrage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Kostenblöcke als Karten */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Die acht Kostenblöcke</span>
            <h2 className="section-title">Jeder Posten einzeln erklärt.</h2>
            <p className="lede">Von der Charter bis zur Konoba – so setzen sich die Kosten eines Kroatien-Törns zusammen.</p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {kostenbloecke.map((k, i) => (
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

      {/* Inklusiv-Vorteil mit Bild-Split */}
      <section className="section surface-navy">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Der Unterschied im Kleingedruckten</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Warum „ab 2.500 €" hier wirklich „fast alles drin" heißt.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Beim Preisvergleich lohnt der genaue Blick auf die Nebenkosten. Viele
                  Charterangebote locken mit einem niedrigen Grundpreis und schlagen
                  dann Endreinigung, Gasflasche, Kurtaxe und Transitlog separat auf –
                  schnell sind das mehrere Hundert Euro extra.
                </p>
                <p>
                  Bei der Miss Moneypenny sind genau diese Posten bereits enthalten:
                  Endreinigung, Gas, Kurtaxe sowie Transitlog und Hafengebühr im
                  Heimathafen Šibenik. Dazu kommen Bettwäsche und Handtücher, unbegrenztes
                  WLAN, Schnorchelausrüstung, der Außenborder fürs Beiboot und eine
                  24/7-Notfallbereitschaft – ohne Aufpreis. Was am Ende noch variabel
                  bleibt, sind die Posten, die ihr ohnehin selbst in der Hand habt:
                  Sprit, auswärtige Liegeplätze, Vignetten und Verpflegung. Eine
                  vollständige Aufstellung findet ihr in den{" "}
                  <Link href="/charter-infos" className="link-arrow">Charter-Infos</Link>{" "}
                  und im Ratgeber zu den{" "}
                  <Link href="/yachtcharter-nebenkosten-kroatien" className="link-arrow">Yachtcharter-Nebenkosten in Kroatien</Link>.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-cockpit-dining.jpg" alt="Cockpit der Miss Moneypenny – Verpflegung und Bordleben gehören zur Kalkulation" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Beispielrechnung */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Transparente Beispielrechnung</span>
            <h2 className="section-title">Eine Woche, Crew von sechs bis acht.</h2>
            <p className="lede">So lassen sich die Yachtcharter-Kosten in Kroatien grob überschlagen – und auf die Crew umlegen.</p>
          </Reveal>
          <div style={{ marginTop: "3rem", overflowX: "auto" }}>
            <Reveal as="table" style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.94rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--sand-line)", textAlign: "left" }}>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Kostenposten</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Richtwert / Woche</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Hinweis</th>
                </tr>
              </thead>
              <tbody>
                {beispiel.map((row, i) => (
                  <tr key={row.posten} style={{ borderBottom: "1px solid var(--sand-line)", background: i % 2 === 0 ? "transparent" : "rgba(197,163,106,0.04)" }}>
                    <td style={{ padding: "0.8rem 1rem", fontWeight: 600 }}>{row.posten}</td>
                    <td style={{ padding: "0.8rem 1rem", color: "var(--text-soft)" }}>{row.richtwert}</td>
                    <td style={{ padding: "0.8rem 1rem", color: "var(--text-soft)" }}>{row.hinweis}</td>
                  </tr>
                ))}
              </tbody>
            </Reveal>
          </div>
          <Reveal as="div" delay={1} className="prose" style={{ marginTop: "2rem" }}>
            <p>
              Rechnet man konservativ, dominiert die Charter ab rund 2.500 € pro Woche
              die Gesamtsumme; ein optionaler Skipper schlägt mit weiteren 1.000 bis
              1.500 € zu Buche. Treibstoff, Vignetten und ein paar auswärtige Liegeplätze
              addieren sich – sofern ihr viel segelt, in geschützten Buchten ankert und
              überwiegend an Bord kocht – zu einem überschaubaren Betrag. Teilt ihr die
              fixen Kosten durch acht Köpfe, landet ihr pro Person schnell im Rahmen
              eines vergleichbaren Aktivurlaubs – inklusive eigener schwimmender
              Unterkunft, die jeden Abend in einer anderen Bucht ankert.
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--text-soft)", fontStyle: "italic" }}>
              Richtwerte, Stand 2026 – variiert je nach Saison, Bootsgröße und Anbieter;
              verbindliche Zahlen auf Anfrage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Kosten senken */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Spar-Hebel</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Wo ihr beim Kroatien-Törn wirklich spart.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Die größten Stellschrauben liegen nicht im Verhandeln, sondern in der
              Planung. Wer in der Nebensaison oder in den goldenen Monaten Juni und
              September bucht, zahlt weniger als in der Hochsaison Juli/August – und
              segelt bei verlässlichem Maestral und weniger Betrieb sogar angenehmer.
              Wer ankert statt in teuren Marinas zu liegen, spart Nacht für Nacht; ein
              autarker Katamaran mit Wassermacher und starker Solaranlage macht genau
              das tagelang möglich.
            </p>
            <p>
              Auch die Crewgröße ist ein Hebel: Je voller das Boot, desto niedriger der
              Pro-Kopf-Preis. Vignetten online statt am Eingang kaufen, viel segeln statt
              motoren und überwiegend an Bord kochen – das senkt die laufenden Kosten,
              ohne den Komfort zu beschneiden. Wie sich so ein Törn Schritt für Schritt
              vorbereiten lässt, zeigt unser Leitfaden zum{" "}
              <Link href="/segeltorn-planen" className="link-arrow">Segeltörn planen</Link>;
              ob ihr einen{" "}
              <Link href="/segeltorn-kroatien-skipper" className="link-arrow">Skipper dazubuchen</Link>{" "}
              solltet, klärt der entsprechende Ratgeber.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Konkrete Zahlen für euren Wunschtermin.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Nennt uns Termin und Crewgröße – dann bekommt ihr einen verbindlichen
              Wochenpreis statt einer Spanne. Die Miss Moneypenny liegt in der Marina
              Mandalina, Šibenik, bereit für die Kornaten und Dalmatien.
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
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Kosten eines Kroatien-Törns – häufige Fragen.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/segeltorn-kroatien-kosten#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-nav-station.jpg" />
    </>
  );
}
