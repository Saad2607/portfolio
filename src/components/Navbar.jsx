import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaFileDownload, FaFileAlt } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Featured", href: "#featured" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active state
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-900/5 dark:shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-base shadow-md shadow-blue-500/20 group-hover:scale-105 transition">
            S
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-blue-500 transition">
              {personalInfo.shortName}
              <span className="text-blue-500">.dev</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 leading-none">
              Full-Stack Eng
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-none">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 dark:text-white font-semibold"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-blue-500/10 border border-blue-500/30 dark:bg-blue-600/25 dark:border-blue-500/40 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-white dark:bg-slate-900/60 transition"
          >
            <FaGithub className="text-base" />
          </a>

          <a
            href={personalInfo.resume.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 transition transform hover:-translate-y-0.5"
          >
            <FaFileAlt className="text-xs" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Button & Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2.5 rounded-xl border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white dark:bg-slate-900/80 transition"
          >
            {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-2xl px-6 py-6 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-600/20 dark:text-blue-400 dark:border-blue-500/30"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium bg-slate-100 border border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300"
                >
                  <FaGithub className="text-sm" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.resume.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium bg-blue-600 text-white"
                >
                  <FaFileDownload className="text-xs" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;