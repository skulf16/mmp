import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone, Calendar } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Verfügbarkeit anfragen – Katamaran-Charter ab Šibenik",
  description:
    "Wunschtermin nennen, Angebot erhalten: Fragt die Verfügbarkeit der Miss Moneypenny (Lagoon 400 S2) ab Šibenik an – Antwort innerhalb von 24 Stunden.",
  openGraph: {
    title: "Verfügbarkeit anfragen – Miss Moneypenny ab Šibenik",
    description: "Wunschtermin nennen, Angebot erhalten – Antwort innerhalb von 24 Stunden.",
    images: [{ url: "/images/yacht-aerial-topdown.jpg", width: 1200, height: 630, alt: "Luftaufnahme der Miss Moneypenny von oben – Katamaran-Charter Šibenik" }],
  },
};

const ldContactPage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Kontakt – Miss Moneypenny Katamaran-Charter",
  "url": "https://chartern-in-kroatien.de/kontakt",
  "description": "Anfrage zur Verfügbarkeit der Miss Moneypenny – Antwort innerhalb von 24 Stunden.",
  "publisher": { "@id": "https://chartern-in-kroatien.de/#organization" },
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldContactPage) }}
      />
      <PageHero
        eyebrow="Kontakt"
        title="Verfügbarkeit anfragen"
        lede="Erzählen Sie uns von Ihrem Wunschtörn – wir prüfen die Verfügbarkeit und melden uns mit einem persönlichen Angebot."
        image="/images/yacht-aerial-topdown.jpg"
        imageAlt="Luftaufnahme der Miss Moneypenny über türkisem Wasser"
        crumbs={[{ label: "Start", href: "/" }, { label: "Kontakt" }]}
      />

      <section className="section">
        <div className="container">
          <div className="split align-start" style={{ gridTemplateColumns: "1.6fr 1fr" }}>
            <Reveal as="div">
              <span className="eyebrow">Anfrage</span>
              <h2 className="section-title" style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                Schreiben Sie uns.
              </h2>
              <ContactForm />
            </Reveal>

            <Reveal as="aside" delay={1} className="contact-aside">
              <div>
                <span className="eyebrow">Direkt erreichbar</span>
              </div>
              <div className="contact-item">
                <span className="ic"><MapPin /></span>
                <div><h4>Heimathafen</h4><p>{site.base}</p></div>
              </div>
              <div className="contact-item">
                <span className="ic"><Mail /></span>
                <div><h4>E-Mail</h4><p><a href={`mailto:${site.email}`}>{site.email}</a></p></div>
              </div>
              <div className="contact-item">
                <span className="ic"><Phone /></span>
                <div><h4>Telefon</h4><p><a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a></p></div>
              </div>
              <div className="contact-item">
                <span className="ic"><Calendar /></span>
                <div><h4>Antwortzeit</h4><p>{site.responseTime}</p></div>
              </div>

              <div className="feature" style={{ marginTop: "1rem" }}>
                <h3 style={{ fontSize: "1.15rem" }}>Online-Buchung in Kürze</h3>
                <p style={{ fontSize: "0.92rem" }}>
                  Der komfortable Buchungsfunnel mit Live-Verfügbarkeit und Direktbuchung
                  folgt bald. Bis dahin freuen wir uns über Ihre persönliche Anfrage.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
