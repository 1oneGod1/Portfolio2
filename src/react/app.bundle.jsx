const { useEffect, useMemo, useRef, useState } = React;

const profile = {
  name: "Andi",
  photo: "assets/img/profile-andi.png",
  role: "Pendidik & Dev",
  heroDescription:
    "Mengubah kompleksitas teknologi masa depan menjadi pengalaman belajar interaktif melalui pembuatan game, simulasi 3D, inovasi nyata, serta integrasi beragam AI tools untuk mempercepat eksekusi proyek.",
  about: [
    "Sebagai pendidik Ilmu Komputer dan mahasiswa, saya menjembatani teori akademis dengan praktik industri. Fokus saya adalah menginspirasi siswa kelas 7-12 untuk menjadi pencipta dunia digital.",
    "Saya mengusung empati, adaptabilitas, dan pendekatan project-based learning. Saya mengintegrasikan AI di seluruh siklus proyek untuk iterasi cepat menggunakan GitHub Copilot, Claude, dan tools AI lainnya.",
  ],
};

const skillModules = [
  {
    code: "01",
    title: "GAME_DEV & 3D",
    accent: "emerald",
    items: ["Unity Engine", "C# Scripts", "Blender (3D)", "2D Design", "Game Logic"],
  },
  {
    code: "02",
    title: "SYS_PROGRAMMING",
    accent: "cyan",
    items: ["Laravel / PHP", "HTML/CSS/JS", "Golang", "Flutter", "C++ (IoT)"],
  },
  {
    code: "03",
    title: "EMERGING_TECH",
    accent: "purple",
    items: ["Arduino & IoT", "Cloud Arch.", "Network Arch.", "Packet Tracer"],
  },
];

const projectDirs = [
  {
    dir: "/personal_projects",
    accent: "emerald",
    projects: [
      {
        title: "AkuBisa! LMS",
        label: "EdTech",
        accent: "emerald",
        description: "Platform LMS hybrid Laravel Backend + Firebase Frontend. Mendukung portal interaktif siswa dan dashboard instruktur.",
        tags: ["Laravel", "PHP 8", "Firebase"],
        link: "https://akubisa.onrender.com",
      },
      {
        title: "Aplikasi Buku Nilai",
        label: "Web",
        accent: "cyan",
        description: "Aplikasi kelola nilai siswa real-time dengan Firebase. Fitur CRUD, email verifikasi, ekspor Excel, dan admin panel.",
        tags: ["Firebase", "JavaScript", "Tailwind"],
        link: "https://nilai-informatika.web.app",
      },
      {
        title: "Manajemen Lab",
        label: "Network",
        accent: "purple",
        description: "Platform LAN untuk login siswa, laporan hardware, screen sharing real-time, dan remote control instruktur.",
        tags: ["PHP/JS", "Network Arch"],
      },
    ],
  },
  {
    dir: "/student_showcase",
    accent: "cyan",
    projects: [
      {
        title: "Archipelago Resilience",
        label: "STEM IoT",
        accent: "orange",
        description: "Inisiatif Design Thinking siswa kelas 9 menghasilkan purwarupa peringatan dini bencana berbasis Arduino dan sensor spasial.",
        tags: ["Arduino", "Sensors"],
      },
      {
        title: "Smart Home: Fire Sim",
        label: "Prototyping",
        accent: "yellow",
        description: "Desain simulasi respons kebakaran menggunakan LED, sensor jarak, dan logic gate sederhana hasil karya tim siswa.",
        tags: ["IoT Logic", "Hardware"],
      },
      {
        title: "Math Labyrinth 2D",
        label: "Unity Game",
        accent: "pink",
        description: "Game edukasi 2D buatan siswa menggunakan C# di Unity Engine, memadukan soal matematika dan navigasi level.",
        tags: ["Unity", "C#", "Game Logic"],
      },
    ],
  },
];

