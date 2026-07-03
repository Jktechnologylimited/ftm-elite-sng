import Link from "next/link";
import Image from "next/image";
import Photo from "./Photo";

export default function ProjectCard({ project }) {
  const cover = project.images?.[0];

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative h-[420px] overflow-hidden">
        {cover ? (
          <Image
            src={cover}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <Photo label={project.title} className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-display text-2xl">{project.title}</h3>
          <p className="text-sm mt-1">{project.location}</p>
          <p className="text-xs text-white/80 mt-2">{project.tags.join(" • ")}</p>
          <span className="inline-flex items-center gap-2 mt-4 bg-gold text-forest-dark text-xs tracking-widest font-medium px-5 py-3 hover:bg-gold-light transition-colors">
            VIEW PROJECT
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
