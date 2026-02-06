"use client";

import { motion } from "framer-motion";
import GridContainer from "@/components/ui/GridContainer";
import GlitchText from "@/components/ui/GlitchText";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-COMMERCE",
      subtitle: "PLATFORM",
      description:
        "Custom online prodavnica sa kompleksnim backend sistemom, integracijom plaćanja i admin panelom za upravljanje proizvodima.",
      tech: ["NEXT.JS", "STRIPE", "POSTGRESQL"],
      year: "2025",
    },
    {
      title: "SAAS",
      subtitle: "APPLICATION",
      description:
        "Kompletna SaaS platforma sa subscription modelom, real-time notifikacijama i advanced analytics dashboard-om.",
      tech: ["REACT", "NODE.JS", "MONGODB"],
      year: "2025",
    },
    {
      title: "FINTECH",
      subtitle: "DASHBOARD",
      description:
        "Banking dashboard sa real-time transakcijama, multi-currency podrškom i naprednim security features.",
      tech: ["TYPESCRIPT", "WEBSOCKETS", "AWS"],
      year: "2024",
    },
  ];

  return (
    <>
      {/* Projects Grid Section */}
      <section id="projects" className="py-24 bg-dark relative overflow-hidden">
        <GridContainer
          showGrid
          columns={24}
          rows={16}
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
                <GlitchText as="span" delay={300}>
                  PROJEKTI
                </GlitchText>
              </h2>
            </div>
            <div className="border-l-4 border-secondary pl-8">
              <p className="text-xl md:text-2xl text-light font-bold uppercase tracking-wide">
                Rešenja koja pokreću biznis
              </p>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Project Card - ASYMMETRIC LAYOUT */}
                <div className="border-4 border-light hover:border-primary transition-all duration-300 bg-dark-lighter">
                  <div className="grid md:grid-cols-12 gap-0">
                    {/* Left - Number & Title */}
                    <div className="md:col-span-5 border-b-4 md:border-b-0 md:border-r-4 border-light group-hover:border-primary transition-colors p-8 md:p-12 bg-dark relative">
                      {/* Top accent */}
                      <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />

                      {/* Year badge */}
                      <div className="border-2 border-primary px-4 py-2 inline-block mb-6">
                        <span className="text-primary font-mono font-black text-sm">
                          [{project.year}]
                        </span>
                      </div>

                      {/* Project number */}
                      <div className="text-8xl md:text-9xl font-black text-primary/20 font-mono leading-none mb-4">
                        0{index + 1}
                      </div>

                      {/* Title */}
                      <h3 className="text-4xl md:text-5xl font-heading font-black text-light uppercase tracking-tight leading-none">
                        {project.title}
                      </h3>
                      <div className="text-3xl md:text-4xl font-heading font-black text-secondary uppercase tracking-tight mt-2">
                        {project.subtitle}
                      </div>
                    </div>

                    {/* Right - Details */}
                    <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                      {/* Description */}
                      <p className="text-light/90 font-bold text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div>
                        <div className="text-primary font-black uppercase text-sm tracking-widest mb-4 font-mono">
                          [TECH STACK]
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, i) => (
                            <div
                              key={i}
                              className="border-2 border-secondary px-4 py-2 hover:bg-secondary hover:text-dark transition-all"
                            >
                              <span className="font-mono font-black text-xs tracking-wider text-light hover:text-dark">
                                {tech}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-secondary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Thick border lines */}
        <div className="absolute top-1/3 right-0 w-1 h-48 bg-primary opacity-20" />
        <div className="absolute bottom-1/4 left-0 w-64 h-1 bg-secondary opacity-20" />

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-primary opacity-30" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-secondary opacity-30" />
      </section>

      {/* CTA Banner - BRUTAL WITH MORE MAGENTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <GridContainer
            showGrid
            columns={20}
            rows={8}
            className="w-full h-full"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-8 h-8 border-4 border-dark/20" />
        <div className="absolute top-4 right-4 w-8 h-8 border-4 border-dark/20" />
        <div className="absolute bottom-4 left-1/4 w-12 h-12 border-4 border-dark/20" />
        <div className="absolute bottom-4 right-1/4 w-12 h-12 border-4 border-dark/20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="border-8 border-dark/20 p-12 bg-primary/50">
              <h3 className="text-3xl md:text-5xl font-heading font-black text-dark uppercase tracking-tight mb-6">
                TREBATE CUSTOM PROJEKAT?
              </h3>
              <p className="text-dark/90 font-bold text-lg leading-relaxed mb-8 uppercase tracking-wide">
                Od ideje do realizacije - gradimo digitalna rešenja koja
                funkcionišu
              </p>
              <motion.button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="border-4 border-dark bg-dark hover:bg-transparent text-light hover:text-dark px-12 py-5 uppercase tracking-widest font-black text-lg transition-all"
              >
                RAZGOVARAJMO
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-8 border-l-8 border-dark/20" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-8 border-r-8 border-dark/20" />
      </section>
    </>
  );
}
