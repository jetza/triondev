"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ConsoleBuddy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Mascot - Bottom Right */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Otvori chat"
        animate={{
          y: [0, -6, 0, -3, 0],
          rotate: [0, -1, 0, 1, 0],
          scale: [1, 1.02, 1, 1.01, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.15, y: -8 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow/shadow beneath */}
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-primary/30 rounded-full blur-md"
          animate={{
            scaleX: [1, 0.85, 1, 0.9, 1],
            opacity: [0.3, 0.2, 0.3, 0.25, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <Image
          src="/assets/svgs/console-buddy.svg"
          alt="Console Buddy"
          width={80}
          height={97}
          className="drop-shadow-lg"
          priority
        />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[480px]"
            >
              <div className="relative">
                {/* Back layer */}
                <div className="absolute top-3 left-3 w-full h-full bg-(--primary) border-8 border-foreground" />

                {/* Front layer */}
                <div className="relative border-8 border-foreground bg-background">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b-4 border-foreground px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/assets/svgs/console-buddy.svg"
                        alt=""
                        width={32}
                        height={39}
                      />
                      <span className="font-heading font-black text-lg text-foreground uppercase tracking-wider">
                        console buddy
                      </span>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-8 h-8 flex items-center justify-center text-foreground hover:text-(--primary) transition-colors font-black text-xl"
                      aria-label="Zatvori"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Chat Body */}
                  <div className="p-6 min-h-[300px] flex flex-col items-center justify-center">
                    <Image
                      src="/assets/svgs/console-chat.svg"
                      alt="Console Chat"
                      width={200}
                      height={200}
                      className="mb-6 opacity-80"
                    />
                    <p className="font-heading font-bold text-foreground text-center text-sm uppercase tracking-wide">
                      ai asistent uskoro dolazi!
                    </p>
                    <p className="text-foreground/60 text-center text-sm mt-2">
                      Tu sam da ti pomognem sa svim pitanjima o našim uslugama.
                    </p>
                  </div>

                  {/* Input placeholder */}
                  <div className="border-t-4 border-foreground px-6 py-4">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        disabled
                        placeholder="uskoro..."
                        className="flex-1 px-4 py-3 border-4 border-foreground/30 bg-background text-foreground/40 font-bold placeholder:text-foreground/30 cursor-not-allowed"
                      />
                      <button
                        disabled
                        className="px-4 py-3 border-4 border-foreground/30 text-foreground/30 font-black uppercase text-sm cursor-not-allowed"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
