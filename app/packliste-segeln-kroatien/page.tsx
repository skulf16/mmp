import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Packliste Segeln Kroatien – Was ihr speziell braucht | Miss Moneypenny",
  description:
    "Packliste für einen Segeltörn in Kroatien: Nationalpark-Vignette, Dokumente, Währung, Sonnenschutz und alles, was für das Revier um Šibenik besonders wichtig ist.",
};

const kroatienSpezifisch = [
  { item: "Nationalpark-Vignette (Kornaten / Telašćica) – online vorbestellen", wichtig: true },
  { item: "Reisepass oder Personalausweis (beide gültig für EU-Bürger)", wichtig: true },
  { item: "Sportbootführerschein SBF See – Original, nicht Kopie", wichtig: true },
  { item: "Funkzeugnis SRC oder UBI – Original", wichtig: true },
  { item: "Chartervertrag der Miss Moneypenny", wichtig: true },
  { item: "Europäische Krankenversicherungskarte (EHIC)", wichtig: true },
  { item: "Euro-Bargeld (Kroatien zahlt in Euro seit 2023)", wichtig: false },
  { item: "Kreditkarte (Visa/MC – in allen Häfen akzeptiert)", wichtig: false },
  { item: "Kroatisch-Wörterbuch oder Google Translate offline", wichtig: false },
  { item: "mySea-App installiert (Bojenreservierung Nationalpark)", wichtig: false },
  { item: "Windy-App oder Wetter-App für Adria-Vorhersagen", wichtig: false },
  { item: "Navionics-App oder Garmin Karte (Offline-Karten Dalmatien)", wichtig: false },
];

const klima = [
  {
    icon: "sun" as const,
    title: "Viel Sonne, viel UV",
    text: "An der dalmatinischen Küste scheint die Sonne von Mai bis September täglich. Auf dem Wasser reflektiert sie – SPF 50 für Gesicht, Nacken und Arme ist Pflicht.",
  },
  {
    icon: "wind" as const,
    title: "Maestral kühlt täuschen",
    text: "Bei 28 Grad und frischem Maestral fühlt es sich angenehm kühl an. Trotzdem verbrennt man – gerade beim Steuern, wenn man stundenlang in einer Position sitzt.",
  },
  {
    icon: "waves" as const,
    title: "Bora kann kalt sein",
    text: "Wenn die Bora weht, fällt die gefühlte Temperatur auf Wasser drastisch. Eine Fleeceschicht und Ölzeug gehören immer griffbereit ins Cockpit.",
  },
  {
    icon: "droplet" as const,
    title: "Salzwasser überall",
    text: "Elektronik, Brillen und Kleidung – alles wird salzig. Wasserdichte Hüllen, Mikrofasertücher zum Abwischen und salzresistente Sonnenbrillen sind sinnvoll.",
  },
];

export default function PacklisteSegelnKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Kroatien-spezifisch"
        title="Packliste Segeln Kroatien"
        lede="Was speziell für Kroatien gilt: Pflichtdokumente, Nationalpark-Vignette, Währung und Klima-Ausrüstung für das Revier um Šibenik."
        image="/images/region-sibenik.png"
        imageAlt="Šibenik vom Wasser aus – Ausgangspunkt der Miss Moneypenny"
        crumbs={[{ label: "Start", href: "/" }, { label: "Packliste", href: "/segeltorn-packliste" }, { label: "Kroatien-spezifisch" }]}
      />

      {/* Pflichtdokumente */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Kroatien-Checkliste</span>
            <h2 className="section-title">Was ihr unbedingt dabei haben müsst.</h2>
            <p className="lede">Für das Chartern in Kroatien und den Besuch der Nationalparks gelten spezifische Anforderungen.</p>
          </Reveal>
          <div style={{ marginTop: "3rem", maxWidth: "760px" }}>
            <ul style={{ listStyle: "none", display: "grid", gap: 0 }}>
              {kroatienSpezifisch.map((entry) => (
                <Reveal key={entry.item} as="li" style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start", padding: "0.85rem 0", borderBottom: "1px solid var(--sand-line)", fontSize: "0.95rem" }}>
                  {entry.wichtig ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--brass-600)", flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12" /></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--text-faint)", flexShrink: 0, marginTop: 2 }}><circle cx="12" cy="12" r="9" /></svg>
                  )}
                  <span style={{ color: entry.wichtig ? "var(--text)" : "var(--text-soft)" }}>
                    {entry.wichtig && <strong style={{ fontWeight: 600 }}>{entry.item}</strong>}
                    {!entry.wichtig && entry.item}
                  </span>
                </Reveal>
              ))}
            </ul>
            <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--text-faint)" }}>
              ● = empfohlen &nbsp;✓ = Pflicht / Darf nicht fehlen
            </p>
          </div>
        </div>
      </section>

      {/* Klima */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Dalmatinisches Klima</span>
            <h2 className="section-title">Worauf ihr euch klimatisch einstellt.</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {klima.map((k, i) => (
              <Reveal key={k.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={k.icon} /></span>
                  <h3>{k.title}</h3>
                  <p>{k.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nützliche Apps */}
      <section className="section surface-navy">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Digital vorbereitet</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Diese Apps retten den Törn.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.4rem" }}>
                <p>
                  <strong>Windy</strong> zeigt stündliche Windvorhersagen für die gesamte
                  Adria – unverzichtbar für die Tagesplanung. <strong>mySea</strong>
                  ermöglicht Bojen-Reservierungen im Nationalpark.
                  <strong> Navionics</strong> oder die Garmin ActiveCaptain-App liefern
                  detaillierte Seekarten für Dalmatien, auch offline.
                </p>
                <p>
                  Alle vor Abreise herunterladen und Offline-Karten sichern –
                  Mobilfunk ist in entlegenen Buchten schwach.
                  Das WLAN der Miss Moneypenny hilft dabei.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2} className="grid-2" style={{ gap: "1.2rem" }}>
              {[
                { name: "Windy", zweck: "Windvorhersage Adria", icon: "wind" as const },
                { name: "mySea", zweck: "Bojen reservieren", icon: "anchor" as const },
                { name: "Navionics", zweck: "Seekarten offline", icon: "waves" as const },
                { name: "maps.me", zweck: "Landkarten offline", icon: "pin" as const },
              ].map((app) => (
                <article key={app.name} className="feature">
                  <span className="ic"><Icon name={app.icon} /></span>
                  <h3>{app.name}</h3>
                  <p>{app.zweck}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow centered">Bereit fürs Ablegen?</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Verfügbarkeit der Miss Moneypenny prüfen.</h2>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/kontakt" className="btn btn-primary">Termin anfragen</Link>
              <Link href="/segeltorn-packliste" className="btn btn-outline">Allgemeine Packliste</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand image="/images/region-sibenik.png" />
    </>
  );
}
