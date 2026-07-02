import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { INSTAGRAM_URL } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 flex flex-col md:flex-row md:items-start justify-between gap-10">
        <div>
          <Image
            src="/images/brand/logo.png"
            alt="FTM Elite Services"
            width={120}
            height={120}
            className="w-16 h-auto invert"
          />
          <span className="block text-[10px] tracking-[0.2em] text-cream/60 uppercase mt-2">
            Property &amp; Hospitality Management
          </span>
        </div>

        <div className="text-sm">
          <p className="text-xs tracking-widest text-cream/60 mb-3">QUICK LINKS</p>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:text-gold-light">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold-light">About</Link></li>
            <li><Link href="/#services" className="hover:text-gold-light">Services</Link></li>
            <li><Link href="/projects" className="hover:text-gold-light">Projects</Link></li>
            <li><Link href="/#contact" className="hover:text-gold-light">Contact</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="text-xs tracking-widest text-cream/60 mb-3">FOLLOW US</p>
          <div className="flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center border border-cream/20 rounded-full hover:border-gold-light hover:text-gold-light transition-colors"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <p className="text-xs text-cream/60">
            © {new Date().getFullYear()} FTM Elite Services. All rights reserved.
          </p>
          <a
            href="https://jktl.com.ng/services/website-systems"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-wide text-cream/40 hover:text-cream/60 transition-colors"
          >
            Business Website acquired from{" "}
            <span className="font-display italic text-gold-light/80 hover:text-gold-light">
              JK Technology Limited (JKTL)
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
