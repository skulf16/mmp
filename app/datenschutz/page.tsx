import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Bond Yachting – Miss Moneypenny.",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="surface-navy" style={{ paddingTop: "calc(var(--header-h) + 3rem)", paddingBottom: "2.5rem" }}>
        <div className="container container-narrow">
          <span className="eyebrow on-dark">Rechtliches</span>
          <h1 style={{ color: "#fff", marginTop: "1rem", fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>Datenschutz&shy;erklärung</h1>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow prose">
          <p style={{ padding: "1rem 1.2rem", background: "var(--paper-2)", borderLeft: "3px solid var(--brass)", borderRadius: "2px" }}>
            <strong>Hinweis:</strong> Dies ist ein Platzhalter-Text. Bitte lassen Sie eine
            vollständige, DSGVO-konforme Datenschutzerklärung erstellen (z. B. durch einen
            Generator oder Rechtsbeistand), bevor die Seite online geht.
          </p>

          <h2 style={{ marginTop: "2.5rem" }}>1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist {site.brand},
            [Anschrift]. Kontakt: <a href={`mailto:${site.email}`} style={{ color: "var(--brass-600)" }}>{site.email}</a>.
          </p>

          <h2 style={{ marginTop: "2rem" }}>2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>
            Wenn Sie uns über das Anfrageformular kontaktieren, verarbeiten wir die von Ihnen
            angegebenen Daten (Name, E-Mail-Adresse, ggf. Telefon und Ihre Nachricht)
            ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1
            lit. b und f DSGVO.
          </p>

          <h2 style={{ marginTop: "2rem" }}>3. Server-Logfiles</h2>
          <p>
            Der Hosting-Anbieter erhebt und speichert automatisch Informationen in
            Server-Logfiles, die Ihr Browser übermittelt. Eine Zusammenführung dieser Daten
            mit anderen Datenquellen findet nicht statt.
          </p>

          <h2 style={{ marginTop: "2rem" }}>4. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Zudem besteht ein
            Beschwerderecht bei einer Aufsichtsbehörde.
          </p>

          <h2 style={{ marginTop: "2rem" }}>5. Cookies & Reichweitenmessung</h2>
          <p>
            [Hier die tatsächlich eingesetzten Cookies, Analyse- und Kartendienste
            beschreiben, z. B. Einbindung von Karten oder Web-Analyse, inkl.
            Einwilligungsmanagement.]
          </p>
        </div>
      </section>
    </>
  );
}
