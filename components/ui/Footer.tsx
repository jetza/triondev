"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: t("services") },
    { href: "#projects", label: "Projekti" },
    { href: "#process", label: "Proces" },
    { href: "#pricing", label: "Cene" },
    { href: "#contact", label: "Kontakt" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-dark border-t-4 border-light overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="footer-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="100%"
                height="100%"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-light"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-5 border-l-4 border-primary pl-6"
          >
            <Logo className="mb-6" />
            <p className="text-light/70 mb-8 text-lg leading-relaxed max-w-md">
              {t("description")}
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 border-2 border-light/20 hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center group"
                  aria-label={social.name}
                >
                  <div className="text-light group-hover:text-primary transition-colors">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-12 lg:col-span-3 lg:col-start-7 border-l-4 border-secondary pl-6"
          >
            <h3 className="text-2xl font-heading font-black mb-6 text-light uppercase tracking-wider">
              <span className="text-secondary">[</span>
              {t("quickLinks")}
              <span className="text-secondary">]</span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-light/70 hover:text-primary transition-colors font-medium flex items-center gap-2 group"
                  >
                    <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                      &gt;
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-12 lg:col-span-4 border-l-4 border-primary pl-6"
          >
            <h3 className="text-2xl font-heading font-black mb-6 text-light uppercase tracking-wider">
              <span className="text-primary">[</span>
              {t("contact")}
              <span className="text-primary">]</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 border-2 border-light/20 flex items-center justify-center text-xs text-light/70 font-mono">
                  @
                </div>
                <a
                  href="mailto:info@triondev.com"
                  className="text-light/70 hover:text-primary transition-colors"
                >
                  info@triondev.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 border-2 border-light/20 flex items-center justify-center text-xs text-light/70 font-mono">
                  #
                </div>
                <a
                  href="tel:+381641234567"
                  className="text-light/70 hover:text-primary transition-colors"
                >
                  +381 64 123 4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 border-2 border-light/20 flex items-center justify-center text-xs text-light/70 font-mono">
                  ★
                </div>
                <span className="text-light/70">Beograd, Srbija</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t-2 border-light/10 pt-8 mt-8">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 lg:col-span-8">
              <p className="text-light/50 text-sm font-mono">
                <span className="text-secondary">&lt;</span>© {currentYear}{" "}
                TRIONDEV. {t("rights")}.
                <span className="text-secondary">/&gt;</span>
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
              <div className="flex gap-4 justify-start lg:justify-end text-sm text-light/50 font-mono">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy
                </a>
                <span className="text-secondary">|</span>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-secondary" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary" />
    </footer>
  );
}
