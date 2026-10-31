import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import { workExperience, journeyMilestones } from "../data/experienceData";

export default function Experience() {
  const intern = workExperience[0];

  return (
    <section id="experience" className="py-20 sm:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience &amp; Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Hands-on software internship experience and key learning milestones.
          </p>
        </div>

        {/* Featured Internship Glass Card */}
        {intern && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl space-y-6 text-left border border-white/40 dark:border-white/10 shadow-xl">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 dark:border-white/10 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    <FaBriefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {intern.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {intern.badge}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {intern.company} • {intern.location}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-pill text-xs font-medium text-slate-600 dark:text-slate-300">
                  <FaCalendarAlt className="text-indigo-500 text-xs" />
                  <span>{intern.period} Duration</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {intern.description}
              </p>

              {/* Achievements Grid */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Key Deliverables &amp; Achievements:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {intern.achievements.map((ach, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-white/50 dark:border-white/5 flex items-start gap-2.5">
                      <FaCheckCircle className="text-emerald-500 shrink-0 mt-0.5 text-sm" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="pt-2 flex flex-wrap gap-2">
                {intern.technologies.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg glass-pill text-xs font-medium text-slate-700 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        )}

        {/* Milestones Grid */}
        <div className="space-y-4 text-left">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider pl-1">
            Software Evolution &amp; Milestones:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {journeyMilestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card glass-card-interactive p-5 sm:p-6 rounded-2xl flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-indigo-600 dark:text-indigo-400">{m.year}</span>
                    <span className="text-slate-400 text-[11px]">{m.category}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {m.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {m.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/50 dark:border-white/5 flex flex-wrap gap-1.5">
                  {m.keyTakeaways.map((k) => (
                    <span key={k} className="px-2 py-0.5 rounded-md glass-pill text-[10px] text-slate-500 dark:text-slate-400">
                      {k}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
