"use client";

import { useCallback, useEffect, useState } from "react";

export type GalleryImage = { src: string; alt: string; span?: "wide" | "tall" | "sq" | "half" };

const spanClass: Record<NonNullable<GalleryImage["span"]>, string> = {
  wide: "g-wide",
  tall: "g-tall",
  sq: "g-sq",
  half: "g-half",
};

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  return (
    <>
      <div className="gallery">
        {images.map((img, i) => (
          <button
            key={img.src}
            className={img.span ? spanClass[img.span] : "g-sq"}
            onClick={() => setIndex(i)}
            aria-label={`${img.alt} – vergrößern`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {index !== null && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lb-close" aria-label="Schließen" onClick={close}>✕</button>
          <button
            className="lb-nav lb-prev"
            aria-label="Vorheriges Bild"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >‹</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[index].src}
            alt={images[index].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lb-nav lb-next"
            aria-label="Nächstes Bild"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >›</button>
          <span className="lb-count">{index + 1} / {images.length}</span>
        </div>
      )}
    </>
  );
}
