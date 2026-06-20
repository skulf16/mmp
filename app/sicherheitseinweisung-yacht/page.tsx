import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sicherheitseinweisung Yacht – Checkliste für die Crew | Miss Moneypenny",
  description:
    "Checkliste Sicherheitseinweisung Yacht: Was beim Check-in erklärt wird, was jede Person an Bord wissen muss – Rettungsmittel, Notfall, Manöver und Brandschutz.",
};

const checkliste = [
  {
    kategorie: "Rettungsmittel",
    icon: "shield" as const,
    punkte: [
      "Standort der Rettungswesten – wo, wie anlegen",
      "Automatische vs. manuelle Auslösung (Gas-Patronen prüfen)",
      "Standort der Rettungsinsel – Auslösung und Sicherungsleine",
      "Wurfrettungsring: Standort, Leinenbefestigung",
      "Mann-über-Bord-Boje (MOB) am Heck: Auslösung",
      "EPIRB/PLB: Standort und Aktivierung",
    ],
  },
  {
    kategorie: "Notfall & Mayday",
    icon: "waves" as const,
    punkte: [
      "VHF-Funkgerät: Kanal 16 (internationaler Notrufkanal)",
      "Mayday-Ablauf: Mayday × 3 – Schiffsname – Position – Personenzahl",
      "Position ablesen: Kartenplotter, GPS-Koordinaten",
      "Notsignale an Bord: Leuchtkugeln, Rauch",
      "Klingelzeichen an Bord (Bora, MOB, Feuer)",
      "Notfallkontakte: Küstenwache, Skipper, Charterer",
    ],
  },
  {
    kategorie: "Brandschutz",
    icon: "leaf" as const,
    punkte: [
      "Standort der Feuerlöscher (Salon, Maschinenraum, Pantry)",
      "Gashahn in der Pantry: immer nach dem Kochen schließen",
      "Nicht im Salon rauchen – nur im Cockpit (falls erlaubt)",
      "Rettungsweg aus Kabinen kennen",
      "Notfallabsperrung Gasanlage",
    ],
  },
  {
    kategorie: "Motormanöver & Technik",
    icon: "wheel" as const,
    punkte: [
      "Motorstart und -stopp – beide Motoren unabhängig",
      "Schifffahrtsregeln: Steuerbord hat Vorfahrt",
      "Ankerwinde: elektrisch – Bedienung, Not-Stopp",
      "Bootsmotor Beiboot: Starten, Stopp, Sicherheitsleine",
      "Notsteuerung (falls Ruderanlage ausfällt)",
      "Seehahn-Positionen: Toiletten, Kühlwasser",
    ],
  },
  {
    kategorie: "Toiletten & Bordtechnik",
    icon: "droplet" as const,
    punkte: [
      "Toiletten: Pumpe richtig bedienen – kein Fremdkörper",
      "Schwarzwassertank: geschlossen halten in Nationalparks",
      "Wassermacher: Ein-/Ausschaltung, Durchfluss",
      "Solaranlage & Batteriestand: wo ablesen",
      "Bilgenpumpen: Standort, manuelle Bedienung",
      "Strom: 12V und 230V – welche Geräte wo anschließen",
    ],
  },
  {
    kategorie: "Verhalten an Bord",
    icon: "anchor" as const,
    punkte: [
      "Immer Festhalten: eine Hand fürs Schiff",
      "Nachts im Cockpit: Rettungsweste und Lifeline anlegen",
      "Alkohol: nur im Hafen oder vor Anker – nie am Steuer",
      "Kinder an Deck: immer mit Schwimmweste",
      "Schuhpflicht an Deck: Bootsschuhe mit weißer Sohle",
      "Müll: alles an Bord sammeln, in Häfen entsorgen",
    ],
  },
];

export default function SicherheitseinweisungYachtPage() {
  return (
    <>
      <PageHero
        eyebrow="Sicherheit"
        title="Sicherheitseinweisung Yacht"
        lede="Was jede Person an Bord kennen und verstehen muss – bevor die Leinen losgehen."
        image="/images/yacht-nav-station.jpg"
        imageAlt="Navigationsstation der Miss Moneypenny mit Funkgerät und Kartenplotter"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/segeltorn-planen" }, { label: "Sicherheitseinweisung" }]}
      />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Check-in an Bord</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Die Einweisung dauert 45 Minuten – und ist es wert.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Beim Check-in am ersten Tag geht der Skipper oder der Chartergeber
                  mit euch systematisch durch das Boot. Was in dieser Einweisung
                  besprochen wird, könnt ihr auf dieser Seite nachlesen und euch
                  vorab merken – damit ihr gezielte Fragen stellen könnt.
                </p>
                <p>
                  Sicherheit an Bord ist keine Bürde, sie ist das Fundament für einen
                  entspannten Törn. Wer weiß, was zu tun ist, kann alles andere
                  genießen.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-helm.jpg" alt="Steuerstand der Miss Moneypenny mit Sicht aufs Cockpit" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Checkliste */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Vollständige Checkliste</span>
            <h2 className="section-title">Was bei der Einweisung besprochen wird.</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem", gap: "3rem" }}>
            {checkliste.map((kat, i) => (
              <Reveal key={kat.kategorie} delay={((i % 2) + 1) as 1 | 2}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
                    <span className="ic" style={{ width: 36, height: 36, flexShrink: 0 }}><Icon name={kat.icon} /></span>
                    <h3 style={{ fontSize: "1.15rem" }}>{kat.kategorie}</h3>
                  </div>
                  <ul style={{ listStyle: "none", display: "grid", gap: 0 }}>
                    {kat.punkte.map((punkt) => (
                      <li key={punkt} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", padding: "0.6rem 0", borderBottom: "1px solid var(--sand-line)", fontSize: "0.92rem", color: "var(--text-soft)" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--brass-600)", flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12" /></svg>
                        {punkt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notruf */}
      <section className="section surface-dark">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Im Notfall</span>
            <h2 className="section-title">Diese Nummern müsst ihr kennen.</h2>
          </Reveal>
          <div className="grid-3" style={{ marginTop: "3rem" }}>
            {[
              { name: "Kroatische Küstenwache", nr: "9155", info: "Seenot & Unfälle auf See" },
              { name: "Europäischer Notruf", nr: "112", info: "Allgemeiner Notruf (auch auf See per Handy)" },
              { name: "VHF Kanal 16", nr: "CH 16", info: "Internationaler maritimer Notruf- und Anrufkanal" },
            ].map((n, i) => (
              <Reveal key={n.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="feature" style={{ textAlign: "center" }}>
                  <span className="ic"><Icon name="shield" /></span>
                  <h3>{n.name}</h3>
                  <p style={{ fontSize: "1.8rem", fontFamily: "var(--font-display)", color: "var(--brass-300)", margin: "0.5rem 0" }}>{n.nr}</p>
                  <p style={{ fontSize: "0.9rem" }}>{n.info}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow centered">Gut vorbereitet</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Weiter zur Packliste oder direkt anfragen.</h2>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/kontakt" className="btn btn-primary">Termin anfragen</Link>
              <Link href="/segeltorn-packliste" className="btn btn-outline">Zur Packliste</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand image="/images/yacht-nav-station.jpg" />
    </>
  );
}
