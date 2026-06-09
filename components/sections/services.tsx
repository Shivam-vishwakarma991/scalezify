"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/constants/data";

const icons: Record<string, string> = {
  "google-ads": "🎯",
  "meta-ads": "📱",
  "seo": "🔍",
  "creative-branding": "🎨",
  "social-media": "📲",
  "web-design": "💻",
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export function Services() {
  return (
    <section id="services" className="py-28 bg-[#0D1040] relative overflow-hidden grain">
      {/* Horizontal grid lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "100% 80px",
        }}
      />
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse, rgba(27,32,128,0.25) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs font-bold text-[#FFB800] uppercase tracking-[0.25em]">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
            Built for One Industry.<br />
            <span className="text-[#FFB800]">Mastered for Yours.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            Every service is designed specifically for luxury travel and premium car rental brands — no generic strategies.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <div className="relative h-full glass-dark rounded-2xl p-7 overflow-hidden
                  transition-all duration-400 ease-out
                  hover:bg-[#1B2080]/30
                  hover:border-[#FFB800]/25
                  hover:shadow-[0_0_40px_0_rgba(255,184,0,0.08)]
                  cursor-pointer
                ">
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: "radial-gradient(circle at top right, rgba(255,184,0,0.1), transparent 70%)" }} />

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#1B2080]/60 border border-white/10 flex items-center justify-center mb-5
                    group-hover:bg-[#FFB800]/15 group-hover:border-[#FFB800]/30
                    transition-all duration-300"
                  >
                    <span className="text-xl" style={{ display: "inline-block" }}>{icons[service.slug] || "✦"}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold font-heading text-white mb-2.5 group-hover:text-[#FFB800] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn more cue */}
                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-gray-600 uppercase tracking-wider
                    group-hover:text-[#FFB800] transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </div>

                  {/* Bottom line draw on hover */}
                  <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500 ease-out"
                    style={{ background: "linear-gradient(to right, transparent, rgba(255,184,0,0.6), transparent)" }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
