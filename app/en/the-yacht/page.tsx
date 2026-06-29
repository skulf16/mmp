import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import FactBox from "@/components/FactBox";
import FaqSection from "@/components/FaqSection";
import { Icon, ArrowRight, Droplet, Sun, type IconName } from "@/components/Icons";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Charter the Lagoon 400 S2 – a self-sufficient catamaran",
  description:
    "The Miss Moneypenny: a Lagoon 400 S2 with 4+2 cabins, watermaker & solar power. All specs, equipment and photos of the self-sufficient catamaran at a glance.",
  alternates: {
    canonical: "/en/the-yacht",
    languages: { "de-DE": "/die-yacht", en: "/en/the-yacht", "x-default": "/die-yacht" },
  },
  openGraph: {
    title: "Charter the Lagoon 400 S2 – a self-sufficient catamaran | Miss Moneypenny",
    description: "Lagoon 400 S2 with 4+2 cabins, watermaker & solar power. Specs, equipment and gallery of the Miss Moneypenny.",
    locale: "en_GB",
    images: [{ url: "/images/yacht-sailing-coast.jpg", width: 1200, height: 630, alt: "Miss Moneypenny Lagoon 400 S2 under full sail off the Dalmatian coast" }],
  },
};

const specs: { label: string; value: string }[] = [
  { label: "Yard / model", value: "Lagoon 400 S2" },
  { label: "Year built", value: "2016" },
  { label: "Length overall", value: "12 m" },
  { label: "Beam", value: "7.25 m" },
  { label: "Draft", value: "1.30 m" },
  { label: "Cabins", value: "4 + 2" },
  { label: "Guests (day / night)", value: "10 / 8" },
  { label: "Heads (bathrooms)", value: "4" },
  { label: "Engines", value: "2 × 45 hp" },
  { label: "Water tank", value: "300 l + watermaker" },
  { label: "Power", value: "Solar · inverter" },
  { label: "Home port", value: "Šibenik, Croatia" },
];

const equipment: { icon: IconName; title: string; text: string }[] = [
  { icon: "wheel", title: "Navigation", text: "B&G chartplotter, GPS, AIS, autopilot and an electric anchor windlass." },
  { icon: "wind", title: "Sail wardrobe", text: "Fully battened mainsail, furling genoa, lazy bag and bimini." },
  { icon: "shower", title: "Deck shower", text: "Hot/cold shower on the swim platform with a boarding ladder." },
  { icon: "wifi", title: "Wi-Fi on board", text: "Unlimited internet for planning, sharing and staying connected." },
  { icon: "snorkel", title: "Water sports", text: "Dinghy with outboard, snorkelling gear, optional SUP." },
  { icon: "sun", title: "Comfort", text: "Diesel heater, cockpit enclosure, cushions and teak in the cockpit." },
];

const cabins: { title: string; text: string }[] = [
  { title: "4 double cabins", text: "Generous guest cabins with an athwartship berth, en-suite bathroom and plenty of storage in both hulls." },
  { title: "2 bow cabins", text: "Extra berths in the bows – ideal for a skipper, children or luggage." },
  { title: "Saloon & galley", text: "A light-filled saloon on one level with a fully equipped galley and panoramic views." },
  { title: "Cockpit & flybridge", text: "A sheltered cockpit for dining outdoors and a raised helm with the best all-round view." },
];

const ldProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${siteUrl}/en/the-yacht#product`,
  "name": "Lagoon 400 S2 Miss Moneypenny – catamaran charter from Šibenik",
  "description": "Lagoon 400 S2 catamaran, built 2016, with watermaker (60 l/h), solar power, teak deck, 4 double cabins with en-suite bathrooms + 2 bow cabins. From Marina Mandalina, Šibenik.",
  "category": "Sailing catamaran / yacht charter",
  "brand": { "@type": "Brand", "name": "Lagoon Catamarans" },
  "manufacturer": { "@type": "Organization", "name": "Lagoon Catamarans" },
  "model": "Lagoon 400 S2",
  "productionDate": "2016",
  "inLanguage": "en",
  "image": `${siteUrl}/images/yacht-sailing-coast.jpg`,
  "additionalProperty": specs.map((s) => ({
    "@type": "PropertyValue",
    "name": s.label,
    "value": s.value,
  })),
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "2500",
    "highPrice": "5200",
    "priceValidUntil": "2026-12-31",
    "seller": { "@id": "https://chartern-in-kroatien.de/#organization" },
    "availability": "https://schema.org/InStock",
  },
};

