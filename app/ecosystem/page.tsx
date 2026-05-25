import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Ecosystem from "@/components/Ecosystem";
import { ECOSYSTEM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: `Matrix Events & Marketing is a unit of ${ECOSYSTEM.parent}, an ecosystem of independent brands sharing craft, standards, and people.`,
  alternates: { canonical: "/ecosystem" },
  openGraph: {
    title: "Ecosystem · Matrix Events & Marketing",
    description: `Matrix Events & Marketing is a unit of ${ECOSYSTEM.parent}.`,
    url: "/ecosystem",
    type: "website",
  },
};

export default function EcosystemPage() {
  return (
    <>
      <Navbar />
      {/* pt clears the fixed navbar */}
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
          <a
            href="/"
            className="link-underline inline-flex items-center gap-2 font-label text-sm uppercase tracking-wide text-muted transition-colors hover:text-green-accent"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to site
          </a>
        </div>
        <Ecosystem />
      </main>
      <Footer />
    </>
  );
}
