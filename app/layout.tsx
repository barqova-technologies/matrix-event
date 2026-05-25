import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, Space_Grotesk } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { SITE } from "@/lib/constants";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Resolve the live host so the OG image URL is always reachable:
// explicit env -> Vercel prod domain -> Vercel deploy URL -> canonical fallback.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : SITE.canonical);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.craftedBy.name, url: SITE.craftedBy.href }],
  creator: SITE.craftedBy.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  category: "Event Management",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    url: "/",
    locale: SITE.locale,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} · ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  // Favicon / app icons are provided by the app/ file convention
  // (app/icon.png, app/apple-icon.png, app/favicon.ico) — auto-linked by Next.
};

export const viewport: Viewport = {
  themeColor: "#0A0F0D",
  width: "device-width",
  initialScale: 1,
};

/** Organization + WebSite structured data for search engines. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.canonical}/#organization`,
      name: SITE.name,
      alternateName: ["Matrix Events", "Matrix Events & Marketing"],
      url: SITE.canonical,
      email: SITE.email,
      telephone: SITE.phone,
      slogan: SITE.tagline,
      description: SITE.description,
      logo: `${SITE.canonical}${SITE.icon}`,
      parentOrganization: { "@type": "Organization", name: "Infinity Ventures" },
      foundingDate: "2023",
      areaServed: "IN",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3rd & 4th Floor, 1/42, Vijayant Khand, Gomti Nagar",
        addressLocality: "Lucknow",
        postalCode: "226010",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      sameAs: [SITE.instagramHref, SITE.linkedinHref, SITE.craftedBy.href],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.canonical}/#website`,
      url: SITE.canonical,
      name: SITE.name,
      description: SITE.description,
      publisher: { "@id": `${SITE.canonical}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        {/* Structured data for search engines. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
