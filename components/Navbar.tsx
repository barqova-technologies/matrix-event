"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--bg)]/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-container items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* logo: M glyph (theme-swapped) + wordmark */}
        <a href="/#top" className="flex items-center gap-2.5" aria-label={SITE.name}>
          <Image
            src="/logo-m-green.png"
            alt={SITE.name}
            width={36}
            height={36}
            priority
            className="logo-glow h-9 w-9 object-contain"
          />
          <span className="leading-none">
            <span className="block font-display text-lg font-extrabold tracking-tight text-green-primary dark:text-green-accent">
              MATRIX
            </span>
            <span className="block font-label text-[8px] uppercase tracking-[0.34em] text-muted">
              Events &amp; Marketing
            </span>
          </span>
        </a>

        {/* center links (desktop) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline font-label text-sm uppercase tracking-wide text-[var(--text)] transition-colors hover:text-green-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* right controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-2 border-l border-[var(--border)] bg-[var(--surface)] p-6 lg:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-green-accent">
                  Menu
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--text)]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="font-display text-2xl font-bold text-[var(--text)] transition-colors hover:text-green-accent"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={SITE.bookingHref}
                onClick={() => setOpen(false)}
                className="mt-auto rounded-full bg-green-primary px-5 py-3 text-center font-label text-sm font-medium uppercase tracking-wide text-white"
              >
                Book a Meeting
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
