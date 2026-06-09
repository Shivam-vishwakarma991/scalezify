"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/constants/data";

// Split into two rows for the dual direction scrolling wall
const half = Math.ceil(testimonials.length / 2);
const row1 = [...testimonials.slice(0, half), ...testimonials.slice(0, half), ...testimonials.slice(0, half)];
const row2 = [...testimonials.slice(half), ...testimonials.slice(half), ...testimonials.slice(half)];

// If too few testimonials, just duplicate all
const safeRow1 = row1.length < 3 ? [...testimonials, ...testimonials, ...testimonials] : row1;
const safeRow2 = row2.length < 3 ? [...testimonials].reverse().concat([...testimonials].reverse(), [...testimonials].reverse()) : row2;

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 glass-dark rounded-2xl p-7 mx-3 relative overflow-hidden group hover:border-[#FFB800]/20 hover:bg-white/[0.07] transition-all duration-300">
      {/* Quote icon */}
      <span className="absolute top-5 right-6 text-4xl text-white/5 font-heading select-none">"</span>

      <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6 italic relative z-10">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#1B2080] border border-[#FFB800]/20 flex items-center justify-center text-[#FFB800] font-bold font-heading flex-shrink-0">
          {testimonial.clientName.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-white text-sm">{testimonial.clientName}</p>
          <p className="text-xs text-gray-600">{testimonial.brandName} · {testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-28 bg-[#0B0F3A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(27,32,128,0.15), transparent 70%)" }} />

      {/* Top/bottom fade on the scroll area */}
      <div className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #0B0F3A, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0B0F3A, transparent)" }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 space-y-3 px-4"
      >
        <span className="text-xs font-bold text-[#FFB800] uppercase tracking-[0.25em]">Client Voice</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white">
          Brands That Trust Us
        </h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Hear directly from the founders and brand owners we work with every day.
        </p>
      </motion.div>

      {/* Row 1 — scrolls left */}
      <div className="overflow-hidden fade-edges mb-5">
        <div className="animate-marquee-left flex items-stretch">
          {safeRow1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-hidden fade-edges">
        <div className="animate-marquee-right flex items-stretch">
          {safeRow2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
