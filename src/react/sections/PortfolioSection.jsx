import React from "https://esm.sh/react@18.3.1";
import Icon from "../components/Icon.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function PortfolioSection({ portfolioItems }) {
  return (
    <section id="portfolio" className="border-y border-cyan-100/10 bg-slate-900/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Portfolio Highlights" title="3D Models, Game Projects, Teaching Materials" center />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {portfolioItems.map((item) => (
            <article key={item.title} className="animate-rise rounded-2xl border border-cyan-100/15 bg-slate-900/80 p-6">
              <div className="mb-4 inline-flex rounded-xl bg-amber-300/10 p-2 text-amber-300">
                <Icon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-sora text-xl font-bold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