const certifications = [
  { issuer: "Udemy", title: "Arduino For Beginners 2026", id: "UC-2726ef...", accent: "emerald" },
  { issuer: "Cisco", title: "Networking Basics", id: "Mar 2025", accent: "cyan" },
  { issuer: "Cisco NetAcad", title: "Introduction to Cybersecurity", id: "Feb 2025", accent: "cyan" },
  { issuer: "Devata Studio", title: "Blender 3D Generalist", id: "DVT.0174", accent: "orange" },
  { issuer: "GameDev.tv", title: "Complete C# Unity 2D", id: "UC-63e48...", accent: "purple" },
  { issuer: "Dicoding", title: "Dasar Pemrograman Web", id: "GRX5413...", accent: "blue" },
];

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "Profil" },
  { id: "skills", label: "Skill_DB" },
  { id: "projects", label: "Project_Log" },
  { id: "contact", label: "Ping" },
];

const accentClass = {
  emerald: {
    border: "border-emerald-500/30 hover:border-emerald-400",
    text: "text-emerald-400",
    chip: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    tag: "text-emerald-500",
  },
  cyan: {
    border: "border-cyan-500/30 hover:border-cyan-400",
    text: "text-cyan-400",
    chip: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    tag: "text-cyan-500",
  },
  purple: {
    border: "border-purple-500/30 hover:border-purple-400",
    text: "text-purple-400",
    chip: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    tag: "text-purple-500",
  },
  orange: {
    border: "border-orange-500/30 hover:border-orange-400",
    text: "text-orange-400",
    chip: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    tag: "text-orange-500",
  },
  yellow: {
    border: "border-yellow-500/30 hover:border-yellow-400",
    text: "text-yellow-400",
    chip: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    tag: "text-yellow-500",
  },
  pink: {
    border: "border-pink-500/30 hover:border-pink-400",
    text: "text-pink-400",
    chip: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    tag: "text-pink-500",
  },
  blue: {
    border: "border-blue-500/30 hover:border-blue-400",
    text: "text-blue-400",
    chip: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    tag: "text-blue-500",
  },
};

