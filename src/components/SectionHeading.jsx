import { motion } from "framer-motion";

const SectionHeading = ({ badge, title, highlight, subtitle, center = true }) => {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : "text-left"}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-mono font-medium tracking-wide uppercase ${
            center ? "mx-auto" : ""
          } bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse"></span>
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
      >
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
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
          className={`mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl ${
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
