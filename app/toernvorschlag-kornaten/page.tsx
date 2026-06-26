import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import FaqSection from "@/components/FaqSection";
import { Icon } from "@/components/Icons";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Törnvorschlag: 1 Woche Kornaten ab Šibenik",
  description:
    "Tag-für-Tag-Route durch den Kornati-Nationalpark: Ankerbuchten, Abstände, Konobas und Insider-Tipps für eine Woche Katamaran ab Šibenik – mit der Miss Moneypenny autark unterwegs.",
  openGraph: {
    title: "Törnvorschlag: 1 Woche Kornaten ab Šibenik | Miss Moneypenny",
    description: "Tag-für-Tag-Route Kornaten: 7 Tage, 130 Seemeilen, einsame Buchten – autark unterwegs mit der Miss Moneypenny.",
    images: [{ url: "/images/region-kornati-aerial.png", width: 1200, height: 630, alt: "Luftaufnahme Kornaten – Törnvorschlag 1 Woche ab Šibenik" }],
  },
};

const ldTrip = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "1 Woche Kornaten ab Šibenik – Törnvorschlag mit Miss Moneypenny",
  "description": "Tag-für-Tag-Route durch den Kornati-Nationalpark: 7 Tage, ca. 130 Seemeilen, einsame Ankerbuchten – autark unterwegs mit Wassermacher und Solaranlage.",
  "url": "https://chartern-in-kroatien.de/toernvorschlag-kornaten",
  "touristType": "Segler",
  "itinerary": [
    { "@type": "City", "name": "Šibenik – Prvić Luka" },
    { "@type": "City", "name": "Prvić – ACI Marina Piškera (Kornaten)" },
    { "@type": "City", "name": "Piškera – Lavsa" },
    { "@type": "City", "name": "Lavsa – Telašćica (Dugi Otok)" },
    { "@type": "City", "name": "Telašćica – Murter (Betina)" },
    { "@type": "City", "name": "Murter – Žirje oder Kaprije" },
    { "@type": "City", "name": "Žirje – Šibenik" },
  ],
  "provider": { "@id": "https://chartern-in-kroatien.de/#organization" },
};

const days = [
  {
    tag: "Tag 1 · Samstag",
    title: "Šibenik → Prvić Luka",
    distance: "ca. 10 sm",
    highlight: "Eingewöhnen, ankommen, ablegen",
    text: "Check-in in der Marina Mandalina, Bordeinweisung, Proviant an Bord. Am frühen Nachmittag ablegen und die kurze Passage nach Prvić Luka nutzen, um das Boot und die Crew miteinander vertraut zu machen. Die autofreie Insel empfängt euch mit einer ruhigen Bucht und einem handvoll Konobas direkt am Hafen. Früh vor Anker oder am Steg – ideale erste Nacht.",
  },
  {
    tag: "Tag 2 · Sonntag",
    title: "Prvić → ACI Marina Piškera (Kornaten)",
    distance: "ca. 28 sm",
    highlight: "Einfahrt in den Nationalpark",
    text: "Nationalpark-Vignette an Bord? Dann geht es heute durch den Murterski kanal in den Kornati-Nationalpark. Die ACI Marina Piškera liegt mittendrin – kleiner Steg, Restaurant, Wasserversorgung. Wer früh ankommt, ankert lieber in einer der Buchten um Piškera herum und nutzt die Marina nur zum Proviantieren.",
  },
  {
    tag: "Tag 3 · Montag",
    title: "Piškera → Lavsa",
    distance: "ca. 8 sm",
    highlight: "Die schönste Ankerbucht der Kornaten",
    text: "Nur eine kurze Etappe – aber eine der lohnendsten. Die Bucht von Lavsa gilt als eine der schönsten der ganzen Adria: türkis, geschützt, umgeben von kargen Kalkfelsen. Mittags ankern, schwimmen, schnorcheln. Nachmittags kommt die Konoba Lavsa auf – Grillfisch und Rotwein mit Blick aufs eigene Boot. Mit dem Wassermacher der Miss Moneypenny könnt ihr hier entspannt zwei Nächte bleiben.",
  },
  {
    tag: "Tag 4 · Dienstag",
    title: "Lavsa → Telašćica (Naturpark Dugi Otok)",
    distance: "ca. 18 sm",
    highlight: "Salzsee, Steilküste und Einsamkeit",
    text: "Grenzübergang vom Kornati-Nationalpark zum Naturpark Telašćica auf Dugi Otok. Die riesige Bucht bietet auf über 7 km Länge Schutz auch bei Bora. Highlight: der Salzwassersee Mir, 15 Minuten zu Fuß – sein Wasser ist wärmer als das Meer. Auf der Klippe gegenüber fällt der Fels 160 m senkrecht ins tiefblaue Meer. Einer der beeindruckendsten Aussichtspunkte der Adria.",
  },
  {
    tag: "Tag 5 · Mittwoch",
    title: "Telašćica → Murter (Betina)",
    distance: "ca. 22 sm",
    highlight: "Frischer Proviant, Stadtbummel",
    text: "Zwischenstopp in Betina auf der Insel Murter: Supermarkt, Bäcker, Tankstelle. Murter-Stadt ist einen Landgang wert – hübsche Gassen, Fischermarkt und Kaffeebars. Wer noch einen Abstecher will, ankert auf dem Rückweg kurz in der Bucht Hramina. Entspannte Etappe nach den ruhigen Tagen im Park.",
  },
  {
    tag: "Tag 6 · Donnerstag",
    title: "Murter → Žirje oder Kaprije",
    distance: "ca. 20 sm",
    highlight: "Letzte einsame Nacht vor dem Heimweg",
    text: "Die Insel Žirje ist der am weitesten seewärts gelegene Vorposten des Šibeniker Reviers – und damit oft angenehm ruhig. Ankern in der Bucht Mikavica, abends ein letztes Mal in einer kleinen Konoba. Wer lieber näher an Šibenik ist, wählt Kaprije als sanfteren Kompromiss.",
  },
  {
    tag: "Tag 7 · Freitag",
    title: "Žirje → Šibenik",
    distance: "ca. 25 sm",
    highlight: "Heimweg und Übergabe",
    text: "Frühzeitig ablegen, den Maestral auf dem Rückweg nutzen. Wer Zeit hat, dreht noch eine Runde durch den Šibeniker Kanal mit Blick auf die Festung St. Michael. Check-out in der Marina Mandalina bis 09:00 Uhr – oder entspannt am Vorabend erledigen.",
  },
];

