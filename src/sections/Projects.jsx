import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiSearch, 
  FiGithub, 
  FiExternalLink, 
  FiLayers, 
  FiCheckCircle, 
  FiMaximize2 
} from "react-icons/fi";
import { projectsData } from "../data/projectsData";

export default function Projects({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const mernIds = ["filebridge", "ecommerce", "pulse-point", "peoplepay360", "transit-ops"];
  const mobileDesktopIds = ["filebridge", "cake-shop-app"];
  const enterpriseIds = ["traveloop", "odoo-cafe-pos", "interior-design"];

  const categories = [
    { id: "all", name: "All Projects", count: projectsData.length },
    { id: "mern", name: "Full-Stack MERN", count: projectsData.filter((p) => mernIds.includes(p.id)).length },
    { id: "mobile-desktop", name: "Mobile & Desktop", count: projectsData.filter((p) => mobileDesktopIds.includes(p.id)).length },
    { id: "enterprise", name: "Enterprise & Other", count: projectsData.filter((p) => enterpriseIds.includes(p.id)).length }
  ];

  const filterProjects = (project) => {
    // Category check
    let matchesCat = true;
    if (selectedCategory === "mern") {
      matchesCat = mernIds.includes(project.id);
    } else if (selectedCategory === "mobile-desktop") {
      matchesCat = mobileDesktopIds.includes(project.id);
    } else if (selectedCategory === "enterprise") {
      matchesCat = enterpriseIds.includes(project.id);
    }

    if (!matchesCat) return false;

    // Search query check
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.technologies.some((t) => t.toLowerCase().includes(q))
    );
  };

  const filteredProjects = projectsData.filter(filterProjects);

  return (
    <section id="projects" className="py-20 sm:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            <span>Portfolio Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Strictly showcasing the 9 public GitHub repositories authored by me at{" "}
            <a 
              href="https://github.com/Saad2607" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-mono"
            >
              github.com/Saad2607
            </a>.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center gap-2 ${
                    isSelected
                      ? "glass-button-primary text-white shadow-sm"
                      : "glass-pill text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="w-full sm:w-72 relative">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by tech or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm glass-pill text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>

        </div>

        {/* Projects Grid (Glassmorphism Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <div className="glass-card glass-card-interactive p-6 sm:p-7 rounded-3xl flex flex-col justify-between h-full group">
                  
                  <div className="space-y-4">
                    
                    {/* Card Top: Number, Badge, Action Icons */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                        // {project.number}
                      </span>
                      
                      <div className="flex items-center gap-1.5">
                        {project.badge && (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                            {project.badge}
                          </span>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg glass-pill text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
                          title="View GitHub Repository"
                        >
                          <FiGithub className="w-3.5 h-3.5" />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg glass-pill text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition"
                            title="Launch Live Demo"
                          >
                            <FiExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 
                        onClick={() => onSelectProject(project)}
                        className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Capability Checkmark */}
                    {project.highlights?.[0] && (
                      <div className="p-2.5 rounded-xl bg-white/40 dark:bg-white/[0.02] border border-white/50 dark:border-white/5 flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <FiCheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{project.highlights[0]}</span>
                      </div>
                    )}

                  </div>

                  {/* Card Bottom: Tech Stack & Actions */}
                  <div className="pt-6 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-md glass-pill text-[10px] font-medium text-slate-600 dark:text-slate-300">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[10px] text-slate-400 font-mono px-1 self-center">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs font-semibold">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition flex items-center gap-1.5"
                      >
                        <FiMaximize2 className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </button>

                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          GitHub Repo
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
