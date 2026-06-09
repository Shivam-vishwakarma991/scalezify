"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { portfolio } from "@/constants/data";

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -6;
    const rotateY = ((x - cx) / cx) * 6;
    cardRef.current.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card ${className}`}
      style={{ transition: "transform 0.15s ease-out" }}
    >
      {children}
    </div>
  );
}

export function Portfolio() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="work" className="py-28 bg-[#060B2E] relative overflow-hidden">
      {/* Subtle vertical light bands */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(27,32,128,0.08) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        <div ref={headingRef} className="mb-16 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold text-[#FFB800] uppercase tracking-[0.25em] mb-3 block"
          >
            Our Work
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight mb-4"
            >
              Campaigns That Convert.<br />
              <span className="text-gray-500">Brands That Grow.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-500"
          >
            A curated snapshot of our client results — real numbers, real brands.
          </motion.p>
        </div>

        <div className="space-y-4">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <TiltCard>
                <div className="group relative glass-dark rounded-2xl p-6 md:p-8 overflow-hidden
                  hover:border-[#FFB800]/20 hover:shadow-[0_0_60px_0_rgba(27,32,128,0.4)]
                  transition-all duration-300"
                >
                  {/* Card inner glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                    style={{ background: "radial-gradient(ellipse at top right, rgba(27,32,128,0.25), transparent 70%)" }} />

                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-center relative z-10">

                    {/* ID number */}
                    <div className="flex-shrink-0 font-heading font-bold text-5xl md:text-6xl text-white/10 group-hover:text-[#FFB800]/20 transition-colors duration-300 select-none">
                      {item.id}
                    </div>

                    {/* Main info */}
                    <div className="flex-grow space-y-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold font-heading text-white group-hover:text-[#FFB800] transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 flex items-center gap-1.5 mt-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                          {item.location}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.services.split(", ").map((s, i) => (
                          <span key={i} className="text-xs font-medium text-gray-500 border border-white/8 rounded-full px-3 py-1 bg-white/3">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Result badge */}
                    <div className="md:w-56 flex-shrink-0 relative">
                      <div className="border border-[#FFB800]/20 rounded-xl p-5 bg-[#FFB800]/5 group-hover:border-[#FFB800]/40 group-hover:bg-[#FFB800]/10 transition-all duration-300">
                        <p className="text-[10px] uppercase tracking-widest text-[#FFB800]/70 font-semibold mb-2">Key Result</p>
                        <p className="text-base font-bold text-white leading-snug">{item.result}</p>
                      </div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FFB800] animate-glow-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#FFB800]/30 text-[#FFB800] text-sm font-semibold hover:bg-[#FFB800]/8 hover:border-[#FFB800]/60 transition-all duration-300"
          >
            View All Case Studies
            <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