const yachtFacts = [
  "The Miss Moneypenny is a Lagoon 400 S2 sailing catamaran, built in 2016.",
  "At 12 m long, 7.25 m wide and with just 1.30 m of draft, she reaches even shallow bays.",
  "Four double cabins with en-suite bathrooms plus two bow cabins sleep up to 8 guests.",
  "A watermaker and solar power make her largely independent of fresh water and shore power.",
  "Her home port is Marina Mandalina in Šibenik, Croatia.",
];

const yachtFaqs = [
  {
    q: "How many people is the Miss Moneypenny designed for?",
    a: "The Lagoon 400 S2 has four double cabins plus two bow cabins, comfortably sleeping up to eight guests (up to ten people during the day). Each of the four double cabins has its own bathroom – four heads in total.",
  },
  {
    q: "What does “self-sufficient” mean on the Miss Moneypenny?",
    a: "On board, a watermaker produces fresh water from seawater by reverse osmosis, and a solar array charges the batteries silently. That lets you anchor in secluded bays for days without taking on water or heading for a marina.",
  },
  {
    q: "What is the draft of the Lagoon 400 S2?",
    a: "The draft is only 1.30 metres. Together with the twin hulls, that lets you enter shallow bays that remain off-limits to monohulls with a deeper keel.",
  },
  {
    q: "Is a catamaran suitable for beginners and families too?",
    a: "Very much so. A catamaran sits stably on the water and barely heels – which greatly reduces the risk of seasickness and creates a calm sense of space. On request an experienced skipper joins you on board, so no sailing licence of your own is required.",
  },
  {
    q: "Where is the yacht based and where does the trip start?",
    a: "The home port is Marina Mandalina in Šibenik. From there the Kornati islands, the Krka National Park and the towns of Dalmatia are comfortably within reach in a single week.",
  },
];

const gallery: GalleryImage[] = [
  { src: "/images/yacht-sailing-coast.jpg", alt: "Miss Moneypenny under sail off the Dalmatian coast", span: "wide" },
  { src: "/images/yacht-aerial-village.jpg", alt: "Aerial view of the catamaran off a coastal village", span: "tall" },
  { src: "/images/yacht-salon.jpg", alt: "Bright saloon with galley and dining area" },
  { src: "/images/yacht-galley.jpg", alt: "Fully equipped galley with sea view" },
  { src: "/images/yacht-cockpit-dining.jpg", alt: "Cockpit with the breakfast table laid", span: "half" },
  { src: "/images/yacht-cabin.jpg", alt: "Cosy double cabin with natural light", span: "half" },
  { src: "/images/yacht-helm.jpg", alt: "Helm station with B&G chartplotter" },
  { src: "/images/yacht-nav-station.jpg", alt: "Navigation corner with chart and binoculars" },
  { src: "/images/yacht-bathroom.jpg", alt: "En-suite bathroom with washbasin" },
  { src: "/images/yacht-swim-platform.jpg", alt: "Teak swim platform with snorkelling gear", span: "tall" },
  { src: "/images/yacht-bow-front.jpg", alt: "Bow of the catamaran with trampoline nets", span: "wide" },
  { src: "/images/yacht-deck-lagoon.jpg", alt: "Side deck of the Lagoon 400 S2", span: "half" },
  { src: "/images/yacht-sailing-genoa.jpg", alt: "Catamaran under genoa against an island backdrop", span: "half" },
];

