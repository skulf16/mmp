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
  title: "Beste Reisezeit zum Segeln in Kroatien – Monat für Monat",
  description:
    "Segeln Kroatien beste Zeit: Monat für Monat von Mai bis Oktober – Wetter, Wassertemperatur, Wind und Betrieb, plus warum Juni und September ideal sind.",
  openGraph: {
    title: "Beste Reisezeit zum Segeln in Kroatien – Monat für Monat",
    description:
      "Von Mai bis Oktober Monat für Monat: Wetter, Wind, Wassertemperatur und Betrieb – mit klarer Empfehlung für die beste Segelzeit in Kroatien.",
    images: [
      {
        url: "/images/yacht-sailing-genoa.jpg",
        width: 1200,
        height: 630,
        alt: "Katamaran unter vollen Segeln bei Sonnenschein auf der Adria",
      },
    ],
  },
};

const monate = [
  {
    m: "Mai",
    luft: "mild, ~18–24 °C",
    wasser: "kühl, ~18 °C",
    wind: "Maestral, 3–4 Bft",
    betrieb: "ruhig, Saisonstart",
    empfehlung: "★★★",
  },
  {
    m: "Juni",
    luft: "warm, ~23–28 °C",
    wasser: "angenehm, ~22 °C",
    wind: "Maestral, 3–5 Bft",
    betrieb: "noch entspannt",
    empfehlung: "★★★★★",
  },
  {
    m: "Juli",
    luft: "heiß, ~28–32 °C",
    wasser: "warm, ~24 °C",
    wind: "Maestral, 4–5 Bft",
    betrieb: "Hochsaison, voll",
    empfehlung: "★★★",
  },
  {
    m: "August",
    luft: "heiß, ~28–33 °C",
    wasser: "warm, ~25 °C",
    wind: "Maestral, 4–5 Bft",
    betrieb: "Hochsaison, sehr voll",
    empfehlung: "★★★",
  },
  {
    m: "September",
    luft: "warm, ~22–28 °C",
    wasser: "warm, ~23–24 °C",
    wind: "Maestral/variabel, 3–4 Bft",
    betrieb: "ruhiger, ideal",
    empfehlung: "★★★★★",
  },
  {
    m: "Oktober",
    luft: "mild, ~17–23 °C",
    wasser: "abkühlend, ~21 °C",
    wind: "variabel, gelegentlich Bora",
    betrieb: "sehr ruhig, Saisonende",
    empfehlung: "★★★",
  },
];

const zielgruppen = [
  {
    icon: "calendar" as const,
    title: "Familien & Einsteiger",
    text: "Juni und September sind die entspanntesten Wochen: warmes, aber nicht drückendes Wetter, verlässlicher Maestral mit moderaten 3–5 Beaufort und freie Ankerplätze. Ideal für ruhige Tage mit Kindern und alle, die zum ersten Mal an Bord sind.",
  },
  {
    icon: "anchor" as const,
    title: "Ruhige Buchten",
    text: "Wer einsame Buchten sucht, segelt im Mai, im Juni oder ab Mitte September. Dann sind die Ankerplätze in den Kornaten und vor Telašćica frei, die Konobas weniger überlaufen und die Liegeplätze leichter zu bekommen.",
  },
  {
    icon: "sun" as const,
    title: "Badewetter",
    text: "Für warmes Wasser sind Juli, August und der frühe September die beste Wahl. Das Meer erreicht dann grob 24–25 °C – angenehm zum Schwimmen, Schnorcheln und für lange Tage auf dem Bugtrampolin (Richtwerte).",
  },
];

