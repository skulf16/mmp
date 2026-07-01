import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ArticleByline from "@/components/ArticleByline";
import Reveal from "@/components/Reveal";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import FactBox from "@/components/FactBox";
import FaqSection from "@/components/FaqSection";
import { Icon } from "@/components/Icons";
import { siteUrl } from "@/lib/site";

const slug = "toernvorschlag-sueddalmatien";

export const metadata: Metadata = {
  title: "Segeltörn Šibenik–Dubrovnik: 2 Wochen Törn Tag für Tag",
  description:
    "Segeltörn von Šibenik nach Dubrovnik und zurück: die 2-Wochen-Route Tag für Tag – Ankerbuchten von Šćedro über Korčula und Mljet bis Dubrovnik, autark mit der Miss Moneypenny.",
  alternates: { canonical: `${siteUrl}/${slug}` },
  openGraph: {
    title: "Segeltörn Šibenik → Dubrovnik: 2 Wochen Törn | Miss Moneypenny",
    description:
      "Segeltörn von Šibenik nach Dubrovnik: rund 2 Wochen, etwa 280 Seemeilen, einsame Ankerbuchten von Šćedro bis Vis – autark mit der Miss Moneypenny.",
    images: [
      {
        url: "/images/toern-sueddalmatien/scedro-bucht.jpg",
        width: 1920,
        height: 1440,
        alt: "Katamaran Miss Moneypenny vor Anker in einer türkisen Bucht der Insel Šćedro in Süddalmatien",
      },
    ],
  },
};

const ldTrip = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Segeltörn Šibenik – Dubrovnik & zurück: 2-Wochen-Törnvorschlag mit der Miss Moneypenny",
  "description":
    "Segeltörn von Šibenik nach Dubrovnik und zurück, Tag für Tag: rund zwei Wochen, etwa 280 Seemeilen, einsame Ankerbuchten in Süddalmatien – autark unterwegs mit Wassermacher und Solaranlage.",
  "url": `${siteUrl}/${slug}`,
  "touristType": "Segler",
  "itinerary": [
    { "@type": "City", "name": "Šibenik – Marina Mandalina (Anreise)" },
    { "@type": "City", "name": "Šibenik → Veli Drvenik (Mala Luka)" },
    { "@type": "City", "name": "Šolta – Šešula / Maslinica" },
    { "@type": "City", "name": "Pakleni-Inseln (Palmižana) & Hvar" },
    { "@type": "City", "name": "Šćedro – Bucht Lovišće" },
    { "@type": "City", "name": "Korčula – Lumbarda" },
    { "@type": "City", "name": "Mljet – Marijina Konoba" },
    { "@type": "City", "name": "Mljet → Dubrovnik" },
    { "@type": "City", "name": "Dubrovnik → Mljet (Saplunara)" },
    { "@type": "City", "name": "Lastovo – Skrivena Luka" },
    { "@type": "City", "name": "Vis – Komiža / Stiniva" },
    { "@type": "City", "name": "Hvar / Šolta" },
    { "@type": "City", "name": "Žirje – Šibenik" },
  ],
  "provider": { "@id": `${siteUrl}/#organization` },
};

