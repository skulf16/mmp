import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export const metadata = { title: "Seite nicht gefunden" };

export default function NotFound() {
  return (
    <section className="hero" style={{ minHeight: "80vh" }}>
      <div className="hero-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/yacht-aerial-wide.jpg" alt="Katamaran auf offener See" />
      </div>
      <div className="container hero-inner" style={{ textAlign: "center" }}>
        <span className="eyebrow on-dark centered">Fehler 404</span>
        <h1 className="display" style={{ color: "#fff", maxWidth: "20ch", margin: "1.2rem auto 0" }}>
          Vom Kurs abgekommen.
        </h1>
        <p className="lede mx-auto" style={{ marginTop: "1.2rem" }}>
          Diese Seite liegt nicht auf unserer Route. Setzen wir die Segel zurück zum Heimathafen.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn-primary">Zur Startseite <ArrowRight /></Link>
        </div>
      </div>
    </section>
  );
}
