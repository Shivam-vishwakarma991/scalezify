import Link from "next/link";
import { Metadata } from "next";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/constants/data";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Case Studies | Luxury Travel Marketing Results | Scalezify",
  description: "Explore how Scalezify drives premium demand, stronger ROAS, and more direct lead generation for luxury car rentals and travel brands.",
  keywords: ["luxury car rental case studies", "travel marketing results", "performance marketing travel", "Scalezify work"],
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[var(--surface-soft)] pt-28 text-[#111111]">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#6d675c]">Case studies</p>
            <h1 className="mt-5 text-5xl leading-[1.02] tracking-[-0.05em] sm:text-6xl">
              Selected engagements where
              <span className="block text-[#686258]">premium positioning met measurable growth.</span>
            </h1>
          </div>

          <div className="mt-14 space-y-5">
            {portfolio.map((item) => (
              <article
                key={item.id}
                className="rounded-[2rem] border border-black/8 bg-white/55 p-6 shadow-[0_18px_50px_rgba(20,18,14,0.08)] sm:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[80px_minmax(0,1fr)_minmax(260px,0.4fr)]">
                  <div className="text-4xl text-[#8b8579]">{item.id}</div>
                  <div>
                    <h2 className="text-3xl">{item.name}</h2>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#726b60]">{item.location}</p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="eyebrow text-[#837b70]">Monthly spend</p>
                        <p className="mt-2 text-sm leading-7 text-[#5a554c]">{item.spend}</p>
                      </div>
                      <div>
                        <p className="eyebrow text-[#837b70]">Scope</p>
                        <p className="mt-2 text-sm leading-7 text-[#5a554c]">{item.services}</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="eyebrow text-[#837b70]">Approach</p>
                      <p className="mt-2 text-sm leading-7 text-[#5a554c]">
                        For {item.name}, the strategy focused on making direct inquiries more consistent while protecting the premium positioning of the brand across search, social, and landing page touchpoints.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] bg-[#090909] p-6 text-[var(--copy-strong)]">
                    <p className="eyebrow text-[var(--accent)]">Key result</p>
                    <p className="mt-4 text-3xl leading-tight">{item.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] bg-[#090909] p-8 text-[var(--copy-strong)] sm:p-10">
            <h2 className="text-3xl leading-tight">Want a demand system like this for your brand?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--copy-body)]">
              If your brand is still leaning too heavily on third-party demand, we can map a cleaner acquisition model around owned channels.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href={siteConfig.contact.calendly} target="_blank">
                  Book a Strategy Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
