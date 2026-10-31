import { useState, useRef } from "react";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(99, 102, 241, 0.14)",
  borderColor = "rgba(99, 102, 241, 0.35)",
  ...props
}) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0c101d]/80 backdrop-blur-xl transition-all duration-300 shadow-sm dark:shadow-none hover:border-slate-300 dark:hover:border-slate-700 ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {/* Dynamic Spotlight Border Highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity,
          border: `1px solid ${borderColor}`,
          maskImage: `radial-gradient(280px circle at ${position.x}px ${position.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(280px circle at ${position.x}px ${position.y}px, black, transparent)`,
        }}
      />
      {/* Top subtle highlight edge */}
      <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent pointer-events-none" />
      
      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpotlightCard;
