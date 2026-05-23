"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  label,
  title,
  align = "center",
  className = "",
}: {
  index: string;
  label: string;
  title: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={`relative ${centered ? "text-center" : "text-left"} ${className}`}
    >
      {/* ghost index number */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-16 select-none font-display text-[8rem] font-extrabold leading-none text-[var(--text)] opacity-[0.045] sm:text-[11rem] ${
          centered ? "left-1/2 -translate-x-1/2" : "-left-2"
        }`}
      >
        {index}
      </span>

      <Reveal>
        <p
          className={`flex items-center gap-3 font-label text-xs uppercase tracking-[0.4em] text-green-accent ${
            centered ? "justify-center" : "justify-start"
          }`}
        >
          {centered && <span className="h-px w-8 bg-green-accent/50" />}
          {label}
          <span className="h-px w-8 bg-green-accent/50" />
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="relative mt-4 font-display text-4xl font-extrabold sm:text-5xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
