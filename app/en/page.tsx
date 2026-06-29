import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Brandmark from "@/components/Brandmark";
import { Icon, ArrowRight, Check, Droplet, Sun, type IconName } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Catamaran charter from Šibenik | Miss Moneypenny (Lagoon 400)" },
  description:
    "Self-sufficient sailing catamaran from Šibenik: Lagoon 400 S2 with watermaker & solar power. Days at anchor in the Kornati islands. Request availability now.",
  alternates: {
    canonical: "/en",
    languages: { "de-DE": "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    title: "Catamaran charter from Šibenik | Miss Moneypenny (Lagoon 400)",
    description: "Self-sufficient sailing catamaran from Šibenik: Lagoon 400 S2 with watermaker & solar power. Days at anchor in the Kornati islands.",
    locale: "en_GB",
    images: [{ url: "/images/yacht-hero-anchored.jpg", width: 1200, height: 630, alt: "Catamaran Miss Moneypenny at anchor in a turquoise Adriatic bay" }],
  },
};

const heroStats = [
  { k: "12 m", l: "Length overall" },
  { k: "4 + 2", l: "Cabins" },
  { k: "8", l: "Guests" },
  { k: "100%", l: "energy-independent" },
];

const advantages: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "droplet",
    title: "Watermaker on board",
    text: "The reverse-osmosis system turns seawater into fresh water. Long showers and full tanks – without ever stopping at a marina to refill.",
  },
  {
    icon: "sun",
    title: "Solar power & energy independence",
    text: "Powerful solar panels charge the batteries silently. Fridge, lights and navigation keep running without firing up a generator.",
  },
  {
    icon: "anchor",
    title: "Stay at anchor, freely",
    text: "Water and power on board mean real independence: days in secluded bays instead of hunting for an expensive marina every evening.",
  },
  {
    icon: "waves",
    title: "Stable & comfortable",
    text: "A catamaran sits calmly on the water – barely any heeling, far less seasickness. Comfort that wins over beginners and families alike.",
  },
  {
    icon: "bed",
    title: "Room for eight guests",
    text: "Four private double cabins plus two bow cabins, each double with its own bathroom – and a light-filled saloon on one level with the galley.",
  },
  {
    icon: "leaf",
    title: "Top condition & well-kept",
    text: "Full cockpit enclosure, teak deck, diesel heater. The Miss Moneypenny is professionally maintained and ready to cast off.",
  },
];

const regions = [
  {
    kicker: "Home port",
    title: "Šibenik region",
    text: "Sheltered waters, the UNESCO cathedral and the Krka waterfalls – the perfect start.",
    href: "/revier-sibenik",
    image: "/images/region-sibenik.png",
    imageAlt: "Panorama of Šibenik with cathedral and harbour – starting point of the catamaran trip",
  },
  {
    kicker: "National park",
    title: "Sailing the Kornati",
    text: "89 islands, steep cliffs, crystal-clear water and bays all to yourself.",
    href: "/segeln-in-den-kornaten",
    image: "/images/region-kornati-aerial.png",
    imageAlt: "Aerial view of the Kornati – 89 islands in a Croatian national park",
  },
  {
    kicker: "Ashore",
    title: "Towns of Dalmatia",
    text: "From Trogir via Split and Hvar to Korčula – living history right on the water.",
    href: "/staedte-dalmatiens",
    image: "/images/city-hvar.png",
    imageAlt: "Harbour town of Hvar seen from the fortress – discovering Dalmatia by catamaran",
  },
];

const included = [
  "Bed linen & towels",
  "Final cleaning",
  "Gas & tourist tax",
  "Dinghy outboard motor",
  "Transit log & home-port fee",
  "Wi-Fi on board",
  "Snorkelling gear",
  "24/7 emergency support",
];

const testimonials = [
  {
    quote:
      "Powered catamarans used to be the benchmark for me. Today I care about the environment – and I love gliding across the sea quietly, without any fumes.",
    name: "Heiko",
    role: "Switched from a power catamaran",
    initial: "H",
  },
  {
    quote:
      "I'm useless at the anchoring manoeuvre – so on board I take over dish duty. And that's exactly where the huge galley completely won me over.",
    name: "Axel",
    role: "Crew & dish duty",
    initial: "A",
  },
  {
    quote:
      "What truly amazed me about the Miss Moneypenny: we could drift from bay to bay for days without ever charging the batteries or taking on water.",
    name: "Thomas",
    role: "Days of self-sufficiency",
    initial: "T",
  },
  {
    quote:
      "It was the spacious cabins with all their storage that won me over – and the en-suite bathroom right off the cabin that I share with no one but my husband.",
    name: "Carmen",
    role: "Comfort & privacy",
    initial: "C",
  },
];

