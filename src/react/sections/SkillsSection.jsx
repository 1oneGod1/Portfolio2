import React from "https://esm.sh/react@18.3.1";
import Icon from "../components/Icon.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Skills & Technology" title="Keahlian Teknis dan Pedagogik" center />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article key={skill.title} className="animate-rise rounded-2xl border border-cyan-100/15 bg-slate-900/80 p-6 transition hover:-translate-y-1">
              <div className="mb-4 inline-flex rounded-xl bg-sky-300/10 p-2 text-sky-300">
                <Icon name={skill.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-sora text-xl font-bold text-slate-100">{skill.title}</h3>
              <ul className="mt-4 space-y-2">
                {skill.items.map((line) => (
                  <li key={line} className="flex items-center gap-2 text-slate-300">
                    <Icon name="chevron-right" className="h-4 w-4 text-teal-300" />
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
