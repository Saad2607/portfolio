import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";

const ProjectCard = ({ project, onSelectProject }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="w-full h-full"
    >
      <SpotlightCard className="p-5 sm:p-6 md:p-7 flex flex-col justify-between h-full group text-left">
        <div>
          {/* Card Header: Category & Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20">
              {project.category}
            </span>
            {project.badge && (
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                {project.badge}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition mb-1 sm:mb-1.5 break-words">
            {project.title}
          </h3>

          {/* Subtitle */}
          {project.subtitle && (
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3 line-clamp-1">
              {project.subtitle}
            </p>
          )}

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Key Features */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-1.5 mb-5">
              {project.highlights.slice(0, 3).map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <FaCheckCircle className="text-indigo-600 dark:text-indigo-400 text-[10px] shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {/* Tech Stack Keycaps (Raycast style) */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span key={i} className="raycast-keycap text-[10px]">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 px-1 py-0.5">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-3.5 border-t border-slate-200/80 dark:border-white/10">
            <div className="flex items-center gap-3">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} repository`}
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
                >
                  <FaGithub className="text-sm" />
                  <span>Code</span>
                </a>
              )}

              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live demo`}
                  className="flex items-center gap-1.5 text-xs font-mono text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={() => onSelectProject(project)}
              className="flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition ml-auto"
            >
              <span>Specs</span>
              <FaArrowRight className="text-[10px]" />
            </button>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default ProjectCard;
