import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import FeaturedWork from "./sections/FeaturedWork";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import ResumeSection from "./sections/ResumeSection";
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
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-300 overflow-x-hidden">
      
      {/* Subtle Background Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/10 blur-[140px] rounded-full"></div>
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-600/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-600/10 blur-[140px] rounded-full"></div>
      </div>

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <FeaturedWork onSelectProject={handleSelectProject} />
          <Projects onSelectProject={handleSelectProject} />
          <Experience />
          <ResumeSection />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Project Deep-Dive Case Study Modal */}
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