import type { IconName } from "@/components/Icons";

export const site = {
  name: "Miss Moneypenny",
  brand: "Bond Yachting",
  tagline: "Autarkes Segelabenteuer auf der Adria",
  yacht: "Lagoon 400 S2",
  base: "Marina Mandalina, Šibenik · Kroatien",
  email: "anfrage@chartern-in-kroatien.de",
  phone: "0176 81125761",
  responseTime: "Antwort innerhalb von 24 Stunden",
};

export const siteUrl = "https://chartern-in-kroatien.de";

/* ---- Autor der Ratgeber (Experten-Entität für E-E-A-T & KI-Zitate) ---- */
export const author = {
  /** Voller Name – für die Schema-Entität (Person), damit KI sie sauber identifiziert */
  name: "Dominik Theis",
  /** Anzeigename in der sichtbaren Byline */
  displayName: "Dominik",
  jobTitle: "Co-Eigner der Miss Moneypenny",
  /** Stabile @id der Person im JSON-LD @graph (siehe app/layout.tsx) */
  id: `${siteUrl}/#person-dominik-theis`,
  /** Interner Pfad der kanonischen Autorenseite */
  page: "/autor/dominik-theis",
  /** Absolute URL der Autorenseite (für Person.url & mainEntityOfPage) */
  url: `${siteUrl}/autor/dominik-theis`,
  image: "/images/dominik-theis.jpg",
  credentialName: "Sportbootführerschein See (SBF See)",
  bio:
    "Dominik Theis ist Co-Eigner der Miss Moneypenny und segelt die kroatische Adria " +
    "seit seinem 14. Lebensjahr – zunächst als Chartergast, heute als Eigner. Mehrere " +
    "Wochen im Jahr ist er in den Kornaten und rund um Šibenik unterwegs.",
  bioShort:
    "Segler seit dem 14. Lebensjahr – mehrere Wochen im Jahr auf der kroatischen Adria.",
  sameAs: [
    "https://www.instagram.com/dominik.theis",
    "https://www.linkedin.com/in/dominik-theis-33417514a/",
  ],
};

/* ---- Datums-Default (Fallback, falls ein Artikel kein eigenes Datum trägt) ---- */
export const articlePublished = "2026-06-20";

/** Formatiert ein ISO-Datum (YYYY-MM-DD) als deutsches „Monat Jahr" für die Byline. */
export function formatArticleDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("de-DE", {
    month: "long",
    year: "numeric",
  });
}

export type RatgeberArticle = {
  headline: string;
  description: string;
  image: string;
  /** Erstveröffentlichung (ISO, YYYY-MM-DD) – speist datePublished */
  published: string;
  /** Letzte inhaltliche Überarbeitung (ISO, YYYY-MM-DD) – speist dateModified */
  updated: string;
};

