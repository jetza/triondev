"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlitchText from "@/components/ui/GlitchText";
import GridContainer from "@/components/ui/GridContainer";

export default function HeroSection() {
  const t = useTranslations("hero");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { number: "50+", label: t("stats.projects") },
    { number: "100%", label: t("stats.satisfaction") },
    { number: "24/7", label: t("stats.support") },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center bg-dark-gray overflow-hidden pt-24"
    >
      {/* Grid Background with parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <GridContainer
          showGrid
          columns={20}
          rows={20}
          className="w-full h-full opacity-20"
        />
      </motion.div>

      {/* Thick border lines - NOT floating squares */}
      <div className="absolute top-20 right-0 w-1 h-64 bg-primary opacity-30" />
      <div className="absolute bottom-20 left-0 w-96 h-1 bg-secondary opacity-30" />
      <div className="absolute top-1/3 right-1/4 w-32 h-1 bg-primary opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-12 gap-8 items-center min-h-[calc(100vh-120px)]">
          {/* Main Content - Asymmetric */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-8 lg:col-start-2"
          >
            {/* Massive Headline with HIGH CONTRAST */}
            <h1 className="font-heading font-black text-light mb-8 leading-none">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-4"
              >
                <GlitchText as="span" delay={500}>
                  TREBA LI TI
                </GlitchText>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] text-primary ml-0 md:ml-20 mb-4"
              >
                <GlitchText as="span" delay={800}>
                  DOBAR SAJT?
                </GlitchText>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-secondary"
              >
                <GlitchText as="span" delay={1100}>
                  KOJI DONOSI ZARADU?
                </GlitchText>
              </motion.div> */}
            </h1>

            {/* Subtitle with thick border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="border-l-8 border-primary pl-6 mb-12 max-w-2xl bg-dark/50 py-4"
            >
              <p className="text-xl md:text-2xl text-light/90 leading-relaxed font-bold uppercase tracking-wide">
                {t("subtitle")}
              </p>
            </motion.div>

            {/* CTA Buttons - BRUTAL STYLE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-6 mb-16"
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="border-4 border-primary bg-primary hover:bg-transparent text-dark hover:text-primary px-10 py-5 uppercase tracking-widest font-black text-lg transition-all"
              >
                {t("cta")}
              </motion.button>

              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="border-4 border-light text-light hover:bg-light hover:text-dark px-10 py-5 uppercase tracking-widest font-black text-lg transition-all"
              >
                {t("ctaSecondary")}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats - HIGH CONTRAST BOXES */}
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="border-4 border-light hover:border-primary p-6 bg-dark transition-all relative overflow-hidden group"
                >
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-secondary group-hover:bg-primary transition-colors" />

                  <div className="text-4xl md:text-5xl font-black text-primary mb-2 font-heading">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-light uppercase tracking-wider font-bold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - BRUTAL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="border-2 border-light/50 p-2">
            <span className="text-light/70 text-xs uppercase tracking-widest font-black font-mono">
              SCROLL
            </span>
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-primary text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Corner Accents - SHARP */}
      <div className="absolute top-24 left-0 w-16 h-16 border-t-8 border-l-8 border-secondary" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary" />
    </section>
  );
}
