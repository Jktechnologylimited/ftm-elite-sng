import Link from "next/link";
import Image from "next/image";
import Services from "@/components/Services";
import ProjectCard from "@/components/ProjectCard";
import ContactCTA from "@/components/ContactCTA";
import { PROJECTS } from "@/lib/projects";
import { waLink } from "@/lib/whatsapp";

export default function Home() {
  const featured = PROJECTS.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] md:h-[85vh] md:min-h-[600px] flex items-center overflow-hidden">
        <Image
          src="/images/hero/hero.jpg"
          alt="FTM Elite Services managed living room"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10 w-full">
          <div className="max-w-xl text-cream">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Helping Property Owners Maximize the Value of Their Investments
            </h1>
            <div className="w-16 h-px bg-gold my-6" />
            <p className="text-sm text-cream/85 leading-relaxed">
              Property Management • Hospitality Operations
              <br />
              Residential Setup • Asset Optimization
            </p>
            <a
              href={waLink("Hello FTM Elite Services, I'd like to book a consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-gold text-forest-dark text-xs tracking-wider px-6 py-4 hover:bg-gold-light transition-colors"
            >
              BOOK A CONSULTATION
            </a>
          </div>
        </div>
      </section>

      {/* Selected projects */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs tracking-[0.2em] text-gold mb-3">SPACES WE&apos;VE TRANSFORMED</p>
              <h2 className="font-display text-3xl md:text-4xl">Selected Projects</h2>
            </div>
            <p className="text-sm text-stone max-w-sm">
              From residential setup to full operational management, we create
              spaces that are beautiful, functional, and built to perform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <div className="mt-8">
            <Link href="/projects" className="text-xs tracking-widest text-gold hover:text-gold-light">
              VIEW ALL PROJECTS →
            </Link>
          </div>
        </div>
      </section>

      <Services />

      {/* About teaser */}
      <section id="about" className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20 grid md:grid-cols-2 gap-0 items-stretch">
          <div className="relative h-[320px] md:h-auto min-h-[320px]">
            <Image
              src="/images/abuja/view02.jpg"
              alt="FTM Elite Services managed interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="bg-cream-dark p-10 md:p-14 flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] text-gold mb-3">ABOUT US</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              Property Management with an Owner&apos;s Mindset
            </h2>
            <p className="text-sm text-stone leading-relaxed mb-4">
              Every successful hospitality asset begins with a clear vision,
              thoughtful execution, and a commitment to delivering exceptional
              guest experiences. FTM Elite Services was born from the belief
              that residential properties can achieve far more when they are
              approached as hospitality assets rather than simply places to
              stay.
            </p>
            <p className="text-sm text-stone leading-relaxed mb-6">
              We combine thoughtful planning, disciplined execution, and
              exceptional hospitality to create spaces that perform for both
              guests and owners — helping property owners and investors
              maximise the value of their real estate through strategic
              development, professional operations, and long-term asset
              management.
            </p>
            <Link href="/about" className="text-xs tracking-widest text-gold hover:text-gold-light">
              READ MORE →
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