const ldService = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://chartern-in-kroatien.de/en#charter-service",
  "name": "Miss Moneypenny catamaran charter",
  "description": "Self-sufficient catamaran charter from Šibenik, Croatia: Lagoon 400 S2 with watermaker and solar power for 2–8 people. Bareboat or skippered.",
  "brand": { "@type": "Brand", "name": "Bond Yachting" },
  "inLanguage": "en",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "2500",
    "highPrice": "5200",
    "offerCount": "1",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "seller": { "@id": "https://chartern-in-kroatien.de/#organization" },
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "4",
    "bestRating": "5",
    "worstRating": "1",
  },
};

export default function HomePageEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldService) }}
      />
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/yacht-hero-anchored.jpg" alt="Catamaran Miss Moneypenny at anchor in a turquoise bay of the Croatian Adriatic" />
        </div>

        <div className="container hero-inner">
          <Reveal as="div">
            <span className="eyebrow on-dark">{site.yacht} · Šibenik, Croatia</span>
          </Reveal>
          <Reveal as="h1" delay={1} className="display">
            A self-sufficient sailing <em>adventure</em> on the Adriatic
          </Reveal>
          <Reveal as="p" delay={2} className="lede">
            Your home on the water: the Lagoon 400 S2 “Miss Moneypenny” – with watermaker
            and solar power for days of freedom far from crowded marinas.
          </Reveal>
          <Reveal as="div" delay={3} className="hero-actions">
            <Link href="/kontakt" className="btn btn-primary">Check availability <ArrowRight /></Link>
            <Link href="/en/the-yacht" className="btn btn-ghost">Discover the yacht</Link>
          </Reveal>

          <Reveal as="div" delay={4} className="hero-meta">
            {heroStats.map((s) => (
              <div key={s.l}>
                <div className="k">{s.k}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>

        <span className="scroll-cue">Scroll</span>
      </section>

      {/* ============ INTRO / split ============ */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <div>
              <Reveal as="div"><span className="eyebrow">Your home on the Adriatic</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">
                Boundless freedom,<br />entirely on your course.
              </Reveal>
              <Reveal as="div" delay={2} className="prose" style={{ marginTop: "1.6rem" }}>
                <p>
                  Picture this: you're anchored in a lonely Kornati bay, the sun silently
                  charges your batteries, the watermaker fills the tanks – and you simply stay.
                  No hunting for a harbour, no refuelling, no compromise.
                </p>
                <p>
                  The Miss Moneypenny is a Lagoon 400 S2 in top condition – a stable, generous
                  catamaran that combines comfort with genuine independence, for families,
                  friends and anyone who wants to experience the Mediterranean their own way.
                </p>
              </Reveal>
              <Reveal as="div" delay={3} style={{ marginTop: "2rem" }}>
                <Link href="/en/the-yacht" className="link-arrow">More about the yacht <ArrowRight /></Link>
              </Reveal>
            </div>

            <Reveal as="div" delay={2}>
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-salon.jpg" alt="Bright saloon of the Lagoon 400 S2 with galley and panoramic view" />
                <div className="float-card">
                  <div className="k">2016</div>
                  <div className="l">Year built · well-kept & ready</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ ADVANTAGES ============ */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow">Why Miss Moneypenny</span>
            <h2 className="section-title">Six advantages that make the difference.</h2>
            <p className="lede">
              Every detail on board serves one goal – more time on the water, more comfort,
              more independence.
            </p>
          </Reveal>

          <div className="grid-3" style={{ marginTop: "3.5rem" }}>
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="feature">
                  <span className="ic"><Icon name={a.icon} /></span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SELF-SUFFICIENCY HIGHLIGHT ============ */}
      <section className="section surface-navy relative">
        <div className="compass-bg" style={{ inset: "auto -120px -160px auto", width: 520, height: 520, color: "#fff" }}>
          <Brandmark style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="container relative">
          <div className="split">
            <Reveal as="div">
              <div className="media-frame wide frame-left">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-aerial-topdown.jpg" alt="Aerial view of the Miss Moneypenny over crystal-clear water" />
              </div>
            </Reveal>

            <div>
              <Reveal as="div"><span className="eyebrow on-dark">Energy & water self-sufficient</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">
                The freedom to simply&nbsp;stay.
              </Reveal>
              <Reveal as="p" delay={2} className="lede">
                Two systems make all the difference – turning every trip into true autonomy.
              </Reveal>

              <div style={{ marginTop: "2rem" }}>
                <Reveal as="div" delay={2}>
                  <div className="feature-min" style={{ borderTop: "none" }}>
                    <Droplet className="ic" />
                    <div>
                      <h3>Watermaker</h3>
                      <p>The reverse-osmosis unit draws fresh water straight from the sea.
                        Showers without rationing, full tanks without a harbour stop.</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal as="div" delay={3}>
                  <div className="feature-min">
                    <Sun className="ic" />
                    <div>
                      <h3>Solar power</h3>
                      <p>Powerful panels charge your batteries silently – fridge, lights and
                        navigation run independently, with no generator noise.</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal as="div" delay={4} style={{ marginTop: "2.2rem" }}>
                <Link href="/charter-infos" className="link-arrow on-dark">How chartering works <ArrowRight /></Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ YACHT TEASER ============ */}
      <section className="section">
        <div className="container">
          <div className="head-flex">
            <Reveal as="div" className="head-block">
              <span className="eyebrow">On board the Lagoon 400 S2</span>
              <h2 className="section-title">Comfort on every square metre.</h2>
            </Reveal>
            <Reveal as="div" delay={1}>
              <Link href="/en/the-yacht" className="link-arrow">All impressions & specs <ArrowRight /></Link>
            </Reveal>
          </div>

          <div className="grid-4" style={{ marginTop: "3rem" }}>
            {[
              { src: "/images/yacht-cabin.jpg", alt: "Bright double cabin on board" },
              { src: "/images/yacht-galley.jpg", alt: "Fully equipped galley with sea view" },
              { src: "/images/yacht-cockpit-dining.jpg", alt: "Cockpit with the breakfast table laid" },
              { src: "/images/yacht-helm.jpg", alt: "Helm station with chart plotter and a view of a village" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link href="/en/the-yacht" className="region-card" style={{ minHeight: 320 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REGIONS ============ */}
      <section className="section surface-dark">
        <div className="container">
          <Reveal as="div" className="head-block">
            <span className="eyebrow on-dark">Regions & routes</span>
            <h2 className="section-title">From Šibenik to the finest corners of the Adriatic.</h2>
            <p className="lede">
              Sheltered waters, a national park full of secluded bays and storybook towns –
              all within reach in a single week.
            </p>
          </Reveal>

          <div className="grid-3" style={{ marginTop: "3.5rem" }}>
            {regions.map((r, i) => (
              <Reveal key={r.href} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <Link href={r.href} className="region-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.image} alt={r.imageAlt} />
                  <div className="rc-body">
                    <span className="rc-kicker">{r.kicker}</span>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                    <span className="rc-more">Explore <ArrowRight /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" delay={1} className="prose" style={{ marginTop: "2rem", fontSize: "0.85rem", opacity: 0.75 }}>
            Note: the detailed region guides are currently available in German.
          </Reveal>
        </div>
      </section>

      {/* ============ INCLUDED ============ */}
      <section className="section">
        <div className="container">
          <div className="split align-start">
            <Reveal as="div">
              <div className="media-frame tall">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/yacht-swim-platform.jpg" alt="Teak swim platform with snorkelling gear above turquoise water" />
              </div>
            </Reveal>
            <div>
              <Reveal as="div"><span className="eyebrow">Carefree on board</span></Reveal>
              <Reveal as="h2" delay={1} className="section-title">Everything that makes the trip easy is already on board.</Reveal>
              <Reveal as="p" delay={2} className="lede" style={{ marginBottom: "1.5rem" }}>
                The essentials are already included in the charter – you just pack your swimwear.
              </Reveal>
              <Reveal as="ul" delay={2} className="checklist">
                {included.map((item) => (
                  <li key={item}><Check /> {item}</li>
                ))}
              </Reveal>
              <Reveal as="div" delay={3} style={{ marginTop: "2.2rem" }}>
                <Link href="/charter-infos" className="link-arrow">Charter info & prices <ArrowRight /></Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section surface-sand">
        <div className="container">
          <Reveal as="div" className="head-block center mx-auto">
            <span className="eyebrow centered">Voices from on board</span>
            <h2 className="section-title">What guests experience aboard.</h2>
          </Reveal>
          <div className="testimonials" style={{ marginTop: "3.5rem" }}>
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={((i % 2) + 1) as 1 | 2}>
                <figure className="testimonial">
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <span className="avatar">{t.initial}</span>
                    <span>
                      <span className="who-name">{t.name}</span>
                      <span className="who-role">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready for the Adriatic?"
        title="Secure your weeks aboard the Miss Moneypenny."
        text="Tell us your preferred dates – we'll check availability and get back to you within 24 hours with a personal offer."
      />
    </>
  );
}