const themeCss = `
  :root {
    --neon-green: #00ff88;
    --neon-cyan: #00e5ff;
    --neon-purple: #b026ff;
    --neon-orange: #ff8c00;
    --neon-alert: #ff2a2a;
    --dark-bg: #020305;
  }

  body {
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: var(--dark-bg);
    color: #e0e0e0;
  }

  .anime-font { font-family: 'M PLUS Rounded 1c', sans-serif; }
  .font-mono { font-family: 'Fira Code', monospace; }

  .scanlines {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.3) 50%),
      linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.04));
    background-size: 100% 4px, 3px 100%;
    z-index: 9999;
    pointer-events: none;
    opacity: 0.7;
  }

  .screen-vignette {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle, rgba(0,0,0,0) 50%, rgba(0,0,0,0.85) 100%);
    z-index: 9998;
    pointer-events: none;
    animation: flicker 0.2s infinite;
  }

  @keyframes flicker {
    0% { opacity: 0.95; }
    50% { opacity: 1; }
    100% { opacity: 0.95; }
  }

  .hud-text {
    font-size: 0.65rem;
    color: var(--neon-green);
    opacity: 0.8;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: 'Fira Code', monospace;
  }

  .mecha-panel {
    background: rgba(3, 15, 10, 0.75);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 255, 136, 0.25);
    clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);
    position: relative;
    transition: all 0.3s ease;
  }

  .mecha-panel::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--neon-green);
    box-shadow: 0 0 15px var(--neon-green);
  }

  .mecha-panel:hover {
    transform: translateY(-4px);
    border-color: var(--neon-green);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.15);
  }

  .mecha-btn {
    background: rgba(0, 255, 136, 0.1);
    border: 1px solid var(--neon-green);
    color: var(--neon-green);
    clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    position: relative;
    overflow: hidden;
  }

  .mecha-btn:hover {
    background: var(--neon-green);
    color: #000;
    box-shadow: 0 0 20px var(--neon-green);
  }

  .project-card {
    position: relative;
    overflow: hidden;
  }

  .project-card::after {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 200%;
    height: 50%;
    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.1), rgba(255,255,255,0));
    transform: rotate(45deg);
    transition: top 0.6s ease-in-out, left 0.6s ease-in-out;
    pointer-events: none;
    z-index: 10;
  }

  .project-card:hover::after {
    top: 200%;
    left: 200%;
  }

  .glitch {
    position: relative;
    color: white;
    display: inline-block;
  }

  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark-bg);
    overflow: hidden;
  }

  .glitch::before {
    left: 2px;
    text-shadow: -2px 0 var(--neon-alert);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }

  .glitch::after {
    left: -2px;
    text-shadow: -2px 0 var(--neon-cyan);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }

  @keyframes glitch-anim {
    0% { clip: rect(10px, 9999px, 86px, 0); }
    5% { clip: rect(61px, 9999px, 6px, 0); }
    10% { clip: rect(31px, 9999px, 93px, 0); }
    15% { clip: rect(87px, 9999px, 14px, 0); }
    20% { clip: rect(11px, 9999px, 88px, 0); }
    25% { clip: rect(54px, 9999px, 32px, 0); }
    30% { clip: rect(98px, 9999px, 4px, 0); }
    35% { clip: rect(1px, 9999px, 76px, 0); }
    40% { clip: rect(33px, 9999px, 43px, 0); }
    45% { clip: rect(92px, 9999px, 67px, 0); }
    50% { clip: rect(72px, 9999px, 54px, 0); }
    100% { clip: rect(72px, 9999px, 54px, 0); }
  }

  @keyframes glitch-anim2 {
    0% { clip: rect(65px, 9999px, 100px, 0); }
    5% { clip: rect(5px, 9999px, 74px, 0); }
    10% { clip: rect(43px, 9999px, 33px, 0); }
    15% { clip: rect(76px, 9999px, 10px, 0); }
    20% { clip: rect(22px, 9999px, 85px, 0); }
    25% { clip: rect(88px, 9999px, 45px, 0); }
    30% { clip: rect(12px, 9999px, 66px, 0); }
    35% { clip: rect(55px, 9999px, 2px, 0); }
    40% { clip: rect(99px, 9999px, 55px, 0); }
    45% { clip: rect(34px, 9999px, 87px, 0); }
    50% { clip: rect(21px, 9999px, 12px, 0); }
    100% { clip: rect(21px, 9999px, 12px, 0); }
  }

  .blinking-cursor {
    display: inline-block;
    width: 12px;
    height: 1.2em;
    background-color: var(--neon-green);
    animation: blink 1s step-end infinite;
    vertical-align: text-bottom;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .text-glow { text-shadow: 0 0 10px rgba(0, 255, 136, 0.7); }
  .text-glow-cyan { text-shadow: 0 0 10px rgba(0, 229, 255, 0.7); }

  .clip-path-img {
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%);
  }

  .scan-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--neon-green);
    box-shadow: 0 0 15px var(--neon-green);
    animation: scan 3s ease-in-out infinite;
  }

  @keyframes scan {
    0%, 100% { top: 0; }
    50% { top: 98%; }
  }

  .hologram-img {
    filter: saturate(0) brightness(1.05) contrast(1.1) hue-rotate(145deg);
    mix-blend-mode: screen;
    opacity: 0.82;
    animation: holo-flicker 2.4s ease-in-out infinite;
  }

  .hologram-overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(0,229,255,0.2), rgba(0,255,136,0.08) 55%, rgba(0,0,0,0.35)),
      repeating-linear-gradient(180deg, rgba(0,229,255,0.2) 0px, rgba(0,229,255,0.2) 1px, rgba(0,0,0,0) 3px, rgba(0,0,0,0) 6px);
    mix-blend-mode: screen;
    pointer-events: none;
    animation: holo-drift 4.8s linear infinite;
  }

  .hologram-noise {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(0,255,255,0.25) 0.5px, transparent 0.5px);
    background-size: 2px 2px;
    opacity: 0.18;
    mix-blend-mode: soft-light;
    pointer-events: none;
    animation: holo-flicker 1.6s steps(3, end) infinite;
  }

  @keyframes holo-flicker {
    0%, 100% { opacity: 0.82; }
    25% { opacity: 0.72; }
    50% { opacity: 0.9; }
    75% { opacity: 0.77; }
  }

  @keyframes holo-drift {
    0% { transform: translateX(0); }
    50% { transform: translateX(2px); }
    100% { transform: translateX(0); }
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #000; }
  ::-webkit-scrollbar-thumb { background: var(--neon-green); border-radius: 3px; }
`;

