"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MISSION } from "@/lib/constants";

export default function Mission() {
  const words = MISSION.split(" ");

  return (
    <section className="grain relative overflow-hidden bg-dark-bg py-28 text-[#E9EEE8] sm:py-36">
      {/* watermark */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-[0.06]">
        <Image
          src="/logo-mark.png"
          alt=""
          aria-hidden
          width={620}
          height={620}
          className="h-[90%] w-auto"
        />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-accent/[0.08] blur-[150px]" />

      <div className="relative z-[2] mx-auto max-w-5xl px-4 text-center sm:px-6">
        <p className="font-label text-xs uppercase tracking-[0.45em] text-green-accent">
          Our Mission
        </p>
        <p className="mt-8 font-display text-2xl font-bold leading-snug sm:text-4xl md:text-5xl">
          {words.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              initial={{ opacity: 0.12 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="inline-block"
            >
              {w}&nbsp;
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
}
