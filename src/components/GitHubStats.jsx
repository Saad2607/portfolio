import { FaGithub, FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";

const pinnedRepos = [
  {
    name: "FileBridge",
    description: "Personal cloud storage ecosystem built with MERN and Electron.",
    language: "JavaScript / Electron",
    langColor: "bg-yellow-400",
    url: "https://github.com/Saad2607/FileBridge"
  },
  {
    name: "E-Commerce",
    description: "Full-stack MERN e-commerce platform with admin dashboard and Cloudinary pipeline.",
    language: "JavaScript / MERN",
    langColor: "bg-blue-400",
    url: "https://github.com/Saad2607/E-Commerce"
  },
  {
    name: "Blood-bank-management-system",
    description: "Healthcare inventory & donor matching platform for emergency blood request triage.",
    language: "JavaScript",
    langColor: "bg-red-400",
    url: "https://github.com/Saad2607/Blood-bank-management-system"
  },
  {
    name: "TransitOps-Smart-Transport-Operations-Platform",
    description: "Smart transit operations and fleet logistics management platform.",
    language: "JavaScript / React",
    langColor: "bg-cyan-400",
    url: "https://github.com/Saad2607/TransitOps-Smart-Transport-Operations-Platform"
  },
  {
    name: "odoo-cafe-pos",
    description: "High-speed Point of Sale (POS) system for cafe and restaurant operations.",
    language: "TypeScript",
    langColor: "bg-blue-500",
    url: "https://github.com/Saad2607/odoo-cafe-pos"
  },
  {
    name: "cake-shop-app",
    description: "Cross-platform Flutter & Dart mobile shopping app for custom bakery orders.",
    language: "Flutter / Dart",
    langColor: "bg-emerald-400",
    url: "https://github.com/Saad2607/cake-shop-app"
  }
];

const GitHubStats = () => {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-8 md:p-10 text-left shadow-md dark:shadow-xl">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4 pb-5 sm:pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-white text-xl sm:text-2xl border border-slate-200 dark:border-slate-700 shadow-sm shrink-0">
            <FaGithub />
          </div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="truncate">Saad2607</span>
              <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 font-mono font-medium shrink-0">
                Active
              </span>
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono truncate">
              github.com/Saad2607 • Full-Stack Developer
            </p>
          </div>
        </div>

        <a
          href={personalInfo.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700 transition shadow-sm text-center"
        >
          <FaExternalLinkAlt className="text-xs" />
          <span>Visit GitHub Profile</span>
        </a>
      </div>

      {/* Language Breakdown */}
      <div className="my-5 sm:my-6">
        <div className="flex justify-between items-center text-[11px] sm:text-xs font-mono text-slate-600 dark:text-slate-400 mb-2">
          <span>Primary Code Distribution</span>
          <span className="text-slate-500">MERN Stack & Mobile</span>
        </div>
        <div className="w-full h-2 sm:h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
          <div className="w-[52%] h-full bg-yellow-400" title="JavaScript (52%)"></div>
          <div className="w-[24%] h-full bg-blue-500" title="React / TypeScript (24%)"></div>
          <div className="w-[14%] h-full bg-cyan-400" title="Flutter / Dart (14%)"></div>
          <div className="w-[10%] h-full bg-emerald-500" title="CSS / HTML (10%)"></div>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-4 mt-3 text-[11px] sm:text-xs font-mono text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400 shrink-0"></span>
            <span className="truncate">JavaScript</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-500 shrink-0"></span>
            <span className="truncate">React & Node</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 shrink-0"></span>
            <span className="truncate">Flutter & Dart</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
            <span className="truncate">HTML / CSS</span>
          </span>
        </div>
      </div>

      {/* Pinned Repositories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-5 sm:mt-6">
        {pinnedRepos.map((repo, i) => (
          <a
            key={i}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 sm:p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-300 dark:bg-slate-950/60 dark:hover:bg-slate-950 dark:border-slate-800 dark:hover:border-slate-700 transition group flex flex-col justify-between shadow-sm dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between text-blue-600 dark:text-blue-400 font-mono text-xs sm:text-sm font-semibold mb-1 sm:mb-1.5 group-hover:text-blue-700 dark:group-hover:text-blue-300 gap-2">
                <span className="flex items-center gap-1.5 sm:gap-2 truncate">
                  <FaBookOpen className="text-slate-400 dark:text-slate-500 text-xs shrink-0" />
                  <span className="truncate">{repo.name}</span>
                </span>
                <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition shrink-0" />
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-2.5 sm:mb-3">
                {repo.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span className={`w-2 h-2 rounded-full ${repo.langColor} shrink-0`}></span>
              <span>{repo.language}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GitHubStats;
