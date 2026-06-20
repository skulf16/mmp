import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Icon, Wind } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Winde Kroatien: Maestral & Bora erklärt | Miss Moneypenny",
  description:
    "Maestral, Bora und Jugo – die Winde Kroatiens für Segler erklärt: Stärke, Richtung, Jahreszeit und was ihr an Bord der Miss Moneypenny beachten solltet.",
  openGraph: {
    title: "Winde Kroatien: Maestral & Bora erklärt – beste Reisezeit segeln",
    description: "Maestral, Bora und Jugo erklärt: Stärke, Richtung, beste Reisezeit zum Segeln in Kroatien.",
    images: [{ url: "/images/yacht-sailing-genoa.jpg", width: 1200, height: 630, alt: "Katamaran unter vollen Segeln bei Maestral auf der Adria" }],
  },
};

const monate = [
  { m: "Mai", wind: "Maestral", staerke: "3–4 Bft", wetter: "Mild, wenig Touristik", empfehlung: "★★★" },
  { m: "Juni", wind: "Maestral", staerke: "3–5 Bft", wetter: "Warm, angenehm", empfehlung: "★★★" },
  { m: "Juli", wind: "Maestral", staerke: "4–5 Bft", wetter: "Heiß, Hochsaison", empfehlung: "★★" },
  { m: "August", wind: "Maestral", staerke: "4–5 Bft", wetter: "Heiß, sehr voll", empfehlung: "★★" },
  { m: "September", wind: "Maestral/variabel", staerke: "3–4 Bft", wetter: "Warm, ruhiger", empfehlung: "★★★" },
  { m: "Oktober", wind: "Variabel/Bora", staerke: "2–6 Bft", wetter: "Mild, einsame Buchten", empfehlung: "★★" },
];

const tipps = [
  {
    icon: "sun" as const,
    title: "Maestral frühzeitig nutzen",
    text: "Der Maestral baut sich typischerweise zwischen 10 und 12 Uhr auf. Frühstarter profitieren von ruhigem Wasser am Morgen und segeln den Wind dann nachmittags mit.",
  },
  {
    icon: "wind" as const,
    title: "Bora-Warnungen ernst nehmen",
    text: "Vor einer Bora warnt der Wetterdienst oft mit Fallböen-Warnungen für die Küstenregionen. Die Meteo Alarm App und Windy zeigen zuverlässige kurzfristige Vorhersagen.",
  },
  {
    icon: "anchor" as const,
    title: "Bora-sichere Ankerbuchten",
    text: "Telašćica und der Šibeniker Kanal bieten bei Bora guten Schutz. Offene Ankerplätze auf der Nordseite von Inseln meiden – dort trifft die Bora ungefiltert auf.",
  },
  {
    icon: "waves" as const,
    title: "Jugo & Seegang",
    text: "Der Jugo aus Süd-Südost baut mit der Zeit langen Seegang auf. Anders als die Bora kündigt er sich langsam an – bei fallendem Barometer früh reagieren.",
  },
];

