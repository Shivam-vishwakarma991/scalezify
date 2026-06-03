"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#0D1040] pt-24 pb-16 overflow-hidden">
      {/* Background Gradient/Image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B2080]/20 to-[#0D1040] z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white leading-tight"
          >
            India's Only Paid Growth Agency Built Exclusively for <span className="text-[#FFB800]">Luxury Travel</span> & Car Rental Brands.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We help premium travel and transportation brands generate direct leads, reduce aggregator dependency, and scale revenue — with Google Ads, Meta Ads, SEO, and full-funnel digital strategy.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={siteConfig.contact.calendly} target="_blank">Book a Free Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-[#0D1040]">
              <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer">
                WhatsApp Us Now
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-4"
          >
            <Link href="#work" className="text-[#FFB800] underline-offset-4 hover:underline text-sm font-medium inline-flex items-center gap-1">
              See Our Work <span className="text-lg leading-none">↓</span>
            </Link>
          </motion.div>
        </div>

        {/* Hero Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-800 pt-12"
        >
          <div className="space-y-2">
            <h3 className="text-3xl font-bold font-heading text-white">
              ₹<AnimatedCounter value={50} />L+
            </h3>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">Monthly Ad Spend Managed</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold font-heading text-white">
              <AnimatedCounter value={5} />+
            </h3>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">Luxury Travel Brands</p>
          </div>
          <div className="space-y-2 flex flex-col justify-center">
            <p className="text-base text-gray-300 font-medium leading-relaxed">
              Bengaluru • Chennai • Mumbai<br/><span className="text-[#FFB800]">Beyond</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
