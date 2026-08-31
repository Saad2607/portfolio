import { motion, AnimatePresence } from "framer-motion";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
      title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
      className={`relative p-2.5 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 shadow-sm ${
        isDark
          ? "bg-slate-900 border-slate-800 text-amber-400 hover:border-slate-700 hover:bg-slate-800"
          : "bg-slate-100 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-200"
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center text-base text-amber-400"
          >
            <BsSunFill />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center text-base text-slate-700"
          >
            <BsMoonStarsFill />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
