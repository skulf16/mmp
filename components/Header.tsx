"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { ArrowRight } from "./Icons";
import { getLocale, alternatePath, t } from "@/lib/i18n";

function GlobeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" />
    </svg>
  );
}

const switchStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  fontSize: "0.78rem",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  textDecoration: "none",
  color: "rgba(255, 255, 255, 0.9)",
  padding: "0.4rem 0.7rem",
  border: "1px solid rgba(255, 255, 255, 0.45)",
  borderRadius: 999,
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const alt = alternatePath(pathname);
  const homeHref = locale === "en" ? "/en" : "/";
  const dict = t[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" || href === "/en" ? pathname === href : pathname.startsWith(href);

  const mobileLinks =
    locale === "en"
      ? [{ label: "Home", href: "/en" }, ...dict.nav]
      : [
          { label: "Start", href: "/" },
          ...nav.flatMap((item) =>
            item.sub ? item.sub.map((s) => ({ label: s.label, href: s.href })) : [{ label: item.label, href: item.href }]
          ),
        ];

  const langSwitch = (
    <Link href={alt.href} hrefLang={alt.locale} aria-label={dict.switchAria} style={switchStyle}>
      <GlobeIcon /> {dict.switchTo}
    </Link>
  );

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container-wide">
        <Link href={homeHref} className="brand" aria-label={`${site.name} – ${locale === "en" ? "Home" : "Startseite"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-mark-light.png" alt={`${site.name} – ${site.brand}`} className="brand-logo" />
        </Link>

        <nav className="nav" aria-label={locale === "en" ? "Main navigation" : "Hauptnavigation"}>
          {locale === "en"
            ? dict.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))
            : nav.map((item) =>
                item.sub ? (
                  <div className="has-sub" key={item.label}>
                    <Link
                      href={item.href}
                      className="nav-link"
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                    <div className="subnav" role="menu">
                      {item.sub.map((s) => (
                        <Link key={s.href} href={s.href} role="menuitem">
                          {s.label}
                          <span>{s.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-link"
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )
              )}
        </nav>

        <div className="nav-cta" style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
          {langSwitch}
          <Link href="/kontakt" className="btn btn-primary">
            {dict.cta} <ArrowRight />
          </Link>
        </div>

        <button
          className={`burger ${open ? "open" : ""}`}
          aria-label={
            locale === "en"
              ? open
                ? "Close menu"
                : "Open menu"
              : open
              ? "Menü schließen"
              : "Menü öffnen"
          }
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-nav ${open ? "open" : ""}`}>
        <nav aria-label={locale === "en" ? "Mobile navigation" : "Mobile Navigation"}>
          {mobileLinks.map((l, i) => (
            <Link key={l.href} href={l.href}>
              {l.label} <small>{String(i + 1).padStart(2, "0")}</small>
            </Link>
          ))}
          <div style={{ marginTop: "1.2rem", display: "flex", gap: "0.9rem", alignItems: "center", flexWrap: "wrap" }}>
            {langSwitch}
            <Link href="/kontakt" className="btn btn-primary">
              {dict.cta} <ArrowRight />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
