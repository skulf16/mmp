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
  title: "Jugo Wind Kroatien: Entstehung, Warnsignale & Tipps",
  description:
    "Jugo Wind in Kroatien: Wie entsteht er, wann kommt er, wie lange dauert er? Warnsignale, sichere Häfen und Seglertipps für den warmen Südwind auf der Adria.",
  openGraph: {
    title: "Jugo Wind Kroatien – Warnsignale, Dauer & Seglertipps",
    description: "Jugo in Kroatien erklärt: Entstehung, typische Dauer, Warnsignale und was Segler beim Südwind der Adria beachten müssen.",
    images: [{ url: "/images/yacht-sailing-coast.jpg", width: 1200, height: 630, alt: "Segelboot an der kroatischen Küste bei aufkommenden Jugo" }],
  },
};

const merkmale = [
  { label: "Richtung", wert: "Süd-Südost (SSO)" },
  { label: "Temperatur", wert: "Warm, feucht" },
  { label: "Aufbau", wert: "Langsam (12–24 h)" },
  { label: "Dauer", wert: "1–5 Tage" },
  { label: "Stärke", wert: "3–7 Beaufort" },
  { label: "Seegang", wert: "Lang, hoch aufbauend" },
  { label: "Häufigkeit", wert: "Seltener im Sommer" },
  { label: "Andere Namen", wert: "Scirocco, Šilok" },
];

const warnsignale = [
  {
    icon: "waves" as const,
    title: "Dünung aus Süden",
    text: "Der erste sichere Hinweis auf einen aufkommenden Jugo ist eine lange, ruhige Dünung aus Süden – noch bevor der Wind spürbar wird. Kein Gewitter, keine Böen, nur gleichmäßiges Rollen.",
  },
  {
    icon: "droplet" as const,
    title: "Fallendes Barometer",
    text: "Der Luftdruck fällt langsam aber kontinuierlich. Ein Abfall von mehr als 3 hPa in 3 Stunden ist ein klares Warnsignal. Barometrischen Trend immer im Auge behalten.",
  },
  {
    icon: "sun" as const,
    title: "Trübe Luft & Schleier",
    text: "Die Luft wird diesig, der Horizont milchig. Der Jugo trägt Staub und Feuchtigkeit aus Nordafrika mit sich. Sicht nimmt ab, Sonne erscheint hinter einem gleichmäßigen Schleier.",
  },
  {
    icon: "wind" as const,
    title: "Zunehmende Bewölkung",
    text: "Zuerst hohe Schleierwolken, dann mittlere und tiefe Bewölkung. Der Himmel zieht von Süd nach Nord zu – anders als bei Bora, die klar und sichtig beginnt.",
  },
];

const tipps = [
  {
    icon: "anchor" as const,
    title: "Hafen mit Nordschutz suchen",
    text: "Beim Jugo sind alle Buchten, die nach Süden offen liegen, gefährdet. Häfen und Ankerbuchten mit Schutz aus Norden oder Westen wählen – Šibenik-Stadt, Tribunj oder die Nordseite größerer Inseln.",
  },
  {
    icon: "shield" as const,
    title: "Früh reagieren",
    text: "Weil der Jugo sich langsam aufbaut, bleibt Zeit zum Reagieren – wenn man die Warnsignale kennt. Spätestens wenn Dünung und Barometer gleichzeitig aufmerksam machen, Ziel auf geschützten Hafen ändern.",
  },
  {
    icon: "waves" as const,
    title: "Auf den Seegang vorbereiten",
    text: "Der Jugo baut über Stunden und Tage langen Seegang auf, der noch bleibt, wenn der Wind schon nachlässt. Seekrankeitsmedikamente und feste Stauung an Bord reduzieren die Belastung deutlich.",
  },
  {
    icon: "sun" as const,
    title: "Wartezeit nutzen",
    text: "Ein ausgewachsener Jugo dauert 1 bis 5 Tage. Wer in einem guten Hafen liegt, kann diese Zeit zum Erkunden nutzen – kroatische Altstädte und Märkte sind bei bedecktem Himmel oft angenehmer als in der prallen Sonne.",
  },
];

