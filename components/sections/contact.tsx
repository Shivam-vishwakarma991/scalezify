"use client";

import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/constants/site";

const fields = [
  { id: "name", name: "name", label: "Full Name", type: "text", placeholder: "Your Name", required: true },
  { id: "company", name: "company", label: "Brand / Company", type: "text", placeholder: "Luxury Travels Ltd.", required: true },
  { id: "phone", name: "phone", label: "WhatsApp / Phone", type: "tel", placeholder: "+91 98765 43210", required: true },
  { id: "email", name: "email", label: "Email Address", type: "email", placeholder: "you@brand.com", required: false },
];

function UnderlineInput({ id, name, label, type, placeholder, required }: {
  id: string; name: string; label: string; type: string; placeholder: string; required: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className={`absolute left-0 text-xs font-semibold uppercase tracking-widest transition-all duration-300 pointer-events-none ${
          focused || hasValue ? "-top-5 text-[#FFB800] text-[10px]" : "top-3 text-gray-500 text-sm"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={focused ? placeholder : ""}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { setFocused(false); setHasValue(e.target.value.length > 0); }}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        className="input-underline pt-8"
        autoComplete="off"
      />
      {/* Animated underline */}
      <div className={`absolute bottom-0 left-0 h-px transition-all duration-400 ease-out ${focused ? "w-full" : "w-0"}`}
        style={{ background: "linear-gradient(to right, #FFB800, rgba(255,184,0,0.4))" }} />
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [budget, setBudget] = useState("");
  const [service, setService] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) { setStatus("success"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" ref={ref} className="py-28 bg-[#0D1040] text-white relative overflow-hidden grain">
      {/* Top divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,184,0,0.3), transparent)" }} />

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(27,32,128,0.3), transparent 70%)" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Large editorial headline */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold text-[#FFB800] uppercase tracking-[0.25em] block mb-4"
          >
            Get In Touch
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.05] max-w-4xl"
            >
              Ready to Own<br />
              <span className="text-[#FFB800]">Your Market?</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 text-base mt-6 max-w-xl"
          >
            Let's talk about your brand, your goals, and exactly how Scalezify can accelerate your growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Contact channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="lg:col-span-4 space-y-10"
          >
            {[
              {
                label: "Book a Strategy Call",
                detail: "30 min · Free · No commitments",
                link: siteConfig.contact.calendly,
                external: true,
                cta: "Open Calendly →",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                ),
              },
              {
                label: "WhatsApp",
                detail: "Direct line to the founder",
                link: `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`,
                external: true,
                cta: siteConfig.contact.whatsapp + " →",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                ),
              },
              {
                label: "Email",
                detail: "For detailed inquiries",
                link: `mailto:${siteConfig.contact.email}`,
                external: false,
                cta: siteConfig.contact.email + " →",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1B2080]/40 border border-white/8 flex items-center justify-center text-[#FFB800] flex-shrink-0 group-hover:bg-[#FFB800]/15 group-hover:border-[#FFB800]/30 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white text-base">{item.label}</p>
                  <p className="text-gray-600 text-xs mt-0.5 mb-2">{item.detail}</p>
                  <a
                    href={item.link}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="text-sm text-[#FFB800] hover:text-white transition-colors duration-200 font-medium"
                  >
                    {item.cta}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="lg:col-span-8"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 space-y-5">
                <div className="w-16 h-16 rounded-full border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800] text-2xl animate-glow-pulse">
                  ✓
                </div>
                <h3 className="text-3xl font-bold font-heading text-white">Request Received</h3>
                <p className="text-gray-500 max-w-md">
                  Thank you for reaching out. Yash or a team member will be back within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-[#FFB800] border-b border-[#FFB800]/30 hover:border-[#FFB800] transition-colors pb-0.5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                  {fields.map((field) => (
                    <UnderlineInput key={field.id} {...field} />
                  ))}
                </div>

                {/* Select fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                  <div className="relative">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 block mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={service}
                      onChange={e => setService(e.target.value)}
                      className="w-full bg-transparent border-b border-white/20 text-white py-3 outline-none text-sm focus:border-[#FFB800] transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0D1040]">Select a service...</option>
                      <option value="Google Ads" className="bg-[#0D1040]">Google Ads</option>
                      <option value="Meta Ads" className="bg-[#0D1040]">Meta Ads</option>
                      <option value="SEO" className="bg-[#0D1040]">SEO</option>
                      <option value="Web Design" className="bg-[#0D1040]">Web Design</option>
                      <option value="Full Package" className="bg-[#0D1040]">Full Package</option>
                      <option value="Other" className="bg-[#0D1040]">Other</option>
                    </select>
                  </div>
                  <div className="relative">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 block mb-2">Monthly Marketing Budget</label>
                    <select
                      name="budget"
                      value={budget}
                      onChange={e => setBudget(e.target.value)}
                      className="w-full bg-transparent border-b border-white/20 text-white py-3 outline-none text-sm focus:border-[#FFB800] transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0D1040]">Select budget range...</option>
                      <option value="Under ₹20K" className="bg-[#0D1040]">Under ₹20K</option>
                      <option value="₹20K–₹50K" className="bg-[#0D1040]">₹20K–₹50K</option>
                      <option value="₹50K–₹1L" className="bg-[#0D1040]">₹50K–₹1L</option>
                      <option value="₹1L+" className="bg-[#0D1040]">₹1L+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 block mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your current challenges..."
                    className="w-full bg-transparent border-b border-white/20 text-white py-3 outline-none text-sm placeholder:text-gray-600 focus:border-[#FFB800] transition-colors duration-300 resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again or reach out via WhatsApp.</p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group flex items-center gap-4 text-white font-semibold text-base border-b border-white/20 pb-1 hover:border-[#FFB800] transition-colors duration-300 disabled:opacity-50"
                >
                  <span>{status === "submitting" ? "Sending..." : "Get My Free Strategy Session"}</span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 text-[#FFB800]">→</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
