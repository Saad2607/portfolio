import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCopy, FaCheck, FaExternalLinkAlt, FaClock } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { personalInfo } from "../data/personalInfo";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading
        badge="LET'S CONNECT"
        title="Get In"
        highlight="Touch"
        subtitle="Open to full-time engineering roles, freelance software consulting, and tech discussions."
      />

      <div className="grid lg:grid-cols-12 gap-8 text-left items-start">
        
        {/* Left Column: Direct Info Cards (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Email Card with 1-click Copy */}
          <div className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between shadow-md dark:shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg">
                <FaEnvelope />
              </div>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 transition"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-emerald-600 dark:text-emerald-400 text-xs" />
                    <span className="text-emerald-600 dark:text-emerald-400 text-[11px] font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="text-xs" />
                    <span className="text-[11px]">Copy</span>
                  </>
                )}
              </button>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase mb-1">Direct Email</div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition break-all"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Social Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* LinkedIn */}
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40 transition shadow-sm dark:shadow-none group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-base">
                  <FaLinkedin />
                </div>
                <FaExternalLinkAlt className="text-xs text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-0.5">Professional</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  LinkedIn Profile
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-slate-700 transition shadow-sm dark:shadow-none group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-white flex items-center justify-center text-base">
                  <FaGithub />
                </div>
                <FaExternalLinkAlt className="text-xs text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-0.5">Codebase</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  GitHub Profile
                </div>
              </div>
            </a>
          </div>

          {/* Location & Response Time */}
          <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 shadow-sm dark:shadow-none">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
              <span>Location: {personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <FaClock className="text-[11px]" />
              <span>~24h response</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <ContactForm />
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;