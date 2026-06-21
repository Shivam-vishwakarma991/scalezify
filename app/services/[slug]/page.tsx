import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Button } from "@/components/ui/button";
import { services } from "@/constants/data";
import { siteConfig } from "@/constants/site";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((item) => item.slug === resolvedParams.slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: service.seoTitle || `${service.title} | ${siteConfig.name}`,
    description: service.seoDescription || service.description,
    keywords: service.seoKeywords,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((item) => item.slug === resolvedParams.slug);

  if (!service) notFound();

  return (
    <>
      <Header />
      <main className="flex-1 bg-[var(--surface-soft)] pt-28 text-[#111111]">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10">
          <Link href="/#services" className="text-sm uppercase tracking-[0.2em] text-[#5f594f]">
            Back to services
          </Link>

          <div className="mt-10 rounded-[2rem] border border-black/8 bg-white/50 p-8 shadow-[0_18px_50px_rgba(20,18,14,0.08)] sm:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-[#111111] text-3xl">
              {service.icon}
            </div>

            <h1 className="mt-8 text-4xl leading-[1.02] tracking-[-0.04em] sm:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5a544b]">{service.description}</p>

            <div className="mt-12 border-t border-black/8 pt-10">
              <p className="text-base leading-8 text-[#514c43]">{service.content}</p>

              <h2 className="mt-12 text-2xl">Our approach</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {service.features.map((feature) => (
                  <div key={feature} className="rounded-[1.5rem] border border-black/8 bg-black/[0.02] p-5">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#7b7469]">Focus area</p>
                    <p className="mt-3 text-base leading-7 text-[#111111]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] bg-[#090909] p-8 text-[var(--copy-strong)] sm:p-10">
            <h2 className="text-3xl leading-tight">Ready to scale with {service.title}?</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--copy-body)]">
              Let&apos;s map the demand system, the current bottlenecks, and the commercial target before we recommend a channel mix.
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
