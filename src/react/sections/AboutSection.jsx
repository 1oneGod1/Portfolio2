import React from "https://esm.sh/react@18.3.1";
import Icon from "../components/Icon.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

export default function AboutSection({ profile }) {
  return (
    <section id="about" className="border-y border-cyan-100/10 bg-slate-900/40 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="animate-rise">
          <SectionTitle eyebrow="About Me" title="Membentuk Masa Depan Melalui Pendidikan Teknologi" />
          {profile.aboutParagraphs.map((text) => (
            <p key={text} className="mb-4 text-slate-300 leading-relaxed">
              {text}
            </p>
          ))}
        </div>

        <div className="space-y-4 animate-rise">
          <article className="rounded-2xl border border-cyan-100/15 bg-slate-900/80 p-6">
            <h3 className="font-sora text-xl font-bold text-slate-100">Personal Strengths</h3>
            <ul className="mt-4 space-y-3">
              {profile.strengths.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 rounded-lg bg-teal-300/10 p-1 text-teal-300">
                    <Icon name="heart" className="h-4 w-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-cyan-100/15 bg-gradient-to-br from-sky-400/10 to-teal-300/10 p-6">
            <h3 className="font-sora text-xl font-bold text-slate-100">Target Audiens</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Sekolah", "Universitas", "Institusi Pendidikan", "Kolaborator Teknologi", "Siswa"].map((item) => (
                <span key={item} className="rounded-full border border-cyan-200/20 bg-slate-900/60 px-3 py-1 text-xs text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
