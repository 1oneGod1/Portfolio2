export const profile = {
  name: "Andi",
  photo: "assets/img/profile-andi.png",
  role: "Computer Science Teacher / Technology Educator",
  tagline: "Educator in 3D Modeling, Game Development, and Emerging Technologies",
  semester: "Mahasiswa semester 4 menuju semester 5",
  availability: "Tersedia untuk kolaborasi pendidikan, workshop, dan proyek teknologi.",
  heroDescription:
    "Saya mengajar teknologi secara praktis untuk siswa kelas 7-12, melalui proyek nyata seperti game development, simulasi 3D, IoT, dan digital product design, termasuk integrasi beragam AI tools untuk mempercepat alur kerja.",
  vision:
    "Menjadi ahli dan pengajar (lecturer/expert) di bidang 3D modeling dan game development, serta berkontribusi dalam pendidikan teknologi digital.",
  aboutParagraphs: [
    "Saya adalah seorang guru Computer Science dengan pengalaman di 3D modeling, pengembangan game menggunakan Unity (C#), dan front-end web development. Saya berfokus membangun pembelajaran yang relevan dengan kebutuhan industri dan masa depan digital.",
    "Selain mengajar, saya terus mengeksplorasi teknologi modern seperti cloud computing, quantum computing, dan blockchain. Saya juga mengerjakan integrasi AI pada seluruh proyek untuk mempercepat eksekusi dan iterasi, termasuk menggunakan GitHub Copilot, Claude, dan tools AI lainnya. Bagi saya, teknologi terbaik adalah teknologi yang membuat proses belajar lebih jelas, menyenangkan, dan berdampak nyata.",
  ],
  strengths: [
    "Tulus dalam bekerja dan peduli terhadap siswa",
    "Mampu menyesuaikan metode belajar berdasarkan tingkat pemahaman siswa",
    "Berorientasi pada hasil, kolaborasi, dan pertumbuhan berkelanjutan",
  ],
};

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "teaching", label: "Teaching" },
  { id: "projects", label: "Projects" },
  { id: "portfolio", label: "Portfolio" },
  { id: "insights", label: "Insights" },
  { id: "certifications", label: "Sertifikasi" },
  { id: "contact", label: "Contact" },
];

export const skills = [
  {
    title: "Game Development",
    icon: "gamepad-2",
    items: ["Unity Engine", "C# (Game Development)", "2D Game Design", "Game Logic Programming", "Interactive Simulation"],
  },
  {
    title: "3D Design",
    icon: "box",
    items: ["Blender", "3D Modeling", "Game Asset Creation", "3D Animation Foundation"],
  },
  {
    title: "Programming & Web",
    icon: "code-2",
    items: [
      "Laravel / HTML, CSS, JavaScript (Web)",
      "Golang (Backend)",
      "Flutter",
      "C++ (Learning for IoT/Robotics)",
      "C# (Game Development)",
    ],
  },
  {
    title: "IoT & Electronics",
    icon: "cpu",
    items: ["Arduino", "Embedded Systems", "Microcontrollers", "Sensor Prototyping", "Hardware Debugging"],
  },
  {
    title: "Technology Knowledge",
    icon: "cloud",
    items: ["Arduino & IoT", "Cloud Architecture", "Cloud Computing", "Network Architecture (Cisco Packet Tracer)"],
  },
  {
    title: "Teaching & Education",
    icon: "book-open",
    items: [
      "STEM Project Design",
      "Technology Curriculum Development",
      "Student Project Mentoring",
      "Educational Technology Integration",
      "Mengajar Arsitektur Jaringan dengan Cisco Packet Tracer",
      "Project-Based Learning",
    ],
  },
];

export const teachingFocus = [
  {
    title: "Game Development",
    icon: "gamepad-2",
    description:
      "Membimbing siswa membangun game dari konsep, logika program, interaksi gameplay, hingga presentasi hasil proyek menggunakan Unity dan C#.",
  },
  {
    title: "3D Modeling",
    icon: "box",
    description:
      "Mengajarkan desain 3D berbasis kebutuhan proyek, termasuk pembuatan aset, optimasi model, dan integrasi model untuk game atau simulasi.",
  },
  {
    title: "STEM & Practical Technology",
    icon: "lightbulb",
    description:
      "Pembelajaran berbasis project-based learning, experimentation, dan problem solving melalui simulasi sensor, sistem peringatan dini, dan prototipe engineering sederhana.",
  },
];

