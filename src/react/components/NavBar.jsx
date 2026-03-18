import React from "https://esm.sh/react@18.3.1";

export default function NavBar({ navigation, activeMenu, onSelect }) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-cyan-200/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={() => onSelect("home")} className="font-sora text-2xl font-extrabold tracking-tight">
          <span className="text-teal-300">Andi</span>.
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                activeMenu === item.id
                  ? "bg-gradient-to-r from-teal-300 to-sky-300 text-slate-900"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => onSelect("contact")}
          className="hidden md:inline-flex rounded-full bg-teal-400 px-4 py-2 text-sm font-bold text-slate-900 transition hover:bg-teal-300"
        >
          Hubungi Saya
        </button>
      </div>
    </nav>
  );
}