export default function YachtPageEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldProduct) }}
      />
      <PageHero
        eyebrow="The Yacht"
        title="Lagoon 400 S2 – Miss Moneypenny"
        lede="A catamaran that unites comfort, stability and true self-sufficiency – in pristine condition, ready to sail in Šibenik."
        image="/images/yacht-sailing-coast.jpg"
        imageAlt="Miss Moneypenny under full sail on the Adriatic"
        crumbs={[{ label: "Home", href: "/en" }, { label: "The Yacht" }]}
      />

      {/* At a glance */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container container-narrow">
          <Reveal as="div"><FactBox title="At a glance" facts={yachtFacts} /></Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Overview</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Spacious, stable, independent.</Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  The Lagoon 400 S2 is one of the most popular cruising catamarans in the world –
                  and for good reason. Two hulls deliver stability and space, while the shallow
                  draft opens up bays that stay closed to others.
                </p>
                <p>
                  Aboard the Miss Moneypenny, light wood, a sun-filled saloon and a sheltered
                  cockpit meet well-thought-out systems. The watermaker and solar array make her
                  the ideal yacht for long, relaxed trips.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "2rem" }}>
                <span className="tag-pill">Teak deck</span>
                <span className="tag-pill">Full enclosure</span>
                <span className="tag-pill">Diesel heater</span>
                <span className="tag-pill">Autopilot</span>
                <span className="tag-pill">AIS</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-aerial-village.jpg" alt="Miss Moneypenny at anchor, photographed from the air" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section surface-navy">
        <div className="container">
          <div className="head-flex" style={{ marginBottom: "2.5rem" }}>
            <Reveal as="div" className="head-block">
              <span className="eyebrow on-dark">Specifications</span>
              <h2 className="section-title">Specs & facts</h2>
            </Reveal>
            <Reveal as="p" delay={1} className="lede" style={{ maxWidth: "34ch" }}>
              All the key figures of the Miss Moneypenny at a glance.
            </Reveal>
          </div>
          <Reveal as="dl" className="specs">
            {specs.map((s) => (
              <div className="spec-row" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Layout / cabins */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Layout</span>
            <h2 className="section-title">Room for eight – with privacy for everyone.</h2>
            <p className="lede">
              Four double cabins with en-suite bathrooms, two additional bow cabins and an open
              living area that lets inside and outside merge.
            </p>
          </Reveal>
          <div className="grid-2" style={{ marginTop: "3rem" }}>
            {cabins.map((c, i) => (
              <Reveal key={c.title} delay={((i % 2) + 1) as 1 | 2}>
                <article className="feature">
                  <span className="ic"><Icon name={i === 0 ? "bed" : i === 1 ? "users" : i === 2 ? "ship" : "wheel"} /></span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Equipment</span>
            <h2 className="section-title">Considered down to the last detail.</h2>
          </Reveal>
          <div className="grid-3" style={{ marginTop: "3rem" }}>
            {equipment.map((e, i) => (
              <Reveal key={e.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="feature">
                  <span className="ic"><Icon name={e.icon} /></span>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Self-sufficiency strip */}
      <section className="section surface-dark">
        <div className="container">
          <div className="grid-2" style={{ gap: "3rem", alignItems: "center" }}>
            <Reveal as="div" className="feature-min" style={{ borderTop: "none", padding: 0 }}>
              <Droplet className="ic" style={{ width: 40, height: 40 }} />
              <div>
                <h3 style={{ fontSize: "1.5rem" }}>Watermaker</h3>
                <p>Fresh water straight from the sea – for independence from any marina.</p>
              </div>
            </Reveal>
            <Reveal as="div" delay={1} className="feature-min" style={{ borderTop: "none", padding: 0 }}>
              <Sun className="ic" style={{ width: 40, height: 40 }} />
              <div>
                <h3 style={{ fontSize: "1.5rem" }}>Solar power</h3>
                <p>Silent energy for days at anchor, with no generator at all.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container container-wide">
          <Reveal as="div" className="head-flex" style={{ marginBottom: "2.5rem" }}>
            <div className="head-block">
              <span className="eyebrow">Gallery</span>
              <h2 className="section-title">Step aboard.</h2>
            </div>
            <Link href="/kontakt" className="link-arrow">Enquire now <ArrowRight /></Link>
          </Reveal>
          <Reveal as="div">
            <Gallery images={gallery} />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Frequently asked</span>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Good to know before the trip.</h2>
          </Reveal>
          <div style={{ marginTop: "2.5rem" }}>
            <FaqSection items={yachtFaqs} id={`${siteUrl}/en/the-yacht#faq`} />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready for the Adriatic?"
        title="Secure your weeks aboard the Miss Moneypenny."
        text="Tell us your preferred dates – we'll check availability and reply within 24 hours with a personal offer."
        image="/images/yacht-sailing-genoa.jpg"
      />
    </>
  );
}
