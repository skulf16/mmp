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
  title: "Marina-Liegeplätze & Preise im Revier: Katamaran ab Šibenik",
  description:
    "Alle Marinas, die der Katamaran Miss Moneypenny ab Šibenik in einer Woche erreicht – von den Kornaten bis Split/Trogir, mit Liegeplatz-Preisen als Richtwert (Stand 2026) und dem wichtigen Katamaran-Aufschlag.",
  openGraph: {
    title: "Marina-Preise im Revier der Miss Moneypenny",
    description:
      "Liegeplatz-Preise der Marinas zwischen Šibenik, den Kornaten und Split/Trogir – Richtwerte für einen Katamaran, mit Hinweis auf den Mehrrumpf-Aufschlag.",
    images: [
      {
        url: "/images/region-sibenik.png",
        width: 1200,
        height: 630,
        alt: "Hafen von Šibenik – Heimathafen und Ausgangspunkt für die Marinas des Reviers",
      },
    ],
  },
};

type Marina = {
  name: string;
  ort: string;
  charakter: string;
  /** Richtwert Katamaran ~12 m, Hochsaison 2026, € pro Nacht */
  preis: string;
};

const zoneHeimat: Marina[] = [
  {
    name: "D-Marin Mandalina",
    ort: "Šibenik · Heimathafen (0 sm)",
    charakter: "Premium-Stadtmarina gegenüber der Altstadt – der Start- und Zielpunkt jedes Törns.",
    preis: "~200–280 € (auf Anfrage)",
  },
  {
    name: "ACI Marina Skradin",
    ort: "Krka · rund 12 sm flussauf",
    charakter: "Ruhige Süßwasser-Marina am Eingang zum Krka-Nationalpark und seinen Wasserfällen.",
    preis: "~230–250 €",
  },
  {
    name: "ACI Marina Vodice",
    ort: "Vodice · rund 9 sm NW",
    charakter: "Lebhafte Stadtmarina im Touristenort, viel Leben und kurze Wege an Land.",
    preis: "~200–210 €",
  },
  {
    name: "Marina Tribunj",
    ort: "Tribunj · rund 11 sm NW",
    charakter: "Charmante, ruhige Dorfmarina (D-Marin) neben dem alten Fischerort.",
    preis: "~180–230 € (auf Anfrage)",
  },
  {
    name: "Marina Kremik",
    ort: "Primošten · rund 9 sm S",
    charakter: "Großer, sehr gut geschützter Charterhafen in einer tiefen Bucht.",
    preis: "~180–190 €",
  },
  {
    name: "Marina Frapa",
    ort: "Rogoznica · rund 14 sm SE",
    charakter: "Mehrfach ausgezeichnete Resort-Marina mit Hotel, Pools und Restaurants.",
    preis: "~200–210 €",
  },
];

const zoneKornaten: Marina[] = [
  {
    name: "ACI Marina Piškera",
    ort: "NP Kornaten · Saison April–Okt.",
    charakter: "Abgelegene Park-Marina mitten im Nationalpark – Tagespreis enthält den NP-Eintritt.",
    preis: "~195 €",
  },
  {
    name: "ACI Marina Žut",
    ort: "Insel Žut · Saison April–Okt.",
    charakter: "Sehr ruhige Insel-Marina am Rand des Kornaten-Nationalparks, ohne Ort.",
    preis: "~165 €",
  },
  {
    name: "ACI Marina Jezera",
    ort: "Murter · ganzjährig",
    charakter: "Geschützte ACI-Marina an der Südostseite Murters – idealer Sprung zu den Kornaten.",
    preis: "~205–210 €",
  },
  {
    name: "Marina Hramina",
    ort: "Murter · ganzjährig",
    charakter: "Große, ganzjährige Marina und Charterbasis im Ort Murter.",
    preis: "~225–230 €",
  },
  {
    name: "Marina Betina",
    ort: "Murter · ganzjährig",
    charakter: "Kleine, charmante Marina im Dorf Betina mit Tradition im Holzbootbau.",
    preis: "~180 €",
  },
];

