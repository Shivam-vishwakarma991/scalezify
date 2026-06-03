"use client";

import React from "react";
import { motion } from "framer-motion";

export function Founder() {
  return (
    <section className="py-24 bg-[#0D1040] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-800"
          >
            {/* Placeholder for Yash Pal's photo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 border border-gray-700 m-4 rounded-xl border-dashed">
              <span className="text-[#FFB800] text-6xl mb-4">📸</span>
              <p className="text-gray-400 font-medium">[Founder Photo Placeholder]</p>
              <p className="text-sm text-gray-500 mt-2">Minimum 800x1000px, high quality</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <p className="text-[#FFB800] font-semibold tracking-wider uppercase text-sm">The Founder</p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading">Yash Pal</h2>
            <p className="text-xl text-gray-400">Founder & Lead Strategist, Scalezify</p>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Yash Pal is a performance marketer and growth strategist who has spent years working at the intersection of luxury hospitality, premium travel, and digital advertising. He founded Scalezify with a single conviction: that luxury travel brands deserve a specialist agency — not a generalist one.
              </p>
              <p>
                Under his previous brand "Yash Pal & Team," Yash built a track record managing high-value ad campaigns for clients across Mumbai, Mysuru, Bengaluru, and Hong Kong. Today, through Scalezify, he leads a team of 5 specialists dedicated entirely to scaling travel and transportation brands through paid media, organic growth, and full-funnel digital strategy.
              </p>
            </div>
            
            <ul className="pt-4 space-y-3">
              {[
                "Based in Bhopal, serving clients across India and internationally",
                "Specialises in Google Ads, Meta Ads, and luxury brand digital strategy",
                "Previously: Managed campaigns for real estate, electronics, and international trade clients",
                "Vision: Build Scalezify into India's go-to consultancy for HNI and luxury travel brands"
              ].map((point, index) => (
                <li key={index} className="flex gap-3 text-sm md:text-base">
                  <span className="text-[#FFB800]">•</span>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
