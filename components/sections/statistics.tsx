"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/constants/data";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function Statistics() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section id="results" ref={sectionRef} className="py-28 bg-[#0D1040] relative overflow-hidden grain">
      {/* Scanline sweep effect */}
      <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFB800]/30 to-transparent pointer-events-none z-20 animate-scanline" />

      {/* Center luminance field */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse, rgba(255,184,0,0.05) 0%, transparent 70%)" }}
      />

      {/* Top divider with glow */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,184,0,0.3), transparent)" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-3"
        >
          <span className="text-xs font-bold text-[#FFB800] uppercase tracking-[0.25em]">The Numbers</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white">
            Results That Speak
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + index * 0.1 }}
              className="relative flex flex-col items-center justify-center py-14 px-6 text-center bg-[#0D1040] group hover:bg-[#1B2080]/20 transition-colors duration-500"
            >
              {/* Stat luminance on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(255,184,0,0.04), transparent 70%)" }} />

              {/* Number */}
              <div className="relative">
                <h3 className="text-5xl md:text-6xl xl:text-7xl font-bold font-heading text-white mb-1 tabular-nums">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h3>
                {/* Animated underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className="h-0.5 w-full origin-left mt-1"
                  style={{ background: "linear-gradient(to right, #FFB800, rgba(255,184,0,0.2))" }}
                />
              </div>

              <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium mt-4 max-w-[160px] leading-snug group-hover:text-gray-400 transition-colors">
                {stat.label}
              </p>

              {/* Glow dot accent */}
              <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-[#FFB800] opacity-0 group-hover:opacity-60 animate-glow-pulse transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 text-xs text-gray-600 uppercase tracking-[0.2em]"
        >
          Bengaluru · Chennai · Mumbai · Mysuru · Hong Kong · And growing
        </motion.p>
      </div>
    </section>
  );
}
