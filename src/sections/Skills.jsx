import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAndroid,
  FaGithub,
  FaDatabase
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiRedux,
  SiMui,
  SiReactquery,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiFirebase,
  SiCloudinary,
  SiFlutter,
  SiDart,
  SiPostman,
  SiVercel,
  SiVite
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import SectionHeading from "../components/SectionHeading";
import { skillCategories, skillsData } from "../data/skillsData";

// Icon mapping helper
const iconMap = {
  FaReact: FaReact,
  SiJavascript: SiJavascript,
  SiTailwindcss: SiTailwindcss,
  SiHtml5: SiHtml5,
  SiRedux: SiRedux,
  SiMui: SiMui,
  SiReactquery: SiReactquery,
  FaNodeJs: FaNodeJs,
  SiExpress: SiExpress,
  TbApi: TbApi,
  SiJsonwebtokens: SiJsonwebtokens,
  SiMongodb: SiMongodb,
  SiFirebase: SiFirebase,
  SiCloudinary: SiCloudinary,
  SiFlutter: SiFlutter,
  SiDart: SiDart,
  FaAndroid: FaAndroid,
  FaGithub: FaGithub,
  SiPostman: SiPostman,
  SiVercel: SiVercel,
  SiVite: SiVite
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading
        badge="TECHNICAL ARSENAL"
        title="Skills &"
        highlight="Technologies"
        subtitle="A comprehensive toolkit honed across full-stack web, cloud, and mobile development."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {skillCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 dark:border-slate-800/80 shadow-sm dark:shadow-none"
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-left"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || FaDatabase;
            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-900/90 transition-all duration-300 shadow-sm dark:shadow-none group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition">
                      <IconComponent />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full ${
                        skill.level === "Advanced"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20"
                          : "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition mb-1">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;