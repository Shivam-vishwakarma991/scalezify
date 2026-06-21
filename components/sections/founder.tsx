"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { withBasePath } from "@/constants/site";

const credentials = [
  "Performance-led luxury acquisition",
  "Google Ads and Meta specialist",
  "Direct lead generation focus",
  "India-first market understanding",
];

export function Founder() {
  return (
    <section className="section-frame grain relative overflow-hidden bg-[#090909] text-[var(--copy-strong)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(214,255,47,0.08),_transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-24 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="panel-dark relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src={withBasePath("/yashPal.jpeg")}
                alt="Yash Pal, founder of Scalezify"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/45 px-5 py-4 backdrop-blur-sm">
                  <p className="text-2xl">Yash Pal</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                    Founder & lead strategist
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow text-[var(--accent)]"
            >
              Founder note
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="mt-5 max-w-3xl text-4xl leading-[1.03] tracking-[-0.04em] sm:text-5xl"
            >
              Luxury travel brands deserve
              <span className="block text-[var(--copy-body)]">a specialist agency, not a generic one.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="mt-6 max-w-2xl text-base leading-8 text-[var(--copy-body)] sm:text-lg"
            >
              Yash Pal built Scalezify around a simple belief: premium travel operators need sharper positioning, cleaner lead systems, and growth strategy that respects both perception and performance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-2xl text-sm leading-7 text-[var(--copy-body)]"
            >
              Under his earlier brand, Yash managed campaigns across Mumbai, Mysuru, Bengaluru, and Hong Kong. Scalezify narrows that experience into one category, one promise, and one mandate: help luxury brands build owned demand.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-3">
              {credentials.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--copy-body)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
