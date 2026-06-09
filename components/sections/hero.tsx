"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const headlineWords = [
  "India's", "Only", "Growth", "Agency", "Built", "For", "Luxury", "Travel", "&", "Car", "Rental", "Brands."
];

// Floating SVG accent shapes
function FloatAccent({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ animationDelay: `${delay}s` }}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="59" stroke="rgba(255,184,0,0.12)" strokeWidth="1" />
        <circle cx="60" cy="60" r="40" stroke="rgba(255,184,0,0.07)" strokeWidth="1" />
        <circle cx="60" cy="60" r="20" stroke="rgba(255,184,0,0.05)" strokeWidth="1" />
      </svg>
    </div>
  );
}

function LineAccent({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div className={`absolute pointer-events-none ${className} animate-float-slow`} style={{ animationDelay: `${delay}s` }}>
      <svg width="200" height="2" viewBox="0 0 200 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="1" x2="200" y2="1" stroke="rgba(255,184,0,0.18)" strokeWidth="1" strokeDasharray="4 8" />
      </svg>
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Mouse parallax on background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      glowRef.current.style.transform = `translate(${(x - 0.5) * 40}px, ${(y - 0.5) * 30}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.065, delayChildren: 0.4 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: "100%", clipPath: "inset(0 0 100% 0)" },
    visible: {
      opacity: 1,
      y: "0%",
      clipPath: "inset(0 0 0% 0)",
      transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
    },
  };

  const services = ["Google Ads", "Meta Ads", "SEO", "Web Design", "Creative", "Social Media"];
  const serviceTicker = [...services, ...services, ...services, ...services];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="grain relative min-h-screen flex flex-col items-center justify-center bg-[#0D1040] pt-24 pb-0 overflow-hidden"
    >
      {/* Background noise + deep gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B2080]/20 via-[#0D1040] to-[#0D1040]" />
        {/* Ambient purple-blue field top-right */}
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(27,32,128,0.35) 0%, transparent 70%)" }} />
      </div>

      {/* Mouse-tracked gold luminance field */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse, rgba(255,184,0,0.06) 0%, transparent 70%)",
          transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      {/* Floating geometric accents */}
      <FloatAccent className="top-28 left-12 w-24 h-24 animate-float opacity-60" delay={0} />
      <FloatAccent className="bottom-48 right-16 w-40 h-40 animate-float-slow opacity-40" delay={2} />
      <LineAccent className="top-1/3 right-1/4" delay={1} />
      <LineAccent className="bottom-1/3 left-1/4 rotate-45" delay={3} />

      {/* Small decorative dot grid */}
      <div className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFB800]/30 bg-[#FFB800]/8 text-[#FFB800] text-xs font-semibold tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-glow-pulse inline-block" />
            India's Dedicated Luxury Travel Agency
          </motion.div>

          {/* Kinetic Headline */}
          <div className="overflow-hidden">
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading text-white leading-[1.05] tracking-tight"
            >
              {headlineWords.map((word, i) => {
                const isGold = word === "Luxury" || word === "Travel" || word === "&" || word === "Car" || word === "Rental";
                return (
                  <span key={i} className="inline-block overflow-hidden mr-[0.22em]">
                    <motion.span
                      variants={wordVariants}
                      className={`inline-block ${isGold ? "text-[#FFB800]" : "text-white"}`}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            We help premium travel and transportation brands generate direct leads, reduce aggregator dependency,
            and scale revenue — with{" "}
            <span className="text-gray-200 font-medium">Google Ads, Meta Ads, SEO,</span> and full-funnel digital strategy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Button asChild size="lg" className="group relative overflow-hidden w-full sm:w-auto px-8 py-4 text-base font-semibold">
              <Link href={siteConfig.contact.calendly} target="_blank">
                <span className="relative z-10">Book a Free Strategy Call</span>
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 bg-white/15" />
              </Link>
            </Button>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-base font-medium hover:border-white/50 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us Now
            </a>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-col items-center gap-2 pt-4"
          >
            <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
          </motion.div>
        </div>

        {/* Trust stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10 rounded-2xl overflow-hidden"
        >
          {[
            { value: 50, suffix: "L+", prefix: "₹", label: "Monthly Ad Spend Managed" },
            { value: 15, suffix: "+", prefix: "", label: "Luxury Travel Brands Scaled" },
            { value: 5, suffix: "x+", prefix: "", label: "Average ROAS Delivered" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-8 px-6 text-center bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300">
              <span className="text-4xl md:text-5xl font-bold font-heading text-white mb-1">
                {stat.prefix}<AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-medium mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Service ticker strip */}
      <div className="w-full mt-16 border-t border-white/8 py-5 overflow-hidden fade-edges relative z-10">
        <div className="animate-marquee-left flex items-center gap-0">
          {serviceTicker.map((s, i) => (
            <React.Fragment key={i}>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-[0.2em] whitespace-nowrap px-8">{s}</span>
              <span className="text-[#FFB800] opacity-40 text-xs">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
