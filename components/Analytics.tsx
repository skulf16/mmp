import Script from "next/script";
import { analytics, tagLoaderOrigin, CONSENT_STORAGE_KEY } from "@/lib/analytics";

/**
 * Lädt Tracking DSGVO-konform via Google Consent Mode v2.
 *
 * - Der Consent-Default-Block läuft `beforeInteractive`, also VOR GTM/gtag,
 *   und setzt alle Einwilligungen auf „denied" (außer technisch notwendige).
 * - Eine zuvor gespeicherte Entscheidung wird sofort wiederhergestellt,
 *   damit wiederkehrende Besucher nicht neu einwilligen müssen.
 * - Erst danach lädt GTM (bevorzugt) bzw. GA4 als Fallback.
 *
 * Wird ganz am Anfang von <body> gerendert (siehe app/layout.tsx).
 */
export default function Analytics() {
  const { gtmId, gaId } = analytics;

  return (
    <>
      {/* 1) Consent Mode v2 – Default „denied", muss vor allen Tags laufen */}
      <Script id="consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted',
            wait_for_update: 500
          });
          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', true);
          try {
            var stored = localStorage.getItem('${CONSENT_STORAGE_KEY}');
            if (stored) {
              var c = JSON.parse(stored);
              gtag('consent', 'update', {
                ad_storage: c.ads ? 'granted' : 'denied',
                ad_user_data: c.ads ? 'granted' : 'denied',
                ad_personalization: c.ads ? 'granted' : 'denied',
                analytics_storage: c.analytics ? 'granted' : 'denied'
              });
            }
          } catch (e) {}
        `}
      </Script>

      {/* 2) Tag-Auslieferung: GTM bevorzugt, sonst GA4 direkt */}
      {gtmId ? (
        <>
          <Script id="gtm-loader" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='${tagLoaderOrigin}/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <iframe
              src={`${tagLoaderOrigin}/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="gtm"
            />
          </noscript>
        </>
      ) : gaId ? (
        <>
          <Script
            id="ga4-src"
            src={`${tagLoaderOrigin}/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.gtag('js', new Date());
              window.gtag('config', '${gaId}');
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
