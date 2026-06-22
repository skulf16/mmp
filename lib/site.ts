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
    href: "/segeltorn-planen",
    sub: [
      { label: "Segeltörn planen", href: "/segeltorn-planen", desc: "Der komplette Planungs-Guide" },
      { label: "Packliste", href: "/segeltorn-packliste", desc: "Was wirklich an Bord gehört" },
      { label: "Winde & Reisezeit", href: "/winde-kroatien", desc: "Maestral, Bora & beste Monate" },
      { label: "Segeln mit Skipper", href: "/segeltorn-kroatien-skipper", desc: "Ohne Führerschein entspannt segeln" },
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
