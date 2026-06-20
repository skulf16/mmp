import type { SVGProps } from "react";

/* Kompassrose – Bildmarke der Miss Moneypenny */
export default function Brandmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
      <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      {/* Hauptstrahlen (N/O/S/W) */}
      <path d="M50 6 L56 50 L50 94 L44 50 Z" fill="currentColor" opacity="0.92" />
      <path d="M6 50 L50 44 L94 50 L50 56 Z" fill="currentColor" opacity="0.55" />
      {/* Diagonalstrahlen */}
      <path d="M50 50 L72 28 L55 45 Z" fill="currentColor" opacity="0.4" />
      <path d="M50 50 L28 72 L45 55 Z" fill="currentColor" opacity="0.4" />
      <path d="M50 50 L72 72 L55 55 Z" fill="currentColor" opacity="0.25" />
      <path d="M50 50 L28 28 L45 45 Z" fill="currentColor" opacity="0.25" />
      <circle cx="50" cy="50" r="3.4" fill="currentColor" />
    </svg>
  );
}
