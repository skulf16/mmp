import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ArticleByline from "@/components/ArticleByline";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import FaqSection from "@/components/FaqSection";
import { Icon } from "@/components/Icons";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Speiseplan Segeltörn – 7 Tage Bordküche | Miss Moneypenny",
  description:
    "Speiseplan für einen Segeltörn: Was kocht man auf einem Katamaran? 7 Tage Menüplanung für die Bordküche – einfach, lecker und mit wenig Aufwand.",
};

const tage = [
  {
    tag: "Tag 1 · Samstag",
    fruehstueck: "Brot mit Aufschnitt & Käse, Kaffee",
    mittag: "Sandwiches vom Supermarkt (Anreisetag)",
    abend: "Pasta mit Tomatensoße & Rucola – einfach, schnell, alle satt",
    tipp: "Heute kümmert sich keiner um großes Kochen – ihr kommt gerade an.",
  },
  {
    tag: "Tag 2 · Sonntag",
    fruehstueck: "Rührei mit Tomaten, Brot, Kaffee",
    mittag: "Thunfisch-Cracker mit Oliven & Käse",
    abend: "Grillabend in Konoba (freiwillig) – oder Risotto mit Meeresfrüchten",
    tipp: "Heute habt ihr Zeit. Erste Nacht vor Anker – Aperol auf dem Cockpit.",
  },
  {
    tag: "Tag 3 · Montag",
    fruehstueck: "Müsli mit Milch, Obst, Kaffee",
    mittag: "Reste vom Vortag, Knäckebrot, Dips",
    abend: "Frischer Fisch aus der Konoba Lavsa (Kornaten-Tipp)",
    tipp: "In Lavsa gibt es eine kleine Konoba direkt am Bojenfeld – unbedingt hingehen.",
  },
  {
    tag: "Tag 4 · Dienstag",
    fruehstueck: "Brot mit Marmelade & Honig, Käse, Kaffee",
    mittag: "Nudelsalat mit Thunfisch (kalt, perfekt für warme Tage)",
    abend: "Chili sin Carne oder Linsensuppe – macht sich von selbst",
    tipp: "Heute ist Telašćica – langer Badetag. Abends Wein auf der Badeplattform.",
  },
  {
    tag: "Tag 5 · Mittwoch",
    fruehstueck: "Omelette mit Paprika & Zwiebeln, Kaffee",
    mittag: "Markt in Murter – frisches Obst, Käse, Oliven",
    abend: "Grillabend an Deck (wenn Grill an Bord) – Gemüse & Chorizo",
    tipp: "In Murter gibt es einen guten Markt und Fischstand am Hafen.",
  },
  {
    tag: "Tag 6 · Donnerstag",
    fruehstueck: "Brot mit Aufschnitt, Kaffee",
    mittag: "Couscous-Salat mit Gurke, Tomaten & Feta",
    abend: "Pasta Aglio e Olio mit Sardellen – das Pantry-Gericht schlechthin",
    tipp: "Vorletzter Abend – was im Kühlschrank noch da ist, kommt auf den Tisch.",
  },
  {
    tag: "Tag 7 · Freitag",
    fruehstueck: "Alles verbrauchen: Reste, Brot, Obst, Kaffee",
    mittag: "Leicht: Cracker, Aufschnitt, Obst",
    abend: "Abschlussessen im Restaurant in Šibenik",
    tipp: "Check-out morgen – heute Abend feiert ihr. Gutes Restaurant in Šibenik buchen.",
  },
];

