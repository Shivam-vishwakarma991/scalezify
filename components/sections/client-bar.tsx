"use client";

import React from "react";

const clients = [
  "Maybach Car Rental",
  "Lohith Luxury Cars",
  "Aravind Luxuria",
  "My Citi Tours",
  "Adventure Atlas",
  "Luxury Rentals Mumbai",
];

const marquee = [...clients, ...clients, ...clients];

export function ClientBar() {
  return (
    <section className="border-y border-white/8 bg-[#080808] py-6 text-[var(--copy-body)]">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-10">
        <p className="eyebrow min-w-fit text-[var(--copy-soft)]">Trusted by premium operators</p>
        <div className="fade-edges overflow-hidden">
          <div className="animate-marquee-left flex items-center">
            {marquee.map((client, index) => (
              <React.Fragment key={`${client}-${index}`}>
                <span className="whitespace-nowrap px-6 text-sm uppercase tracking-[0.18em]">
                  {client}
                </span>
                <span className="text-[var(--accent)]">/</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
