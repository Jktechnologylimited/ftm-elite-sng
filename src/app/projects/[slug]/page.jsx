import Image from "next/image";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import { PROJECTS } from "@/lib/projects";
import { waLink } from "@/lib/whatsapp";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | FTM Elite Services`,
    description: `${project.title} — ${project.location}. ${project.tags.join(", ")}.`,
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-14 pb-8">
          <Link href="/projects" className="text-xs tracking-widest text-gold hover:text-gold-light">
            ← ALL PROJECTS
          </Link>
          <h1 className="font-display text-4xl md:text-5xl mt-4">{project.title}</h1>
          <p className="text-sm text-stone mt-2">{project.location}</p>
          <p className="text-xs text-stone/80 mt-2">{project.tags.join(" • ")}</p>

          <a
            href={waLink(`Hi FTM Elite Services, I'm interested in the ${project.title} project.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-forest text-cream text-xs tracking-wider px-6 py-4 hover:bg-forest-dark transition-colors"
          >
            ENQUIRE ON WHATSAPP
          </a>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
          {project.images.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {project.images.map((src, i) => (
                <div key={src} className={`relative h-[420px] overflow-hidden ${i === 0 ? "md:col-span-2 md:h-[560px]" : ""}`}>
                  <Image
                    src={src}
                    alt={`${project.title} — view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-ink/20 rounded-lg py-24 text-center">
              <p className="text-sm text-stone">Photos for this project are coming soon.</p>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
