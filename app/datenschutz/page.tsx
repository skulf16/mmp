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
            <strong>Hinweis:</strong> Die Abschnitte zu Analyse und Werbung sind auf die
            tatsächlich eingesetzten Dienste abgestimmt. Bitte ergänzen Sie noch die
            offenen Angaben (z. B. Anschrift des Verantwortlichen) und lassen Sie die
            Erklärung vor dem Livegang rechtlich prüfen.
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

          <h2 style={{ marginTop: "2rem" }}>5. Einwilligung & Cookies</h2>
          <p>
            Analyse- und Marketing-Dienste werden erst geladen, nachdem Sie über
            unseren Cookie-Banner eingewilligt haben (Google Consent Mode v2).
            Ohne Einwilligung werden keine Analyse- oder Werbe-Cookies gesetzt und
            keine entsprechenden Daten an Google übertragen. Technisch notwendige
            Funktionen bleiben stets aktiv. Ihre Einwilligung ist freiwillig und
            jederzeit mit Wirkung für die Zukunft widerrufbar – über den Link
            „Cookie-Einstellungen" im Seitenfuß. Rechtsgrundlage für einwilligungs&shy;pflichtige
            Dienste ist Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TDDDG.
          </p>

          <h2 style={{ marginTop: "2rem" }}>6. Google Analytics 4</h2>
          <p>
            Nach Ihrer Einwilligung nutzen wir Google Analytics 4, einen Dienst der
            Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland),
            zur statistischen Auswertung der Websitenutzung (z. B. aufgerufene Seiten,
            Verweildauer, ungefähre Herkunft). IP-Adressen werden von Google gekürzt
            bzw. anonymisiert verarbeitet. Dabei kann es zu einer Übermittlung von
            Daten an Google-Server, auch in die USA, kommen; Google ist unter dem
            EU-US Data Privacy Framework zertifiziert, ergänzend gelten
            Standardvertragsklauseln.
          </p>

          <h2 style={{ marginTop: "2rem" }}>7. Google Ads & Conversion-Messung</h2>
          <p>
            Zur Erfolgsmessung unserer Werbeanzeigen setzen wir – ebenfalls nur nach
            Ihrer Einwilligung – Google Ads ein. Dabei wird erfasst, ob eine
            Interaktion (z. B. das Absenden einer Anfrage) auf eine unserer Anzeigen
            zurückgeht. Für den optimierten Abgleich (Enhanced Conversions) können
            Angaben aus dem Anfrageformular (E-Mail-Adresse, Telefonnummer) bereits
            in Ihrem Browser mit dem Verfahren SHA-256 unumkehrbar gehasht und nur in
            dieser pseudonymisierten Form an Google übermittelt werden.
          </p>

          <h2 style={{ marginTop: "2rem" }}>8. Serverseitiges Tag-Management</h2>
          <p>
            Die vorgenannten Dienste werden über einen serverseitigen Google Tag
            Manager eingebunden, den wir auf einem eigenen Server innerhalb der EU
            betreiben. Anfragen laufen zunächst über unsere eigene Domain, wodurch
            wir kontrollieren, welche Daten in welchem Umfang an die genannten
            Drittanbieter weitergegeben werden. Eine Datenübertragung an Google
            findet auch hier nur im Rahmen Ihrer Einwilligung statt.
          </p>
        </div>
      </section>
    </>
  );
}
