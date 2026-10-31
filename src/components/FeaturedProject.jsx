import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";

// Visual interactive mockups for the top 3 projects
const ProjectVisual = ({ project }) => {
  if (project.id === "filebridge") {
    return (
      <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] bg-slate-950 p-3.5 sm:p-5 rounded-2xl border border-white/10 flex flex-col justify-between overflow-hidden group shadow-md text-left">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/15 blur-3xl rounded-full pointer-events-none"></div>

        {/* Mockup Header */}
        <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-800/80 gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            <span className="ml-1 sm:ml-2 text-[11px] sm:text-xs font-mono text-slate-400 truncate">FileBridge Desktop & Cloud</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shrink-0">
            Electron + React
          </span>
        </div>

        {/* Mockup File Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 my-3 sm:my-4">
          <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-1.5 sm:mb-2 text-xs sm:text-sm font-bold">
              PDF
            </div>
            <div className="text-[11px] sm:text-xs font-medium text-white truncate">Architecture_Doc.pdf</div>
            <div className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5 sm:mt-1">2.4 MB • Encrypted</div>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-1.5 sm:mb-2 text-xs sm:text-sm font-bold">
              ZIP
            </div>
            <div className="text-[11px] sm:text-xs font-medium text-white truncate">Asset_Bundle_v2.zip</div>
            <div className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5 sm:mt-1">48.1 MB • Synced</div>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition col-span-2 sm:col-span-1">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-1.5 sm:mb-2 text-xs sm:text-sm font-bold">
              DB
            </div>
            <div className="text-[11px] sm:text-xs font-medium text-white truncate">MongoDB_Dump.bson</div>
            <div className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5 sm:mt-1">12.8 MB • Vault</div>
          </div>
        </div>

        {/* Mockup Storage Meter */}
        <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800/80">
          <div className="flex justify-between text-[10px] sm:text-xs mb-1 sm:mb-1.5 font-mono">
            <span className="text-slate-400">Vault Capacity Utilized</span>
            <span className="text-indigo-400 font-bold">14.2 GB / 25 GB</span>
          </div>
          <div className="w-full h-1.5 sm:h-2 rounded-full bg-slate-800 overflow-hidden">
            <div className="w-[56%] h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-400 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === "ecommerce") {
    return (
      <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] bg-slate-950 p-3.5 sm:p-5 rounded-2xl border border-white/10 flex flex-col justify-between overflow-hidden group shadow-md text-left">
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/15 blur-3xl rounded-full pointer-events-none"></div>

        {/* Mockup Header */}
        <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-800/80 gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            <span className="ml-1 sm:ml-2 text-[11px] sm:text-xs font-mono text-slate-400 truncate">QuickKart Admin Hub</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
            MERN Stack
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 my-2.5 sm:my-3">
          <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono">Live Inventory</div>
            <div className="text-base sm:text-lg font-bold text-white mt-0.5 sm:mt-1">428 SKUs</div>
            <div className="text-[9px] sm:text-[10px] text-emerald-400 mt-0.5">✓ Auto-sync DB</div>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono">Cart Completion</div>
            <div className="text-base sm:text-lg font-bold text-indigo-400 mt-0.5 sm:mt-1">99.8%</div>
            <div className="text-[9px] sm:text-[10px] text-indigo-300 mt-0.5">JWT Auth</div>
          </div>
        </div>

        {/* Cloudinary & CDN Pill */}
        <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[10px] sm:text-xs font-mono">
          <span className="text-slate-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
            Cloudinary Media Pipeline
          </span>
          <span className="text-purple-400 font-medium">CDN Active</span>
        </div>
      </div>
    );
  }

  // Pulse Point Visual
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] bg-slate-950 p-3.5 sm:p-5 rounded-2xl border border-white/10 flex flex-col justify-between overflow-hidden group shadow-md text-left">
      <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/15 blur-3xl rounded-full pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-slate-800/80 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
          <span className="ml-1 sm:ml-2 text-[11px] sm:text-xs font-mono text-slate-400 truncate">PulsePoint Dispatch</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 shrink-0">
          Hospital Hub
        </span>
      </div>

      {/* Blood Group Indicators */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-2.5 sm:my-3">
        {["A+", "O+", "B+", "AB+"].map((type, i) => (
          <div key={i} className="p-2 sm:p-2.5 text-center rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="text-xs sm:text-sm font-bold text-rose-400">{type}</div>
            <div className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5">Available</div>
          </div>
        ))}
      </div>

      {/* Triage Alert */}
      <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-rose-950/30 border border-rose-800/40 text-[10px] sm:text-xs font-mono">
        <span className="text-rose-300 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
          Matching Engine Active
        </span>
        <span className="text-rose-400 font-bold">Real-Time</span>
      </div>
    </div>
  );
};

const FeaturedProject = ({ project, index, onSelectProject }) => {
  const isEven = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full"
    >
      <SpotlightCard className="p-5 sm:p-8 md:p-10 group">
        <div className={`grid lg:grid-cols-12 gap-6 sm:gap-8 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
          
          {/* Visual Mockup Container (5 cols) */}
          <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"} w-full`}>
            <div className="relative group-hover:scale-[1.015] transition-transform duration-300 w-full">
              <ProjectVisual project={project} />
            </div>
          </div>

          {/* Content Container (7 cols) */}
          <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"} text-left w-full`}>
            {/* Eyebrow & Number */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] sm:text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">
                  PRJ // {project.number}
                </span>
                {project.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20">
                    {project.badge}
                  </span>
                )}
              </div>
              {project.stats?.status && (
                <span className="text-[10px] sm:text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  {project.stats.status}
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition mb-1 sm:mb-2 break-words">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5">
              {project.description}
            </p>

            {/* Key Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5 sm:mb-6">
              {project.highlights.slice(0, 4).map((highlight, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <FaCheckCircle className="text-indigo-600 dark:text-indigo-400 text-xs shrink-0" />
                  <span className="truncate">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills (Raycast Keycaps) */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
              {project.technologies.map((tech, i) => (
                <span key={i} className="raycast-keycap text-[10px] sm:text-[11px]">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 text-center"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>Live Demo</span>
                </a>
              )}

              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/90 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-white dark:border-white/10 transition-all transform hover:-translate-y-0.5 text-center"
                >
                  <FaGithub className="text-sm" />
                  <span>Source Code</span>
                </a>
              )}

              <button
                onClick={() => onSelectProject(project)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-indigo-400 dark:hover:bg-white/5 transition sm:ml-auto text-center"
              >
                <FaInfoCircle className="text-sm" />
                <span>Technical Specs</span>
              </button>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default FeaturedProject;