function App() {
  const canvasRef = useRef(null);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = useMemo(() => ["home", "about", "skills", "teaching", "projects", "certifications", "contact"], []);

  const scrollToSection = (id) => {
    setActive(id);
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    if (!window.THREE || !canvasRef.current) return undefined;

    const { THREE } = window;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020305, 0.05);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 7;
    camera.position.y = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    canvasRef.current.innerHTML = "";
    canvasRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    const dirLight1 = new THREE.DirectionalLight(0x00ff88, 1.5);
    dirLight1.position.set(5, 5, 5);

    const dirLight2 = new THREE.DirectionalLight(0x00e5ff, 1);
    dirLight2.position.set(-5, -5, 2);

    const dirLight3 = new THREE.DirectionalLight(0xff0055, 0.5);
    dirLight3.position.set(0, -5, 0);

    scene.add(ambientLight, dirLight1, dirLight2, dirLight3);

    const gridHelper = new THREE.GridHelper(60, 60, 0x00ff88, 0x003311);
    gridHelper.position.y = -2.5;
    scene.add(gridHelper);

    const coreGroup = new THREE.Group();
    coreGroup.position.x = 2.5;
    scene.add(coreGroup);

    const coreGeo = new THREE.OctahedronGeometry(1.2, 0);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x002211,
      emissive: 0x00ff88,
      emissiveIntensity: 0.2,
      flatShading: true,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(core);

    const wireGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wire);

    const cubes = [];
    const cubeGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const cubeMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, wireframe: true });

    for (let i = 0; i < 5; i += 1) {
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      cube.userData = {
        angle: Math.random() * Math.PI * 2,
        radius: 2.5 + Math.random(),
        speed: 0.01 + Math.random() * 0.02,
      };
      coreGroup.add(cube);
      cubes.push(cube);
    }

    const particleCount = 800;
    const particlesGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 30;
      posArray[i + 1] = Math.random() * 20 - 10;
      posArray[i + 2] = (Math.random() - 0.5) * 15;
    }

    particlesGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00ffaa,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particleMat);
    scene.add(particlesMesh);

    let mouseX = 0;
    let mouseY = 0;
    const clock = new THREE.Clock();
    let frameId = null;

    const onMouseMove = (event) => {
      const halfX = window.innerWidth / 2;
      const halfY = window.innerHeight / 2;
      mouseX = event.clientX - halfX;
      mouseY = event.clientY - halfY;
    };

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      gridHelper.position.z = (elapsedTime * 2) % 1;

      core.rotation.y += 0.005;
      core.rotation.x += 0.005;
      wire.rotation.y -= 0.002;
      wire.rotation.z += 0.005;
      coreGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.3 + 0.5;

      cubes.forEach((cube) => {
        cube.userData.angle += cube.userData.speed;
        cube.position.x = Math.cos(cube.userData.angle) * cube.userData.radius;
        cube.position.z = Math.sin(cube.userData.angle) * cube.userData.radius;
        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
      });

      const positions = particlesMesh.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i += 1) {
        const yIndex = i * 3 + 1;
        positions[yIndex] -= 0.15;
        if (positions[yIndex] < -5) positions[yIndex] = 15;
      }
      particlesMesh.geometry.attributes.position.needsUpdate = true;

      const targetX = mouseX * 0.001;
      const targetY = mouseY * 0.001;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05 + 0.01;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio || 1);
    };

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    animate();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (frameId !== null) window.cancelAnimationFrame(frameId);

      particlesGeo.dispose();
      particleMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      cubeGeo.dispose();
      cubeMat.dispose();
      if (Array.isArray(gridHelper.material)) {
        gridHelper.material.forEach((mat) => mat.dispose());
      } else {
        gridHelper.material.dispose();
      }
      gridHelper.geometry.dispose();

      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020305] text-zinc-200 selection:bg-emerald-500 selection:text-black">
      <style dangerouslySetInnerHTML={{ __html: themeCss }} />

      <div className="scanlines"></div>
      <div className="screen-vignette"></div>

      <div className="fixed top-4 left-4 z-50 hud-text hidden md:block">SYS.COORD: 34.0522 N, 118.2437 W<br />MEM: 84% ALLOCATED</div>
      <div className="fixed top-4 right-4 z-50 hud-text text-right hidden md:block">UPLINK: SECURE<br />LATENCY: 12ms</div>
      <div className="fixed bottom-4 left-4 z-50 hud-text hidden md:block">USER: ANDI_ADMIN<br />ACCESS: GRANTED</div>
      <div className="fixed bottom-4 right-4 z-50 hud-text text-right hidden md:block border-b border-emerald-500 pb-1">
        <span className="animate-pulse text-red-500">REC</span> // 00:00:00
      </div>

      <div id="canvas-container" ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" aria-hidden="true"></div>

      <nav className="fixed top-0 z-40 w-full bg-black/60 backdrop-blur-md border-b border-emerald-500/30">
        <div className="mx-auto max-w-7xl px-5 py-3 flex items-center justify-between">
          <button className="text-left" onClick={() => scrollToSection("home")}>
            <div className="text-2xl font-bold anime-font text-emerald-400 tracking-wider flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2zM9 9h6v6H9V9z" />
              </svg>
              ANDI<span className="text-white text-sm mt-1">.SYS</span>
            </div>
          </button>

          <div className="hidden md:flex space-x-6 font-semibold text-xs uppercase tracking-widest font-mono text-gray-400">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition ${active === item.id ? "text-emerald-400 text-glow" : "hover:text-emerald-400"}`}
              >
                [ {item.label} ]
              </button>
            ))}
          </div>

          <button className="md:hidden text-emerald-500" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Open navigation menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {menuOpen ? (
          <div className="md:hidden border-t border-emerald-500/20 bg-black/90 px-5 py-3 flex flex-col gap-2 font-mono text-xs uppercase tracking-wider text-gray-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-2 px-3 border ${active === item.id ? "border-emerald-500/40 text-emerald-300" : "border-transparent hover:border-emerald-500/20"}`}
              >
                [ {item.label} ]
              </button>
            ))}
          </div>
        ) : null}
      </nav>

      <main className="relative z-10 pt-20 mix-blend-screen">
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 relative">
          <div className="text-center max-w-4xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/50 text-red-400 font-mono text-xs mb-6 mecha-panel">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              STATUS: OPEN FOR COLLAB
            </div>

            <h2 className="text-emerald-500 font-mono text-lg md:text-xl mb-2 text-glow">root@andi.sys:~# ./init_profile.sh</h2>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 anime-font uppercase tracking-tight glitch" data-text="EDUCATOR &">
              EDUCATOR &
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 anime-font text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-500 text-glow">
              GAME DEVELOPER <span className="blinking-cursor"></span>
            </h1>

            <p className="text-sm md:text-base mb-10 text-gray-400 font-mono max-w-3xl mx-auto bg-black/50 p-4 border-l-2 border-emerald-500 backdrop-blur-sm">
              &gt; {profile.heroDescription}
            </p>

            <button onClick={() => scrollToSection("projects")} className="inline-block px-8 py-3 font-bold font-mono uppercase tracking-widest mecha-btn transition-transform text-sm">
              Initiate Sequence: Portfolio_View
            </button>
          </div>

          <div className="absolute left-10 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent hidden lg:block"></div>
          <div className="absolute right-10 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent hidden lg:block"></div>
        </section>

        <section id="about" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto mecha-panel p-8 md:p-12">
            <div className="absolute top-0 right-0 p-2 hud-text bg-emerald-500/20 text-emerald-300 border-b border-l border-emerald-500/50">SECTOR_01: ABOUT</div>

            <div className="flex flex-col md:flex-row items-start gap-12 mt-4">
              <div className="w-full md:w-1/3 relative group">
                <div className="aspect-[3/4] overflow-hidden relative border border-emerald-500/50 bg-black clip-path-img">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-60 z-10 pointer-events-none"></div>
                  <div className="scan-line z-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent z-0"></div>

                  {profile.photo ? (
                    <>
                      <img src={profile.photo} alt={`Foto ${profile.name}`} className="absolute inset-0 w-full h-full object-cover object-center z-[5] hologram-img" />
                      <div className="hologram-overlay z-[6]"></div>
                      <div className="hologram-noise z-[7]"></div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-emerald-400/50 font-bold text-sm font-mono text-center px-4 z-10">
                      [VISUAL_DATA_MISSING]<br />Insert Hologram Avatar
                    </div>
                  )}
                </div>

                <div className="mt-4 border-l-2 border-emerald-500 pl-3">
                  <h2 className="text-3xl font-black anime-font text-white tracking-widest">ANDI</h2>
                  <h3 className="text-xs text-emerald-400 font-mono mt-1">&gt; ROLE: {profile.role.toUpperCase()}</h3>
                </div>
              </div>

              <div className="w-full md:w-2/3 space-y-8 font-mono">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 bg-emerald-500 inline-block"></span>
                    <h3 className="text-xl font-bold text-emerald-400 uppercase tracking-widest border-b border-emerald-500/30 pb-1">Membentuk Masa Depan Melalui Pendidikan Teknologi</h3>
                  </div>
                  {profile.about.map((item) => (
                    <p key={item} className="text-gray-300 leading-relaxed text-sm mb-3">
                      {item}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-black/50 p-5 border border-emerald-900 hover:border-emerald-500 transition relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/30 transition"></div>
                    <h4 className="text-emerald-400 font-bold mb-2 text-xs">&gt;&gt;&gt; Visi_Karir</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Menjadi ahli dan pengajar di bidang 3D modeling serta game dev, berkontribusi pada pendidikan teknologi digital terdepan.</p>
                  </div>
                  <div className="bg-black/50 p-5 border border-emerald-900 hover:border-emerald-500 transition relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/30 transition"></div>
                    <h4 className="text-emerald-400 font-bold mb-2 text-xs">&gt;&gt;&gt; Empati_&_Dedikasi</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Pendekatan mengajar yang tulus, sabar, dan berpusat pada pertumbuhan logis dan analitis siswa.</p>
                  </div>
                  <div className="bg-black/50 p-5 border border-emerald-900 hover:border-emerald-500 transition md:col-span-2 relative overflow-hidden">
                    <h4 className="text-cyan-400 font-bold mb-2 text-xs">&gt;&gt;&gt; Learning_Protocol_Active</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">Saat ini memperdalam <span className="text-white font-bold">Full Stack Flutter</span>, <span className="text-white font-bold">Backend Golang</span>, dan integrasi pembelajaran digital untuk percepatan eksekusi proyek.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black anime-font text-white tracking-widest uppercase mb-2">
              <span className="text-emerald-500">#</span> Skill_Database
            </h2>
            <p className="text-emerald-500/70 font-mono text-xs max-w-2xl mx-auto border border-emerald-900 bg-emerald-900/10 p-2">
              [LOADING MODULES...] Menampilkan parameter teknis dan arsitektur pengajaran.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillModules.map((skill) => (
              <div key={skill.title} className="mecha-panel p-6" style={skill.accent === "emerald" ? undefined : { borderColor: skill.accent === "cyan" ? "rgba(0,229,255,0.3)" : "rgba(176,38,255,0.3)" }}>
                <div className={`flex items-center gap-3 mb-4 pb-3 ${skill.accent === "emerald" ? "border-b border-emerald-800" : skill.accent === "cyan" ? "border-b border-cyan-800" : "border-b border-purple-800"}`}>
                  <span className={`text-2xl ${skill.accent === "emerald" ? "text-emerald-400" : skill.accent === "cyan" ? "text-cyan-400" : "text-purple-400"}`}>{skill.code}</span>
                  <h3 className="text-lg font-bold text-white font-mono tracking-wider">{skill.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className={`px-2 py-1 bg-black border text-xs font-mono ${
                        skill.accent === "emerald"
                          ? "border-emerald-500/50 text-emerald-300"
                          : skill.accent === "cyan"
                            ? "border-cyan-500/50 text-cyan-300"
                            : "border-purple-500/50 text-purple-300"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="teaching" className="py-20 px-6 relative bg-[linear-gradient(to_right,rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:20px_20px] border-y border-emerald-900/50 mt-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-emerald-500/50 flex-grow"></div>
              <h2 className="text-3xl font-bold font-mono tracking-widest uppercase text-emerald-400 text-glow">[ Filosofi_Pengajaran ]</h2>
              <div className="h-px bg-emerald-500/50 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative pl-6 border-l-2 border-emerald-500">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-black border-2 border-emerald-500 rotate-45"></div>
                <h3 className="text-lg font-bold text-white font-mono mb-2">Game Development</h3>
                <p className="text-xs text-gray-400 font-mono leading-relaxed">Membimbing merancang logika program, interaksi gameplay, dan eksekusi karya menggunakan Unity/C#.</p>
              </div>

              <div className="relative pl-6 border-l-2 border-cyan-500">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-black border-2 border-cyan-500 rotate-45"></div>
                <h3 className="text-lg font-bold text-white font-mono mb-2">3D Modeling</h3>
                <p className="text-xs text-gray-400 font-mono leading-relaxed">Membangun fondasi desain spasial, aset game, dan pemodelan estetis Blender untuk produksi.</p>
              </div>

              <div className="relative pl-6 border-l-2 border-purple-500">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-black border-2 border-purple-500 rotate-45"></div>
                <h3 className="text-lg font-bold text-white font-mono mb-2">STEM & Simulasi</h3>
                <p className="text-xs text-gray-400 font-mono mb-3 leading-relaxed">Kurikulum desain solusi berbasis IoT dan engineering project.</p>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-purple-300 font-mono">&gt; Simulasi Kebakaran IoT</span>
                  <span className="text-[10px] text-purple-300 font-mono">&gt; Sensor Jarak LED</span>
                  <span className="text-[10px] text-purple-300 font-mono">&gt; Engineering Prototypes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center anime-font text-white uppercase tracking-widest">
            <span className="text-cyan-500">&gt;&gt;&gt;</span> Mahakarya_Proyek
          </h2>

          {projectDirs.map((group) => (
            <div key={group.dir} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <div className={`h-px flex-grow ${group.accent === "emerald" ? "bg-emerald-500/40" : "bg-cyan-500/40"}`}></div>
                <div
                  className={`px-4 py-2 font-mono text-sm font-bold tracking-widest clip-path-img ${
                    group.accent === "emerald"
                      ? "bg-emerald-900/40 border border-emerald-500/50 text-emerald-400 text-glow"
                      : "bg-cyan-900/40 border border-cyan-500/50 text-cyan-400 text-glow-cyan"
                  }`}
                >
                  DIR: {group.dir}
                </div>
                <div className={`h-px flex-grow ${group.accent === "emerald" ? "bg-emerald-500/40" : "bg-cyan-500/40"}`}></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.projects.map((project) => {
                  const cls = accentClass[project.accent] || accentClass.emerald;
                  return (
                    <article
                      key={project.title}
                      className={`project-card bg-black/50 border p-1 transition duration-300 cursor-crosshair ${cls.border}`}
                      onClick={() => {
                        if (project.link) window.open(project.link, "_blank", "noopener,noreferrer");
                      }}
                    >
                      <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${cls.tag.replace("text", "border")}`}></div>
                      <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${cls.tag.replace("text", "border")}`}></div>
                      <div className="p-6 relative z-20 bg-black/80 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-4 gap-3">
                          <h3 className={`text-lg font-bold anime-font ${cls.text}`}>{project.title}</h3>
                          <span className={`text-[9px] font-mono px-2 py-1 uppercase border ${cls.chip}`}>{project.label}</span>
                        </div>
                        <p className="text-xs text-gray-400 mb-6 font-mono leading-relaxed flex-grow">{project.description}</p>
                        <div className={`flex flex-wrap gap-2 pt-4 mt-auto border-t ${cls.border.includes("cyan") ? "border-cyan-900/50" : cls.border.includes("purple") ? "border-purple-900/50" : cls.border.includes("orange") ? "border-orange-900/50" : cls.border.includes("yellow") ? "border-yellow-900/50" : cls.border.includes("pink") ? "border-pink-900/50" : cls.border.includes("blue") ? "border-blue-900/50" : "border-emerald-900/50"}`}>
                          {project.tags.map((tag) => (
                            <span key={tag} className={`text-[10px] font-mono ${cls.tag}`}>
                              [{tag}]
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        <section id="certifications" className="py-16 px-6 max-w-5xl mx-auto">
          <div className="bg-black/80 border border-emerald-500/40 rounded-sm overflow-hidden font-mono text-sm relative shadow-[0_0_20px_rgba(0,255,136,0.1)]">
            <div className="bg-emerald-900/30 border-b border-emerald-500/40 p-2 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500/80 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500/80 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500/80 rounded-full"></div>
              </div>
              <div className="text-xs text-emerald-400 font-bold">~/system/certifications.log</div>
              <div className="w-10"></div>
            </div>

            <div className="p-6 text-gray-300 space-y-4">
              {certifications.map((cert) => (
                <div key={`${cert.issuer}-${cert.title}`} className="flex flex-col md:flex-row md:items-center gap-2 hover:bg-emerald-900/20 p-2 transition">
                  <span className={`w-36 shrink-0 ${accentClass[cert.accent]?.text || "text-emerald-400"}`}>[{cert.issuer}]</span>
                  <span className="text-white font-bold flex-grow">{cert.title}</span>
                  <span className="text-gray-500 text-xs">{cert.id}</span>
                </div>
              ))}

              <div className="pt-4 text-emerald-400">root@andi.sys:~/certifications$ <span className="blinking-cursor"></span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-6 pb-32">
          <div className="max-w-2xl mx-auto mecha-panel p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <svg className="w-16 h-16 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h2 className="text-3xl font-black mb-4 anime-font text-white uppercase tracking-widest">Initiate_Transmission</h2>
            <p className="text-gray-400 mb-8 font-mono text-xs">
              Terbuka untuk kolaborasi proyek game, arsitektur kurikulum, dan teknologi pendidikan terbaru. Ping server untuk handshake protocol.
            </p>

            <form className="flex flex-col gap-4 text-left font-mono" onSubmit={(event) => event.preventDefault()}>
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="ID / Username" className="w-full md:w-1/2 px-4 py-3 bg-black/50 border border-emerald-500/30 text-emerald-400 focus:outline-none focus:border-emerald-500 focus:bg-emerald-900/20 transition text-sm" />
                <input type="email" placeholder="IP Address / Email" className="w-full md:w-1/2 px-4 py-3 bg-black/50 border border-emerald-500/30 text-emerald-400 focus:outline-none focus:border-emerald-500 focus:bg-emerald-900/20 transition text-sm" />
              </div>
              <textarea rows="3" placeholder="Input string data..." className="px-4 py-3 bg-black/50 border border-emerald-500/30 text-emerald-400 focus:outline-none focus:border-emerald-500 focus:bg-emerald-900/20 transition text-sm"></textarea>
              <button type="submit" className="mecha-btn py-3 mt-2 font-bold transition-colors uppercase tracking-widest text-xs">
                [ SEND_DATA_PACKET ]
              </button>
            </form>
          </div>
        </section>

        <footer className="border-t border-emerald-900 py-6 text-center text-emerald-600/50 text-xs font-mono bg-black/80">
          <p>Execution finished. © 2026 Andi.Sys - Secure Connection Established.</p>
        </footer>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
