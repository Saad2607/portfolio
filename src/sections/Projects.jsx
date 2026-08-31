import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import GitHubStats from "../components/GitHubStats";
import { projectsData, projectCategories } from "../data/projectsData";

const Projects = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading
        badge="COMPLETE REPERTORY"
        title="All"
        highlight="Projects & Work"
        subtitle="Explore my complete catalog of full-stack systems, client solutions, and mobile apps."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {projectCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 dark:border-slate-800/80 shadow-sm dark:shadow-none"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub Activity & Repositories */}
      <div className="pt-8">
        <div className="text-center mb-8">
          <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-2">
            OPEN SOURCE & VERSION CONTROL
          </span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            GitHub & Coding Activity
          </h3>
        </div>
        <GitHubStats />
      </div>
    </section>
  );
};

export default Projects;