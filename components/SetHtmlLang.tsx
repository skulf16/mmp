"use client";

import { useEffect } from "react";

/**
 * Setzt das <html lang>-Attribut clientseitig auf die übergebene Sprache und
 * stellt beim Verlassen den Ausgangswert wieder her. So bekommen die /en-Seiten
 * lang="en", ohne dass das statische Wurzel-Layout angefasst werden muss.
 */
export default function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);

  return null;
}
