"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchModal } from "@/components/search/search-modal";
import { services } from "@/constants/data";
import { siteConfig, withBasePath } from "@/constants/site";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isHomePage = pathname === "/";
  const useSolidHeader = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 28);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Results", href: "/#results" },
    { label: "Work", href: "/case-studies" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          useSolidHeader
            ? "bg-[rgba(5,5,5,0.88)] backdrop-blur-xl border-b border-white/8"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <Link href="/" className="relative z-50 flex items-center">
            <div className="relative h-10 w-40 sm:h-11 sm:w-44">
              <Image
                src={withBasePath("/logo.png")}
                alt="Scalezify"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-6 text-sm text-[var(--copy-body)]">
              {navLinks.map((link) => (
                <li key={link.label} className="group relative py-4">
                  <Link href={link.href} className="hover:text-[var(--copy-strong)]">
                    {link.label}
                  </Link>
                  {link.label === "Services" && (
                    <div className="invisible absolute left-0 top-full mt-2 w-72 translate-y-2 rounded-[1.5rem] border border-white/10 bg-[rgba(10,10,10,0.96)] p-3 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-[var(--copy-body)] hover:bg-white/5 hover:text-[var(--copy-strong)]"
                        >
                          <span>{service.title}</span>
                          <span className="text-[var(--accent)]">/</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="rounded-full border border-white/10 p-2 text-[var(--copy-body)] hover:border-white/20 hover:text-[var(--copy-strong)]"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <Button asChild>
              <Link href={siteConfig.contact.calendly} target="_blank">
                Book a Strategy Call
              </Link>
            </Button>
          </nav>

          <div className="relative z-50 flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="rounded-full border border-white/10 p-2 text-[var(--copy-strong)]"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="rounded-full border border-white/10 p-2 text-[var(--copy-strong)]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          } transition-opacity duration-300`}
        >
          <div className="absolute inset-x-4 top-[5.25rem] rounded-[1.75rem] border border-white/10 bg-[rgba(9,9,9,0.98)] p-6 shadow-2xl">
            <ul className="space-y-4 text-lg font-medium text-[var(--copy-strong)]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href={siteConfig.contact.calendly} target="_blank" onClick={() => setIsMobileMenuOpen(false)}>
                  Book a Strategy Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
