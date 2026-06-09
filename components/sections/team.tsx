"use client";

import React from "react";
import { motion } from "framer-motion";

export function Team() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#0D1040]">
            The Team Behind Your Growth
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Scalezify is built around a lean, high-performance team of 6 specialists — each one focused on a different layer of your growth engine. From paid media strategists and SEO experts to creative designers, web developers, and social media managers, every member of our team operates with one goal: measurable results for luxury travel brands.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
        >
          {[
            { role: "Paid Media (Google & Meta Ads)", count: "2 specialists" },
            { role: "SEO & Organic Growth", count: "3 specialist" },
            { role: "Creative & Design", count: "3 specialist" },
            { role: "Web Development", count: "3 specialist" },
            { role: "Social Media", count: "2 specialist" }
          ].map((member, index) => (
            <div key={index} className="bg-[#F4F6FF] rounded-2xl p-6 text-center border border-gray-100 hover:border-[#1B2080]/20 hover:shadow-md transition-all">
              <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-[#1B2080] font-bold shadow-sm mb-4">
                {member.count.charAt(0)}
              </div>
              <h4 className="font-semibold text-[#0D1040] text-sm mb-1">{roleShortener(member.role)}</h4>
              <p className="text-xs text-gray-500">{member.count}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function roleShortener(role: string) {
  if (role.includes("Paid Media")) return "Paid Media";
  if (role.includes("SEO")) return "SEO";
  if (role.includes("Creative")) return "Design";
  if (role.includes("Web Dev")) return "Web Dev";
  if (role.includes("Social")) return "Social Media";
  return role;
}