const days: {
  tag: string;
  title: string;
  distance: string;
  highlight: string;
  text: string;
  image?: string;
  imageAlt?: string;
}[] = [
  {
    tag: "Tag 1 · Samstag",
    title: "Šibenik – Anreise & Ankommen",
    distance: "Hafentag",
    highlight: "Tradition: Tag 1 bleibt im Hafen",
    text: "Check-in in der Marina Mandalina, Bordeinweisung mit Skipper Jo, Proviant für zwei Wochen verstauen. Bei uns gilt eine Tradition: Am ersten Tag legen wir nicht mehr ab. Alle sind von der Anreise gestresst und richten sich an Bord erst einmal ein – und weil wir uns sonst selten sehen, gibt es viel zu besprechen und das eine oder andere Anlegerchen zu servieren.",
    image: "/images/toern-sueddalmatien/marina-sibenik-start.jpg",
    imageAlt: "Masten in der Marina Mandalina in Šibenik im Morgenlicht – der Start des Törns",
  },
  {
    tag: "Tag 2 · Sonntag",
    title: "Šibenik → Veli Drvenik (Mala Luka)",
    distance: "ca. 28 sm",
    highlight: "Erste Ankernacht, glühender Sonnenuntergang",
    text: "Endlich ablegen – durch den St.-Anthony-Kanal hinaus ins Šibeniker Archipel. Highlight des Tages ist die Bucht Mala Luka an der Insel Veli Drvenik: türkises Flachwasser über hellem Sand, ein Klassiker zum Schwimmen und Schnorcheln. Wer mehr Infrastruktur möchte, läuft Rogoznica mit der Marina Frapa an. Abends das erste Mal frei vor Anker, während die Sonne den Himmel in Flammen setzt. Die Bucht bietet reichlich Platz, der Anker hält gut, und mit der Dämmerung kehrt Ruhe ein.",
    image: "/images/toern-sueddalmatien/sonnenuntergang-anker.jpg",
    imageAlt: "Glühender Sonnenuntergang über der ersten Ankerbucht des Törns",
  },
  {
    tag: "Tag 3 · Montag",
    title: "→ Šolta: Šešula / Maslinica",
    distance: "ca. 20 sm",
    highlight: "Olivenhaine statt Trubel",
    text: "Hinüber zur Insel Šolta, der ruhigen kleinen Schwester von Split. Die Bucht Šešula ist ein gut geschützter Ankerplatz mit zwei Konobas am Ufer; gleich nebenan liegt das hübsche Maslinica mit dem Schlosshotel Martinis Marchi. Olivenhaine, Inselhonig und kaum Betrieb – ein bewusster Kontrapunkt zum nahen Split.",
    image: "/images/toern-sueddalmatien/ankerbucht-inselkueste.jpg",
    imageAlt: "Yacht vor Anker an einer bewaldeten Inselküste in Mitteldalmatien",
  },
  {
    tag: "Tag 4 · Dienstag",
    title: "→ Pakleni-Inseln (Palmižana) & Hvar",
    distance: "ca. 18 sm",
    highlight: "Inselstadt-Glamour",
    text: "Weiter zu den Pakleni-Inseln vor Hvar. In der Ankerbucht Palmižana festmachen und mit dem Beiboot nach Hvar-Stadt übersetzen: Festung Španjola, das älteste Gemeindetheater Europas und die elegante Hafenpromenade. Wer es ruhiger mag, bleibt über Nacht in den Pakleni und genießt den Trubel nur tagsüber.",
    image: "/images/toern-sueddalmatien/sup-sonnenuntergang.jpg",
    imageAlt: "Stand-up-Paddle-Board an Bord bei Sonnenuntergang vor Anker nahe Hvar",
  },
  {
    tag: "Tag 5 · Mittwoch",
    title: "→ Šćedro (Bucht Lovišće)",
    distance: "ca. 14 sm",
    highlight: "Die heimliche Traumbucht",
    text: "Kurzer Schlag zur kleinen Insel Šćedro südlich von Hvar – für viele der heimliche Höhepunkt des Törns. Die tief eingeschnittene Bucht Lovišće ist glasklar, geschützt und fast menschenleer. Hier zeigt sich, wofür ein autarkes Boot gemacht ist: ankern, schwimmen, das SUP zu Wasser lassen und einfach bleiben. Dank Wassermacher und Solaranlage braucht es dafür keinen Hafen.",
    image: "/images/toern-sueddalmatien/scedro-bucht.jpg",
    imageAlt: "Katamaran vor Anker in der türkisen Bucht Lovišće auf der Insel Šćedro",
  },
  {
    tag: "Tag 6 · Donnerstag",
    title: "→ Korčula-Stadt / Lumbarda",
    distance: "ca. 16 sm",
    highlight: "Klein-Dubrovnik & Marco Polo",
    text: "Hinüber zur Insel Korčula. Die ummauerte Altstadt – „Klein-Dubrovnik“ und angebliche Geburtsstadt Marco Polos – ist ein Fischgräten-Labyrinth aus Gassen, Kathedrale und Stadttürmen. Die Stadtmarina ist allerdings happig teuer; wir sparen uns die Kosten und gehen an eine Boje direkt neben Lumbarda – ideal, um Vorräte aufzufüllen. Sie kostet rund 5 € pro Meter, für unser Boot also etwa 60 € (Richtwert) und damit fair. Eine der schönsten Konobas hat man von der Boje aus im Blick: Wer hier liegt, speist dort vergünstigt auf der Terrasse direkt am Wasser.",
    image: "/images/toern-sueddalmatien/korcula-sonnenuntergang.jpg",
    imageAlt: "Sonnenuntergang vor der Inselstadt Korčula",
  },
  {
    tag: "Tag 7 · Freitag",
    title: "→ Mljet · Marijina Konoba",
    distance: "ca. 20 sm",
    highlight: "Bojen-Konoba, Salzseen & bestes Steak",
    text: "Nächster Stopp: die grüne Insel Mljet. Optional kehrt ihr oben in den Nationalpark ein (Tagesticket rund 20–30 €) und besichtigt die Salzseen – die Parkgrenze ist etwa auf halber Insel gut auf dem Plotter zu erkennen. Uns hat es wieder an eine Boje gezogen, diesmal an der wunderbaren Marijina Konoba. Die Boje ist kostenlos, dafür solltet ihr einen großzügigen Aufschlag fürs Essen einplanen: Wenn der Kellner schon mit dem Boot zur Boje kommt, um die Karte vorzustellen, weiß man, was die Stunde geschlagen hat. Bestes Rib-Eye-Steak seit Jahren!",
    image: "/images/toern-sueddalmatien/mljet-morgenbucht.jpg",
    imageAlt: "Stille Morgenbucht auf der grünen Insel Mljet",
  },
  {
    tag: "Tag 8 · Samstag",
    title: "Mljet → Dubrovnik",
    distance: "ca. 28 sm",
    highlight: "Großstadt-Trubel & Crew-Wechsel",
    text: "Der letzte Schlag des Himmelfahrtskommandos: von Mljet nach Dubrovnik, vorbei an den Elaphiten-Inseln Šipan, Lopud und Koločep. Am späten Nachmittag die Ansteuerung der Stadt – vorbei an riesigen Kreuzfahrtschiffen und einem belebten Hafen. Liegeplatz in der Marina Frapa Dubrovnik. Pro-Tipp: Den quirligen Hafen genießt man traumhaft aus der Rooftop-Poolbar – mit einem Bier in der Hand, direkt aus dem Pool heraus. Mit dem Taxi geht es für rund 50 € in die Altstadt, die absolut eine Reise wert ist. Hier übernimmt Skipper Jo die „Aloha Crew“ für den Weg zurück nach Norden.",
    image: "/images/toern-sueddalmatien/dubrovnik-stadtmauer.jpg",
    imageAlt: "Die Stadtmauern von Dubrovnik vom Wasser aus im Abendlicht",
  },
  {
    tag: "Tag 9 · Sonntag",
    title: "Dubrovnik → Mljet (Saplunara)",
    distance: "ca. 22 sm",
    highlight: "Wieder allein vor Anker",
    text: "Entspannter Auftakt der Heimreise – noch einmal durch die grünen Elaphiten hinaus. Wer den Rummel hinter sich lassen will, ankert an der Südspitze von Mljet in der Sandbucht Saplunara oder kehrt in die stille Ostbucht Okuklje ein. Die erste Nacht wieder ganz für euch – nach den Menschenmengen Dubrovniks die schönste Medizin.",
    image: "/images/toern-sueddalmatien/elaphiten-beachclub.jpg",
    imageAlt: "Beachclub-Terrasse auf den Elaphiten vor Dubrovnik mit Blick über das Wasser",
  },
  {
    tag: "Tag 10 · Montag",
    title: "→ Lastovo (Skrivena Luka)",
    distance: "ca. 28 sm",
    highlight: "Entlegener Naturpark, Dunkelhimmel",
    text: "Abstecher auf die entlegene Insel Lastovo – einst militärisches Sperrgebiet, heute Naturpark mit einem der dunkelsten Sternenhimmel der Adria. Die „versteckte Bucht“ Skrivena Luka im Süden macht ihrem Namen alle Ehre: rundum geschützt, kaum bebaut. Lastovo hat fast keine Infrastruktur – genau hier spielt die Miss Moneypenny ihre Autarkie voll aus.",
  },
  {
    tag: "Tag 11 · Dienstag",
    title: "→ Vis (Komiža / Stiniva)",
    distance: "ca. 30 sm",
    highlight: "Die weiteste Insel Kroatiens",
    text: "Die am weitesten draußen liegende bewohnte Insel Kroatiens. Vom Fischerort Komiža lohnt der Tagesausflug zur Blauen Grotte auf der Nachbarinsel Biševo. Im Osten liegt die spektakuläre Felsbucht Stiniva, durch ein schmales Felsentor erreichbar – einer der schönsten Strände Europas. Der längste Schlag des Törns, oft unter verlässlichem Maestral.",
  },
  {
    tag: "Tag 12 · Mittwoch",
    title: "→ Hvar oder Šolta",
    distance: "ca. 28 sm",
    highlight: "Letzter Inselabend",
    text: "Zurück Richtung Festland. Je nach Wind und Laune ein letzter Inselstopp – noch einmal Hvar oder die ruhige Bucht Šešula auf Šolta. Vorräte auffüllen, ein letztes Konoba-Abendessen mit der Crew, während der Törn langsam ausklingt.",
  },
  {
    tag: "Tag 13 · Donnerstag",
    title: "→ Žirje → Šibenik",
    distance: "ca. 26 sm",
    highlight: "Heimkehr in den Ausgangshafen",
    text: "Heimkurs ins Šibeniker Revier. Wer mag, hängt eine letzte einsame Nacht bei Žirje oder im Šibenik-Archipel an, bevor es am nächsten Morgen zum Check-out in die Marina Mandalina geht. Auf dem letzten Schlag durch den Šibeniker Kanal grüßt die Festung St. Michael – Ankunft im Heimathafen.",
  },
];

