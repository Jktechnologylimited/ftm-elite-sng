"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { waLink } from "@/lib/whatsapp";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-forest/95 backdrop-blur border-b border-cream/10 text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/brand/logo.png"
            alt="FTM Elite Services"
            width={80}
            height={80}
            className="w-10 h-auto invert"
            priority
          />
          <span className="leading-tight">
            <span className="block font-display text-xl tracking-wide">
              FTM <span className="text-gold-light">ELITE</span> SERVICES
            </span>
            <span className="block text-[9px] tracking-[0.2em] text-cream/60 uppercase">
              Property &amp; Hospitality Management
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gold-light transition-colors">
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <a
          href={waLink("Hello FTM Elite Services, I'd like to book a consultation.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-gold text-forest-dark text-xs tracking-wider px-5 py-3 hover:bg-gold-light transition-colors"
        >
          BOOK A CONSULTATION
        </a>

        <button
          className="md:hidden text-cream text-2xl"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-cream/10 bg-forest px-6 py-4 flex flex-col gap-4 text-sm">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label.toUpperCase()}
            </Link>
          ))}
          <a
            href={waLink("Hello FTM Elite Services, I'd like to book a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-forest-dark text-xs tracking-wider px-5 py-3 text-center"
          >
            BOOK A CONSULTATION
          </a>
        </div>
      )}
    </header>
  );
}
