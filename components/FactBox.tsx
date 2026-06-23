/**
 * "Auf einen Blick"-Faktenbox.
 *
 * Bewusst als Liste VOLLSTÄNDIGER Sätze (nicht als Tabellenzellen):
 * KI-Modelle reißen einzelne Fakten aus dem Kontext – "vier Doppelkabinen"
 * ist danach wertlos, "Die Miss Moneypenny hat vier Doppelkabinen" bleibt
 * ein zitierfähiger Satz. Jeder Punkt muss also für sich allein stehen
 * und das Subjekt benennen.
 */
export default function FactBox({
  title = "Auf einen Blick",
  facts,
}: {
  title?: string;
  facts: string[];
}) {
  if (!facts.length) return null;

  return (
    <aside className="factbox" aria-label={title}>
      <span className="eyebrow no-rule">{title}</span>
      <ul>
        {facts.map((fact) => (
          <li key={fact}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
