"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/constants/site";

const fields = [
  { id: "name", name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
  { id: "company", name: "company", label: "Brand / Company", type: "text", placeholder: "Brand name", required: true },
  { id: "phone", name: "phone", label: "WhatsApp / Phone", type: "tel", placeholder: "+91 98765 43210", required: true },
  { id: "email", name: "email", label: "Email", type: "email", placeholder: "you@brand.com", required: false },
];

function UnderlineInput({
  id,
  name,
  label,
  type,
  placeholder,
  required,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-0 transition-all duration-200 ${
          focused || hasValue
            ? "-top-5 text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]"
            : "top-3 text-sm text-[var(--copy-soft)]"
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
        onBlur={(event) => {
          setFocused(false);
          setHasValue(event.target.value.length > 0);
        }}
        onChange={(event) => setHasValue(event.target.value.length > 0)}
        className="input-underline pt-8"
        autoComplete="off"
      />
    </div>
  );
}

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [budget, setBudget] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setBudget("");
        setService("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="section-frame grain relative overflow-hidden bg-[#050505] text-[var(--copy-strong)]">
      <div className="absolute inset-0 hero-grid opacity-35" />
      <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(214,255,47,0.12),_transparent_65%)] blur-3xl" />
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-24 sm:px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <p className="eyebrow text-[var(--accent)]">Contact</p>
            <h2 className="mt-5 text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl">
              If the brand is premium,
              <span className="block text-[var(--copy-body)]">the growth system should feel premium too.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--copy-body)]">
              Tell us what you&apos;re selling, where the current growth friction sits, and what kind of demand quality you want to create next.
            </p>

            <div className="mt-10 space-y-5 text-sm text-[var(--copy-body)]">
              <a href={siteConfig.contact.calendly} target="_blank" rel="noreferrer" className="block hover:text-[var(--copy-strong)]">
                Book a strategy call
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-[var(--copy-strong)]"
              >
                {siteConfig.contact.whatsapp}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="block hover:text-[var(--copy-strong)]">
                {siteConfig.contact.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="panel-dark rounded-[2rem] p-6 sm:p-8"
          >
            {status === "success" ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center">
                <p className="eyebrow text-[var(--accent)]">Received</p>
                <h3 className="mt-4 text-4xl tracking-[-0.04em]">We’ll get back to you shortly.</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-[var(--copy-body)]">
                  Your request has been sent. Yash or someone from the team will respond after reviewing the brand fit and growth scope.
                </p>
                <button onClick={() => setStatus("idle")} className="mt-8 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid gap-10 md:grid-cols-2">
                  {fields.map((field) => (
                    <UnderlineInput key={field.id} {...field} />
                  ))}
                </div>

                <div className="grid gap-10 md:grid-cols-2">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.22em] text-[var(--copy-soft)]">Service</label>
                    <select
                      name="service"
                      value={service}
                      onChange={(event) => setService(event.target.value)}
                      className="mt-3 w-full border-b border-white/20 bg-transparent py-3 text-sm text-[var(--copy-strong)] outline-none"
                    >
                      <option value="" className="bg-[#050505]">Select service</option>
                      <option value="Google Ads" className="bg-[#050505]">Google Ads</option>
                      <option value="Meta Ads" className="bg-[#050505]">Meta Ads</option>
                      <option value="SEO" className="bg-[#050505]">SEO</option>
                      <option value="Web Design" className="bg-[#050505]">Web Design</option>
                      <option value="Full Funnel" className="bg-[#050505]">Full Funnel</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.22em] text-[var(--copy-soft)]">Monthly budget</label>
                    <select
                      name="budget"
                      value={budget}
                      onChange={(event) => setBudget(event.target.value)}
                      className="mt-3 w-full border-b border-white/20 bg-transparent py-3 text-sm text-[var(--copy-strong)] outline-none"
                    >
                      <option value="" className="bg-[#050505]">Select budget</option>
                      <option value="Under ₹20K" className="bg-[#050505]">Under ₹20K</option>
                      <option value="₹20K–₹50K" className="bg-[#050505]">₹20K–₹50K</option>
                      <option value="₹50K–₹1L" className="bg-[#050505]">₹50K–₹1L</option>
                      <option value="₹1L+" className="bg-[#050505]">₹1L+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-[0.22em] text-[var(--copy-soft)]">What needs fixing</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Share your current challenge, business model, and growth goal."
                    className="mt-3 w-full border-b border-white/20 bg-transparent py-3 text-sm text-[var(--copy-strong)] outline-none placeholder:text-[rgba(247,243,234,0.3)]"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-300">
                    The form could not be sent. Please use WhatsApp or email instead.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#050505] disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending..." : "Request a strategy session"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
