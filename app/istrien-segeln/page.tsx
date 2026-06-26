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
  title: "Istrien segeln: Reviere, Häfen & Highlights der Nordadria",
  description:
    "Istrien segeln: Das unterschätzte Revier im Norden Kroatiens – Pula, Rovinj, die Brijuni-Inseln und der Limski-Kanal, mit Häfen, Winden und Törn-Tipps.",
  openGraph: {
    title: "Segeln in Istrien – das unterschätzte Revier der Nordadria",
    description:
      "Istriens Segelrevier: Pula, Rovinj, Brijuni und der Limski-Kanal – Häfen, Winde und warum sich die Nordadria lohnt.",
    images: [
      {
        url: "/images/yacht-sailing-side.jpg",
        width: 1200,
        height: 630,
        alt: "Segelyacht unter vollen Segeln in der Nordadria vor Istrien",
      },
    ],
  },
};

const highlights = [
  {
    icon: "anchor" as const,
    title: "Pula",
    text: "Die größte Stadt Istriens lockt mit einem der besterhaltenen römischen Amphitheater der Welt. Die Marina Pula liegt geschützt im weiten Naturhafen und ist ein logischer Start- oder Endpunkt für einen Istrien-Törn.",
  },
  {
    icon: "sparkle" as const,
    title: "Rovinj",
    text: "Die wohl fotogenste Stadt der Nordadria: venezianisch geprägte Altstadt auf einer Halbinsel, der Turm der Kirche Sveta Eufemija als Landmarke. Davor liegt ein kleines Archipel mit ruhigen Ankerbuchten.",
  },
  {
    icon: "leaf" as const,
    title: "Brijuni-Nationalpark",
    text: "Vierzehn Inseln vor der Westküste, ehemalige Sommerresidenz, heute Nationalpark mit Safaripark und römischen Ruinen. Anlaufen und Ankern sind nur in geregeltem Rahmen erlaubt – Vignette und Anmeldung vorab klären.",
  },
  {
    icon: "waves" as const,
    title: "Limski-Kanal",
    text: "Ein rund neun Kilometer tief ins Land reichender Fjord-artiger Meeresarm zwischen Rovinj und Vrsar – steile, bewaldete Hänge, Austern- und Muschelzucht, ein ungewöhnlich ruhiges Stück Nordadria.",
  },
  {
    icon: "snorkel" as const,
    title: "Vrsar & Poreč",
    text: "Die Westküste reiht kleine Häfen und Marinas eng aneinander. Vrsar am Eingang des Limski-Kanals und das antike Poreč mit der Euphrasius-Basilika eignen sich gut für kurze Etappen entlang der Küste.",
  },
  {
    icon: "wheel" as const,
    title: "Cres & Lošinj",
    text: "Östlich von Istrien beginnt die Kvarner Bucht. Die langen Inseln Cres und Lošinj sind der natürliche Übergang dorthin und ein lohnendes Ziel für längere Törns ab der Nordadria.",
  },
];

const winde = [
  {
    icon: "sun" as const,
    title: "Maestral",
    text: "Auch in der Nordadria ist der thermische Nordwest der Sommerwind: Er baut sich vormittags auf und bringt nachmittags angenehme 3–5 Beaufort. Verlässlich von Mai bis September.",
  },
  {
    icon: "wind" as const,
    title: "Bora",
    text: "Der katabatische Fallwind aus Nordost kann gerade in der Nordadria kräftig ausfallen, mit Böen bis 8–10 Beaufort. Vorhersagen ernst nehmen und Buchten mit gutem Schutz aus Nordost wählen.",
  },
  {
    icon: "droplet" as const,
    title: "Jugo",
    text: "Der Süd-Südost trägt warme, feuchte Luft heran und baut über die Zeit langen Seegang auf. Er kündigt sich langsam an – ein Blick aufs Barometer hilft, früh genug einen Hafen anzulaufen.",
  },
];

