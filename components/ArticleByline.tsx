import Link from "next/link";
import {
  siteUrl,
  author,
  formatArticleDate,
  ratgeberArticles,
} from "@/lib/site";

/**
 * Rendert für eine Ratgeber-Seite gleichzeitig:
 *  1. das BlogPosting-JSON-LD (Article-Schema mit Autor, Datum & Publisher)
 *  2. die sichtbare Autoren-Byline
 *
 * Die Person-Entität selbst ist einmal zentral im @graph der layout.tsx
 * definiert und wird hier nur per @id referenziert.
 */
export default function ArticleByline({ slug }: { slug: string }) {
  const article = ratgeberArticles[slug];
  if (!article) return null;

  const url = `${siteUrl}/${slug}`;
  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: article.headline,
    description: article.description,
    image: `${siteUrl}${article.image}`,
    inLanguage: "de-DE",
    datePublished: article.published,
    dateModified: article.updated,
    author: { "@id": author.id },
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  const initials = author.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <div className="container">
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "1.6rem 0",
            marginTop: "0.4rem",
            borderBottom: "1px solid var(--sand-line)",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              flexShrink: 0,
              width: 50,
              height: 50,
              borderRadius: "50%",
              background: "var(--navy-900)",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              fontFamily: "var(--font-fraunces)",
              fontWeight: 500,
              fontSize: "1.1rem",
              letterSpacing: "0.02em",
            }}
          >
            {initials}
          </span>

          <div style={{ minWidth: 0, flex: "1 1 280px" }}>
            <div style={{ color: "var(--navy-900)", lineHeight: 1.35 }}>
              Von{" "}
              <Link href={author.page} style={{ fontWeight: 700, color: "var(--navy-900)" }}>
                {author.displayName}
              </Link>
              <span style={{ color: "var(--text-soft)" }}> · {author.jobTitle}</span>
            </div>
            <div
              style={{
                fontSize: "0.86rem",
                color: "var(--text-soft)",
                marginTop: "0.25rem",
                lineHeight: 1.5,
              }}
            >
              Aktualisiert {formatArticleDate(article.updated)} · {author.bioShort}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1.1rem",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {author.sameAs.map((href) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="author noopener noreferrer"
                style={{ color: "var(--brass-600)", textDecoration: "none", whiteSpace: "nowrap" }}
              >
                {href.includes("instagram") ? "Instagram ↗" : "LinkedIn ↗"}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
