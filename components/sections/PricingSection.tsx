"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import GridContainer from "@/components/ui/GridContainer";

const packages = [
  {
    name: "Landing Page",
    price: "1.200-1.800€",
    description: "Jedna stranica, brzo lansiranje",
    features: [
      "1 stranica",
      "Moderan dizajn",
      "Responsive",
      "Osnovni SEO",
      "Kontakt forma",
      "Google Analytics",
    ],
    popular: false,
  },
  {
    name: "Web Sajt",
    price: "2.500-4.500€",
    description: "Do 5 strana, kompletan sajt",
    features: [
      "Do 5 strana",
      "Custom dizajn",
      "Responsive",
      "Napredni SEO",
      "CMS sistem",
      "Kontakt forma",
      "Google Analytics",
      "3 meseca podrške",
    ],
    popular: true,
  },
  {
    name: "Custom App",
    price: "od 5.000€",
    description: "Web aplikacija po zahtevu",
    features: [
      "Neograničen broj strana",
      "Custom funkcionalnosti",
      "Backend + Frontend",
      "Baza podataka",
      "API integracije",
      "Admin panel",
      "6 meseci podrške",
      "Obuka korisnika",
    ],
    popular: false,
  },
];

const additionalServices = [
  { name: "Redizajn sajta", price: "800-2.000€" },
  { name: "Migracija sa WP", price: "600-1.500€" },
  { name: "Copywriting", price: "200-500€" },
  { name: "Logo dizajn", price: "300-800€" },
  { name: "SEO optimizacija", price: "300-800€" },
  { name: "Google Ads", price: "500€" },
  { name: "AI Chatbot", price: "800-1.500€" },
];

export default function PricingSection() {
  const t = useTranslations("packages");

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-dark relative overflow-hidden">
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
            <h2 className="text-5xl md:text-7xl font-nordick font-black text-light uppercase tracking-tight">
              PAKETI
            </h2>
            <div className="text-3xl md:text-5xl font-nordick font-black text-primary uppercase mt-2">
              & CENE
            </div>
          </div>
          <div className="border-l-4 border-secondary pl-8">
            <p className="text-xl md:text-2xl text-light font-bold uppercase tracking-wide">
              Transparentne cene bez skrivenih troškova
            </p>
          </div>
        </motion.div>

        {/* Packages Grid - BRUTAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Popular Badge - BRUTAL */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 border-4 border-primary bg-primary px-8 py-3 z-10">
                  <span className="text-dark font-black uppercase tracking-wider text-sm font-mono">
                    [NAJPOPULARNIJE]
                  </span>
                </div>
              )}

              {/* Card - SHARP EDGES */}
              <div
                className={`relative h-full flex flex-col border-4 ${
                  pkg.popular
                    ? "border-primary bg-dark-lighter"
                    : "border-light bg-dark-lighter"
                } hover:border-primary transition-all duration-300 p-8`}
              >
                {/* Top Accent Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 ${pkg.popular ? "bg-primary" : "bg-secondary"}`}
                />

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-primary flex items-center justify-center">
                  <span className="text-primary font-mono font-black text-lg">
                    [{index + 1}]
                  </span>
                </div>

                <div className="relative z-10 flex-1 flex flex-col pt-8">
                  {/* Package Name */}
                  <h3 className="text-2xl md:text-3xl font-nordick font-black text-light uppercase mb-4 tracking-tight">
                    {pkg.name}
                  </h3>

                  {/* Price - BIG & BOLD */}
                  <div className="mb-6">
                    <div className="text-4xl md:text-5xl font-nordick font-black text-primary mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-light/80 font-bold uppercase text-sm tracking-wider">
                      {pkg.description}
                    </div>
                  </div>

                  {/* Features - CLEAN LIST */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 border-2 border-primary bg-primary/20 shrink-0 flex items-center justify-center mt-0.5">
                          <span className="text-primary text-xs font-black">
                            ✓
                          </span>
                        </div>
                        <span className="text-light font-bold text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - BRUTAL */}
                  <motion.button
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full border-4 ${
                      pkg.popular
                        ? "border-primary bg-primary text-dark hover:bg-transparent hover:text-primary"
                        : "border-light text-light hover:bg-light hover:text-dark"
                    } py-4 uppercase tracking-widest font-black text-sm transition-all`}
                  >
                    ZATRAŽI PONUDU
                  </motion.button>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-secondary" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services - BRUTAL GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="border-l-8 border-primary pl-8 mb-8">
            <h3 className="text-3xl md:text-5xl font-nordick font-black text-light uppercase tracking-tight">
              DODATNE USLUGE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-4 border-light hover:border-primary transition-all duration-300 p-6 bg-dark-lighter group"
              >
                {/* Top bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary group-hover:bg-primary transition-colors" />

                <div className="flex items-center justify-between relative">
                  <span className="text-light font-black uppercase text-sm tracking-wide">
                    {service.name}
                  </span>
                  <div className="border-2 border-primary px-4 py-2">
                    <span className="text-primary font-mono font-black text-sm">
                      {service.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Notes - BRUTAL BOX */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="border-4 border-secondary p-8 bg-dark-lighter relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary" />

            <p className="text-light/90 leading-relaxed font-bold">
              <span className="text-primary font-black uppercase tracking-wider">
                [NAPOMENA]
              </span>{" "}
              Hosting i domen se kupuju posebno (pomažemo pri izboru). Mogućnost
              plaćanja na 12 mesečnih rata. Održavanje od 50€/mesečno.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-primary opacity-30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-secondary opacity-30" />
    </section>
  );
}
