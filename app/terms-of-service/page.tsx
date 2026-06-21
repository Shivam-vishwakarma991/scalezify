import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Scalezify",
  description: "Terms of Service for Scalezify.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="flex-1 min-h-[70vh] bg-[var(--surface-soft)] pt-32 pb-24 text-[#111111]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl tracking-[-0.04em]">Terms of Service</h1>
          <p>Last updated: June 2026</p>
          <p className="mt-4 text-base leading-8 text-[#5d584f]">
            [Placeholder for Terms of Service. This page will outline the terms and conditions for using Scalezify&apos;s website and services. To be provided by legal counsel.]
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
