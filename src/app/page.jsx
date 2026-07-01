import Link from "next/link";
import Photo from "@/components/Photo";
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
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Helping Property Owners Maximize the Value of Their Investments
            </h1>
            <div className="w-16 h-px bg-gold my-6" />
            <p className="text-sm text-stone leading-relaxed">
              Property Management • Hospitality Operations
              <br />
              Residential Setup • Asset Optimization
            </p>
            <a
              href={waLink("Hello FTM Elite Services, I'd like to book a consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-forest text-cream text-xs tracking-wider px-6 py-4 hover:bg-forest-dark transition-colors"
            >
              BOOK A CONSULTATION
            </a>
          </div>

          <Photo label="Living room" className="h-[280px] md:h-[420px] w-full" />
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
          <Photo label="Console table" className="h-[320px] md:h-auto min-h-[320px]" />
          <div className="bg-cream-dark p-10 md:p-14 flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] text-gold mb-3">ABOUT US</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              Property Management with an Owner&apos;s Mindset
            </h2>
            <p className="text-sm text-stone leading-relaxed mb-6">
              We help property owners protect, manage, and maximize the value
              of their real estate investments through practical solutions,
              operational excellence, and attention to every detail.
            </p>
            <Link href="/#contact" className="text-xs tracking-widest text-gold hover:text-gold-light">
              LEARN MORE ABOUT US →
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
