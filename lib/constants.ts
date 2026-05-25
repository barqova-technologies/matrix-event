export const SITE = {
  name: "Matrix Events & Marketing",
  parent: "A Unit of Infinity Ventures",
  url: "www.matrixevent.in", // display string (no protocol)
  // Canonical origin used by metadata, sitemap, robots, JSON-LD.
  canonical: "https://www.matrixevent.in",
  ogImage: "/og.png",
  icon: "/logo-mark.png",
  locale: "en_US",
  tagline: "We Make Events Happen.",
  // SEO title (50–60 chars) + description (110–160 chars).
  title: "Matrix Events & Marketing | We Make Events Happen",
  description:
    "Lucknow-based event management and marketing company. 100+ events, trusted by India's top brands. A unit of Infinity Ventures.",
  craftedBy: { name: "Barqova Technologies", href: "https://barqova.com" },
  keywords: [
    "Matrix Events",
    "Matrix Events & Marketing",
    "event management Lucknow",
    "marketing agency Lucknow",
    "expo management",
    "brand activations",
    "wedding production",
    "event production Lucknow",
    "on ground activations",
    "Gomti Nagar events",
    "Infinity Ventures",
  ],
  phone: "+91 880 883 6000",
  phoneHref: "tel:+918808836000",
  email: "hello@matrixevent.in",
  emailHref: "mailto:hello@matrixevent.in",
  instagram: "@matrixevent.in",
  instagramHref: "https://instagram.com/matrixevent.in",
  linkedinHref: "https://www.linkedin.com/company/matrixevent",
  bookingHref: "mailto:hello@matrixevent.in?subject=Book%20a%20Meeting",
  address:
    "3rd & 4th Floor, 1/42, Vijayant Khand, Gomti Nagar, Lucknow – 226010",
} as const;

// Absolute hrefs ("/#...") so the nav works from any route (e.g. /ecosystem),
// not just the home page.
export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Clients", href: "/#clients" },
  { label: "Team", href: "/#team" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Contact", href: "/#contact" },
];

/**
 * Ecosystem — the family of brands Matrix Events belongs to.
 * NOTE: sibling-brand blurbs are placeholders — adjust to real positioning.
 */
export const ECOSYSTEM = {
  parent: "Infinity Ventures",
  intro:
    "Matrix Events & Marketing is a unit of Infinity Ventures, a small ecosystem of independent brands that share craft, standards, and people.",
  brands: [
    {
      name: "Barqova",
      domain: "barqova.com",
      url: "https://barqova.com",
      blurb: "The creative studio and engineering craft behind the ecosystem.",
      current: false,
    },
    {
      name: "Barq Media",
      domain: "barqmedia.in",
      url: "https://barqmedia.in",
      blurb: "Content systems, cinematic reels, and brand strategy.",
      current: false,
    },
    {
      name: "Matrix Events",
      domain: "matrixevent.in",
      url: "https://www.matrixevent.in",
      blurb: "Events, experiences, and on-ground production.",
      current: true,
    },
    {
      name: "Inkqova",
      domain: "inkqova.in",
      url: "https://inkqova.in",
      blurb: "Writing, editorial, and brand storytelling in print.",
      current: false,
    },
  ],
  note: "Barqova Technologies is registered separately but operates within the same ecosystem.",
} as const;

