import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaFileAlt, 
  FaReact, 
  FaNodeJs 
} from "react-icons/fa";
import { SiMongodb, SiFlutter, SiElectron } from "react-icons/si";
import { FiArrowRight, FiDownload, FiCheckCircle } from "react-icons/fi";
import { personalInfo } from "../data/personalInfo";

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Greeting, Headline, Role & CTAs (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Status Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill text-xs font-medium text-slate-700 dark:text-slate-200"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Stack &amp; Software Roles</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-medium text-indigo-600 dark:text-indigo-400">
                Hi there, I&apos;m
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                {personalInfo.name}
              </h1>
              
              {/* Animated Typewriter Title */}
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 min-h-[38px] flex items-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
                  <TypeAnimation
                    sequence={[
                      "Full-Stack Developer (MERN)",
                      1800,
                      "React & Node.js Specialist",
                      1800,
                      "Cross-Platform Flutter & Electron Dev",
                      1800,
                      "RESTful API & Database Architect",
                      1800,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              {personalInfo.tagline} Experienced in building production web applications, desktop ecosystems, and mobile apps with clean architecture, robust APIs, and polished user experiences.
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white glass-button-primary shadow-lg transition active:scale-95 group"
              >
                <span>View My Work</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-100 glass-button-secondary transition active:scale-95"
              >
                <FaEnvelope className="text-indigo-500 text-xs" />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.resume.downloadUrl}
                download={personalInfo.resume.filename}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 glass-button-secondary transition active:scale-95"
              >
                <FiDownload className="text-indigo-500" />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Social Icons Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 pt-2"
            >
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mr-1">
                Find me on:
              </span>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-pill text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition hover:scale-105"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-pill text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4 text-blue-500" />
              </a>
              <a
                href={personalInfo.social.email}
                className="p-2.5 rounded-xl glass-pill text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition hover:scale-105"
                aria-label="Send Email"
              >
                <FaEnvelope className="w-4 h-4 text-rose-500" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Glassmorphism Profile Showcase Card (Col 8-12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Backlight Behind Card */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-75 -z-10" />

            {/* Central Glass Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6 text-left relative overflow-hidden">
              
              {/* Header inside glass card */}
              <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-0.5 shadow-md">
                    <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center font-bold text-lg text-indigo-600 dark:text-indigo-400">
                      MS
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {personalInfo.shortName} Shaikh
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Full-Stack Systems Engineer
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>

              {/* Core Skill Pills */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Primary Tech Stack:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl glass-pill text-slate-700 dark:text-slate-200">
                    <FaReact className="text-[#61DAFB] text-base" />
                    <span>React.js</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl glass-pill text-slate-700 dark:text-slate-200">
                    <FaNodeJs className="text-[#68A063] text-base" />
                    <span>Node &amp; Express</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl glass-pill text-slate-700 dark:text-slate-200">
                    <SiMongodb className="text-[#47A248] text-base" />
                    <span>MongoDB Atlas</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl glass-pill text-slate-700 dark:text-slate-200">
                    <SiElectron className="text-[#47848F] text-base" />
                    <span>Electron Desktop</span>
                  </div>
                </div>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/40 dark:bg-white/[0.03] border border-white/60 dark:border-white/10 text-center">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">9+</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Public Projects</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/40 dark:bg-white/[0.03] border border-white/60 dark:border-white/10 text-center">
                  <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">100%</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Production Ready</div>
                </div>
              </div>

              {/* Bottom Feature Checkmarks */}
              <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-500 shrink-0" />
                  <span>Cross-Device Cloud &amp; Desktop Ecosystems</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-500 shrink-0" />
                  <span>Role-Based JWT Security &amp; Performant APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-500 shrink-0" />
                  <span>Tenup Software Mobile Internship Experience</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
