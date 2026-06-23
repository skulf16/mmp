import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FaqSection from "@/components/FaqSection";
import { Icon, ArrowRight, Check } from "@/components/Icons";
import { extras, faqs, included, steps, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Katamaran-Charter ab Šibenik – Preise & Leistungen",
  description:
    "Was kostet die Miss Moneypenny? Saison-Richtwerte, inklusive Leistungen, Skipper & Extras für euren Katamaran-Törn ab Šibenik – transparent erklärt.",
  openGraph: {
    title: "Katamaran-Charter ab Šibenik – Preise & Leistungen",
    description: "Saison-Richtwerte, inklusive Leistungen, Skipper & Extras für den Katamaran-Törn ab Šibenik.",
    images: [{ url: "/images/yacht-cockpit-dining.jpg", width: 1200, height: 630, alt: "Gedeckter Tisch im Cockpit der Miss Moneypenny" }],
  },
};

const prices = [
  {
    tag: "Nebensaison",
    period: "April · Mai · Oktober",
    amount: "ab 2.500 €",
    per: "pro Woche (Richtwert)",
    points: ["Ruhige Buchten", "Angenehme Temperaturen", "Beste Verfügbarkeit"],
    featured: false,
  },
  {
    tag: "Hauptsaison",
    period: "Juni · September",
    amount: "ab 3.900 €",
    per: "pro Woche (Richtwert)",
    points: ["Verlässlicher Maestral", "Warmes Wasser", "Ideale Balance"],
    featured: true,
  },
  {
    tag: "Hochsaison",
    period: "Juli · August",
    amount: "ab 5.200 €",
    per: "pro Woche (Richtwert)",
    points: ["Sommerwetter garantiert", "Lange Badetage", "Früh reservieren"],
    featured: false,
  },
];

export default function CharterInfosPage() {
  return (
    <>
      <PageHero
        eyebrow="Charter-Infos"
        title="Transparent chartern, entspannt segeln."
        lede="Was im Preis steckt, welche Extras Sie dazubuchen können und wie Ihre Buchung Schritt für Schritt abläuft."
        image="/images/yacht-cockpit-dining.jpg"
        imageAlt="Gedeckter Tisch im Cockpit der Miss Moneypenny mit Blick auf ein Küstendorf"
        crumbs={[{ label: "Start", href: "/" }, { label: "Charter-Infos" }]}
      />

      {/* Inklusive */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Im Charter enthalten</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Sie packen die Badesachen – um den Rest kümmern wir uns.</Reveal>
              <Reveal as="p" delay={2} className="lede" style={{ marginBottom: "1.5rem" }}>
                Damit Ihr Törn ohne Überraschungen beginnt, ist das Wesentliche bereits inklusive.
              </Reveal>
              <Reveal as="ul" delay={2} className="checklist">
                {included.map((item) => (
                  <li key={item}><Check /> {item}</li>
                ))}
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-deck-lagoon.jpg" alt="Seitendeck der Lagoon 400 S2 mit Blick auf eine dalmatinische Stadt" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Preise */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Saison & Preise</span>
            <h2 className="section-title">Richtwerte für Ihre Woche an Bord.</h2>
            <p className="lede">
              Der Charterpreis hängt von Saison und Dauer ab. Die folgenden Werte dienen
              der Orientierung – Ihr persönliches Angebot erhalten Sie auf Anfrage.
            </p>
          </Reveal>

          <div className="grid-3" style={{ marginTop: "3.5rem" }}>
            {prices.map((p, i) => (
              <Reveal key={p.tag} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className={`price-card ${p.featured ? "featured" : ""}`}>
                  <span className="tag">{p.tag}</span>
                  <div className="amount">{p.amount}</div>
                  <div className="per">{p.per}</div>
                  <p style={{ marginTop: "0.4rem", fontSize: "0.85rem", color: p.featured ? "var(--on-dark-soft)" : "var(--text-faint)" }}>
                    {p.period}
                  </p>
                  <ul>
                    {p.points.map((pt) => (
                      <li key={pt}><Check /> {pt}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "1.8rem" }}>
                    <Link href="/kontakt" className={p.featured ? "btn btn-primary" : "btn btn-outline"} style={{ width: "100%", justifyContent: "center" }}>
                      Angebot anfragen
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="form-note center" style={{ marginTop: "1.5rem" }}>
            Alle Werte verstehen sich als unverbindliche Richtwerte pro Woche, zzgl. Kaution.
            Die finale Buchung erfolgt über unsere Charterbasis in Šibenik.
          </Reveal>
        </div>
      </section>

      {/* Extras */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Optionale Extras</span>
            <h2 className="section-title">Maßgeschneidert für Ihren Törn.</h2>
          </Reveal>
          <div className="grid-4" style={{ marginTop: "3rem" }}>
            {extras.map((e, i) => (
              <Reveal key={e.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <article className="feature">
                  <span className="ic"><Icon name={e.icon} /></span>
                  <h3 style={{ fontSize: "1.2rem" }}>{e.title}</h3>
                  <p>{e.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">In vier Schritten</span>
            <h2 className="section-title">So einfach geht Ihre Buchung.</h2>
          </Reveal>
          <div className="steps steps-grid" style={{ marginTop: "3rem" }}>
            {steps.map((s) => (
              <Reveal key={s.title} as="div" className="step">
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="form-note" style={{ marginTop: "1.4rem", color: "var(--on-dark-soft)" }}>
            Der vollständige Buchungs- und Bezahlprozess folgt in Kürze direkt online.
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block center mx-auto">
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="section-title">Gut zu wissen.</h2>
          </Reveal>
          <Reveal as="div" style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/charter-infos#faq`} />
          </Reveal>
        </div>
      </section>

      <CtaBand image="/images/yacht-aerial-topdown.jpg" />
    </>
  );
}
