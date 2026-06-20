import Link from "next/link";
import Reveal from "./Reveal";

const BASE_URL = "https://bond-yachting.de";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image: string;
  imageAlt: string;
  crumbs?: Crumb[];
}) {
  const breadcrumbSchema = crumbs && crumbs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": crumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": crumb.label,
          ...(crumb.href ? { "item": `${BASE_URL}${crumb.href}` } : {}),
        })),
      }
    : null;

  return (
    <section className="page-hero">
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <div className="page-hero-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={imageAlt} />
      </div>
      <div className="container page-hero-inner">
        {crumbs && (
          <Reveal as="div">
            <div className="crumb">
              {crumbs.map((c, i) => (
                <span key={c.label} style={{ display: "inline-flex", gap: "0.6rem", alignItems: "center" }}>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                  {i < crumbs.length - 1 && <span className="sep">/</span>}
                </span>
              ))}
            </div>
          </Reveal>
        )}
        <Reveal as="div" delay={1}>
          <span className="eyebrow on-dark" style={{ marginTop: crumbs ? "1.2rem" : 0 }}>
            {eyebrow}
          </span>
        </Reveal>
        <Reveal as="h1" delay={2}>{title}</Reveal>
        {lede && (
          <Reveal as="p" delay={3} className="lede">
            {lede}
          </Reveal>
        )}
      </div>
    </section>
  );
}
