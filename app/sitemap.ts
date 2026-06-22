import type { MetadataRoute } from "next";

const base = "https://chartern-in-kroatien.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const high: string[] = [
    "",
    "/die-yacht",
    "/charter-infos",
    "/kontakt",
  ];

  const medium: string[] = [
    "/revier-sibenik",
    "/segeln-in-den-kornaten",
    "/katamaran-mieten-kroatien",
    "/staedte-dalmatiens",
    "/toernvorschlag-kornaten",
    "/segeltorn-kroatien-skipper",
  ];

  const low: string[] = [
    "/segeltorn-planen",
    "/segeltorn-packliste",
    "/packliste-segeln-kroatien",
    "/winde-kroatien",
    "/apps-fuer-segler",
    "/ankern-kroatien",
    "/einkaufsliste-segeltorn",
    "/speiseplan-segeltorn",
    "/sicherheitseinweisung-yacht",
    "/kroatien-inselhopping",
  ];

  return [
    ...high.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1.0 : 0.9,
    })),
    ...medium.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...low.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
