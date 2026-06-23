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
          <h2 style={{ marginTop: "0" }}>Angaben gemäß § 5 DDG</h2>
          <p>
            Bond Yachting d.o.o.<br />
            Geschäftsführer: Michael Steffens<br />
            Trtarska 75A<br />
            22000 Šibenik<br />
            Kroatien
          </p>

          <h2 style={{ marginTop: "2rem" }}>Kontakt</h2>
          <p>
            Telefon: {site.phone}<br />
            E-Mail: <a href={`mailto:${site.email}`} style={{ color: "var(--brass-600)" }}>{site.email}</a>
          </p>

          <h2 style={{ marginTop: "2rem" }}>Registereintrag</h2>
          <p>
            Eingetragen beim Handelsgericht in Zadar, ständiger Sitz in Šibenik<br />
            Registernummer (MBS): 110110643<br />
            OIB: 45138215944
          </p>

          <h2 style={{ marginTop: "2rem" }}>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: HR451388215944</p>

          <h2 style={{ marginTop: "2rem" }}>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Michael Steffens<br />
            Bond Yachting d.o.o.<br />
            Trtarska 75A<br />
            22000 Šibenik, Kroatien
          </p>

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
