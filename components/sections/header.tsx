"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";
import { SearchModal } from "@/components/search/search-modal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Our Work", href: "/case-studies" },
    { label: "About", href: "/#about" },
    { label: "Results", href: "/#results" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-[#0D1040]/90 backdrop-blur-md py-4 shadow-md" : "bg-[#0D1040] md:bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 z-50">
              {/* S-mark icon placeholder */}
              <div className="w-8 h-8 rounded bg-[#FFB800] flex items-center justify-center font-bold text-[#0D1040]">S</div>
              <span className="text-xl font-heading font-bold tracking-tight">
                <span className="text-white md:text-[#1B2080] md:dark:text-white transition-colors">Scale</span>
                <span className="text-[#FFB800]">zify</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`text-sm font-medium transition-colors hover:text-[#FFB800] ${
                        isScrolled ? "text-white" : "text-gray-900 md:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className={`p-2 rounded-full transition-colors hover:bg-white/10 ${isScrolled ? "text-white" : "text-gray-900 md:text-white"}`}
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
                <Button asChild className="hidden lg:inline-flex">
                  <Link href={siteConfig.contact.calendly} target="_blank">
                    Book a Free Call
                  </Link>
                </Button>
              </div>
            </nav>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 md:hidden z-50">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white hover:text-[#FFB800]"
                aria-label="Search"
              >
                <Search size={24} />
              </button>
              <button
                className="p-2 text-white bg-[#1B2080] rounded-md"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#0D1040] flex flex-col items-center justify-center transition-transform duration-300 z-40 md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 text-2xl font-heading font-semibold text-white">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#FFB800] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild size="lg" className="mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                <Link href={siteConfig.contact.calendly} target="_blank">
                  Book a Free Call
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