const bordkuechenTipps = [
  {
    icon: "anchor" as const,
    title: "Eintöpfe vor Etappen",
    text: "An Segeltagen mit Welle kocht niemand gerne. Eintöpfe, Suppen oder Pasta am Vorabend vorbereiten – kalt oder lauwarm schmeckt vieles auf See genauso gut.",
  },
  {
    icon: "droplet" as const,
    title: "Große Portion, einmal kochen",
    text: "Reste sind auf dem Törn Gold wert. Wer abends für 8 kocht, denkt an Mittag von morgen. Das spart Aufwand und Spülzeit.",
  },
  {
    icon: "leaf" as const,
    title: "Konobas einplanen",
    text: "2–3 Konoba-Abende pro Woche sind realistisch und Teil des Erlebnisses. Das entlastet die Bordküche und zeigt euch, wie gut die dalmatinische Küche wirklich ist.",
  },
  {
    icon: "sun" as const,
    title: "Frühstück: einfach, gut",
    text: "Das beste Frühstück auf dem Törn: frisches Brot, Tomaten, Käse, Kaffee, Meerblick. Aufwand minimal, Genuss maximal. Kein Vergleich mit jedem Hotel.",
  },
];

const facts = [
  "Die Pantry der Lagoon 400 S2 ist mit zwei Herdplatten, Backofen, Kühlschrank und Gefrierfach sowie Vollgeschirr ausgestattet.",
  "Der Speiseplan deckt sieben Tage mit jeweils Frühstück, Mittag- und Abendessen ab und ist auf Genuss mit minimalem Aufwand ausgelegt.",
  "Frühstück und Mittagessen bleiben bewusst einfach – etwa Brot, Käse, Rührei, Müsli, Salate oder Cracker.",
  "Abends wechseln sich unkomplizierte Bordgerichte wie Pasta, Risotto, Chili sin Carne oder Couscous-Salat mit Konoba- und Restaurantbesuchen ab.",
  "Zwei bis drei Konoba-Abende pro Woche sind realistisch und entlasten die Bordküche.",
  "Der Wochenplan ist nur ein Rahmen und lässt sich flexibel nach Konoba-Abenden und Marktfunden anpassen.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Wie gut ist die Bordküche der Miss Moneypenny ausgestattet?",
    a: "Die Pantry der Lagoon 400 S2 ist kein Campingkocher-Kompromiss. Sie verfügt über zwei Herdplatten, einen Backofen, einen Kühlschrank mit Gefrierfach und Vollgeschirr. Ihr könnt damit alles kochen, was zuhause auch auf den Tisch kommt.",
  },
  {
    q: "Was kocht man auf einem Segeltörn am besten?",
    a: "An Bord schlägt einfach aufwändig. Bewährt haben sich Pasta, Risotto, Eintöpfe und Salate, die sich schnell zubereiten lassen. Wer auf See stundenlang kocht, verbringt weniger Zeit auf der Badeplattform – deshalb ist der Speiseplan auf Genuss mit minimalem Aufwand ausgerichtet.",
  },
  {
    q: "Muss man jeden Abend an Bord kochen?",
    a: "Nein. Zwei bis drei Konoba-Abende pro Woche sind realistisch und Teil des Erlebnisses. Sie entlasten die Bordküche und zeigen, wie gut die dalmatinische Küche wirklich ist. Beim Speiseplan sind solche Konoba- und Restaurantbesuche bereits eingeplant.",
  },
  {
    q: "Wie spart man sich auf dem Törn Kochaufwand?",
    a: "An Segeltagen mit Welle kocht niemand gerne, deshalb lohnt es sich, Eintöpfe, Suppen oder Pasta am Vorabend vorzubereiten – vieles schmeckt kalt oder lauwarm genauso gut. Wer einmal eine große Portion kocht, hat am nächsten Mittag gleich die Reste, was Aufwand und Spülzeit spart.",
  },
  {
    q: "Ist der Speiseplan verbindlich?",
    a: "Nein, der Sieben-Tage-Plan ist nur ein Rahmen. Er lässt sich flexibel nach Konoba-Abenden und Marktfunden anpassen. Am letzten Tag werden bewusst die Reste verbraucht, bevor es zum Abschlussessen ins Restaurant geht.",
  },
];

