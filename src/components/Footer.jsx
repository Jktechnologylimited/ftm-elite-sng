import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 flex flex-col md:flex-row md:items-start justify-between gap-10">
        <div>
          <span className="block font-display text-xl">
            FTM <span className="text-gold">ELITE</span> SERVICES
          </span>
          <span className="block text-[10px] tracking-[0.2em] text-stone uppercase mt-1">
            Property &amp; Hospitality Management
          </span>
        </div>

        <div className="text-sm">
          <p className="text-xs tracking-widest text-stone mb-3">QUICK LINKS</p>
          <ul className="flex gap-6">
            <li><Link href="/" className="hover:text-gold">Home</Link></li>
            <li><Link href="/#about" className="hover:text-gold">About</Link></li>
            <li><Link href="/#services" className="hover:text-gold">Services</Link></li>
            <li><Link href="/projects" className="hover:text-gold">Projects</Link></li>
            <li><Link href="/#contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="text-xs tracking-widest text-stone mb-3">FOLLOW US</p>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center border border-ink/20 rounded-full hover:border-gold hover:text-gold">
              IG
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center border border-ink/20 rounded-full hover:border-gold hover:text-gold">
              in
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <p className="mx-auto max-w-7xl px-6 md:px-10 py-5 text-xs text-stone">
          © {new Date().getFullYear()} FTM Elite Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
