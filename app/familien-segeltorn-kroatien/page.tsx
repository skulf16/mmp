import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ArticleByline from "@/components/ArticleByline";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import FaqSection from "@/components/FaqSection";
import { Icon, ArrowRight } from "@/components/Icons";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Familien-Segeltörn Kroatien: Segeln mit Kindern auf dem Katamaran",
  description:
    "Familien-Segeltörn in Kroatien: Warum ein Katamaran das ideale Familienboot ist, das familienfreundliche Revier um Šibenik, beste Reisezeit und Tipps fürs Segeln mit Kindern.",
  openGraph: {
    title: "Familien-Segeltörn Kroatien – Segeln mit Kindern auf dem Katamaran",
    description:
      "Segeln mit Kindern in Kroatien: stabiler Katamaran, geschützte Gewässer ab Šibenik, beste Reisezeit und praktische Tipps für den Familienurlaub auf dem Wasser.",
    images: [{ url: "/images/yacht-swim-platform.jpg", width: 1200, height: 630, alt: "Familie badet von der Badeplattform des Katamarans in einer ruhigen Bucht in Kroatien" }],
  },
};

const tipps = [
  {
    icon: "shield" as const,
    title: "Rettungswesten in Kindergröße",
    text: "Passende Schwimmwesten für jedes Kind solltet ihr vorab abstimmen oder mitbringen – und sie an Deck und bei Fahrt konsequent tragen lassen.",
  },
  {
    icon: "sun" as const,
    title: "Schatten & Sonnenschutz",
    text: "Sonnencreme mit hohem Lichtschutzfaktor, Hüte und UV-Shirts gehören ins Gepäck. Das Bimini spendet im Cockpit den ganzen Tag Schatten.",
  },
  {
    icon: "anchor" as const,
    title: "Kurze Etappen planen",
    text: "Lieber wenige Seemeilen pro Tag mit langen Badepausen als lange Schläge. Das hält die Stimmung an Bord entspannt – gerade mit jüngeren Kindern.",
  },
  {
    icon: "snorkel" as const,
    title: "Schnorcheln & Wassersport",
    text: "Schnorchelausrüstung ist an Bord, ein SUP lässt sich dazubuchen – ideal, um Kinder in ruhigen Buchten stundenlang zu beschäftigen.",
  },
  {
    icon: "waves" as const,
    title: "Klare Bordregeln",
    text: "Eine kurze, kindgerechte Sicherheitseinweisung zu Beginn schafft Klarheit: Wo ist Festhalten Pflicht, wann wird die Weste getragen, wo wird nicht gerannt?",
  },
  {
    icon: "wifi" as const,
    title: "WLAN an Bord",
    text: "Internet ist an Bord – für die Wettervorschau, den Notfall und ein wenig Bildschirmzeit, wenn das Wetter doch einmal eine Pause einlegt.",
  },
];

const ratgeber = [
  { titel: "Segeltörn planen", beschr: "In 8 Schritten zum Törn", href: "/segeltorn-planen", icon: "calendar" as const },
  { titel: "Mit Skipper segeln", beschr: "Ohne Führerschein unterwegs", href: "/segeltorn-kroatien-skipper", icon: "wheel" as const },
  { titel: "Packliste Kroatien", beschr: "Was ihr fürs Revier braucht", href: "/packliste-segeln-kroatien", icon: "shield" as const },
  { titel: "Speiseplan", beschr: "7 Tage Bordküche", href: "/speiseplan-segeltorn", icon: "sun" as const },
  { titel: "Ankern in Kroatien", beschr: "Regeln & beste Buchten", href: "/ankern-kroatien", icon: "waves" as const },
  { titel: "Kroatien Inselhopping", beschr: "Von Bucht zu Bucht", href: "/kroatien-inselhopping", icon: "anchor" as const },
];

