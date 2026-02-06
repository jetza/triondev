"use client";

import { useTranslations } from "next-intl";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

  // Rotating messages with highlighted words
  const messages = [
    {
      text: "TREBA TI",
      highlight: "DOBAR",
      rest: "SAJT?",
      highlightSize: "text-7xl md:text-9xl lg:text-[10rem] xl:text-[14rem]",
      restSize: "text-4xl md:text-6xl lg:text-7xl",
    },
    {
      text: "HOĆEŠ",
      highlight: "ONLINE SHOP",
      rest: "KOJI PRODAJE?",
      highlightSize: "text-6xl md:text-8xl lg:text-9xl xl:text-[12rem]",
      restSize: "text-3xl md:text-5xl lg:text-6xl",
    },
    {
      text: "TREBA TI",
      highlight: "LANDING",
      rest: "STRANA ZA VIŠE UPITA?",
      highlightSize: "text-6xl md:text-8xl lg:text-9xl xl:text-[12rem]",
      restSize: "text-3xl md:text-5xl lg:text-6xl",
    },
    {
      text: "PRELAZIŠ SA",
      highlight: "WORDPRESSA",
      rest: "NA BRŽI SAJT?",
      highlightSize: "text-5xl md:text-7xl lg:text-8xl xl:text-[10rem]",
      restSize: "text-3xl md:text-4xl lg:text-5xl",
    },
    {
      text: "TREBA TI",
      highlight: "SEO",
      rest: "I VIŠE KLIJENATA?",
      highlightSize: "text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[16rem]",
      restSize: "text-3xl md:text-5xl lg:text-6xl",
    },
    {
      text: "ŽELIŠ",
      highlight: "APLIKACIJU",
      rest: "KOJA ŠTEDI VREME?",
      highlightSize: "text-5xl md:text-7xl lg:text-8xl xl:text-[10rem]",
      restSize: "text-3xl md:text-4xl lg:text-5xl",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldGlitch, setShouldGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger glitch before changing
      setShouldGlitch(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setShouldGlitch(false);
      }, 400); // Short delay for glitch effect
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  // Reveal effect - words slide in from right as you scroll
  const revealContainer = useRef(null);
  const { scrollYProgress: revealProgress } = useScroll({
    target: revealContainer,
    offset: ["start start", "end start"],
  });

  // White canvas rises from bottom - starts fully below screen, covers hero first
  const canvasY = useTransform(
    revealProgress,
    [0, 0.3, 0.7, 1],
    ["100vh", "0vh", "0vh", "0vh"],
  );

  // Sentences come in earlier, from right-left-right pattern
  const sentence1X = useTransform(
    revealProgress,
    [0, 0.15, 0.4, 0.65, 0.85],
    [2000, 2000, 100, 100, 2000],
  );
  const sentence2X = useTransform(
    revealProgress,
    [0, 0.2, 0.45, 0.6, 0.75],
    [-1500, -1500, 100, 100, -1500],
  );
  const sentence3X = useTransform(
    revealProgress,
    [0, 0.25, 0.5, 0.55, 0.7],
    [2000, 2000, -100, -100, 2000],
  );

  return (
    <>
      {/* Scroll container for reveal effect */}
      <div
        ref={revealContainer}
        className="relative"
        style={{ height: "250vh" }}
      >
        {/* Hero stays fixed while words scroll in */}
        <section
          ref={sectionRef}
          id="home"
          className="sticky top-0 min-h-screen flex items-center bg-dark-gray overflow-hidden pt-24"
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

          {/* White canvas rising from bottom - COVERS entire hero */}
          <motion.div
            style={{
              y: canvasY,
            }}
            className="fixed bottom-0 left-0 right-0 h-screen bg-white border-t-8 border-black z-20 pointer-events-none"
          />

          {/* Reveal Effect - Sentences slide in from left and right - ABOVE canvas */}
          <div className="absolute inset-0 top-1/2 -translate-y-1/2 flex flex-col justify-center gap-12 pointer-events-none z-30 px-8">
            {/* Sentence 1 - from left */}
            <motion.div
              style={{ x: sentence1X }}
              className="font-heading font-black text-[40px] md:text-[60px] lg:text-[80px] text-dark uppercase leading-tight"
            >
              Pravimo softverska rešenja
            </motion.div>

            {/* Sentence 2 - from left */}
            <motion.div
              style={{ x: sentence2X }}
              className="font-heading font-black text-[40px] md:text-[60px] lg:text-[80px] text-secondary uppercase leading-tight"
            >
              kodirana od nule
            </motion.div>

            {/* Sentence 3 - from right */}
            <motion.div
              style={{ x: sentence3X }}
              className="font-heading font-black text-[40px] md:text-[60px] lg:text-[80px] text-primary uppercase leading-tight text-right"
            >
              prilagođena tvom biznisu
            </motion.div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-12 gap-8 items-center min-h-[calc(100vh-120px)]">
              {/* Main Content - Asymmetric */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="col-span-12 lg:col-span-8 lg:col-start-2"
              >
                {/* Rotating Messages - BRUTAL GLITCHY - FIXED HEIGHT */}
                <div className="mb-8 min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center">
                  <AnimatePresence mode="wait">
                    <div
                      key={currentIndex}
                      className="font-heading font-black text-light leading-none relative w-full"
                    >
                      {/* First line - small text - STAGGERED ENTRY */}
                      <motion.div
                        initial={{ opacity: 0, x: -100, skewX: -5 }}
                        animate={{
                          opacity: 1,
                          x: shouldGlitch ? [0, 6, -4, 2, -6, 0] : 0,
                          skewX: 0,
                        }}
                        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        transition={{
                          duration: 0.4,
                          delay: 0,
                          x: {
                            duration: 0.3,
                            repeat: shouldGlitch ? 4 : 0,
                          },
                        }}
                        className="text-3xl md:text-5xl lg:text-6xl mb-4 bg-dark/30 px-6 py-2"
                      >
                        <GlitchText
                          as="span"
                          className="uppercase"
                          shouldGlitch={shouldGlitch}
                        >
                          {messages[currentIndex].text}
                        </GlitchText>
                      </motion.div>

                      {/* Second line - HIGHLIGHTED WORD - HUGE - BLACK COLOR - STAGGERED ENTRY */}
                      <motion.div
                        initial={{ opacity: 0, x: -100, skewX: -5 }}
                        animate={{ opacity: 1, x: 0, skewX: 0 }}
                        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        transition={{
                          duration: 0.5,
                          delay: 0.15,
                        }}
                        className={`${messages[currentIndex].highlightSize} ml-0 md:ml-20 mb-4 tracking-tighter relative overflow-visible`}
                      >
                        <div className="relative inline-block">
                          <GlitchText
                            as="span"
                            className="text-dark uppercase relative z-10"
                            style={{
                              textShadow:
                                "4px 4px 0 var(--primary), -2px -2px 0 var(--primary)",
                              WebkitTextStroke: "2px var(--primary)",
                            }}
                            shouldGlitch={shouldGlitch}
                          >
                            {messages[currentIndex].highlight}
                          </GlitchText>

                          {/* Additional RGB Glitch layers when glitching */}
                          {shouldGlitch && (
                            <>
                              <motion.span
                                className="absolute top-0 left-0 opacity-80 z-0"
                                style={{
                                  mixBlendMode: "screen",
                                  color: "var(--primary)",
                                }}
                                animate={{
                                  x: [-4, -8, -3, -6, -2, -5, -4],
                                  y: [1, -2, 2, -1, 1, -2, 0],
                                }}
                                transition={{
                                  duration: 0.15,
                                  repeat: 15,
                                  ease: "linear",
                                }}
                              >
                                {messages[currentIndex].highlight}
                              </motion.span>

                              <motion.span
                                className="absolute top-0 left-0 opacity-80 z-0"
                                style={{
                                  mixBlendMode: "screen",
                                  color: "var(--gray-medium)",
                                }}
                                animate={{
                                  x: [4, 7, 3, 8, 2, 6, 4],
                                  y: [-1, 2, -2, 1, -1, 2, 0],
                                }}
                                transition={{
                                  duration: 0.15,
                                  repeat: 15,
                                  ease: "linear",
                                }}
                              >
                                {messages[currentIndex].highlight}
                              </motion.span>
                            </>
                          )}
                        </div>
                      </motion.div>

                      {/* Third line - rest of message - STAGGERED ENTRY */}
                      <motion.div
                        initial={{ opacity: 0, x: -100, skewX: -5 }}
                        animate={{
                          opacity: 1,
                          x: shouldGlitch ? [0, -5, 7, -3, 5, 0] : 0,
                          skewX: 0,
                        }}
                        exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3,
                          x: {
                            duration: 0.3,
                            repeat: shouldGlitch ? 4 : 0,
                          },
                        }}
                        className={`${messages[currentIndex].restSize} px-6`}
                      >
                        <GlitchText
                          as="span"
                          className="text-light uppercase"
                          shouldGlitch={shouldGlitch}
                        >
                          {messages[currentIndex].rest}
                        </GlitchText>
                      </motion.div>

                      {/* Random brutalist decorations */}
                      <div className="absolute -right-4 top-1/4 w-2 h-32 bg-primary opacity-30 transform rotate-12" />
                      <div className="absolute -left-8 bottom-1/4 w-24 h-2 bg-secondary opacity-40" />
                    </div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Corner Accents - SHARP */}
          <div className="absolute top-24 left-0 w-16 h-16 border-t-8 border-l-8 border-secondary" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary" />
        </section>
      </div>
    </>
  );
}
