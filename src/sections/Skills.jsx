import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt, 
  FaDocker 
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiFlutter, 
  SiDart, 
  SiElectron, 
  SiFirebase, 
  SiPostman, 
  SiVercel, 
  SiJsonwebtokens 
} from "react-icons/si";
import { FiCode, FiServer, FiDatabase, FiSmartphone, FiTool } from "react-icons/fi";

const skillGroups = [
  {
    category: "Frontend Development",
    icon: <FiCode className="text-indigo-500 text-lg" />,
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "HTML5 & CSS3", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" /> }
    ]
  },
  {
    category: "Backend & REST APIs",
    icon: <FiServer className="text-cyan-500 text-lg" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#68A063]" /> },
      { name: "Express.js", icon: <SiExpress className="text-slate-600 dark:text-slate-300" /> },
      { name: "RESTful APIs", icon: <FiCode className="text-indigo-400" /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens className="text-emerald-500" /> },
      { name: "MVC Architecture", icon: <FiServer className="text-amber-500" /> }
    ]
  },
  {
    category: "Databases & Cloud Storage",
    icon: <FiDatabase className="text-emerald-500 text-lg" />,
    skills: [
      { name: "MongoDB Atlas", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
      { name: "Cloudinary CDN", icon: <FiDatabase className="text-blue-400" /> },
      { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> }
    ]
  },
  {
    category: "Mobile & Desktop Systems",
    icon: <FiSmartphone className="text-purple-500 text-lg" />,
    skills: [
      { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
      { name: "Dart", icon: <SiDart className="text-[#0175C2]" /> },
      { name: "Electron.js", icon: <SiElectron className="text-[#47848F]" /> },
      { name: "Firebase Auth", icon: <SiFirebase className="text-[#FFA611]" /> },
      { name: "Cloud Firestore", icon: <SiFirebase className="text-[#FFCA28]" /> }
    ]
  },
  {
    category: "DevOps & Developer Tools",
    icon: <FiTool className="text-amber-500 text-lg" />,
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Vercel", icon: <SiVercel className="text-slate-800 dark:text-slate-200" /> },
      { name: "Responsive UI/UX", icon: <FiCode className="text-indigo-400" /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            The programming languages, frameworks, and developer tools I leverage in production.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card glass-card-interactive p-6 rounded-3xl flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-white/10 pb-4">
                  <div className="p-2.5 rounded-xl glass-pill shadow-xs">
                    {group.icon}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                </div>

                {/* Skills Pill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-pill text-xs font-medium text-slate-700 dark:text-slate-200 hover:scale-105 transition-transform"
                    >
                      <span className="text-base shrink-0">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 text-[11px] text-slate-400 font-mono">
                {group.skills.length} Tools &amp; Technologies
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
