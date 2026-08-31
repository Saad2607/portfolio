import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaMobileAlt, FaDatabase, FaRocket, FaCheckCircle } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/personalInfo";

const focusAreas = [
  {
    icon: FaLaptopCode,
    title: "Full-Stack Development",
    desc: "End-to-end web architectures using React.js, Node.js, and Express with state synchronization."
  },
  {
    icon: FaServer,
    title: "API Architecture & Security",
    desc: "RESTful API contracts, secure JWT auth, role-based controls, and performant middleware."
  },
  {
    icon: FaDatabase,
    title: "Database Modeling",
    desc: "Document modeling with MongoDB Atlas, aggregation pipelines, and Cloud Firestore realtime sync."
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Development",
    desc: "Cross-platform mobile apps with Flutter, Dart, and Google Firebase ecosystem integration."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading
        badge="ENGINEERING PROFILE"
        title="About"
        highlight="My Journey"
        subtitle="Bridging modern design, robust backend systems, and responsive applications."
      />

      {/* Bento Grid Layout */}
      <div className="grid md:grid-cols-12 gap-6 text-left">
        
        {/* Main Bio Card (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 rounded-3xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-sm dark:shadow-none"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Full-Stack & Mobile Developer
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Transforming complex technical requirements into refined digital products.
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
              <FaCheckCircle className="text-emerald-500 dark:text-emerald-400" />
              <span>Clean Architecture</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
              <FaCheckCircle className="text-emerald-500 dark:text-emerald-400" />
              <span>Production-Mindset</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
              <FaCheckCircle className="text-emerald-500 dark:text-emerald-400" />
              <span>Agile & Fast Learner</span>
            </div>
          </div>
        </motion.div>

        {/* Stats & Current Focus Column (5 cols) */}
        <div className="md:col-span-5 flex flex-col gap-6">
          
          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {personalInfo.stats.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 text-left hover:border-blue-300 dark:hover:border-slate-700 transition shadow-sm dark:shadow-none"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Currently Building / Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-blue-50/90 via-white to-blue-50/50 dark:from-blue-950/40 dark:via-slate-900/70 dark:to-slate-950/90 border border-blue-200 dark:border-blue-500/20 text-left relative overflow-hidden shadow-sm dark:shadow-none"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaRocket className="text-blue-600 dark:text-blue-400 text-sm" />
              <span className="text-xs font-mono font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                Current Technical Focus
              </span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Cross-Platform Ecosystems & Scalability
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Advancing full-stack system design, integrating desktop frameworks (Electron), optimizing database query pipelines, and deploying robust cloud-backed applications.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-[11px] font-mono text-blue-700 dark:text-blue-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              Open to Opportunities
            </div>
          </motion.div>

        </div>

      </div>

      {/* 4 Pillars of Competence */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-left">
        {focusAreas.map((area, i) => {
          const Icon = area.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-white dark:hover:bg-slate-900/70 transition shadow-sm dark:shadow-none group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg mb-3 group-hover:scale-110 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition">
                <Icon />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {area.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
