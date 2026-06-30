"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Aktiviert das weiche Momentum-Scrolling (Lenis) – die Signatur der
 * Cinematic-Seite. Nur auf der Yacht-Seite eingebunden, damit Formulare &
 * andere Seiten natives Scrollen behalten. Respektiert prefers-reduced-motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      // ease-out-expo – langsam ausrollend, ruhig & „teuer"
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    // Instanz für programmatisches Scrollen (Anker, Tests) verfügbar machen.
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    // Tastatur-Fokus mitführen: springt der Fokus auf ein Element außerhalb
    // des Viewports, scrollt Lenis sanft dorthin (sonst kann der Fokus „aus dem
    // Bild" wandern, weil Lenis das native Fokus-Scrollen abfängt).
    const onFocusIn = (e: FocusEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el || typeof el.getBoundingClientRect !== "function") return;
      const r = el.getBoundingClientRect();
      if (r.top < 72 || r.bottom > window.innerHeight) {
        lenis.scrollTo(el, { offset: -96 });
      }
    };
    document.addEventListener("focusin", onFocusIn);

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("focusin", onFocusIn);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return null;
}
