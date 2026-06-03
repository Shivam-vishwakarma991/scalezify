"use client";

import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { services, portfolio } from "@/constants/data";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const filteredServices = services.filter(s => 
    s.title.toLowerCase().includes(query.toLowerCase()) || 
    s.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPortfolio = portfolio.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.services.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0D1040]/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[80vh]"
          >
            <div className="p-4 border-b border-gray-100 flex items-center gap-3 relative">
              <Search className="text-gray-400" size={24} />
              <input
                autoFocus
                type="text"
                placeholder="Search services, case studies..."
                className="flex-1 h-12 text-lg outline-none text-gray-900 placeholder:text-gray-400 bg-transparent"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto bg-gray-50/50 flex-1">
              {query.length > 1 ? (
                <div className="space-y-8">
                  {filteredServices.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Services</h4>
                      <div className="space-y-2">
                        {filteredServices.map(service => (
                          <Link 
                            key={service.slug} 
                            href={`/services/${service.slug}`}
                            onClick={onClose}
                            className="block bg-white p-4 rounded-xl border border-gray-100 hover:border-[#1B2080] hover:shadow-md transition-all"
                          >
                            <div className="font-semibold text-[#0D1040]">{service.title}</div>
                            <div className="text-sm text-gray-500 truncate">{service.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredPortfolio.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Case Studies</h4>
                      <div className="space-y-2">
                        {filteredPortfolio.map(item => (
                          <Link 
                            key={item.id} 
                            href={`/case-studies`} // Directing to the case studies page
                            onClick={onClose}
                            className="block bg-white p-4 rounded-xl border border-gray-100 hover:border-[#1B2080] hover:shadow-md transition-all"
                          >
                            <div className="font-semibold text-[#0D1040]">{item.name}</div>
                            <div className="text-sm text-gray-500">Services: {item.services}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredServices.length === 0 && filteredPortfolio.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      No results found for "{query}"
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  Type to start searching...
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
