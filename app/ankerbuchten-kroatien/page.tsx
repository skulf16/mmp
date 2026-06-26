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
  title: "Die schönsten Ankerbuchten Kroatiens – Buchten-Guide",
  description:
    "Ankerbuchten Kroatien: Die schönsten Buchten von den Kornaten über Telašćica bis zu den Inseln Mitteldalmatiens – Charakter, Schutz und was sie besonders macht.",
  openGraph: {
    title: "Die schönsten Ankerbuchten Kroatiens",
    description:
      "Von Telašćica über die Kornaten bis zu den Pakleni-Inseln: die schönsten Ankerbuchten Kroatiens und was sie besonders macht.",
    images: [
      {
        url: "/images/region-kornati-cove.png",
        width: 1200,
        height: 630,
        alt: "Einsame türkise Ankerbucht in den Kornaten, Kroatien",
      },
    ],
  },
};

const buchten = [
  {
    icon: "leaf" as const,
    name: "Telašćica (Dugi Otok)",
    lage: "Naturpark an der Südspitze von Dugi Otok, nördlich der Kornaten.",
    text: "Eine der größten und sichersten Naturbuchten der Adria mit zahllosen Seitenarmen. Über einen kurzen Fußweg erreicht man den Salzsee Mir und die steil abfallenden Klippen zum offenen Meer. Schutz vor nahezu allen Richtungen – auch bei Bora ein verlässlicher Rückzugsort. In wenigen Stunden ab Šibenik erreichbar.",
  },
  {
    icon: "anchor" as const,
    name: "Kornaten-Buchten (Levrnaka, Lojena, Opat)",
    lage: "Nationalpark Kornaten, das Insellabyrinth zwischen Šibenik und Zadar.",
    text: "Karge, fast mondartige Inseln mit türkisem Wasser und kaum Bebauung. Levrnaka und die Sandbucht Lojena gehören zu den fotogensten Ankerplätzen, Opat im Süden liegt günstig zur Rückfahrt. In den Schutzzonen gilt teils Bojenpflicht, eine Nationalpark-Vignette ist Pflicht. Schutz je nach Bucht – bei Maestral angenehm, bei Bora die Nordlagen meiden.",
  },
  {
    icon: "waves" as const,
    name: "Šibenik-Archipel (Zlarin & Prvić)",
    lage: "Kleine autofreie Inseln direkt vor dem Heimathafen Šibenik.",
    text: "Zlarin und Prvić liegen so nah am Stützpunkt, dass sie sich auch für einen entspannten ersten oder letzten Törntag eignen. Ruhige Ankerbuchten, kleine Fischerorte, kurze Wege. Guter Schutz vor Maestral; bei Jugo die nach Süden offenen Buchten meiden. Der am leichtesten ab Šibenik erreichbare Ankerplatz.",
  },
  {
    icon: "sun" as const,
    name: "Maslinica (Šolta)",
    lage: "Westspitze der Insel Šolta, gegenüber von Split.",
    text: "Eine geschützte, fjordartige Bucht mit vorgelagerten Inselchen und einem kleinen, hübschen Hafen. Beliebter Stopp auf dem Weg in Richtung Mitteldalmatien. Guter Allwetterschutz im inneren Becken; bei starkem Westwind kann es vor dem Eingang ruppig werden. Ab Šibenik gut an einem Segeltag erreichbar.",
  },
  {
    icon: "snorkel" as const,
    name: "Stiniva & Budikovac (Vis)",
    lage: "Süd- und Ostseite der vorgelagerten Insel Vis, weit draußen in der Adria.",
    text: "Stiniva ist eine berühmte, von Felswänden gerahmte Mini-Bucht – wegen des engen Zugangs eher zum Ankern davor und Hineinschnorcheln. Vor der Insel Budikovac liegt eine flache, türkise Lagune. Vis liegt weiter draußen: am schönsten auf einem längeren Törn ab Šibenik. Schutz wechselt mit der Richtung, vorher Wetter prüfen.",
  },
  {
    icon: "sparkle" as const,
    name: "Pakleni-Inseln (Hvar)",
    lage: "Kleine Inselgruppe direkt vor der Stadt Hvar.",
    text: "Ein Streuobst aus Buchten und Ankerplätzen mit klarem Wasser und kurzer Distanz zum Nachtleben von Hvar. Beliebt und im Hochsommer voll – früh am Tag eintreffen. Einzelne Buchten bieten Schutz aus unterschiedlichen Richtungen, sodass sich fast immer ein windgerechter Platz findet. Auf einem mehrtägigen Törn ab Šibenik gut machbar.",
  },
  {
    icon: "shield" as const,
    name: "Lučice (Brač)",
    lage: "Südküste der Insel Brač, nahe dem Ort Milna.",
    text: "Eine tief eingeschnittene, mehrarmige Bucht mit Pinienufern und ruhigem Wasser. Sehr guter Schutz aus mehreren Richtungen macht sie zu einem klassischen Übernachtungsplatz. Bei Jugo aus Süd-Südost kann Schwell hereinlaufen – dann in die inneren Arme verholen. Liegt auf der Strecke nach Mitteldalmatien, ab Šibenik an einem langen Segeltag erreichbar.",
  },
  {
    icon: "droplet" as const,
    name: "Krka-Mündung & Skradin",
    lage: "Im geschützten Šibeniker Kanal flussaufwärts, am Tor zum Krka-Nationalpark.",
    text: "Kein klassischer Ankerplatz im Türkis, aber ein windgeschützter Rückzugsort tief im Land – ideal, wenn draußen Bora oder Jugo wehen. Von Skradin aus erreicht man die Wasserfälle des Krka-Nationalparks. Praktisch unmittelbar ab dem Heimathafen ansteuerbar.",
  },
];