export const projects = [
  {
    category: "Web & Networking",
    title: "Aplikasi Manajemen Laboratorium Komputer",
    description:
      "Aplikasi jaringan lokal untuk sekolah dengan fitur login siswa, pelaporan kondisi perangkat keras, screen sharing, dan remote control oleh guru.",
    icon: "server",
    tags: ["PHP", "JavaScript", "Local Network", "Lab Management"],
  },
  {
    category: "STEM Education",
    title: "Archipelago Resilience Project",
    description:
      "Proyek Design Thinking siswa kelas 9: perancangan simulasi bencana dan purwarupa sistem peringatan dini berbasis Arduino.",
    icon: "globe",
    tags: ["Arduino", "Design Thinking", "Simulation", "Collaboration"],
  },
  {
    category: "UI/UX & Systems",
    title: "Sistem Penjualan Ritel Digital",
    description:
      "Ekosistem penjualan berbasis tablet terhubung Chromecast untuk menampilkan katalog ke TV secara dinamis, dengan fokus pada kemudahan penggunaan.",
    icon: "smartphone",
    tags: ["UI/UX", "Figma", "Wireless System", "Retail Tech"],
  },
];

export const portfolioItems = [
  {
    title: "3D Models",
    icon: "cubes",
    text: "Kumpulan model 3D dan aset visual untuk kebutuhan pembelajaran, simulasi, serta eksperimen game environment.",
  },
  {
    title: "Game Projects",
    icon: "joystick",
    text: "Project game edukatif berbasis Unity yang berfokus pada logika, interaksi, dan kreativitas siswa.",
  },
  {
    title: "Teaching Materials",
    icon: "graduation-cap",
    text: "Perangkat ajar, modul proyek, dan lembar asesmen untuk pembelajaran Computer Science tingkat SMP-SMA.",
  },
];

export const insights = [
  {
    title: "Mengajar Game Dev untuk Pemula",
    description: "Strategi merancang pembelajaran Unity agar siswa cepat memahami logika game dan iterasi desain.",
  },
  {
    title: "Cloud Computing untuk Pendidikan",
    description: "Mengapa cloud penting untuk efisiensi biaya, deployment, dan skalabilitas sistem belajar digital.",
  },
  {
    title: "Quantum-Cloud Hybrid Systems",
    description: "Catatan eksplorasi tentang masa depan integrasi komputasi kuantum dengan infrastruktur cloud modern.",
  },
];

export const certifications = [
  {
    issuer: "Udemy",
    title: "Arduino For Beginners 2026 Complete Course",
    date: "Jan 2026",
    id: "UC-2726ef05-c28d-4ed1-83b3-3ca9ffc2617d",
  },
  {
    issuer: "Cisco",
    title: "Networking Basics",
    date: "Mar 2025",
    id: "-",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Introduction to Cybersecurity",
    date: "Feb 2025",
    id: "-",
  },
  {
    issuer: "Devata Studio",
    title: "Blender 3D Generalist",
    date: "Des 2024",
    id: "DVT.0174",
  },
  {
    issuer: "Coding Studio",
    title: "Fundamental Front-End Web I",
    date: "Des 2024",
    id: "B8amwoomY6",
  },
  {
    issuer: "Dicoding Academy",
    title: "Belajar Dasar Pemrograman Web",
    date: "Des 2024",
    id: "GRX5413QRP0M",
  },
  {
    issuer: "GameDev.tv",
    title: "Complete C# Unity Game Developer 2D",
    date: "Okt 2024",
    id: "UC-63e485fc-5b7b-4ce0-89e8-47655b38667c",
  },
  {
    issuer: "Coding Studio",
    title: "Fundamental Python",
    date: "Sep 2024",
    id: "qCSHi8gXeM",
  },
  {
    issuer: "Coding Studio",
    title: "Fundamental Jaringan Komputer",
    date: "Sep 2024",
    id: "p2o8ZzBi0c",
  },
  {
    issuer: "MySkill",
    title: "ARTIFICIAL INTELLIGENCE INTRODUCTION",
    date: "Agu 2024",
    id: "MS-25/8/2024-p6WalqvQwD22wd6CHEvB",
  },
  {
    issuer: "Universitas Ciputra Surabaya",
    title: "Society Transformation Through AI",
    date: "Mei 2024",
    id: "0067/UC-DLMP/CA/V/2024",
  },
  {
    issuer: "Sekolah Dian Harapan",
    title: "Online Moodle Training for Teachers",
    date: "Agu 2023",
    id: "-",
  },
];

export const contact = {
  description:
    "Terbuka untuk kolaborasi dengan sekolah, universitas, institusi pendidikan, komunitas teknologi, maupun partner inovasi pembelajaran.",
  email: "pandapotanandi@gmail.com",
  linkedin: "https://www.linkedin.com/in/andi-pandapotan-p-74b32a119/",
  github: "https://github.com/1oneGod1",
};
