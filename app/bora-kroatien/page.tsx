import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ArticleByline from "@/components/ArticleByline";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Bora in Kroatien: Entstehung, Stärke & sichere Häfen | Miss Moneypenny",
  description:
    "Bora in Kroatien erklärt: Wie entsteht der Fallwind, wann kommt er, welche Häfen sind sicher? Warnsignale, Stärken bis 10 Bft und was Segler bei Bora tun.",
  openGraph: {
    title: "Bora in Kroatien – Entstehung, Stärke & sichere Häfen für Segler",
    description: "Die Bora ist Kroatiens wildester Wind. Was hinter dem katabatischen Fallwind steckt, wann er kommt und wie Segler sicher durch ihn kommen.",
    images: [{ url: "/images/yacht-sailing-coast.jpg", width: 1200, height: 630, alt: "Dramatische Küstenlandschaft bei aufkommender Bora in Kroatien" }],
  },
};

const merkmale = [
  { label: "Richtung", wert: "Nordost (NO)" },
  { label: "Typ", wert: "Katabatisch (Fallwind)" },
  { label: "Temperatur", wert: "Kalt, trocken, klar" },
  { label: "Aufbau", wert: "Schnell bis plötzlich" },
  { label: "Stärke", wert: "4–10+ Beaufort in Böen" },
  { label: "Dauer", wert: "1–5 Tage" },
  { label: "Seegang", wert: "Kurz, steil, schnell abklingend" },
  { label: "Häufigkeit", wert: "Häufiger im Winter, seltener im Sommer" },
];

const warnsignale = [
  {
    icon: "wind" as const,
    title: "Wolkenmützen auf den Bergen",
    text: "Das klassische Vorzeichen: Auf den Kämmen des Dinarischen Gebirges bilden sich linsenförmige Wolken, während der Himmel sonst klar bleibt. Diese Rotor-Wolken entstehen, wenn Kaltluft über die Bergkanten gespült wird.",
  },
  {
    icon: "sun" as const,
    title: "Plötzliche Sichtverbesserung",
    text: "Unmittelbar vor der Bora kann die Sicht paradoxerweise ausgezeichnet sein – die Luft wird kristallklar. Dieses typische 'Bora-Licht' mit scharfen Konturen ist ein bekanntes Vorzeichen.",
  },
  {
    icon: "shield" as const,
    title: "Steigendes Barometer",
    text: "Anders als beim Jugo steigt der Luftdruck vor einer Bora schnell an. Schnell steigende Tendenz in Kombination mit Abkühlung und nördlicher Windkomponente bedeutet: Bora nähert sich.",
  },
  {
    icon: "waves" as const,
    title: "Kälteschub aus Nordost",
    text: "Eine plötzliche Abkühlung der Luft aus Nordost ist der unmittelbare Vorbote. Binnen Minuten kann der Wind von 2 auf 8 Beaufort springen. Wer diesen Kälteschub spürt, hat oft keine Zeit mehr für einen Hafenwechsel.",
  },
];

const schutzorte = [
  {
    icon: "anchor" as const,
    title: "Telašćica (Dugi Otok)",
    text: "Die weitläufige Bucht auf Dugi Otok gilt als der beste natürliche Schutzhafen der Region. Die umliegenden Hügel brechen die Bora, der Ankergrund ist gut, und es gibt genug Platz für viele Boote.",
  },
  {
    icon: "sparkle" as const,
    title: "Šibeniker Kanal",
    text: "Der schmale Kanal zwischen Šibenik und der Küste schützt durch seine Geometrie gut vor Nordostwinden. Marina Mandalina und die Stadtmarina Šibenik sind auch bei starker Bora zuverlässige Liegeplätze.",
  },
  {
    icon: "leaf" as const,
    title: "Primošten & Rogoznica",
    text: "Die Häfen südlich von Šibenik, besonders Primošten und Rogoznica, liegen so, dass die Bora von Landmassen gebrochen wird. Gute Abdeckung aus Nordosten ist das wichtigste Kriterium.",
  },
  {
    icon: "shield" as const,
    title: "Süd- und Westseiten der Inseln",
    text: "Buchten auf der Süd- oder Westseite von Inseln sind generell bora-geschützt. Die Nordostseiten meiden – dort trifft die Bora ungefiltert auf, und der Seegang kann in Buchten einlaufen.",
  },
];

const bord = [
  {
    icon: "anchor" as const,
    title: "Frühzeitig Liegeplatz sichern",
    text: "Wenn Bora angesagt ist: sofort Liegeplatz reservieren. Bei starker Bora verlassen keine Boote mehr den Hafen, und alle suchen gleichzeitig Schutz. Wer früh ist, hat die Wahl.",
  },
  {
    icon: "shield" as const,
    title: "Festmacher prüfen und verdoppeln",
    text: "Im Hafen alle Leinen auf Zustand und Führung prüfen. Springleinen verdoppeln, Stopper einsetzen. Die Bora trifft Hafenanlagen oft von einer ungewohnten Richtung – keine Selbstverständlichkeit der Belastung.",
  },
  {
    icon: "wind" as const,
    title: "Keine Ausfahrten bei Sturmwarnung",
    text: "Bei Böen über 7–8 Beaufort auf offener See nicht auslaufen. Die Bora ist in Böen gefährlich – zwischen den Böen kann das Meer ruhig wirken, dann kommt der nächste Schlag. Nicht täuschen lassen.",
  },
  {
    icon: "sun" as const,
    title: "Schnelles Abklingen nutzen",
    text: "Die Bora klingt oft schnell ab. Wenn die Wettervorhersage das Ende ankündigt und Böen nachlassen, ist der Seegang binnen 3–6 Stunden oft deutlich beruhigt. Flexibel auf das Ende warten.",
  },
];

