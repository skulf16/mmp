import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ArticleByline from "@/components/ArticleByline";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Icon, Apple, GooglePlay, type IconName } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Apps für Segler: Navigation, Wetter & Ankerwache",
  description:
    "Die wichtigsten Apps für den Segeltörn in Kroatien: Navionics, Windy.com, MySea, Anchor Alarm und Navily – mit direkten Download-Links für iOS und Android.",
  openGraph: {
    title: "Apps für Segler – die wichtigsten Törn-Apps für Kroatien",
    description:
      "Navigation, Wetter, Reviere und Ankerwache: Die 5 nützlichsten Apps für deinen Katamaran-Törn in der Adria – mit Download-Links für iOS & Android.",
    images: [{ url: "/images/yacht-nav-station.jpg", width: 1200, height: 630, alt: "Navigationsstation an Bord der Miss Moneypenny" }],
  },
};

type App = {
  name: string;
  cat: string;
  icon: IconName;
  text: string;
  ios: string;
  android: string;
};

const apps: App[] = [
  {
    name: "Navionics",
    cat: "Seekarten & Navigation",
    icon: "compass",
    text: "Detaillierte Seekarten für die gesamte Adria: Tiefenlinien, Hafenpläne, Ankerplätze und Sperrgebiete. Die Routenplanung mit Distanz- und Zeitberechnung gehört für die meisten Crews zur Standardausrüstung – als Ergänzung zum festen Kartenplotter an Bord.",
    ios: "https://apps.apple.com/de/app/navionics-boating/id744920098",
    android: "https://play.google.com/store/apps/details?id=it.navionics.singleAppMarineLakesHD&hl=de",
  },
  {
    name: "Windy.com",
    cat: "Wetter & Wind",
    icon: "wind",
    text: "Die wohl beliebteste Wetter-App für Segler: animierte Wind-, Wellen- und Böen-Vorhersagen aus mehreren Modellen (ECMWF, GFS). Unverzichtbar, um Maestral, Bora und Jugo rechtzeitig einzuschätzen und den Tag entsprechend zu planen.",
    ios: "https://apps.apple.com/de/app/windy-com/id1161387262",
    android: "https://play.google.com/store/apps/details?id=com.windyty.android&hl=de",
  },
  {
    name: "MySea",
    cat: "Reviere & Buchten",
    icon: "pin",
    text: "Cruising-Guide speziell für Kroatien, Griechenland und die Türkei: Buchten, Marinas, Restaurants und Geheimtipps mit Fotos und Bewertungen aus der Community – ideal zur Tagesplanung in den Kornaten und rund um Šibenik.",
    ios: "https://apps.apple.com/de/app/mysea/id802375798",
    android: "https://play.google.com/store/apps/details?id=com.euminia.myseaapp&hl=de",
  },
  {
    name: "Anchor Alarm",
    cat: "Ankerwache",
    icon: "anchor",
    text: "Digitale Ankerwache fürs ruhige Gewissen: Die App schlägt Alarm, sobald die Yacht ihren Schwojkreis verlässt. So schläft die Crew auch in der einsamen Bucht entspannt, ohne ständig die Position kontrollieren zu müssen.",
    ios: "https://apps.apple.com/de/app/anchor-pro/id1445476850",
    android: "https://play.google.com/store/apps/details?id=com.webmajstr.anchor&hl=de",
  },
  {
    name: "Navily",
    cat: "Ankerplätze & Marinas",
    icon: "sailboat",
    text: "Community-Guide für Ankerplätze und Häfen mit Angaben zu Untergrund, Windschutz und Fotos – inklusive Liegeplatz-Reservierung. Praktisch, um schon vormittags den passenden Ankerplatz für die kommende Nacht zu finden.",
    ios: "https://apps.apple.com/de/app/navily/id881103205",
    android: "https://play.google.com/store/apps/details?id=com.ckcnet.android.navily&hl=de",
  },
];

const ldApps = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Apps für Segler in Kroatien",
  "itemListElement": apps.map((a, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "SoftwareApplication",
      "name": a.name,
      "applicationCategory": "TravelApplication",
      "operatingSystem": "iOS, Android",
    },
  })),
};

