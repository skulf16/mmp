"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { onScrollFrame, clamp01, prefersReducedMotion } from "./scrollTicker";

export type TriptychPanel = {
  src: string;
  alt: string;
  /** kurze, gesperrte Bildunterschrift, die im Text-Block durchgewechselt wird */
  caption: string;
};

type PinnedTriptychProps = {
  eyebrow: string;
  headline: ReactNode;
  /** Fließtext-Absatz(e) unter der Headline */
  children: ReactNode;
  panels: TriptychPanel[];
};

/**
 * Gepinntes Interieur-Triptychon. Desktop (>=1024px): linke Spalte bleibt
 * sticky stehen, während drei Vollbild-Frames durchgescrubbt werden – pro
 * Drittel wird das aktive Bild eingeblendet, die Bildunterschrift gewechselt
 * und der passende Messing-Fortschrittspunkt aktiviert. Mobil / reduzierte
 * Bewegung: einfach gestapelt, jedes Bild mit eigener Unterschrift.
 */
export default function PinnedTriptych({ eyebrow, headline, children, panels }: PinnedTriptychProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    const desktop = window.matchMedia("(min-width: 1024px)");
    let cleanup: (() => void) | undefined;

    const setup = () => {
      cleanup?.();
      cleanup = undefined;
      if (!desktop.matches || prefersReducedMotion()) {
        setActive(0);
        return;
      }
      const update = () => {
        const total = sec.offsetHeight - window.innerHeight;
        const p = total > 0 ? clamp01(-sec.getBoundingClientRect().top / total) : 0;
        const idx = Math.min(panels.length - 1, Math.floor(p * panels.length));
        setActive((cur) => (cur === idx ? cur : idx));
      };
      cleanup = onScrollFrame(update);
    };

    setup();
    desktop.addEventListener("change", setup);
    return () => {
      desktop.removeEventListener("change", setup);
      cleanup?.();
    };
  }, [panels.length]);

  return (
    <section ref={sectionRef} className="cine-triptych">
      <div className="cine-triptych-sticky container container-wide">
        <div className="cine-triptych-text">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="cine-statement">{headline}</h2>
          <div className="prose cine-triptych-prose">{children}</div>

          <p className="cine-triptych-caption" aria-hidden="true">
            {panels.map((p, i) => (
              <span key={p.caption} className={i === active ? "is-active" : ""}>
                {p.caption}
              </span>
            ))}
          </p>

          <div className="cine-triptych-ticks" aria-hidden="true">
            {panels.map((p, i) => (
              <span key={p.src} className={i === active ? "is-active" : ""}>
                {String(i + 1).padStart(2, "0")}
              </span>
            ))}
          </div>
        </div>

        <div className="cine-triptych-stage">
          {panels.map((p, i) => (
            <figure key={p.src} className={`cine-tri-panel ${i === active ? "is-active" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
