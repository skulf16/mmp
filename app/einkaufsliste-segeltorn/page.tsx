import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ArticleByline from "@/components/ArticleByline";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Einkaufsliste Segeltörn – Proviant für eine Woche | Miss Moneypenny",
  description:
    "Einkaufsliste für einen Segeltörn: Was ihr vor Abfahrt besorgen solltet, was ihr in kroatischen Supermärkten findet und wie ihr Proviant für 8 Personen eine Woche plant.",
};

const kategorien = [
  {
    titel: "Frühstück",
    icon: "sun" as const,
    items: [
      "Brot & Brötchen (täglich frisch in Häfen)",
      "Aufschnitt & Käse (gut im Kühlschrank haltbar)",
      "Marmelade & Nussbutter",
      "Müsli & Haferflocken",
      "UHT-Milch oder Haferdrink (haltbar)",
      "Eier (mind. 12–16 Stück)",
      "Frischer Kaffee & Tee",
      "Fruchtsäfte & Wasser (6x 1,5 l als Reserve)",
    ],
  },
  {
    titel: "Mittag & Snacks",
    icon: "waves" as const,
    items: [
      "Knäckebrot & Cracker",
      "Hummus & Dips (Kühlschrank)",
      "Oliven (Kroatien: am Markt kaufen)",
      "Thunfisch & Sardinen in Dosen",
      "Nüsse & Trockenfrüchte",
      "Energieriegel für lange Etappen",
      "Obst (Tomaten, Paprika, Gurke – hält gut)",
      "Pesto & Aufstriche",
    ],
  },
  {
    titel: "Abendessen (Basis)",
    icon: "sparkle" as const,
    items: [
      "Nudeln (3–4 Packungen)",
      "Reis & Couscous",
      "Tomatensoße in Gläsern",
      "Linsen & Kichererbsen (Dose)",
      "Zwiebeln, Knoblauch, Chili",
      "Olivenöl (mind. 0,5 l)",
      "Gewürzmischungen (Salz, Pfeffer, Paprika)",
      "Brühwürfel & Kokosmilch",
    ],
  },
  {
    titel: "Fleisch & Fisch",
    icon: "anchor" as const,
    items: [
      "Chorizo & Salami (Trockenware, lang haltbar)",
      "Vakuumiertes Fleisch für die ersten Tage",
      "Frischen Fisch besser täglich im Hafen kaufen",
      "Grillgut für Konobas-Abende (optional)",
    ],
  },
  {
    titel: "Getränke",
    icon: "droplet" as const,
    items: [
      "Wasser (10–15 Liter als Reserve – Wassermacher an Bord)",
      "Bier (Karton – kroatisches Ožujsko oder Karlovačko)",
      "Wein (dalmatinischer Rotwein im Kanister)",
      "Softdrinks & Tonic",
      "Energydrinks für frühe Wachzeiten",
      "Säfte & Eistee",
    ],
  },
  {
    titel: "Küche & Hygiene",
    icon: "leaf" as const,
    items: [
      "Spülmittel & Schwämme",
      "Küchenpapier & Alufolie",
      "Ziplock-Beutel (für Reste)",
      "Mülltüten (in Häfen entsorgen)",
      "Grillanzünder (falls Grill an Bord)",
      "Antibakterielles Handgel",
    ],
  },
];

