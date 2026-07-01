"use client";

import Link from "next/link";
import { useState } from "react";
import { waLink } from "@/lib/whatsapp";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="leading-tight">
          <span className="block font-display text-2xl tracking-wide">
            FTM <span className="text-gold">ELITE</span> SERVICES
          </span>
          <span className="block text-[10px] tracking-[0.2em] text-stone uppercase">
            Property &amp; Hospitality Management
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gold transition-colors">
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <a
          href={waLink("Hello FTM Elite Services, I'd like to book a consultation.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-forest text-cream text-xs tracking-wider px-5 py-3 hover:bg-forest-dark transition-colors"
        >
          BOOK A CONSULTATION
        </a>

        <button
          className="md:hidden text-ink"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-px bg-ink mb-1.5" />
          <span className="block w-6 h-px bg-ink mb-1.5" />
          <span className="block w-6 h-px bg-ink" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-cream px-6 py-4 flex flex-col gap-4 text-sm">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label.toUpperCase()}
            </Link>
          ))}
          <a
            href={waLink("Hello FTM Elite Services, I'd like to book a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-forest text-cream text-xs tracking-wider px-5 py-3 text-center"
          >
            BOOK A CONSULTATION
          </a>
        </div>
      )}
    </header>
  );
}
