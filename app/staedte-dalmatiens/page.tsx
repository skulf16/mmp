import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import FaqSection from "@/components/FaqSection";
import { cities, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dalmatien per Katamaran: Trogir, Split, Hvar, Korčula",
  description:
    "Die schönsten Hafenstädte Dalmatiens vom Wasser aus: Trogir, Split, Hvar und Korčula – Törnziele und Landgänge für euren Katamaran-Urlaub ab Šibenik.",
  openGraph: {
    title: "Dalmatien per Katamaran: Trogir, Split, Hvar, Korčula",
    description: "Trogir, Split, Hvar, Korčula – Dalmatiens schönste Hafenstädte direkt per Katamaran ab Šibenik entdecken.",
    images: [{ url: "/images/city-hvar.png", width: 1200, height: 630, alt: "Hafenstadt Hvar von der Festung aus – Törnziel Dalmatien" }],
  },
};

const facts = [
  "Trogir liegt auf einer kleinen, über Brücken verbundenen Insel und ist mit seinen venezianischen Palästen, der Festung Kamerlengo und engen Gassen UNESCO-Welterbe.",
  "Split ist die zweitgrößte Stadt Kroatiens; in ihrem Herzen steht der rund 1.700 Jahre alte Diokletianpalast, der heute voller Shops, Cafés und Leben ist.",
  "Hvar verbindet Glamour und Geschichte: Über der Stadt thront die Festung Španjola, darunter liegt das älteste öffentliche Theater Europas.",
  "Korčula gilt als „Klein-Dubrovnik“, besitzt eine ummauerte Altstadt mit der Kathedrale des Heiligen Markus und ist angeblich die Geburtsstadt Marco Polos.",
  "Mit der Miss Moneypenny gehen Gäste direkt im Herzen dieser Hafenstädte an Land – dort, wo Kreuzfahrtschiffe nicht hinkommen.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Welche Hafenstädte Dalmatiens lassen sich per Katamaran ansteuern?",
    a: "Diese Seite stellt vier Hafenstädte vor: Trogir, Split, Hvar und Korčula. Jede ist ein eigenes Kapitel der Adria und lohnt einen Landgang. Mit der Miss Moneypenny machen Sie direkt im Herzen der jahrhundertealten Städte fest.",
  },
  {
    q: "Was macht Trogir besonders?",
    a: "Trogir liegt auf einer kleinen Insel und ist über Brücken mit dem Festland verbunden. Venezianische Paläste, die Festung Kamerlengo und enge Gassen voller Cafés prägen das Bild. Die Stadt ist UNESCO-Welterbe und lädt zum Flanieren ein.",
  },
  {
    q: "Was kann ich in Split sehen?",
    a: "Split ist die zweitgrößte Stadt Kroatiens. In ihrem Herzen steht der rund 1.700 Jahre alte Diokletianpalast, der heute voller Shops, Cafés und Leben ist. Die Uferpromenade Riva lädt zusätzlich zum Promenieren ein.",
  },
  {
    q: "Wofür sind Hvar und Korčula bekannt?",
    a: "Auf Hvar thront die Festung Španjola über der Stadt, darunter liegt das älteste öffentliche Theater Europas; dazu kommen Eleganz, Lavendelduft und eine mondäne Hafenpromenade. Korčula gilt als „Klein-Dubrovnik“ mit ummauerter Altstadt, der Kathedrale des Heiligen Markus, Schwerttänzen und Weingütern und ist angeblich die Geburtsstadt Marco Polos.",
  },
  {
    q: "Warum lohnt sich der Landgang gerade per Katamaran?",
    a: "Mit der Miss Moneypenny gehen Sie dort an Land, wo Kreuzfahrtschiffe nicht hinkommen: direkt im Herzen der jahrhundertealten Hafenstädte. Festmachen, aussteigen, eintauchen – statt langer Wege vom Großschiffhafen ins Zentrum.",
  },
];

export default function StaedteDalmatiensPage() {
  return (
    <>
      <PageHero
        eyebrow="Landgang"
        title="Hafenstädte Dalmatiens"
        lede="Geschichte zum Anlegen: vier Städte, die ein Landgang mehr als lohnt – jede ein eigenes Kapitel der Adria."
        image="/images/city-hvar.png"
        imageAlt="Blick über die Hafenstadt Hvar von der Festung aus"
        crumbs={[{ label: "Start", href: "/" }, { label: "Reviere", href: "/revier-sibenik" }, { label: "Städte Dalmatiens" }]}
      />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section-tight section">
        <div className="container container-narrow center">
          <Reveal as="div"><span className="eyebrow centered">Ein lebendiges Museum</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title" style={{ marginTop: "1.1rem" }}>
            Antike trifft auf pulsierendes Leben.
          </Reveal>
          <Reveal as="p" delay={2} className="lede mx-auto" style={{ marginTop: "1.2rem" }}>
            Mit der Miss Moneypenny gehen Sie dort an Land, wo Kreuzfahrtschiffe nicht
            hinkommen: direkt im Herzen jahrhundertealter Hafenstädte. Festmachen,
            aussteigen, eintauchen.
          </Reveal>
        </div>
      </section>

      {/* Städte – alternierend */}
      {cities.map((c, i) => {
        const flip = i % 2 === 1;
        return (
          <section className={`section ${i % 2 === 1 ? "surface-sand" : ""}`} key={c.name}>
            <div className="container">
              <div className="split align-start">
                {!flip && (
                  <Reveal as="div">
                    <div className="media-frame tall">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.image} alt={`${c.name} – ${c.tag}`} />
                    </div>
                  </Reveal>
                )}
                <div>
                  <Reveal as="div">
                    <span className="eyebrow">{String(i + 1).padStart(2, "0")} · {c.tag}</span>
                  </Reveal>
                  <Reveal as="h2" delay={1} className="section-title" style={{ marginTop: "1rem" }}>{c.name}</Reveal>
                  <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.4rem" }}>
                    <p>{c.text}</p>
                  </Reveal>
                </div>
                {flip && (
                  <Reveal as="div" delay={1}>
                    <div className="media-frame tall frame-left">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.image} alt={`${c.name} – ${c.tag}`} />
                    </div>
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* FAQ */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Dalmatiens Städte – kurz erklärt.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/staedte-dalmatiens#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/region-cavtat.png" eyebrow="Auf den Spuren Dalmatiens" title="Entdecken Sie diese Städte vom Wasser aus." />
    </>
  );
}
