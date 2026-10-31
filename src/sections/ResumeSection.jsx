import { motion } from "framer-motion";
import { FaFilePdf, FaFileDownload, FaExternalLinkAlt, FaCheck, FaCode, FaBriefcase } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import SpotlightCard from "../components/SpotlightCard";
import { personalInfo } from "../data/personalInfo";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 w-full overflow-hidden">
      <SectionHeading
        badge="RECRUITER OVERVIEW"
        title="Resume &"
        highlight="Credentials"
        subtitle="Looking for a dedicated Full-Stack & Mobile Developer? Here's my summary."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <SpotlightCard className="p-6 sm:p-10 md:p-12 text-left w-full relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left summary details (7 cols) */}
            <div className="lg:col-span-7 space-y-6 w-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
                  Official Curriculum Vitae
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2 break-words">
                  {personalInfo.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 font-mono">
                  Full-Stack Software Engineer • MERN Stack & Mobile Specialist
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 dark:bg-[#070a12]/80 dark:border-white/10 shadow-sm dark:shadow-none">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold mb-1">
                    <FaCode /> Core Specialization
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    React.js, Node.js, Express.js, MongoDB, Flutter & Firebase
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 dark:bg-[#070a12]/80 dark:border-white/10 shadow-sm dark:shadow-none">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold mb-1">
                    <FaBriefcase /> Practical Experience
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    Android Developer Intern @ Tenup Software + 9+ Full-Stack & Mobile Projects
                  </div>
                </div>
              </div>

              {/* Quick Checklist */}
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <FaCheck className="text-indigo-600 dark:text-indigo-400 text-xs shrink-0 mt-0.5" />
                  <span>Immediate availability for Full-Time, Internship, and Contract roles</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheck className="text-indigo-600 dark:text-indigo-400 text-xs shrink-0 mt-0.5" />
                  <span>Proficient with Git collaboration, RESTful APIs, and responsive design systems</span>
                </div>
              </div>
            </div>

            {/* Right Action Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-slate-50/80 border border-slate-200/90 dark:bg-[#070a12]/90 dark:border-white/10 text-center shadow-sm dark:shadow-none w-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-2xl sm:text-3xl mb-4">
                <FaFilePdf />
              </div>

              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                Resume / CV (PDF)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono">
                Updated • PDF Format
              </p>

              <div className="w-full space-y-3">
                <a
                  href={personalInfo.resume.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>View Resume in Browser</span>
                </a>

                <a
                  href={personalInfo.resume.downloadUrl}
                  download={personalInfo.resume.filename}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-medium text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/90 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:border-white/10 transition-all transform hover:-translate-y-0.5 shadow-sm dark:shadow-none"
                >
                  <FaFileDownload className="text-xs text-indigo-600 dark:text-indigo-400" />
                  <span>Download PDF File</span>
                </a>
              </div>
            </div>

          </div>
        </SpotlightCard>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