/* ---- Ratgeber-Registry: Single Source of Truth für Article-Schema & Byline ---- */
export const ratgeberArticles: Record<string, RatgeberArticle> = {
  "segeltorn-routen-kroatien": {
    headline: "Die 7 schönsten Segeltörn-Routen in Kroatien",
    description:
      "Segeltörn Kroatien Route: Die 7 schönsten Segelrouten von den Kornaten über Dalmatien bis Istrien – Dauer, Highlights und für wen sich welche Route eignet.",
    image: "/images/croatia-map.png",
    published: "2026-06-25",
    updated: "2026-06-25",
  },
  "segeltorn-ab-split": {
    headline: "Segeltörn ab Split – 7-Tage-Route durch Mitteldalmatien",
    description:
      "Segeln ab Split: Eine 7-Tage-Route durch Mitteldalmatien Tag für Tag – Trogir, Šolta, Hvar, Vis und Brač, mit Etappen, Distanzen und Tipps für den Kroatien-Törn.",
    image: "/images/city-split.png",
    published: "2026-06-25",
    updated: "2026-06-25",
  },
  "dalmatien-segeln-route": {
    headline: "Segeln in Dalmatien – Route, Reviere, Häfen & Highlights",
    description:
      "Dalmatien segeln Route: Nord-, Mittel- und Süddalmatien im Überblick – wichtigste Häfen, Marinas, Inseln und Highlights für den perfekten Segeltörn.",
    image: "/images/yacht-sailing-coast.jpg",
    published: "2026-06-25",
    updated: "2026-06-25",
  },
  "istrien-segeln": {
    headline: "Segeln in Istrien – das unterschätzte Revier der Nordadria",
    description:
      "Istrien segeln: Das unterschätzte Revier im Norden Kroatiens – Pula, Rovinj, die Brijuni-Inseln und der Limski-Kanal, mit Häfen, Winden und Törn-Tipps.",
    image: "/images/yacht-sailing-side.jpg",
    published: "2026-06-25",
    updated: "2026-06-25",
  },
  "segelrevier-kroatien": {
    headline: "Segelrevier Kroatien – Nord vs. Süd & wo am besten starten",
    description:
      "Segelrevier Kroatien im Überblick: Istrien, Kvarner Bucht, Mittel- und Süddalmatien im Vergleich – wo es sich am besten startet und welches Revier zu dir passt.",
    image: "/images/yacht-aerial-wide.jpg",
    published: "2026-06-25",
    updated: "2026-06-25",
  },
  "segeltorn-kroatien-kosten": {
    headline: "Was kostet ein Segeltörn in Kroatien? Echte Kalkulation",
    description:
      "Segeltörn Kroatien Kosten realistisch kalkuliert: Charter, Skipper, Kaution, Sprit, Liegegebühren, Vignetten und Verpflegung – mit Beispielrechnung pro Woche und Crew.",
    image: "/images/yacht-nav-station.jpg",
    published: "2026-06-25",
    updated: "2026-06-25",
  },
  "beste-reisezeit-segeln-kroatien": {
    headline: "Beste Reisezeit zum Segeln in Kroatien – Monat für Monat",
    description:
      "Segeln Kroatien beste Zeit: Monat für Monat von Mai bis Oktober – Wetter, Wassertemperatur, Wind und Betrieb, plus warum Juni und September ideal sind.",
    image: "/images/yacht-sailing-genoa.jpg",
    published: "2026-06-25",
    updated: "2026-06-25",
  },
  "yachtcharter-nebenkosten-kroatien": {
    headline: "Nebenkosten beim Yachtcharter in Kroatien",
    description:
      "Nebenkosten beim Yachtcharter in Kroatien: Endreinigung, Transitlog, Kurtaxe, Mooring/Liegegebühren, Kaution und Vignetten erklärt – was inklusive ist und was extra kommt.",
    image: "/images/yacht-aerial-topdown.jpg",
    published: "2026-06-25",
    updated: "2026-06-25",
  },
  "marina-liegeplatz-preise-kroatien": {
    headline: "Marina-Liegeplätze & Preise im Revier ab Šibenik",
    description:
      "Alle Marinas, die der Katamaran Miss Moneypenny ab Šibenik in einer Woche erreicht – von den Kornaten bis Split/Trogir, mit Liegeplatz-Preisen als Richtwert (Stand 2026) und dem Katamaran-Aufschlag.",
    image: "/images/region-sibenik.png",
    published: "2026-06-26",
    updated: "2026-06-26",
  },
  "bootsfuehrerschein-kroatien": {
    headline: "Welcher Bootsführerschein für Kroatien?",
    description:
      "Bootsführerschein Kroatien: Welche Lizenz und welches Funkzeugnis du fürs Bareboat-Chartern brauchst, welche Scheine anerkannt sind – und wie es ganz ohne Schein geht.",
    image: "/images/yacht-helm.jpg",
    published: "2026-06-25",
    updated: "2026-06-25",
  },
  "sportbootfuehrerschein-kroatien": {
    headline: "Sportbootführerschein See für den Kroatien-Törn",
    description:
      "Sportbootführerschein Kroatien: Warum der SBF See die Basis fürs Chartern ist, wie er mit SKS und SRC/UBI zusammenspielt und was er für deinen Kroatien-Törn bedeutet.",
    image: "/images/yacht-helm.jpg",
    published: "2026-06-25",
    updated: "2026-06-25",
  },
  "yachtcharter-ohne-fuehrerschein-kroatien": {
    headline: "Yacht chartern ohne Führerschein in Kroatien",
    description:
      "Yacht chartern ohne Führerschein in Kroatien: Mit einem erfahrenen Skipper an Bord geht es problemlos – so funktioniert es, das kostet es, das dürft ihr selbst übernehmen.",
    image: "/images/yacht-cockpit-dining.jpg",
    published: "2026-06-25",
    updated: "2026-06-25",
  },
  "ankerbuchten-kroatien": {
    headline: "Die schönsten Ankerbuchten Kroatiens",
    description:
      "Ankerbuchten Kroatien: Die schönsten Buchten von den Kornaten über Telašćica bis zu den Inseln Mitteldalmatiens – Charakter, Schutz und was sie besonders macht.",
    image: "/images/region-kornati-cove.png",
    published: "2026-06-25",
    updated: "2026-06-25",
  },
  "familien-segeltorn-kroatien": {
    headline: "Familien-Segeltörn Kroatien – Segeln mit Kindern auf dem Katamaran",
    description:
      "Familien-Segeltörn in Kroatien: Warum der Katamaran das ideale Familienboot ist, das geschützte Revier um Šibenik, beste Reisezeit und Tipps fürs Segeln mit Kindern.",
    image: "/images/yacht-swim-platform.jpg",
    published: "2026-06-24",
    updated: "2026-06-24",
  },
  "segeltorn-planen": {
    headline: "Segeltörn planen – Schritt-für-Schritt-Anleitung für Kroatien",
    description:
      "In 8 Schritten von der Idee zum Törn: Crew, Reisezeit, Route, Skipper, Packliste und Buchung für Kroatien.",
    image: "/images/croatia-map.png",
    published: "2026-06-20",
    updated: "2026-06-23",
  },
  "kroatien-inselhopping": {
    headline: "Kroatien Inselhopping mit dem Katamaran ab Šibenik",
    description:
      "Inselhopping Kroatien per Katamaran: Kornaten, Hvar, Brač und mehr – warum der Katamaran das ideale Boot ist und wie eine Woche ab Šibenik aussieht.",
    image: "/images/region-kornati-aerial.png",
    published: "2026-06-20",
    updated: "2026-06-23",
  },
  "segeltorn-kroatien-skipper": {
    headline: "Segeltörn Kroatien mit Skipper – ohne Segelschein ab Šibenik",
    description:
      "Mit erfahrenem Skipper an Bord der Miss Moneypenny: Kroatien segeln ohne Führerschein – entspannt, sicher, unvergesslich.",
    image: "/images/yacht-helm.jpg",
    published: "2026-06-20",
    updated: "2026-06-25",
  },
  "winde-kroatien": {
    headline: "Winde Kroatien: Maestral, Bora & Jugo erklärt",
    description:
      "Maestral, Bora und Jugo erklärt: Stärke, Richtung, beste Reisezeit zum Segeln in Kroatien.",
    image: "/images/yacht-sailing-genoa.jpg",
    published: "2026-06-20",
    updated: "2026-06-23",
  },
  "maestral-wind": {
    headline: "Maestral Wind – Entstehung, Rhythmus & Seglertipps für Kroatien",
    description:
      "Der Maestral ist der verlässlichste Segelwind der Adria. Alles über Entstehung, Stärke, Tagesrhythmus und wie ihr ihn auf dem Törn nutzt.",
    image: "/images/yacht-sailing-side.jpg",
    published: "2026-06-22",
    updated: "2026-06-23",
  },
  "bora-kroatien": {
    headline: "Bora in Kroatien – Entstehung, Stärke & sichere Häfen für Segler",
    description:
      "Die Bora ist Kroatiens wildester Wind. Was hinter dem katabatischen Fallwind steckt, wann er kommt und wie Segler sicher durch ihn kommen.",
    image: "/images/yacht-sailing-coast.jpg",
    published: "2026-06-22",
    updated: "2026-06-23",
  },
  "jugo-wind-kroatien": {
    headline: "Jugo Wind Kroatien – Warnsignale, Dauer & Seglertipps",
    description:
      "Jugo in Kroatien erklärt: Entstehung, typische Dauer, Warnsignale und was Segler beim Südwind der Adria beachten müssen.",
    image: "/images/yacht-sailing-coast.jpg",
    published: "2026-06-22",
    updated: "2026-06-23",
  },
  "ankern-kroatien": {
    headline: "Ankern in Kroatien – Regeln, beste Buchten & Tipps",
    description:
      "Ankern in Kroatien: Nationalpark-Regeln, Bojenpflicht und die schönsten Ankerbuchten ab Šibenik.",
    image: "/images/yacht-hero-anchored.jpg",
    published: "2026-06-20",
    updated: "2026-06-25",
  },
  "packliste-segeln-kroatien": {
    headline: "Packliste Segeln Kroatien – was ihr speziell für das Revier braucht",
    description:
      "Packliste für einen Segeltörn in Kroatien: Nationalpark-Vignette, Dokumente, Währung, Sonnenschutz und alles, was für das Revier um Šibenik besonders wichtig ist.",
    image: "/images/region-sibenik.png",
    published: "2026-06-20",
    updated: "2026-06-25",
  },
  "segeltorn-packliste": {
    headline: "Segeltörn Packliste – was wirklich an Bord gehört",
    description:
      "Kleidung, Schuhe, Elektronik, Dokumente – die vollständige Packliste für eine Woche Segelurlaub auf dem Katamaran.",
    image: "/images/yacht-cabin.jpg",
    published: "2026-06-20",
    updated: "2026-06-23",
  },
  "einkaufsliste-segeltorn": {
    headline: "Einkaufsliste Segeltörn – Proviant für eine Woche",
    description:
      "Einkaufsliste für einen Segeltörn: Was ihr vor Abfahrt besorgen solltet, was ihr in kroatischen Supermärkten findet und wie ihr Proviant für 8 Personen eine Woche plant.",
    image: "/images/yacht-galley.jpg",
    published: "2026-06-20",
    updated: "2026-06-23",
  },
  "speiseplan-segeltorn": {
    headline: "Speiseplan Segeltörn – 7 Tage Bordküche",
    description:
      "Speiseplan für einen Segeltörn: Was kocht man auf einem Katamaran? 7 Tage Menüplanung für die Bordküche – einfach, lecker und mit wenig Aufwand.",
    image: "/images/yacht-galley.jpg",
    published: "2026-06-20",
    updated: "2026-06-23",
  },
  "apps-fuer-segler": {
    headline: "Apps für Segler – die wichtigsten Törn-Apps für Kroatien",
    description:
      "Navigation, Wetter, Ankerwache und Bojenreservierung – die besten Apps für den Kroatien-Törn.",
    image: "/images/yacht-nav-station.jpg",
    published: "2026-06-22",
    updated: "2026-06-23",
  },
  "sicherheitseinweisung-yacht": {
    headline: "Sicherheitseinweisung Yacht – Checkliste für die Crew",
    description:
      "Checkliste Sicherheitseinweisung Yacht: Was beim Check-in erklärt wird, was jede Person an Bord wissen muss – Rettungsmittel, Notfall, Manöver und Brandschutz.",
    image: "/images/yacht-nav-station.jpg",
    published: "2026-06-20",
    updated: "2026-06-23",
  },
};

