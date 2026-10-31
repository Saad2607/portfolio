import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaMobileAlt, FaDatabase } from "react-icons/fa";

const pillars = [
  {
    icon: <FaLaptopCode className="text-xl text-indigo-500" />,
    title: "Full-Stack Development",
    desc: "End-to-end architectures using React.js, Node.js, Express, and MongoDB with modern state management."
  },
  {
    icon: <FaServer className="text-xl text-cyan-500" />,
    title: "REST APIs & Security",
    desc: "Stateless JWT authentication, bcrypt hashing, role-based access control, and robust middleware."
  },
  {
    icon: <FaDatabase className="text-xl text-emerald-500" />,
    title: "Databases & Cloud",
    desc: "MongoDB Atlas aggregation pipelines, relational PostgreSQL schemas, and Cloudinary media pipelines."
  },
  {
    icon: <FaMobileAlt className="text-xl text-purple-500" />,
    title: "Cross-Platform Apps",
    desc: "Desktop applications built with Electron.js and responsive mobile apps built with Flutter and Firebase."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Passionate software developer dedicated to crafting clean, scalable, and impactful applications.
          </p>
        </div>

        {/* 2-Column Glassmorphism Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Personal Story & Quick Stats (Col 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6 text-left h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    Software Developer // Vadodara, Gujarat, India
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                  Transforming technical requirements into seamless, user-centric software.
                </h3>

                <div className="space-y-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    I am a Full-Stack Software Developer with strong foundations in the MERN stack (MongoDB, Express.js, React.js, Node.js), Electron, and Flutter. I enjoy tackling complex challenges and turning them into intuitive, maintainable software.
                  </p>
                  <p>
                    From architecting complete retail systems with dedicated admin panels (QuickKart) and cross-device cloud/desktop file ecosystems (FileBridge) to delivering 3 distinct mobile apps during my Android internship at Tenup Software, I believe in writing well-structured, production-ready code.
                  </p>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/60 dark:border-white/10 text-center">
                <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/[0.03] border border-white/60 dark:border-white/10">
                  <div className="text-xl sm:text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">9+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Public Repos</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/[0.03] border border-white/60 dark:border-white/10">
                  <div className="text-xl sm:text-2xl font-extrabold text-cyan-600 dark:text-cyan-400">15+</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Technologies</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/[0.03] border border-white/60 dark:border-white/10">
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">3 Mo</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Internship</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/40 dark:bg-white/[0.03] border border-white/60 dark:border-white/10">
                  <div className="text-xl sm:text-2xl font-extrabold text-purple-600 dark:text-purple-400">100%</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Dedication</div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: 4 Focus Pillars (Col 8-12) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-left">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card glass-card-interactive p-5 rounded-2xl flex items-start gap-4"
              >
                <div className="p-3 rounded-xl glass-pill shrink-0 shadow-sm">
                  {pillar.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
