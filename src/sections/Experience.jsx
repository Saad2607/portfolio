import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaCodeBranch } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { workExperience, journeyMilestones } from "../data/experienceData";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading
        badge="CAREER & MILESTONES"
        title="Experience &"
        highlight="Developer Journey"
        subtitle="Hands-on industry internship experience and progressive technical milestones."
      />

      <div className="space-y-16">
        
        {/* Industry Work Experience Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <FaBriefcase className="text-blue-600 dark:text-blue-500 text-lg" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Work Experience
            </h3>
          </div>

          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 md:p-10 text-left hover:border-slate-300 dark:hover:border-slate-700 transition shadow-md dark:shadow-xl"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {job.role}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
                        {job.badge}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-blue-600 dark:text-blue-400">
                      {job.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 dark:bg-slate-800/80 dark:border-slate-700/50">
                      <FaCalendarAlt className="text-blue-600 dark:text-blue-400" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 dark:bg-slate-800/80 dark:border-slate-700/50">
                      <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-400" />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed my-6">
                  {job.description}
                </p>

                {/* Key Deliverables & Projects */}
                <div className="mb-6">
                  <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Key Deliverables & Built Applications
                  </h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    {job.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 dark:bg-slate-950/60 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <FaCheckCircle className="text-blue-600 dark:text-blue-500 text-sm shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                  {job.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Developer Journey Timeline */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <FaCodeBranch className="text-blue-600 dark:text-blue-500 text-lg" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Developer Journey & Milestones
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {journeyMilestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-blue-500/40 transition shadow-sm dark:shadow-none flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      {milestone.year}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      {milestone.category}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {milestone.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {milestone.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-200 dark:border-slate-800/60">
                  {milestone.keyTakeaways.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono text-slate-600 bg-slate-50 border border-slate-200 dark:text-slate-400 dark:bg-slate-950/80 px-2 py-0.5 rounded dark:border-slate-800"
                    >
                      {item}
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
};

export default Experience;
