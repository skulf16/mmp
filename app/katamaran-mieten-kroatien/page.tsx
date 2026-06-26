import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import FaqSection from "@/components/FaqSection";
import { Icon, ArrowRight, Wind } from "@/components/Icons";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Katamaran mieten in Kroatien – Charter-Guide ab Šibenik",
  description:
    "Katamaran chartern in Kroatien – der große Charter-Guide: Reviere, Wind (Maestral & Bora), beste Reisezeit, mit oder ohne Skipper und Preise rund um die Miss Moneypenny.",
  openGraph: {
    title: "Katamaran mieten Kroatien – Revier-Guide ab Šibenik",
    description: "Reviere, Wind (Maestral & Bora), beste Reisezeit, mit oder ohne Skipper – der komplette Katamaran-Guide für Kroatien.",
    images: [{ url: "/images/yacht-sailing-side.jpg", width: 1200, height: 630, alt: "Katamaran Miss Moneypenny segelt auf der kroatischen Adria" }],
  },
};

const advantages = [
  { icon: "waves" as const, title: "Stabil & ruhig", text: "Zwei Rümpfe bedeuten kaum Krängung. Kochen, schlafen und entspannen wie an Land – ein Segen gegen Seekrankheit." },
  { icon: "users" as const, title: "Viel Raum", text: "Großer Salon, breites Cockpit und getrennte Kabinen mit eigenem Bad. Privatsphäre für alle an Bord." },
  { icon: "anchor" as const, title: "Flacher Tiefgang", text: "Mit gut einem Meter Tiefgang ankern Sie in flachen Buchten, die Einrumpfern verschlossen bleiben." },
];

const regionsGuide = [
  { kicker: "Nordadria", title: "Istrien & Kvarner", imageAlt: "Segelrevier Istrien und Kvarner – Katamaran mieten Kroatien Nordadria", text: "Kultur, kurze Schläge und charmante Hafenstädtchen – ideal für genussvolle Törns.", image: "/images/region-cavtat.png" },
  { kicker: "Mitteldalmatien", title: "Šibenik & Kornaten", imageAlt: "Luftaufnahme Kornaten – bestes Katamaran-Revier in Mitteldalmatien", text: "Das beliebteste Revier: Nationalparks, einsame Buchten und unsere Miss Moneypenny.", image: "/images/region-kornati-aerial.png" },
  { kicker: "Süddalmatien", title: "Hvar bis Dubrovnik", imageAlt: "Hafenstadt Korčula – Katamaran mieten Süddalmatien Kroatien", text: "Exklusiv und mondän, mit Weingütern, Inseln und glamourösen Städten.", image: "/images/city-korcula.png" },
];

