import type { Metadata } from "next";
import { Fraunces, Mulish } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { author } from "@/lib/site";

const ldOrganization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://chartern-in-kroatien.de/#organization",
      "name": "Bond Yachting",
      "url": "https://chartern-in-kroatien.de",
      "email": "anfrage@chartern-in-kroatien.de",
      "telephone": "+4917681125761",
      "description": "Autarker Katamaran-Charter ab Šibenik – Lagoon 400 S2 Miss Moneypenny mit Wassermacher und Solaranlage für tagelange Freiheit in den Kornaten.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Marina Mandalina",
        "addressLocality": "Šibenik",
        "addressCountry": "HR",
      },
      "logo": {
        "@type": "ImageObject",
        "url": "https://chartern-in-kroatien.de/images/logo-dark.png",
      },
      "founder": { "@id": author.id },
      "knowsAbout": [
        "Katamaran-Charter in Kroatien",
        "Yachtcharter ab Šibenik",
        "Segeln in den Kornaten",
        "Winde der Adria (Maestral, Bora, Jugo)",
        "Törnplanung und Routen in Dalmatien",
        "Autarkes Segeln mit Wassermacher und Solaranlage",
      ],
    },
    {
      "@type": "Person",
      "@id": author.id,
      "name": author.name,
      "jobTitle": author.jobTitle,
      "description": author.bio,
      "url": author.url,
      "mainEntityOfPage": author.url,
      "image": `https://chartern-in-kroatien.de${author.image}`,
      "sameAs": author.sameAs,
      "worksFor": { "@id": "https://chartern-in-kroatien.de/#organization" },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": author.credentialName,
      },
      "knowsAbout": [
        "Segeln in Kroatien",
        "Katamaran-Törns in den Kornaten",
        "Winde der Adria",
        "Törnplanung ab Šibenik",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://chartern-in-kroatien.de/#website",
      "name": "Miss Moneypenny – Bond Yachting",
      "url": "https://chartern-in-kroatien.de",
      "publisher": { "@id": "https://chartern-in-kroatien.de/#organization" },
    },
  ],
};

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chartern-in-kroatien.de"),
  title: {
    default: "Katamaran mieten ab Šibenik | Miss Moneypenny (Lagoon 400)",
    template: "%s | Miss Moneypenny – Bond Yachting",
  },
  description:
    "Autarker Segelkatamaran ab Šibenik: Lagoon 400 S2 mit Wassermacher & Solaranlage. Tagelang frei vor Anker in den Kornaten. Jetzt Verfügbarkeit anfragen.",
  keywords: [
    "Katamaran mieten Kroatien",
    "Katamaran mieten Šibenik",
    "Lagoon 400 S2 mieten",
    "autarker Katamaran",
    "Segeltörn Kornaten",
    "Yachtcharter Šibenik",
    "Miss Moneypenny",
    "Bond Yachting",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Miss Moneypenny – Bond Yachting",
    title: "Katamaran mieten ab Šibenik | Miss Moneypenny (Lagoon 400)",
    description:
      "Autarker Segelkatamaran ab Šibenik: Lagoon 400 S2 mit Wassermacher & Solaranlage. Tagelang frei vor Anker in den Kornaten.",
    images: [{ url: "/images/yacht-hero-anchored.jpg", width: 1200, height: 630, alt: "Katamaran Miss Moneypenny vor Anker in den kroatischen Kornaten" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katamaran mieten ab Šibenik | Miss Moneypenny",
    description: "Lagoon 400 S2 mit Wassermacher & Solaranlage – tagelang frei vor Anker in den Kornaten.",
    images: ["/images/yacht-hero-anchored.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${mulish.variable}`}>
      <body>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D5PXZXJWTC"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D5PXZXJWTC');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldOrganization) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
