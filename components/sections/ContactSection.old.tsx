"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Ime mora imati najmanje 2 karaktera"),
  email: z.string().email("Unesite validnu email adresu"),
  phone: z.string().min(9, "Unesite validan broj telefona"),
  projectType: z.enum(["landing", "website", "app", "other"]),
  hasWebsite: z.boolean(),
  hasLogo: z.boolean(),
  hasContent: z.boolean(),
  pages: z.string(),
  languages: z.string(),
  needsAdmin: z.boolean(),
  deadline: z.string(),
  budget: z.enum(["under1000", "1000-2000", "2000-5000", "5000plus"]),
  needsSEO: z.boolean(),
  needsMaintenance: z.boolean(),
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
      hasWebsite: false,
      hasLogo: false,
      hasContent: false,
      needsAdmin: false,
      needsSEO: false,
      needsMaintenance: false,
      acceptsPrivacy: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Mock API call - replace with actual endpoint
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
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* BRUTAL GRID */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-light" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-light" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-black text-light tracking-tighter inline-block">
            LET'S <span className="text-primary">WORK</span>
          </h2>
          <div className="h-1 bg-primary w-32 mt-4" />
          <p className="text-light/70 mt-4 font-mono text-sm max-w-2xl">
            // {t("title")}
          </p>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="backdrop-blur-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] p-8 md:p-12 rounded-2xl shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-light font-semibold mb-2">
                  {t("form.name")} *
                </label>
                <input
                  {...register("name")}
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] text-light placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Marko Marković"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-light font-semibold mb-2">
                  {t("form.email")} *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] text-light placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="marko@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-light font-semibold mb-2">
                  {t("form.phone")} *
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] text-light placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="+381 60 123 4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-light font-semibold mb-2">
                  {t("form.projectType")} *
                </label>
                <select
                  {...register("projectType")}
                  className="w-full px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] text-light focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                >
                  <option value="landing" className="bg-dark text-light">
                    {t("form.projectTypes.landing")}
                  </option>
                  <option value="website" className="bg-dark text-light">
                    {t("form.projectTypes.website")}
                  </option>
                  <option value="app" className="bg-dark text-light">{t("form.projectTypes.app")}</option>
                  <option value="other" className="bg-dark text-light">{t("form.projectTypes.other")}</option>
                </select>
              </div>

              {/* Number of Pages */}
              <div>
                <label className="block text-light font-semibold mb-2">
                  {t("form.pages")}
                </label>
                <input
                  {...register("pages")}
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] text-light placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="5"
                />
              </div>

              {/* Languages */}
              <div>
                <label className="block text-light font-semibold mb-2">
                  {t("form.languages")}
                </label>
                <input
                  {...register("languages")}
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] text-light placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Srpski, Engleski"
                />
              </div>

              {/* Deadline */}
              <div>
                <label className="block text-light font-semibold mb-2">
                  {t("form.deadline")}
                </label>
                <input
                  {...register("deadline")}
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] text-light placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="2 nedelje, 1 mesec..."
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-light font-semibold mb-2">
                  {t("form.budget")} *
                </label>
                <select
                  {...register("budget")}
                  className="w-full px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] text-light focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                >
                  <option value="under1000" className="bg-dark text-light">
                    {t("form.budgetRanges.under1000")}
                  </option>
                  <option value="1000-2000" className="bg-dark text-light">
                    {t("form.budgetRanges.1000-2000")}
                  </option>
                  <option value="2000-5000" className="bg-dark text-light">
                    {t("form.budgetRanges.2000-5000")}
                  </option>
                  <option value="5000plus" className="bg-dark text-light">
                    {t("form.budgetRanges.5000plus")}
                  </option>
                </select>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  {...register("hasWebsite")}
                  type="checkbox"
                  className="w-5 h-5 rounded border-[rgba(255,255,255,0.12)] text-primary focus:ring-primary bg-[rgba(255,255,255,0.03)]"
                />
                <span className="text-light">
                  {t("form.hasWebsite")}
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  {...register("hasLogo")}
                  type="checkbox"
                  className="w-5 h-5 rounded border-[rgba(255,255,255,0.12)] text-primary focus:ring-primary bg-[rgba(255,255,255,0.03)]"
                />
                <span className="text-light">
                  {t("form.hasLogo")}
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  {...register("hasContent")}
                  type="checkbox"
                  className="w-5 h-5 rounded border-[rgba(255,255,255,0.12)] text-primary focus:ring-primary bg-[rgba(255,255,255,0.03)]"
                />
                <span className="text-light">
                  {t("form.hasContent")}
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  {...register("needsAdmin")}
                  type="checkbox"
                  className="w-5 h-5 rounded border-[rgba(255,255,255,0.12)] text-primary focus:ring-primary bg-[rgba(255,255,255,0.03)]"
                />
                <span className="text-light">
                  {t("form.needsAdmin")}
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  {...register("needsSEO")}
                  type="checkbox"
                  className="w-5 h-5 rounded border-[rgba(255,255,255,0.12)] text-primary focus:ring-primary bg-[rgba(255,255,255,0.03)]"
                />
                <span className="text-light">
                  {t("form.needsSEO")}
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  {...register("needsMaintenance")}
                  type="checkbox"
                  className="w-5 h-5 rounded border-[rgba(255,255,255,0.12)] text-primary focus:ring-primary bg-[rgba(255,255,255,0.03)]"
                />
                <span className="text-light">
                  {t("form.needsMaintenance")}
                </span>
              </label>
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="block text-light font-semibold mb-2">
                {t("form.description")} *
              </label>
              <textarea
                {...register("description")}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] text-light placeholder:text-[#9CA3AF] focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                placeholder={t("form.descriptionPlaceholder")}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Privacy Policy */}
            <div className="mt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  {...register("acceptsPrivacy")}
                  type="checkbox"
                  className="w-5 h-5 rounded border-[rgba(255,255,255,0.12)] text-primary focus:ring-primary bg-[rgba(255,255,255,0.03)] mt-1"
                />
                <span className="text-light text-sm">
                  {t("form.privacy")} *
                </span>
              </label>
              {errors.acceptsPrivacy && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.acceptsPrivacy.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full text-lg"
              >
                {isSubmitting ? t("form.submitting") : t("form.submit")}
              </Button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 backdrop-blur-lg bg-green-500/20 border border-green-500/30 text-green-200 rounded-lg text-center"
              >
                {t("form.success")}
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 backdrop-blur-lg bg-red-500/20 border border-red-500/30 text-red-200 rounded-lg text-center"
              >
                {t("form.error")}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
