import React from "https://esm.sh/react@18.3.1";
import Icon from "../components/Icon.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Featured Projects" title="Proyek Unggulan" center />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="animate-rise overflow-hidden rounded-2xl border border-cyan-100/15 bg-slate-900/80">
              <div className="relative flex h-40 items-center justify-center border-b border-cyan-100/10 bg-gradient-to-br from-sky-300/10 to-teal-300/10">
                <Icon name={project.icon} className="h-12 w-12 text-sky-300/70" />
                <span className="absolute left-3 top-3 rounded-full bg-slate-950/60 px-2 py-1 text-[10px] uppercase tracking-widest text-cyan-200">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-sora text-xl font-bold text-slate-100">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyan-100/15 bg-slate-800 px-2.5 py-1 text-xs text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
