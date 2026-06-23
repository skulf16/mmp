import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Icon } from "@/components/Icons";
import { author } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dominik Theis – Co-Eigner & Autor | Miss Moneypenny",
  description:
    "Dominik Theis, Co-Eigner der Miss Moneypenny und Segler seit dem 14. Lebensjahr, schreibt die Ratgeber dieser Seite aus eigener Praxis auf der kroatischen Adria.",
  alternates: { canonical: author.url },
  openGraph: {
    title: "Dominik Theis – Co-Eigner & Autor der Miss Moneypenny",
    description:
      "Segler seit dem 14. Lebensjahr, Co-Eigner der Lagoon 400 S2 und Autor der Kroatien-Ratgeber – mehrere Wochen im Jahr auf der Adria unterwegs.",
    images: [{ url: author.image, width: 640, height: 642, alt: "Dominik Theis an Bord der Miss Moneypenny" }],
  },
};

const ldProfile = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: author.url,
  mainEntity: { "@id": author.id },
};

const schwerpunkte = [
  {
    icon: "wheel" as const,
    title: "Törnplanung",
    text: "Von der Crew-Zusammenstellung über die Reisezeit bis zur Route ab Šibenik – wie ein Kroatien-Törn Schritt für Schritt entsteht.",
  },
  {
    icon: "wind" as const,
    title: "Winde der Adria",
    text: "Maestral, Bora und Jugo aus der Praxis: wann sie kommen, wie sie sich anfühlen und wie man den Tag danach plant.",
  },
  {
    icon: "anchor" as const,
    title: "Ankern & Kornaten",
    text: "Regeln, Bojenfelder und die schönsten Buchten im Nationalpark – Wissen aus vielen Nächten vor Anker.",
  },
  {
    icon: "droplet" as const,
    title: "Autarkes Segeln",
    text: "Tagelang unabhängig über Solaranlage und Wassermacher – wie das Leben an Bord eines energieautarken Katamarans funktioniert.",
  },
];

export default function AutorDominikPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldProfile) }}
      />
      <PageHero
        eyebrow="Der Autor"
        title="Dominik Theis"
        lede="Co-Eigner der Miss Moneypenny und Segler seit dem 14. Lebensjahr. Die Ratgeber dieser Seite schreibt er aus eigener Praxis – aus Seemeilen, nicht aus Büchern."
        image="/images/yacht-helm.jpg"
        imageAlt="Skipper am Steuer eines Katamarans auf der Adria"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/ratgeber" }, { label: "Dominik Theis" }]}
      />

      {/* Bio */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div">
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={author.image} alt="Dominik Theis an Bord der Miss Moneypenny" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow">Über mich</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Seit dem 14. Lebensjahr auf dem Wasser zu Hause.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Auf dem Wasser bin ich seit meinem 14. Lebensjahr unterwegs –
                  zuerst als Chartergast, später mit eigener Crew und schließlich
                  als einer von drei Eignern der Miss Moneypenny, einer Lagoon 400 S2,
                  die heute in der Marina Mandalina bei Šibenik liegt.
                </p>
                <p>
                  Mehrere Wochen im Jahr segeln wir drei Eigner gemeinsam an der
                  kroatischen Küste – mein Vater, Micha und ich. Mal geht es hoch in
                  die Kornaten bis in die Telašćica, zuletzt sind wir bis nach
                  Dubrovnik hinuntergefahren.
                </p>
                <p>
                  Im Laufe der Jahre haben wir dabei vieles erlebt: plötzliche
                  Wetterumschwünge, eine Bora, die über Nacht in die Ankerbucht
                  fällt – aber auch unzählige unvergessliche Abende voller Gespräche
                  und Spaß an Bord. Genau aus diesen Trips stammt mein Wissen. Als
                  Dreiergespann haben wir jeden Tag aufs Neue die Törnplanung
                  abgestimmt: nach Wind, Wetter und den Wünschen der Crew.
                </p>
                <p>
                  Die Ratgeber auf dieser Seite gebe ich aus dieser Praxis weiter –
                  damit euer Törn in Kroatien genauso entspannt wird, wie wir ihn
                  selbst jedes Jahr erleben.
                </p>
              </Reveal>

              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">{author.credentialName}</span>
                <span className="tag-pill">Co-Eigner</span>
                <span className="tag-pill">Kornaten &amp; Dalmatien</span>
              </Reveal>

              <Reveal as="div" delay={3} style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
                {author.sameAs.map((href) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="btn btn-outline"
                  >
                    {href.includes("instagram") ? "Instagram" : "LinkedIn"}
                  </a>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Schwerpunkte */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Worüber ich schreibe</span>
            <h2 className="section-title">Meine Themen an Bord.</h2>
          </Reveal>
          <div className="grid-4" style={{ marginTop: "3rem" }}>
            {schwerpunkte.map((s, i) => (
              <Reveal key={s.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <article className="feature">
                  <span className="ic"><Icon name={s.icon} /></span>
                  <h3 style={{ fontSize: "1rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.88rem" }}>{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Praxiswissen</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Alle Ratgeber lesen.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Törnplanung, Winde, Packlisten und Bordküche – das gesammelte
              Praxiswissen für euren Kroatien-Törn.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/ratgeber" className="btn btn-primary">Zu den Ratgebern</Link>
              <Link href="/kontakt" className="btn btn-ghost">Verfügbarkeit anfragen</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand image="/images/yacht-sailing-side.jpg" />
    </>
  );
}