function StoreButtons({ app }: { app: App }) {
  return (
    <div className="store-row">
      <a className="store-btn" href={app.ios} target="_blank" rel="noopener noreferrer" aria-label={`${app.name} im App Store laden`}>
        <Apple />
        <span className="lbl"><small>Laden im</small><b>App Store</b></span>
      </a>
      <a className="store-btn" href={app.android} target="_blank" rel="noopener noreferrer" aria-label={`${app.name} bei Google Play laden`}>
        <GooglePlay />
        <span className="lbl"><small>Jetzt bei</small><b>Google Play</b></span>
      </a>
    </div>
  );
}

export default function AppsFuerSeglerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldApps) }}
      />
      <PageHero
        eyebrow="Ratgeber"
        title="Apps für Segler"
        lede="Navigation, Wetter, Reviere und Ankerwache: Diese fünf Apps gehören auf jedes Smartphone an Bord – kostenlos bzw. mit kostenloser Basisversion und direkt zum Download."
        image="/images/yacht-nav-station.jpg"
        imageAlt="Navigationsstation mit Kartenplotter an Bord der Miss Moneypenny"
        crumbs={[{ label: "Start", href: "/" }, { label: "Ratgeber", href: "/ratgeber" }, { label: "Apps für Segler" }]}
      />

      <ArticleByline slug="apps-fuer-segler" />

      {/* Intro */}
      <section className="section">
        <div className="container container-narrow">
          <Reveal as="div"><span className="eyebrow">Digitaler Begleiter an Bord</span></Reveal>
          <Reveal as="h2" delay={1} className="section-title">Smartphone als Co-Skipper.</Reveal>
          <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
            <p>
              Ein moderner Katamaran wie die Miss Moneypenny ist mit Kartenplotter, AIS und
              Autopilot bestens ausgestattet. Ein paar gute Apps auf dem Smartphone oder
              Tablet ergänzen diese Bordelektronik aber ideal – für die Wettervorhersage am
              Morgen, die Bucht-Recherche am Nachmittag und die ruhige Nacht vor Anker.
            </p>
            <p>
              Wir haben die fünf Apps zusammengestellt, die sich auf unseren Törns in den
              Kornaten und rund um Šibenik bewährt haben. Alle sind in einer kostenlosen
              Version nutzbar und für iOS wie Android verfügbar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* App-Liste */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Unsere Empfehlungen</span>
            <h2 className="section-title">Fünf Apps, die wir an Bord nutzen.</h2>
            <p className="lede">Von der Seekarte bis zur Ankerwache – pro App ein Direkt-Download für iOS und Android.</p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3.5rem" }}>
            {apps.map((app, i) => (
              <Reveal key={app.name} delay={((i % 2) + 1) as 1 | 2}>
                <article className="app-card">
                  <div className="app-card-head">
                    <span className="ic"><Icon name={app.icon} /></span>
                    <div>
                      <h3>{app.name}</h3>
                      <span className="app-cat">{app.cat}</span>
                    </div>
                  </div>
                  <p>{app.text}</p>
                  <StoreButtons app={app} />
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="form-note center" style={{ marginTop: "2rem" }}>
            Alle genannten Apps sind Angebote der jeweiligen Anbieter. Die Download-Links
            führen zum offiziellen App Store bzw. zu Google Play. Funktionsumfang und Preise
            der Premium-Versionen können sich ändern.
          </Reveal>
        </div>
      </section>

      {/* Link zu Charter */}
      <section className="section">
        <div className="container container-narrow center">
          <Reveal as="div">
            <span className="eyebrow centered">Miss Moneypenny</span>
            <h2 className="section-title" style={{ textAlign: "center", marginTop: "1rem" }}>Apps geladen? Dann fehlt nur noch die Yacht.</h2>
            <p className="lede" style={{ textAlign: "center", marginTop: "1.2rem" }}>
              Navigation, Wetter und Ankerplätze hast du dann in der Tasche – die autarke
              Lagoon 400 S2 ab Šibenik liefern wir dazu.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/kontakt" className="btn btn-primary">Verfügbarkeit anfragen</Link>
              <Link href="/segeltorn-planen" className="btn btn-outline">Törn planen</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand image="/images/yacht-helm.jpg" />
    </>
  );
}
