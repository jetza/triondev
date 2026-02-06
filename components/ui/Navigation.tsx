"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";
import {
  LayoutIcon,
  ToolIcon,
  FileTextIcon,
  BarChartIcon,
  ZapIcon,
} from "./Icons";

export default function Navigation() {
  const t = useTranslations("nav");
  const { resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const isDark = resolvedTheme === "dark";

  const navItems = [
    { href: "#services", label: t("services"), icon: LayoutIcon },
    { href: "#process", label: t("process"), icon: ToolIcon },
    { href: "#projects", label: t("projects"), icon: FileTextIcon },
    { href: "#pricing", label: t("pricing"), icon: BarChartIcon },
    { href: "#contact", label: t("contact"), icon: ZapIcon },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b-4 border-light dark:border-gray"
    >
      {/* Asymmetric grid layout */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4 items-center py-4">
          {/* Logo - spans 3 columns */}
          <div className="col-span-3">
            <Logo />
          </div>

          {/* Desktop Navigation - asymmetric spacing */}
          <div className="hidden lg:flex lg:col-span-7 items-center gap-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="relative group"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {/* Layered button effect */}
                  <div className="relative">
                    {/* Back layer - gray shadow with border */}
                    <div className="absolute top-1.5 left-1.5 w-full h-full bg-gray-400 border-[3px] border-black group-hover:bg-[var(--primary)] transition-colors" />

                    {/* Front layer - white with icon and thick border */}
                    <div
                      className={`relative border-[3px] group-hover:border-primary transition-colors px-4 py-2 flex items-center gap-2 ${
                        isDark
                          ? "bg-black border-white"
                          : "bg-white border-black"
                      }`}
                    >
                      <IconComponent
                        size={18}
                        className={isDark ? "text-white" : "text-black"}
                      />
                      <span
                        className={`font-bold uppercase text-xs tracking-wider whitespace-nowrap ${
                          isDark ? "text-white" : "text-black"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Theme & Language - spans 2 columns */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-end gap-4">
            {/* Theme Toggle with layered effect */}
            <div className="relative group">
              <div className="absolute top-1.5 left-1.5 w-full h-full bg-gray-400 border-[3px] border-black group-hover:bg-[var(--primary)] transition-colors" />
              <div
                className={`relative border-[3px] hover:border-primary transition-colors flex items-center justify-center ${
                  isDark ? "bg-black border-white" : "bg-white border-black"
                }`}
              >
                <ThemeToggle />
              </div>
            </div>

            {/* Language Switch with layered effect */}
            <div className="relative group">
              <div className="absolute top-1.5 left-1.5 w-full h-full bg-gray-400 border-[3px] border-black group-hover:bg-[var(--primary)] transition-colors" />
              <div
                className={`relative border-[3px] hover:border-primary transition-colors p-2 flex items-center justify-center ${
                  isDark ? "bg-black border-white" : "bg-white border-black"
                }`}
              >
                <LanguageSwitch />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="col-span-9 lg:hidden flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border-4 border-light p-2 hover:bg-primary transition-colors group"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                  className="block h-1 w-full bg-light group-hover:bg-dark transition-colors"
                />
                <motion.span
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className="block h-1 w-full bg-light group-hover:bg-dark transition-colors"
                />
                <motion.span
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                  className="block h-1 w-full bg-light group-hover:bg-dark transition-colors"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t-4 border-primary bg-dark"
          >
            <div className="container mx-auto px-4 py-8 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="block border-l-4 border-gray pl-4 py-3 text-light hover:bg-dark hover:border-primary transition-all font-bold uppercase tracking-wider"
                >
                  <span className="text-gray text-sm mr-2">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                  {item.label}
                </motion.a>
              ))}

              <div className="flex gap-4 pt-6 border-t-2 border-gray mt-6">
                <div className="border-2 border-light/20 p-2">
                  <ThemeToggle />
                </div>
                <div className="border-2 border-light/20 p-2">
                  <LanguageSwitch />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-primary" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-gray" />
    </motion.nav>
  );
}
