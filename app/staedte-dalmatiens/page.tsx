import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { cities } from "@/lib/site";

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

      <CtaBand image="/images/region-cavtat.png" eyebrow="Auf den Spuren Dalmatiens" title="Entdecken Sie diese Städte vom Wasser aus." />
    </>
  );
}
