"use client";

import { MAPS_EMBED, MAPS_LINK, SITE } from "@/lib/constants";
import PinCard from "./PinCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const DETAILS = [
  { icon: "📞", label: SITE.phone, href: SITE.phoneHref },
  { icon: "✉️", label: SITE.email, href: SITE.emailHref },
  { icon: "📸", label: SITE.instagram, href: SITE.instagramHref },
  { icon: "📍", label: SITE.address, href: undefined },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-[var(--border)] bg-[var(--surface)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="06"
          label="Let's Build Something"
          title="Get In Touch"
        />

        <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-2">
          {/* contact card */}
          <Reveal>
            <PinCard rotate={-2} className="h-full p-7 sm:p-9">
              <h3 className="font-display text-2xl font-extrabold">
                Matrix Events &amp; Marketing
              </h3>
              <p className="mt-1 font-label text-xs uppercase tracking-wide text-muted">
                {SITE.parent}
              </p>
              <ul className="mt-7 space-y-5">
                {DETAILS.map((d) => (
                  <li key={d.label} className="flex items-start gap-4">
                    <span className="text-xl">{d.icon}</span>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-[var(--text)] transition-colors hover:text-green-accent"
                      >
                        {d.label}
                      </a>
                    ) : (
                      <span className="text-[var(--text)]">{d.label}</span>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href={SITE.bookingHref}
                className="mt-9 block w-full animate-glow-pulse rounded-full bg-green-primary px-8 py-4 text-center font-label text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-green-accent"
              >
                Click to Book a Meeting
              </a>
            </PinCard>
          </Reveal>

          {/* map poster card */}
          <Reveal delay={0.1}>
            <div className="group relative h-full min-h-[420px] rotate-[1.5deg] transition-transform duration-500 hover:rotate-0">
              {/* gradient frame */}
              <div className="absolute -inset-[3px] rounded-[1.9rem] bg-gradient-to-br from-green-accent via-sage to-green-primary opacity-90" />
              <div className="relative h-full overflow-hidden rounded-[1.75rem] bg-[var(--surface)] shadow-soft">
                <iframe
                  title="Matrix Events location"
                  src={MAPS_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[420px] w-full saturate-[0.92] contrast-[1.03] dark:grayscale-[0.35] dark:invert-[0.92] dark:hue-rotate-180"
                  style={{ border: 0 }}
                  allowFullScreen
                />

                {/* warm tint */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-primary/25 via-transparent to-green-primary/10 mix-blend-multiply dark:from-dark-bg/40 dark:to-dark-bg/10" />

                {/* top chip */}
                <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/85 px-3.5 py-2 shadow-soft backdrop-blur-md">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-accent">
                    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <span className="font-label text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--text)]">
                    Find Us · Gomti Nagar
                  </span>
                </div>

                {/* floating pin marker */}
                <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="relative grid place-items-center">
                    <span className="absolute h-12 w-12 animate-ping rounded-full bg-green-accent/30" />
                    <span className="relative grid h-9 w-9 place-items-center rounded-full bg-green-primary text-white shadow-glow ring-4 ring-[var(--surface)]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                      </svg>
                    </span>
                  </span>
                </span>

                {/* bottom poster bar */}
                <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)]/88 px-4 py-3 shadow-soft backdrop-blur-md">
                  <div className="min-w-0">
                    <p className="font-label text-[10px] uppercase tracking-[0.2em] text-green-accent">
                      Matrix HQ
                    </p>
                    <p className="truncate text-sm text-[var(--text)]">
                      Vijayant Khand, Gomti Nagar, Lucknow
                    </p>
                  </div>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="pointer-events-auto shrink-0 rounded-full bg-green-primary px-4 py-2 font-label text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-green-accent"
                  >
                    Open ↗
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
