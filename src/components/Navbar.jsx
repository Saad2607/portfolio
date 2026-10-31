import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaFileAlt } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#060813]/75 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/40"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 group focus:outline-none shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-base shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            S
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {personalInfo.shortName}
              <span className="text-indigo-600 dark:text-indigo-400">.dev</span>
            </span>
            <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-none">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Frosted Glass Pill) */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-indigo-600 dark:text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeGlassNav"
                    className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: GitHub, Resume & Theme */}
        <div className="flex items-center gap-2.5">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl glass-pill text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition hover:scale-105"
          >
            <FaGithub className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.resume.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white glass-button-primary transition active:scale-95 shadow-sm"
          >
            <FaFileAlt className="w-3 h-3" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl glass-pill text-slate-700 dark:text-slate-200 transition"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-4 p-4 rounded-2xl glass-card space-y-2 border border-white/20 dark:border-white/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  activeSection === link.href.substring(1)
                    ? "bg-indigo-600 text-white"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 border-t border-slate-200 dark:border-white/10">
              <a
                href={personalInfo.resume.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white glass-button-primary"
              >
                <FaFileAlt className="w-3 h-3" />
                <span>View Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
