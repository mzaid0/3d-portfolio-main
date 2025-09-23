// app/page.tsx or components/UltraModernPortfolio.tsx
"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
const LoadingScreen = dynamic(() => import("@/components/loading-screen"), {
  ssr: false,
});
import ProjectShowcase from "@/components/project-showcase";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import type { Project } from "@/types";

const DynamicCanvas = dynamic(
  () =>
    import("@/components/3d/UltraModernCanvas").then(
      (mod) => mod.UltraModernCanvas
    ),
  { ssr: false }
);

export default function UltraModernPortfolio() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  const handleLoadingComplete = () => setIsLoading(false);
  const handleProjectSelect = (project: Project) => {
    if (project) {
      setSelectedProject(project);
      setIsProjectOpen(true);
    }
  };
  const handleProjectClose = () => {
    setIsProjectOpen(false);
    setSelectedProject(null);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative min-h-screen bg-black"
        style={{ cursor: "auto" }}
      >
        {/* ✅ Dynamically loaded 3D Canvas to prevent SSR errors */}
        <div className="fixed inset-0 z-0">
          <DynamicCanvas />
        </div>

        <div className="fixed inset-0 z-0 bg-gradient-to-br from-white/5 via-transparent to-black/80" />

        {/* Navigation */}
        <Navigation
          isDark={isDark}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setIsDark={setIsDark}
          activeSection="hero"
        />

        {/* Sections */}
        <div className="relative z-10">
          <HeroSection isDark={isDark} />
          <AboutSection isDark={isDark} />
          <SkillsSection isDark={isDark} />
          <ProjectsSection
            isDark={isDark}
            onProjectSelect={handleProjectSelect}
          />
          <ServicesSection isDark={isDark} />
          <ContactSection isDark={isDark} />

          {/* Footer */}
          <footer className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-black/90 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="text-3xl font-black text-white tracking-wide">
                  ZAID — FULL-STACK VISIONARY
                </div>
                <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  Built with React.js, Next.js, Supabase, Docker, Redis, and
                  TypeScript. Featuring projects like{" "}
                  <span className="font-semibold">CareSync</span> &{" "}
                  <span className="font-semibold">Skylance AI</span>.
                </p>
                <p className="text-white/50 italic">
                  Engineering impactful digital experiences — one scalable
                  system at a time.
                </p>

                <div className="flex justify-center space-x-4 mt-8">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </footer>
        </div>

        <ProjectShowcase
          project={selectedProject}
          isOpen={isProjectOpen}
          onClose={handleProjectClose}
          isDark={isDark}
        />
      </motion.div>
    </>
  );
}
