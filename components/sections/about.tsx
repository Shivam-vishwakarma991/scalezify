"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const points = [
  { title: "Niche-Focused", text: "100% travel & transportation clients — we know your customer's journey" },
  { title: "Full-Funnel", text: "From the first Google search to a confirmed booking — we own every step" },
  { title: "Direct Lead Generation", text: "We help you own your leads, not rent them from aggregators" },
  { title: "South India First", text: "Deep market knowledge in Bengaluru, Chennai, Mumbai, and beyond" },
  { title: "Lean & Accountable", text: "Founder + active specialists — high-output, no bloat" },
];

function RevealPoint({ title, text, index }: { title: string; text: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex gap-4 group"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-5 h-5 rounded-full border border-[#FFB800]/40 flex items-center justify-center group-hover:border-[#FFB800] group-hover:bg-[#FFB800]/10 transition-all duration-300">
          <span className="text-[#FFB800] text-xs font-bold">✓</span>
        </div>
      </div>
      <div>
        <strong className="text-[#0D1040] block text-sm font-semibold uppercase tracking-wide mb-0.5">{title}</strong>
        <span className="text-gray-600 text-sm leading-relaxed">{text}</span>
      </div>
    </motion.li>
  );
}

export function About() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 1.04]);

  const headlineRef = useRef(null);
  const headlineInView = useInView(headlineRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 bg-[#F4F6FF] relative overflow-hidden">
      {/* Subtle diagonal grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Text column */}
          <div className="space-y-10">
            <div ref={headlineRef} className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={headlineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="text-xs font-bold text-[#1B2080] uppercase tracking-[0.25em]"
              >
                Our Difference
              </motion.span>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%", opacity: 0 }}
                  animate={headlineInView ? { y: "0%", opacity: 1 } : {}}
                  transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#0D1040] leading-tight"
                >
                  We Don't Do Everything.{" "}
                  <span className="text-[#1B2080]">We Do One Thing</span>{" "}
                  Better Than Anyone.
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={headlineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base text-gray-600 leading-relaxed max-w-lg"
              >
                Scalezify is India's dedicated digital growth agency for luxury travel and transportation brands.
                Every campaign, every strategy, every rupee we manage is designed for this one vertical. That focus is our edge.
              </motion.p>
            </div>

            <ul className="space-y-5">
              {points.map((point, index) => (
                <RevealPoint key={index} {...point} index={index} />
              ))}
            </ul>
          </div>

          {/* Image column */}
          <div ref={imageRef} className="relative h-full min-h-[480px]">
            {/* Outer glow frame */}
            <div className="absolute -inset-4 rounded-3xl opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(27,32,128,0.3), transparent 70%)" }} />

            {/* Image with parallax */}
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[480px] shadow-2xl gradient-border">
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2000"
                  alt="Luxury Car Rental Digital Marketing Strategy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1040]/40 via-transparent to-transparent" />
              </motion.div>
            </div>

            {/* Floating metric card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="absolute -bottom-5 -left-5 bg-[#0D1040] rounded-xl px-5 py-4 shadow-2xl border border-white/10 z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FFB800] animate-glow-pulse" />
                <div>
                  <p className="text-[#FFB800] font-bold text-xl font-heading leading-none">₹50L+</p>
                  <p className="text-gray-400 text-xs mt-0.5 uppercase tracking-wider">Monthly Ad Spend</p>
                </div>
              </div>
            </motion.div>

            {/* Second float badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="absolute -top-5 -right-5 bg-white rounded-xl px-5 py-4 shadow-xl border border-gray-100 z-10"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">🏆</div>
                <div>
                  <p className="text-[#0D1040] font-bold text-lg font-heading leading-none">5x ROAS</p>
                  <p className="text-gray-500 text-xs mt-0.5">Average Delivered</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
