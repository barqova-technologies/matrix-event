"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const word = {
  hidden: { opacity: 0, y: "0.5em" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const TICKER = [
  "Event Production",
  "Brand Activations",
  "Expo Management",
  "Influencer Marketing",
  "Wedding Production",
  "Social Media",
  "Manpower & Security",
  "Product Launches",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-24 lg:pt-16"
    >
      {/* dot grid + aurora washes */}
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[560px] w-[560px] animate-aurora rounded-full bg-green-accent/[0.10] blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[460px] w-[460px] animate-float-slow rounded-full bg-sage/10 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-[300px] w-[300px] animate-aurora rounded-full bg-green-primary/[0.06] blur-[130px] [animation-delay:3s]" />

      <div className="relative z-[2] mx-auto grid w-full max-w-container items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        {/* ---- left: copy ---- */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={word}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-accent" />
            <span className="font-label text-[11px] uppercase tracking-[0.28em] text-[var(--text)]">
              Events · Marketing · Lucknow
            </span>
          </motion.div>

          <h1 className="font-display font-extrabold leading-[0.9] tracking-tight">
            <motion.span
              variants={word}
              className="text-stroke block text-[clamp(2.8rem,9vw,6.8rem)]"
            >
              WE MAKE
            </motion.span>
            <motion.span
              variants={word}
              className="block text-[clamp(2.8rem,9vw,6.8rem)] text-[var(--text)]"
            >
              EVENTS
            </motion.span>
            <motion.span
              variants={word}
              className="block bg-gradient-to-r from-green-primary to-green-accent bg-clip-text text-[clamp(2.8rem,9vw,6.8rem)] text-transparent"
            >
              HAPPEN.
            </motion.span>
          </h1>

          <motion.p
            variants={word}
            className="mt-7 max-w-md text-lg text-muted sm:text-xl"
          >
            100+ events. Trusted by India&apos;s top brands.
          </motion.p>

          <motion.div
            variants={word}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-green-primary px-8 py-4 font-label text-sm font-medium uppercase tracking-wide text-white transition-all hover:bg-green-accent hover:shadow-glow"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              See Our Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href={SITE.bookingHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-green-primary/40 px-8 py-4 font-label text-sm font-medium uppercase tracking-wide text-green-primary transition-all hover:border-green-accent hover:bg-green-accent/10 hover:shadow-glow dark:text-green-accent"
            >
              Book a Meeting
            </a>
          </motion.div>

          <motion.div
            variants={word}
            className="mt-9 flex items-center gap-5 font-label text-xs uppercase tracking-wider text-muted"
          >
            <span><span className="text-green-accent">100+</span> Events</span>
            <span className="h-3 w-px bg-[var(--border)]" />
            <span><span className="text-green-accent">15+</span> Brands</span>
            <span className="h-3 w-px bg-[var(--border)]" />
            <span><span className="text-green-accent">2</span> Verticals</span>
          </motion.div>
        </motion.div>

        {/* ---- right: focal brand orb ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto hidden aspect-square w-full max-w-[440px] md:block"
        >
          {/* rotating conic ring */}
          <div
            className="absolute inset-0 animate-spin-slow rounded-full opacity-70"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, var(--green-accent) 120deg, transparent 200deg)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
            }}
          />
          <div
            className="absolute inset-6 animate-spin-rev rounded-full opacity-50"
            style={{
              background:
                "conic-gradient(from 180deg, transparent 0deg, var(--sage) 90deg, transparent 160deg)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px))",
            }}
          />

          {/* glass core */}
          <div className="absolute inset-10 grid place-items-center rounded-full border border-[var(--border)] bg-gradient-to-br from-green-accent/10 to-sage/5 shadow-glow backdrop-blur-sm">
            <Image
              src="/logo-mark.png"
              alt={SITE.name}
              width={300}
              height={300}
              priority
              className="h-[58%] w-auto animate-float drop-shadow-[0_8px_24px_rgba(62,157,120,0.35)]"
            />
          </div>

          {/* floating chips */}
          <Chip className="left-0 top-6 animate-float" label="100+ Events" />
          <Chip
            className="right-0 top-1/3 animate-float-slow"
            label="Since 2023"
            delay="1.2s"
          />
          <Chip
            className="bottom-8 left-4 animate-float"
            label="Gomti Nagar · Lucknow"
            delay="0.6s"
          />
        </motion.div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-16 left-1/2 z-[2] hidden -translate-x-1/2 text-green-accent sm:flex"
      >
        <span className="flex animate-bounce-subtle flex-col items-center gap-1.5">
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-muted">
            Scroll
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </span>
      </a>

      {/* service ticker */}
      <div className="marquee-pause absolute inset-x-0 bottom-0 z-[2] overflow-hidden border-y border-[var(--border)] bg-[var(--surface)]/50 py-3 backdrop-blur-md">
        <div className="marquee-track flex animate-marquee whitespace-nowrap">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span
              key={i}
              className="flex items-center font-label text-xs uppercase tracking-[0.22em] text-muted"
            >
              <span className="px-6">{t}</span>
              <span className="text-green-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chip({
  label,
  className = "",
  delay,
}: {
  label: string;
  className?: string;
  delay?: string;
}) {
  return (
    <span
      style={delay ? { animationDelay: delay } : undefined}
      className={`absolute flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/85 px-4 py-2 shadow-soft backdrop-blur-md ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-green-accent" />
      <span className="font-label text-[11px] font-medium uppercase tracking-wide text-[var(--text)]">
        {label}
      </span>
    </span>
  );
}
