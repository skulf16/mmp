import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Miss Moneypenny – Bordbuch",
    short_name: "Bordbuch",
    description: "Dein digitales Bordbuch für den Törn auf der Miss Moneypenny – ausfüllen, speichern, per E-Mail sichern.",
    start_url: "/bordbuch",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f6f1e7",
    theme_color: "#082531",
    lang: "de",
    categories: ["travel", "utilities"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
