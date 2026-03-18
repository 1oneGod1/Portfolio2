import React from "https://esm.sh/react@18.3.1";
import Icon from "../components/Icon.jsx";

export default function ContactSection({ contact }) {
  return (
    <footer id="contact" className="py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="animate-rise">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/90">Contact</p>
          <h2 className="mt-2 font-sora text-3xl font-extrabold text-slate-100 md:text-4xl">Mari Berdiskusi dan Berkolaborasi</h2>
          <p className="mt-4 max-w-xl text-slate-300">{contact.description}</p>

          <div className="mt-6 flex items-center gap-3">
            <a className="rounded-full border border-cyan-100/20 bg-slate-900/80 p-3 text-slate-200 hover:bg-sky-300/20" href={`mailto:${contact.email}`}>
              <Icon name="mail" className="h-5 w-5" />
            </a>
            <a className="rounded-full border border-cyan-100/20 bg-slate-900/80 p-3 text-slate-200 hover:bg-sky-300/20" href={contact.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" className="h-5 w-5" />
            </a>
            <a className="rounded-full border border-cyan-100/20 bg-slate-900/80 p-3 text-slate-200 hover:bg-sky-300/20" href={contact.github} target="_blank" rel="noreferrer">
              <Icon name="github" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <aside className="animate-rise rounded-2xl border border-cyan-100/15 bg-slate-900/80 p-6">
          <h3 className="font-sora text-xl font-bold text-slate-100">Current Learning</h3>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li className="flex items-center gap-2"><Icon name="check-circle-2" className="h-4 w-4 text-teal-300" /> Full Stack Flutter</li>
            <li className="flex items-center gap-2"><Icon name="check-circle-2" className="h-4 w-4 text-teal-300" /> Backend Golang</li>
            <li className="flex items-center gap-2"><Icon name="check-circle-2" className="h-4 w-4 text-teal-300" /> Cloud Platform Exploration</li>
          </ul>
        </aside>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-cyan-100/10 px-4 pt-6 text-sm text-slate-400 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Andi. Educator & Developer.
      </div>
    </footer>
  );
}
