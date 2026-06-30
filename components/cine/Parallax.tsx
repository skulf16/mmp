"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { onScrollFrame, prefersReducedMotion } from "./scrollTicker";

type ParallaxProps = {
  src: string;
  alt: string;
  /** Maximaler Versatz in % der Bildhöhe (Standard 8). Das innere Bild ist
   *  auf 1.22 skaliert (11 % Spielraum je Kante), damit selbst bei vollem
   *  Versatz von bis zu 10 keine Kante zeigt. */
  strength?: number;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  /** optionale Bildunterschrift (kleines, gesperrtes Label unten links) */
  caption?: string;
};

/**
 * Vollflächiges Bild mit ruhigem Parallax-Versatz, während es durch den
 * Viewport wandert. Decoupled von Lenis über den geteilten Scroll-Ticker.
 */
export default function Parallax({
  src,
  alt,
  strength = 8,
  className = "",
  style,
  priority = false,
  caption,
}: ParallaxProps) {
  const wrap = useRef<HTMLDivElement | null>(null);
  const img = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const w = wrap.current;
    const im = img.current;
    if (!w || !im) return;
    if (prefersReducedMotion()) return;

    const update = () => {
      const r = w.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -40 || r.top > vh + 40) return; // außerhalb: nichts tun
      // -1 (Mitte am unteren Rand) .. 0 (zentriert) .. +1 (Mitte am oberen Rand)
      const center = r.top + r.height / 2;
      const prog = (vh / 2 - center) / (vh / 2 + r.height / 2);
      im.style.transform = `translate3d(0, ${(prog * strength).toFixed(2)}%, 0) scale(1.22)`;
    };

    return onScrollFrame(update);
  }, [strength]);

  return (
    <div ref={wrap} className={`cine-parallax ${className}`.trim()} style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={img}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      {caption ? <span className="cine-parallax-cap">{caption}</span> : null}
    </div>
  );
}
