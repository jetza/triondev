"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface LayeredButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  icon?: ReactNode;
  showArrow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

export default function LayeredButton({
  label,
  onClick,
  href,
  icon,
  showArrow = false,
  type = "button",
  disabled = false,
  className = "",
}: LayeredButtonProps) {
  const { resolvedTheme } = useTheme();

  const arrowIcon = showArrow ? (
    <Image
      src={
        resolvedTheme === "dark"
          ? "/assets/svgs/arrow-w.svg"
          : "/assets/svgs/arrow-b.svg"
      }
      alt=""
      width={20}
      height={20}
      className="shrink-0"
    />
  ) : null;

  const hasIcon = icon || arrowIcon;

  const content = (
    <div className="relative">
      {/* Back layer - shadow */}
      <div className="absolute top-3 left-3 w-full h-full bg-(--primary) border-8 border-foreground group-hover:bg-(--gray-medium) transition-colors" />

      {/* Front layer */}
      <div
        className={`relative border-8 font-heading border-foreground bg-background transition-colors px-6 py-2 flex items-center ${hasIcon ? "justify-between" : "justify-center"}`}
      >
        <span className="font-extrabold text-xl tracking-wider whitespace-nowrap text-foreground lowercase">
          {label}
        </span>
        {(icon || arrowIcon) && (
          <span className="text-foreground group-hover:text-(--primary) transition-colors ml-4">
            {icon || arrowIcon}
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={`relative group ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative group ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {content}
    </motion.button>
  );
}
