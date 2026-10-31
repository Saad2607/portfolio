import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLayerGroup, FaLightbulb, FaCogs } from "react-icons/fa";

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container (Glassmorphism Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-3xl max-h-[88dvh] overflow-y-auto rounded-3xl glass-card border border-white/15 shadow-2xl p-6 sm:p-8 md:p-10 text-left z-10 text-slate-100"
          >
            {/* Top subtle highlight */}
            <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-2.5 rounded-xl glass-pill text-slate-300 hover:text-white transition z-20"
            >
              <FaTimes className="text-sm sm:text-base" />
            </button>

            {/* Header / Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-medium bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1.5 break-words pr-8">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-indigo-600 dark:text-indigo-400 font-medium text-xs sm:text-base mb-5">
                {project.subtitle}
              </p>
            )}

            {/* Description */}
            <div className="mb-5 sm:mb-6">
              <h4 className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
                <FaLayerGroup className="text-indigo-600 dark:text-indigo-400" /> Project Overview
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem Solved */}
            {project.problemSolved && (
              <div className="mb-5 sm:mb-6 p-4 rounded-xl sm:rounded-2xl bg-amber-500/10 dark:bg-slate-950/60 border border-amber-500/20 dark:border-white/10">
                <h4 className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5 flex items-center gap-2">
                  <FaLightbulb className="text-amber-600 dark:text-amber-400" /> Challenge & Solution
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>
            )}

            {/* Key Features */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-5 sm:mb-6">
                <h4 className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-600 dark:text-emerald-400" /> Key Architectural Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {project.highlights.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <FaCheckCircle className="text-emerald-600 dark:text-emerald-400 text-xs shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Details */}
            {project.architecture && (
              <div className="mb-5 sm:mb-6">
                <h4 className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
                  <FaCogs className="text-indigo-600 dark:text-indigo-400" /> Technical Architecture
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed p-3.5 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 font-mono">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Tech Stack Badges (Raycast Keycaps) */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="raycast-keycap text-[10px] sm:text-[11px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-4 border-t border-slate-200/80 dark:border-white/10">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/90 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-white/10 transition-all text-center"
                >
                  <FaGithub className="text-base" />
                  <span>View Repository</span>
                </a>
              )}

              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 transition-all text-center"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span>Launch Live Demo</span>
                </a>
              )}

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 transition sm:ml-auto text-center"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
