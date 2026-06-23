import Faq from "./Faq";

/**
 * Rendert eine FAQ-Sektion aus EINEM Datenarray und hält dabei
 * sichtbaren Inhalt und Schema synchron:
 *   1. das FAQPage-JSON-LD (von KI-Antwortmaschinen direkt zitierbar)
 *   2. das sichtbare Akkordeon (Client-Komponente <Faq />)
 *
 * So kann es nicht passieren, dass das Schema andere Fragen enthält
 * als die Seite tatsächlich zeigt.
 */
export default function FaqSection({
  items,
  id,
}: {
  items: { q: string; a: string }[];
  /** optionale stabile @id, z. B. `${url}#faq` */
  id?: string;
}) {
  if (!items.length) return null;

  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(id ? { "@id": id } : {}),
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <Faq items={items} />
    </>
  );
}
