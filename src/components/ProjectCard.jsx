import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project, onSelectProject }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 shadow-sm dark:shadow-none transition-all duration-300 group text-left"
    >
      <div>
        {/* Card Header: Category & Year */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
            {project.category}
          </span>
          {project.year && (
            <span className="text-xs font-mono text-slate-500">{project.year}</span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition mb-1.5">
          {project.title}
        </h3>

        {/* Subtitle */}
        {project.subtitle && (
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3 line-clamp-1">
            {project.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Key Features */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-1.5 mb-5">
            {project.highlights.slice(0, 3).map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                <FaCheckCircle className="text-blue-600 dark:text-blue-500 text-[10px] shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800/90 dark:text-slate-300 px-2.5 py-0.5 rounded-md dark:border-slate-700/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] font-mono text-slate-500 px-1 py-0.5">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-3">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} repository`}
                className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
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
                className="flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition"
              >
                <FaExternalLinkAlt className="text-xs" />
                <span>Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={() => onSelectProject(project)}
            className="flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition ml-auto"
          >
            <span>Overview</span>
            <FaArrowRight className="text-[10px]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
