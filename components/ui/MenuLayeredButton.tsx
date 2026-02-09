"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuOption {
  value: string;
  label: string;
}

interface MenuLayeredButtonProps {
  options: MenuOption[];
  value: string;
  onChange: (value: string) => void;
  icon?: ReactNode;
  className?: string;
}

export default function MenuLayeredButton({
  options,
  value,
  onChange,
  icon,
  className = "",
}: MenuLayeredButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = options.find((o) => o.value === value);

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
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        <div className="relative">
          {/* Back layer - shadow */}
          <div className="absolute top-3 left-3 w-full h-full bg-(--primary) border-8 border-foreground group-hover:bg-(--gray-medium) transition-colors" />

          {/* Front layer */}
          <div className="relative border-8 border-foreground bg-background group-hover:border-(--primary) transition-colors px-4 py-2 flex items-center gap-2">
            {icon && (
              <span className="text-foreground group-hover:text-(--primary) transition-colors">
                {icon}
              </span>
            )}
            <span className="font-heading font-extrabold text-xl tracking-wider text-foreground">
              {currentOption?.label ?? value}
            </span>
            <svg
              className={`w-4 h-4 text-foreground group-hover:text-(--primary) transition-all ${
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
          </div>
        </div>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-4 z-50 min-w-full"
          >
            <div className="relative group">
              {/* Back layer */}
              <div className="absolute top-3 left-3 w-full h-full bg-(--primary) border-8 border-foreground" />

              {/* Front layer */}
              <div className="relative border-8 border-foreground bg-background">
                <div className="py-2">
                  {options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        onChange(option.value);
                        setIsOpen(false);
                      }}
                      className={`w-full py-2 text-center font-heading font-extrabold text-xl tracking-wider transition-all ${
                        value === option.value
                          ? "font-black text-foreground"
                          : "font-extrabold text-gray hover:bg-gray/20 hover:text-foreground"
                      }`}
                    >
                      [{option.label}]
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
