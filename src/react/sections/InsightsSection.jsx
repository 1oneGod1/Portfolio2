import React from "https://esm.sh/react@18.3.1";
import Icon from "../components/Icon.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function InsightsSection({ insights }) {
  return (
    <section id="insights" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Blog / Insights" title="Topik yang Sedang Dieksplorasi" center />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {insights.map((item) => (
            <article key={item.title} className="animate-rise rounded-2xl border border-cyan-100/15 bg-slate-900/80 p-6">
              <h3 className="font-sora text-xl font-bold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.description}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-teal-200">
                Diskusi topik ini
                <Icon name="arrow-right" className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
