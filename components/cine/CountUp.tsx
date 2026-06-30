"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  durationMs?: number;
  suffix?: string;
  className?: string;
};

/**
 * Zählt beim ersten Sichtbarwerden einmalig von 0 auf `to` hoch.
 * Respektiert prefers-reduced-motion (zeigt direkt den Endwert).
 */
export default function CountUp({ to, durationMs = 1500, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setValue(to);
      return;
    }

    let raf = 0;
    let start = 0;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3); // ease-out-cubic

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          const step = (ts: number) => {
            if (!start) start = ts;
            const t = clamp(ts - start, durationMs);
            setValue(Math.round(ease(t) * to));
            if (t < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, durationMs]);

  // Screenreader bekommen immer den Endwert; nur die animierte Ziffer ist versteckt.
  return (
    <span ref={ref} className={className} aria-label={`${to}${suffix}`}>
      <span aria-hidden="true">
        {value}
        {suffix}
      </span>
    </span>
  );
}

function clamp(elapsed: number, duration: number): number {
  const t = elapsed / duration;
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
