import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { waLink, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/lib/whatsapp";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14 flex flex-col md:flex-row md:items-center justify-between gap-10">
        <h2 className="font-display text-3xl md:text-4xl leading-tight max-w-sm">
          Let&apos;s Maximize the Value of Your Property
        </h2>

        <p className="text-sm text-cream/80 max-w-sm">
          Whether you&apos;re preparing a new development or looking for a
          trusted partner to manage your investment, we&apos;d love to hear
          from you.
        </p>

        <a
          href={waLink("Hello FTM Elite Services, I'd like to book a consultation.")}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-forest-dark text-xs tracking-wider px-6 py-4 hover:bg-gold-light transition-colors whitespace-nowrap self-start md:self-center"
        >
          BOOK A CONSULTATION
        </a>

        <div className="flex flex-col gap-3 text-sm border-t md:border-t-0 md:border-l border-cream/20 md:pl-8 pt-6 md:pt-0">

          <a href={`tel:+${CONTACT_PHONE_DISPLAY.replace(/[^\d]/g, "")}`} className="flex items-center gap-3 hover:text-gold-light transition-colors">
            <HiOutlinePhone size={18} /> {CONTACT_PHONE_DISPLAY}
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gold-light transition-colors"
          >
            <FaWhatsapp size={18} /> {CONTACT_PHONE_DISPLAY} (WhatsApp)
          </a>
        </div>
      </div>
    </section>
  );
}
