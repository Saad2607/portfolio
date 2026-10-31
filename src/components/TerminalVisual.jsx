import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaCopy, FaPlay, FaSearch } from "react-icons/fa";
import { SiJavascript, SiJson, SiGnubash } from "react-icons/si";

const tabs = [
  {
    id: "developer",
    filename: "developer.ts",
    icon: SiJavascript,
    iconColor: "text-yellow-400",
    code: `// Engineer Profile: Mohammed Saad Shaikh
interface Developer {
  name: string;
  role: string;
  coreStack: string[];
  mobile: string[];
  status: string;
}

const saad: Developer = {
  name: "Mohammed Saad Shaikh",
  role: "Full-Stack Engineer",
  coreStack: ["React 18", "Node.js", "Express", "MongoDB Atlas"],
  mobile: ["Flutter", "Dart", "Firebase"],
  status: "Open for Opportunities 🚀",
  
  mindset: {
    cleanArchitecture: true,
    scalableAPIs: true,
    pixelPerfection: true
  }
};

export default saad;`
  },
  {
    id: "stack",
    filename: "tech-stack.json",
    icon: SiJson,
    iconColor: "text-amber-500",
    code: `{
  "ecosystem": "Full-Stack MERN + Mobile",
  "frontend": ["React 18", "Tailwind CSS", "Redux", "Vite"],
  "backend": ["Node.js", "Express.js", "REST APIs", "JWT"],
  "database": ["MongoDB Atlas", "PostgreSQL", "Firebase"],
  "mobile": ["Flutter", "Dart", "Android SDK"],
  "devops": ["Git", "GitHub", "Vercel", "Render", "Postman"],
  "architecture": "Modular Microservices & REST",
  "openSource": true
}`
  },
  {
    id: "system",
    filename: "diagnostics.sh",
    icon: SiGnubash,
    iconColor: "text-emerald-400",
    code: `$ curl -s https://api.saad.dev/telemetry | jq .
{
  "status": "ONLINE",
  "engineer": "Mohammed Saad Shaikh",
  "publicRepos": 9,
  "flagshipSystems": ["FileBridge", "QuickKart", "PulsePoint", "PeoplePay360"],
  "internshipExperience": "Tenup Software (Android / Flutter)",
  "codeQuality": "Production Grade",
  "latency": "11ms",
  "availability": "IMMEDIATE"
}`
  }
];

const TerminalVisual = () => {
  const [activeTab, setActiveTab] = useState("developer");
  const [copied, setCopied] = useState(false);

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 dark:border-white/10 bg-slate-900/95 dark:bg-[#0b0e17]/95 text-left font-mono relative backdrop-blur-2xl">
      {/* Top subtle glow line */}
      <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent pointer-events-none" />

      {/* Raycast-style Window Titlebar & Command Palette Bar */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 bg-slate-950/80 border-b border-slate-800/80 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
        </div>

        {/* Raycast Command prompt simulation */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 max-w-xs w-full justify-between hidden sm:flex">
          <span className="flex items-center gap-1.5 truncate">
            <FaSearch className="text-[10px] text-indigo-400 shrink-0" />
            <span className="truncate text-slate-300">saad-runtime</span>
          </span>
          <span className="raycast-keycap text-[9px] py-0 px-1 bg-slate-800 text-slate-400 border-slate-700">
            ⌘K
          </span>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white px-2.5 py-1 rounded-md bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition shrink-0"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <FaCheck className="text-emerald-400 text-[10px]" />
              <span className="text-emerald-400 text-[10px]">Copied</span>
            </>
          ) : (
            <>
              <FaCopy className="text-[10px]" />
              <span className="text-[10px]">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs Header */}
      <div className="flex items-center border-b border-slate-800/80 bg-slate-950/40 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs border-r border-slate-800/80 transition-all font-mono whitespace-nowrap ${
                isActive
                  ? "bg-slate-900/90 text-indigo-400 border-t-2 border-t-indigo-500 font-medium"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40 border-t-2 border-t-transparent"
              }`}
            >
              <Icon className={`text-xs ${tab.iconColor}`} />
              <span>{tab.filename}</span>
            </button>
          );
        })}
      </div>

      {/* Code Editor Body */}
      <div className="p-3.5 sm:p-5 text-[11px] sm:text-[12.5px] leading-relaxed overflow-x-auto max-h-[310px] select-text">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            <pre className="text-slate-300">
              <code>
                {currentTab.code.split("\n").map((line, i) => (
                  <div key={i} className="table-row">
                    <span className="table-cell select-none pr-3 sm:pr-4 text-slate-600 text-right text-[10px] sm:text-[11px]">
                      {i + 1}
                    </span>
                    <span
                      className={`table-cell whitespace-pre ${
                        line.startsWith("//") || line.startsWith("$")
                          ? "text-emerald-400/90"
                          : line.includes("interface") || line.includes("const") || line.includes("export") || line.includes("default")
                          ? "text-indigo-400 font-semibold"
                          : line.includes("string") || line.includes("boolean")
                          ? "text-cyan-400"
                          : line.includes(":") && !line.includes("http")
                          ? "text-sky-300"
                          : "text-slate-200"
                      }`}
                    >
                      {line}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 text-[10px] text-slate-400 font-mono">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Production Ready
          </span>
          <span className="text-slate-700">|</span>
          <span className="text-slate-400">git:(main)</span>
        </div>
        <div className="flex items-center gap-1.5 text-indigo-400 font-medium">
          <FaPlay className="text-[7px]" />
          <span>MERN • Flutter</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalVisual;