const facts = [
  "Ein Familien-Segeltörn in Kroatien verbindet Badeurlaub und Abenteuer – mit kurzen Distanzen, warmem Wasser und unzähligen geschützten Buchten.",
  "Der Katamaran Miss Moneypenny liegt dank seiner zwei Rümpfe nahezu krängungsfrei und ruhig im Wasser, beugt Seekrankheit vor und lässt auch Kinder sicher an Deck spielen.",
  "Die Lagoon 400 S2 bietet vier Doppelkabinen mit je eigenem Bad plus zwei Bugkabinen – Platz und Privatsphäre für Familien mit bis zu acht Personen.",
  "Heimathafen ist die Marina Mandalina in Šibenik; die geschützten Gewässer und die kurzen Wege zu den Kornaten und zum Krka-Nationalpark sind ideal für Familien.",
  "Juni und September gelten als beste Reisezeit für Familien: warmes Wasser, verlässlicher Maestral mit 3–5 Beaufort und ruhigere Buchten als in der Hochsaison.",
  "Wer keinen Segelschein hat, bucht einen erfahrenen Skipper dazu und kann sich im Urlaub ganz auf die Familie konzentrieren.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Ist ein Segeltörn in Kroatien für Familien mit kleinen Kindern geeignet?",
    a: "Ja, sehr gut sogar. Die Adria bietet kurze Distanzen, warmes, sauberes Wasser und viele geschützte Buchten. Ein Katamaran wie die Miss Moneypenny liegt dabei ruhig und stabil im Wasser, und über die breite Badeplattform am Heck kommen auch die Kleinsten bequem ins Wasser und wieder zurück an Bord. Die geschützten Gewässer rund um Šibenik machen schon die ersten Seemeilen entspannt.",
  },
  {
    q: "Warum ist ein Katamaran besser für Familien als eine Einrumpfyacht?",
    a: "Ein Katamaran krängt kaum – das Boot legt sich nicht zur Seite, Seekrankheit ist deutlich seltener, und Kinder bewegen sich an Deck sicherer. Dazu kommt der Platz: ein breites, geschütztes Cockpit, ein großes Bugtrampolin zum Liegen und vier separate Doppelkabinen mit je eigenem Bad. So hat jede Familie ihren Rückzugsort, und niemand muss sich eine enge Nasszelle teilen.",
  },
  {
    q: "Brauchen wir einen Segelschein für den Familientörn?",
    a: "Nein. Wenn niemand in der Familie einen Segelschein hat, bucht ihr die Miss Moneypenny einfach mit einem erfahrenen Skipper. Er übernimmt Navigation und Manöver, kennt die sichersten Buchten und behält Wetter und Crew im Blick. Für Familien ist das oft die entspannteste Lösung – und wer möchte, lernt beim Mitsegeln nebenbei dazu.",
  },
  {
    q: "Wann ist die beste Reisezeit für einen Familien-Segeltörn in Kroatien?",
    a: "Juni und September sind ideal: Das Wasser ist warm, der Maestral weht verlässlich mit 3–5 Beaufort, und die Buchten sind ruhiger. Wer an die Schulferien gebunden ist, segelt im Juli und August bei bestem Badewetter – dann lohnt es sich, früh zu buchen und beliebte Ankerplätze schon am Vormittag anzusteuern.",
  },
  {
    q: "Welche Sicherheitsausrüstung brauchen Kinder an Bord?",
    a: "Wichtig sind passende Rettungswesten in Kindergröße, die ihr am besten vorab abstimmt oder mitbringt und an Deck konsequent tragen lasst. Dazu kommen guter Sonnenschutz und eine kurze, kindgerechte Sicherheitseinweisung zu Beginn des Törns. Plant außerdem kurze Etappen mit langen Badepausen ein – das hält die Stimmung an Bord entspannt.",
  },
];

