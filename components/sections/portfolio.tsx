"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolio } from "@/constants/data";

export function Portfolio() {
  return (
    <section id="work" className="py-24 bg-[#0D1040] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight mb-4"
          >
            Campaigns That Convert. Brands That Grow.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            A snapshot of what we've built for our clients.
          </motion.p>
        </div>

        <div className="space-y-6">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#1B2080]/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:bg-[#1B2080]/60 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-center">
                <div className="flex-shrink-0 text-[#FFB800] font-heading font-bold text-4xl md:text-5xl opacity-50 group-hover:opacity-100 transition-opacity">
                  {item.id}
                </div>
                
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-white">{item.name}</h3>
                    <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                      <span className="text-gray-500">📍</span> {item.location}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Monthly Ad Spend</p>
                      <p className="text-gray-300">{item.spend}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">Services</p>
                      <p className="text-gray-300">{item.services}</p>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 bg-[#0D1040]/50 rounded-xl p-5 border border-gray-800/50">
                  <p className="text-xs uppercase tracking-wider text-[#FFB800] font-semibold mb-2">Result</p>
                  <p className="text-lg font-bold text-white leading-snug">{item.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/case-studies" className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-[#FFB800] text-[#FFB800] bg-transparent hover:bg-[#FFB800]/10 h-12 px-8">
            View All Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
