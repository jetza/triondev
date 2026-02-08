"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import GridContainer from "@/components/ui/GridContainer";

const contactSchema = z.object({
  name: z.string().min(2, "Ime mora imati najmanje 2 karaktera"),
  email: z.string().email("Unesite validnu email adresu"),
  phone: z.string().min(9, "Unesite validan broj telefona"),
  projectType: z.enum(["landing", "website", "app", "other"]),
  budget: z.enum(["under1000", "1000-2000", "2000-5000", "5000plus"]),
  deadline: z.string(),
  description: z
    .string()
    .min(20, "Molimo vas da opišete projekat detaljnije (min 20 karaktera)"),
  acceptsPrivacy: z.boolean().refine((val) => val === true, {
    message: "Morate prihvatiti politiku privatnosti",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      acceptsPrivacy: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      console.log("Form Data:", data);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus("success");
      reset();

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
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
          className="mb-16"
        >
          <div className="border-l-8 border-primary pl-8 mb-6">
            <h2 className="text-5xl md:text-7xl font-nordick font-black text-foreground uppercase tracking-tight">
              {t("title")}
            </h2>
          </div>
          <div className="border-l-4 border-gray pl-8">
            <p className="text-xl md:text-2xl text-foreground font-bold uppercase tracking-wide">
              {t("subtitle")}
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Contact Info - LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8"
          >
            {/* Contact Cards */}
            <div className="border-4 border-primary p-8 bg-background relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />
              <div className="text-primary font-mono font-black text-sm mb-4 uppercase tracking-wider">
                [@EMAIL]
              </div>
              <a
                href="mailto:info@codentria.com"
                className="text-foreground font-black text-xl hover:text-primary transition-colors font-mono"
              >
                info@codentria.com
              </a>
            </div>

            <div className="border-4 border-gray p-8 bg-background relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gray" />
              <div className="text-gray font-mono font-black text-sm mb-4 uppercase tracking-wider">
                [#TELEFON]
              </div>
              <a
                href="tel:+381601234567"
                className="text-foreground font-black text-xl hover:text-gray transition-colors font-mono"
              >
                +381 60 123 4567
              </a>
            </div>

            <div className="border-4 border-primary p-8 bg-background relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />
              <div className="text-primary font-mono font-black text-sm mb-4 uppercase tracking-wider">
                [★SOCIALS]
              </div>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-foreground hover:border-primary hover:bg-primary flex items-center justify-center transition-all group"
                >
                  <span className="text-foreground group-hover:text-foreground font-black">
                    in
                  </span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-foreground hover:border-primary hover:bg-primary flex items-center justify-center transition-all group"
                >
                  <span className="text-foreground group-hover:text-foreground font-black">
                    gh
                  </span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-foreground hover:border-primary hover:bg-primary flex items-center justify-center transition-all group"
                >
                  <span className="text-foreground group-hover:text-foreground font-black">
                    ig
                  </span>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="border-4 border-foreground p-6 bg-background relative">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-gray" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-gray" />
              <p className="text-foreground/90 font-bold text-sm uppercase tracking-wide">
                <span className="text-primary font-black">[RESPONSE TIME]</span>
                <br />
                24h radnim danima
              </p>
            </div>
          </motion.div>

          {/* Form - RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border-4 border-foreground p-8 md:p-12 bg-background relative"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />

              <div className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary font-black uppercase text-sm mb-3 tracking-wider font-mono">
                      [IME] *
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      className="w-full px-6 py-4 border-4 border-foreground bg-background text-foreground focus:border-primary transition-all font-bold placeholder:text-foreground/30"
                      placeholder="MARKO MARKOVIĆ"
                    />
                    {errors.name && (
                      <p className="text-primary text-xs mt-2 font-bold">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-primary font-black uppercase text-sm mb-3 tracking-wider font-mono">
                      [EMAIL] *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-6 py-4 border-4 border-foreground bg-background text-foreground focus:border-primary transition-all font-bold placeholder:text-foreground/30"
                      placeholder="MARKO@EXAMPLE.COM"
                    />
                    {errors.email && (
                      <p className="text-primary text-xs mt-2 font-bold">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-primary font-black uppercase text-sm mb-3 tracking-wider font-mono">
                    [TELEFON] *
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full px-6 py-4 border-4 border-foreground bg-background text-foreground focus:border-primary transition-all font-bold placeholder:text-foreground/30"
                    placeholder="+381 60 123 4567"
                  />
                  {errors.phone && (
                    <p className="text-primary text-xs mt-2 font-bold">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Project Type & Budget */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary font-black uppercase text-sm mb-3 tracking-wider font-mono">
                      [TIP PROJEKTA] *
                    </label>
                    <select
                      {...register("projectType")}
                      className="w-full px-6 py-4 border-4 border-foreground bg-background text-foreground focus:border-primary transition-all font-bold"
                    >
                      <option value="landing">
                        {t("form.projectTypes.landing")}
                      </option>
                      <option value="website">
                        {t("form.projectTypes.website")}
                      </option>
                      <option value="app">{t("form.projectTypes.app")}</option>
                      <option value="other">
                        {t("form.projectTypes.other")}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-primary font-black uppercase text-sm mb-3 tracking-wider font-mono">
                      [BUDŽET] *
                    </label>
                    <select
                      {...register("budget")}
                      className="w-full px-6 py-4 border-4 border-foreground bg-background text-foreground focus:border-primary transition-all font-bold"
                    >
                      <option value="under1000">{"< 1.000€"}</option>
                      <option value="1000-2000">1.000€ - 2.000€</option>
                      <option value="2000-5000">2.000€ - 5.000€</option>
                      <option value="5000plus">{">5.000€"}</option>
                    </select>
                  </div>
                </div>

                {/* Deadline */}
                <div>
                  <label className="block text-primary font-black uppercase text-sm mb-3 tracking-wider font-mono">
                    [DEADLINE]
                  </label>
                  <input
                    {...register("deadline")}
                    type="text"
                    className="w-full px-6 py-4 border-4 border-foreground bg-background text-foreground focus:border-primary transition-all font-bold placeholder:text-foreground/30"
                    placeholder="2-3 MESECA"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-primary font-black uppercase text-sm mb-3 tracking-wider font-mono">
                    [OPIS PROJEKTA] *
                  </label>
                  <textarea
                    {...register("description")}
                    rows={5}
                    className="w-full px-6 py-4 border-4 border-foreground bg-background text-foreground focus:border-primary transition-all font-bold placeholder:text-foreground/30 resize-none"
                    placeholder="DETALJAN OPIS VAŠEG PROJEKTA..."
                  />
                  {errors.description && (
                    <p className="text-primary text-xs mt-2 font-bold">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    {...register("acceptsPrivacy")}
                    type="checkbox"
                    className="w-6 h-6 border-4 border-foreground bg-background checked:bg-primary mt-1"
                  />
                  <label className="text-foreground/90 font-bold text-sm">
                    Prihvatam{" "}
                    <a
                      href="/privacy"
                      className="text-primary hover:underline font-black"
                    >
                      politiku privatnosti
                    </a>
                    {" *"}
                  </label>
                </div>
                {errors.acceptsPrivacy && (
                  <p className="text-primary text-xs font-bold">
                    {errors.acceptsPrivacy.message}
                  </p>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full border-4 border-primary bg-primary hover:bg-transparent text-foreground hover:text-primary py-5 uppercase tracking-widest font-black text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "ŠALJEM..." : "POŠALJI UPIT"}
                </motion.button>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="border-4 border-gray p-6 bg-gray/10">
                    <p className="text-gray font-black uppercase text-center">
                      ✓ PORUKA USPEŠNO POSLATA!
                    </p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="border-4 border-primary p-6 bg-primary/10">
                    <p className="text-primary font-black uppercase text-center">
                      ✗ GREŠKA PRI SLANJU!
                    </p>
                  </div>
                )}
              </div>

              {/* Corner accents */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gray" />
            </form>
          </motion.div>
        </div>
      </div>

      {/* Thick border lines */}
      <div className="absolute top-1/4 left-0 w-1 h-64 bg-primary opacity-20" />
      <div className="absolute bottom-1/3 right-0 w-96 h-1 bg-gray opacity-20" />

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-primary opacity-30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-gray opacity-30" />
    </section>
  );
}
