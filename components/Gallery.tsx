"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="03"
          label="Selected Work"
          title="Moments We've Made."
        />

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {GALLERY.map((g, i) => (
            <motion.figure
              key={g.caption}
              initial={{ opacity: 0, y: 30, rotate: g.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: g.rotate }}
              whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative block break-inside-avoid overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-soft transition-shadow duration-300 hover:shadow-glow"
            >
              {/* pin */}
              <span className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
                <span className="block h-4 w-4 rounded-full bg-green-accent shadow-[0_0_12px_rgba(62,157,120,0.6)] ring-4 ring-[var(--surface)]" />
              </span>

              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={g.src}
                  alt={g.caption}
                  width={800}
                  height={i % 2 === 0 ? 1000 : 700}
                  unoptimized
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* tint + caption */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-bg/70 via-transparent to-transparent opacity-80" />
                <figcaption className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-accent" />
                  <span className="font-label text-xs uppercase tracking-[0.18em] text-white">
                    {g.caption}
                  </span>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        <p className="mt-10 text-center text-sm italic text-muted">
          A glimpse of 100+ events delivered across India.
        </p>
      </div>
    </section>
  );
}
