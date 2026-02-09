"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IconLayeredButtonProps {
  icon: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  ariaLabel: string;
  className?: string;
}

export default function IconLayeredButton({
  icon,
  onClick,
  ariaLabel,
  className = "",
}: IconLayeredButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative group ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      aria-label={ariaLabel}
    >
      <div className="relative">
        {/* Back layer - shadow */}
        <div className="absolute top-3 left-3 w-full h-full bg-(--primary) border-8 border-foreground group-hover:bg-(--gray-medium) transition-colors" />

        {/* Front layer */}
        <div className="relative border-8 border-foreground bg-background transition-colors p-3 flex items-center justify-center">
          <span className="text-foreground transition-colors">{icon}</span>
        </div>
      </div>
    </motion.button>
  );
}