const facts = [
  "Der Jugo ist ein warmer, feuchter Südwind aus Süd-Südost, der die warme, staubbeladene Luft über einen langen Weg aus Nordafrika auf die Adria trägt.",
  "Anders als die Bora baut sich der Jugo langsam auf und kündigt sich an: In der Regel bleiben 12 bis 24 Stunden Zeit, um eine sichere Position zu finden.",
  "Ein ausgewachsener Jugo dauert typischerweise 1 bis 5 Tage und weht meist mit 3 bis 7 Beaufort.",
  "Das erste sichere Warnzeichen ist eine lange Dünung aus Süden, gefolgt von langsam fallendem Barometer und diesiger, milchiger Luft.",
  "Der Jugo trifft die gesamte Adria gleichzeitig und baut langen Seegang auf, der noch rollt, wenn der Wind längst nachgelassen hat.",
  "Beim Jugo bieten Häfen und Ankerbuchten mit Schutz aus Norden oder Westen Sicherheit – etwa Šibenik-Stadt, Tribunj oder die Nordseiten größerer Inseln.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Wie erkenne ich, dass ein Jugo aufzieht?",
    a: "Das erste sichere Zeichen ist eine lange, ruhige Dünung aus Süden, noch bevor der Wind spürbar wird. Dazu fällt das Barometer langsam, aber kontinuierlich, und die Luft wird diesig und milchig, weil der Jugo Staub und Feuchtigkeit aus Nordafrika mitträgt.",
  },
  {
    q: "Wie lange dauert ein Jugo?",
    a: "Ein ausgewachsener Jugo hält meist 1 bis 5 Tage an. Weil er sich über 12 bis 24 Stunden langsam aufbaut, bleibt euch genug Zeit zum Reagieren, wenn ihr die Warnsignale kennt.",
  },
  {
    q: "Wo finde ich beim Jugo einen sicheren Hafen?",
    a: "Alle Buchten, die nach Süden offen liegen, sind beim Jugo gefährdet. Sucht euch stattdessen Häfen oder Ankerbuchten mit Schutz aus Norden oder Westen – zum Beispiel Šibenik-Stadt, Tribunj oder die Nordseite größerer Inseln.",
  },
  {
    q: "Warum bleibt der Seegang nach dem Jugo so lange?",
    a: "Der Jugo baut über Stunden und Tage hinweg langen Seegang auf, weil die Luft einen weiten Weg über offenes Wasser zurücklegt. Dieser Seegang kann noch rund 24 Stunden weiterrollen, nachdem der Wind schon deutlich nachgelassen hat – das macht Hafenabfahrten nach einem Jugo manchmal unangenehmer als erwartet.",
  },
  {
    q: "Wie unterscheidet sich der Jugo von der Bora?",
    a: "Die Bora ist ein kalter, böiger Fallwind, der plötzlich aus dem Gebirge stürzt, während der Jugo warm, feucht und gleichmäßig aus dem Meer kommt. Die Bora trifft vor allem die Nordseiten der Inseln, der Jugo dagegen die ganze Adria gleichzeitig – einer Insel im Rücken entkommt man ihm nicht.",
  },
];

