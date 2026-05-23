"use client";

import { CLIENTS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

function Logo({ name, file }: { name: string; file: string }) {
  return (
    <div className="mx-3 flex h-20 w-[200px] shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] px-6 shadow-soft grayscale-[0.4] transition-all duration-300 hover:scale-105 hover:border-green-accent/40 hover:grayscale-0 hover:shadow-glow dark:opacity-80 dark:grayscale dark:hover:opacity-100 dark:hover:grayscale-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/clients/${file}.svg`}
        alt={name}
        loading="lazy"
        className="max-h-9 w-auto dark:brightness-150"
      />
    </div>
  );
}

function Row({
  items,
  reverse = false,
}: {
  items: typeof CLIENTS;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-pause overflow-hidden py-2">
      <div
        className={`marquee-track flex ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((c, i) => (
          <Logo key={`${c.file}-${i}`} name={c.name} file={c.file} />
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  const mid = Math.ceil(CLIENTS.length / 2);
  const top = CLIENTS.slice(0, mid);
  const bottom = CLIENTS.slice(mid);

  return (
    <section
      id="clients"
      className="relative border-y border-[var(--border)] bg-[var(--surface)] py-24 sm:py-32"
    >
      <div className="mx-auto mb-14 max-w-container px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="04"
          label="Our Clients"
          title="Brands That Trust Us"
        />
      </div>

      {/* edge fades */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--surface)] to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--surface)] to-transparent sm:w-32" />
        <div className="space-y-4">
          <Row items={top} />
          <Row items={bottom} reverse />
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-container px-4 text-center text-sm italic text-muted sm:px-6">
        …among many other prestigious clients and events.
      </p>
    </section>
  );
}
