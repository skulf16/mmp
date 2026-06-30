"use client";

import { useState } from "react";

type FilmFacadeProps = {
  /** YouTube-Video-ID */
  id: string;
  /** Poster-Standbild (eigenes Yacht-Foto statt YouTube-Thumbnail) */
  poster: string;
  posterAlt: string;
  /** kleines Label über dem Play-Button, z. B. „Film ansehen" */
  label?: string;
  /** Untertitel/Dauer rechts, optional */
  meta?: string;
  title: string;
};

/**
 * Klick-zum-Laden-Fassade für das YouTube-Video: zeigt zuerst ein eigenes
 * Yacht-Standbild mit Play-Button (schnell, datensparsam, kein Layout-Shift)
 * und tauscht erst beim Klick das eingebettete (nocookie-)iframe ein.
 * data-lenis-prevent verhindert, dass Lenis das Scrollen über dem Player kapert.
 */
export default function FilmFacade({
  id,
  poster,
  posterAlt,
  label = "Film ansehen",
  meta,
  title,
}: FilmFacadeProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="cine-film" data-lenis-prevent>
      {playing ? (
        <iframe
          className="cine-film-frame"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="cine-film-poster"
          onClick={() => setPlaying(true)}
          aria-label={`${title} – Video abspielen`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt={posterAlt} loading="lazy" decoding="async" />
          <span className="cine-film-veil" aria-hidden="true" />
          <span className="cine-film-cta" aria-hidden="true">
            <span className="cine-film-play">
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
              </svg>
            </span>
            <span className="cine-film-labels">
              <span className="cine-film-label">{label}</span>
              {meta ? <span className="cine-film-meta">{meta}</span> : null}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
