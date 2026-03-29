const { useState, useEffect, useRef, useCallback } = React;

const profile = {
  name: "Andi",
  photo: "assets/img/profile-andi.png",
  role: "Computer Science Teacher / Technology Educator",
  tagline: "Educator in 3D Modeling, Game Development, and Emerging Technologies",
  availability: "Tersedia untuk Kolaborasi Edukasi",
  heroDescription:
    "Mengubah kompleksitas teknologi masa depan menjadi pengalaman belajar interaktif melalui pembuatan game, simulasi 3D, inovasi nyata, serta integrasi beragam AI tools untuk mempercepat eksekusi proyek.",
  vision:
    "Menjadi ahli dan pengajar di bidang 3D modeling serta game development, dan berkontribusi besar pada pendidikan teknologi digital.",
  about: [
    "Sebagai pendidik Ilmu Komputer dan mahasiswa, saya menjembatani teori akademis dengan praktik industri. Fokus saya adalah menginspirasi siswa kelas 7-12 untuk menjadi pencipta dunia digital.",
    "Saya mengusung empati, adaptabilitas, dan pendekatan project-based learning. Saya juga mengerjakan integrasi AI di seluruh proyek untuk mempercepat alur kerja dan iterasi, termasuk pemanfaatan GitHub Copilot, Claude, dan tools AI pendukung lainnya.",
  ],
};

const skills = [
  {
    title: "Game Dev & 3D",
    icon: "gamepad-2",
    color: "blue",
    items: ["Unity Engine", "C# (Game Development)", "Blender (3D Modeling)", "2D Game Design", "Game Logic & Assets"],
  },
  {
    title: "Programming",
    icon: "code-2",
    color: "emerald",
    items: [
      "Laravel / HTML, CSS, JavaScript (Web)",
      "Golang (Backend)",
      "Flutter",
      "C++ (Learning for IoT/Robotics)",
      "C# (Game Development)",
    ],
  },
  {
    title: "Emerging Tech",
    icon: "cpu",
    color: "violet",
    items: ["Arduino & IoT", "Cloud Architecture", "Cloud Computing", "Network Architecture (Cisco Packet Tracer)"],
  },
];

const projects = [
  {
    category: "Web & Education",
    title: "Aplikasi Buku Nilai Informatika",
    icon: "book-marked",
    image: "assets/img/project-nilai-informatika.svg",
    glow: "emerald",
    description:
      "Aplikasi web untuk mengelola nilai siswa dengan Firebase Realtime Database. Fitur: CRUD nilai, email verification untuk guru, pencarian nilai siswa real-time, import/export Excel, dan dashboard admin.",
    tags: ["Firebase", "JavaScript", "Tailwind CSS"],
    link: "https://nilai-informatika.web.app",
  },
  {
    category: "Web & Network",
    title: "Sistem Manajemen Laboratorium",
    icon: "server",
    glow: "blue",
    description:
      "Platform berbasis jaringan lokal dengan login siswa, pelaporan perangkat, screen sharing real-time, dan kendali jarak jauh untuk guru.",
    tags: ["PHP/JS", "Networking"],
  },
  {
    category: "STEM Education",
    title: "Archipelago Resilience",
    icon: "globe",
    glow: "emerald",
    description:
      "Inisiatif Design Thinking kelas 9 yang menghasilkan simulasi bencana dan purwarupa sistem peringatan dini berbasis Arduino.",
    tags: ["Arduino", "IoT Logic"],
  },
  {
    category: "UI/UX System",
    title: "Sistem Penjualan Ritel",
    icon: "smartphone",
    glow: "violet",
    description:
      "Ekosistem ritel yang menyinkronkan interaksi tablet dengan proyeksi katalog dinamis via Chromecast TV, berfokus pada UX premium.",
    tags: ["UI/UX", "Figma"],
  },
];

const certifications = [
  {
    issuer: "Udemy",
    title: "Arduino For Beginners 2026 Complete Course",
    date: "Jan 2026",
    id: "UC-2726ef05-c28d-4ed1-83b3-3ca9ffc2617d",
  },
  { issuer: "Cisco", title: "Networking Basics", date: "Mar 2025", id: "-" },
  { issuer: "Cisco Networking Academy", title: "Introduction to Cybersecurity", date: "Feb 2025", id: "-" },
  { issuer: "Devata Studio", title: "Blender 3D Generalist", date: "Des 2024", id: "DVT.0174" },
  {
    issuer: "GameDev.tv",
    title: "Complete C# Unity Game Developer 2D",
    date: "Okt 2024",
    id: "UC-63e485fc-5b7b-4ce0-89e8-47655b38667c",
  },
  { issuer: "Dicoding Academy", title: "Belajar Dasar Pemrograman Web", date: "Des 2024", id: "GRX5413QRP0M" },
];