const facts = [
  "Die schönsten Ankerbuchten Kroatiens liegen rund um die Kornaten, den Naturpark Telašćica und die Inseln Mitteldalmatiens – viele davon ab Šibenik in wenigen Stunden erreichbar.",
  "Telašćica an der Südspitze von Dugi Otok ist eine der größten und sichersten Naturbuchten der Adria und bietet selbst bei Bora verlässlichen Schutz.",
  "Für die Kornaten und Telašćica ist eine Nationalpark-Vignette nötig; in Schutzgebieten gilt teils Bojenpflicht statt freiem Ankern.",
  "Welche Ankerbucht in Kroatien geschützt liegt, hängt vom Wind ab: bei Maestral aus Nordwest und Bora aus Nordost sind nach Norden offene Buchten zu meiden.",
  "Der Heimathafen der Miss Moneypenny ist die Marina Mandalina in Šibenik – die Inseln Zlarin und Prvić sowie der Naturpark Telašćica sind von dort am schnellsten erreichbar.",
  "Die Miss Moneypenny ist ein Lagoon-400-S2-Katamaran mit nur 1,30 m Tiefgang, Wassermacher und Solaranlage – damit lässt es sich tagelang autark vor Anker in einsamen Buchten liegen.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Welche sind die schönsten Ankerbuchten in Kroatien?",
    a: "Zu den schönsten Ankerbuchten Kroatiens zählen der Naturpark Telašćica mit dem Salzsee Mir, die einsamen Kornaten-Buchten wie Levrnaka und Lojena, Maslinica auf Šolta, Stiniva und Budikovac auf Vis, die Pakleni-Inseln vor Hvar und die mehrarmige Bucht Lučice auf Brač. Direkt vor dem Heimathafen Šibenik liegen außerdem die ruhigen Inseln Zlarin und Prvić.",
  },
  {
    q: "Welche Ankerbucht ist ab Šibenik am schnellsten erreichbar?",
    a: "Am schnellsten erreichbar sind die autofreien Inseln Zlarin und Prvić sowie die geschützte Krka-Mündung bei Skradin – sie eignen sich gut für den ersten oder letzten Törntag. Der Naturpark Telašćica und die ersten Kornaten-Buchten liegen ab der Marina Mandalina nur wenige Stunden entfernt. Inseln wie Vis oder Hvar lohnen sich auf einem mehrtägigen Törn.",
  },
  {
    q: "Welche Bucht ist bei Bora sicher?",
    a: "Bei Bora aus Nordost bietet der Naturpark Telašćica mit seinen tiefen Seitenarmen sehr guten Schutz, ebenso der windgeschützte Šibeniker Kanal und die Krka-Mündung bei Skradin. Generell sollte man bei Bora und Maestral nach Norden offene Ankerbuchten meiden und Buchten suchen, die der Wind nicht direkt erreicht.",
  },
  {
    q: "Braucht man für die schönsten Buchten in Kroatien eine Vignette?",
    a: "Für die Kornaten und den Naturpark Telašćica ist eine Nationalpark-Vignette nötig, die man am besten vorab online vorbestellt. In einzelnen Schutzzonen besteht zudem Bojenpflicht, freies Ankern ist dort also nicht erlaubt. Die Regeln, Gebühren und Bojenfelder erklären wir ausführlich im Ratgeber Ankern in Kroatien.",
  },
  {
    q: "Kann man in den einsamen Ankerbuchten übernachten?",
    a: "Ja. Die Miss Moneypenny ist ein Lagoon-400-S2-Katamaran mit Wassermacher, 300-Liter-Wassertank und leistungsstarker Solaranlage und kann dadurch tagelang autark vor Anker liegen. Der geringe Tiefgang von nur 1,30 m erlaubt es, auch flachere Ankerbuchten anzusteuern. Wo Bojenpflicht gilt, nutzt ihr statt des Ankers ein Bojenfeld.",
  },
];

