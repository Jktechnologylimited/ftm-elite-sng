import Photo from "@/components/Photo";
import ContactCTA from "@/components/ContactCTA";
import { PROJECTS } from "@/lib/projects";
import { waLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Projects | FTM Elite Services",
  description: "Selected properties transformed by FTM Elite Services.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-14 pb-10">
          <p className="text-xs tracking-[0.2em] text-gold mb-3">SPACES WE&apos;VE TRANSFORMED</p>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Selected Projects</h1>
          <p className="text-sm text-stone max-w-xl">
            From residential setup to full operational management, we create
            spaces that are beautiful, functional, and built to perform.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20 grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.slug} id={project.slug} className="scroll-mt-24">
              <div className="relative h-[420px] overflow-hidden mb-4">
                <Photo label={project.title} className="absolute inset-0 h-full w-full" />
              </div>
              <h3 className="font-display text-2xl">{project.title}</h3>
              <p className="text-sm text-stone mt-1">{project.location}</p>
              <p className="text-xs text-stone/80 mt-2">{project.tags.join(" • ")}</p>
              <a
                href={waLink(`Hi FTM Elite Services, I'm interested in the ${project.title} project.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-xs tracking-widest text-gold hover:text-gold-light"
              >
                ENQUIRE ON WHATSAPP
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
