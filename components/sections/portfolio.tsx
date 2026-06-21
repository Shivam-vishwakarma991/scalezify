"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { portfolio } from "@/constants/data";

export function Portfolio() {
  return (
    <section id="work" className="soft-section-frame section-frame relative overflow-hidden bg-[var(--surface-soft)] text-[#111111]">
      <div className="absolute inset-0 soft-grid opacity-60" />
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-24 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="eyebrow text-[#676258]">Selected work</p>
            <h2 className="mt-5 text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl">
              Campaigns that feel premium,
              <span className="block text-[#666056]">perform commercially, and scale with control.</span>
            </h2>
          </div>
          <Link href="/case-studies" className="text-sm uppercase tracking-[0.2em] text-[#111111] underline decoration-black/20 underline-offset-8">
            View all case studies
          </Link>
        </motion.div>

        <div className="mt-14 space-y-4">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="panel-light rounded-[2rem] p-6 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[90px_minmax(0,1fr)_minmax(240px,0.38fr)] lg:items-start">
                <div className="text-4xl tracking-[-0.05em] text-[#8b867c]">{item.id}</div>
                <div>
                  <h3 className="text-2xl leading-tight text-[#111111]">{item.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#706a5f]">{item.location}</p>
                  <div className="mt-5 grid gap-4 text-sm leading-7 text-[#59544a] sm:grid-cols-2">
                    <div>
                      <p className="eyebrow text-[#847d72]">Spend</p>
                      <p className="mt-2">{item.spend}</p>
                    </div>
                    <div>
                      <p className="eyebrow text-[#847d72]">Services</p>
                      <p className="mt-2">{item.services}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.75rem] border border-black/8 bg-black/[0.02] p-5">
                  <p className="eyebrow text-[#7b7469]">Outcome</p>
                  <p className="mt-3 text-xl leading-snug text-[#111111]">{item.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
