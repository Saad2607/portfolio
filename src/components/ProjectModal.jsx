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
            className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-3xl max-h-[88dvh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-2xl p-4 sm:p-8 text-left z-10 text-slate-900 dark:text-slate-100"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-400 dark:hover:text-white transition z-20"
            >
              <FaTimes className="text-sm sm:text-base" />
            </button>

            {/* Header / Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3 pr-10">
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-500/30">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30">
                  {project.badge}
                </span>
              )}
              {project.year && (
                <span className="px-2 py-0.5 rounded text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {project.year}
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2 break-words pr-8">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-base mb-4 sm:mb-6">
                {project.subtitle}
              </p>
            )}

            {/* Description */}
            <div className="mb-4 sm:mb-6">
              <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                <FaLayerGroup className="text-blue-600 dark:text-blue-400" /> Project Overview
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem Solved */}
            {project.problemSolved && (
              <div className="mb-4 sm:mb-6 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-500/10 dark:bg-slate-950/60 border border-amber-500/20 dark:border-slate-800">
                <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                  <FaLightbulb className="text-amber-600 dark:text-amber-400" /> Problem It Solves
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>
            )}

            {/* Key Features */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-4 sm:mb-6">
                <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                  <FaCheckCircle className="text-emerald-600 dark:text-emerald-400" /> Key Features & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {project.highlights.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <FaCheckCircle className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Details */}
            {project.architecture && (
              <div className="mb-4 sm:mb-6">
                <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                  <FaCogs className="text-purple-600 dark:text-purple-400" /> Technical Architecture
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-[11px] sm:text-sm leading-relaxed p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 font-mono">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 sm:mb-3">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-800">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700 transition transform hover:-translate-y-0.5 text-center"
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
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition transform hover:-translate-y-0.5 text-center"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span>Launch Live Demo</span>
                </a>
              )}

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition sm:ml-auto text-center"
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
