import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { siteConfig, withBasePath } from "@/constants/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Scalezify | India's Dedicated Growth Agency for Luxury Travel & Transportation",
  description: "We help premium travel and transportation brands generate direct leads, reduce aggregator dependency, and scale revenue — with Google Ads, Meta Ads, SEO, and full-funnel digital strategy.",
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: withBasePath("/favIcon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${syne.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--surface-0)] text-[var(--copy-strong)]">
        {children}
      </body>
    </html>
  );
}