export default function FamilienSegeltornKroatienPage() {
  return (
    <>
      <PageHero
        eyebrow="Familienurlaub"
        title="Familien-Segeltörn Kroatien"
        lede="Segeln mit Kindern auf dem Katamaran: Warum die Adria das familienfreundlichste Revier Europas ist, was ein Katamaran für Familien so wertvoll macht und wie ihr den Törn entspannt plant."
        image="/images/yacht-swim-platform.jpg"
        imageAlt="Badeplattform des Katamarans Miss Moneypenny in einer ruhigen Bucht – ideal für den Familienurlaub auf dem Wasser"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/ratgeber" }, { label: "Familien-Segeltörn Kroatien" }]}
      />

      <ArticleByline slug="familien-segeltorn-kroatien" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Urlaub & Abenteuer zugleich</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Warum ein Familien-Segeltörn in Kroatien?</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Ein Familien-Segeltörn in Kroatien verbindet das Beste aus zwei Welten:
              Badeurlaub und Abenteuer. Statt jeden Morgen am überfüllten Hotelstrand um
              Liegen zu kämpfen, wacht ihr in einer ruhigen Bucht auf, springt vor dem
              Frühstück ins glasklare Wasser und entscheidet erst beim Kaffee, wohin der
              Tag euch trägt.
            </p>
            <p>
              Die kroatische Adria mit ihren über tausend Inseln, kurzen Distanzen und
              geschützten Gewässern gilt zu Recht als eines der familienfreundlichsten
              Segelreviere Europas. Die Wege zwischen den Inseln sind kurz, das Wasser ist
              warm und sauber, und an fast jeder Ecke wartet eine neue Bucht zum Ankern,
              Schnorcheln und Entdecken. Genau das macht das Segeln mit Kindern hier so
              entspannt.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Katamaran für Familien */}
      <section className="section surface-sand">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Die ideale Familienyacht</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Warum ein Katamaran perfekt für Familien ist.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Wer mit Kindern segelt, profitiert besonders von einem Katamaran. Die
                  zwei Rümpfe sorgen dafür, dass die Miss Moneypenny nahezu krängungsfrei
                  und ruhig im Wasser liegt – das Boot legt sich nicht zur Seite,
                  Seekrankheit ist kaum ein Thema, und auch kleinere Kinder bewegen sich an
                  Deck sicher. Auf dem großzügigen Bugtrampolin liegen die Kinder
                  stundenlang und beobachten das Wasser unter sich. Das breite, geschützte
                  Cockpit wird zum Wohnzimmer der Familie: Hier wird gegessen, gespielt und
                  gelesen, während die Erwachsenen den Überblick behalten.
                </p>
                <p>
                  Platz spielt auf einem Familientörn eine große Rolle. Die Lagoon 400 S2
                  bietet vier separate Doppelkabinen plus zwei Bugkabinen für bis zu acht
                  Gäste. Jede der vier Doppelkabinen hat ein eigenes Bad – Eltern und Kinder
                  müssen sich keine enge Nasszelle teilen, und jeder hat seinen
                  Rückzugsort. Über die breite Badeplattform am Heck geht es bequem ins
                  Wasser und wieder zurück an Bord, auch für die Kleinsten.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-cockpit-dining.jpg" alt="Geschütztes Cockpit des Katamarans mit Esstisch – das Familienwohnzimmer an Bord" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Revier */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div" delay={1}>
              <div className="media-frame tall frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bay-catamaran.png" alt="Katamaran vor Anker in einer geschützten Bucht nahe Šibenik – familienfreundliches Segelrevier" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow">Geschützt & abwechslungsreich</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Das richtige Revier: Šibenik, Krka & Kornaten.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Heimathafen der Miss Moneypenny ist die Marina Mandalina in Šibenik –
                  ein idealer Ausgangspunkt für Familien. Die Gewässer rund um Šibenik sind
                  durch vorgelagerte Inseln und den langen Kanal vor dem offenen Meer
                  geschützt, sodass die ersten Seemeilen ruhig und entspannt verlaufen.
                </p>
                <p>
                  Von dort sind es nur wenige Stunden bis in die Kornaten mit ihren
                  einsamen Ankerbuchten oder hinein in den Krka-Nationalpark mit seinen
                  berühmten Wasserfällen, die gerade Kinder begeistern. Weil die Distanzen
                  kurz sind, lässt sich jeder Segeltag an den Rhythmus der Familie
                  anpassen: kurze Schläge am Vormittag, lange Badepausen am Nachmittag.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} style={{ marginTop: "1.6rem" }}>
                <Link href="/revier-sibenik" className="link-arrow" style={{ display: "inline-flex", fontSize: "0.9rem" }}>
                  Mehr zum Revier Šibenik <ArrowRight />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Reisezeit & Skipper */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Gut zu wissen</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Reisezeit & Skipper für den Familienurlaub.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Für einen Familienurlaub auf dem Wasser eignen sich vor allem die Monate
              Juni und September. Das Wasser ist dann bereits angenehm warm, der
              verlässliche Maestral weht mit moderaten 3 bis 5 Beaufort am Nachmittag, und
              die Buchten sind weniger überlaufen als in der Hochsaison. Wer an die
              Schulferien gebunden ist, segelt im Juli und August bei bestem Badewetter –
              dann lohnt es sich, früh zu buchen und die beliebten Ankerplätze schon am
              Vormittag anzusteuern.
            </p>
            <p>
              Ihr habt keinen Segelschein oder wollt im Familienurlaub einfach nichts
              organisieren müssen? Dann bucht ihr die Miss Moneypenny mit einem erfahrenen
              Skipper. Er übernimmt Navigation, Manöver und das Ankern, kennt die schönsten
              und sichersten Buchten und hat ein Auge auf Wetter und Crew. Für Familien ist
              das oft die entspannteste Lösung: Die Eltern können sich ganz den Kindern
              widmen, und wer möchte, lernt beim Mitsegeln ganz nebenbei dazu.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tipps an Bord */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Sicher unterwegs mit Kindern</span>
            <h2 className="section-title">Tipps für den Törn mit der ganzen Familie.</h2>
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

      {/* Ratgeber Hub */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Weiterlesen</span>
            <h2 className="section-title">Noch besser vorbereitet in den Familientörn.</h2>
          </Reveal>
          <div className="grid-4" style={{ marginTop: "3rem" }}>
            {ratgeber.map((r, i) => (
              <Reveal key={r.titel} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link href={r.href} style={{ display: "block", textDecoration: "none" }}>
                  <article className="feature" style={{ cursor: "pointer", transition: "border-color 0.3s" }}>
                    <span className="ic"><Icon name={r.icon} /></span>
                    <h3 style={{ fontSize: "1rem" }}>{r.titel}</h3>
                    <p style={{ fontSize: "0.88rem" }}>{r.beschr}</p>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Euer Familienabenteuer auf der Adria.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die Miss Moneypenny liegt in der Marina Mandalina in Šibenik – bereit für
              eine Woche voller Buchten, Badestopps und gemeinsamer Stunden an Bord.
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
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Familien-Segeltörn – häufige Fragen.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/familien-segeltorn-kroatien#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-swim-platform.jpg" />
    </>
  );
}
