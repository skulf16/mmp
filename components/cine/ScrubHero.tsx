"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { onScrollFrame, clamp01, smoothstep, prefersReducedMotion } from "./scrollTicker";

type ScrubHeroProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  /** Headline – darf <em> für kursive Akzente enthalten (als ReactNode) */
  headline: ReactNode;
  sub: string;
  scrollLabel?: string;
  /** Kennzahlen-Leiste am unteren Rand (z. B. Länge · Kabinen · Gäste) */
  stats?: { k: string; l: string }[];
  /** kleine Koordinaten-/Ortsangabe als feine Marke, z. B. „43°44′N · Šibenik" */
  coordinate?: string;
};

/**
 * Cinematic, scroll-„gescrubbter" Hero (Aether-Signatur, in Marken-Optik).
 * Die Sektion ist überhoch; der innere Layer ist sticky und bleibt für ~1
 * Viewport gepinnt. Während dieser Strecke zoomt das Bild langsam, ein
 * dunkler Schleier zieht auf und die Headline steigt nach oben & blendet aus –
 * bevor die Sektion in den ersten Inhalt „freigibt".
 */
export default function ScrubHero({
  image,
  imageAlt,
  eyebrow,
  headline,
  sub,
  scrollLabel = "Scroll",
  stats,
  coordinate,
}: ScrubHeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const veilRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const cueRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sec = sectionRef.current;
    const im = imgRef.current;
    const veil = veilRef.current;
    const content = contentRef.current;
    const cue = cueRef.current;
    if (!sec || !im || !veil || !content || !cue) return;
    if (prefersReducedMotion()) {
      sec.dataset.reduce = "true";
      return;
    }

    // offsetHeight ist ein erzwungener Reflow – nur bei Resize neu messen,
    // nicht in jedem Frame.
    let total = sec.offsetHeight - window.innerHeight;
    const measure = () => {
      total = sec.offsetHeight - window.innerHeight;
    };
    window.addEventListener("resize", measure);

    const update = () => {
      const top = sec.getBoundingClientRect().top;
      // Hero komplett durchgescrollt → nichts mehr zu tun (außerhalb des Bildes).
      if (top < -total - 4) return;

      const p = total > 0 ? clamp01(-top / total) : 0;

      if (p <= 0.001) {
        // ganz oben: Inline-Styles freigeben, damit die CSS-Einblend-Animation greift
        im.style.transform = "";
        veil.style.opacity = "";
        content.style.transform = "";
        content.style.opacity = "";
        cue.style.opacity = "";
        return;
      }

      im.style.transform = `scale(${(1 + p * 0.14).toFixed(4)}) translate3d(0, ${(p * -2).toFixed(2)}%, 0)`;
      veil.style.opacity = (smoothstep(0.35, 1, p) * 0.6).toFixed(3);
      content.style.transform = `translate3d(0, ${(p * -64).toFixed(1)}px, 0)`;
      content.style.opacity = (1 - smoothstep(0.45, 0.95, p)).toFixed(3);
      cue.style.opacity = (1 - smoothstep(0, 0.12, p)).toFixed(3);
    };

    const unsubscribe = onScrollFrame(update);
    return () => {
      unsubscribe();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section ref={sectionRef} className="cine-hero">
      <div className="cine-hero-sticky">
        <div className="cine-hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={image}
            alt={imageAlt}
            width={1280}
            height={854}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="cine-hero-grade" />
        <div ref={veilRef} className="cine-hero-veil" />

        <div ref={contentRef} className="cine-hero-content">
          <div className="container container-wide">
            {coordinate ? <span className="cine-hero-coord">{coordinate}</span> : null}
            <span className="eyebrow on-dark">{eyebrow}</span>
            <h1 className="cine-hero-title">{headline}</h1>
            <p className="cine-hero-sub">{sub}</p>
            {stats && stats.length > 0 ? (
              <div className="cine-hero-meta">
                {stats.map((s) => (
                  <div key={s.l}>
                    <span className="k">{s.k}</span>
                    <span className="l">{s.l}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div ref={cueRef} className="cine-scrollcue">
          <span>{scrollLabel}</span>
        </div>
      </div>
    </section>
  );
}