export type NavItem = {
  label: string;
  href: string;
  sub?: { label: string; href: string; desc: string }[];
};

export const nav: NavItem[] = [
  { label: "Die Yacht", href: "/die-yacht" },
  { label: "Charter-Infos", href: "/charter-infos" },
  {
    label: "Reviere",
    href: "/revier-sibenik",
    sub: [
      { label: "Revier Šibenik", href: "/revier-sibenik", desc: "Heimathafen & Ausgangspunkt" },
      { label: "Segeln in den Kornaten", href: "/segeln-in-den-kornaten", desc: "89 Inseln im Nationalpark" },
      { label: "Törnvorschlag Kornaten", href: "/toernvorschlag-kornaten", desc: "1-Woche-Route Tag für Tag" },
      { label: "Städte Dalmatiens", href: "/staedte-dalmatiens", desc: "Trogir · Split · Hvar · Korčula" },
      { label: "Katamaran mieten Kroatien", href: "/katamaran-mieten-kroatien", desc: "Der große Revier-Guide" },
    ],
  },
  {
    label: "Ratgeber",
    href: "/ratgeber",
    sub: [
      { label: "Törnplanung", href: "/ratgeber#toernplanung", desc: "Planen, Inselhopping & Skipper" },
      { label: "Wetter & Winde", href: "/ratgeber#wetter-und-winde", desc: "Maestral, Bora, Jugo & Reisezeit" },
      { label: "An Bord & Proviant", href: "/ratgeber#an-bord", desc: "Packen, Einkauf, Apps & Sicherheit" },
      { label: "Alle Ratgeber ansehen", href: "/ratgeber", desc: "Komplette Übersicht" },
    ],
  },
  { label: "Kontakt", href: "/kontakt" },
];

