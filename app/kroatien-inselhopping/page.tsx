import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Icon, ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Kroatien Inselhopping mit Katamaran ab Šibenik | Miss Moneypenny",
  description:
    "Inselhopping Kroatien per Katamaran: Kornaten, Hvar, Brač und mehr – warum der Katamaran das ideale Boot ist und wie eine Woche ab Šibenik aussieht.",
};

const inseln = [
  {
    name: "Kornaten",
    tag: "Nationalpark · ab 2 h",
    text: "89 Inseln, kaum Bebauung, türkisblaues Wasser. Das Kroatien, das man sich vorstellt. Beste Ankerbuchten, Bojenfelder, eine Handvoll Konobas – mehr braucht man nicht.",
    image: "/images/region-kornati-aerial.png",
  },
  {
    name: "Hvar",
    tag: "Glamour · ca. 5 h",
    text: "Die schickste Insel der Adria mit Festung, Lavendelfeldern und der lebhaftesten Hafenpromenade Dalmatiens. Früh ankommen – Liegeplatz in der Hochsaison rar.",
    image: "/images/city-hvar.png",
  },
  {
    name: "Brač",
    tag: "Natur & Strand · ca. 4 h",
    text: "Zlatni Rat, der bekannteste Strand Kroatiens, verändert mit dem Wind seine Form. Milna auf der Westseite ist ein ruhiger, charmanter Hafen mit gutem Ankerplatz.",
    image: "/images/region-cavtat.png",
  },
  {
    name: "Korčula",
    tag: "Altstadt · ca. 7 h",
    text: "Klein-Dubrovnik: eine ummauerte Altstadt auf einer Landzunge. Angenehmere Atmosphäre als Dubrovnik, gut erreichbarer Hafen direkt an der Altstadt.",
    image: "/images/city-korcula.png",
  },
];

const warum = [
  {
    icon: "waves" as const,
    title: "Stabilität & Komfort",
    text: "Der Katamaran krängt kaum – auf langen Passages zwischen Inseln ist das ein echter Unterschied, besonders für weniger seeerfahrene Crewmitglieder.",
  },
  {
    icon: "anchor" as const,
    title: "Flacher Tiefgang",
    text: "1,30 m Tiefgang erlaubt es, näher an die Strände heranzufahren als viele einrümpfige Yachten. Die schönsten Buchten sind oft flach – perfekt für Katamarane.",
  },
  {
    icon: "droplet" as const,
    title: "Autark unterwegs",
    text: "Kein täglicher Wasserstopp. Mit Wassermacher und Solar bleibt ihr so lange, wo es schön ist – und wechselt die Insel, wenn ihr es wollt, nicht wenn ihr müsst.",
  },
  {
    icon: "bed" as const,
    title: "Platz für alle",
    text: "Vier Kabinen mit eigenem Bad. Nach einem langen Tag auf See hat jede Zweiergruppe ihre Privatsphäre – kein Gedränge, keine Warteschlange vor dem Bad.",
  },
];

export default function KroatienInselhoppingPage() {
  return (
    <>
      <PageHero
        eyebrow="Inselhopping"
        title="Kroatien Inselhopping per Katamaran"
        lede="Von Insel zu Insel, Bucht zu Bucht: Kroatien ist das perfekte Revier für Inselhopping – und ein Katamaran ist das perfekte Boot dafür."
        image="/images/yacht-aerial-village.jpg"
        imageAlt="Katamaran ankert vor einer dalmatinischen Insel"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber" }, { label: "Inselhopping Kroatien" }]}
      />

      {/* Warum Katamaran */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Das richtige Boot</span>
            <h2 className="section-title">Warum der Katamaran beim Inselhopping gewinnt.</h2>
            <p className="lede">Stabilität, Platz, Tiefgang, Autarkie – vier Punkte, die beim Inselwechsel täglich zählen.</p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {warum.map((w, i) => (
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

      {/* Inseln */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Die Ziele</span>
            <h2 className="section-title">Vier Inseln, die keine Crew vergisst.</h2>
            <p className="lede">Alle ab Šibenik in einer Woche erreichbar – je nach Route und Tempo.</p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {inseln.map((insel, i) => (
              <Reveal key={insel.name} delay={((i % 2) + 1) as 1 | 2}>
                <article style={{ borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--sand-line)", background: "var(--paper)" }}>
                  <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={insel.image} alt={insel.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <span style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--brass-600)", fontWeight: 700 }}>{insel.tag}</span>
                    <h3 style={{ marginTop: "0.4rem", fontSize: "1.4rem" }}>{insel.name}</h3>
                    <p style={{ marginTop: "0.7rem", color: "var(--text-soft)", fontSize: "0.94rem", lineHeight: 1.6 }}>{insel.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Muster-Woche */}
      <section className="section surface-navy">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Muster-Itinerar</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Eine Woche, zwei Richtungen.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.4rem" }}>
                <p>
                  <strong>Nordroute – Kornaten:</strong> Šibenik → Prvić → Kornaten
                  (3 Nächte) → Murter → Šibenik. Für alle, die Einsamkeit und Nationalpark
                  suchen – wenig Hafen, viel Anker.
                </p>
                <p>
                  <strong>Südroute – Städte:</strong> Šibenik → Trogir → Hvar →
                  Brač/Milna → Split → Šibenik. Für Crews, die neben dem Wasser auch
                  Architektur, Restaurants und Nightlife wollen.
                </p>
                <p>
                  Oder kombiniert: drei Nächte Kornaten, dann nach Süden zu Hvar.
                  Mit einer Woche ist das knapp, aber möglich.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/croatia-map.png" alt="Karte der dalmatinischen Küste mit Segelrevieren" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Weiterführend */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Mehr planen</span>
            <h2 className="section-title">Direkt loslegen.</h2>
          </Reveal>
          <div className="grid-3" style={{ marginTop: "2.5rem" }}>
            <Reveal>
              <Link href="/toernvorschlag-kornaten" className="region-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/region-kornati-aerial.png" alt="Kornaten Luftaufnahme" />
                <div className="rc-body">
                  <span className="rc-kicker">Törnvorschlag</span>
                  <h3>1 Woche Kornaten</h3>
                  <p>Tag-für-Tag-Route mit Ankerbuchten und Tipps.</p>
                  <span className="rc-more">Route ansehen <ArrowRight /></span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={1}>
              <Link href="/staedte-dalmatiens" className="region-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/city-hvar.png" alt="Hvar Hafen" />
                <div className="rc-body">
                  <span className="rc-kicker">Städte</span>
                  <h3>Dalmatien per Katamaran</h3>
                  <p>Trogir, Split, Hvar und Korčula.</p>
                  <span className="rc-more">Ziele entdecken <ArrowRight /></span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={2}>
              <Link href="/kontakt" className="region-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-hero-anchored.jpg" alt="Miss Moneypenny vor Anker" />
                <div className="rc-body">
                  <span className="rc-kicker">Anfragen</span>
                  <h3>Termin sichern</h3>
                  <p>Verfügbarkeit der Miss Moneypenny prüfen.</p>
                  <span className="rc-more">Jetzt anfragen <ArrowRight /></span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-aerial-village.jpg" />
    </>
  );
}
