"use client";

import Image from "next/image";
import { ABOUT_IMAGE, STATS } from "@/lib/constants";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="grain relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-container items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* text */}
        <div>
          <SectionHeading
            index="01"
            label="Who We Are"
            align="left"
            title={
              <>
                Built on Experience.{" "}
                <span className="text-green-accent">Driven by Execution.</span>
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Matrix Events &amp; Marketing is a Lucknow-based event management
              and marketing company established in 2023. A unit of Infinity
              Ventures, we specialize in creative, well-executed events and
              impactful brand experiences — from corporate expos to large-scale
              festivals.
            </p>
          </Reveal>

          {/* stats */}
          <Reveal delay={0.15}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="min-w-0 border-l-2 border-green-accent/40 pl-4"
                >
                  <dt className="whitespace-nowrap font-display text-4xl font-extrabold leading-none tracking-tight text-green-accent sm:text-5xl">
                    <span className="tabular-nums">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </span>
                  </dt>
                  <dd className="mt-2 font-label text-[11px] uppercase leading-tight tracking-wide text-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* image */}
        <Reveal delay={0.1} className="flex justify-center">
          <div className="relative w-full max-w-md rotate-2 transition-transform duration-500 hover:rotate-0">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-green-accent shadow-glow">
              <Image
                src={ABOUT_IMAGE}
                alt="Event production with stage lights and crowd"
                fill
                unoptimized
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* green duotone grade */}
              <div className="pointer-events-none absolute inset-0 bg-green-primary/25 mix-blend-color" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-bg/45 via-transparent to-green-accent/10" />
            </div>
            <span className="absolute -left-4 top-6 -rotate-6 rounded-full bg-[var(--surface)] px-4 py-2 font-label text-xs uppercase tracking-wide text-green-accent shadow-glow">
              Est. 2023
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
