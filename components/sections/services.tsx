"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/constants/data";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#0D1040]"
          >
            Everything Your Brand Needs to Grow — Under One Roof
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/services/${service.slug}`} className="block h-full group">
                <Card className="h-full border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FFB800]/50 transition-all duration-300 group-hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-[#F4F6FF] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#FFB800] transition-colors duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl mb-2 text-[#0D1040]">{service.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600 line-clamp-3">
                      {service.description}
                    </CardDescription>
                    <div className="pt-4 text-[#1B2080] font-medium text-sm inline-flex items-center gap-1 group-hover:text-[#FFB800] transition-colors">
                      Learn More <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
