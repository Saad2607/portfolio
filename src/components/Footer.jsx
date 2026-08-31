import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8 text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand info */}
        <div className="text-center md:text-left">
          <a href="#home" className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
            <span>{personalInfo.name}</span>
            <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 font-mono">
              Full-Stack
            </span>
          </a>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 max-w-sm">
            Engineering scalable web apps, clean REST APIs, and responsive mobile interfaces.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-lg">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-white hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-white dark:border-slate-800 transition shadow-sm dark:shadow-none"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-white hover:bg-slate-200 text-slate-600 hover:text-blue-600 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-blue-400 dark:border-slate-800 transition shadow-sm dark:shadow-none"
          >
            <FaLinkedin />
          </a>
          <a
            href={personalInfo.social.email}
            aria-label="Email"
            className="p-2.5 rounded-xl bg-white hover:bg-slate-200 text-slate-600 hover:text-rose-600 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-rose-400 dark:border-slate-800 transition shadow-sm dark:shadow-none"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Back to top & copyright */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-500">
          <span>© {new Date().getFullYear()} Saad. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-white dark:border-slate-800 transition flex items-center gap-1 shadow-sm dark:shadow-none"
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
