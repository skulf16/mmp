import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Logbook from "@/components/Logbook";
import { Anchor, BookOpen, Check, Shield, Sparkle } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Bordbuch führen – das digitale Logbuch für deinen Törn",
  description:
    "Führe dein eigenes Bordbuch für den Törn auf der Miss Moneypenny: Tag für Tag ausfüllen, automatisch im Browser gespeichert, als PDF herunterladen oder dir selbst per E-Mail senden.",
  alternates: { canonical: "/bordbuch" },
  openGraph: {
    title: "Dein digitales Bordbuch – Miss Moneypenny",
    description:
      "Tag für Tag ausfüllen, automatisch gespeichert, als PDF an dich selbst senden – dein persönliches Logbuch für den Törn.",
    images: [{ url: "/images/yacht-nav-station.jpg", width: 1200, height: 630, alt: "Navigationsstation an Bord der Miss Moneypenny" }],
  },
};

export default function BordbuchPage() {
  return (
    <>
      <PageHero
        eyebrow="Bordbuch"
        title="Dein digitales Bordbuch"
        lede="Halte deinen Törn Tag für Tag fest – ganz ohne Anmeldung. Alles bleibt sicher in deinem Browser, und am Ende schickst du dir dein Bordbuch als PDF einfach selbst zu."
        image="/images/yacht-nav-station.jpg"
        imageAlt="Navigationsstation mit Kartenplotter an Bord der Miss Moneypenny"
        crumbs={[{ label: "Start", href: "/" }, { label: "Bordbuch" }]}
      />

      {/* ---- Warum ein Bordbuch ---- */}
      <section className="section-tight">
        <div className="container">
          <div className="split align-start" style={{ "--split-cols": "1.3fr 1fr" } as React.CSSProperties}>
            <Reveal as="div">
              <span className="eyebrow">Warum überhaupt?</span>
              <h2 className="section-title" style={{ marginTop: "1rem", marginBottom: "1.2rem" }}>
                Zwei gute Gründe, es zu führen.
              </h2>
              <div className="prose">
                <p>
                  <strong>Als Erinnerung.</strong> Ein Bordbuch ist mehr als nautische Pflicht – es ist das
                  Tagebuch deines Törns. Welche Bucht hat euch umgehauen, wo gab es den besten Fisch, an welchem
                  Tag stand der Maestral perfekt? Solche Momente verblassen schnell. Aufgeschrieben bleiben sie.
                </p>
                <p>
                  <strong>Als Beleg.</strong> Sollte einmal etwas passieren – ein Schaden, ein Manöver, eine
                  Beinahe-Situation – ist ein lückenloses Logbuch Gold wert. Zeiten, Positionen, Wetter und
                  Vorkommnisse sauber dokumentiert: Das hilft im Gespräch mit Charterbasis, Versicherung oder Behörde.
                </p>
              </div>
              <p className="lb-hint" style={{ marginTop: "1.4rem" }}>
                Hinweis: Dieses persönliche Bordbuch ist eine bequeme Ergänzung und ein gutes Backup – das amtliche
                Schiffstagebuch an Bord ersetzt es nicht.
              </p>
            </Reveal>

            <Reveal as="div" delay={1}>
              <div className="factbox">
                <span className="eyebrow"><BookOpen style={{ width: 16, height: 16 }} /> Was reingehört</span>
                <ul>
                  <li><Anchor style={{ width: 18, height: 18 }} /> Etappe: von wo nach wo, Zeiten & Seemeilen</li>
                  <li><Check style={{ width: 18, height: 18 }} /> Wind, Wetter und Seegang des Tages</li>
                  <li><Shield style={{ width: 18, height: 18 }} /> Besondere Vorkommnisse & Manöver</li>
                  <li><Sparkle style={{ width: 18, height: 18 }} /> Das Highlight: euer schönster Moment</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Das Bordbuch-Tool ---- */}
      <section className="section-tight surface-sand">
        <div className="container container-narrow">
          <Reveal as="div" style={{ marginBottom: "2rem" }}>
            <span className="eyebrow">Logbuch ausfüllen</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Leinen los.</h2>
            <p className="lede" style={{ marginTop: "1rem" }}>
              Trag ein, was war – am besten jeden Abend in der Bucht. Du kannst die Seite jederzeit schließen und
              später weitermachen: Deine Einträge bleiben auf diesem Gerät gespeichert, auch offline.
            </p>
          </Reveal>
          <Logbook />
        </div>
      </section>
    </>
  );
}
