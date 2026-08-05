import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  const footerLinks = NAV_LINKS.filter((l) =>
    ["About", "Services", "Clients", "Ecosystem", "Contact"].includes(l.label)
  );

  return (
    <footer className="grain relative border-t border-[var(--border)] bg-dark-bg text-white">
      <div className="mx-auto grid max-w-container gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-10">
        {/* brand */}
        <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
          <Image
            src="/logo-full-dark.png"
            alt={SITE.name}
            width={150}
            height={135}
            className="logo-glow h-24 w-auto"
          />
          <p className="font-label text-xs uppercase tracking-[0.25em] text-green-accent">
            {SITE.parent}
          </p>
        </div>

        {/* nav */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {footerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline font-label text-sm uppercase tracking-wide text-white/80 transition-colors hover:text-green-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* social + url */}
        <div className="flex flex-col items-center gap-4 lg:items-end">
          <div className="flex items-center gap-4">
            <a
              href={SITE.instagramHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--dark-border)] text-white/80 transition-all hover:text-green-accent hover:shadow-glow"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={SITE.linkedinHref}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--dark-border)] text-white/80 transition-all hover:text-green-accent hover:shadow-glow"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H18.6v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H10z" />
              </svg>
            </a>
          </div>
          <a
            href="https://www.matrixevent.in"
            target="_blank"
            rel="noreferrer"
            className="font-label text-sm text-white/80 transition-colors hover:text-green-accent"
          >
            {SITE.url}
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--dark-border)] py-5">
        <p className="text-center font-label text-xs text-white/50">
          © 2025 Matrix Events &amp; Marketing. All rights reserved · Crafted by{" "}
          <a
            href={SITE.craftedBy.href}
            target="_blank"
            rel="noreferrer"
            className="text-green-accent/80 transition-colors hover:text-green-accent"
          >
            {SITE.craftedBy.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
