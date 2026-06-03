import { notFound } from "next/navigation";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { services } from "@/constants/data";
import { siteConfig } from "@/constants/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.seoTitle || `${service.title} | ${siteConfig.name}`,
    description: service.seoDescription || service.description,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-24 bg-white min-h-[70vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
          <div className="mb-8">
            <Link href="/#services" className="text-[#FFB800] hover:underline text-sm font-medium">
              ← Back to Services
            </Link>
          </div>
          
          <div className="w-16 h-16 rounded-2xl bg-[#F4F6FF] flex items-center justify-center text-3xl mb-8">
            {service.icon}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#0D1040] mb-6">
            {service.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            {service.description}
          </p>

          {/* Dynamic service content */}
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed">
              {service.content}
            </p>
            
            <h3 className="text-2xl font-bold font-heading text-[#0D1040] mt-12 mb-6">Our Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-[#FFB800] mt-0.5">✓</span>
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-[#F4F6FF] rounded-2xl border border-[#1B2080]/10 flex flex-col md:flex-row items-center justify-between gap-6 not-prose">
              <div>
                <h3 className="text-2xl font-bold font-heading text-[#0D1040] mb-2">Ready to scale with {service.title}?</h3>
                <p className="text-gray-600">Let's discuss how we can implement this for your luxury brand.</p>
              </div>
              <Button asChild size="lg" className="shrink-0">
                <Link href={siteConfig.contact.calendly} target="_blank">Book a Strategy Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
