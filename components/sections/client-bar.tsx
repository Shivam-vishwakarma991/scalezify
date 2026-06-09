"use client";

import React from "react";

const clients = [
  "Maybach Car Rental",
  "Rent Luxury Cars Mumbai",
  "Lohith Luxury Cars Bengaluru",
  "Aravind Luxuria",
  "My Citi Tours",
  "Adventure Atlas",
  "Kamala Express",
  "Sunvenus Luxury Cars"
];

// Duplicate 3x to ensure seamless infinite scroll
const row1 = [...clients, ...clients, ...clients];
const row2 = [...clients].reverse().concat([...clients].reverse(), [...clients].reverse());

export function ClientBar() {
  return (
    <section className="bg-[#0D1040] border-t border-white/8 py-10 overflow-hidden">
      <div className="container mx-auto px-4 mb-7 text-center">
        <p className="text-xs font-semibold text-gray-600 uppercase tracking-[0.25em]">
          Trusted By India's Premium Travel & Car Rental Brands
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative overflow-hidden fade-edges mb-3">
        <div className="animate-marquee-left flex items-center gap-0">
          {row1.map((client, i) => (
            <React.Fragment key={i}>
              <span className="text-base md:text-lg font-bold font-heading text-gray-400 whitespace-nowrap px-8 hover:text-[#FFB800] transition-colors duration-300 cursor-default">
                {client}
              </span>
              <span className="text-[#FFB800]/30 text-xs flex-shrink-0">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (slower) */}
      <div className="relative overflow-hidden fade-edges">
        <div className="animate-marquee-right flex items-center gap-0">
          {row2.map((client, i) => (
            <React.Fragment key={i}>
              <span className="text-sm font-medium text-gray-600 whitespace-nowrap px-8 hover:text-gray-300 transition-colors duration-300 cursor-default">
                {client}
              </span>
              <span className="text-[#1B2080]/60 text-xs flex-shrink-0">◆</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
