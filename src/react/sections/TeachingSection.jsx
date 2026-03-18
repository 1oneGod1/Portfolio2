import React from "https://esm.sh/react@18.3.1";
import Icon from "../components/Icon.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function TeachingSection({ teachingFocus }) {
  return (
    <section id="teaching" className="border-y border-cyan-100/10 bg-slate-900/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Teaching Focus" title="Project-Based Learning, Experimentation, Problem Solving" center />

        <div className="grid gap-4">
          {teachingFocus.map((focus) => (
            <article key={focus.title} className="animate-rise flex gap-4 rounded-2xl border border-cyan-100/15 bg-slate-900/80 p-6">
              <div className="h-fit rounded-xl bg-teal-300/10 p-3 text-teal-300">
                <Icon name={focus.icon} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-sora text-xl font-bold text-slate-100">{focus.title}</h3>
                <p className="mt-2 text-slate-300">{focus.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
