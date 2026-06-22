import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Icon, ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Segelrevier Šibenik & Marina Mandalina | Miss Moneypenny",
  description:
    "Šibenik als Ausgangshafen: geschützte Buchten, Kornaten in 2–3 h, Krka-Nationalpark und UNESCO-Altstadt. Das Segelrevier rund um die Marina Mandalina.",
  openGraph: {
    title: "Segelrevier Šibenik & Marina Mandalina | Miss Moneypenny",
    description: "Šibenik als Ausgangshafen: Kornaten in 2–3 h, Krka-Nationalpark und UNESCO-Altstadt – das beste Segelrevier Kroatiens.",
    images: [{ url: "/images/region-sibenik.png", width: 1200, height: 630, alt: "Panorama Šibenik mit Kathedrale – Segelrevier an der dalmatinischen Küste" }],
  },
};

const ldPlace = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": "Segelrevier Šibenik",
  "description": "Šibenik ist der ideale Ausgangspunkt für Katamaran-Törns in Kroatien: geschützte Gewässer, UNESCO-Kathedrale, Krka-Nationalpark und die Kornaten in Reichweite.",
  "url": "https://chartern-in-kroatien.de/revier-sibenik",
  "touristType": "Segler und Wassersport-Begeisterte",
  "containedInPlace": {
    "@type": "Country",
    "name": "Kroatien",
  },
};

const highlights = [
  { icon: "waves" as const, title: "Geschützte Gewässer", text: "Der Kanal von St. Anton und die vorgelagerten Inseln schaffen ein sicheres, entspanntes Segelrevier – ideal für Familien und Einsteiger." },
  { icon: "sparkle" as const, title: "UNESCO-Kathedrale", text: "Die Kathedrale des Heiligen Jakob, komplett aus Stein erbaut, zählt zum Welterbe. Darüber thronen die Festungen der Altstadt." },
  { icon: "droplet" as const, title: "Krka-Nationalpark", text: "Tosende Wasserfälle und smaragdgrüne Becken – der Krka-Fluss mündet bei Šibenik und ist teils per Beiboot erreichbar." },
  { icon: "anchor" as const, title: "Inseln Zlarin & Prvić", text: "Autofreie Inseln vor der Haustür: authentisches Dalmatien, ruhige Häfen und Konobas mit fangfrischem Fisch." },
];

export default function RevierSibenikPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldPlace) }}
      />
      <PageHero
        eyebrow="Heimathafen"
        title="Das Segelrevier Šibenik"
        lede="Wo Ihr Abenteuer beginnt: ein geschütztes Revier zwischen Nationalparks, Welterbe und kristallklaren Buchten."
        image="/images/region-sibenik.png"
        imageAlt="Panorama von Šibenik mit roten Dächern, Kathedrale und der Adria"
        crumbs={[{ label: "Start", href: "/" }, { label: "Reviere", href: "/revier-sibenik" }, { label: "Šibenik" }]}
      />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Ausgangspunkt für Abenteuer</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Zentral gelegen, perfekt geschützt.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Šibenik liegt im Herzen Dalmatiens – und damit genau richtig. Von der
                  Marina Mandalina aus erreichen Sie sowohl die Kornaten im Norden als auch
                  die mondänen Städte im Süden bequem innerhalb einer Woche.
                </p>
                <p>
                  Die Stadt selbst ist ein Juwel: enge Gassen, vier Festungen und die
                  einzigartige Kathedrale des Heiligen Jakob. Davor liegt ein Revier aus
                  geschützten Kanälen und gut erreichbaren Buchten – entspanntes Segeln vom
                  ersten Tag an.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill"><Icon name="pin" style={{ width: 16 }} /> Marina Mandalina</span>
                <span className="tag-pill">Kornaten in 2–3 h</span>
                <span className="tag-pill">Krka-Wasserfälle</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bay-catamaran.png" alt="Katamaran in einer ruhigen Bucht nahe Šibenik" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Zwischen Buchten und Nationalparks</span>
            <h2 className="section-title">Was das Revier so besonders macht.</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={h.icon} /></span>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Weiterführend */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-flex">
            <div className="head-block">
              <span className="eyebrow">Weiter geht's</span>
              <h2 className="section-title">Drei Routen ab Šibenik.</h2>
            </div>
          </Reveal>
          <div className="grid-3" style={{ marginTop: "3rem" }}>
            <Reveal>
              <Link href="/segeln-in-den-kornaten" className="region-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/region-kornati-aerial.png" alt="Kornaten aus der Luft" />
                <div className="rc-body">
                  <span className="rc-kicker">Nordwärts</span>
                  <h3>Kornaten</h3>
                  <p>89 Inseln, einsame Buchten, Nationalpark pur.</p>
                  <span className="rc-more">Mehr erfahren <ArrowRight /></span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={1}>
              <Link href="/staedte-dalmatiens" className="region-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/city-trogir.png" alt="Hafenstadt Trogir" />
                <div className="rc-body">
                  <span className="rc-kicker">Südwärts</span>
                  <h3>Städte Dalmatiens</h3>
                  <p>Trogir, Split, Hvar und Korčula.</p>
                  <span className="rc-more">Mehr erfahren <ArrowRight /></span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={2}>
              <Link href="/katamaran-mieten-kroatien" className="region-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/region-cavtat.png" alt="Dalmatinische Küstenstadt" />
                <div className="rc-body">
                  <span className="rc-kicker">Revier-Guide</span>
                  <h3>Katamaran mieten</h3>
                  <p>Alles über Reviere, Wind und Preise.</p>
                  <span className="rc-more">Mehr erfahren <ArrowRight /></span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand image="/images/region-sibenik.png" />
    </>
  );
}