export default function AnkerbuchtenKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Buchten & Ankern"
        title="Die schönsten Ankerbuchten Kroatiens"
        lede="Von Telašćica über die Kornaten bis zu den Inseln Mitteldalmatiens: die schönsten Ankerbuchten Kroatiens – mit Lage, Charakter und Schutz vor Wind und Wetter."
        image="/images/region-kornati-cove.png"
        imageAlt="Einsame türkise Ankerbucht in den Kornaten, Kroatien"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/ratgeber" }, { label: "Ankerbuchten Kroatien" }]}
      />

      <ArticleByline slug="ankerbuchten-kroatien" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Einleitung */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Worum es hier geht</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Wo Kroatien am schönsten ankert.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Die schönsten Ankerbuchten Kroatiens liegen dicht beieinander: ein
              Inselarchipel aus mehr als tausend Eilanden, dazwischen geschützte
              Naturhäfen, türkise Sandbuchten und tiefe, fjordartige Einschnitte.
              Diese Seite ist eine ehrliche Auswahl der schönsten Buchten Kroatiens –
              mit Schwerpunkt auf dem Aktionsradius ab Šibenik, dem Heimathafen der
              Miss Moneypenny. Zu jeder Ankerbucht findet ihr Lage, Charakter, den
              Schutz vor welchem Wind und das, was sie besonders macht.
            </p>
            <p>
              Wichtig zur Abgrenzung: Hier geht es um das <strong>Wo</strong> – welche
              Ankerbucht in Kroatien sich wofür eignet. Die <strong>Regeln</strong>,
              also Ankergebühren, Bojenfelder, Nationalpark-Vignetten und die richtige
              Ankertechnik, behandeln wir gesondert im Ratgeber{" "}
              <Link href="/ankern-kroatien">Ankern in Kroatien</Link>. Wer von Šibenik
              aus startet, hat den Vorteil, dass die ruhigen Inseln Zlarin und Prvić,
              der Naturpark Telašćica und die ersten Kornaten-Buchten allesamt in
              wenigen Stunden erreichbar sind.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bucht-Grid */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Die Auswahl</span>
            <h2 className="section-title">Schönste Buchten Kroatiens – von Telašćica bis Brač.</h2>
            <p className="lede">
              Acht Ankerbuchten mit Charakter – geordnet grob nach Distanz ab Šibenik.
            </p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {buchten.map((b, i) => (
              <Reveal key={b.name} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={b.icon} /></span>
                  <h3>{b.name}</h3>
                  <p style={{ fontWeight: 600, color: "var(--navy-900)", marginBottom: "0.5rem" }}>{b.lage}</p>
                  <p>{b.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bild-Split: Kornaten */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Das Herzstück</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Kornaten & Telašćica – das Revier vor der Haustür.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Die 89 Inseln des Nationalparks Kornaten sind das landschaftliche
                  Gegenstück zu den Städten Dalmatiens: karg, fast mondartig, kaum
                  bebaut – und genau deshalb so eindrucksvoll. Wer hier ankert, liegt
                  oft allein in einer türkisen Bucht, mit nichts als Stein, Wasser und
                  Wind. Direkt nördlich schließt der Naturpark Telašćica an, dessen
                  weit verzweigte Hauptbucht bei nahezu jedem Wetter Schutz bietet.
                </p>
                <p>
                  Beides liegt ab Šibenik in wenigen Stunden – ideal für einen Törn,
                  der Natur über alles stellt. Eine ausführliche Tagesetappe haben wir
                  im <Link href="/toernvorschlag-kornaten">Törnvorschlag für die
                  Kornaten</Link> beschrieben; das Revier selbst stellen wir unter{" "}
                  <Link href="/segeln-in-den-kornaten">Segeln in den Kornaten</Link>{" "}
                  vor. Für beide Schutzgebiete gilt: Nationalpark-Vignette vorab
                  besorgen und in den Schutzzonen die ausgewiesenen Bojen nutzen.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/region-kornati-aerial.png" alt="Luftbild der Kornaten mit zahlreichen einsamen Ankerbuchten" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Schutz & Wind */}
      <section className="section surface-navy">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div" delay={1}>
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bay-catamaran.png" alt="Katamaran sicher vor Anker in einer geschützten Bucht Kroatiens" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Welche Bucht bei welchem Wind</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Schutz richtig wählen.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Ob eine Ankerbucht in Kroatien angenehm oder unruhig ist, entscheidet
                  fast immer der Wind. Der thermische Maestral aus Nordwest baut sich
                  über Mittag auf und weht nachmittags mit 3–5 Beaufort – nach Nordwest
                  offene Buchten werden dann schwellig. Die Bora aus Nordost ist
                  seltener im Sommer, kommt aber böig und plötzlich; nach Norden offene
                  Ankerplätze sind dann zu meiden. Der Jugo aus Süd-Südost schiebt
                  langen Seegang vor sich her, sodass nach Süden offene Buchten
                  unruhig werden.
                </p>
                <p>
                  Praktisch heißt das: Bei Bora oder schlechtem Wetter sind Telašćica,
                  der Šibeniker Kanal und die Krka-Mündung bei Skradin verlässliche
                  Rückzugsorte. Mehr zur Mechanik der Adria-Winde lest ihr unter{" "}
                  <Link href="/winde-kroatien">Winde in Kroatien</Link>; wie Ankern,
                  Bojenfelder und Gebühren im Detail funktionieren, steht im Ratgeber{" "}
                  <Link href="/ankern-kroatien">Ankern in Kroatien</Link>.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Autark vor Anker */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">An Bord</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Tagelang autark in der Bucht.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Die schönsten Ankerbuchten Kroatiens entfalten ihren Reiz erst, wenn man
              bleiben kann. Die Miss Moneypenny – ein Lagoon 400 S2 mit nur 1,30 m
              Tiefgang – steuert auch flachere Buchten an, wo tiefere Yachten nicht
              hinkommen. Ein Wassermacher per Umkehrosmose, ein 300-Liter-Tank sowie
              eine leistungsstarke Solaranlage mit Inverter machen das Schiff für
              mehrere Tage unabhängig von Marina und Steckdose.
            </p>
            <p>
              Die elektrische Ankerwinsch nimmt das Ankermanöver ab, die Außendusche an
              der Badeplattform und die Schnorchelausrüstung gehören zum Bordstandard.
              So lässt sich morgens in der einsamen Kornaten-Bucht schwimmen und
              abends die nächste Ankerbucht ansteuern – ohne abends zwingend einen
              Hafen suchen zu müssen. Wer das Revier rund um den Heimathafen genauer
              kennenlernen möchte, findet alle Details unter{" "}
              <Link href="/revier-sibenik">Segelrevier Šibenik</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Eure Lieblingsbucht wartet.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die Miss Moneypenny liegt in der Marina Mandalina, Šibenik – von dort
              erreicht ihr Telašćica, die Kornaten und die Inseln Mitteldalmatiens.
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
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Ankerbuchten Kroatien – häufige Fragen.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/ankerbuchten-kroatien#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/region-kornati-cove.png" />
    </>
  );
}