const facts = [
  "Istrien ist das nördlichste Segelrevier Kroatiens; Pula, Rovinj, der Brijuni-Nationalpark und der Limski-Kanal sind seine bekanntesten Reviermarken.",
  "Östlich von Istrien beginnt mit Cres und Lošinj die Kvarner Bucht – der natürliche Übergang für längere Törns.",
  "Der Maestral aus Nordwest ist auch hier der verlässliche Sommerwind mit 3–5 Beaufort am Nachmittag, von Mai bis September.",
  "Die Bora kann in der Nordadria besonders kräftig ausfallen, mit Böen bis 8–10 Beaufort – sie weht häufiger im Winter als im Sommer.",
  "Juni und September gelten als die goldenen Monate: warm, verlässlicher Maestral und weniger Betrieb als im Hochsommer.",
  "Der Katamaran Miss Moneypenny liegt nicht in Istrien, sondern in der Marina Mandalina in Šibenik (Mitteldalmatien) und ist auf das dortige Revier ausgerichtet.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Was macht Istrien als Segelrevier besonders?",
    a: "Wer in Istrien segeln möchte, findet ein abwechslungsreiches Revier in der Nordadria: römisch geprägte Städte wie Pula und venezianisches Flair in Rovinj, den Brijuni-Nationalpark vor der Westküste und den ungewöhnlich ruhigen Limski-Kanal. Die Distanzen entlang der Westküste sind kurz, sodass sich kulturelle Anläufe und ruhige Ankerbuchten gut kombinieren lassen.",
  },
  {
    q: "Welche Winde herrschen beim Segeln in Istrien?",
    a: "Im Sommer prägt der thermische Maestral aus Nordwest das Revier; er baut sich vormittags auf und liefert nachmittags 3–5 Beaufort. Die Bora aus Nordost kann gerade in der Nordadria kräftig ausfallen, mit Böen bis 8–10 Beaufort, weht aber häufiger im Winter. Der Jugo aus Süd-Südost ist seltener, kündigt sich langsam an und baut langen Seegang auf.",
  },
  {
    q: "Wann ist die beste Reisezeit für einen Istrien-Törn?",
    a: "Die Saison reicht von Mai bis Oktober. Juni und September sind die goldenen Monate mit warmem Wetter, verlässlichem Maestral und weniger Betrieb. Juli und August sind heiß und stark frequentiert; die beliebten Häfen an der Westküste füllen sich dann früh am Nachmittag.",
  },
  {
    q: "Liegt die Miss Moneypenny in Istrien?",
    a: "Nein. Die Miss Moneypenny ist ein Lagoon-400-S2-Katamaran mit Heimathafen in der Marina Mandalina in Šibenik, also in Mitteldalmatien – ein gutes Stück südöstlich von Istrien. Istrien ist ein eigenständiges Revier im Norden. Wer ab Šibenik segeln möchte, erreicht von dort in wenigen Stunden die Kornaten, den Krka-Nationalpark, Telašćica sowie die Städte Trogir, Split, Hvar und Korčula.",
  },
  {
    q: "Brauche ich für die Brijuni-Inseln eine Vignette?",
    a: "Brijuni ist ein Nationalpark, in dem das Anlaufen und Ankern geregelt ist. Wie für andere kroatische Schutzgebiete ist eine Vignette nötig, die ihr am besten vorab online besorgt; in Teilen der Schutzgebiete gilt zudem eine Bojenpflicht. Plant solche Anläufe frühzeitig ein und prüft die aktuellen Bedingungen vor dem Törn.",
  },
];

