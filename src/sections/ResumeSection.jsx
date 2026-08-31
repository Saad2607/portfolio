import { motion } from "framer-motion";
import { FaFilePdf, FaFileDownload, FaExternalLinkAlt, FaCheck, FaCode, FaBriefcase } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/personalInfo";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
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
        className="rounded-3xl bg-gradient-to-br from-blue-50/90 via-white to-blue-50/40 border border-slate-200 dark:from-slate-900/80 dark:via-slate-900/50 dark:to-blue-950/30 dark:border-slate-800 p-6 sm:p-10 md:p-12 text-left relative overflow-hidden shadow-md dark:shadow-2xl"
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left summary details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                Official Curriculum Vitae
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Mohammed Saad Shaikh
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Full-Stack Software Developer • MERN Stack & Mobile Specialist
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/80 border border-slate-200 dark:bg-slate-950/60 dark:border-slate-800/80 shadow-sm dark:shadow-none">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold mb-1">
                  <FaCode /> Core Specialization
                </div>
                <div className="text-xs text-slate-700 dark:text-slate-300">
                  React.js, Node.js, Express.js, MongoDB, Flutter & Firebase
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-slate-200 dark:bg-slate-950/60 dark:border-slate-800/80 shadow-sm dark:shadow-none">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold mb-1">
                  <FaBriefcase /> Practical Experience
                </div>
                <div className="text-xs text-slate-700 dark:text-slate-300">
                  Android Developer Intern @ Tenup Software + 13+ Web & Mobile Projects
                </div>
              </div>
            </div>

            {/* Quick Checklist */}
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <FaCheck className="text-blue-600 dark:text-blue-400 text-xs" />
                <span>Immediate availability for Full-Time, Internship, and Contract roles</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-blue-600 dark:text-blue-400 text-xs" />
                <span>Proficient with Git collaboration, RESTful APIs, and responsive design systems</span>
              </div>
            </div>
          </div>

          {/* Right Action Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-white/90 border border-slate-200 dark:bg-slate-950/80 dark:border-slate-800 text-center shadow-sm dark:shadow-none">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-3xl mb-4">
              <FaFilePdf />
            </div>

            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
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
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition transform hover:-translate-y-0.5"
              >
                <FaExternalLinkAlt className="text-xs" />
                <span>View Resume in Browser</span>
              </a>

              <a
                href={personalInfo.resume.downloadUrl}
                download={personalInfo.resume.filename}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-medium text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-200 dark:border-slate-700 transition transform hover:-translate-y-0.5 shadow-sm dark:shadow-none"
              >
                <FaFileDownload className="text-xs text-blue-600 dark:text-blue-400" />
                <span>Download PDF File</span>
              </a>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