/* ---- Kennzahlen für Hero / Strip ---- */
export const heroStats = [
  { k: "12 m", l: "Länge über alles" },
  { k: "4 + 2", l: "Kabinen" },
  { k: "8", l: "Gäste" },
  { k: "100 %", l: "energieautark" },
];

/* ---- Die zentralen Vorteile der Miss Moneypenny ---- */
export const advantages: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "droplet",
    title: "Wassermacher an Bord",
    text: "Die Umkehrosmose-Anlage gewinnt Süßwasser aus dem Meer. Lange Duschen, volle Tanks – ganz ohne Hafenstopp zum Bunkern.",
  },
  {
    icon: "sun",
    title: "Solaranlage & Energieautarkie",
    text: "Leistungsstarke Solarmodule laden die Batterien lautlos. Kühlschrank, Licht und Navigation laufen, ohne den Generator zu starten.",
  },
  {
    icon: "anchor",
    title: "Frei vor Anker bleiben",
    text: "Wasser und Strom an Bord bedeuten echte Unabhängigkeit: Tage in einsamen Buchten, statt jeden Abend eine teure Marina zu suchen.",
  },
  {
    icon: "waves",
    title: "Stabil & komfortabel",
    text: "Der Katamaran liegt ruhig im Wasser – kaum Krängung, kaum Seekrankheit. Komfort, der auch Einsteiger und Familien überzeugt.",
  },
  {
    icon: "bed",
    title: "Raum für acht Gäste",
    text: "Vier private Doppelkabinen plus zwei Bugkabinen, jede mit eigenem Bad. Ein lichtdurchfluteter Salon auf einer Ebene mit der Pantry.",
  },
  {
    icon: "leaf",
    title: "Top-Zustand & gepflegt",
    text: "Komplette Cockpit-Persenning, Teakdeck, Standheizung. Die Miss Moneypenny wird professionell betreut und ist startklar.",
  },
];

