import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Bond Yachting – Miss Moneypenny.",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <>
      <section className="surface-navy" style={{ paddingTop: "calc(var(--header-h) + 3rem)", paddingBottom: "2.5rem" }}>
        <div className="container container-narrow">
          <span className="eyebrow on-dark">Rechtliches</span>
          <h1 style={{ color: "#fff", marginTop: "1rem", fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>Impressum</h1>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow prose">
          <p style={{ padding: "1rem 1.2rem", background: "var(--paper-2)", borderLeft: "3px solid var(--brass)", borderRadius: "2px" }}>
            <strong>Hinweis:</strong> Dies ist ein Platzhalter. Bitte ergänzen Sie die
            rechtlich verpflichtenden Angaben gemäß § 5 DDG / § 18 MStV mit Ihren echten Daten.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>Angaben gemäß § 5 DDG</h2>
          <p>
            {site.brand}<br />
            [Inhaber / Geschäftsführung]<br />
            [Straße und Hausnummer]<br />
            [PLZ Ort]<br />
            [Land]
          </p>

          <h2 style={{ marginTop: "2rem" }}>Kontakt</h2>
          <p>
            Telefon: {site.phone}<br />
            E-Mail: <a href={`mailto:${site.email}`} style={{ color: "var(--brass-600)" }}>{site.email}</a>
          </p>

          <h2 style={{ marginTop: "2rem" }}>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: [USt-IdNr.]</p>

          <h2 style={{ marginTop: "2rem" }}>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>[Name]<br />[Anschrift]</p>

          <h2 style={{ marginTop: "2rem" }}>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit. Wir sind nicht verpflichtet und nicht bereit, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </section>
    </>
  );
}
