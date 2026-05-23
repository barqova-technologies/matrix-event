"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type PinCardProps = {
  rotate?: number;
  pin?: boolean;
  textured?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<HTMLMotionProps<"div">, "children">;

export default function PinCard({
  rotate = 0,
  pin = true,
  textured = true,
  className = "",
  children,
  ...rest
}: PinCardProps) {
  return (
    <motion.div
      initial={{ rotate, y: 0 }}
      whileHover={{ rotate: 0, y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      style={{ rotate }}
      className={`group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-300 hover:shadow-glow ${
        textured ? "grain" : ""
      } ${className}`}
      {...rest}
    >
      {pin && (
        <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
          <span className="block h-5 w-5 rounded-full bg-green-accent shadow-[0_0_14px_rgba(46,196,160,0.7)] ring-4 ring-[var(--bg)]" />
        </span>
      )}
      <div className="relative z-[2]">{children}</div>
    </motion.div>
  );
}
