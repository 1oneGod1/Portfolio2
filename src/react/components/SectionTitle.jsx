import React from "https://esm.sh/react@18.3.1";

export default function SectionTitle({ eyebrow, title, center = false }) {
  return (
    <div className={center ? "text-center mb-10" : "mb-10"}>
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/90 mb-2">{eyebrow}</p>
      <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-slate-100">{title}</h2>
    </div>
  );
}
