import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></svg>
);

export const Compass = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8z" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
  </svg>
);

export const Anchor = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="5" r="2.2" />
    <path d="M12 7.2V21" />
    <path d="M5 12H3a9 9 0 0 0 18 0h-2" />
    <path d="M8.5 10.5 5 12M15.5 10.5 19 12" />
  </svg>
);

export const Droplet = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 2.6C12 2.6 5.5 9 5.5 14a6.5 6.5 0 0 0 13 0c0-5-6.5-11.4-6.5-11.4Z" />
    <path d="M9 14a3 3 0 0 0 3 3" />
  </svg>
);

export const Sun = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8" />
  </svg>
);

export const Bed = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 18V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10" />
    <path d="M3 14h18" />
    <path d="M7 10h4" />
    <path d="M3 18v2M21 18v2" />
  </svg>
);

export const Wheel = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2.4" />
    <path d="M12 2.6v6.9M12 14.5v6.9M2.6 12h6.9M14.5 12h6.9" />
  </svg>
);

export const Wind = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 8h10a2.5 2.5 0 1 0-2.5-2.5" />
    <path d="M3 12h14a2.5 2.5 0 1 1-2.5 2.5" />
    <path d="M3 16h8a2.2 2.2 0 1 1-2.2 2.2" />
  </svg>
);

export const Wifi = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2.5 9a14 14 0 0 1 19 0" />
    <path d="M5.5 12.5a9.5 9.5 0 0 1 13 0" />
    <path d="M8.5 16a5 5 0 0 1 7 0" />
    <circle cx="12" cy="19" r="0.6" fill="currentColor" />
  </svg>
);

export const Leaf = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 20c0-9 6-15 16-15 0 10-6 15-16 15Z" />
    <path d="M4 20c4-6 8-9 12-10.5" />
  </svg>
);

export const Snorkel = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 6v8a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4" />
    <path d="M5 6h3v3H5z" />
    <path d="M19 4v9a3 3 0 0 1-3 3" />
  </svg>
);

export const Waves = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2 8c2 0 2-1.6 4-1.6S8 8 10 8s2-1.6 4-1.6S16 8 18 8s2-1.6 4-1.6" />
    <path d="M2 13c2 0 2-1.6 4-1.6S8 13 10 13s2-1.6 4-1.6S16 13 18 13s2-1.6 4-1.6" />
    <path d="M2 18c2 0 2-1.6 4-1.6S8 18 10 18s2-1.6 4-1.6S16 18 18 18s2-1.6 4-1.6" />
  </svg>
);

export const Ship = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 16.5 4.2 13a1 1 0 0 1 .95-.68h13.7a1 1 0 0 1 .95.68L21 16.5" />
    <path d="M2 18c1.2 1.3 2.6 1.3 3.8 0 1.2 1.3 2.6 1.3 3.8 0 1.2 1.3 2.6 1.3 3.8 0 1.2 1.3 2.6 1.3 3.8 0" />
    <path d="M6 12.3V7h12v5.3" />
    <path d="M12 7V3.5" />
  </svg>
);

export const MapPin = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Sparkle = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3c.4 4.5 1.5 5.6 6 6-4.5.4-5.6 1.5-6 6-.4-4.5-1.5-5.6-6-6 4.5-.4 5.6-1.5 6-6Z" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base} {...p}><path d="m4 12.5 5 5L20 6.5" /></svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6.5 3.5 9 4l1 4-2 1.4a12 12 0 0 0 6.6 6.6L16 14l4 1 .5 2.5a2 2 0 0 1-2 2.4A16 16 0 0 1 4.1 5.5a2 2 0 0 1 2.4-2Z" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  </svg>
);

export const Calendar = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="16" rx="1.5" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
  </svg>
);

export const Users = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.5a3 3 0 0 1 0 5M17 14.2a5.5 5.5 0 0 1 3.5 4.8" />
  </svg>
);

export const Ruler = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="8" width="19" height="8" rx="1" transform="rotate(0 12 12)" />
    <path d="M6 8v3M9.5 8v4M13 8v3M16.5 8v4M20 8v3" />
  </svg>
);

export const Shower = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 12V7a3 3 0 0 1 6 0" />
    <path d="M2 12h12" />
    <path d="M5 16v.5M8 15v1M11 16v.5M6.5 19v.5M9.5 18v1" />
    <path d="M17 4l4 4" />
  </svg>
);

export const Shield = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 5.5V11c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V5.5Z" />
    <path d="m9 11.5 2 2 4-4" />
  </svg>
);

export const Sailboat = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M11 3 4 14h7z" />
    <path d="M13 6.5 18 14h-5" />
    <path d="M3 17c1.3 1.4 2.7 1.4 4 0 1.3 1.4 2.7 1.4 4 0 1.3 1.4 2.7 1.4 4 0 1.3 1.4 2.7 1.4 4 0" />
    <path d="M11 3v11" />
  </svg>
);

export const iconMap = {
  arrow: ArrowRight,
  compass: Compass,
  anchor: Anchor,
  droplet: Droplet,
  sun: Sun,
  bed: Bed,
  wheel: Wheel,
  wind: Wind,
  wifi: Wifi,
  leaf: Leaf,
  snorkel: Snorkel,
  waves: Waves,
  ship: Ship,
  pin: MapPin,
  sparkle: Sparkle,
  check: Check,
  phone: Phone,
  mail: Mail,
  calendar: Calendar,
  users: Users,
  ruler: Ruler,
  shower: Shower,
  shield: Shield,
  sailboat: Sailboat,
};

export type IconName = keyof typeof iconMap;

export const Icon = ({ name, ...p }: { name: IconName } & IconProps) => {
  const Cmp = iconMap[name];
  return <Cmp {...p} />;
};
