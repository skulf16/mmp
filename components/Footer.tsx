import Link from "next/link";
import { site } from "@/lib/site";
import { MapPin, Mail, Phone } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container container-wide">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label={`${site.name} – Startseite`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-mark-light.png" alt={`${site.name} – ${site.brand}`} className="brand-logo footer-logo" />
            </Link>
            <p className="footer-about">
              Autarkes Segelabenteuer auf der kroatischen Adria. Die Lagoon 400 S2
              „Miss Moneypenny“ – mit Wassermacher und Solaranlage für grenzenlose
              Freiheit ab Šibenik.
            </p>
          </div>

          <div className="footer-col">
            <h4>Entdecken</h4>
            <Link href="/die-yacht">Die Yacht</Link>
            <Link href="/charter-infos">Charter-Infos</Link>
            <Link href="/katamaran-mieten-kroatien">Katamaran mieten</Link>
            <Link href="/kontakt">Anfragen</Link>
          </div>

          <div className="footer-col">
            <h4>Reviere</h4>
            <Link href="/revier-sibenik">Revier Šibenik</Link>
            <Link href="/segeln-in-den-kornaten">Kornaten</Link>
            <Link href="/staedte-dalmatiens">Städte Dalmatiens</Link>
          </div>

          <div className="footer-col">
            <h4>Kontakt</h4>
            <p style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", padding: "0.4rem 0" }}>
              <MapPin style={{ width: 18, color: "var(--brass-300)", flex: "none", marginTop: 3 }} />
              {site.base}
            </p>
            <p style={{ display: "flex", gap: "0.6rem", alignItems: "center", padding: "0.4rem 0" }}>
              <Mail style={{ width: 18, color: "var(--brass-300)", flex: "none" }} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p style={{ display: "flex", gap: "0.6rem", alignItems: "center", padding: "0.4rem 0" }}>
              <Phone style={{ width: 18, color: "var(--brass-300)", flex: "none" }} />
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.brand} · Miss Moneypenny. Alle Rechte vorbehalten.</span>
          <span style={{ display: "flex", gap: "1.4rem" }}>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </span>
        </div>
      </div>
      <span className="footer-watermark" aria-hidden="true">Adria</span>
    </footer>
  );
}
