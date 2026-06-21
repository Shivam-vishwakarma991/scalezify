"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { portfolio, services } from "@/constants/data";

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPortfolio = portfolio.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.services.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            className="fixed left-1/2 top-[8%] z-50 flex max-h-[82vh] w-[92%] max-w-3xl -translate-x-1/2 flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(8,8,8,0.98)] text-[var(--copy-strong)] shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-white/8 px-5 py-4">
              <Search className="text-[var(--copy-soft)]" size={20} />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search services or case studies"
                className="h-12 flex-1 bg-transparent text-lg outline-none placeholder:text-[var(--copy-soft)]"
              />
              <button onClick={onClose} className="rounded-full border border-white/10 p-2 text-[var(--copy-body)]">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6">
              {query.length > 1 ? (
                <div className="space-y-8">
                  {filteredServices.length > 0 && (
                    <div>
                      <p className="eyebrow text-[var(--copy-soft)]">Services</p>
                      <div className="mt-4 space-y-3">
                        {filteredServices.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={onClose}
                            className="block rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 hover:bg-white/[0.05]"
                          >
                            <p className="text-lg">{service.title}</p>
                            <p className="mt-2 text-sm text-[var(--copy-body)]">{service.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredPortfolio.length > 0 && (
                    <div>
                      <p className="eyebrow text-[var(--copy-soft)]">Case studies</p>
                      <div className="mt-4 space-y-3">
                        {filteredPortfolio.map((item) => (
                          <Link
                            key={item.id}
                            href="/case-studies"
                            onClick={onClose}
                            className="block rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 hover:bg-white/[0.05]"
                          >
                            <p className="text-lg">{item.name}</p>
                            <p className="mt-2 text-sm text-[var(--copy-body)]">{item.services}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredServices.length === 0 && filteredPortfolio.length === 0 && (
                    <p className="py-8 text-center text-sm text-[var(--copy-body)]">No results found for “{query}”.</p>
                  )}
                </div>
              ) : (
                <p className="py-12 text-center text-sm text-[var(--copy-soft)]">Type at least two characters to search.</p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
