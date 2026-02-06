"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSwitch() {
  const [currentLocale, setCurrentLocale] = useState<"sr" | "en">("sr");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLanguage = (locale: "sr" | "en") => {
    setCurrentLocale(locale);
    setIsOpen(false);
    // TODO: Implement actual locale switching with next-intl routing
    console.log("Switching to:", locale);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Current Language Button - BRUTAL */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-foreground hover:border-primary flex items-center gap-2 transition-all group"
      >
        <span className="text-foreground font-mono font-black text-sm uppercase tracking-wider">
          {currentLocale}
        </span>
        <svg
          className={`w-4 h-4 text-foreground group-hover:text-primary transition-all ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth={3}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu - BRUTAL LAYERED */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full -left-2 -right-3 mt-8 z-50 min-w-full"
          >
            {/* Layered effect wrapper */}
            <div className="relative group">
              {/* Back layer - gray shadow */}
              <div className="absolute top-1.5 left-1.5 w-full h-full bg-gray-400 border-[3px] border-black group-hover:bg-[var(--primary)] transition-colors" />

              {/* Front layer - uses CSS variables for auto theme switch */}
              <div className="relative border-[3px] border-foreground bg-background">
                <div className="py-2">
                  {["sr", "en"].map((locale) => (
                    <button
                      key={locale}
                      onClick={() => switchLanguage(locale as "sr" | "en")}
                      className={`w-full py-2 text-center font-mono text-xs uppercase tracking-wider transition-all ${
                        currentLocale === locale
                          ? "font-black text-foreground"
                          : "font-bold text-gray hover:bg-gray/20 hover:text-foreground"
                      }`}
                    >
                      [{locale}]
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
