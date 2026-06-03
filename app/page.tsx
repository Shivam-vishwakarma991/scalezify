import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { ClientBar } from "@/components/sections/client-bar";
import { About } from "@/components/sections/about";
import { Founder } from "@/components/sections/founder";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Statistics } from "@/components/sections/statistics";
import { Testimonials } from "@/components/sections/testimonials";
import { Team } from "@/components/sections/team";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scalezify | Luxury Travel & Car Rental Marketing Agency India",
  description: "Scalezify is India's dedicated digital growth & performance marketing agency for luxury travel brands and premium car rentals. We specialize in high-intent lead generation via Google Ads, Meta Ads, and SEO.",
  keywords: ["luxury travel marketing agency", "car rental digital marketing", "luxury car rental lead generation", "travel agency SEO", "performance marketing travel india"],
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ClientBar />
        <About />
        <Founder />
        <Services />
        <Portfolio />
        <Statistics />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
