"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GlitchTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  delay?: number;
}

export default function GlitchText({
  children,
  className = "",
  as: Component = "span",
  delay = 0,
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <Component className={`relative inline-block ${className}`}>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay / 1000 }}
        className={isGlitching ? "animate-glitch" : ""}
      >
        {children}
      </motion.span>

      {/* Glitch layers */}
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 opacity-70 text-primary"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: "translateX(-2px)",
            }}
          >
            {children}
          </span>
          <span
            className="absolute top-0 left-0 opacity-70 text-secondary"
            style={{
              clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
              transform: "translateX(2px)",
            }}
          >
            {children}
          </span>
        </>
      )}
    </Component>
  );
}