export default function IstrienSegelnPage() {
  return (
    <>
      <PageHero
        eyebrow="Revier Nordadria"
        title="Segeln in Istrien – das unterschätzte Revier der Nordadria"
        lede="Pula, Rovinj, Brijuni und der Limski-Kanal: Istrien ist Kroatiens nördlichstes Segelrevier – kurze Distanzen, viel Kultur und ein ganz eigener Charakter."
        image="/images/yacht-sailing-side.jpg"
        imageAlt="Segelyacht unter vollen Segeln in der Nordadria vor Istrien"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Ratgeber", href: "/ratgeber" },
          { label: "Istrien segeln" },
        ]}
      />

      <ArticleByline slug="istrien-segeln" />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div">
            <FactBox facts={facts} />
          </Reveal>
        </div>
      </section>

      {/* Einleitung / Charakter */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div">
            <span className="eyebrow">Der Norden Kroatiens</span>
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title">
            Istrien segeln – das unterschätzte Revier im Norden.
          </Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Wenn vom Segeln in Kroatien die Rede ist, fallen meist zuerst die
              Kornaten, Split oder die süddalmatinischen Inseln. Dabei hat der
              Norden ein Revier zu bieten, das viele unterschätzen: Istrien. Die
              herzförmige Halbinsel an der Nordadria verbindet auf engem Raum
              römische Antike, venezianisches Erbe und ruhige Naturküsten – und
              die Distanzen sind so kurz, dass sich an einem Tag mehrere Anläufe
              kombinieren lassen.
            </p>
            <p>
              Das Segelrevier Istrien reicht grob von Pula im Süden über Rovinj,
              Vrsar und Poreč an der Westküste bis hinauf zur slowenischen
              Grenze. Vorgelagert liegt der Brijuni-Nationalpark, tief ins Land
              schneidet der Limski-Kanal. Wer weiter will, segelt nach Osten in
              die Kvarner Bucht mit den langen Inseln Cres und Lošinj. Der
              Charakter ist ein anderer als in den weiten Inselwelten Dalmatiens:
              Hier dominieren Stadt-Anläufe, kurze Etappen und eine Küste, die
              kulturell dichter besiedelt ist.
            </p>
            <p>
              Eine ehrliche Einordnung vorweg, weil sie für die Planung wichtig
              ist: Istrien ist ein eigenständiges Revier im äußersten Norden
              Kroatiens. Es ist nicht das Revier, in dem die{" "}
              <em>Miss Moneypenny</em> liegt. Unser Katamaran hat seinen
              Heimathafen in Šibenik, ein gutes Stück südöstlich in
              Mitteldalmatien. Mehr dazu weiter unten – zunächst der Blick auf
              das, was Istrien als Segelrevier ausmacht.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Reviermarken</span>
            <h2 className="section-title">Die Highlights des Segelreviers Istrien.</h2>
            <p className="lede">
              Sechs Anlaufpunkte, die einen Istrien-Törn prägen – von der
              Hafenstadt bis zum Übergang in die Kvarner Bucht.
            </p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic">
                    <Icon name={h.icon} />
                  </span>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Häfen & Marinas (Bild-Split) */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div">
                <span className="eyebrow">Infrastruktur</span>
              </Reveal>
              <Reveal as="h2" delay={1} className="section-title">
                Häfen, Marinas und der Charakter des Reviers.
              </Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Istrien ist gut erschlossen. Entlang der Westküste reihen sich
                  Marinas und Stadthäfen dicht aneinander: Pula, Rovinj, Vrsar,
                  Poreč und Umag bieten Liegeplätze mit voller Versorgung. Weil
                  die Etappen kurz sind, lässt sich nahezu jeder Abend in einem
                  Hafen oder einer geschützten Bucht ausklingen – das macht das
                  Revier auch für weniger erfahrene Crews planbar.
                </p>
                <p>
                  Wer lieber vor Anker liegt, findet rund um Rovinj, vor den
                  vorgelagerten Inselchen und im Schutz des Limski-Kanals ruhige
                  Plätze. In Schutzgebieten wie Brijuni gelten besondere Regeln:
                  Anlaufen und Ankern sind nur in geregeltem Rahmen erlaubt, eine
                  Vignette ist nötig und teils besteht Bojenpflicht. Solche
                  Anläufe gehören frühzeitig in die Planung.
                </p>
                <p>
                  Die Liegegebühren in den Marinas der Nordadria bewegen sich
                  saisonabhängig oft in einer Spanne von etwa 60 bis 120 € pro
                  Nacht für eine Yacht in dieser Größenklasse, in Spitzenhäfen zur
                  Hochsaison auch darüber. <em>Richtwerte, Stand 2026 – variiert
                  je nach Saison, Bootsgröße und Anbieter; verbindliche Zahlen auf
                  Anfrage.</em>
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/yacht-sailing-coast.jpg"
                  alt="Segelyacht entlang der bewaldeten Küste der Nordadria"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Winde */}
      <section className="section surface-navy">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Segelwetter</span>
            <h2 className="section-title">Die Winde der Nordadria.</h2>
            <p className="lede">
              Die drei prägenden Winde gelten in ganz Kroatien – in Istrien mit
              einer Besonderheit bei der Bora.
            </p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {winde.map((w, i) => (
              <Reveal key={w.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic">
                    <Icon name={w.icon} />
                  </span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal as="div" delay={3} className="prose" style={{ marginTop: "2.5rem", maxWidth: "60ch" }}>
            <p>
              Eine vertiefte Erklärung zu Entstehung, Stärke und Warnsignalen
              jedes Windes findet ihr in unserem Ratgeber zu den{" "}
              <Link href="/winde-kroatien">Winden in Kroatien</Link>. Gerade in
              der Nordadria lohnt es sich, die Bora-Vorhersage genau zu verfolgen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Für wen geeignet */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div">
            <span className="eyebrow">Einordnung</span>
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title">
            Für wen sich das Segelrevier Istrien eignet.
          </Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Istrien spielt seine Stärken vor allem für Crews aus, die Kultur,
              kurze Schläge und planbare Tage schätzen. Wer gern jeden Abend in
              einem charmanten Stadthafen festmacht, abends durch venezianische
              Gassen schlendert und tagsüber kurze, entspannte Etappen segelt,
              ist hier richtig. Auch für die Anreise aus Mitteleuropa ist die
              Nordadria ein Pluspunkt: Sie ist deutlich schneller erreichbar als
              die süddalmatinischen Reviere.
            </p>
            <p>
              Wer dagegen die großen, einsamen Inselwelten sucht – endlose
              Ankerbuchten, lange Schläge zwischen den Inseln, Nationalpark-Natur
              mit wenig Besiedlung – findet sein Revier weiter südlich. Das ist
              keine Wertung, sondern eine Frage des Typs: Beide Reviere segeln
              sich gut, aber sie fühlen sich unterschiedlich an. Ein Vergleich der
              kroatischen Reviere hilft bei der Wahl – mehr dazu im Überblick zum{" "}
              <Link href="/segelrevier-kroatien">Segelrevier Kroatien</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Šibenik-Ehrlichkeit / Überleitung */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div">
            <span className="eyebrow">Wichtige Einordnung</span>
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title">
            Die Miss Moneypenny startet ab Šibenik – nicht in Istrien.
          </Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Damit hier nichts unklar bleibt: Unser Katamaran, eine Lagoon 400
              S2 aus dem Baujahr 2016, liegt in der Marina Mandalina in Šibenik –
              also in Mitteldalmatien, ein gutes Stück südöstlich von Istrien.
              Istrien ist ein eigenständiges Revier im Norden, das ihr mit einem
              anderen Charterboot vor Ort ansteuert. Wir behaupten nicht, dass
              die Miss Moneypenny in der Nordadria liegt.
            </p>
            <p>
              Wer Mitteldalmatien ab Šibenik segeln möchte, findet hier ideale
              Bedingungen: Von der Marina Mandalina erreicht ihr in wenigen
              Stunden die Kornaten mit ihren 89 Inseln, den Krka-Nationalpark mit
              seinen Wasserfällen und die Naturbucht Telašćica – dazu die Städte
              Trogir, Split, Hvar und Korčula sowie die kleinen Inseln Zlarin und
              Prvić. Eine Übersicht des Heimatreviers findet ihr im{" "}
              <Link href="/revier-sibenik">Revier Šibenik</Link>, konkrete
              Routenideen für eine Woche im Ratgeber zu den{" "}
              <Link href="/segeltorn-routen-kroatien">
                Segeltörn-Routen in Kroatien
              </Link>
              .
            </p>
            <p>
              Im Charterpreis ab rund 2.500 € pro Woche in der Nebensaison sind
              Bettwäsche und Handtücher, Endreinigung, Gas und Kurtaxe, der
              Außenborder fürs Beiboot, Transitlog und Hafengebühr im Heimathafen,
              WLAN, Schnorchelausrüstung sowie eine 24/7-Notfallbereitschaft
              enthalten. Wer keinen Sportbootführerschein hat, bucht einen
              erfahrenen Skipper dazu (rund 1.000–1.500 € pro Woche). Konkrete
              Preise für eure Wunschwoche nennen wir auf Anfrage und in den
              Charter-Infos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section surface-navy">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow on-dark centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>
              Lieber Mitteldalmatien ab Šibenik?
            </h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Die Miss Moneypenny liegt in der Marina Mandalina – bereit für
              euren Törn in die Kornaten, zum Krka-Nationalpark und entlang der
              dalmatinischen Küste.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                marginTop: "2rem",
                flexWrap: "wrap",
              }}
            >
              <Link href="/kontakt" className="btn btn-primary">
                Verfügbarkeit anfragen
              </Link>
              <Link href="/charter-infos" className="btn btn-ghost">
                Charter-Infos & Preise
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>
              Segeln in Istrien – häufige Fragen.
            </h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/istrien-segeln#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/yacht-sailing-side.jpg" />
    </>
  );
}
