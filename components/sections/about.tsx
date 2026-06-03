"use client";

import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-[#F4F6FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#0D1040] leading-tight">
              We Don't Do Everything. We Do <span className="text-[#1B2080]">One Thing Better</span> Than Anyone.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Scalezify is India's dedicated digital growth agency for luxury travel and transportation brands. While most agencies serve every industry with generic strategies, we go deep — exclusively into travel, car rental, and transportation. Every campaign we run, every strategy we build, every rupee we manage is designed for this one vertical. That focus is our edge.
            </p>
            
            <ul className="space-y-4">
              {[
                { title: "Niche-Focused", text: "100% travel & transportation clients — we know your customer's journey" },
                { title: "Full-Funnel", text: "From the first Google search to a confirmed booking — we own every step" },
                { title: "Direct Lead Generation", text: "We help you own your leads, not rent them from aggregators" },
                { title: "South India First", text: "Deep market knowledge in Bengaluru, Chennai, Mumbai, and beyond" },
                { title: "Team of 6", text: "Founder + 5 active specialists — lean, accountable, high-output" }
              ].map((point, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#FFB800] mt-1">✓</span>
                  <div>
                    <strong className="text-[#0D1040] block">{point.title}</strong>
                    <span className="text-gray-600">{point.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-[#1B2080] flex items-center justify-center p-12"
          >
            {/* Geometric abstract graphic or large S-mark placeholder */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
            <div className="relative z-10 w-48 h-48 rounded-2xl bg-gradient-to-tr from-[#FFB800] to-yellow-300 flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <span className="text-8xl font-bold text-[#0D1040] font-heading">S</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
