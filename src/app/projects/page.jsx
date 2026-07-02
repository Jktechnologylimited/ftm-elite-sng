import ProjectCard from "@/components/ProjectCard";
import ContactCTA from "@/components/ContactCTA";
import { PROJECTS } from "@/lib/projects";

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
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
