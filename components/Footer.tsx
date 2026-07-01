"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { MapPin, Mail, Phone } from "./Icons";
import { getLocale, t } from "@/lib/i18n";
import { CONSENT_REOPEN_EVENT } from "@/lib/analytics";

export default function Footer() {
  const locale = getLocale(usePathname());
  const dict = t[locale];
  const homeHref = locale === "en" ? "/en" : "/";
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container container-wide">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href={homeHref} className="brand" aria-label={`${site.name} – ${locale === "en" ? "Home" : "Startseite"}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-mark-light.png" alt={`${site.name} – ${site.brand}`} className="brand-logo footer-logo" />
            </Link>
            <p className="footer-about">{dict.footerAbout}</p>
          </div>

          {dict.footerCols.map((col) => (
            <div className="footer-col" key={col.heading}>
              <h4>{col.heading}</h4>
              {col.links.map((l) => (
                <Link key={l.href + l.label} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="footer-col">
            <h4>{locale === "en" ? "Contact" : "Kontakt"}</h4>
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
          <span>© {year} {site.brand} · Miss Moneypenny. {dict.rights}</span>
          <span style={{ display: "flex", gap: "1.4rem" }}>
            {dict.legal.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT))}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                font: "inherit",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              {locale === "en" ? "Cookie settings" : "Cookie-Einstellungen"}
            </button>
          </span>
        </div>
      </div>
      <span className="footer-watermark" aria-hidden="true">Adria</span>
    </footer>
  );
}