const dubrovnikGallery: GalleryImage[] = [
  {
    src: "/images/toern-sueddalmatien/dubrovnik-stadtmauer-sonnenuntergang.jpg",
    alt: "Dubrovniks mächtige Stadtmauer über der Adria im Sonnenuntergang, mit schmaler Mondsichel am Himmel",
    span: "tall",
  },
  {
    src: "/images/toern-sueddalmatien/dubrovnik-festung-laterne.jpg",
    alt: "Steinerner Innenhof an der Festungsmauer von Dubrovnik mit leuchtender Laterne in der Abenddämmerung",
    span: "tall",
  },
  {
    src: "/images/toern-sueddalmatien/dubrovnik-altstadtgasse-abend.jpg",
    alt: "Abendliche Altstadtgasse in Dubrovnik mit Treppe hinunter zum Stradun, Restaurants und Lichterketten",
    span: "tall",
  },
];

const tipps = [
  {
    icon: "droplet" as const,
    title: "Wasser & Strom fernab der Häfen",
    text: "Lastovo, Vis und Mljet haben wenig Infrastruktur. Der Wassermacher (60 l/h) und die Solaranlage der Miss Moneypenny machen euch unabhängig – ihr bleibt in den Buchten, statt teure Marinas anzusteuern.",
  },
  {
    icon: "anchor" as const,
    title: "Nationalpark- & Naturpark-Gebühren",
    text: "Für den Mljet-Nationalpark und die Naturparks Lastovo und Telašćica fallen Eintritts- bzw. Bojengebühren an. Vignetten online vorbuchen oder bei der Ranger-Station lösen.",
  },
  {
    icon: "wind" as const,
    title: "Jugo einplanen",
    text: "Auf der langen Südstrecke kann der Südwind Jugo Schläge zäh machen. Plant Puffertage ein und prüft die Vorhersage – Hintergründe dazu im Ratgeber zum Jugo.",
  },
  {
    icon: "sun" as const,
    title: "Beste Reisezeit & Etappenlänge",
    text: "Juni und September sind ideal: verlässlicher Maestral, warmes Wasser, weniger Boote. Plant im Schnitt 20–25 sm pro Tag, damit nach jedem Schlag Zeit zum Ankern und Schwimmen bleibt.",
  },
];

