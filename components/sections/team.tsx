"use client";

import { motion } from "framer-motion";

const team = [
  { role: "Paid media", count: "2 specialists" },
  { role: "SEO", count: "1 specialist" },
  { role: "Creative", count: "1 specialist" },
  { role: "Web", count: "1 specialist" },
  { role: "Social", count: "1 specialist" },
];

export function Team() {
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] text-[var(--copy-strong)]">
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-24 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="eyebrow text-[var(--accent)]">The team</p>
          <h2 className="mt-5 text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl">
            Small enough to stay accountable.
            <span className="block text-[var(--copy-body)]">Specialised enough to cover the full funnel.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--copy-body)]">
            Scalezify runs lean by design. Strategy, media buying, SEO, creative, web, and social execution sit close together so the brand doesn&apos;t get diluted between teams.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {team.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="panel-dark rounded-[1.75rem] p-5"
            >
              <p className="text-4xl tracking-[-0.05em] text-[var(--accent)]">0{index + 1}</p>
              <p className="mt-6 text-xl">{item.role}</p>
              <p className="mt-2 text-sm text-[var(--copy-body)]">{item.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
