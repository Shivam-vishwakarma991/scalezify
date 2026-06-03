"use client";

import React from "react";
import { motion } from "framer-motion";

const clients = [
  "Maybach Car Rental",
  "Lohith Luxury Cars",
  "Aravind Luxuria",
  "My Citi Tours",
  "Adventure Atlas"
];

export function ClientBar() {
  return (
    <section className="bg-[#F4F6FF] py-8 border-y border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest">Trusted By</p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {[...clients, ...clients, ...clients].map((client, i) => (
            <span key={i} className="text-xl md:text-2xl font-bold font-heading text-gray-400">
              {client}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
