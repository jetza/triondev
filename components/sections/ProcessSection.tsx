"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import GridContainer from "@/components/ui/GridContainer";
import {
  BarChartIcon,
  LayoutIcon,
  TargetIcon,
  FileTextIcon,
  ZapIcon,
  SearchIcon,
  RocketIcon,
  ToolIcon,
} from "@/components/ui/Icons";

export default function ProcessSection() {
  const t = useTranslations("process");

  const steps = [
    { key: "analysis", Icon: BarChartIcon, number: "01" },
    { key: "planning", Icon: LayoutIcon, number: "02" },
    { key: "design", Icon: TargetIcon, number: "03" },
    { key: "content", Icon: FileTextIcon, number: "04" },
    { key: "development", Icon: ZapIcon, number: "05" },
    { key: "testing", Icon: SearchIcon, number: "06" },
    { key: "launch", Icon: RocketIcon, number: "07" },
    { key: "maintenance", Icon: ToolIcon, number: "08" },
  ];

  return (
    <section
      id="process"
      className="py-24 bg-dark-lighter relative overflow-hidden"
    >
      <GridContainer
        showGrid
        columns={24}
        rows={20}
        className="absolute inset-0 opacity-10"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - BRUTAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="border-l-8 border-primary pl-8 mb-6">
            <h2 className="text-5xl md:text-7xl font-heading font-black text-light uppercase tracking-tight">
              {t("title")}
            </h2>
          </div>
          <div className="border-l-4 border-secondary pl-8">
            <p className="text-xl md:text-2xl text-light font-bold uppercase tracking-wide">
              {t("subtitle")}
            </p>
          </div>
        </motion.div>

        {/* Process Steps - ASYMMETRIC GRID */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Card - BRUTAL BOX */}
                <div className="border-4 border-light hover:border-primary transition-all duration-300 p-8 bg-dark h-full flex flex-col relative">
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />

                  {/* Number Badge - TOP RIGHT */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-2 border-primary bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-mono font-black text-sm">
                      [{step.number}]
                    </span>
                  </div>

                  {/* Icon - LARGE SVG */}
                  <div className="mb-6 mt-6">
                    <step.Icon
                      size={64}
                      className="text-primary group-hover:text-secondary transition-colors"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-heading font-black text-light uppercase mb-4 tracking-tight">
                    {t(`steps.${step.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-light/80 font-bold text-sm leading-relaxed flex-1">
                    {t(`steps.${step.key}.description`)}
                  </p>

                  {/* Bottom corner accent */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-secondary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section - BRUTAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="border-4 border-primary p-12 bg-dark relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-8 border-l-8 border-secondary" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-8 border-r-8 border-secondary" />

            <div className="text-center relative z-10">
              <div className="text-3xl md:text-5xl font-heading font-black text-light uppercase mb-6 tracking-tight">
                SPREMNI ZA POČETAK?
              </div>
              <p className="text-light/90 font-bold text-lg mb-8 uppercase tracking-wide">
                Razgovarajmo o vašem projektu
              </p>
              <motion.button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="border-4 border-primary bg-primary hover:bg-transparent text-dark hover:text-primary px-12 py-5 uppercase tracking-widest font-black text-lg transition-all"
              >
                KONTAKTIRAJ NAS
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Thick border lines as decoration */}
      <div className="absolute top-1/4 right-0 w-1 h-64 bg-primary opacity-20" />
      <div className="absolute bottom-1/3 left-0 w-96 h-1 bg-secondary opacity-20" />

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-secondary opacity-30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-primary opacity-30" />
    </section>
  );
}
