import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaFileDownload, 
  FaCheck, 
  FaCopy 
} from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Have a project in mind, an opportunity, or just want to chat software? Let&apos;s connect!
          </p>
        </div>

        {/* 2-Column Glassmorphism Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: Direct Info & Quick Resume (Col 1-5) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card with 1-Click Copy */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-rose-500/10 text-rose-500 shrink-0">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email Me</div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                    {personalInfo.email}
                  </div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl glass-pill text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition shrink-0 ml-2 flex items-center gap-1.5"
                title="Copy Email to Clipboard"
              >
                {copiedEmail ? <FaCheck className="text-emerald-500 text-xs" /> : <FaCopy className="text-xs" />}
                <span className="hidden sm:inline">{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Location & Availability Card */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 shrink-0">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Location</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {personalInfo.location} (Open to Remote &amp; Relocation)
                </div>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl space-y-3">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Professional Networks
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass-pill text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white transition"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass-pill text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-500 dark:hover:text-white transition"
                >
                  <FaLinkedin className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Resume Download Glass Card */}
            <div className="glass-card p-5 sm:p-6 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Curriculum Vitae</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                  Updated
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Download my full resume for a detailed view of my skills, projects, and coursework.
              </p>
              <a
                href={personalInfo.resume.downloadUrl}
                download={personalInfo.resume.filename}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white glass-button-primary shadow-sm transition active:scale-95"
              >
                <FaFileDownload className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Glassmorphism Contact Form (Col 6-12) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
              <div className="border-b border-slate-200/60 dark:border-white/10 pb-3 flex items-center justify-between">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Send a Message
                </h3>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  ● Direct Inbox Delivery
                </span>
              </div>

              <ContactForm />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
