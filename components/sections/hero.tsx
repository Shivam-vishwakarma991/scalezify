"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { siteConfig } from "@/constants/site";

const highlights = [
  "Luxury travel demand generation",
  "Premium car rental lead systems",
  "Search, Meta, SEO, landing pages",
];

const stats = [
  { prefix: "₹", value: 50, suffix: "L+", label: "monthly spend managed" },
  { prefix: "", value: 15, suffix: "+", label: "premium brands supported" },
  { prefix: "", value: 5, suffix: "x+", label: "average ROAS benchmark" },
];

export function Hero() {
  return (
    <section id="hero" className="grain relative overflow-hidden bg-[#050505] pt-28 text-[var(--copy-strong)]">
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute left-[58%] top-28 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(214,255,47,0.15),_transparent_62%)] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 pb-20 sm:px-6 lg:px-10 lg:pb-24">
        <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="eyebrow text-[var(--accent)]"
            >
              Performance for luxury mobility
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="mt-6 max-w-5xl text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[5.5rem]"
            >
              Growth systems for
              <span className="block text-[var(--accent)]">luxury travel</span>
              and premium car rental brands.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-6 max-w-2xl text-base leading-8 text-[var(--copy-body)] sm:text-lg"
            >
              Scalezify helps premium travel and transportation brands create direct demand, reduce aggregator dependency, and turn paid media into a cleaner booking pipeline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[var(--copy-body)]"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild size="lg">
                <Link href={siteConfig.contact.calendly} target="_blank">
                  Book a Free Strategy Call
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp the Founder
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="panel-dark relative rounded-[2rem] p-6 sm:p-8"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="eyebrow text-[var(--copy-soft)]">Operating model</p>
                <p className="mt-2 text-2xl text-[var(--copy-strong)]">Specialist, not generalist</p>
              </div>
              <div className="rounded-full border border-[rgba(214,255,47,0.4)] px-3 py-1 text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                niche
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {[
                ["Audience", "Affluent travellers, premium renters, experience-led buyers"],
                ["Channels", "Google Ads, Meta Ads, SEO, high-intent landing journeys"],
                ["Goal", "Own the lead flow instead of renting demand from marketplaces"],
              ].map(([label, value]) => (
                <div key={label} className="grid gap-2 border-b border-white/8 pb-5 last:border-b-0 last:pb-0">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--copy-soft)]">{label}</p>
                  <p className="text-sm leading-7 text-[var(--copy-body)]">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] px-4 py-5">
                  <p className="text-3xl tracking-[-0.04em] text-[var(--copy-strong)]">
                    {item.prefix}
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--copy-soft)]">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