export const STATS = [
  { value: 100, suffix: "+", label: "Events" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Brand Partners" },
  { value: 2, suffix: "", label: "Core Verticals" },
];

export const SERVICES = [
  {
    title: "Event Management",
    tag: "01 / Production",
    rotate: -3,
    items: [
      "Event & Expo Management",
      "Wedding Production & Hospitality",
      "Food Court Management & Setup",
      "Manpower (Supervisors, Hostess, Volunteers)",
      "Security Services (Bouncers)",
      "Housekeeping Manpower",
      "Event Production Setup",
      "Event Accessories (Walkie Talkie, AV, Furniture)",
      "Expo Stall Management",
      "Vendor Curation & Management",
      "Delegation Support Staff",
    ],
  },
  {
    title: "Marketing Services",
    tag: "02 / Growth",
    rotate: 2,
    items: [
      "Marketing Campaign Planning & Curation",
      "On Ground Activations (Canopies, Desks)",
      "Entertainment Promotional Event Planning",
      "Social Media Setup & Management (IG, FB, LinkedIn)",
      "New Store & Product Launches",
      "Influencer Marketing",
      "Promotional Events Curation & Management",
      "Brand Partnerships & Sponsor Tie-ups",
      "Community & Loyalty Program Design",
      "Sampling & Visibility Campaigns",
    ],
  },
] as const;

// Client logos: text-based SVGs generated locally in /public/clients
export const CLIENTS = [
  { name: "Decathlon", file: "decathlon", color: "#0082C3" },
  { name: "FICCI FLO", file: "ficci-flo", color: "#C8102E" },
  { name: "Hindustan Times", file: "ht", color: "#1A1A1A" },
  { name: "FirstView Pvt. Ltd.", file: "firstview", color: "#0D5C63" },
  { name: "Asian Paints", file: "asian-paints", color: "#E4002B" },
  { name: "Union Bank of India", file: "union-bank", color: "#A5152A" },
  { name: "State Bank of India", file: "sbi", color: "#22409A" },
  { name: "Adani", file: "adani", color: "#005EB8" },
  { name: "Dainik Jagran", file: "dainik-jagran", color: "#D32027" },
  { name: "Boho Fest", file: "boho-fest", color: "#E07A5F" },
  { name: "Spoken Fest", file: "spoken-fest", color: "#6D28D9" },
  { name: "Oriole Entertainment", file: "oriole", color: "#F2A900" },
  { name: "Kaamakazi Pvt. Ltd.", file: "kaamakazi", color: "#111111" },
  { name: "Repertwhar Festival", file: "repertwhar", color: "#0F766E" },
];

export const TEAM = [
  {
    name: "Sahil Muhib",
    role: "Founder & Marketing Lead",
    image: "/team/sahil.jpg",
    rotate: -4,
    gradient: "from-emerald-500/20 to-teal-700/10",
  },
  {
    name: "Sultan Khan",
    role: "Co-founder & Operations Lead",
    image: "/team/sultan.jpg",
    rotate: 3,
    gradient: "from-cyan-500/20 to-emerald-700/10",
  },
  {
    name: "Abhinav Tripathi",
    role: "Finance Lead",
    image: "/team/abhinav.jpg",
    rotate: -2,
    gradient: "from-teal-500/20 to-green-700/10",
  },
  {
    name: "Pratham Nigam",
    role: "Social Media Lead",
    image: "/team/pratham.jpg",
    rotate: 4,
    gradient: "from-lime-500/15 to-emerald-700/10",
  },
];

export const MISSION =
  "To become a trusted and innovative leader in event management and manpower solutions — delivering exceptional experiences that elevate brands and create lasting impressions.";

export const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80";

// Event gallery — Unsplash placeholders (swap with real shoot photos)
const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const GALLERY = [
  { src: U("1501281668745-f7f57925c3b4"), caption: "Live Concert", rotate: -3 },
  { src: U("1540575467063-178a50c2df87"), caption: "Corporate Expo", rotate: 2 },
  { src: U("1511795409834-ef04bbd61622"), caption: "Brand Activation", rotate: -2 },
  { src: U("1530103862676-de8c9debad1d"), caption: "Festival Stage", rotate: 3 },
  { src: U("1505236858219-8359eb29e329"), caption: "Product Launch", rotate: -3 },
  { src: U("1519225421980-715cb0215aed"), caption: "Wedding Production", rotate: 2 },
];

// Lucknow / Gomti Nagar maps embed + open link
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Vijayant+Khand,+Gomti+Nagar,+Lucknow&output=embed";
export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Vijayant+Khand+Gomti+Nagar+Lucknow";
