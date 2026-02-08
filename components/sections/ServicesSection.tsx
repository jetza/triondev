"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import GridContainer from "@/components/ui/GridContainer";
import {
  CodeIcon,
  RocketIcon,
  PaletteIcon,
  ChartIcon,
} from "@/components/ui/Icons";

export default function ServicesSection() {
  const t = useTranslations("services");
  const { resolvedTheme } = useTheme();

  const services = [
    {
      key: "webDevelopment",
      Icon: CodeIcon,
    },
    {
      key: "webApps",
      Icon: RocketIcon,
    },
    {
      key: "uiux",
      Icon: PaletteIcon,
    },
    {
      key: "seo",
      Icon: ChartIcon,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0">
        <GridContainer
          showGrid
          columns={16}
          rows={12}
          className="w-full h-full opacity-10"
        />
      </div>

      {/* Thick accent lines */}
      <div className="absolute top-0 left-1/4 w-1 h-32 bg-primary opacity-30" />
      <div className="absolute bottom-0 right-1/3 w-64 h-1 bg-gray opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - BRUTAL STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-4xl"
        >
          <div className="border-l-8 border-primary pl-8 mb-6 bg-background/50 py-6">
            <h2 className="text-5xl md:text-7xl font-heading font-black text-foreground uppercase leading-none">
              <span className="text-gray">[</span>
              {t("title")}
              <span className="text-gray">]</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-foreground/80 font-bold uppercase tracking-wide border-l-4 border-gray pl-8">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Services Grid - SVG CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative w-full overflow-hidden"
              style={{ aspectRatio: "804/500" }}
            >
              {/* SVG Card Background - Conditional rendering based on theme */}
              {resolvedTheme !== "dark" ? (
                <>
                  {/* Light theme normal */}
                  <Image
                    src="/assets/svgs/card.svg"
                    alt=""
                    fill
                    className="object-fill block group-hover:hidden"
                    priority
                  />
                  {/* Light theme hover */}
                  <Image
                    src="/assets/svgs/card-hover.svg"
                    alt=""
                    fill
                    className="object-fill hidden group-hover:block"
                    priority
                  />
                </>
              ) : (
                <>
                  {/* Dark theme normal */}
                  <Image
                    src="/assets/svgs/card-dark.svg"
                    alt=""
                    fill
                    className="object-fill block group-hover:hidden"
                  />
                  {/* Dark theme hover */}
                  <Image
                    src="/assets/svgs/card-dark-hover.svg"
                    alt=""
                    fill
                    className="object-fill hidden group-hover:block"
                  />
                </>
              )}

              {/* Title - positioned on the dark frame, top-left, overlapping */}
              <div
                className="absolute z-10 overflow-hidden"
                style={{
                  left: "9%",
                  top: "6%",
                  maxWidth: "50%",
                }}
              >
                <h3 className="font-heading font-black text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-foreground lowercase leading-[1.1]">
                  {t(`${service.key}.title`)}
                </h3>
                <h3 className="font-heading font-black text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-foreground lowercase leading-[1.1]">
                  {t(`${service.key}.title2`)}
                </h3>
              </div>

              {/* Content area - 60% description left, 40% icon right */}
              <div
                className="absolute overflow-hidden"
                style={{
                  left: "9%",
                  right: "11.5%",
                  top: "20%",
                  bottom: "12%",
                }}
              >
                <div className="w-full h-full flex items-center justify-between">
                  {/* Left Side - Description ~60% */}
                  <div className="w-[60%] min-w-0">
                    <p className="font-heading font-medium text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-foreground leading-relaxed text-justify">
                      {t(`${service.key}.description`)}
                    </p>
                  </div>

                  {/* Right Side - Icon ~40%, centered vertically with text */}
                  <div className="w-[40%] flex items-center justify-center">
                    <service.Icon
                      size={40}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 text-foreground group-hover:text-primary transition-colors"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 border-8 border-foreground p-8 bg-background/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-3xl text-foreground font-heading font-black uppercase tracking-wide">
                Ne vidite što vam treba?
              </p>
              <p className="text-foreground/70 font-bold">
                Kontaktirajte nas za custom rešenje
              </p>
            </div>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative group"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <div className="relative">
                {/* Back layer - shadow */}
                <div className="absolute top-1.5 left-1.5 w-full h-full bg-primary border-4 border-foreground group-hover:bg-gray transition-colors" />

                {/* Front layer */}
                <div className="relative border-4 border-foreground bg-background group-hover:border-primary transition-colors px-6 py-3 flex items-center gap-2">
                  <span className="font-black text-lg text-foreground">
                    &lt;
                  </span>
                  <span className="font-bold uppercase text-xs tracking-wider text-foreground">
                    kontakt
                  </span>
                  <span className="font-black text-lg text-foreground">
                    /&gt;
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-foreground group-hover:text-primary transition-colors"
                  >
                    <path
                      d="M5,12 L19,12 M13,6 L19,12 L13,18"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-gray" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-primary" />
    </section>
  );
}