/* ---- Technische Daten ---- */
export const specs: { label: string; value: string }[] = [
  { label: "Werft / Modell", value: "Lagoon 400 S2" },
  { label: "Baujahr", value: "2016" },
  { label: "Länge über alles", value: "12 m" },
  { label: "Breite", value: "7,25 m" },
  { label: "Tiefgang", value: "1,30 m" },
  { label: "Kabinen", value: "4 + 2" },
  { label: "Gäste (Tag / Nacht)", value: "10 / 8" },
  { label: "Nasszellen", value: "4" },
  { label: "Motorisierung", value: "2 × 45 PS" },
  { label: "Wassertank", value: "300 l + Wassermacher" },
  { label: "Energie", value: "Solar · Inverter" },
  { label: "Heimathafen", value: "Šibenik, Kroatien" },
];

/* ---- Ausstattung / Equipment ---- */
export const equipment: { icon: IconName; title: string; text: string }[] = [
  { icon: "wheel", title: "Navigation", text: "B&G Kartenplotter, GPS, AIS, Autopilot und elektrische Ankerwinsch." },
  { icon: "wind", title: "Segelgarderobe", text: "Voll durchgelattetes Großsegel, Rollgenua, Lazy Bag und Bimini." },
  { icon: "shower", title: "Außendusche", text: "Warm-/Kaltwasserdusche an der Badeplattform mit Badeleiter." },
  { icon: "wifi", title: "WLAN an Bord", text: "Unbegrenztes Internet zum Planen, Teilen und Verbundenbleiben." },
  { icon: "snorkel", title: "Wassersport", text: "Beiboot mit Außenborder, Schnorchelausrüstung, optional SUP." },
  { icon: "sun", title: "Komfort", text: "Standheizung, Cockpit-Persenning, Polster und Teak im Cockpit." },
];

/* ---- Layout / Kabinen ---- */
export const cabins: { title: string; text: string }[] = [
  { title: "4 Doppelkabinen", text: "Großzügige Gästekabinen mit Querkoje, eigenem Bad und reichlich Stauraum in beiden Rümpfen." },
  { title: "2 Bugkabinen", text: "Zusätzliche Kojen im Bug – ideal für Skipper, Kinder oder Gepäck." },
  { title: "Salon & Pantry", text: "Lichtdurchfluteter Salon auf einer Ebene mit voll ausgestatteter Pantry und Rundumblick." },
  { title: "Cockpit & Flybridge", text: "Geschütztes Cockpit zum Essen im Freien, erhöhter Steuerstand mit bestem Überblick." },
];

