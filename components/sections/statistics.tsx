"use client";

import React from "react";
import { motion } from "framer-motion";
import { stats } from "@/constants/data";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function Statistics() {
  return (
    <section id="results" className="py-20 bg-[#0D1040] border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-3"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#FFB800]">
                {/* For exact matching logic, we handle prefix/suffix in the stat object if needed */}
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-sm md:text-base text-white font-medium max-w-[200px] mx-auto leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
