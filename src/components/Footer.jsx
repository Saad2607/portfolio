import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-10 px-4 sm:px-6 lg:px-8 relative border-t border-white/20 dark:border-white/10 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-left">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-extrabold text-base text-slate-900 dark:text-white">
              {personalInfo.name}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border border-indigo-500/20">
              Full-Stack Developer
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm">
            Building modern, high-performance web and mobile software with the MERN stack &amp; Flutter.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2.5">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl glass-pill text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl glass-pill text-slate-600 hover:text-blue-500 dark:text-slate-300 dark:hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href={personalInfo.social.email}
            aria-label="Send Email"
            className="p-2.5 rounded-xl glass-pill text-slate-600 hover:text-rose-500 dark:text-slate-300 dark:hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <span>© {new Date().getFullYear()} {personalInfo.shortName}.dev</span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="p-2.5 rounded-xl glass-pill text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition flex items-center gap-1 shadow-sm"
            title="Back to Top"
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>

      </div>
    </footer>
  );
}
