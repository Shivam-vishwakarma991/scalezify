import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { portfolio } from "@/constants/data";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Case Studies | Luxury Travel Marketing Results | Scalezify",
  description: "Explore our case studies to see how we drive massive ROAS, reduce CPL, and scale organic traffic for luxury car rentals and premium travel agencies across India.",
  keywords: ["luxury car rental case studies", "travel agency marketing results", "travel brand growth", "scalezify portfolio", "travel lead generation success"],
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#0D1040] pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-400">
              A detailed look at how we drive growth for luxury car rentals and travel agencies across India.
            </p>
          </div>

          <div className="space-y-8">
            {portfolio.map((item, index) => (
              <div
                key={item.id}
                className="bg-[#1B2080]/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-10"
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="lg:w-2/3 space-y-6">
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-[#FFB800] font-heading font-bold text-xl">{item.id}</span>
                        <h2 className="text-3xl font-bold font-heading text-white">{item.name}</h2>
                      </div>
                      <p className="text-gray-400 flex items-center gap-1">
                        <span className="text-gray-500">📍</span> {item.location}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-[#0D1040]/50 rounded-xl border border-gray-800/50">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Monthly Ad Spend</p>
                        <p className="text-gray-300">{item.spend}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Services Provided</p>
                        <p className="text-gray-300">{item.services}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">The Challenge & Strategy</h3>
                      <p className="text-gray-400 leading-relaxed">
                        [Placeholder for detailed case study content. For {item.name}, the strategy involved scaling lead generation while maintaining a premium brand positioning and reducing reliance on third-party aggregators.]
                      </p>
                    </div>
                  </div>

                  <div className="lg:w-1/3 flex flex-col justify-center">
                    <div className="bg-[#1B2080] rounded-2xl p-8 border border-[#FFB800]/20 text-center h-full flex flex-col items-center justify-center space-y-4 shadow-xl shadow-[#1B2080]/20">
                      <p className="text-sm uppercase tracking-widest text-[#FFB800] font-semibold">Key Result</p>
                      <p className="text-3xl md:text-4xl font-bold font-heading text-white leading-tight">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-[#1B2080]/20 rounded-2xl p-12 border border-[#1B2080]">
            <h2 className="text-3xl font-bold font-heading text-white mb-4">Want these results for your brand?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Stop renting your leads from aggregators. Start building your own predictable growth engine today.</p>
            <Button asChild size="lg">
              <Link href={siteConfig.contact.calendly} target="_blank">Book a Strategy Call</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
