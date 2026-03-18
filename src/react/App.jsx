import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18.3.1";
import { profile, navigation, skills, teachingFocus, projects, portfolioItems, insights, certifications, contact } from "../data/portfolioData.js";
import NavBar from "./components/NavBar.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import CertificationsSection from "./sections/CertificationsSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import HomeSection from "./sections/HomeSection.jsx";
import InsightsSection from "./sections/InsightsSection.jsx";
import PortfolioSection from "./sections/PortfolioSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import SkillsSection from "./sections/SkillsSection.jsx";
import TeachingSection from "./sections/TeachingSection.jsx";

export default function App() {
  const [activeMenu, setActiveMenu] = useState("home");

  const sectionIds = useMemo(
    () => ["home", "about", "skills", "teaching", "projects", "portfolio", "insights", "certifications", "contact"],
    []
  );

  const scrollToSection = (id) => {
    setActiveMenu(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveMenu(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-rise").forEach((el) => revealObserver.observe(el));

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
    };
  }, [sectionIds]);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-sky-300 selection:text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_5%,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(45,212,191,0.14),transparent_32%),linear-gradient(160deg,#020617_0%,#0f172a_48%,#020617_100%)]"></div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[length:36px_36px]"></div>

      <NavBar navigation={navigation} activeMenu={activeMenu} onSelect={scrollToSection} />

      <main>
        <HomeSection profile={profile} onSelect={scrollToSection} />
        <AboutSection profile={profile} />
        <SkillsSection skills={skills} />
        <TeachingSection teachingFocus={teachingFocus} />
        <ProjectsSection projects={projects} />
        <PortfolioSection portfolioItems={portfolioItems} />
        <InsightsSection insights={insights} />
        <CertificationsSection certifications={certifications} />
        <ContactSection contact={contact} />
      </main>
    </div>
  );
}
