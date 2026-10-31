import { motion } from "framer-motion";

const SectionHeading = ({ badge, title, highlight, subtitle, center = true }) => {
  return (
    <div className={`mb-12 sm:mb-16 md:mb-20 ${center ? "text-center" : "text-left"}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1 mb-3.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold tracking-wider uppercase ${
            center ? "mx-auto" : ""
          } bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20 shadow-sm`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
      >
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-3.5 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
