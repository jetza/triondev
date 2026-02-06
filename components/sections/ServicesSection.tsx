"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import GridContainer from "@/components/ui/GridContainer";
import {
  CodeIcon,
  RocketIcon,
  PaletteIcon,
  ChartIcon,
} from "@/components/ui/Icons";

export default function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    {
      key: "webDevelopment",
      Icon: CodeIcon,
      number: "01",
    },
    {
      key: "webApps",
      Icon: RocketIcon,
      number: "02",
    },
    {
      key: "uiux",
      Icon: PaletteIcon,
      number: "03",
    },
    {
      key: "seo",
      Icon: ChartIcon,
      number: "04",
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

        {/* Services Grid - SHARP CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10, y: -5 }}
              className="group relative border-4 border-foreground hover:border-primary bg-background transition-all overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gray group-hover:bg-primary transition-colors" />

              {/* Number badge */}
              <div className="absolute top-4 right-4 border-2 border-foreground/30 group-hover:border-primary px-3 py-1">
                <span className="text-foreground/50 font-mono text-xs group-hover:text-primary transition-colors">
                  {service.number}
                </span>
              </div>

              <div className="p-8 pt-12">
                {/* Icon - LARGE */}
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  <service.Icon
                    size={64}
                    className="text-primary group-hover:text-gray transition-colors"
                  />
                </div>

                {/* Title - BOLD UPPERCASE */}
                <h3 className="text-3xl md:text-4xl font-heading font-black text-foreground uppercase mb-4 leading-none">
                  {t(`${service.key}.title`)}
                </h3>

                {/* Description - BOLD */}
                <p className="text-foreground/70 text-lg font-bold leading-relaxed">
                  {t(`${service.key}.description`)}
                </p>

                {/* Bottom corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary/20 group-hover:border-primary transition-colors" />
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
          className="mt-16 border-4 border-foreground p-8 bg-background/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xl text-foreground font-black uppercase tracking-wide">
                Ne vidite što vam treba?
              </p>
              <p className="text-foreground/70 font-bold">
                Kontaktirajte nas za custom rešenje
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              className="border-4 border-primary bg-primary hover:bg-transparent text-foreground hover:text-primary px-8 py-4 uppercase tracking-widest font-black transition-all whitespace-nowrap"
            >
              Kontakt →
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