const tipps = [
  {
    icon: "anchor" as const,
    title: "In Šibenik einkaufen",
    text: "Der Konzum-Supermarkt in Šibenik ist gut sortiert. Tommy und Plodine sind weitere Ketten in Dalmatien. Vor Abfahrt vollständig eindecken – im Nationalpark gibt es kaum Versorgung.",
  },
  {
    icon: "sparkle" as const,
    title: "Märkte nutzen",
    text: "Frisches Obst, Gemüse, Oliven und Käse kauft ihr am besten auf Wochenmärkten in den Hafenstädten. Qualität und Preis sind oft deutlich besser als im Supermarkt.",
  },
  {
    icon: "droplet" as const,
    title: "Fisch im Hafen",
    text: "Frischen Fisch kauft ihr direkt von Fischern am Kai – günstiger und frischer als im Laden. Beste Zeit: früh morgens. In den Kornaten gibt es Konobas mit Fangfrisch-Küche.",
  },
  {
    icon: "leaf" as const,
    title: "Kühlschrank-Management",
    text: "Der Kühlschrank der Miss Moneypenny läuft dank Solar dauerhaft. Trotzdem: haltbare Lebensmittel für die hinteren Tage, frisches zuerst verbrauchen. Fisch immer am selben Tag.",
  },
];

export default function EinkaufslisteSegeltornPage() {
  return (
    <>
      <PageHero
        eyebrow="Proviant"
        title="Einkaufsliste Segeltörn"
        lede="Was für eine Woche an Bord in den Einkaufswagen kommt – Frühstück, Mittag, Abendessen und Getränke für 6–8 Personen."
        image="/images/yacht-galley.jpg"
        imageAlt="Gut ausgestattete Pantry der Miss Moneypenny mit Lebensmitteln"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/segeltorn-planen" }, { label: "Einkaufsliste" }]}
      />

      <ArticleByline slug="einkaufsliste-segeltorn" />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Bevor ihr ablegt</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Einmal groß einkaufen, dann entspannt genießen.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Die erste große Einkaufsrunde macht ihr am Anreisetag in Šibenik –
                  Šibenik hat gut sortierte Supermärkte und einen Wochenmarkt. Was
                  ihr danach in Häfen und auf Inseln einkauft, ergänzt den Grundstock.
                </p>
                <p>
                  Dank des dauerhaft laufenden Kühlschranks (Solar) bleibt Frisches
                  lange gut. Den Wassermacher nutzt ihr für Kochen und Trinken –
                  keine Wasserflaschen schleppen.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill"><Icon name="sun" style={{ width: 15 }} /> Kühlschrank läuft mit Solar</span>
                <span className="tag-pill">Wassermacher an Bord</span>
                <span className="tag-pill">Vollküche vorhanden</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-salon.jpg" alt="Salon und Pantrybereich der Miss Moneypenny" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Listen */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Die vollständige Liste</span>
            <h2 className="section-title">Proviant für eine Woche an Bord.</h2>
            <p className="lede">Mengen für 6–8 Personen / 7 Tage. Fisch und Brot immer frisch vor Ort kaufen.</p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem", gap: "3rem" }}>
            {kategorien.map((kat, i) => (
              <Reveal key={kat.titel} delay={((i % 2) + 1) as 1 | 2}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
                    <span className="ic" style={{ width: 36, height: 36, flexShrink: 0 }}><Icon name={kat.icon} /></span>
                    <h3 style={{ fontSize: "1.15rem" }}>{kat.titel}</h3>
                  </div>
                  <ul style={{ listStyle: "none", display: "grid", gap: 0 }}>
                    {kat.items.map((item) => (
                      <li key={item} style={{ display: "flex", gap: "0.7rem", alignItems: "flex-start", padding: "0.55rem 0", borderBottom: "1px solid var(--sand-line)", fontSize: "0.92rem", color: "var(--text-soft)" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--brass-600)", flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Einkauftipps */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Vor Ort</span>
            <h2 className="section-title">Einkaufen in Kroatien – so geht's.</h2>
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

      {/* Weiterführend */}
      <section className="section">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow centered">Mehr Vorbereitung</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Speiseplan & Packliste.</h2>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/speiseplan-segeltorn" className="btn btn-primary">Speiseplan ansehen</Link>
              <Link href="/segeltorn-packliste" className="btn btn-outline">Zur Packliste</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand image="/images/yacht-galley.jpg" />
    </>
  );
}