const facts = [
  "Ein Katamaran segelt dank zweier Rümpfe nahezu krängungsfrei und liegt damit besonders stabil und ruhig im Wasser.",
  "An Bord bieten ein großer Salon, ein breites Cockpit sowie getrennte Kabinen mit eigenem Bad viel Raum und Privatsphäre.",
  "Der flache Tiefgang von gut einem Meter erlaubt das Ankern in flachen Buchten, die Einrumpfern verschlossen bleiben.",
  "Šibenik in Mitteldalmatien ist ein idealer Ausgangspunkt – mit den Kornaten als beliebtestem Revier und einsamen Buchten in Reichweite.",
  "Im Sommer dominiert der angenehme Maestral, ein thermischer Nordwest mit nachmittags 3–5 Beaufort, während Bora und Jugo vor allem die kühleren Monate prägen.",
  "Die Charterpreise variieren stark nach Bootsgröße, Ausstattung und Saison – von rund 2.500 € pro Woche in der Nebensaison bis zu Luxus-Katamaranen im fünfstelligen Bereich.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Wo kann ich einen Katamaran in Kroatien chartern?",
    a: "Ein idealer Ausgangspunkt zum Katamaran-Chartern ist Šibenik in Mitteldalmatien: Von der Marina Mandalina aus erreicht ihr die Kornaten, den Krka-Nationalpark und die Städte Dalmatiens bequem innerhalb einer Woche. Genau dort liegt die Miss Moneypenny, eine Lagoon 400 S2 mit Wassermacher und Solaranlage für bis zu acht Gäste.",
  },
  {
    q: "Warum einen Katamaran statt einer Einrumpfyacht mieten?",
    a: "Ein Katamaran liegt dank seiner zwei Rümpfe nahezu krängungsfrei und damit besonders stabil im Wasser – ein Segen gegen Seekrankheit. Dazu kommen ein großer Salon, ein breites Cockpit und getrennte Kabinen mit eigenem Bad, die viel Raum und Privatsphäre bieten. Der flache Tiefgang von gut einem Meter ermöglicht zudem das Ankern in flachen Buchten, die Einrumpfern verschlossen bleiben.",
  },
  {
    q: "Welches Segelrevier in Kroatien eignet sich für einen Katamaran?",
    a: "Von Istrien und der Kvarner Bucht in der Nordadria über Šibenik und die Kornaten in Mitteldalmatien bis nach Hvar und Dubrovnik in Süddalmatien hat jede Region ihren eigenen Charakter. Šibenik liegt zentral und gilt als idealer Ausgangspunkt, die Kornaten sind das beliebteste Revier mit Nationalparks und einsamen Buchten.",
  },
  {
    q: "Wie sind die Windbedingungen zum Segeln in der Adria?",
    a: "Im Sommer dominiert der angenehme Maestral, ein thermischer Nordwestwind, der nachmittags 3–5 Beaufort erreicht und damit gut planbar ist. Die kräftigeren Winde Bora und Jugo mit 6–10 Beaufort prägen vor allem die kühleren Monate und treten in der Hauptsaison selten auf. Den Wetterbericht sollte man dennoch stets im Blick behalten.",
  },
  {
    q: "Was kostet es, einen Katamaran in Kroatien zu chartern?",
    a: "Die Preise variieren stark nach Bootsgröße, Ausstattung und Saison. Sie reichen von rund 2.500 € pro Woche in der Nebensaison bis zu Luxus-Katamaranen im fünfstelligen Bereich. Die Miss Moneypenny liegt im komfortablen Mittelfeld; konkrete Richtwerte finden sich auf der Charter-Seite.",
  },
  {
    q: "Wann ist die beste Reisezeit für einen Katamaran-Törn in Kroatien?",
    a: "Der Sommer ist ideal, weil dann der verlässliche Maestral weht und Bora und Jugo selten auftreten. Die kräftigen Winde mit 6–10 Beaufort prägen dagegen vor allem die kühleren Monate. So lässt sich der Törn komfortabel und gut planbar gestalten.",
  },
];

