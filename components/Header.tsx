"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { ArrowRight } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const mobileLinks = [
    { label: "Start", href: "/" },
    ...nav.flatMap((item) =>
      item.sub ? item.sub.map((s) => ({ label: s.label, href: s.href })) : [{ label: item.label, href: item.href }]
    ),
  ];

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container-wide">
        <Link href="/" className="brand" aria-label={`${site.name} – Startseite`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-mark-light.png" alt={`${site.name} – ${site.brand}`} className="brand-logo" />
        </Link>

        <nav className="nav" aria-label="Hauptnavigation">
          {nav.map((item) =>
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

        <div className="nav-cta">
          <Link href="/kontakt" className="btn btn-primary">
            Verfügbarkeit anfragen <ArrowRight />
          </Link>
        </div>

        <button
          className={`burger ${open ? "open" : ""}`}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-nav ${open ? "open" : ""}`}>
        <nav aria-label="Mobile Navigation">
          {mobileLinks.map((l, i) => (
            <Link key={l.href} href={l.href}>
              {l.label} <small>{String(i + 1).padStart(2, "0")}</small>
            </Link>
          ))}
          <Link href="/kontakt" className="btn btn-primary">
            Verfügbarkeit anfragen <ArrowRight />
          </Link>
        </nav>
      </div>
    </header>
  );
}