const zoneRand: Marina[] = [
  {
    name: "D-Marin Dalmacija",
    ort: "Sukošan b. Zadar · rund 33 sm NW",
    charakter: "Größte und modernste Marina Kroatiens, großes Resort mit Superyacht-Pier.",
    preis: "~210–280 € (auf Anfrage)",
  },
  {
    name: "Marina Kornati",
    ort: "Biograd na Moru · rund 25 sm NW",
    charakter: "Große, ganzjährige Marina mit Hotel direkt im Ort – Kroatiens erste Nautik-Marina.",
    preis: "~240–290 €",
  },
  {
    name: "Marina Baotić",
    ort: "Seget b. Trogir · rund 32 sm SE",
    charakter: "Große Charterbasis nahe dem Flughafen Split – kein pauschaler Kat-Aufschlag, aber freitags +100 € für Katamarane.",
    preis: "~95–195 €",
  },
  {
    name: "Marina Kaštela",
    ort: "Kaštela (Split-Bucht) · rund 33 sm SE",
    charakter: "Eine der größten, modernsten Marinas des Landes zwischen Trogir und Split.",
    preis: "~150–155 €",
  },
  {
    name: "ACI Marina Trogir",
    ort: "Trogir (Čiovo) · rund 30 sm SE",
    charakter: "Premium-Stadtmarina direkt gegenüber der Altstadt von Trogir.",
    preis: "~300 €",
  },
  {
    name: "ACI Marina Split",
    ort: "Split-Zentrum · rund 38 sm SE",
    charakter: "Zentrale Stadtmarina mitten in Split, am äußersten Rand eines Wochentörns.",
    preis: "~330–340 €",
  },
];

/** Auszug aus der offiziellen Preisliste 2026 der Marina Baotić (Nautički centar Trogir d.o.o.) */
const baoticPreise: { laenge: string; breite: string; preis: string; mmp?: boolean }[] = [
  { laenge: "9–9,99 m", breite: "3,5 m", preis: "90,00 €" },
  { laenge: "10–10,99 m", breite: "3,8 m", preis: "90,00 €" },
  { laenge: "11–11,99 m", breite: "4,1 m", preis: "90,00 €" },
  { laenge: "12–12,99 m", breite: "4,4 m", preis: "95,00 €", mmp: true },
  { laenge: "13–13,99 m", breite: "4,7 m", preis: "119,00 €" },
  { laenge: "14–14,99 m", breite: "5,0 m", preis: "129,00 €" },
  { laenge: "15–15,99 m", breite: "5,3 m", preis: "139,00 €" },
  { laenge: "16–16,99 m", breite: "5,5 m", preis: "149,00 €" },
];

const baoticRegeln = [
  "Freitags: Boote bis 13,99 m +50 €, ab 14 m und Katamarane +100 €.",
  "Charterboote im Transit: +50 % auf den Tagesliegeplatz.",
  "Aufenthalt ab 3 Nächten: −15 % auf den Tagespreis.",
  "Strom 16A (Katamaran/Motoryacht): 7 €/Tag in der 12-m-Klasse, Wasser pauschal 5 €/Tag.",
  "Rabatte: Tankbeleg der B-MAX-Tankstelle ab 80 l −10 %, Restaurant-Beleg ab 100 € −50 €.",
  "Der Tagesliegeplatz gilt bis 14:00 Uhr des Folgetags; enthalten sind Liegeplatz, Bewachung und Sanitäranlagen.",
];

