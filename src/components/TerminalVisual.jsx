import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaCode, FaCheck, FaCopy, FaPlay } from "react-icons/fa";
import { SiJavascript, SiJson, SiGnubash } from "react-icons/si";

const tabs = [
  {
    id: "developer",
    filename: "developer.js",
    icon: SiJavascript,
    iconColor: "text-yellow-400",
    code: `// Engineer Profile: Mohammed Saad Shaikh
const developer = {
  name: "Mohammed Saad Shaikh",
  role: "Full-Stack Developer",
  coreStack: ["React.js", "Node.js", "Express", "MongoDB"],
  mobileStack: ["Flutter", "Dart", "Firebase"],
  status: "Open for Opportunities 🚀",
  location: "India (Open to Remote / Relocation)",
  
  getPhilosophy: () => ({
    cleanArchitecture: true,
    performanceFocused: true,
    continuousLearning: Infinity
  })
};

export default developer;`
  },
  {
    id: "stack",
    filename: "tech-stack.json",
    icon: SiJson,
    iconColor: "text-amber-500",
    code: `{
  "ecosystem": "Full-Stack & Mobile",
  "technologies": {
    "frontend": ["React.js", "Tailwind CSS", "Redux", "Vite"],
    "backend": ["Node.js", "Express.js", "REST APIs", "JWT"],
    "databases": ["MongoDB Atlas", "Firebase Firestore"],
    "desktop": ["Electron.js"],
    "mobile": ["Flutter", "Android SDK"],
    "devops": ["Git", "GitHub", "Vercel", "Postman"]
  },
  "openSource": true
}`
  },
  {
    id: "system",
    filename: "diagnostics.sh",
    icon: SiGnubash,
    iconColor: "text-emerald-400",
    code: `$ curl -s https://api.saad.dev/status | jq .
{
  "system": "ONLINE",
  "developer": "Mohammed Saad Shaikh",
  "projectsCount": 13,
  "activeInternship": "Tenup Software (Completed)",
  "flagshipProject": "FileBridge & QuickKart",
  "productionReady": true,
  "latency": "14ms",
  "recruiterAction": "READY_TO_CONNECT"
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
    <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-300 dark:border-slate-800/80 bg-slate-950/95 text-left font-mono">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition cursor-pointer"></div>
          <span className="ml-2 text-xs text-slate-400 flex items-center gap-1.5 font-sans">
            <FaTerminal className="text-blue-400 text-[10px]" />
            saad-dev-environment v2.4
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2 py-1 rounded-md bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <FaCheck className="text-emerald-400 text-xs" />
              <span className="text-emerald-400 text-[11px]">Copied</span>
            </>
          ) : (
            <>
              <FaCopy className="text-xs" />
              <span className="text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs Header */}
      <div className="flex items-center border-b border-slate-800/80 bg-slate-900/40 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 text-xs border-r border-slate-800/80 transition-all font-mono whitespace-nowrap ${
                isActive
                  ? "bg-slate-950 text-blue-400 border-t-2 border-t-blue-500 font-medium"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border-t-2 border-t-transparent"
              }`}
            >
              <Icon className={`text-sm ${tab.iconColor}`} />
              <span>{tab.filename}</span>
            </button>
          );
        })}
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 text-[12px] sm:text-[13px] leading-relaxed overflow-x-auto max-h-[340px] select-text">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
          >
            <pre className="text-slate-300">
              <code>
                {currentTab.code.split("\n").map((line, i) => (
                  <div key={i} className="table-row">
                    <span className="table-cell select-none pr-4 text-slate-600 text-right text-[11px]">
                      {i + 1}
                    </span>
                    <span
                      className={`table-cell whitespace-pre ${
                        line.startsWith("//") || line.startsWith("$")
                          ? "text-emerald-400/90"
                          : line.includes("const") || line.includes("export") || line.includes("default")
                          ? "text-purple-400"
                          : line.includes(":") && !line.includes("http")
                          ? "text-blue-300"
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
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Production Ready
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-400">UTF-8</span>
        </div>
        <div className="flex items-center gap-2 text-blue-400 font-sans font-medium">
          <FaPlay className="text-[9px]" />
          <span>MERN • Flutter</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalVisual;
