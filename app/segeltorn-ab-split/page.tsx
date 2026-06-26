import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ArticleByline from "@/components/ArticleByline";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import FaqSection from "@/components/FaqSection";
import { Icon } from "@/components/Icons";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Segeltörn ab Split: 7-Tage-Route mit Karte & Etappen",
  description:
    "Segeln ab Split: Eine 7-Tage-Route durch Mitteldalmatien Tag für Tag – Trogir, Šolta, Hvar, Vis und Brač, mit Etappen, Distanzen und Tipps für den Kroatien-Törn.",
  openGraph: {
    title: "Segeltörn ab Split – 7-Tage-Route durch Mitteldalmatien",
    description:
      "Tag-für-Tag-Route für einen 7-tägigen Segeltörn rund um Split: Trogir, Šolta, Hvar, Vis, Brač – Etappen, Highlights und Praxistipps.",
    images: [
      {
        url: "/images/city-split.png",
        width: 1200,
        height: 630,
        alt: "Hafenstadt Split mit Diokletianpalast – Ausgangsregion für den Segeltörn",
      },
    ],
  },
};

const etappen = [
  {
    nr: "01",
    icon: "anchor" as const,
    titel: "Tag 1 – Einschiffung & Trogir",
    dist: "ca. 8–12 sm",
    text: "Check-in am frühen Nachmittag, Proviant bunkern, Sicherheitseinweisung. Wer früh ablegt, segelt die kurze Strecke nach Trogir – die UNESCO-Altstadt mit venezianischem Hafen ist der perfekte sanfte Auftakt. Liegeplatz an der Riva oder ankern in der Bucht vor der Stadt.",
  },
  {
    nr: "02",
    icon: "waves" as const,
    titel: "Tag 2 – Šolta & Maslinica",
    dist: "ca. 14–18 sm",
    text: "Über den Splitski-Kanal nach Šolta, der ruhigen Schwester der großen Touristeninseln. Maslinica an der Westspitze bietet einen geschützten Hafen und vorgelagerte Inselchen zum Ankern und Schnorcheln. Abends Konoba mit Olivenöl von der Insel.",
  },
  {
    nr: "03",
    icon: "sun" as const,
    titel: "Tag 3 – Hvar",
    dist: "ca. 12–16 sm",
    text: "Kurs Süd nach Hvar-Stadt, der lebhaftesten Adresse Mitteldalmatiens. Die Pakleni-Inseln direkt vor dem Hafen laden zum Ankern in türkisem Wasser, am Abend bummelt ihr durch die Marmorgassen unterhalb der Festung Fortica.",
  },
  {
    nr: "04",
    icon: "wind" as const,
    titel: "Tag 4 – Vis",
    dist: "ca. 18–24 sm",
    text: "Die längere Etappe der Woche führt zur entlegensten bewohnten Adriainsel. Vis war lange militärisches Sperrgebiet und ist deshalb wunderbar ursprünglich. Liegen in der Bucht von Vis oder Komiža, abends frischer Fisch und der Inselwein Vugava.",
  },
  {
    nr: "05",
    icon: "droplet" as const,
    titel: "Tag 5 – Biševo & Budikovac",
    dist: "ca. 10–16 sm",
    text: "Morgens früh zur Blauen Grotte auf Biševo, die bei ruhiger See im Vormittagslicht am schönsten leuchtet – Zufahrt nur mit zugelassenen Booten. Danach zur Lagune von Budikovac vor Vis, einem flachen Naturpool, der an die Karibik erinnert.",
  },
  {
    nr: "06",
    icon: "snorkel" as const,
    titel: "Tag 6 – Brač & Bol",
    dist: "ca. 16–22 sm",
    text: "Zurück Richtung Festland nach Brač. Vor Bol liegt das Zlatni Rat, das berühmte Horn-Kap, dessen Kiesspitze je nach Wind und Strömung die Richtung wechselt. Liegeplatz in Bol oder ankern in einer der ruhigen Buchten der Südküste.",
  },
  {
    nr: "07",
    icon: "wheel" as const,
    titel: "Tag 7 – Rückweg & Check-out",
    dist: "ca. 12–16 sm",
    text: "Letzte Etappe zurück in Richtung Ausgangshafen. Wer Puffer einplant, legt am Vorabend in der Nähe des Heimathafens an, tankt und macht klar Schiff. Check-out meist am Vormittag – plant die letzte Bucht so, dass kein Stress aufkommt.",
  },
];

