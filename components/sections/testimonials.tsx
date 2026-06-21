"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/constants/data";

export function Testimonials() {
  return (
    <section className="soft-section-frame section-frame relative overflow-hidden bg-[#ebe4d6] text-[#111111]">
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-24 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="eyebrow text-[#6f685b]">Client trust</p>
          <h2 className="mt-5 text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl">
            Premium operators stay when
            <span className="block text-[#666056]">the system keeps feeling deliberate.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="panel-light rounded-[2rem] p-7 sm:p-8"
            >
              <p className="text-2xl leading-tight text-[#111111]">“</p>
              <p className="mt-4 text-base leading-8 text-[#585248]">{testimonial.quote}</p>
              <div className="mt-8 border-t border-black/8 pt-5">
                <p className="text-lg text-[#111111]">{testimonial.clientName}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#756e63]">
                  {testimonial.brandName} · {testimonial.location}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