const tipps = [
  {
    icon: "shield" as const,
    title: "Nationalpark-Vignette",
    text: "Die Einfahrt in den Kornati-Nationalpark ist kostenpflichtig. Vignette online vorbuchen oder an der Ranger-Station kaufen – erspart Wartezeit.",
  },
  {
    icon: "anchor" as const,
    title: "Bojen reservieren",
    text: "In den Kornaten gibt es kaum Anker-freie Tage ohne Bojenpflicht. mySea oder Anchor ermöglichen Reservierungen – vor allem in der Hauptsaison sinnvoll.",
  },
  {
    icon: "droplet" as const,
    title: "Wasser an Bord",
    text: "Im Park gibt es kaum Frischwasser. Mit dem Wassermacher der Miss Moneypenny kein Problem: 60 Liter pro Stunde, tagelang unabhängig von Hafenstopp.",
  },
  {
    icon: "sun" as const,
    title: "Beste Reisezeit",
    text: "Juni und September sind ideal – angenehme Temperaturen, verlässlicher Maestral, deutlich weniger Boote als im Juli/August.",
  },
];

const facts = [
  "Der Törnvorschlag führt in 7 Tagen mit 6 Nächten über rund 130 Seemeilen durch den Kornati-Nationalpark und startet ab der Marina Mandalina in Šibenik.",
  "Die Route verbindet die Highlights des Nationalparks mit Zwischenstopps in Prvić, Piškera, Lavsa, Telašćica, Murter und Žirje oder Kaprije.",
  "Die Etappenlängen sind bewusst kurz gehalten, damit nach jedem Segeltag noch Zeit zum Ankern, Schwimmen und Einkehren bleibt.",
  "Die Bucht von Lavsa gilt als eine der schönsten der Adria und lädt zum Schwimmen, Schnorcheln und zwei Nächten vor Anker ein.",
  "Im Naturpark Telašćica auf Dugi Otok bietet die über 7 km lange Bucht auch bei Bora Schutz, dazu den Salzsee Mir und eine 160 m hohe Steilküste.",
  "Dank Wassermacher mit 60 Litern pro Stunde und Solaranlage bleibt die Miss Moneypenny im infrastrukturarmen Nationalpark tagelang autark vor Anker.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Wie lang ist der Kornaten-Törn ab Šibenik und wie viele Seemeilen sind es?",
    a: "Der Törnvorschlag ist auf eine Woche ausgelegt – 7 Tage mit 6 Nächten und rund 130 Seemeilen insgesamt. Start und Ziel ist die Marina Mandalina in Šibenik. Die Etappen sind so gewählt, dass nach jedem Segeltag noch Zeit zum Ankern und Einkehren bleibt.",
  },
  {
    q: "Welche Stationen liegen auf der Route durch die Kornaten?",
    a: "Von Šibenik geht es über Prvić Luka in den Kornati-Nationalpark zur ACI Marina Piškera und weiter in die Bucht von Lavsa. Danach folgen der Naturpark Telašćica auf Dugi Otok, ein Proviant-Stopp in Betina auf Murter und eine letzte Nacht bei Žirje oder Kaprije, bevor es zurück nach Šibenik geht.",
  },
  {
    q: "Brauche ich eine Nationalpark-Vignette für die Kornaten?",
    a: "Ja, die Einfahrt in den Kornati-Nationalpark ist kostenpflichtig. Die Vignette lässt sich online vorbuchen oder an der Ranger-Station kaufen – die Vorbuchung erspart Wartezeit. In den Kornaten gilt zudem vielerorts Bojenpflicht, daher sind Reservierungen über Apps wie mySea oder Anchor besonders in der Hauptsaison sinnvoll.",
  },
  {
    q: "Warum ist ein autarkes Boot in den Kornaten von Vorteil?",
    a: "Der Nationalpark hat kaum Infrastruktur: Wasser gibt es nur an wenigen ACI-Stegen, Strom selten. Boote ohne Wassermacher müssen regelmäßig Marina-Stopps einplanen und verlieren so Flexibilität und Budget. Die Miss Moneypenny erzeugt mit dem Wassermacher 60 Liter Frischwasser pro Stunde und versorgt sich über die Solaranlage selbst – so bleibt ihr, wo es schön ist.",
  },
  {
    q: "Wann ist die beste Reisezeit für den Kornaten-Törn?",
    a: "Juni und September gelten als ideal: angenehme Temperaturen, verlässlicher Maestral und deutlich weniger Boote als im Juli und August. So lassen sich die einsamen Buchten des Nationalparks am entspanntesten genießen.",
  },
];

