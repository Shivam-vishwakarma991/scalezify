"use client";

import { motion } from "framer-motion";
import { stats } from "@/constants/data";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function Statistics() {
  return (
    <section id="results" className="section-frame grain relative overflow-hidden bg-[#050505] text-[var(--copy-strong)]">
      <div className="absolute inset-0 hero-grid opacity-35" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(214,255,47,0.12),_transparent_65%)] blur-3xl" />
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-24 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="eyebrow text-[var(--accent)]">Results</p>
          <h2 className="mt-5 text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl">
            Numbers matter more when
            <span className="block text-[var(--copy-body)]">the brand still feels expensive.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="panel-dark rounded-[2rem] p-6"
            >
              <p className="text-5xl tracking-[-0.05em] text-[var(--copy-strong)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-4 border-t border-white/8 pt-4 text-xs uppercase tracking-[0.18em] text-[var(--copy-soft)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