/* ---- Reviere (für Karten) ---- */
export const regions: {
  title: string;
  kicker: string;
  text: string;
  href: string;
  image: string;
  imageAlt: string;
}[] = [
  {
    kicker: "Heimathafen",
    title: "Revier Šibenik",
    text: "Geschützte Gewässer, die UNESCO-Kathedrale und die Wasserfälle der Krka – der perfekte Start.",
    href: "/revier-sibenik",
    image: "/images/region-sibenik.png",
    imageAlt: "Panorama von Šibenik mit Kathedrale und Hafen – Ausgangspunkt des Katamaran-Törns",
  },
  {
    kicker: "Nationalpark",
    title: "Segeln in den Kornaten",
    text: "89 Inseln, steile Klippen, kristallklares Wasser und Buchten ganz für sich allein.",
    href: "/segeln-in-den-kornaten",
    image: "/images/region-kornati-aerial.png",
    imageAlt: "Luftaufnahme der Kornaten – 89 Inseln im Nationalpark Kroatien",
  },
  {
    kicker: "Landgang",
    title: "Städte Dalmatiens",
    text: "Von Trogir über Split und Hvar bis Korčula – lebendige Geschichte direkt am Wasser.",
    href: "/staedte-dalmatiens",
    image: "/images/city-hvar.png",
    imageAlt: "Hafenstadt Hvar von der Festung aus – Dalmatien per Katamaran entdecken",
  },
];

/* ---- Städte Dalmatiens ---- */
export const cities: {
  name: string;
  tag: string;
  text: string;
  image: string;
}[] = [
  {
    name: "Trogir",
    tag: "Ein lebendiges Museum",
    text: "Auf einer kleinen Insel gelegen und über Brücken verbunden: venezianische Paläste, die Festung Kamerlengo und enge Gassen voller Cafés. UNESCO-Welterbe zum Flanieren.",
    image: "/images/city-trogir.png",
  },
  {
    name: "Split",
    tag: "Antike trifft pulsierendes Leben",
    text: "Im Herzen der zweitgrößten Stadt Kroatiens steht der 1.700 Jahre alte Diokletianpalast – heute voller Shops, Cafés und Leben. Die Riva lädt zum Promenieren.",
    image: "/images/city-split.png",
  },
  {
    name: "Hvar",
    tag: "Glamour & Geschichte auf einer Insel",
    text: "Die Festung Španjola thront über der Stadt, darunter das älteste öffentliche Theater Europas. Eleganz, Lavendelduft und mondäne Hafenpromenade.",
    image: "/images/city-hvar.png",
  },
  {
    name: "Korčula",
    tag: "Auf den Spuren von Marco Polo",
    text: "„Klein-Dubrovnik“: eine ummauerte Altstadt, die Kathedrale des Heiligen Markus, Schwerttänze und Weingüter. Angeblich die Geburtsstadt Marco Polos.",
    image: "/images/city-korcula.png",
  },
];

/* ---- Im Charter enthalten ---- */
export const included: string[] = [
  "Bettwäsche & Handtücher",
  "Endreinigung",
  "Gas & Kurtaxe",
  "Außenborder fürs Beiboot",
  "Transitlog & Hafengebühr Heimathafen",
  "WLAN an Bord",
  "Schnorchelausrüstung",
  "24/7-Notfallbereitschaft",
];

export const extras: { icon: IconName; title: string; text: string }[] = [
  { icon: "wheel", title: "Skipper", text: "Erfahrener Skipper auf Wunsch – zurücklehnen und genießen oder dazulernen." },
  { icon: "waves", title: "SUP-Board", text: "Stand-up-Paddle für ruhige Buchten und den Morgensport auf dem Wasser." },
  { icon: "shield", title: "Kautionsversicherung", text: "Optional die Kaution absichern und sorgenfrei in See stechen." },
  { icon: "calendar", title: "Früher Check-in", text: "Nach Verfügbarkeit früher an Bord – mehr Zeit auf dem Wasser." },
];

