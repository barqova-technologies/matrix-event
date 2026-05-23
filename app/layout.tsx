import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, Space_Grotesk } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.matrixevent.in"),
  title: "Matrix Events & Marketing | We Make Events Happen",
  description:
    "Lucknow-based event management and marketing company. 100+ events, trusted by India's top brands. A unit of Infinity Ventures.",
  keywords: [
    "event management Lucknow",
    "marketing agency Lucknow",
    "expo management",
    "brand activations",
    "Matrix Events",
  ],
  openGraph: {
    title: "Matrix Events & Marketing",
    description:
      "We make events happen. 100+ events, trusted by India's top brands.",
    url: "https://www.matrixevent.in",
    siteName: "Matrix Events & Marketing",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F0D",
  width: "device-width",
  initialScale: 1,
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
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
