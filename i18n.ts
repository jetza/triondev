import { getRequestConfig } from "next-intl/server";

export const locales = ["sr", "en"] as const;
export const defaultLocale = "sr" as const;

export default getRequestConfig(async () => {
  // Default to SR locale for now, will implement proper routing later
  const locale = "sr";

  return {
    locale,
    messages: (await import(`./locales/${locale}/common.json`)).default,
  };
});
