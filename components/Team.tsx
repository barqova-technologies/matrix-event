"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { TEAM } from "@/lib/constants";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const OFFSETS = ["lg:mt-0", "lg:mt-12", "lg:mt-4", "lg:mt-16"];

function TeamCard({
  member,
  index,
}: {
  member: (typeof TEAM)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 18,
  });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      initial={{ rotate: member.rotate }}
      whileHover={{ rotate: 0, y: -10 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`group relative ${OFFSETS[index % OFFSETS.length]}`}
    >
      {/* pin */}
      <span className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
        <span className="block h-4 w-4 rounded-full bg-green-accent shadow-[0_0_14px_rgba(46,196,160,0.7)] ring-4 ring-[var(--bg)]" />
      </span>

      {/* polaroid (theme-aware paper) */}
      <div className="grain rounded-md border border-[var(--border)] bg-[#FBF8F2] p-3 pb-5 shadow-soft transition-shadow duration-300 group-hover:shadow-glow dark:bg-[#1C2620]">
        <div
          className={`relative aspect-[4/5] overflow-hidden rounded-sm bg-gradient-to-br ${member.gradient}`}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width:768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="px-1 pt-4 text-center">
          <h3 className="font-display text-lg font-extrabold text-neutral-900 dark:text-[#ECEFE9]">
            {member.name}
          </h3>
          <p className="mt-1 font-label text-[11px] uppercase tracking-[0.18em] text-green-primary dark:text-green-accent">
            {member.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="05"
          label="Our Leadership"
          title="The Minds Behind the Magic"
        />

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-14 sm:gap-x-10 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <TeamCard member={m} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
