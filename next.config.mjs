/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Marketing-Bilder werden bereits optimiert ausgeliefert; lokale Optimierung
    // wird deaktiviert, damit der Build ohne sharp-Abhängigkeit überall läuft.
    unoptimized: true,
  },
};

export default nextConfig;
