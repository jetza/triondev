"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 120, height: 30 },
  md: { width: 180, height: 45 },
  lg: { width: 240, height: 60 },
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always render white logo (for brutalist dark theme)
  // This prevents hydration mismatch since brutalist design is dark-first
  const logoSrc =
    mounted && resolvedTheme === "light"
      ? "/assets/logos/triondev-black.svg"
      : "/assets/logos/triondev-white.svg";

  return (
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src={logoSrc}
        alt="TRIONDEV"
        width={sizes[size].width}
        height={sizes[size].height}
        priority
        className="transition-opacity hover:opacity-80"
      />
    </Link>
  );
}
