"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GridContainerProps {
  children?: ReactNode;
  className?: string;
  columns?: number;
  rows?: number;
  showGrid?: boolean;
}

export default function GridContainer({
  children,
  className = "",
  columns = 12,
  rows = 6,
  showGrid = true,
}: GridContainerProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Grid overlay */}
      {showGrid && (
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="brutalist-grid"
                width={`${100 / columns}%`}
                height={`${100 / rows}%`}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="100%"
                  height="100%"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-light dark:text-light"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#brutalist-grid)" />
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
