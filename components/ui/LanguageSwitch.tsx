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
        className="border-2 border-light hover:border-primary px-4 py-2 flex items-center gap-2 transition-all group"
      >
        <span className="text-light font-mono font-black text-sm uppercase tracking-wider">
          {currentLocale}
        </span>
        <svg
          className={`w-4 h-4 text-light group-hover:text-primary transition-all ${
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

      {/* Dropdown Menu - BRUTAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full -right-1 mt-7 border-4 border-light bg-dark z-50"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

            <div className="py-2">
              {["sr", "en"].map((locale) => (
                <button
                  key={locale}
                  onClick={() => switchLanguage(locale as "sr" | "en")}
                  className={`w-full px-5 py-3 text-left font-mono font-black text-sm uppercase tracking-wider transition-all border-l-8 whitespace-nowrap ${
                    currentLocale === locale
                      ? "border-primary text-primary bg-primary/10"
                      : "border-transparent text-light hover:border-secondary hover:bg-light/5"
                  }`}
                >
                  [{locale}]
                </button>
              ))}
            </div>

            {/* Bottom corner accent */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
