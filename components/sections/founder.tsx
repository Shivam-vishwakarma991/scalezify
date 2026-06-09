"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const credentials = ["3+ Years in Performance Marketing", "₹1Cr+ Total Ad Spend Managed", "Google Ads Specialist", "Luxury Travel Vertical Expert"];

export function Founder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 bg-[#0D1040] text-white relative overflow-hidden grain">
      {/* Background light beam effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/3 w-[600px] h-full"
          style={{
            background: "linear-gradient(to bottom, rgba(255,184,0,0.03) 0%, rgba(27,32,128,0.08) 50%, transparent 100%)",
          }}
        />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#FFB800]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFB800]/20 to-transparent" />
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Image — portrait with studio lighting effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-2 lg:order-1 relative"
          >
            {/* Studio light beam behind image */}
            <div
              className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-[120%] pointer-events-none z-0"
              style={{
                background: "linear-gradient(to bottom, rgba(255,184,0,0.08) 0%, rgba(255,184,0,0.02) 60%, transparent 100%)",
                filter: "blur(30px)",
              }}
            />

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden gradient-border shadow-2xl">
              <img
                src="/yashPal.jpeg"
                alt="Yash Pal — Founder, Scalezify"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1040]/60 via-transparent to-transparent" />

              {/* Name plate inside image at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="glass-dark rounded-xl px-4 py-3">
                  <p className="text-white font-bold text-lg font-heading leading-tight">Yash Pal</p>
                  <p className="text-[#FFB800] text-xs uppercase tracking-widest font-medium mt-0.5">Founder & Lead Strategist</p>
                </div>
              </div>
            </div>

            {/* Floating accent element */}
            <div className="absolute -right-5 top-1/3 w-12 h-12 rounded-full border border-[#FFB800]/20 animate-float" />
            <div className="absolute -left-3 bottom-1/3 w-6 h-6 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 animate-float-reverse" />
          </motion.div>

          {/* Text column */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="text-xs font-bold text-[#FFB800] uppercase tracking-[0.25em]"
              >
                The Founder
              </motion.span>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%", opacity: 0 }}
                  animate={isInView ? { y: "0%", opacity: 1 } : {}}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                  className="text-5xl md:text-6xl font-bold font-heading text-white"
                >
                  Yash Pal
                </motion.h2>
              </div>
            </div>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="border-l-2 border-[#FFB800] pl-5 italic text-xl text-gray-300 leading-relaxed font-light"
            >
              "Luxury travel brands deserve a specialist agency — not a generalist one."
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base"
            >
              <p>
                Yash Pal is a performance marketer and growth strategist who has spent years working at the intersection of luxury hospitality, premium travel, and digital advertising.
              </p>
              <p>
                Under his previous brand "Yash Pal & Team," Yash built a track record managing high-value ad campaigns for clients across Mumbai, Mysuru, Bengaluru, and Hong Kong. Today, through Scalezify, he leads a team dedicated entirely to scaling travel and transportation brands.
              </p>
            </motion.div>

            {/* Credential tags */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2"
            >
              {credentials.map((c, i) => (
                <span
                  key={i}
                  className="text-xs font-medium text-gray-300 border border-white/15 rounded-full px-3 py-1.5 bg-white/5 hover:border-[#FFB800]/40 hover:text-[#FFB800] transition-colors duration-300"
                >
                  {c}
                </span>
              ))}
            </motion.div>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-xs text-gray-600 uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-4 h-px bg-gray-700" />
              Based in Bhopal — Serving clients across India & internationally
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
