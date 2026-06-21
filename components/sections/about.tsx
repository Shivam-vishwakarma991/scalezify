"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Niche depth",
    text: "Travel and transportation buyer journeys are different from generic service businesses. Your media, offers, and landing flows should reflect that.",
  },
  {
    title: "Direct demand",
    text: "Luxury operators win when booked demand comes through owned channels instead of third-party marketplaces that compress margin and brand equity.",
  },
  {
    title: "Premium perception",
    text: "The creative system needs restraint, confidence, and sharper intent signals. High-end buyers respond to clarity before they respond to noise.",
  },
];

export function About() {
  return (
    <section id="about" className="soft-section-frame section-frame relative overflow-hidden bg-[var(--surface-soft)] text-[#111111]">
      <div className="absolute inset-0 soft-grid opacity-60" />
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-24 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow text-[#4b4b45]"
            >
              Why Scalezify exists
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="mt-5 max-w-3xl text-4xl leading-[1.02] tracking-[-0.04em] text-[#111111] sm:text-5xl"
            >
              Most agencies look broad.
              <span className="block text-[#5b5b55]">Luxury brands need someone narrow.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="mt-6 max-w-2xl text-base leading-8 text-[#565249] sm:text-lg"
            >
              Scalezify is designed around one commercial reality: luxury travel and premium mobility brands need better demand quality, tighter positioning, and a more deliberate path from click to confirmed booking.
            </motion.p>
          </div>

          <div className="panel-light rounded-[2rem] p-6 sm:p-8">
            <p className="eyebrow text-[#6b665b]">What changes when the agency is specialised</p>
            <div className="mt-6 space-y-6">
              {principles.map((item, index) => (
                <div key={item.title} className="border-b border-black/8 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl text-[#111111]">{item.title}</h3>
                    <span className="text-xs uppercase tracking-[0.24em] text-[#767064]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#5f594f]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