export default function KatamaranMietenPage() {
  return (
    <>
      <PageHero
        eyebrow="Revier-Guide"
        title="Katamaran mieten in Kroatien"
        lede="Alles, was Sie für die Planung wissen müssen: warum ein Katamaran, welches Revier und wann die beste Zeit ist."
        image="/images/yacht-sailing-side.jpg"
        imageAlt="Katamaran Miss Moneypenny segelt über die kroatische Adria"
        crumbs={[{ label: "Start", href: "/" }, { label: "Reviere", href: "/revier-sibenik" }, { label: "Katamaran mieten Kroatien" }]}
      />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container container-narrow center">
          <Reveal as="div"><span className="eyebrow centered">Segeln in der kristallklaren Adria</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title" style={{ marginTop: "1.1rem" }}>
            Über 1.000 Inseln, eine Entscheidung.
          </Reveal>
          <Reveal as="p" delay={2} className="lede mx-auto" style={{ marginTop: "1.2rem" }}>
            Kroatien ist Europas Segelparadies: glasklares Wasser, sichere Häfen und
            unzählige Buchten. Wer hier komfortabel und unabhängig unterwegs sein will,
            wählt den Katamaran.
          </Reveal>
        </div>
      </section>

      {/* Der Katamaran-Vorteil */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Der Katamaran-Vorteil</span>
            <h2 className="section-title">Warum zwei Rümpfe einfach mehr können.</h2>
          </Reveal>
          <div className="grid-3" style={{ marginTop: "3rem" }}>
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="feature">
                  <span className="ic"><Icon name={a.icon} /></span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Segelreviere */}
      <section className="section surface-dark">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Segelreviere Kroatien</span>
            <h2 className="section-title">Von Istrien bis Süddalmatien.</h2>
            <p className="lede">Drei Regionen, drei Charaktere – und mittendrin der ideale Ausgangspunkt Šibenik.</p>
          </Reveal>
          <div className="grid-3" style={{ marginTop: "3.5rem" }}>
            {regionsGuide.map((r, i) => (
              <Reveal key={r.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="region-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.image} alt={r.imageAlt} />
                  <div className="rc-body">
                    <span className="rc-kicker">{r.kicker}</span>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wind */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Windbedingungen in der Adria</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Wind verstehen, entspannt segeln.</Reveal>
              <Reveal as="p" delay={2} className="lede">
                Die Adria ist ein dankbares Revier. Im Sommer dominiert der angenehme
                Maestral, während die kräftigen Winde Bora und Jugo vor allem die kühleren
                Monate prägen.
              </Reveal>
              <Reveal as="div" delay={2} style={{ marginTop: "1rem" }}>
                <div className="feature-min">
                  <Wind className="ic" />
                  <div><h3>Maestral (Sommer)</h3><p>Thermischer Nordwest, nachmittags 3–5 Beaufort – ideal und gut planbar.</p></div>
                </div>
                <div className="feature-min">
                  <Wind className="ic" />
                  <div><h3>Bora & Jugo (Winter)</h3><p>Kräftiger 6–10 Beaufort. In der Hauptsaison selten, aber stets den Wetterbericht im Blick behalten.</p></div>
                </div>
              </Reveal>
            </div>
            <Reveal as="div" delay={1}>
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-sailing-genoa.jpg" alt="Katamaran unter Genua bei gutem Wind" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Preise / Verweis */}
      <section className="section surface-sand">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Charterpreise Katamaran</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Was kostet ein Katamaran?</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.4rem" }}>
                <p>
                  Die Preise variieren stark nach Bootsgröße, Ausstattung und Saison – von
                  rund 2.500 € pro Woche in der Nebensaison bis zu Luxus-Katamaranen im
                  fünfstelligen Bereich.
                </p>
                <p>
                  Die Miss Moneypenny liegt im komfortablen Mittelfeld – mit einer
                  Ausstattung, die viele teurere Yachten nicht bieten. Die konkreten
                  Richtwerte finden Sie auf unserer Charter-Seite, eine vollständige
                  Aufstellung aller Posten im Ratgeber{" "}
                  <Link href="/segeltorn-kroatien-kosten">Was kostet ein Segeltörn in Kroatien?</Link>
                </p>
              </Reveal>
              <Reveal as="div" delay={3} style={{ marginTop: "2rem" }}>
                <Link href="/charter-infos" className="link-arrow">Zu den Charter-Infos & Preisen <ArrowRight /></Link>
              </Reveal>
            </div>
            <Reveal as="div" delay={1}>
              <div className="media-frame wide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-aerial-village.jpg" alt="Katamaran vor Anker an einem dalmatinischen Dorf" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Katamaran mieten in Kroatien – kurz erklärt.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/katamaran-mieten-kroatien#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-sailing-side.jpg" eyebrow="Die richtige Wahl" title="Miss Moneypenny – Ihr Katamaran für Kroatien." />
    </>
  );
}
