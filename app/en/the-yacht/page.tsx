import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import FactBox from "@/components/FactBox";
import FaqSection from "@/components/FaqSection";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import { ArrowRight, Droplet, Sun } from "@/components/Icons";
import { site, siteUrl } from "@/lib/site";
import SmoothScroll from "@/components/cine/SmoothScroll";
import ScrubHero from "@/components/cine/ScrubHero";
import Parallax from "@/components/cine/Parallax";
import PinnedTriptych from "@/components/cine/PinnedTriptych";
import FilmFacade from "@/components/cine/FilmFacade";
import CountUp from "@/components/cine/CountUp";

const IMG = "/images/yacht";

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
    images: [{ url: `${IMG}/hero-sailing.jpg`, width: 1200, height: 630, alt: "Miss Moneypenny Lagoon 400 S2 under full sail among the islands of Dalmatia" }],
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
  "image": `${siteUrl}${IMG}/hero-sailing.jpg`,
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

// Breadcrumb schema – previously supplied by PageHero, now standalone since the
// cinematic hero replaces PageHero.
const ldBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteUrl}/en` },
    { "@type": "ListItem", "position": 2, "name": "The Yacht" },
  ],
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

// Gallery: a fresh, high-res discovery – deliberately none of the photos already
// spent in the hero, the bay break, the film or the triptych.
const gallery: GalleryImage[] = [
  { src: `${IMG}/deck-bow.jpg`, alt: "Teak foredeck of the Lagoon 400 S2 over deep blue water", span: "wide" },
  { src: `${IMG}/swim-platform.jpg`, alt: "Teak swim platform with a boarding ladder at the waterline", span: "tall" },
  { src: `${IMG}/cockpit-dining.jpg`, alt: "Cockpit table laid with flowers – dining on deck" },
  { src: `${IMG}/salon-dining.jpg`, alt: "Bright saloon bench with panoramic windows", span: "half" },
  { src: `${IMG}/galley-stove.jpg`, alt: "Galley with a hob and a sea view", span: "half" },
  { src: `${IMG}/helm-station.jpg`, alt: "Helm station with the B&G 12-inch chartplotter" },
  { src: `${IMG}/bath.jpg`, alt: "En-suite bathroom with washbasin and mirror" },
  { src: `${IMG}/cabin.jpg`, alt: "Double cabin with daylight through the deck hatch" },
  { src: `${IMG}/salon-wide.jpg`, alt: "Light-filled saloon with a view into the cockpit", span: "half" },
  { src: `${IMG}/aerial-anchored.jpg`, alt: "Catamaran at anchor off a Dalmatian coastal village", span: "tall" },
  { src: `${IMG}/deck-foredeck.jpg`, alt: "Foredeck with the mast and stowed sails", span: "half" },
  { src: `${IMG}/aerial-topdown.jpg`, alt: "Catamaran from above on turquoise water", span: "wide" },
];

export default function YachtPageEn() {
  return (
    <div className="cine">
      <SmoothScroll />
      {/* preload the LCP image early */}
      <link rel="preload" as="image" href={`${IMG}/hero-sailing.jpg`} fetchPriority="high" />
      {/* Without JS, Reveal blocks would stay invisible – fallback forces visibility */}
      <noscript>
        <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
      </noscript>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldProduct) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />

      {/* 1 · Hero — setting sail */}
      <ScrubHero
        image={`${IMG}/hero-sailing.jpg`}
        imageAlt="Miss Moneypenny – Lagoon 400 S2 under full sail among the islands of Dalmatia"
        eyebrow="Lagoon 400 S2 · Miss Moneypenny"
        headline={<>Two hulls.<br />One <em>horizon</em>.</>}
        sub="A self-sufficient sailing catamaran for eight guests – calm on the water, shallow in draft, ready to sail from her home port of Šibenik."
        scrollLabel="Scroll"
        coordinate="43°44′ N · Šibenik"
        stats={[
          { k: "12 m", l: "Length" },
          { k: "4 + 2", l: "Cabins" },
          { k: "8", l: "Guests" },
          { k: "100 %", l: "self-sufficient" },
        ]}
      />

      {/* 2 · Opening — the promise + fact box */}
      <section className="cine-section">
        <div className="container container-narrow center">
          <Reveal as="div"><span className="eyebrow centered">The Yacht</span></Reveal>
          <Reveal as="h2" delay={1} className="cine-statement" style={{ marginInline: "auto", marginTop: "1.3rem", maxWidth: "22ch" }}>
            Steady as an island. Free as the open <em>sea</em>.
          </Reveal>
          <Reveal as="p" delay={2} className="cine-lede-lg" style={{ marginInline: "auto", marginTop: "1.5rem" }}>
            The Miss Moneypenny is built for long, relaxed trips: barely any heeling, plenty of
            light and enough systems on board to linger for days where others merely pass by.
          </Reveal>
          <Reveal as="div" delay={3} style={{ marginTop: "3.2rem", textAlign: "left" }}>
            <FactBox title="At a glance" facts={yachtFacts} />
          </Reveal>
        </div>
      </section>

      {/* 3 · At sea — stability & calm */}
      <section className="cine-section surface-navy">
        <div className="container">
          <div className="cine-split">
            <div className="cine-split-text">
              <Reveal as="div"><span className="eyebrow on-dark">At sea</span></Reveal>
              <Reveal as="h2" delay={1} className="cine-statement">
                The sea moves. <em>You stay calm.</em>
              </Reveal>
              <Reveal as="div" delay={2} className="prose">
                <p>
                  Two hulls carry the yacht steadily through the swell – she barely heels and lies
                  relaxed on the water even in a fresh Maestral. That noticeably lowers the risk of
                  seasickness and makes the trip a pleasure for children and beginners too.
                </p>
                <p>If you like, an experienced skipper takes the helm – with no sailing licence of your own required.</p>
              </Reveal>
              <Reveal as="div" delay={3} className="pill-row" style={{ marginTop: "1.9rem" }}>
                <span className="tag-pill">Barely heels</span>
                <span className="tag-pill">Less seasickness</span>
                <span className="tag-pill">Family-friendly</span>
                <span className="tag-pill">Skipper optional</span>
              </Reveal>
            </div>
            <Reveal as="div" delay={1} className="cine-split-media">
              <div className="cine-frame">
                <Parallax
                  src={`${IMG}/sailing-bow.jpg`}
                  alt="Miss Moneypenny under sail off a Dalmatian island"
                  strength={10}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 · The bay — full-bleed pause */}
      <section className="cine-bleed">
        <Parallax
          src={`${IMG}/aerial-bay.jpg`}
          alt="Miss Moneypenny at anchor in turquoise water off a Dalmatian village"
          strength={10}
        />
        <div className="cine-bleed-grade" />
        <div className="cine-bleed-cap">
          <div className="container container-wide">
            <Reveal as="div"><span className="eyebrow on-dark">The shallow draft</span></Reveal>
            <Reveal as="h2" delay={1} className="cine-statement" style={{ marginTop: "1.1rem", maxWidth: "20ch" }}>
              Just 1.30 metres separate you from the <em>most secluded bay</em>.
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 · The film — on board, in motion */}
      <section className="cine-section surface-dark">
        <div className="container">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center", marginBottom: "2.6rem" }}>
            <span className="eyebrow on-dark centered">The film</span>
            <h2 className="cine-statement" style={{ marginInline: "auto", marginTop: "1rem", maxWidth: "22ch" }}>
              See for yourself what <em>freedom</em> feels like.
            </h2>
          </Reveal>
          <Reveal as="div" delay={1} className="cine-filmwrap">
            <div className="cine-film-hold">
              <FilmFacade
                id="K6rfIzMQOiM"
                poster={`${IMG}/sailing-genoa.jpg`}
                posterAlt="Miss Moneypenny under sail off the Dalmatian coast – film preview"
                label="Watch the film"
                meta="The Adriatic under sail"
                title="Miss Moneypenny – sailing film on the Adriatic"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 · Space & light — pinned interior triptych */}
      <PinnedTriptych
        eyebrow="Space & light"
        headline={<>One level, <em>so much light</em>.</>}
        panels={[
          { src: `${IMG}/cockpit-salon.jpg`, alt: "Cockpit with open glass doors to the bright saloon", caption: "The saloon – all-round views on one level." },
          { src: `${IMG}/galley.jpg`, alt: "Fully equipped light-wood galley with a sea view", caption: "The galley – fully equipped, with a sea view." },
          { src: `${IMG}/cabin-warm.jpg`, alt: "Bright double cabin with warm wood and daylight", caption: "The cabins – light wood, en-suite, ample storage." },
        ]}
      >
        <p>
          Saloon, galley and cockpit sit on one level – glass doors dissolve the line between
          inside and out. Four double cabins with en-suite bathrooms and two bow cabins give eight
          guests comfort and privacy at once; no guest has to share a bathroom.
        </p>
      </PinnedTriptych>

      {/* 7 · Self-sufficiency — water & sun */}
      <section className="cine-section surface-dark cine-autarkie">
        <div className="cine-autarkie-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/aerial-village.jpg`} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        </div>
        <div className="container">
          <div className="cine-autarkie-grid">
            <div>
              <Reveal as="div"><span className="eyebrow on-dark no-rule">Self-sufficient</span></Reveal>
              <Reveal as="h2" delay={1} className="cine-statement">
                Fresh water from the sea. <em>Power from the sun.</em>
              </Reveal>
              <Reveal as="div" delay={2}><div className="cine-hairline" style={{ marginTop: "1.7rem", width: "84px" }} /></Reveal>
              <Reveal as="p" delay={3} className="cine-lede-lg" style={{ marginTop: "1.7rem" }}>
                A reverse-osmosis watermaker produces around 60 litres of fresh water per hour,
                while a 700-watt solar array and a 2 kW inverter charge the batteries silently. So
                you can lie at anchor in secluded bays for days – no marina, no generator, no
                compromise.
              </Reveal>
            </div>
            <div>
              <Reveal as="div" className="cine-bignum">
                <CountUp to={60} suffix=" l/h" />
                <small>fresh water from seawater</small>
              </Reveal>
              <div style={{ marginTop: "2.6rem" }}>
                <Reveal as="div" className="feature-min" style={{ borderTop: "none", padding: 0, marginBottom: "1.7rem" }}>
                  <Droplet className="ic" style={{ width: 34, height: 34 }} />
                  <div>
                    <h3 style={{ fontSize: "1.3rem" }}>Watermaker</h3>
                    <p>Fresh water straight from the sea – independence from any marina.</p>
                  </div>
                </Reveal>
                <Reveal as="div" delay={1} className="feature-min" style={{ borderTop: "none", padding: 0 }}>
                  <Sun className="ic" style={{ width: 34, height: 34 }} />
                  <div>
                    <h3 style={{ fontSize: "1.3rem" }}>Solar power</h3>
                    <p>Silent energy for days at anchor, with no generator at all.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 · Gallery */}
      <section className="cine-section">
        <div className="container container-wide">
          <Reveal as="div" className="head-flex" style={{ marginBottom: "2.6rem" }}>
            <div className="head-block">
              <span className="eyebrow">Gallery</span>
              <h2 className="cine-statement" style={{ marginTop: "1rem" }}>Step aboard.</h2>
            </div>
            <Link href="/kontakt" className="link-arrow">Enquire now <ArrowRight /></Link>
          </Reveal>
          <Reveal as="div"><Gallery images={gallery} /></Reveal>
        </div>
      </section>

      {/* 9 · Specs & facts */}
      <section className="cine-section surface-navy">
        <div className="container">
          <div className="head-flex" style={{ marginBottom: "2.6rem" }}>
            <Reveal as="div" className="head-block">
              <span className="eyebrow on-dark">Specifications</span>
              <h2 className="cine-statement" style={{ marginTop: "1rem" }}>Specs &amp; facts.</h2>
            </Reveal>
            <Reveal as="p" delay={1} className="cine-lede-lg" style={{ maxWidth: "34ch" }}>
              All the key figures of the Miss Moneypenny at a glance – a Lagoon 400 S2 built in
              2016, 12 m long with just 1.30 m of draft.
            </Reveal>
          </div>
          <Reveal as="dl" className="cine-specs">
            {specs.map((s) => (
              <div className="cine-spec" key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 10 · FAQ */}
      <section className="cine-section surface-sand">
        <div className="container container-narrow">
          <Reveal as="div" className="head-block" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow centered">Frequently asked</span>
            <h2 className="cine-statement" style={{ marginInline: "auto", marginTop: "1rem", maxWidth: "22ch" }}>
              Good to know before the trip.
            </h2>
          </Reveal>
          <div style={{ marginTop: "2.6rem" }}>
            <FaqSection items={yachtFaqs} id={`${siteUrl}/en/the-yacht#faq`} />
          </div>
        </div>
      </section>

      {/* 11 · Close — back to the horizon */}
      <section className="section cta-band">
        <div className="cta-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/sailing-side.jpg`} alt="" />
        </div>
        <div className="container center" style={{ maxWidth: 880 }}>
          <Reveal as="div"><span className="eyebrow on-dark centered">Ready for the Adriatic?</span></Reveal>
          <Reveal as="h2" delay={1} style={{ marginInline: "auto", marginTop: "1.1rem" }}>Your voyage begins in Šibenik.</Reveal>
          <Reveal as="p" delay={2} className="lede" style={{ marginInline: "auto" }}>
            Tell us your preferred dates and crew – we&apos;ll check the Miss Moneypenny&apos;s
            availability and reply within 24 hours with a personal offer.
          </Reveal>
          <Reveal as="div" delay={3} className="hero-actions" style={{ justifyContent: "center" }}>
            <Link href="/kontakt" className="btn btn-primary">Enquire now <ArrowRight /></Link>
            <a href={`mailto:${site.email}`} className="btn btn-ghost">{site.email}</a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
