import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaFileDownload } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";
import TerminalVisual from "../components/TerminalVisual";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none opacity-40 dark:opacity-60"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Bio & CTAs (7 cols on lg) */}
        <div className="lg:col-span-7 text-left space-y-6">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
              {personalInfo.status}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-sm sm:text-base font-mono text-blue-600 dark:text-blue-400 font-semibold block mb-2">
              Hello World, I'm
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
              {personalInfo.name}
            </h1>
          </motion.div>

          {/* Typewriter Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 min-h-[40px] flex items-center"
          >
            <span className="text-slate-400 dark:text-slate-500 mr-2">&gt;</span>
            <TypeAnimation
              sequence={[
                "Full-Stack Developer (MERN Stack).",
                2200,
                "Architecting scalable web applications.",
                2200,
                "Building cross-platform Flutter mobile apps.",
                2200,
                "Designing robust REST APIs & database systems.",
                2200,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-500 bg-clip-text text-transparent font-semibold"
            />
          </motion.div>

          {/* Concise Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
          >
            Specialized in engineering full-stack web and mobile applications with <strong>React.js</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Flutter</strong>. Focused on clean software architecture, intuitive UI/UX, and high performance.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              href="#featured"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition transform hover:-translate-y-0.5"
            >
              <span>Explore Featured Work</span>
              <FaArrowRight className="text-xs" />
            </a>

            <a
              href={personalInfo.resume.downloadUrl}
              download
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-sm dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:text-slate-200 dark:border-slate-700 transition transform hover:-translate-y-0.5"
            >
              <FaFileDownload className="text-xs text-blue-500 dark:text-blue-400" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-900/60 transition"
            >
              <span>Get In Touch</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-lg text-slate-500 dark:text-slate-400"
          >
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Connect:</span>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-slate-900 dark:hover:text-white transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href={personalInfo.social.email}
              aria-label="Send Email"
              className="hover:text-rose-600 dark:hover:text-rose-400 transition transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Interactive Terminal Widget (5 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center w-full"
        >
          <TerminalVisual />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;