/* ---- Ablauf ---- */
export const steps: { title: string; text: string }[] = [
  { title: "Anfrage stellen", text: "Wunschtermin und Crew-Größe nennen. Wir prüfen die Verfügbarkeit der Miss Moneypenny." },
  { title: "Angebot & Beratung", text: "Innerhalb von 24 Stunden erhalten Sie ein persönliches Angebot inklusive aller Extras." },
  { title: "Buchung bestätigen", text: "Charter sichern, Crew-Liste einreichen, Anreise und Wünsche in Ruhe abstimmen." },
  { title: "Leinen los", text: "Check-in in Šibenik, kurze Bordeinweisung – und hinaus auf die türkise Adria." },
];

/* ---- Kundenstimmen ---- */
export const testimonials: { quote: string; name: string; role: string; initial: string }[] = [
  {
    quote:
      "Früher waren Motor-Katamarane für mich das Maß der Dinge. Heute liegt mir die Umwelt am Herzen – und ich genieße es, leise und störungsfrei über das Meer zu gleiten.",
    name: "Heiko",
    role: "Umgestiegen vom Motorkatamaran",
    initial: "H",
  },
  {
    quote:
      "Fürs Ankermanöver bin ich nicht zu gebrauchen – also übernehme ich an Bord den Abspüldienst. Und gerade dabei hat mich die große Kombüse restlos überzeugt.",
    name: "Axel",
    role: "Crew & Abspüldienst",
    initial: "A",
  },
  {
    quote:
      "Was mich an der Miss Moneypenny total begeistert hat: Wir konnten tagelang von Bucht zu Bucht ziehen, ohne je die Batterien laden oder Wasser tanken zu müssen.",
    name: "Thomas",
    role: "Tagelang autark unterwegs",
    initial: "T",
  },
  {
    quote:
      "Mich haben die großzügigen Kabinen mit ihrem vielen Stauraum überzeugt – und das eigene Bad direkt von der Kabine aus, das ich mit niemandem teilen muss außer mit meinem Mann.",
    name: "Carmen",
    role: "Komfort & Privatsphäre",
    initial: "C",
  },
];

/* ---- FAQ ---- */
export const faqs: { q: string; a: string }[] = [
  {
    q: "Brauche ich einen Segelschein?",
    a: "Für das Bareboat-Chartern in Kroatien benötigen Sie einen anerkannten Sportbootführerschein (mind. SBF See bzw. eine gleichwertige Lizenz) sowie ein Funkzeugnis (SRC/UBI). Wer ohne Schein oder ohne Erfahrung unterwegs sein möchte, bucht einfach einen erfahrenen Skipper dazu.",
  },
  {
    q: "Was macht den Wassermacher und die Solaranlage so wertvoll?",
    a: "Beides zusammen macht die Miss Moneypenny weitgehend autark. Der Wassermacher erzeugt Süßwasser aus Meerwasser, die Solaranlage lädt die Batterien. So können Sie tagelang in einsamen Buchten ankern, ohne Wasser bunkern oder eine Marina ansteuern zu müssen – mehr Freiheit, weniger Kosten.",
  },
  {
    q: "Für wie viele Personen ist die Yacht geeignet?",
    a: "Die Lagoon 400 S2 bietet vier Doppelkabinen plus zwei Bugkabinen und damit komfortabel Platz für bis zu acht Gäste zum Übernachten. Jede der vier Doppelkabinen verfügt über ein eigenes Bad.",
  },
  {
    q: "Wo startet der Törn?",
    a: "Heimathafen ist die Marina Mandalina in Šibenik. Von dort erreichen Sie die Kornaten, den Krka-Nationalpark und die schönsten Städte Dalmatiens bequem innerhalb einer Woche.",
  },
  {
    q: "Ist ein Katamaran auch für Einsteiger geeignet?",
    a: "Sehr gut sogar. Katamarane liegen stabil im Wasser und krängen kaum – das senkt das Risiko von Seekrankheit deutlich und sorgt für ein entspanntes Raumgefühl. Mit Skipper an Bord ist der Einstieg besonders einfach.",
  },
  {
    q: "Wann ist die beste Reisezeit?",
    a: "Die Hauptsaison von Mai bis September bietet warmes Wetter und verlässlichen Maestral (3–5 Beaufort) am Nachmittag. Juni und September verbinden angenehme Temperaturen mit etwas mehr Ruhe in den Buchten.",
  },
];