export default function SpeiseplanSegeltornPage() {
  return (
    <>
      <PageHero
        eyebrow="Bordküche"
        title="Speiseplan Segeltörn"
        lede="7 Tage, 3 Mahlzeiten, eine Pantry – was ihr täglich kocht, ohne viel Aufwand und mit viel Geschmack."
        image="/images/yacht-galley.jpg"
        imageAlt="Pantry der Miss Moneypenny – vollständig ausgestattet"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/segeltorn-planen" }, { label: "Speiseplan" }]}
      />

      <ArticleByline slug="speiseplan-segeltorn" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">An Bord kochen</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Die Pantry der Miss Moneypenny ist vollständig ausgestattet.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Zwei Herdplatten, Backofen, Kühlschrank, Gefrierfach – die Pantry der
                  Lagoon 400 S2 ist kein Campingkocher-Kompromiss. Ihr könnt alles
                  kochen, was zuhause auch auf den Tisch kommt.
                </p>
                <p>
                  Trotzdem gilt an Bord: einfach schlägt aufwändig. Wer auf See
                  stundenlang steht und kocht, verbringt weniger Zeit auf der
                  Badeplattform. Der Speiseplan hier ist auf Genuss mit minimalem
                  Aufwand ausgerichtet.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill"><Icon name="sun" style={{ width: 15 }} /> 2 Herdplatten + Backofen</span>
                <span className="tag-pill">Kühlschrank mit Gefrierfach</span>
                <span className="tag-pill">Vollgeschirr an Bord</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-cockpit-dining.jpg" alt="Crew beim Essen im Cockpit der Miss Moneypenny" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Wochenplan */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Tag für Tag</span>
            <h2 className="section-title">Sieben Tage Menüplanung.</h2>
            <p className="lede">Flexibel anpassen nach Konoba-Abenden und Marktfunden – das ist nur ein Rahmen.</p>
          </Reveal>
          <div className="steps steps-grid" style={{ marginTop: "3rem" }}>
            {tage.map((tag) => (
              <Reveal key={tag.tag} as="div" className="step">
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--brass-600)", fontWeight: 700 }}>{tag.tag}</span>
                  <div style={{ marginTop: "0.8rem", display: "grid", gap: "0.5rem" }}>
                    <div style={{ display: "flex", gap: "0.6rem", fontSize: "0.91rem" }}>
                      <span style={{ fontWeight: 700, color: "var(--navy-900)", minWidth: "90px" }}>Frühstück</span>
                      <span style={{ color: "var(--text-soft)" }}>{tag.fruehstueck}</span>
                    </div>
                    <div style={{ display: "flex", gap: "0.6rem", fontSize: "0.91rem" }}>
                      <span style={{ fontWeight: 700, color: "var(--navy-900)", minWidth: "90px" }}>Mittag</span>
                      <span style={{ color: "var(--text-soft)" }}>{tag.mittag}</span>
                    </div>
                    <div style={{ display: "flex", gap: "0.6rem", fontSize: "0.91rem" }}>
                      <span style={{ fontWeight: 700, color: "var(--navy-900)", minWidth: "90px" }}>Abend</span>
                      <span style={{ color: "var(--text-soft)" }}>{tag.abend}</span>
                    </div>
                  </div>
                  <p style={{ marginTop: "0.8rem", fontSize: "0.85rem", color: "var(--brass-600)", fontStyle: "italic" }}>↗ {tag.tipp}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Küchentipps */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Bordküchen-Tipps</span>
            <h2 className="section-title">Was das Kochen auf See leichter macht.</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {bordkuechenTipps.map((t, i) => (
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

      <section className="section">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow centered">Verpflegung komplett</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Jetzt fehlt nur noch der Termin.</h2>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/kontakt" className="btn btn-primary">Verfügbarkeit anfragen</Link>
              <Link href="/einkaufsliste-segeltorn" className="btn btn-outline">Zur Einkaufsliste</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Essen an Bord – häufige Fragen.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/speiseplan-segeltorn#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-cockpit-dining.jpg" />
    </>
  );
}