export default function ToernvorschlagKornatenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldTrip) }}
      />
      <PageHero
        eyebrow="Törnvorschlag"
        title="1 Woche Kornaten ab Šibenik"
        lede="Tag-für-Tag-Route durch den schönsten Archipel der Adria: 89 Inseln, türkise Buchten und einsame Ankerplätze – autark an Bord der Miss Moneypenny."
        image="/images/region-kornati-aerial.png"
        imageAlt="Luftaufnahme der Kornaten mit Inseln und türkisem Wasser"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Reviere", href: "/revier-sibenik" },
          { label: "Kornaten", href: "/segeln-in-den-kornaten" },
          { label: "Törnvorschlag" },
        ]}
      />

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
              <Reveal as="div"><span className="eyebrow">Die Route auf einen Blick</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">7 Tage, 130 Seemeilen, unzählige Buchten.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Diese Route verbindet die Highlights des Kornati-Nationalparks mit
                  praktischen Zwischenstopps, ohne dabei in Eile zu verfallen. Kürzere
                  Etappen lassen Zeit zum Schwimmen, Schnorcheln und Einkehren – das
                  eigentliche Programm eines Kornaten-Törns.
                </p>
                <p>
                  Dank Wassermacher und Solaranlage der Miss Moneypenny braucht ihr
                  keine teure Marina für Wasser oder Strom. Das gibt euch die Freiheit,
                  spontan eine Nacht länger in einer schönen Bucht zu bleiben.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill"><Icon name="waves" style={{ width: 15 }} /> ca. 130 sm gesamt</span>
                <span className="tag-pill">6 Nächte, 7 Tage</span>
                <span className="tag-pill">ab Marina Mandalina</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/region-kornati-cove.png"
                  alt="Einsame Ankerbucht im Kornati-Nationalpark"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tagesrouten */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Tag für Tag</span>
            <h2 className="section-title">Die Route im Detail.</h2>
            <p className="lede">Etappenlängen so gewählt, dass nach jedem Segeltag noch Zeit zum Ankern und Einkehren bleibt.</p>
          </Reveal>
          <div className="steps steps-grid" style={{ marginTop: "3rem" }}>
            {days.map((day) => (
              <Reveal key={day.tag} as="div" className="step">
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--brass-600)", fontWeight: 700 }}>{day.tag}</span>
                  <h3 style={{ marginTop: "0.4rem" }}>{day.title}</h3>
                  <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", marginBottom: "0.9rem", flexWrap: "wrap" }}>
                    <span className="tag-pill" style={{ fontSize: "0.7rem" }}><Icon name="waves" style={{ width: 13 }} />{day.distance}</span>
                    <span className="tag-pill" style={{ fontSize: "0.7rem" }}>{day.highlight}</span>
                  </div>
                  <p style={{ fontSize: "0.94rem", color: "var(--text-soft)", lineHeight: 1.65 }}>{day.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Autarkie-USP */}
      <section className="section surface-navy">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Warum der Unterschied zählt</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Im Nationalpark ist Autarkie kein Luxus – sie ist der Plan.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Die Kornaten haben kaum Infrastruktur. Wasser gibt es nur an wenigen
                  ACI-Stegen, Strom selten. Boote ohne Wassermacher müssen regelmäßig
                  Marina-Stopps einplanen – und zahlen dafür mit Flexibilität und Geld.
                  Was ein Liegeplatz für einen Katamaran in den Häfen des Reviers kostet,
                  zeigt die Übersicht der{" "}
                  <Link href="/marina-liegeplatz-preise-kroatien">Marina-Liegeplätze &amp; Preise</Link>.
                </p>
                <p>
                  Mit dem Wassermacher der Miss Moneypenny laufen 60 Liter Frischwasser
                  pro Stunde. Die Solaranlage hält Kühlschrank, Navigation und Licht
                  am Laufen – ganz ohne Generator. Ihr bleibt, wo es schön ist.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2} className="grid-2" style={{ gap: "1.2rem" }}>
              <article className="feature">
                <span className="ic"><Icon name="droplet" /></span>
                <h3>Wassermacher</h3>
                <p>60 l/h aus Meerwasser – volle Tanks ohne Hafenstopp.</p>
              </article>
              <article className="feature">
                <span className="ic"><Icon name="sun" /></span>
                <h3>Solaranlage</h3>
                <p>Lautlose Energie – kein Generator, kein Lärm, kein Treibstoff.</p>
              </article>
              <article className="feature">
                <span className="ic"><Icon name="anchor" /></span>
                <h3>Frei vor Anker</h3>
                <p>Tage in einsamen Buchten – ohne Zwangs-Marina am Abend.</p>
              </article>
              <article className="feature">
                <span className="ic"><Icon name="leaf" /></span>
                <h3>Weniger Kosten</h3>
                <p>Weniger Marina-Nächte bedeuten direkt mehr Budget für Erlebnisse.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Praktische Tipps */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Vor dem Ablegen</span>
            <h2 className="section-title">Praktische Tipps für den Kornaten-Törn.</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {tipps.map((t, i) => (
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

      {/* Weiterführend */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Mehr zum Revier</span>
            <h2 className="section-title">Tiefer ins Kornaten-Revier eintauchen.</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "2.5rem" }}>
            <Reveal>
              <Link href="/segeln-in-den-kornaten" className="region-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/kornati-panorama.png" alt="Kornaten Panorama" />
                <div className="rc-body">
                  <span className="rc-kicker">Nationalpark</span>
                  <h3>Segeln in den Kornaten</h3>
                  <p>Buchten, Bojenfelder, Konobas und Windbedingungen im Überblick.</p>
                  <span className="rc-more">Revier entdecken →</span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={1}>
              <Link href="/revier-sibenik" className="region-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/region-sibenik.png" alt="Revier Šibenik" />
                <div className="rc-body">
                  <span className="rc-kicker">Heimathafen</span>
                  <h3>Revier Šibenik</h3>
                  <p>Alles zum Ausgangspunkt – Marina Mandalina, Krka und Umgebung.</p>
                  <span className="rc-more">Mehr erfahren →</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Törn durch die Kornaten – kurz erklärt.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/toernvorschlag-kornaten#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/region-kornati-aerial.png" />
    </>
  );
}
