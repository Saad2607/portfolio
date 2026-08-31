import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaInfoCircle } from "react-icons/fa";

// Visual interactive mockups for the top 3 projects to eliminate generic stock images
const ProjectVisual = ({ project }) => {
  if (project.id === "filebridge") {
    return (
      <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px] bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden group shadow-md text-left">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

        {/* Mockup Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="ml-2 text-xs font-mono text-slate-400">FileBridge Desktop & Cloud v1.8</span>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
            Electron + React
          </span>
        </div>

        {/* Mockup File Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-2 text-sm font-bold">
              PDF
            </div>
            <div className="text-xs font-medium text-white truncate">Architecture_Doc.pdf</div>
            <div className="text-[10px] text-slate-500 mt-1">2.4 MB • Encrypted</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-2 text-sm font-bold">
              IMG
            </div>
            <div className="text-xs font-medium text-white truncate">Asset_Bundle_v2.zip</div>
            <div className="text-[10px] text-slate-500 mt-1">48.1 MB • Synced</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition hidden sm:block">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 text-sm font-bold">
              DB
            </div>
            <div className="text-xs font-medium text-white truncate">MongoDB_Dump.bson</div>
            <div className="text-[10px] text-slate-500 mt-1">12.8 MB • Vault</div>
          </div>
        </div>

        {/* Mockup Storage Meter */}
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80">
          <div className="flex justify-between text-xs mb-1.5 font-mono">
            <span className="text-slate-400">Vault Capacity Utilized</span>
            <span className="text-blue-400 font-bold">14.2 GB / 25 GB</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div className="w-[56%] h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === "ecommerce") {
    return (
      <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px] bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden group shadow-md text-left">
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>

        {/* Mockup Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="ml-2 text-xs font-mono text-slate-400">QuickKart Admin Hub & Store</span>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30">
            MERN + Cloudinary
          </span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 my-3">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-[11px] text-slate-400 font-mono">Live Inventory Status</div>
            <div className="text-lg font-bold text-white mt-1">428 SKUs Active</div>
            <div className="text-[10px] text-emerald-400 mt-0.5">✓ Auto-sync with DB</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-[11px] text-slate-400 font-mono">Cart & Checkout Flow</div>
            <div className="text-lg font-bold text-blue-400 mt-1">99.8% Completion</div>
            <div className="text-[10px] text-blue-300 mt-0.5">JWT Secure Sessions</div>
          </div>
        </div>

        {/* Cloudinary & Dark Mode Pill */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono">
          <span className="text-slate-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            Cloudinary Media Pipeline
          </span>
          <span className="text-purple-400">Optimized CDN</span>
        </div>
      </div>
    );
  }

  // Pulse Point Visual
  return (
    <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px] bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden group shadow-md text-left">
      <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span className="ml-2 text-xs font-mono text-slate-400">PulsePoint Medical Dispatch</span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30">
          Emergency Hospital Hub
        </span>
      </div>

      {/* Blood Group Indicators */}
      <div className="grid grid-cols-4 gap-2 my-3">
        {["A+", "O+", "B+", "AB+"].map((type, i) => (
          <div key={i} className="p-2.5 text-center rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="text-xs font-bold text-rose-400">{type}</div>
            <div className="text-[10px] text-slate-400 mt-1">Available</div>
          </div>
        ))}
      </div>

      {/* Triage Alert */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-rose-950/30 border border-rose-800/40 text-xs font-mono">
        <span className="text-rose-300 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
          Donor Matching Engine Active
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-white/90 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-slate-700 transition-all duration-300 backdrop-blur-xl shadow-md dark:shadow-xl group"
    >
      <div className={`grid lg:grid-cols-12 gap-8 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
        
        {/* Visual Mockup Container (5 cols) */}
        <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative group-hover:scale-[1.02] transition-transform duration-300">
            <ProjectVisual project={project} />
          </div>
        </div>

        {/* Content Container (7 cols) */}
        <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"} text-left`}>
          {/* Eyebrow & Number */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 tracking-wider">
                FEATURED PROJECT // {project.number}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
                  {project.badge}
                </span>
              )}
            </div>
            {project.year && (
              <span className="text-xs font-mono text-slate-500">{project.year}</span>
            )}
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition mb-2">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-4">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Key Feature Bullets */}
          <div className="grid sm:grid-cols-2 gap-2 mb-6">
            {project.highlights.slice(0, 4).map((highlight, i) => (
              <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <FaCheckCircle className="text-blue-600 dark:text-blue-500 text-xs shrink-0" />
                <span className="truncate">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800/80 dark:text-slate-300 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition transform hover:-translate-y-0.5"
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
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700 transition transform hover:-translate-y-0.5 shadow-sm dark:shadow-none"
              >
                <FaGithub className="text-sm" />
                <span>Source Code</span>
              </a>
            )}

            <button
              onClick={() => onSelectProject(project)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800/60 transition ml-auto"
            >
              <FaInfoCircle className="text-sm" />
              <span>Technical Specs</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
