import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./next-intl.config.ts");

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: {
    appIsrStatus: false,
  },
};

export default withNextIntl(nextConfig);
