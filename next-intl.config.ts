import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = "sr";

  return {
    locale,
    messages: (await import(`./locales/${locale}/common.json`)).default,
  };
});
