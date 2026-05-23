"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-green-accent transition-colors hover:shadow-glow"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="absolute"
          >
            {isDark ? <MoonIcon /> : <SunIcon />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}