const tipps = [
  {
    icon: "calendar" as const,
    title: "Reisezeit clever wählen",
    text: "Juni und September sind die goldenen Monate: warm, verlässlicher Maestral am Nachmittag und deutlich weniger Betrieb in Hvar und Bol als im heißen Juli und August.",
  },
  {
    icon: "wind" as const,
    title: "Maestral einplanen",
    text: "Der thermische Nordwestwind baut sich meist zwischen 10 und 12 Uhr auf und bringt nachmittags 3–5 Beaufort. Längere Etappen wie Hvar–Vis legt ihr am besten in diese Stunden.",
  },
  {
    icon: "anchor" as const,
    title: "Liegeplätze vorab klären",
    text: "Hvar-Stadt und Bol sind in der Hochsaison schnell voll. Reserviert Marina-Plätze früh oder weicht auf ruhige Ankerbuchten der Nachbarinseln aus – das spart Nerven und Liegegebühren.",
  },
  {
    icon: "shield" as const,
    title: "Schein & Crew-Liste",
    text: "Für einen Bareboat-Törn braucht ihr in Kroatien einen anerkannten Sportbootführerschein (mind. SBF See) und ein Funkzeugnis (SRC/UBI). Ohne Schein bucht ihr einen Skipper dazu.",
  },
];

const facts = [
  "Segeln ab Split führt durch Mitteldalmatien: Eine klassische 7-Tage-Route verbindet Trogir, Šolta, Hvar, Vis und Brač.",
  "Die einzelnen Etappen liegen meist bei rund 10 bis 24 Seemeilen pro Tag – kurze Schläge, die viel Zeit zum Ankern und Baden lassen.",
  "Juni und September gelten als die goldenen Monate: warm, verlässlicher Maestral und weniger Betrieb als im heißen Juli und August.",
  "Der Maestral ist der thermische Nordwestwind der Adria; er baut sich zwischen 10 und 12 Uhr auf und erreicht nachmittags 3–5 Beaufort.",
  "Für einen Bareboat-Törn sind in Kroatien ein anerkannter Sportbootführerschein (mind. SBF See) und ein Funkzeugnis (SRC/UBI) vorgeschrieben.",
  "Die Miss Moneypenny liegt in der Marina Mandalina in Šibenik, rund 1 bis 1,5 Stunden nördlich von Split – dieselbe Region ist von dort bestens erreichbar.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Wie sieht eine gute 7-Tage-Route beim Segeln ab Split aus?",
    a: "Eine bewährte Runde durch Mitteldalmatien führt von Split über Trogir nach Šolta (Maslinica), weiter nach Hvar, dann zur entlegenen Insel Vis mit Abstecher zur Blauen Grotte auf Biševo, anschließend nach Brač mit dem Zlatni Rat bei Bol und am siebten Tag zurück. Die Etappen liegen meist bei rund 10 bis 24 Seemeilen – das sind grobe Richtwerte und lassen genug Zeit zum Ankern und Baden.",
  },
  {
    q: "Wie weit sind die einzelnen Etappen auf einem Segeltörn ab Split?",
    a: "Die Tagesetappen sind kurz: meist zwischen etwa 10 und 24 Seemeilen. Die längste Strecke ist in der Regel der Schlag von Hvar nach Vis mit rund 18 bis 24 Seemeilen. Alle Distanzangaben sind grobe Richtwerte und hängen vom gewählten Liegeplatz, von Wind und Seegang ab.",
  },
  {
    q: "Wann ist die beste Zeit für einen Segeltörn Kroatien über 7 Tage?",
    a: "Die Saison reicht von Mai bis Oktober. Juni und September sind die goldenen Monate: warm genug zum Baden, verlässlicher Maestral mit 3–5 Beaufort am Nachmittag und weniger Andrang in den beliebten Häfen Hvar und Bol. Juli und August sind heiß und stark frequentiert.",
  },
  {
    q: "Brauche ich einen Segelschein, um ab Split zu chartern?",
    a: "Für einen Bareboat-Törn ohne Skipper verlangt Kroatien einen anerkannten Sportbootführerschein – mindestens den SBF See oder ein gleichwertiges Patent – sowie ein Funkzeugnis (SRC oder UBI). Wer keinen Schein oder wenig Erfahrung hat, bucht einen erfahrenen Skipper dazu. Vor Törnbeginn ist außerdem eine Crew-Liste einzureichen.",
  },
  {
    q: "Kann ich diese Route auch ab Šibenik statt ab Split segeln?",
    a: "Ja. Die Miss Moneypenny liegt in der Marina Mandalina in Šibenik, nur rund 1 bis 1,5 Stunden nördlich von Split. Mitteldalmatien mit Trogir, Šolta, Hvar, Vis und Brač ist von Šibenik aus bestens erreichbar – ihr verschiebt den Startpunkt nur ein Stück nach Norden und nehmt auf dem Weg zusätzlich die Kornaten und den Krka-Nationalpark mit.",
  },
];