const facts = [
  "Die Miss Moneypenny erreicht ab dem Heimathafen Marina Mandalina in Šibenik innerhalb einer Woche bequem rund ein Dutzend Marinas – von den Kornaten bis Split und Trogir.",
  "Ein Marina-Liegeplatz für einen Katamaran dieser Größe kostet im Revier als Richtwert grob 95 bis 340 € pro Nacht – je nach Marina, Saison und Wochentag (Stand 2026); verbindliche Zahlen nur auf Anfrage.",
  "Weil die Miss Moneypenny als Lagoon 400 S2 mit 7,25 m doppelt so breit ist wie ein Einrumpfboot, berechnen fast alle kroatischen Marinas einen Mehrrumpf-Aufschlag von rund 50 bis 100 Prozent.",
  "Die günstigsten Liegeplätze im Revier bieten Marina Baotić bei Trogir (unter der Woche) und die Kornaten-Marina ACI Žut; am teuersten sind die Stadtmarinas ACI Split und ACI Trogir.",
  "Die ACI-Marinas Piškera und Žut im Kornaten-Nationalpark sind nur in der Saison von April bis Oktober geöffnet; der Tagespreis in Piškera enthält den Nationalpark-Eintritt.",
  "Die Hafengebühr im Heimathafen Šibenik ist bei der Miss Moneypenny bereits im Charterpreis enthalten – auswärtige Liegeplätze, Bojen oder freies Ankern steuert ihr selbst.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Welche Marinas erreicht die Miss Moneypenny innerhalb einer Woche?",
    a: "Vom Heimathafen Marina Mandalina in Šibenik aus erreicht der Katamaran in einer Woche bequem die Marinas des Šibenik-Archipels (Skradin, Vodice, Tribunj, Kremik in Primošten, Frapa in Rogoznica), die Marinas rund um die Kornaten und Murter (ACI Piškera, ACI Žut, ACI Jezera, Hramina, Betina) sowie – am äußeren Rand des Törns – den Raum Zadar/Biograd (D-Marin Dalmacija, Marina Kornati) und Mitteldalmatien um Trogir und Split (Baotić, Kaštela, ACI Trogir, ACI Split). Das geschützte Kernrevier um Šibenik und die Kornaten lässt sich dabei am entspanntesten befahren.",
  },
  {
    q: "Was kostet ein Marina-Liegeplatz für einen Katamaran in Kroatien?",
    a: "Für einen Katamaran von rund 12 m wie die Miss Moneypenny liegt der Liegeplatz im Revier als Richtwert grob zwischen 95 und 340 € pro Nacht in der Hochsaison (Stand 2026 – variiert je nach Saison, Bootsgröße, Wochentag und Anbieter; verbindliche Zahlen auf Anfrage). Günstig sind Marina Baotić bei Trogir (unter der Woche) und die Kornaten-Marina ACI Žut, teuer die Stadtmarinas ACI Split und ACI Trogir. Wer überwiegend vor Anker liegt, hält diesen Posten niedrig.",
  },
  {
    q: "Warum zahlt ein Katamaran in der Marina mehr als ein Einrumpfboot?",
    a: "Ein Katamaran belegt mit zwei Rümpfen deutlich mehr Platz: Die Miss Moneypenny ist als Lagoon 400 S2 zwar nur rund 12 m lang, aber 7,25 m breit – fast doppelt so breit wie ein gleich langes Einrumpfboot. Deshalb berechnen fast alle kroatischen Marinas einen Mehrrumpf-Aufschlag. In den ACI-Kornaten-Marinas Piškera und Žut sind das rund 50 Prozent, in den meisten privaten Marinas und den Stadt-ACIs (Split, Trogir, Jezera) bis zu 100 Prozent – also der doppelte Meterpreis. Eine teilweise Ausnahme ist Marina Baotić bei Trogir: Sie erhebt keinen pauschalen prozentualen Mehrrumpf-Aufschlag, berechnet Katamaranen aber freitags einen Zuschlag von 100 € – und für Charterboote im Transit kommen 50 Prozent dazu.",
  },
  {
    q: "Sind die Marinas im Kornaten-Nationalpark das ganze Jahr geöffnet?",
    a: "Nein. Die ACI-Marinas Piškera und Žut mitten im bzw. am Rand des Kornaten-Nationalparks sind reine Saison-Marinas und nur von etwa April bis Oktober in Betrieb. In Piškera ist der Nationalpark-Eintritt im Tagespreis enthalten. Außerhalb der Saison weicht man auf die ganzjährigen Marinas auf Murter (Jezera, Hramina, Betina) oder zurück Richtung Šibenik aus.",
  },
  {
    q: "Muss ich auf dem Törn jede Nacht eine Marina ansteuern?",
    a: "Nein – und genau hier spielt die Miss Moneypenny ihre Stärke aus. Mit Wassermacher, 300-Liter-Tank, starker Solaranlage und Inverter ist sie tagelang autark, sodass ihr in einer der vielen Buchten frei ankern könnt, statt jeden Abend eine teure Marina zu suchen. Eine bewährte Mischung sind zwei bis drei Marina-Nächte pro Woche – für Strom, Duschen und einen Stadtbummel – und sonst Ankern oder eine Mooring-Boje. Mehr dazu im Ratgeber zum Ankern in Kroatien.",
  },
  {
    q: "Sind die genannten Marina-Preise verbindlich?",
    a: "Nein, es sind Richtwerte mit Stand 2026 für einen Katamaran von rund 12 m in der Hochsaison. Die tatsächlichen Liegegebühren hängen von Saison, exakter Bootsgröße samt Breite, Lage des Liegeplatzes und Marina ab und werden jährlich angepasst; manche Marinas (etwa D-Marin Mandalina, Tribunj und Dalmacija) veröffentlichen keine festen Transit-Meterpreise und vergeben breiten Katamaranen gezielt größere Plätze. Verbindliche Zahlen nennen die Marinas auf Anfrage – für eure Törnplanung rechnen wir euch das gern mit ein.",
  },
];

