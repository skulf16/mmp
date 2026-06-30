// Service Worker für das Bordbuch (PWA / Offline).
//
// Bewusst zurückhaltend: Marketing-Seiten laufen weiter „network-first" (keine
// veralteten Inhalte). Nur /bordbuch wird für den Offline-Fall vorgehalten, und
// unveränderliche Assets (/_next/static, Icons) werden gecacht.

const VERSION = "missm-sw-v1";
const RUNTIME = `runtime-${VERSION}`;

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== RUNTIME).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // Fremd-Origins (z. B. Analytics) nicht anfassen

  // Seitenaufrufe: erst Netz, offline nur /bordbuch aus dem Cache bedienen.
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const net = await fetch(request);
          if (url.pathname === "/bordbuch") {
            const cache = await caches.open(RUNTIME);
            cache.put("/bordbuch", net.clone());
          }
          return net;
        } catch (err) {
          const cached = await caches.match("/bordbuch");
          if (cached && (url.pathname === "/" || url.pathname.startsWith("/bordbuch"))) return cached;
          throw err;
        }
      })()
    );
    return;
  }

  // Unveränderliche Assets: stale-while-revalidate.
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname === "/manifest.webmanifest"
  ) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(RUNTIME);
        const cached = await cache.match(request);
        const network = fetch(request)
          .then((res) => {
            if (res && res.ok) cache.put(request, res.clone());
            return res;
          })
          .catch(() => cached);
        return cached || network;
      })()
    );
    return;
  }

  // Alles Übrige: Standardverhalten (Netz).
});