const facts = [
  "Der Segeltörn von Šibenik nach Dubrovnik und wieder zurück erstreckt sich über rund zwei Wochen und etwa 280 Seemeilen in 13 Etappen.",
  "Die Route verbindet lebendige Inselstädte wie Hvar, Korčula und Dubrovnik mit einsamen Ankerbuchten auf Šćedro, Mljet, Lastovo und Vis.",
  "Weil Dubrovnik rund 130 Seemeilen vom Heimathafen Šibenik entfernt liegt, ist dieser Süddalmatien-Törn bewusst auf zwei Wochen ausgelegt.",
  "Auf dem Rückweg führt die empfohlene Variante über die entlegenen Naturpark-Inseln Lastovo und Vis – Reviere mit kaum Infrastruktur.",
  "Dank Wassermacher mit 60 Litern pro Stunde und Solaranlage bleibt die Miss Moneypenny auch fernab der Marinas tagelang autark vor Anker.",
  "Die beste Reisezeit für den langen Süddalmatien-Törn sind Juni und September mit verlässlichem Maestral und angenehmen Temperaturen.",
];

const faqs: { q: string; a: string }[] = [
  {
    q: "Wie lange dauert ein Segeltörn von Šibenik nach Dubrovnik und zurück?",
    a: "Für die Strecke von Šibenik nach Dubrovnik und wieder zurück sollte man rund zwei Wochen einplanen – dieser Törnvorschlag umfasst 13 Etappen und etwa 280 Seemeilen. Dubrovnik liegt etwa 130 Seemeilen südlich des Heimathafens Šibenik; für nur eine Woche ist die Strecke als Rundtörn zu weit. Wer weniger Zeit hat, ist mit dem einwöchigen Törn durch die Kornaten ab Šibenik besser beraten.",
  },
  {
    q: "Welche Ankerbuchten und Inseln liegen auf der Route?",
    a: "Zu den Höhepunkten zählen die Bucht Mala Luka an Veli Drvenik, die Bucht Šešula auf Šolta, die Pakleni-Inseln (Palmižana) vor Hvar, die Traumbucht Lovišće auf Šćedro, Lumbarda bei Korčula, Mljet mit Nationalpark und der Marijina Konoba, die Elaphiten vor Dubrovnik sowie auf dem Rückweg Lastovo (Skrivena Luka) und Vis (Komiža, Stiniva). Dazu kommen die Inselstädte Hvar, Korčula und Dubrovnik selbst.",
  },
  {
    q: "Kann man die Strecke auch in einer Woche fahren?",
    a: "Als reine Einbahn-Strecke von Šibenik nach Dubrovnik ist eine Woche knapp machbar, der Rückweg passt dann aber nicht mehr hinein – und Einweg-Charter sind selten und teuer. Empfehlenswert ist daher der zweiwöchige Rundtörn. Für eine Woche eignet sich besser eine kompaktere Runde durch Mitteldalmatien.",
  },
  {
    q: "Warum lohnt sich ein autarkes Boot gerade in Süddalmatien?",
    a: "Inseln wie Lastovo, Vis, Mljet und die Elaphiten haben kaum Infrastruktur, und die Marinas rund um Dubrovnik gehören zu den teuersten Kroatiens. Mit dem Wassermacher und der Solaranlage der Miss Moneypenny seid ihr unabhängig von Hafenstopps: tagelang Frischwasser und Strom an Bord, frei vor Anker in den schönsten Buchten – das spart Geld und gibt Freiheit bei der Planung.",
  },
  {
    q: "Wann ist die beste Reisezeit für den Süddalmatien-Törn?",
    a: "Juni und September gelten als ideal: angenehme Temperaturen, warmes Wasser, der verlässliche Maestral am Nachmittag und deutlich weniger Boote als im Hochsommer. Im Juli und August sind besonders Hvar und Dubrovnik stark besucht – wer es ruhiger mag, weicht auf die Nebensaison aus.",
  },
  {
    q: "Muss ich für die Nationalparks Eintritt zahlen?",
    a: "Ja. Für den Mljet-Nationalpark gilt ein Eintritt inklusive Bojennutzung, der Naturpark Lastovo erhebt eine Gebühr, und auf einer nördlichen Variante kommen die Kornaten und Telašćica hinzu. Die Vignetten lassen sich online vorbuchen oder vor Ort bei der Ranger-Station lösen.",
  },
];

export default function ToernvorschlagSueddalmatienPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldTrip) }}
      />
      <PageHero
        eyebrow="Törnvorschlag · 2 Wochen"
        title="Segeltörn Šibenik → Dubrovnik & zurück"
        lede="Der Segeltörn von Šibenik nach Dubrovnik, Tag für Tag: von den Inselstädten Hvar und Korčula über den Mljet-Nationalpark bis zu den Mauern von Dubrovnik – und über Lastovo und Vis wieder heim. Autark an Bord der Miss Moneypenny."
        image="/images/toern-sueddalmatien/scedro-bucht.jpg"
        imageAlt="Katamaran vor Anker in der türkisen Bucht der Insel Šćedro in Süddalmatien"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Segeltörn-Routen", href: "/segeltorn-routen-kroatien" },
          { label: "2 Wochen Šibenik–Dubrovnik" },
        ]}
      />

      <ArticleByline slug={slug} />

      {/* Auf einen Blick */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox facts={facts} /></Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Die Route auf einen Blick</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Zwei Wochen Segeltörn – von Šibenik bis Dubrovnik.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Das hier ist kein Charter-Prospekt, sondern ein echter Eigner-Törn.
                  Jedes Jahr an Himmelfahrt sticht dieselbe Truppe in See – das
                  „Himmelfahrtskommando“: Skipper Jo am Ruder, dazu Axel, Chris, Heiko
                  und ich selbst, Dominik, als Co-Eigner an Bord. Diesmal führte uns
                  der Segeltörn von Šibenik in gemächlichen Etappen immer weiter nach
                  Süden, bis vor die Mauern von Dubrovnik.
                </p>
                <p>
                  Die Miss Moneypenny war zwei Wochen lang in den Händen unseres
                  Skippers Jo: In der ersten Woche haben wir unseren Vater-Sohn-und-Freunde-Trip
                  genossen, in der zweiten Woche kam die „Aloha Crew“ an Bord und
                  brachte das Schiff wieder zurück nach Šibenik. So geht die Strecke
                  als Zwei-Wochen-Rundtörn auf – ob mit Crew-Wechsel in Dubrovnik oder
                  komplett hin und zurück.
                </p>
                <p>
                  Das Schöne an diesem Törn: Rund um Hvar, Korčula und Šolta habt ihr
                  unzählige Optionen. Entweder lauft ihr Häfen an und schaut euch die
                  Inselstädte an, oder ihr sucht euch eine der vielen malerischen
                  Ankerbuchten. Dabei lässt sich jede Insel oben oder unten umrunden –
                  legt die passende Route je nach Wind am besten jeden Morgen neu fest.
                  Und genau hier spielt ein autarker Katamaran seine Stärken aus: Mit
                  Wassermacher und Solaranlage bleibt ihr dort, wo es schön ist, statt
                  jeden Abend eine Marina suchen zu müssen.
                </p>
                <p>
                  Ehrlich gesagt: Dubrovnik liegt weit im Süden. Wer nur eine Woche
                  Zeit hat, segelt besser eine kompakte Runde im Heimatrevier – etwa den{" "}
                  <Link href="/toernvorschlag-kornaten">Törnvorschlag durch die Kornaten ab Šibenik</Link>.
                  Für zwei Wochen aber gehört dieser Weg zu den schönsten Strecken der Adria.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill"><Icon name="waves" style={{ width: 15 }} /> ca. 280 sm gesamt</span>
                <span className="tag-pill">13 Etappen · rund 2 Wochen</span>
                <span className="tag-pill">ab Marina Mandalina</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame wide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/toern-sueddalmatien/crew-dominik-chris.jpg"
                  alt="Dominik und Chris an Bord der Miss Moneypenny bei der Ankunft im Hafen – das Himmelfahrtskommando"
                />
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-faint)", marginTop: "0.9rem", textAlign: "center", fontStyle: "italic" }}>
                Das „Himmelfahrtskommando“ bei der Ankunft im Hafen – Dominik und Chris.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tagesrouten */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Tag für Tag</span>
            <h2 className="section-title">Die Route im Detail.</h2>
            <p className="lede">Ein Anreisetag und sieben Etappen nach Süden bis Dubrovnik – und fünf Etappen über Lastovo und Vis wieder zurück nach Šibenik. Die Fotos stammen von genau diesem Törn.</p>
          </Reveal>
          <div className="steps steps-grid" style={{ marginTop: "3rem" }}>
            {days.map((day) => (
              <Reveal key={day.tag} as="div" className="step">
                <div style={{ flex: 1 }}>
                  {day.image && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={day.image}
                      alt={day.imageAlt ?? day.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: 210,
                        objectFit: "cover",
                        borderRadius: "var(--radius)",
                        display: "block",
                        marginBottom: "1.3rem",
                      }}
                    />
                  )}
                  <span style={{ fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--brass-600)", fontWeight: 700 }}>{day.tag}</span>
                  <h3 style={{ marginTop: "0.4rem" }}>{day.title}</h3>
                  <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", marginBottom: "0.9rem", flexWrap: "wrap" }}>
                    <span className="tag-pill" style={{ fontSize: "0.7rem" }}><Icon name="waves" style={{ width: 13 }} />{day.distance}</span>
                    <span className="tag-pill" style={{ fontSize: "0.7rem" }}>{day.highlight}</span>
                  </div>
                  <p style={{ fontSize: "0.94rem", color: "var(--text-soft)", lineHeight: 1.65 }}>{day.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dubrovnik-Galerie */}
      <section className="section">
        <div className="container container-wide">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Impressionen</span>
            <h2 className="section-title">Dubrovnik am Abend.</h2>
            <p className="lede">Der südlichste Punkt des Törns – die Stadtmauern über der Adria, ein stiller Innenhof an der Festung und die abendliche Altstadtgasse zum Stradun. Aufnahmen vom letzten Abend des Himmelfahrtskommandos, bevor die Aloha-Crew übernahm.</p>
          </Reveal>
          <Reveal as="div" style={{ marginTop: "3rem" }}>
            <Gallery images={dubrovnikGallery} />
          </Reveal>
        </div>
      </section>

      {/* Autarkie-USP */}
      <section className="section surface-navy">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Warum der Unterschied zählt</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">In Süddalmatien ist Autarkie der eigentliche Plan.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Je weiter es nach Süden geht, desto dünner wird die Infrastruktur.
                  Lastovo, Vis, Mljet und die Elaphiten haben nur wenige Liegeplätze,
                  und rund um Dubrovnik zählen die Marinas zu den teuersten des Landes.
                  Was ein Katamaran-Liegeplatz im Revier kostet, zeigt die Übersicht der{" "}
                  <Link href="/marina-liegeplatz-preise-kroatien">Marina-Liegeplätze &amp; Preise</Link>.
                </p>
                <p>
                  Mit dem Wassermacher der Miss Moneypenny laufen 60 Liter Frischwasser
                  pro Stunde. Die Solaranlage hält Kühlschrank, Navigation und Licht am
                  Laufen – ganz ohne Generator. So könnt ihr auf einem so langen Törn
                  immer wieder ganze Tage frei vor Anker verbringen, statt Häfen
                  anzusteuern. Mehr dazu auf der Seite zur{" "}
                  <Link href="/die-yacht">Yacht</Link>.
                </p>
              </Reveal>
            </div>
            <Reveal as="div" delay={2} className="grid-2" style={{ gap: "1.2rem" }}>
              <article className="feature">
                <span className="ic"><Icon name="droplet" /></span>
                <h3>Wassermacher</h3>
                <p>60 l/h aus Meerwasser – volle Tanks ohne Hafenstopp, auch vor Lastovo und Vis.</p>
              </article>
              <article className="feature">
                <span className="ic"><Icon name="sun" /></span>
                <h3>Solaranlage</h3>
                <p>Lautlose Energie – kein Generator, kein Lärm, kein Treibstoff.</p>
              </article>
              <article className="feature">
                <span className="ic"><Icon name="anchor" /></span>
                <h3>Frei vor Anker</h3>
                <p>Ganze Tage in einsamen Buchten – ohne Zwangs-Marina am Abend.</p>
              </article>
              <article className="feature">
                <span className="ic"><Icon name="leaf" /></span>
                <h3>Weniger Kosten</h3>
                <p>Gerade im teuren Süden bedeutet jede Ankernacht direkt mehr Budget für Erlebnisse.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Praktische Tipps */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Vor dem Ablegen</span>
            <h2 className="section-title">Praktische Tipps für den Segeltörn nach Dubrovnik.</h2>
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

      {/* Weiterführend */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Mehr zur Route</span>
            <h2 className="section-title">Weiterlesen & vergleichen.</h2>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "2.5rem" }}>
            <Reveal>
              <Link href="/segeltorn-routen-kroatien" className="region-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/croatia-map.png" alt="Karte der schönsten Segelrouten Kroatiens" />
                <div className="rc-body">
                  <span className="rc-kicker">Überblick</span>
                  <h3>Die 7 schönsten Routen</h3>
                  <p>Wo dieser Süddalmatien-Törn im Vergleich der schönsten Segelrouten Kroatiens steht.</p>
                  <span className="rc-more">Routen vergleichen →</span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={1}>
              <Link href="/ankerbuchten-kroatien" className="region-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/region-kornati-cove.png" alt="Einsame Ankerbucht in Kroatien" />
                <div className="rc-body">
                  <span className="rc-kicker">Buchten</span>
                  <h3>Die schönsten Ankerbuchten</h3>
                  <p>Charakter, Schutz und Besonderheiten der schönsten Buchten von den Kornaten bis Süddalmatien.</p>
                  <span className="rc-more">Buchten entdecken →</span>
                </div>
              </Link>
            </Reveal>
            <Reveal>
              <Link href="/staedte-dalmatiens" className="region-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/city-korcula.png" alt="Inselstadt Korčula in Dalmatien" />
                <div className="rc-body">
                  <span className="rc-kicker">Landgang</span>
                  <h3>Städte Dalmatiens</h3>
                  <p>Trogir, Split, Hvar und Korčula – die Inselstädte entlang der Route im Porträt.</p>
                  <span className="rc-more">Städte ansehen →</span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={1}>
              <Link href="/revier-sibenik" className="region-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/region-sibenik.png" alt="Revier Šibenik – Heimathafen der Miss Moneypenny" />
                <div className="rc-body">
                  <span className="rc-kicker">Heimathafen</span>
                  <h3>Revier Šibenik</h3>
                  <p>Alles zum Ausgangspunkt – Marina Mandalina, Krka und das geschützte Archipel.</p>
                  <span className="rc-more">Revier entdecken →</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Häufige Fragen</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Segeltörn Šibenik–Dubrovnik – kurz erklärt.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={faqs} id={`${siteUrl}/${slug}#faq`} />
          </div>
        </div>
      </section>

      <CtaBand image="/images/toern-sueddalmatien/scedro-bucht.jpg" />
    </>
  );
}
