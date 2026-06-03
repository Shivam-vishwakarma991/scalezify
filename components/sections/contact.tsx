"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/constants/site";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Select } from "@/components/ui/input";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      // Formspree Integration (Replace with actual endpoint from Yash)
      const response = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0D1040] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white"
          >
            Ready to Own Your Market?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300"
          >
            Let's talk about your brand, your goals, and how Scalezify can get you there.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start max-w-6xl mx-auto">
          
          {/* Contact Info & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8 bg-[#1B2080]/30 p-8 rounded-2xl border border-gray-800"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1B2080] flex items-center justify-center text-[#FFB800] shrink-0">
                  📅
                </div>
                <div>
                  <h4 className="font-bold text-lg">Book a Strategy Call</h4>
                  <p className="text-gray-400 text-sm mb-2">Schedule a time that works for you.</p>
                  <a href={siteConfig.contact.calendly} target="_blank" rel="noreferrer" className="text-[#FFB800] hover:underline font-medium">
                    Open Calendly →
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1B2080] flex items-center justify-center text-[#FFB800] shrink-0">
                  💬
                </div>
                <div>
                  <h4 className="font-bold text-lg">WhatsApp Us</h4>
                  <p className="text-gray-400 text-sm mb-2">Direct line to our founder.</p>
                  <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="text-[#FFB800] hover:underline font-medium">
                    {siteConfig.contact.whatsapp} →
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1B2080] flex items-center justify-center text-[#FFB800] shrink-0">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-lg">Send an Email</h4>
                  <p className="text-gray-400 text-sm mb-2">For general inquiries.</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-[#FFB800] hover:underline font-medium">
                    {siteConfig.contact.email} →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-2xl p-8 text-gray-900 shadow-xl"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-4">✓</div>
                <h3 className="text-2xl font-bold font-heading">Request Received</h3>
                <p className="text-gray-600 max-w-md">Thank you for reaching out! Yash Pal or a team member will get back to you within 24 hours.</p>
                <Button onClick={() => setStatus("idle")} variant="outline" className="mt-4">Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
                    <Input id="name" name="name" required placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">Brand / Company Name *</label>
                    <Input id="company" name="company" required placeholder="Luxury Travels LLC" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</label>
                  <Input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Interested In</label>
                    <Select id="service" name="service">
                      <option value="">Select a service...</option>
                      <option value="Google Ads">Google Ads</option>
                      <option value="Meta Ads">Meta Ads</option>
                      <option value="SEO">SEO</option>
                      <option value="Web Design">Web Design</option>
                      <option value="Full Package">Full Package</option>
                      <option value="Other">Other</option>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-gray-700">Monthly Marketing Budget</label>
                    <Select id="budget" name="budget">
                      <option value="">Select budget range...</option>
                      <option value="Under ₹20K">Under ₹20K</option>
                      <option value="₹20K–₹50K">₹20K–₹50K</option>
                      <option value="₹50K–₹1L">₹50K–₹1L</option>
                      <option value="₹1L+">₹1L+</option>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message (Optional)</label>
                  <Textarea id="message" name="message" placeholder="Tell us about your current challenges..." />
                </div>
                
                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again or use WhatsApp.</p>
                )}
                
                <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending..." : "Get My Free Strategy Session"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