function MarinaTable({ rows }: { rows: Marina[] }) {
  return (
    <div style={{ marginTop: "2rem", overflowX: "auto" }}>
      <Reveal as="table" style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.94rem" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid var(--sand-line)", textAlign: "left" }}>
            <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Marina</th>
            <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Lage</th>
            <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Charakter</th>
            <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)", whiteSpace: "nowrap" }}>Katamaran / Nacht</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((m, i) => (
            <tr key={m.name} style={{ borderBottom: "1px solid var(--sand-line)", background: i % 2 === 0 ? "transparent" : "rgba(197,163,106,0.04)" }}>
              <td style={{ padding: "0.8rem 1rem", fontWeight: 600, color: "var(--navy-900)" }}>{m.name}</td>
              <td style={{ padding: "0.8rem 1rem", color: "var(--text-soft)", whiteSpace: "nowrap" }}>{m.ort}</td>
              <td style={{ padding: "0.8rem 1rem", color: "var(--text-soft)" }}>{m.charakter}</td>
              <td style={{ padding: "0.8rem 1rem", color: "var(--navy-900)", fontWeight: 600, whiteSpace: "nowrap" }}>{m.preis}</td>
            </tr>
          ))}
        </tbody>
      </Reveal>
    </div>
  );
}

export default function MarinaLiegeplatzPreiseKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Marinas im Revier"
        title="Marina-Liegeplätze & Preise ab Šibenik"
        lede="Alle Marinas, die die Miss Moneypenny in einer Woche erreicht – von den Kornaten bis Split und Trogir. Mit Liegeplatz-Preisen als Richtwert (Stand 2026) und dem entscheidenden Katamaran-Aufschlag."
        image="/images/region-sibenik.png"
        imageAlt="Hafen von Šibenik – Heimathafen und Ausgangspunkt für die Marinas des Reviers"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Ratgeber", href: "/ratgeber" },
          { label: "Marina-Liegeplätze & Preise" },
        ]}
      />

      <ArticleByline slug="marina-liegeplatz-preise-kroatien" />

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
          <Reveal as="h2" delay={1} className="section-title">Eine Woche, ein Dutzend Marinas zur Wahl.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Vom Heimathafen <strong>Marina Mandalina in Šibenik</strong> aus liegt eines der
              abwechslungsreichsten Reviere der Adria direkt vor dem Bug: Innerhalb einer
              Törnwoche erreicht die Miss Moneypenny bequem rund ein Dutzend Marinas – die
              geschützten Häfen des <strong>Šibenik-Archipels</strong>, die Park-Marinas der{" "}
              <Link href="/segeln-in-den-kornaten" className="link-arrow">Kornaten</Link>{" "}
              und, am äußeren Rand des Törns, die Stützpunkte rund um <strong>Zadar, Trogir und Split</strong>.
            </p>
            <p>
              Diese Seite stellt die erreichbaren Marinas zonenweise zusammen und nennt für jede
              einen <strong>Liegeplatz-Richtwert für einen Katamaran</strong> wie die Miss
              Moneypenny. Wichtig vorweg: Alle Preise sind <em>Richtwerte (Stand 2026)</em> für
              ein rund 12 m langes Mehrrumpfboot in der Hochsaison und variieren je nach Saison,
              Bootsgröße und Anbieter – verbindliche Zahlen gibt es auf Anfrage. Wie sich die
              Liegegebühren in die Gesamtkalkulation einordnen, zeigen die Ratgeber zu den{" "}
              <Link href="/yachtcharter-nebenkosten-kroatien" className="link-arrow">Yachtcharter-Nebenkosten</Link>{" "}
              und den{" "}
              <Link href="/segeltorn-kroatien-kosten" className="link-arrow">Kosten eines Segeltörns</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Katamaran-Aufschlag erklärt */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Das müsst ihr wissen</span>
            <h2 className="section-title">Der Katamaran-Aufschlag: breit liegt teurer.</h2>
            <p className="lede">Warum ein Mehrrumpfboot in der Marina mehr zahlt – und wo es sich auszahlt, das zu wissen.</p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            <Reveal delay={1}>
              <article className="feature">
                <span className="ic"><Icon name="waves" /></span>
                <h3>7,25 m breit statt 4 m</h3>
                <p>
                  Mit zwei Rümpfen ist die Miss Moneypenny zwar nur rund 12 m lang, aber 7,25 m
                  breit – fast doppelt so breit wie ein gleich langes Einrumpfboot. Sie belegt
                  damit deutlich mehr Platz am Steg, und genau das berechnen die Marinas.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="feature">
                <span className="ic"><Icon name="anchor" /></span>
                <h3>50 bis 100 % Aufschlag</h3>
                <p>
                  In den ACI-Kornaten-Marinas Piškera und Žut sind es rund <strong>+50 %</strong>,
                  in den meisten privaten Marinas und Stadt-ACIs (Split, Trogir, Jezera) bis zu{" "}
                  <strong>+100 %</strong> auf den Meterpreis. Marina Baotić bei Trogir verzichtet
                  2026 auf den pauschalen Mehrrumpf-Aufschlag und berechnet Katamaranen nur
                  freitags 100 € extra.
                </p>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="feature">
                <span className="ic"><Icon name="calendar" /></span>
                <h3>Platz vorab reservieren</h3>
                <p>
                  Breite Liegeplätze sind in der Hochsaison knapp. Wer mit einem Katamaran in eine
                  beliebte Stadtmarina will, sollte früh ankommen oder vorab reservieren – sonst
                  bleibt nur die Boje oder die nächste Bucht.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="feature">
                <span className="ic"><Icon name="droplet" /></span>
                <h3>Autark gegensteuern</h3>
                <p>
                  Wassermacher und Solaranlage machen Marina-Nächte zur Option statt zur Pflicht.
                  Zwei bis drei Hafennächte pro Woche, sonst ankern – so bleibt der teuerste
                  Posten klein. Mehr im Ratgeber zum{" "}
                  <Link href="/ankern-kroatien">Ankern in Kroatien</Link>.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Zone 1: Heimathafen & Šibenik-Archipel */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Zone 1 · 0–15 sm</span>
            <h2 className="section-title">Heimathafen & Šibenik-Archipel.</h2>
            <p className="lede">Die nächsten Häfen rund um Šibenik – ideal für die erste und letzte Nacht oder einen entspannten Kurztörn.</p>
          </Reveal>
          <MarinaTable rows={zoneHeimat} />
          <Reveal as="p" delay={1} className="prose" style={{ marginTop: "1.4rem", fontSize: "0.9rem", color: "var(--text-soft)" }}>
            Die Hafengebühr im Heimathafen <strong>Marina Mandalina</strong> ist bei der Miss
            Moneypenny bereits im Charterpreis enthalten – ihr zahlt sie für die erste und letzte
            Nacht also nicht extra. Details zum Ausgangspunkt im{" "}
            <Link href="/revier-sibenik" className="link-arrow">Revier-Guide Šibenik</Link>.
          </Reveal>
        </div>
      </section>

      {/* Zone 2: Kornaten & Murter */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Zone 2 · 15–30 sm</span>
            <h2 className="section-title">Kornaten-Nationalpark & Murter.</h2>
            <p className="lede">Das Herzstück des Reviers: Park-Marinas zwischen den 89 Inseln und die ganzjährigen Häfen auf Murter als Tor dorthin.</p>
          </Reveal>
          <MarinaTable rows={zoneKornaten} />
          <Reveal as="p" delay={1} className="prose" style={{ marginTop: "1.4rem", fontSize: "0.9rem", color: "var(--text-soft)" }}>
            Hinweis: <strong>ACI Piškera</strong> und <strong>ACI Žut</strong> sind reine
            Saison-Marinas (etwa April–Oktober). Für die Kornaten ist zudem eine{" "}
            <Link href="/ankern-kroatien" className="link-arrow">Nationalpark-Vignette</Link>{" "}
            nötig – in Piškera ist der Eintritt im Tagespreis bereits enthalten. Konkrete Route im{" "}
            <Link href="/toernvorschlag-kornaten" className="link-arrow">Törnvorschlag Kornaten</Link>.
          </Reveal>
        </div>
      </section>

      {/* Zone 3: Zadar/Biograd & Mitteldalmatien */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Zone 3 · 25–40 sm</span>
            <h2 className="section-title">Zadar/Biograd & Mitteldalmatien.</h2>
            <p className="lede">Am äußeren Rand der Törnwoche: die großen Stützpunkte um Zadar im Nordwesten und um Trogir/Split im Südosten. Machbar, aber als Tagesetappe geplant.</p>
          </Reveal>
          <MarinaTable rows={zoneRand} />
          <Reveal as="p" delay={1} className="prose" style={{ marginTop: "1.4rem", fontSize: "0.9rem", color: "var(--text-soft)" }}>
            Preis-Tipp: <strong>Marina Baotić</strong> verzichtet 2026 als eine der wenigen auf den
            pauschalen Katamaran-Aufschlag und ist unter der Woche der günstigste der großen Häfen –
            nur freitags kommen 100 € für Mehrrümpfe dazu, und Charterboote im Transit zahlen 50 %
            Aufschlag. Diese Marinas liegen ohnehin schon eine ordentliche Tagesetappe von Šibenik
            entfernt – schön als Ziel oder Wendepunkt, aber das entspannte Kernrevier bleibt der
            Bogen zwischen Šibenik und den Kornaten. Wer von hier aus weiterdenkt, findet Anregungen unter{" "}
            <Link href="/staedte-dalmatiens" className="link-arrow">Städte Dalmatiens</Link>{" "}
            und{" "}
            <Link href="/dalmatien-segeln-route" className="link-arrow">Segeln in Dalmatien</Link>.
          </Reveal>

          {/* Beispiel-Preisliste Marina Baotić 2026 */}
          <Reveal as="div" delay={1} style={{ marginTop: "2.5rem", border: "1px solid var(--sand-line)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ padding: "1.6rem 1.8rem", background: "rgba(197,163,106,0.06)", borderBottom: "1px solid var(--sand-line)" }}>
              <span className="eyebrow no-rule">Beispiel · offizielle Preisliste 2026</span>
              <h3 style={{ fontFamily: "var(--font-fraunces)", color: "var(--navy-900)", fontSize: "1.3rem", margin: "0.6rem 0 0.8rem" }}>
                So rechnet eine Marina: Marina Baotić bei Trogir
              </h3>
              <p style={{ margin: 0, color: "var(--text-soft)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Kroatische Marinas berechnen einen Tagespreis nach Bootslänge und schlagen Strom, Wasser
                und Zuschläge auf. Die Miss Moneypenny fällt mit knapp 12 m in die 12-Meter-Zeile – mit
                7,25 m Breite aber weit über die dort vorgesehenen 4,4 m, weshalb ihr ein breiterer
                Liegeplatz zugewiesen wird.
              </p>
            </div>
            <div style={{ padding: "1.4rem 1.8rem" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.92rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid var(--sand-line)", textAlign: "left" }}>
                      <th style={{ padding: "0.6rem 0.8rem", fontWeight: 700, color: "var(--navy-900)" }}>Bootslänge</th>
                      <th style={{ padding: "0.6rem 0.8rem", fontWeight: 700, color: "var(--navy-900)", whiteSpace: "nowrap" }}>Rumpfbreite bis</th>
                      <th style={{ padding: "0.6rem 0.8rem", fontWeight: 700, color: "var(--navy-900)", whiteSpace: "nowrap" }}>Tagesliegeplatz</th>
                    </tr>
                  </thead>
                  <tbody>
                    {baoticPreise.map((r) => (
                      <tr key={r.laenge} style={{ borderBottom: "1px solid var(--sand-line)", background: r.mmp ? "rgba(197,163,106,0.14)" : "transparent" }}>
                        <td style={{ padding: "0.6rem 0.8rem", fontWeight: r.mmp ? 700 : 600, color: "var(--navy-900)" }}>
                          {r.laenge}{r.mmp ? " · Miss Moneypenny" : ""}
                        </td>
                        <td style={{ padding: "0.6rem 0.8rem", color: "var(--text-soft)", whiteSpace: "nowrap" }}>{r.breite}</td>
                        <td style={{ padding: "0.6rem 0.8rem", color: "var(--navy-900)", fontWeight: 600, whiteSpace: "nowrap" }}>{r.preis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h4 style={{ color: "var(--navy-900)", fontSize: "0.95rem", fontWeight: 700, margin: "1.6rem 0 0.8rem" }}>Zuschläge & Rabatte</h4>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--text-soft)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                {baoticRegeln.map((reg) => (
                  <li key={reg}>{reg}</li>
                ))}
              </ul>
              <p style={{ marginTop: "1.4rem", marginBottom: 0, fontSize: "0.82rem", color: "var(--text-soft)", fontStyle: "italic" }}>
                Quelle: offizielle Preisliste 2026 der Marina Baotić (Nautički centar Trogir d.o.o.). Andere
                Marinas im Revier rechnen anders – etwa mit prozentualem Mehrrumpf-Aufschlag statt
                Wochentags-Zuschlag. Die verbindliche Gesamtsumme für euren Törn rechnen wir auf Anfrage.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Spartipp / Einordnung */}
      <section className="section surface-sand">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Einordnung</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Marina-Nächte clever mischen.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Die Spanne ist groß: Zwischen der Kornaten-Marina <strong>ACI Žut</strong> als
                  einer der günstigsten und der zentralen Stadtmarina <strong>ACI Split</strong>
                  am oberen Ende liegt für einen Katamaran fast das Doppelte pro Nacht. Wer sein
                  Budget steuern will, plant die teuren Stadtmarinas gezielt für einen besonderen
                  Abend ein – und genießt den Rest der Woche in den ruhigen Buchten und
                  preiswerteren Häfen.
                </p>
                <p>
                  Genau dafür ist die Miss Moneypenny gebaut: Dank{" "}
                  <Link href="/die-yacht" className="link-arrow">Wassermacher und Solaranlage</Link>{" "}
                  seid ihr nicht auf den täglichen Hafenstopp angewiesen. Eine realistische
                  Mischung aus zwei bis drei Marina-Nächten und ansonsten Ankern hält die
                  Liegegebühren niedrig – und lässt euch trotzdem überall an Land, wo ihr wollt.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-aerial-village.jpg" alt="Katamaran vor einem dalmatinischen Hafenort – Marina-Nächte und Ankern clever mischen" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Wir rechnen euch die Liegegebühren ehrlich mit ein.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Marina-Preise ändern sich jede Saison und hängen stark von Route und Fahrstil ab.
              Nennt uns euren Wunschtermin und eure Wunschziele – wir kalkulieren euch eine
              realistische Gesamtsumme inklusive Liegeplätzen, Vignetten und Co.
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
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Marina-Preise im Revier – kurz erklärt.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/marina-liegeplatz-preise-kroatien#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/region-sibenik.png" />
    </>
  );
}
