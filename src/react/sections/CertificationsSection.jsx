import React from "https://esm.sh/react@18.3.1";
import SectionTitle from "../components/SectionTitle.jsx";

export default function CertificationsSection({ certifications }) {
  return (
    <section id="certifications" className="border-y border-cyan-100/10 bg-slate-900/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Licenses & Certifications" title="Sertifikasi Profesional" center />

        <div className="space-y-3">
          {certifications.map((cert) => (
            <article key={`${cert.issuer}-${cert.title}`} className="animate-rise flex flex-col justify-between gap-3 rounded-2xl border border-cyan-100/15 bg-slate-900/80 p-5 md:flex-row md:items-center">
              <div>
                <p className="text-xs uppercase tracking-wider text-cyan-200">{cert.issuer}</p>
                <h3 className="mt-1 font-sora text-lg font-bold text-slate-100">{cert.title}</h3>
                <p className="mt-1 text-sm text-slate-400">Diterbitkan {cert.date}</p>
              </div>
              <div className="text-sm text-slate-300">
                <span className="block text-xs uppercase tracking-wider text-slate-400">ID Kredensial</span>
                <strong className="break-all text-teal-200">{cert.id}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
