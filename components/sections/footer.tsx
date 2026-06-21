import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/constants/data";
import { siteConfig, withBasePath } from "@/constants/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-frame grain relative overflow-hidden bg-[#050505] text-[var(--copy-strong)]">
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(214,255,47,0.55)] to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center">
              <div className="relative h-12 w-44">
                <Image src={withBasePath("/logo.png")} alt="Scalezify" fill className="object-contain object-left" />
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--copy-body)]">
              Specialist growth partner for luxury travel and premium mobility brands that want direct demand, sharper positioning, and less dependency on aggregators.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--copy-body)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              Taking on focused growth mandates
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-[var(--copy-soft)]">Services</p>
            <ul className="mt-5 space-y-3 text-sm text-[var(--copy-body)]">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-[var(--copy-strong)]">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-[var(--copy-soft)]">Company</p>
            <ul className="mt-5 space-y-3 text-sm text-[var(--copy-body)]">
              <li><Link href="/case-studies" className="hover:text-[var(--copy-strong)]">Case Studies</Link></li>
              <li><Link href="/#about" className="hover:text-[var(--copy-strong)]">About</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[var(--copy-strong)]">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-[var(--copy-strong)]">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-[var(--copy-soft)]">Contact</p>
            <div className="mt-5 space-y-3 text-sm text-[var(--copy-body)]">
              <a href={`mailto:${siteConfig.contact.email}`} className="block hover:text-[var(--copy-strong)]">
                {siteConfig.contact.email}
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-[var(--copy-strong)]"
              >
                {siteConfig.contact.whatsapp}
              </a>
              <a href={siteConfig.contact.calendly} target="_blank" rel="noreferrer" className="block text-[var(--accent)]">
                Book a strategy call
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs uppercase tracking-[0.18em] text-[var(--copy-soft)] md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Scalezify</p>
          <p>Luxury travel growth systems, built with restraint</p>
        </div>
      </div>
    </footer>
  );
}