const contact = {
  mail: "pandapotanandi@gmail.com",
  linkedin: "https://www.linkedin.com/in/andi-pandapotan-p-74b32a119/",
  github: "https://github.com/1oneGod1",
};

const menuItems = ["Home", "About", "Skills", "Teaching", "Projects"];

const glowClass = {
  blue: "hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.3)]",
  emerald: "hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.3)]",
  violet: "hover:shadow-[0_20px_50px_-15px_rgba(168,85,247,0.3)]",
};

const dotClass = {
  blue: "bg-blue-500 shadow-[0_0_10px_#3b82f6] text-blue-400 border-blue-500/20 bg-blue-500/10",
  emerald: "bg-emerald-500 shadow-[0_0_10px_#10b981] text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  violet: "bg-violet-500 shadow-[0_0_10px_#a855f7] text-violet-400 border-violet-500/20 bg-violet-500/10",
};

function Icon({ name, className = "h-5 w-5" }) {
  return <i data-lucide={name} className={className} aria-hidden="true"></i>;
}

function RevealOnScroll({ children, delay = 0, direction = "up" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    if (direction === "down") return "translateY(-50px)";
    if (direction === "left") return "translateX(50px)";
    if (direction === "right") return "translateX(-50px)";
    return "translateY(50px)";
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0)" : getTransform(),
        transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function App() {
  const [activeMenu, setActiveMenu] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "teaching", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveMenu(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-45% 0px -45% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  const scrollToSection = (id) => {
    setActiveMenu(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-emerald-500 selection:text-white relative overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes blob {
              0% { transform: translate(0px, 0px) scale(1); }
              33% { transform: translate(30px, -50px) scale(1.1); }
              66% { transform: translate(-20px, 20px) scale(0.9); }
              100% { transform: translate(0px, 0px) scale(1); }
            }
            .animate-blob { animation: blob 10s infinite; }
            .animation-delay-2000 { animation-delay: 2s; }
            .animation-delay-4000 { animation-delay: 4s; }

            @keyframes text-shimmer {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
            .animate-text-shimmer {
              background-size: 200% auto;
              animation: text-shimmer 4s linear infinite;
            }

            @keyframes float-slow {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(2deg); }
            }
            .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }

            @keyframes float-fast {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }

            @keyframes fade-in {
              from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
              to { opacity: 1; transform: translateX(-50%) translateY(0); }
            }
            .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
          `,
        }}
      />

      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-700/20 mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-700/20 mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-violet-700/20 mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4" : "py-6"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 rounded-full px-6 py-3 ${
              scrolled
                ? "bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                : "bg-transparent"
            }`}
          >
            <div
              className="flex-shrink-0 font-extrabold text-2xl tracking-tighter cursor-pointer flex items-center gap-2"
              onClick={() => scrollToSection("home")}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Icon name="box" className="h-[18px] w-[18px] text-white" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">{profile.name}</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-full">
                {menuItems.map((item) => {
                  const id = item.toLowerCase();
                  return (
                    <button
                      key={item}
                      onClick={() => scrollToSection(id)}
                      className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        activeMenu === id
                          ? "bg-gradient-to-r from-blue-600/80 to-emerald-600/80 text-white shadow-lg"
                          : "text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-6 py-2.5 rounded-full text-sm font-bold text-white overflow-hidden bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all"
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                <span className="relative flex items-center gap-2">
                  Hubungi Saya
                  <Icon name="chevron-right" className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="flex flex-col items-start text-left">
            <RevealOnScroll delay={100} direction="up">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 border border-white/10 shadow-[0_0_20px_rgba(52,211,153,0.1)]">
                <Icon name="sparkles" className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-slate-200 font-medium tracking-wide">{profile.availability}</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200} direction="up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.05]">
                <span className="text-white">Educator in</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 animate-text-shimmer">
                  3D Modeling
                </span>
                <br />
                <span className="text-slate-300 drop-shadow-2xl">& Game Dev.</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={300} direction="up">
              <p className="mt-4 max-w-xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-light">{profile.heroDescription}</p>
            </RevealOnScroll>

            <RevealOnScroll delay={400} direction="up">
              <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]"
                >
                  Lihat Portofolio
                  <Icon name="chevron-right" className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
                >
                  Tentang Saya
                </button>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={300} direction="left">
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-[3rem] overflow-hidden group">
              <div className="absolute inset-0 rounded-[3rem] border border-white/10 bg-gradient-to-b from-slate-900/40 to-slate-950/80 p-6 shadow-2xl">
                <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-emerald-400/30 bg-slate-950/70">
                  <img
                    src={profile.photo}
                    alt={`Foto profil ${profile.name}`}
                    className="h-full w-full object-contain object-bottom"
                    loading="eager"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold tracking-wide text-slate-100 backdrop-blur-md">
                    {profile.name}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="about" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <RevealOnScroll delay={100} direction="right">
                <div className="aspect-[4/5] rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-1">
                  <div className="w-full h-full bg-slate-950 rounded-[2.8rem] flex flex-col justify-center items-center text-center p-10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 shadow-2xl mb-8 transform group-hover:-translate-y-4 transition-transform duration-500 backdrop-blur-xl z-10">
                      <Icon name="layers" className="h-14 w-14 text-blue-400" />
                    </div>

                    <h3 className="text-3xl font-extrabold mb-6 text-white z-10">Visi Karir</h3>
                    <p className="text-slate-300 text-xl font-light leading-relaxed italic z-10">{profile.vision}</p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-7">
              <RevealOnScroll delay={200} direction="left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8 uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Profil Profesional
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white">
                  Membentuk Masa Depan Melalui <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 animate-text-shimmer">Pendidikan Teknologi</span>
                </h2>

                <div className="space-y-6 text-slate-300 text-xl font-light leading-relaxed mb-10">
                  {profile.about.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </RevealOnScroll>

              <div className="grid sm:grid-cols-2 gap-6">
                <RevealOnScroll delay={300} direction="up">
                  <div className="group bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)]">
                    <div className="bg-emerald-500/10 w-14 h-14 rounded-2xl border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                      <Icon name="heart" className="h-7 w-7 text-emerald-400" />
                    </div>
                    <h4 className="font-bold text-white text-xl mb-2">Empati & Dedikasi</h4>
                    <p className="text-slate-400 font-light">Pendekatan mengajar yang tulus, sabar, dan berpusat pada pertumbuhan siswa.</p>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={400} direction="up">
                  <div className="group bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]">
                    <div className="bg-blue-500/10 w-14 h-14 rounded-2xl border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                      <Icon name="book-open" className="h-7 w-7 text-blue-400" />
                    </div>
                    <h4 className="font-bold text-white text-xl mb-2">Pembelajar Aktif</h4>
                    <p className="text-slate-400 font-light">Saat ini memperdalam Full Stack Flutter, Backend Golang, dan integrasi pembelajaran digital.</p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 relative z-10 bg-slate-900/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll delay={100} direction="up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 animate-text-shimmer">Pengalaman</span>
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto text-xl font-light">
                Ringkasan pengalaman teknis dan pengajaran yang saya terapkan untuk mempercepat eksekusi proyek dan pembelajaran siswa.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <RevealOnScroll key={skill.title} delay={200 + idx * 100} direction="up">
                <div
                  className={`group bg-slate-950/50 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 hover:bg-slate-900/80 transition-all duration-500 relative overflow-hidden h-full ${
                    idx === 1 ? "md:translate-y-8" : ""
                  }`}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl transform group-hover:scale-150 transition-all duration-700"></div>
                  <div className="relative z-10">
                    <div className="bg-white/10 w-20 h-20 rounded-3xl flex items-center justify-center border border-white/20 mb-8 transform group-hover:-rotate-6 transition-transform">
                      <Icon name={skill.icon} className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 text-white">{skill.title}</h3>
                    <ul className="space-y-4 text-slate-300 font-light text-lg">
                      {skill.items.map((item) => (
                        <li key={item} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 shadow-[0_0_10px_white]"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="teaching" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll delay={100}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
                Filosofi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 animate-text-shimmer">Pengajaran</span>
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto text-xl font-light">
                Membangun ekosistem belajar berbasis project-based learning, kolaborasi inovatif, dan problem solving dunia nyata.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            <RevealOnScroll delay={200} direction="right">
              <div className="group h-full flex flex-col sm:flex-row gap-8 p-10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 hover:border-blue-500/40 hover:bg-slate-900/60 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)]">
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-900/50 to-blue-800/20 border border-blue-500/30 p-6 rounded-3xl h-fit group-hover:scale-110 transition-transform duration-500">
                  <Icon name="monitor-play" className="h-10 w-10 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Game Development</h3>
                  <p className="text-slate-400 leading-relaxed font-light text-lg">
                    Membimbing siswa merancang logika program, interaksi gameplay, dan membangun karya interaktif menggunakan Unity dan C#.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300} direction="left">
              <div className="group h-full flex flex-col sm:flex-row gap-8 p-10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)]">
                <div className="flex-shrink-0 bg-gradient-to-br from-emerald-900/50 to-emerald-800/20 border border-emerald-500/30 p-6 rounded-3xl h-fit group-hover:scale-110 transition-transform duration-500">
                  <Icon name="box" className="h-10 w-10 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-white">3D Modeling</h3>
                  <p className="text-slate-400 leading-relaxed font-light text-lg">
                    Membangun fondasi desain spasial, aset game, dan pemodelan 3D estetis menggunakan Blender untuk kebutuhan pembelajaran dan produksi.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400} direction="up">
              <div className="md:col-span-2 group flex flex-col md:flex-row gap-8 p-10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl rounded-[2.5rem] border border-violet-500/20 hover:border-violet-500/50 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="flex-shrink-0 bg-violet-500/10 border border-violet-500/30 p-6 rounded-3xl h-fit group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <Icon name="cpu" className="h-12 w-12 text-violet-400" />
                </div>
                <div className="flex-grow relative z-10">
                  <h3 className="text-3xl font-bold mb-4 text-white">STEM & Proyek Simulasi</h3>
                  <p className="text-slate-400 leading-relaxed font-light text-lg max-w-4xl mb-8">
                    Kurikulum teknologi yang melibatkan desain solusi, kolaborasi tim, dan presentasi hasil melalui simulasi kebakaran, sensor jarak LED, dan prototipe engineering.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl text-sm font-semibold border border-violet-500/30 text-violet-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                      Simulasi Kebakaran IoT
                    </span>
                    <span className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl text-sm font-semibold border border-violet-500/30 text-violet-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                      Sensor Jarak LED
                    </span>
                    <span className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl text-sm font-semibold border border-violet-500/30 text-violet-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                      Engineering Mini Project
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 bg-slate-950/80 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll delay={100}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
                Mahakarya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 animate-text-shimmer">Proyek</span>
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto text-xl font-light">
                Eksibisi karya yang mencakup pengembangan sistem, arsitektur perangkat keras cerdas, dan rancangan antarmuka premium.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, idx) => {
              const [isHovered, setIsHovered] = useState(false);
              const [showPreview, setShowPreview] = useState(false);
              const hoverTimeoutRef = useRef(null);
              
              const handleMouseEnter = () => {
                setIsHovered(true);
                if (project.previewUrl || project.link) {
                  hoverTimeoutRef.current = setTimeout(() => {
                    setShowPreview(true);
                  }, 500);
                }
              };
              
              const handleMouseLeave = () => {
                setIsHovered(false);
                setShowPreview(false);
                if (hoverTimeoutRef.current) {
                  clearTimeout(hoverTimeoutRef.current);
                }
              };
              
              return (
                <RevealOnScroll key={project.title} delay={200 + idx * 100} direction="up">
                  <div
                    className={`group relative bg-slate-900/50 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col hover:-translate-y-4 transition-all duration-500 h-full ${
                      glowClass[project.glow]
                    }`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => project.link && window.open(project.link, '_blank')}
                    style={{ cursor: project.link ? 'pointer' : 'default' }}
                  >
                    {/* Preview Iframe Popup - Larger Size */}
                    {showPreview && (project.previewUrl || project.link) && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(100%+20px)] z-50 w-[400px] h-[280px] rounded-2xl overflow-hidden border-2 border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] animate-fade-in">
                        <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5">
                          <span className="text-xs text-white/80 font-medium truncate max-w-[280px]">{project.title}</span>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        <iframe
                          src={project.previewUrl || project.link}
                          className="w-full h-full bg-slate-950"
                          sandbox="allow-scripts allow-same-origin"
                          loading="lazy"
                          title={`Preview ${project.title}`}
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-950/90 to-transparent"></div>
                      </div>
                    )}
                    
                    {/* Click hint for projects with link */}
                    {isHovered && project.link && (
                      <div className="absolute top-4 right-4 z-20 bg-sky-500/20 backdrop-blur-sm border border-sky-500/30 rounded-full p-2 animate-pulse">
                        <Icon name="external-link" className="h-5 w-5 text-sky-400" />
                      </div>
                    )}
                    
                    <div className="h-64 bg-slate-950 relative overflow-hidden flex justify-center items-center border-b border-white/5">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent mix-blend-overlay group-hover:opacity-100 transition-opacity duration-500"></div>
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <Icon name={project.icon} className="h-[90px] w-[90px] text-slate-700 group-hover:text-white group-hover:scale-125 transition-all duration-700 relative z-10 drop-shadow-2xl" />
                      )}
                    </div>
                    <div className="p-10 flex-grow flex flex-col">
                      <div className="flex items-center gap-3 mb-5">
                        <span className={`w-3 h-3 rounded-full ${dotClass[project.glow].split(" ")[0]} ${dotClass[project.glow].split(" ")[1]}`}></span>
                        <span className={`text-sm font-bold uppercase tracking-widest ${dotClass[project.glow].split(" ")[2]}`}>{project.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                      <p className="text-slate-400 mb-8 flex-grow leading-relaxed font-light text-lg">{project.description}</p>
                      <div className="flex flex-wrap gap-3 mt-auto">
                        {project.tags.map((tag) => (
                          <span key={tag} className={`px-4 py-2 text-sm font-semibold border rounded-xl ${dotClass[project.glow].split(" ").slice(2).join(" ")}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-24 relative z-10 border-y border-white/5 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll delay={100}>
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Lisensi & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Sertifikasi</span>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-5">
            {certifications.map((cert, idx) => (
              <RevealOnScroll key={`${cert.issuer}-${cert.title}`} delay={150 + idx * 60} direction={idx % 2 === 0 ? "right" : "left"}>
                <article className="rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl p-6 hover:border-cyan-400/40 transition-colors">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{cert.issuer}</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{cert.title}</h3>
                  <p className="mt-2 text-slate-400 text-sm">Diterbitkan {cert.date}</p>
                  <p className="mt-3 text-slate-300 text-sm break-all">ID: {cert.id}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#020408] pt-32 pb-12 border-t border-white/5 relative z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/20 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 mb-24 items-center">
            <RevealOnScroll delay={100} direction="right">
              <div>
                <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">
                  Mari Menciptakan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Karya!</span>
                </h2>
                <p className="text-slate-400 mb-12 max-w-lg text-xl font-light leading-relaxed">
                  Terbuka untuk kolaborasi proyek game development, arsitektur kurikulum, dan eksplorasi teknologi pendidikan terbaru.
                </p>
                <div className="flex space-x-6">
                  <a href={`mailto:${contact.mail}`} className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:bg-blue-600 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-500 hover:-translate-y-2 group">
                    <Icon name="mail" className="h-7 w-7 text-slate-300 group-hover:text-white transition-colors" />
                  </a>
                  <a href={contact.linkedin} target="_blank" rel="noreferrer" className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:bg-blue-600 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-500 hover:-translate-y-2 group">
                    <Icon name="linkedin" className="h-7 w-7 text-slate-300 group-hover:text-white transition-colors" />
                  </a>
                  <a href={contact.github} target="_blank" rel="noreferrer" className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:bg-slate-700 hover:border-slate-500 hover:shadow-[0_0_30px_rgba(100,116,139,0.5)] transition-all duration-500 hover:-translate-y-2 group">
                    <Icon name="github" className="h-7 w-7 text-slate-300 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200} direction="left">
              <div className="bg-slate-900/40 backdrop-blur-2xl p-12 rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 blur-2xl"></div>
                <h3 className="text-2xl font-bold mb-10 text-white flex items-center gap-4">
                  <span className="w-12 h-px bg-slate-600"></span>
                  Minat & Dimensi Ekstra
                </h3>
                <ul className="space-y-8 relative z-10">
                  <li className="flex items-start group">
                    <div className="bg-slate-950/50 border border-white/10 p-4 rounded-2xl mr-6 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300 shadow-inner">
                      <Icon name="cloud" className="h-7 w-7 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-2">Music Production</h4>
                      <p className="text-lg text-slate-400 font-light leading-relaxed">Eksplorasi audio menggunakan Ableton Live 12 Lite dan MIDI controller.</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="bg-slate-950/50 border border-white/10 p-4 rounded-2xl mr-6 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-300 shadow-inner">
                      <Icon name="briefcase" className="h-7 w-7 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-2">Analisis Instrumen Keuangan</h4>
                      <p className="text-lg text-slate-400 font-light leading-relaxed">Analisis teknikal pada instrumen komoditas seperti Silver dan Gold.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 font-medium">
            <p>&copy; {new Date().getFullYear()} Andi. Pendidik & Kreator Digital.</p>
            <p className="mt-4 md:mt-0 flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              Ditenagai oleh
              <Icon name="heart" className="h-4 w-4 text-emerald-500 animate-pulse" />
              React & Tailwind
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
