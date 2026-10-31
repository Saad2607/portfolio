import { FaGithub, FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";
import SpotlightCard from "./SpotlightCard";

const pinnedRepos = [
  {
    name: "FileBridge",
    description: "Personal cloud storage ecosystem built with MERN and Electron.",
    language: "JavaScript / Electron",
    langColor: "bg-yellow-400",
    url: "https://github.com/Saad2607/FileBridge"
  },
  {
    name: "PeoplePay360-HR-Payroll",
    description: "Enterprise MERN workforce, attendance tracking, and payroll execution engine.",
    language: "JavaScript / MERN",
    langColor: "bg-emerald-400",
    url: "https://github.com/Saad2607/PeoplePay360-HR-Payroll"
  },
  {
    name: "E-Commerce",
    description: "Full-stack MERN e-commerce platform with admin dashboard and Cloudinary pipeline.",
    language: "JavaScript / MERN",
    langColor: "bg-indigo-400",
    url: "https://github.com/Saad2607/E-Commerce"
  },
  {
    name: "Blood-bank-management-system",
    description: "Healthcare inventory & donor matching platform for emergency blood request triage.",
    language: "JavaScript",
    langColor: "bg-rose-400",
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
    name: "cake-shop-app",
    description: "Full-stack bakery mobile shopping app with Flutter, Node.js, and MongoDB.",
    language: "Flutter / Dart",
    langColor: "bg-purple-400",
    url: "https://github.com/Saad2607/cake-shop-app"
  }
];

const GitHubStats = () => {
  return (
    <div className="w-full max-w-5xl mx-auto text-left">
      <SpotlightCard className="p-5 sm:p-8 md:p-10">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4 pb-5 sm:pb-6 border-b border-slate-200/80 dark:border-white/10">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xl sm:text-2xl border border-indigo-200 dark:border-indigo-500/20 shadow-sm shrink-0">
              <FaGithub />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="truncate">Saad2607</span>
                <span className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 font-mono font-medium shrink-0">
                  Active
                </span>
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono truncate">
                github.com/Saad2607 • Full-Stack Engineer
              </p>
            </div>
          </div>

          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/90 dark:bg-[#0c101d] dark:hover:bg-slate-800 dark:text-white dark:border-white/10 transition shadow-sm text-center"
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
          <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
            <div className="w-[52%] h-full bg-yellow-400" title="JavaScript (52%)"></div>
            <div className="w-[24%] h-full bg-indigo-500" title="React / TypeScript (24%)"></div>
            <div className="w-[14%] h-full bg-cyan-400" title="Flutter / Dart (14%)"></div>
            <div className="w-[10%] h-full bg-emerald-500" title="CSS / HTML (10%)"></div>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-4 mt-3 text-[11px] sm:text-xs font-mono text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0"></span>
              <span className="truncate">JavaScript</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></span>
              <span className="truncate">React & Node</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>
              <span className="truncate">Flutter & Dart</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
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
              className="p-4 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-indigo-400 dark:bg-[#070a12]/70 dark:hover:bg-[#0c101d] dark:border-white/10 dark:hover:border-indigo-500/40 transition-all duration-200 group flex flex-col justify-between shadow-sm dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 font-mono text-xs sm:text-sm font-semibold mb-1.5 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 gap-2">
                  <span className="flex items-center gap-1.5 sm:gap-2 truncate">
                    <FaBookOpen className="text-slate-400 dark:text-slate-500 text-xs shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </span>
                  <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition shrink-0" />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-3">
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
      </SpotlightCard>
    </div>
  );
};

export default GitHubStats;
