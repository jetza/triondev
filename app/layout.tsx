import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import messages from "@/locales/sr/common.json";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TRIONDEV - Digitalna Rešenja za Vaš Biznis",
  description:
    "Kreiramo moderne web sajtove i aplikacije koje donose rezultate. Specijalizovani za web development, UI/UX dizajn i SEO optimizaciju.",
  keywords: [
    "web development",
    "web dizajn",
    "aplikacije",
    "SEO",
    "digitalna agencija",
    "Srbija",
  ],
  authors: [{ name: "TRIONDEV" }],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    alternateLocale: "en_US",
    siteName: "TRIONDEV",
    title: "TRIONDEV - Digitalna Rešenja za Vaš Biznis",
    description:
      "Kreiramo moderne web sajtove i aplikacije koje donose rezultate.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider locale="sr" messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
