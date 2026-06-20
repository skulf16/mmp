import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";
import { site } from "@/lib/site";

export default function CtaBand({
  image = "/images/yacht-aerial-village.jpg",
  eyebrow = "Bereit für die Adria?",
  title = "Sichern Sie sich Ihre Wochen an Bord der Miss Moneypenny.",
  text = "Nennen Sie uns Ihren Wunschtermin – wir prüfen die Verfügbarkeit und melden uns innerhalb von 24 Stunden mit einem persönlichen Angebot.",
}: {
  image?: string;
  eyebrow?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section className="section cta-band">
      <div className="cta-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" />
      </div>
      <div className="container center" style={{ maxWidth: 880 }}>
        <Reveal as="div"><span className="eyebrow on-dark centered">{eyebrow}</span></Reveal>
        <Reveal as="h2" delay={1} style={{ marginInline: "auto", marginTop: "1.1rem" }}>{title}</Reveal>
        <Reveal as="p" delay={2} className="lede" style={{ marginInline: "auto" }}>{text}</Reveal>
        <Reveal as="div" delay={3} className="hero-actions" style={{ justifyContent: "center" }}>
          <Link href="/kontakt" className="btn btn-primary">Verfügbarkeit anfragen <ArrowRight /></Link>
          <a href={`mailto:${site.email}`} className="btn btn-ghost">{site.email}</a>
        </Reveal>
      </div>
    </section>
  );
}