const facts = [
  "Die Segelsaison in Kroatien reicht von Mai bis Oktober – die beste Zeit zum Segeln liegt klar in den goldenen Monaten Juni und September.",
  "Im Juni und September verbinden sich warmes Wetter, verlässlicher Maestral und deutlich weniger Betrieb als in der Hochsaison.",
  "Juli und August sind heiß und stark frequentiert: Liegeplätze und Ankerbuchten sind voll, dafür ist das Wasser mit grob 24–25 °C am wärmsten (Richtwerte).",
  "Der Maestral, der thermische Nordwestwind, weht von Mai bis September verlässlich und erreicht nachmittags 3–5 Beaufort.",
  "Die Bora, ein böiger Fallwind aus Nordost, tritt im Sommer selten auf und wird gegen Saisonende im Oktober wieder etwas wahrscheinlicher.",
  "Die Miss Moneypenny liegt in der Marina Mandalina in Šibenik – einem Revier, in dem der Maestral jeden Sommer zuverlässig aufbaut.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Segeln Kroatien – welche Zeit ist die beste?",
    a: "Die beste Zeit zum Segeln in Kroatien sind die goldenen Monate Juni und September. Beide verbinden warmes Wetter, eine angenehme Wassertemperatur und den verlässlichen Maestral mit 3–5 Beaufort am Nachmittag – bei deutlich weniger Betrieb als im Juli und August. Die Saison insgesamt reicht von Mai bis Oktober.",
  },
  {
    q: "Wie warm ist das Wasser zum Baden in den einzelnen Monaten?",
    a: "Als grobe Richtwerte: Im Mai ist das Meer mit rund 18 °C noch frisch, im Juni klettert es auf etwa 22 °C. Am wärmsten ist es im Juli und August mit grob 24–25 °C. Der September hält die Wärme noch gut bei rund 23–24 °C, bevor das Wasser im Oktober wieder abkühlt. Die Werte schwanken je nach Wetterlage und Region.",
  },
  {
    q: "Ist Juli oder August zu heiß zum Segeln?",
    a: "Zu heiß nicht, aber spürbar wärmer: In der Hochsaison liegen die Lufttemperaturen oft bei 28–33 °C, und Liegeplätze wie Ankerbuchten sind stark gefüllt. Wer mit Kindern oder zum ersten Mal segelt, ist im Juni oder September meist entspannter unterwegs – warmes Wasser und freie Buchten inklusive.",
  },
  {
    q: "Wann ist die beste Reisezeit zum Segeln in Kroatien für Familien?",
    a: "Für Familien und Einsteiger ist die beste Reisezeit zum Segeln in Kroatien der Juni und der September. Das Wetter ist warm, aber nicht drückend, der Maestral bleibt moderat, und die ruhigeren Buchten machen das Ankern entspannter. Tipps zum Törn mit Kindern findet ihr in unserem Familien-Ratgeber.",
  },
  {
    q: "Welcher Wind weht in der Segelsaison in Kroatien?",
    a: "Der prägende Sommerwind ist der Maestral, ein thermischer Nordwestwind, der sich zwischen 10 und 12 Uhr aufbaut und nachmittags 3–5 Beaufort erreicht – von Mai bis September verlässlich. Seltener treten die böige Bora aus Nordost und der warme, feuchte Jugo aus Süd-Südost auf. Details zu allen drei Winden erklären wir auf der Winde-Seite.",
  },
];

export default function BesteReisezeitSegelnKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Reiseplanung"
        title="Beste Reisezeit zum Segeln in Kroatien – Monat für Monat"
        lede="Von Mai bis Oktober im Überblick: Wetter, Wassertemperatur, Wind und Betrieb für jeden Monat – mit klarer Empfehlung, warum Juni und September die goldenen Segelmonate sind."
        image="/images/yacht-sailing-genoa.jpg"
        imageAlt="Katamaran unter vollen Segeln bei Sonnenschein auf der Adria"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Ratgeber", href: "/ratgeber" },
          { label: "Beste Reisezeit" },
        ]}
      />

      <ArticleByline slug="beste-reisezeit-segeln-kroatien" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Einleitung */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Der Überblick</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Segeln Kroatien – beste Zeit auf den Punkt gebracht.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Wer nach &bdquo;segeln Kroatien beste Zeit&ldquo; sucht, bekommt
              meist dieselbe kurze Antwort: Juni und September. Das stimmt – aber
              die Saison reicht von Mai bis Oktober, und jeder Monat hat seinen
              eigenen Charakter. Ob ihr warmes Badewasser, einsame Buchten oder
              entspannte Tage mit Kindern sucht, macht beim idealen Zeitpunkt
              einen spürbaren Unterschied.
            </p>
            <p>
              Auf dieser Seite gehen wir die sechs Segelmonate einzeln durch:
              Lufttemperatur, Wassertemperatur, der vorherrschende Wind und wie
              voll es im Revier ist. Die Temperaturangaben sind grobe Richtwerte
              und schwanken je nach Wetterlage und Region – die Windangaben
              folgen den typischen Mustern der mitteldalmatinischen Adria rund um
              Šibenik, wo die <Link href="/winde-kroatien">Winde Kroatiens</Link>{" "}
              den Segelrhythmus vorgeben.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Monatsübersicht Tabelle */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Monat für Monat</span>
            <h2 className="section-title">Mai bis Oktober im direkten Vergleich.</h2>
            <p className="lede">
              Lufttemperatur, Wassertemperatur und Wind als grobe Richtwerte –
              der Betrieb verschiebt sich klar zur Hochsaison hin.
            </p>
          </Reveal>
          <div style={{ marginTop: "3rem", overflowX: "auto" }}>
            <Reveal as="table" style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.92rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--sand-line)", textAlign: "left" }}>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Monat</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Luft</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Wasser</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Hauptwind</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Betrieb</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Empfehlung</th>
                </tr>
              </thead>
              <tbody>
                {monate.map((row, i) => (
                  <tr key={row.m} style={{ borderBottom: "1px solid var(--sand-line)", background: i % 2 === 0 ? "transparent" : "rgba(197,163,106,0.04)" }}>
                    <td style={{ padding: "0.8rem 1rem", fontWeight: 600 }}>{row.m}</td>
                    <td style={{ padding: "0.8rem 1rem", color: "var(--text-soft)" }}>{row.luft}</td>
                    <td style={{ padding: "0.8rem 1rem", color: "var(--text-soft)" }}>{row.wasser}</td>
                    <td style={{ padding: "0.8rem 1rem", color: "var(--text-soft)" }}>{row.wind}</td>
                    <td style={{ padding: "0.8rem 1rem", color: "var(--text-soft)" }}>{row.betrieb}</td>
                    <td style={{ padding: "0.8rem 1rem", color: "var(--brass-600)" }}>{row.empfehlung}</td>
                  </tr>
                ))}
              </tbody>
            </Reveal>
          </div>
          <Reveal as="p" delay={2} style={{ marginTop: "1.5rem", fontSize: "0.82rem", color: "var(--text-soft)" }}>
            Temperatur- und Windangaben sind Richtwerte, Stand 2026 – sie variieren
            je nach Saison, Wetterlage und Region; verbindliche Wettervorhersagen
            liefern die einschlägigen Dienste kurz vor dem Törn.
          </Reveal>
        </div>
      </section>

      {/* Frühsaison Mai / Juni */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Frühsaison</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Mai &amp; Juni – frischer Start und der erste goldene Monat.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Der <strong>Mai</strong> öffnet die Saison: Die Tage sind mild
                  (grob 18–24 °C), das Wasser mit rund 18 °C noch frisch zum Baden.
                  Dafür sind Häfen und Buchten herrlich leer, die Natur steht in
                  voller Blüte und der Maestral baut sich mit 3–4 Beaufort schon
                  zuverlässig auf. Eine schöne Zeit für Segler, die Ruhe dem
                  warmen Wasser vorziehen.
                </p>
                <p>
                  Der <strong>Juni</strong> ist dann der erste der beiden goldenen
                  Monate. Das Wetter ist warm, aber selten drückend, das Wasser
                  klettert auf angenehme rund 22 °C, und der Maestral liefert
                  verlässliche 3–5 Beaufort am Nachmittag. Weil die große
                  Urlaubswelle erst im Juli rollt, sind Ankerplätze und Liegeplätze
                  noch entspannt zu haben – ideal, um in Ruhe einen{" "}
                  <Link href="/segeltorn-planen">Segeltörn zu planen</Link> und
                  flexibel zu bleiben.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">leere Buchten</span>
                <span className="tag-pill">Maestral 3–5 Bft</span>
                <span className="tag-pill">Juni = golden</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-sailing-side.jpg" alt="Katamaran segelt bei moderatem Maestral in der kroatischen Frühsaison" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Hochsaison Juli / August */}
      <section className="section surface-dark">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div" delay={1}>
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bay-catamaran.png" alt="Katamaran in einer gut besuchten Bucht der kroatischen Hochsaison" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Hochsaison</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Juli &amp; August – warmes Wasser, volles Revier.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  In <strong>Juli</strong> und <strong>August</strong> zeigt sich
                  Kroatien von seiner heißesten Seite: Lufttemperaturen von grob
                  28–33 °C, ein Meer von rund 24–25 °C und lange, stabile Tage.
                  Der Maestral weht jetzt am kräftigsten, oft 4–5 Beaufort am
                  Nachmittag – sportlich und verlässlich (Richtwerte).
                </p>
                <p>
                  Der Preis dafür ist der Betrieb: Liegeplätze in beliebten Häfen
                  sind früh ausgebucht, populäre Ankerbuchten füllen sich am
                  Nachmittag schnell. Wer in dieser Zeit segelt, sollte früh
                  ankern, Hafentage vorausplanen und die Hochsaison-Wochen
                  rechtzeitig reservieren. Für reines Badewetter ist diese Phase
                  aber unschlagbar.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Wasser ~24–25 °C</span>
                <span className="tag-pill">Maestral 4–5 Bft</span>
                <span className="tag-pill">früh reservieren</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Spätsaison September / Oktober */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Spätsaison</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">September &amp; Oktober – der zweite goldene Monat und der ruhige Ausklang.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Der <strong>September</strong> ist für viele Segler der schönste
                  Monat überhaupt – und der zweite goldene Monat der Saison. Das
                  Wasser hält die Sommerwärme mit rund 23–24 °C, die Luft wird mit
                  grob 22–28 °C angenehmer, und der große Andrang löst sich nach den
                  Schulferien spürbar auf. Verlässlicher Maestral, freie Buchten,
                  warmes Meer: die ideale Kombination für einen entspannten Törn.
                </p>
                <p>
                  Der <strong>Oktober</strong> läutet das Saisonende ein. Die Tage
                  sind milder (grob 17–23 °C), das Wasser kühlt langsam ab, und der
                  Wind wird wechselhafter – die böige Bora aus Nordost wird wieder
                  etwas wahrscheinlicher. Dafür habt ihr Revier und Buchten fast für
                  euch allein. Wer flexibel ist und das Wetter im Blick behält,
                  erlebt im Oktober ein ruhiges, ursprüngliches Kroatien. Für die
                  passende Wegführung in jeder Saisonphase lohnt ein Blick auf unsere{" "}
                  <Link href="/segeltorn-routen-kroatien">Routenvorschläge für Kroatien</Link>.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">September = golden</span>
                <span className="tag-pill">warmes Nachsommerwasser</span>
                <span className="tag-pill">einsame Buchten</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-sailing-coast.jpg" alt="Katamaran in der ruhigen kroatischen Spätsaison vor der Küste" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Welche Zeit passt zu wem */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Die richtige Wahl</span>
            <h2 className="section-title">Welche Reisezeit passt zu euch?</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {zielgruppen.map((z, i) => (
              <Reveal key={z.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={z.icon} /></span>
                  <h3>{z.title}</h3>
                  <p>{z.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal as="div" delay={3} className="prose" style={{ marginTop: "2.5rem" }}>
            <p>
              Unser klarer Tipp: Wer die freie Wahl hat, segelt im Juni oder
              September. Beide Monate verbinden warmes Wetter, verlässlichen
              Maestral und ruhige Buchten – die beste Reisezeit zum Segeln in
              Kroatien für fast jede Crew. Reist ihr mit Kindern, findet ihr im{" "}
              <Link href="/familien-segeltorn-kroatien">Ratgeber zum Familien-Segeltörn in Kroatien</Link>{" "}
              passende Tipps für entspannte Tage an Bord.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Den passenden Monat sichern.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die Miss Moneypenny liegt in der Marina Mandalina, Šibenik – bereit
              für euren Törn in den goldenen Monaten oder mitten in der warmen
              Hochsaison. Nennt uns euren Wunschtermin, wir prüfen die
              Verfügbarkeit.
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
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Beste Reisezeit – häufige Fragen.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/beste-reisezeit-segeln-kroatien#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-sailing-genoa.jpg" />
    </>
  );
}