export default function JugoWindKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Winde Kroatiens"
        title="Jugo – der warme Südwind der Adria"
        lede="Warm, feucht und hartnäckig: Der Jugo kommt langsam, bleibt tagelang und baut Seegang auf, der noch rollt, wenn der Wind längst nachgelassen hat."
        image="/images/yacht-sailing-coast.jpg"
        imageAlt="Segelboot an der kroatischen Küste bei aufkommendem Jugo"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/ratgeber" }, { label: "Jugo Wind Kroatien" }]}
      />

      <ArticleByline slug="jugo-wind-kroatien" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Entstehung & Charakter */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Entstehung</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Wie der Jugo entsteht – und warum er so hartnäckig ist.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Der Jugo (kroatisch: <em>Jugo</em> oder <em>Šilok</em>, auf Italienisch
                  Scirocco) ist ein Tiefdruckwind: Er entsteht, wenn ein Tief über dem
                  westlichen Mittelmeer oder der Adria liegt und Luft aus Nordafrika
                  nordwärts zieht. Diese Luft ist warm, feucht und staubbeladen – und
                  legt einen langen Weg über offenes Wasser zurück, bevor sie Kroatien
                  erreicht.
                </p>
                <p>
                  Genau dieser lange Fetch ist das Problem für Segler: Mit jedem
                  Kilometer über Wasser baut die Luft mehr Seegang auf. Wenn der Jugo
                  die dalmatinische Küste erreicht, rollt oft schon ein Meter hohe,
                  lange Dünung vor ihm her – und die wird noch größer, je länger er
                  anhält.
                </p>
                <p>
                  Im Gegensatz zur Bora, die plötzlich aus dem Gebirge stürzt, kündigt
                  sich der Jugo an. Wer die Warnzeichen kennt, hat in der Regel 12 bis
                  24 Stunden, um eine sichere Position zu finden.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bay-catamaran.png" alt="Katamaran liegt sicher vor Anker während Jugo" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Steckbrief */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Steckbrief</span>
            <h2 className="section-title">Jugo auf einen Blick.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem", overflowX: "auto" }}>
            <Reveal as="table" style={{ width: "100%", maxWidth: 640, borderCollapse: "collapse", fontSize: "0.94rem" }}>
              <tbody>
                {merkmale.map((row, i) => (
                  <tr key={row.label} style={{ borderBottom: "1px solid var(--sand-line)", background: i % 2 === 0 ? "transparent" : "rgba(197,163,106,0.04)" }}>
                    <td style={{ padding: "0.75rem 1rem", fontWeight: 700, color: "var(--navy-900)", width: "40%" }}>{row.label}</td>
                    <td style={{ padding: "0.75rem 1rem", color: "var(--text-soft)" }}>{row.wert}</td>
                  </tr>
                ))}
              </tbody>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Warnsignale */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Frühwarnung</span>
            <h2 className="section-title">Warnsignale, die der Jugo immer schickt.</h2>
            <p className="lede">Er kommt nicht aus dem Nichts – wer diese vier Zeichen kennt, ist immer rechtzeitig im Bild.</p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {warnsignale.map((w, i) => (
              <Reveal key={w.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={w.icon} /></span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Jugo vs. Bora */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div" delay={1}>
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-sailing-genoa.jpg" alt="Segelboot auf der Adria" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow">Vergleich</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Jugo und Bora – zwei sehr verschiedene Winde.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Während die <Link href="/bora-kroatien">Bora</Link> katabatisch, kalt
                  und böig ist – ein Sturm, der sich anspringt – ist der Jugo
                  thermodynamisch, warm und gleichmäßig. Die Bora kommt aus dem Gebirge,
                  der Jugo aus dem Meer.
                </p>
                <p>
                  Die Bora trifft besonders die Nordseiten von Inseln und
                  Küstenabschnitte direkt unter den Bergen. Der Jugo hingegen trifft die
                  gesamte Adria gleichzeitig und baut überall Seegang auf – es gibt kein
                  Entkommen durch eine Insel im Rücken.
                </p>
                <p>
                  Nach einer Bora ist der Seegang innerhalb weniger Stunden weg. Nach
                  einem mehrtägigen Jugo kann der Seegang noch 24 Stunden rollen, nachdem
                  der Wind schon deutlich nachgelassen hat. Das macht Hafenabfahrten nach
                  Jugo manchmal unangenehmer als erwartet.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Seegang bleibt nach Wind</span>
                <span className="tag-pill">ganze Adria betroffen</span>
                <span className="tag-pill">1–5 Tage Dauer</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Seglertipps */}
      <section className="section surface-dark">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">An Bord</span>
            <h2 className="section-title">Jugo-Strategie für den Törn.</h2>
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

      {/* Weiterlesen */}
      <section className="section surface-sand">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow centered">Alle Winde der Adria</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Maestral, Bora & Jugo im Überblick.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Der Jugo ist einer von drei prägenden Winden an der dalmatinischen Küste.
              Die anderen beiden – Maestral und Bora – haben ihren eigenen Charakter.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/maestral-wind" className="btn btn-primary">Maestral verstehen</Link>
              <Link href="/bora-kroatien" className="btn btn-outline">Bora in Kroatien</Link>
              <Link href="/winde-kroatien" className="btn btn-outline">Alle Winde im Überblick</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Charter CTA */}
      <section className="section">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Mit dem richtigen Boot den Jugo aussitzen.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die Miss Moneypenny liegt zentral in der Marina Mandalina – bei Jugo
              im geschützten Šibeniker Kanal, fernab offenem Seegang.
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
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Jugo – kurz beantwortet.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/jugo-wind-kroatien#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-sailing-coast.jpg" />
    </>
  );
}
