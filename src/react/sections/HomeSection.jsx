import React from "https://esm.sh/react@18.3.1";
import Icon from "../components/Icon.jsx";

export default function HomeSection({ profile, onSelect }) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:px-8">
        <div className="animate-rise">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200">
            <span className="relative inline-flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-300"></span>
            </span>
            {profile.availability}
          </div>

          <h1 className="mt-6 max-w-4xl font-sora text-4xl font-extrabold leading-tight text-slate-100 md:text-6xl">
            {profile.tagline}
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">{profile.heroDescription}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => onSelect("projects")}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-300 to-sky-300 px-7 py-3 text-sm font-bold text-slate-900 transition hover:scale-[1.02]"
            >
              Lihat Portfolio
              <Icon name="chevron-right" className="h-4 w-4" />
            </button>
            <button
              onClick={() => onSelect("about")}
              className="rounded-full border border-cyan-100/20 bg-slate-800/60 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700/70"
            >
              Tentang Saya
            </button>
          </div>
        </div>

        <aside className="animate-rise rounded-3xl border border-cyan-100/20 bg-slate-900/80 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.6)] lg:p-8">
          {profile.photo ? (
            <div className="mb-5 overflow-hidden rounded-2xl border border-cyan-100/20 bg-slate-950/60">
              <img src={profile.photo} alt={`Foto profil ${profile.name}`} className="h-72 w-full object-contain object-bottom" />
            </div>
          ) : null}
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300/90">Career Vision</p>
          <h2 className="mt-3 font-sora text-2xl font-bold text-slate-100">{profile.vision}</h2>
          <p className="mt-5 text-slate-300">{profile.role}</p>
          <p className="text-slate-400">{profile.semester}</p>
        </aside>
      </div>
    </section>
  );
}
