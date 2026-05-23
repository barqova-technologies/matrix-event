"use client";

import { SERVICES } from "@/lib/constants";
import PinCard from "./PinCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section
      id="services"
      className="relative border-y border-[var(--border)] bg-[var(--surface)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="02"
          label="What We Do"
          title="Two Verticals. One Standard."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-8">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 0.1}>
              <PinCard rotate={svc.rotate} className="h-full p-7 sm:p-9">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-green-accent">
                  {svc.tag}
                </span>
                <h3 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
                  {svc.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {svc.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[var(--text)]"
                    >
                      <span className="mt-1 select-none text-green-accent">
                        ✦
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </PinCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
