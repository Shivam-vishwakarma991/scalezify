import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Scalezify",
  description: "Privacy Policy for Scalezify.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24 bg-white min-h-[70vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose prose-lg text-gray-700">
          <h1 className="text-4xl font-bold font-heading text-[#0D1040] mb-8">Privacy Policy</h1>
          <p>Last updated: June 2026</p>
          <p>
            [Placeholder for Privacy Policy. This page will outline how Scalezify collects, uses, and protects user data. To be provided by legal counsel.]
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
