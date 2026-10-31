import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function AppContent() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#060813] text-slate-100 selection:bg-indigo-500 selection:text-white overflow-x-hidden font-sans">
      
      {/* ==========================================================
          VIBRANT AMBIENT GLOW ORBS & MESH (GLASS REFRACTION LAYER)
          ========================================================== */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Subtle Spatial Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />

        {/* Top Center Ambient Cone */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(99,102,241,0.25),transparent_70%)]" />

        {/* Top-Right Vibrant Indigo Orb */}
        <div className="absolute -top-[10%] -right-[10%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-indigo-600/25 blur-[160px] rounded-full" />
        
        {/* Top-Left Cyan Orb */}
        <div className="absolute top-[12%] -left-[15%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-cyan-500/20 blur-[150px] rounded-full" />
        
        {/* Middle-Right Purple / Fuchsia Orb */}
        <div className="absolute top-[42%] -right-[15%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-purple-600/20 blur-[160px] rounded-full" />

        {/* Middle-Left Electric Blue Orb */}
        <div className="absolute top-[65%] -left-[12%] w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-blue-600/20 blur-[150px] rounded-full" />
        
        {/* Bottom-Right Emerald Glow Orb */}
        <div className="absolute bottom-[5%] -right-[10%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-emerald-500/15 blur-[150px] rounded-full" />
      </div>

      {/* Main Glassmorphism Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. About Me Section */}
          <About />

          {/* 3. Skills & Technologies Section */}
          <Skills />

          {/* 4. Featured Projects Showcase */}
          <Projects onSelectProject={handleSelectProject} />

          {/* 5. Experience & Milestones */}
          <Experience />

          {/* 6. Contact Me Section */}
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
