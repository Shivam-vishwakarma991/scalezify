"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/constants/data";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="py-24 bg-[#F4F6FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#0D1040]"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full border-l-4 border-l-[#FFB800] border-y-0 border-r-0 rounded-r-2xl shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8 md:p-10 flex flex-col h-full justify-between gap-8">
                  <div className="relative">
                    <span className="absolute -top-4 -left-2 text-6xl text-gray-200 font-heading leading-none">"</span>
                    <p className="text-lg text-gray-700 leading-relaxed relative z-10 font-medium italic">
                      {testimonial.quote}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                      {testimonial.clientName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0D1040]">{testimonial.clientName}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.brandName}, {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