export default function BoraKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Winde Kroatiens"
        title="Bora – Kroatiens wilder Fallwind aus dem Norden"
        lede="Kalt, böig und unberechenbar: Die Bora stürzt über das Dinarische Gebirge und trifft die Adria mit Böen bis 10 Beaufort. Was Segler wissen müssen."
        image="/images/yacht-sailing-coast.jpg"
        imageAlt="Dramatische Küstenlandschaft bei aufkommender Bora in Kroatien"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/ratgeber" }, { label: "Bora Kroatien" }]}
      />

      <ArticleByline slug="bora-kroatien" />

      {/* Entstehung */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Katabatischer Fallwind</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Wie die Bora entsteht – Physik des Fallwinds.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Die Bora ist ein katabatischer Wind – das bedeutet, sie fließt
                  bergab. Kalte, schwere Kontinentalluft staut sich hinter dem
                  Dinarischen Gebirge auf und bricht über die Bergkämme auf die
                  Küste herab. Je höher der Druckunterschied zwischen Festland und
                  Adria, desto stärker die Bora.
                </p>
                <p>
                  Dieses Fallen der Luftmasse beschleunigt den Wind extrem:
                  Spitzenwerte von 10 Beaufort in Böen sind im Winter nicht selten,
                  in Extremfällen – bekannt vor allem bei Split und Senj – auch
                  deutlich mehr. Im Sommer ist die Bora seltener und schwächer,
                  aber auch dann kann sie ohne viel Vorwarnung einsetzen.
                </p>
                <p>
                  Was die Bora so anspruchsvoll macht, ist ihre Böigkeit: Der
                  mittlere Wind kann moderat sein, aber die Böen sind deutlich
                  stärker und kommen in kurzen Abständen. Zwischen zwei Böen kann
                  das Meer täuschend ruhig wirken.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Nordost</span>
                <span className="tag-pill">katabatisch</span>
                <span className="tag-pill">böig & kalt</span>
                <span className="tag-pill">häufiger im Winter</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-sailing-genoa.jpg" alt="Segelboot auf der Adria" />
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
            <h2 className="section-title">Bora auf einen Blick.</h2>
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
            <h2 className="section-title">Warnsignale der Bora erkennen.</h2>
            <p className="lede">Die Bora kündigt sich oft schneller an als der Jugo – aber es gibt immer Zeichen, wenn man weiß, wo man hinschauen muss.</p>
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

      {/* Bora-sichere Häfen */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Schutz suchen</span>
            <h2 className="section-title">Bora-sichere Häfen und Ankerbuchten.</h2>
            <p className="lede">Nicht jeder Hafen schützt gleichgut – diese Liegeplätze im Šibeniker Revier bieten auch bei starker Bora Schutz.</p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {schutzorte.map((s, i) => (
              <Reveal key={s.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={s.icon} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bora im Vergleich */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div" delay={1}>
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bay-catamaran.png" alt="Katamaran liegt sicher in geschützter Bucht" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow">Sommer vs. Winter</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Bora im Sommer: seltener, aber nicht ungefährlich.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Die stärksten Bora-Ereignisse treten im Winter auf, wenn kalte
                  Kontinentalluft mit hohem Druck über dem Balkan gegen warme
                  Adrialuft stößt. Im Sommer fehlt dieser extreme Druckgradient –
                  die Bora kommt, aber schwächer.
                </p>
                <p>
                  Trotzdem: Auch eine Sommer-Bora kann kurzfristig 6–7 Beaufort
                  erreichen. Was sie im Sommer besonders heimtückisch macht, ist
                  der Kontrast: Die meisten Tage sind Maestral und Ruhe, dann
                  kommt plötzlich ein Nordostschlag. Wer nur mit dem{" "}
                  <Link href="/maestral-wind">Maestral</Link> vertraut ist, wird
                  von der Bora überrascht.
                </p>
                <p>
                  Nach der Bora liegt der Seegang schnell. Innerhalb von 3–6
                  Stunden nach dem Ende beruhigt sich die See deutlich – ganz
                  anders als nach dem <Link href="/jugo-wind-kroatien">Jugo</Link>,
                  dessen Seegang noch stundenlang rollt.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Sommer: seltener & schwächer</span>
                <span className="tag-pill">Seegang klingt schnell</span>
                <span className="tag-pill">klar & kalt nach Bora</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* An Bord */}
      <section className="section surface-dark">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">An Bord</span>
            <h2 className="section-title">Was tun bei Bora?</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {bord.map((t, i) => (
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
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Maestral und Jugo kennenlernen.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die Bora ist der anspruchsvollste der drei Hauptwinde. Der Maestral ist
              ihr freundliches Gegenstück, der Jugo das ausdauernde Gegenteil.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/maestral-wind" className="btn btn-primary">Maestral Wind</Link>
              <Link href="/jugo-wind-kroatien" className="btn btn-outline">Jugo Wind Kroatien</Link>
              <Link href="/winde-kroatien" className="btn btn-outline">Alle Winde im Überblick</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Charter */}
      <section className="section">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Sicher durch jedes Wetter.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die Miss Moneypenny liegt in der Marina Mandalina – gut geschützt im
              Šibeniker Kanal, der auch bei Bora zuverlässig Schutz bietet.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/kontakt" className="btn btn-primary">Verfügbarkeit anfragen</Link>
              <Link href="/charter-infos" className="btn btn-outline">Charter-Infos</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand image="/images/yacht-sailing-coast.jpg" />
    </>
  );
}
