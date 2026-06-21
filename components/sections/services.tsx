"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/constants/data";

export function Services() {
  return (
    <section id="services" className="section-frame relative overflow-hidden bg-[#0d0d0d] text-[var(--copy-strong)]">
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-24 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="eyebrow text-[var(--accent)]">Services</p>
          <h2 className="mt-5 text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl">
            Every offer exists to support
            <span className="block text-[var(--copy-body)]">bookings, margin, and premium demand quality.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <div className="panel-dark h-full rounded-[2rem] p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="text-xs uppercase tracking-[0.24em] text-[var(--copy-soft)]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-10 text-2xl leading-tight group-hover:text-[var(--accent)]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--copy-body)]">
                    {service.description}
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-5 text-sm uppercase tracking-[0.18em] text-[var(--copy-soft)]">
                    <span>Explore service</span>
                    <span className="text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
