"use client";

import { ECOSYSTEM } from "@/lib/constants";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Up-right arrow shown on outbound brand cards. */
function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

/** /ecosystem body — the family of brands Matrix Events belongs to. */
export default function Ecosystem() {
  return (
    <section aria-label="Ecosystem" className="grain relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="01"
          label="Ecosystem"
          align="left"
          title={
            <>
              A unit of{" "}
              <span className="text-green-accent">{ECOSYSTEM.parent}.</span>
            </>
          }
        />

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {ECOSYSTEM.intro}
          </p>
        </Reveal>

        {/* Brand cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ECOSYSTEM.brands.map((brand, i) => {
            const CardTag = brand.current ? "div" : "a";
            const linkProps = brand.current
              ? {}
              : {
                  href: brand.url,
                  target: "_blank" as const,
                  rel: "noopener noreferrer",
                };
            return (
              <Reveal key={brand.domain} delay={0.05 * i}>
                <CardTag
                  {...linkProps}
                  className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-200 hover:border-green-accent hover:shadow-glow md:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-[var(--text)]">
                      {brand.name}
                    </h3>
                    {brand.current ? (
                      <span className="rounded-full border border-green-accent/40 bg-green-accent/10 px-2.5 py-1 font-label text-[11px] uppercase tracking-wide text-green-accent">
                        You are here
                      </span>
                    ) : (
                      <ArrowUpRight className="shrink-0 text-muted transition-colors duration-200 group-hover:text-green-accent" />
                    )}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {brand.blurb}
                  </p>
                  <span className="mt-4 font-label text-[13px] text-green-accent">
                    {brand.domain}
                  </span>
                </CardTag>
              </Reveal>
            );
          })}
        </div>

        {/* Separate-registration note */}
        <Reveal delay={0.1}>
          <p className="mt-12 flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-sm leading-relaxed text-muted">
            <span
              aria-hidden
              className="mt-0.5 font-display text-lg leading-none text-green-accent"
            >
              ∞
            </span>
            {ECOSYSTEM.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