export default function SegeltornAbSplitPage() {
  return (
    <>
      <PageHero
        eyebrow="7-Tage-Route"
        title="Segeltörn ab Split: 7-Tage-Route durch Mitteldalmatien"
        lede="Segeln ab Split, Tag für Tag: Eine entspannte Wochenrunde über Trogir, Šolta, Hvar, Vis und Brač – mit Etappen, groben Distanzen und ehrlichen Praxistipps."
        image="/images/city-split.png"
        imageAlt="Hafenstadt Split mit Diokletianpalast – Ausgangsregion für den Segeltörn"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/ratgeber" }, { label: "Segeltörn ab Split" }]}
      />

      <ArticleByline slug="segeltorn-ab-split" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Einleitung */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Das Revier</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Warum Segeln ab Split so gut funktioniert.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Mitteldalmatien ist eines der dankbarsten Segelreviere der Adria –
              und ein <strong>Segeltörn ab Split</strong> bringt euch in wenigen
              Stunden zu den schönsten Inseln dieser Küste. Die Distanzen sind kurz,
              die Häfen liegen dicht beieinander und zwischen den Inseln steht
              nachmittags verlässlich der Maestral. Wer eine Woche Zeit hat, kann
              entspannt eine Runde durch die Inselwelt drehen, ohne lange Schläge
              fahren zu müssen.
            </p>
            <p>
              Die hier beschriebene Route ist auf einen <strong>Segeltörn Kroatien
              über 7 Tage</strong> ausgelegt: ein sanfter Auftakt in Trogir, die
              ruhige Insel Šolta, das mondäne Hvar, das ursprüngliche Vis mit seinen
              Naturwundern und zum Abschluss Brač mit dem berühmten Zlatni Rat. Alle
              Etappenlängen sind <em>grobe Richtwerte in Seemeilen (sm)</em> und
              hängen vom gewählten Liegeplatz, von Wind und Seegang ab – plant sie
              als Orientierung, nicht als festen Fahrplan.
            </p>
            <p>
              Ihr wollt das Revier breiter verstehen? Unsere Übersicht der{" "}
              <Link href="/staedte-dalmatiens">Städte Dalmatiens</Link> und die
              Sammlung an{" "}
              <Link href="/segeltorn-routen-kroatien">Segeltörn-Routen in Kroatien</Link>{" "}
              ordnen diese Woche in den größeren Zusammenhang ein.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Etappen Tag für Tag */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Tag für Tag</span>
            <h2 className="section-title">Die 7-Tage-Route im Detail.</h2>
            <p className="lede">
              Sieben Etappen rund um Split – kurze Schläge mit viel Zeit zum
              Ankern, Schwimmen und Bummeln. Distanzen sind grobe Richtwerte.
            </p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {etappen.map((e, i) => (
              <Reveal key={e.nr} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={e.icon} /></span>
                  <h3>{e.titel}</h3>
                  <p style={{ color: "var(--brass-600)", fontWeight: 600, fontSize: "0.85rem", marginTop: "0.3rem" }}>{e.dist}</p>
                  <p>{e.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Bild-Split */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Die Inselhöhepunkte</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Trogir, Hvar, Vis & Brač.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  <strong>Trogir</strong> ist der ideale erste Stopp: eine
                  UNESCO-Altstadt auf einer kleinen Insel, nur wenige Seemeilen vom
                  Festland entfernt. <strong>Hvar</strong> liefert das Kontrastprogramm
                  – Marmorgassen, Festung über der Stadt und die vorgelagerten
                  Pakleni-Inseln mit klarem Wasser zum Ankern.
                </p>
                <p>
                  <strong>Vis</strong> war jahrzehntelang militärisches Sperrgebiet
                  und blieb dadurch ursprünglich; von hier startet der Frühausflug zur
                  Blauen Grotte auf Biševo, die im Vormittagslicht am schönsten leuchtet.
                  Den Abschluss macht <strong>Brač</strong> mit dem Zlatni Rat vor Bol,
                  dessen Kiesspitze je nach Wind die Richtung wechselt.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Trogir</span>
                <span className="tag-pill">Šolta</span>
                <span className="tag-pill">Hvar</span>
                <span className="tag-pill">Vis</span>
                <span className="tag-pill">Brač</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/city-hvar.png" alt="Hafen von Hvar mit Festung – Höhepunkt der Route ab Split" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Wetter & Distanzen / Tipps */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Praxis an Bord</span>
            <h2 className="section-title">Tipps für die Woche ab Split.</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {tipps.map((t, i) => (
              <Reveal key={t.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={t.icon} /></span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kosten-Hinweis */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Womit ihr rechnen solltet</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Kosten neben dem Charterpreis.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Neben dem Charterpreis – ein Katamaran wie die Miss Moneypenny startet
              je nach Saison ab rund 2.500 € pro Woche – fallen auf einem Törn durch
              Mitteldalmatien einige Bordkasse-Posten an. Liegegebühren in den
              beliebten Marinas (Hvar, Bol) liegen typischerweise bei{" "}
              <em>etwa 80–250 € pro Nacht</em> für einen Katamaran dieser Größe,
              Bojen in Buchten oft günstiger; dazu kommen Treibstoff, Kurtaxe und die
              Konoba-Abende. Ein erfahrener Skipper kostet rund 1.000–1.500 € pro Woche
              zusätzlich, falls niemand an Bord den nötigen Schein hat.
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--text-soft)" }}>
              <strong>Hinweis:</strong> Diese Beträge sind Richtwerte, Stand 2026 –
              sie variieren je nach Saison, Bootsgröße und Anbieter; verbindliche Zahlen
              gibt es auf Anfrage. Plant die Bordkasse großzügig, dann gibt es unterwegs
              keine Überraschungen. Wann ihr am günstigsten und entspanntesten unterwegs
              seid, lest ihr in unserem Ratgeber zur{" "}
              <Link href="/beste-reisezeit-segeln-kroatien">besten Reisezeit zum Segeln in Kroatien</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ehrliche Šibenik-Überleitung */}
      <section className="section surface-sand">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div" delay={1}>
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/region-sibenik.png" alt="Marina Mandalina in Šibenik – Heimathafen der Miss Moneypenny" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow">Ehrlich gesagt</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Dieselbe Route – nur ab Šibenik.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Eine ehrliche Anmerkung: Die Miss Moneypenny liegt nicht in Split,
                  sondern in der <strong>Marina Mandalina in Šibenik</strong> – rund
                  1 bis 1,5 Stunden nördlich. Das ändert an dieser Woche fast nichts.
                  Mitteldalmatien mit Trogir, Šolta, Hvar, Vis und Brač ist von Šibenik
                  aus genauso gut erreichbar; ihr verschiebt den Startpunkt nur ein
                  Stück nach Norden.
                </p>
                <p>
                  Der Vorteil: Von Šibenik nehmt ihr auf dem Weg zusätzlich die
                  Kornaten – 89 Inseln im Nationalpark – und den Krka-Nationalpark mit
                  seinen Wasserfällen mit. So lässt sich die Split-Runde mit echter
                  Inselwildnis kombinieren. Eine konkrete Idee dazu findet ihr in
                  unserem{" "}
                  <Link href="/toernvorschlag-kornaten">Törnvorschlag für die Kornaten</Link>.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Eure Woche in Mitteldalmatien.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Ob Split- oder Šibenik-Variante – die Miss Moneypenny bringt euch
              komfortabel durch Mitteldalmatien. Sagt uns Wunschtermin und Crewgröße,
              wir melden uns mit Verfügbarkeit und Preisen.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/kontakt" className="btn btn-primary">Verfügbarkeit anfragen</Link>
              <Link href="/charter-infos" className="btn btn-ghost">Charter-Infos & Preise</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Segeln ab Split – häufige Fragen.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/segeltorn-ab-split#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/city-split.png" />
    </>
  );
}