export default function WindeKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Segelwetter"
        title="Winde in Kroatien"
        lede="Maestral, Bora und Jugo: Die drei wichtigsten Winde der Adria – was sie bedeuten, wann sie wehen und was ihr daraus macht."
        image="/images/yacht-sailing-genoa.jpg"
        imageAlt="Katamaran unter vollen Segeln auf der Adria"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber" }, { label: "Winde Kroatien" }]}
      />

      {/* Maestral */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Der Freund der Segler</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Maestral – der verlässlichste Wind der Adria.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Der Maestral (kroatisch: <em>Maestral</em>, auch Mistral) ist der
                  thermische Nordwestwind, der in der Hauptsaison von Mai bis September
                  das Segeln an der kroatischen Küste so angenehm macht. Er entsteht,
                  weil sich das Festland tagsüber stärker aufheizt als das Meer – die
                  Luft steigt auf und zieht kühlere Meeresluft vom Nordwesten nach.
                </p>
                <p>
                  Typischerweise baut er sich zwischen 10 und 12 Uhr auf, erreicht
                  nachmittags 3–5 Beaufort und legt sich nach Sonnenuntergang wieder.
                  Für Segler bedeutet das: ruhige Morgenstunden zum Navigieren,
                  schöner Segelwind am Nachmittag.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Nordwest</span>
                <span className="tag-pill">10–18 Uhr</span>
                <span className="tag-pill">3–5 Bft im Mittel</span>
                <span className="tag-pill">Mai – September</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-sailing-side.jpg" alt="Katamaran segelt bei gutem Maestral auf der Adria" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bora */}
      <section className="section surface-dark">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div" delay={1}>
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-sailing-coast.jpg" alt="Segelboot an der kroatischen Küste" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Respektabler Gegenspieler</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Bora – der böige Nordost vom Festland.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Die Bora ist ein katabatischer Wind: Kalte Kontinentalluft fließt
                  über das Dinarische Gebirge und stürzt mit hoher Geschwindigkeit
                  auf die Küste herab. Sie kommt aus Nordost und kann in Böen
                  Windstärken von 8–10 Beaufort erreichen – in Extremfällen noch mehr.
                </p>
                <p>
                  Im Sommer tritt die Bora seltener und schwächer auf als in den
                  Wintermonaten. Wenn sie im Sommer kommt, kündigt sie sich durch
                  Schleierwolken über den Bergkämmen an und setzt oft plötzlich ein.
                  In geschützten Buchten (Telašćica, Šibeniker Kanal) ist sie gut
                  auszusitzen.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Nordost</span>
                <span className="tag-pill">böig & unbeständig</span>
                <span className="tag-pill">häufiger im Winter</span>
                <span className="tag-pill">kalt & klar</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Jugo */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Der unterschätzte Dritte</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Jugo – warm, feucht und wellenreich.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Der Jugo (auch Scirocco) kommt aus Süd-Südost und trägt feuchte,
                  warme Luft von Afrika über das Mittelmeer. Er kündigt sich langsam
                  an – fallendes Barometer, zunehmende Bewölkung, Dünungen aus Süden.
                  Einmal etabliert, kann er tagelang anhalten und baut langen Seegang auf.
                </p>
                <p>
                  Im Sommer ist der Jugo seltener als Maestral und Bora, aber wenn er
                  kommt, ist er unangenehm: Die Kombination aus Wärme, Feuchtigkeit
                  und steigendem Seegang macht das Segeln anstrengend. Hafenstopps
                  mit guter Abdeckung aus Süden suchen.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Süd-Südost</span>
                <span className="tag-pill">warm & feucht</span>
                <span className="tag-pill">langer Seegang</span>
                <span className="tag-pill">langsam aufbauend</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bay-catamaran.png" alt="Katamaran sicher vor Anker in geschützter Bucht" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Monatsübersicht */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Reiseplanung</span>
            <h2 className="section-title">Beste Reisezeit auf einen Blick.</h2>
            <p className="lede">Hauptsaison ist Mai bis Oktober – die Feinheiten machen den Unterschied.</p>
          </Reveal>
          <div style={{ marginTop: "3rem", overflowX: "auto" }}>
            <Reveal as="table" style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.94rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--sand-line)", textAlign: "left" }}>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Monat</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Hauptwind</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Stärke</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Charakter</th>
                  <th style={{ padding: "0.8rem 1rem", fontWeight: 700, color: "var(--navy-900)" }}>Empfehlung</th>
                </tr>
              </thead>
              <tbody>
                {monate.map((row, i) => (
                  <tr key={row.m} style={{ borderBottom: "1px solid var(--sand-line)", background: i % 2 === 0 ? "transparent" : "rgba(197,163,106,0.04)" }}>
                    <td style={{ padding: "0.8rem 1rem", fontWeight: 600 }}>{row.m}</td>
                    <td style={{ padding: "0.8rem 1rem", color: "var(--text-soft)" }}>{row.wind}</td>
                    <td style={{ padding: "0.8rem 1rem", color: "var(--text-soft)" }}>{row.staerke}</td>
                    <td style={{ padding: "0.8rem 1rem", color: "var(--text-soft)" }}>{row.wetter}</td>
                    <td style={{ padding: "0.8rem 1rem", color: "var(--brass-600)" }}>{row.empfehlung}</td>
                  </tr>
                ))}
              </tbody>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Praktische Tipps */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">An Bord</span>
            <h2 className="section-title">Wetterstrategie für den Törn.</h2>
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

      {/* Link zu Charter */}
      <section className="section">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Den Maestral gemeinsam erleben.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die Miss Moneypenny liegt in der Marina Mandalina – genau dort, wo
              der Maestral jeden Sommer zuverlässig aufbaut.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/kontakt" className="btn btn-primary">Verfügbarkeit anfragen</Link>
              <Link href="/charter-infos" className="btn btn-outline">Charter-Infos</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand image="/images/yacht-sailing-genoa.jpg" />
    </>
  );
}
