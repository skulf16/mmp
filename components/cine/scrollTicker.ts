/**
 * Ein einziger, geteilter rAF-Ticker für alle Cinematic-Effekte.
 * Statt dass jede Parallax-/Scrub-Komponente eigene Schleifen aufzieht,
 * registrieren sie hier eine Callback-Funktion.
 *
 * Bewusst eine DURCHGEHENDE requestAnimationFrame-Schleife (solange es
 * Abonnenten gibt) statt einer scroll-Event-Bindung: Lenis bewegt die Seite
 * über sein eigenes rAF und feuert NICHT zuverlässig native scroll-Events –
 * eine scroll-gebundene Variante würde die Effekte nie aktualisieren. Die
 * Callbacks selbst sind günstig (ein getBoundingClientRect + Style-Write) und
 * steigen früh aus, wenn ihr Element außerhalb des Viewports liegt.
 */

type Frame = () => void;

const callbacks = new Set<Frame>();
let raf = 0;

function loop() {
  callbacks.forEach((cb) => {
    try {
      cb();
    } catch {
      /* eine fehlerhafte Komponente darf den Ticker nicht killen */
    }
  });
  raf = callbacks.size > 0 ? requestAnimationFrame(loop) : 0;
}

/**
 * Registriert eine Frame-Callback. Gibt eine Cleanup-Funktion zurück.
 * Beim ersten Abonnenten startet die rAF-Schleife, beim letzten stoppt sie.
 */
export function onScrollFrame(cb: Frame): () => void {
  callbacks.add(cb);
  // einmal sofort ausführen, damit Startwerte korrekt sitzen
  cb();
  if (!raf && typeof window !== "undefined") {
    raf = requestAnimationFrame(loop);
  }

  return () => {
    callbacks.delete(cb);
    if (callbacks.size === 0 && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };
}

/** Clamp 0..1 */
export function clamp01(n: number): number {
  return n < 0 ? 0 : n > 1 ? 1 : n;
}

/** Smoothstep zwischen edge0 und edge1 (sanftes Ein-/Ausblenden). */
export function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

/** True, wenn der Nutzer reduzierte Bewegung wünscht. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
