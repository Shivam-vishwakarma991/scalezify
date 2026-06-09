import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/constants/site";

export function Footer() {
  return (
    <footer className="bg-[#0D1040] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-48 h-16">
                <Image src="/logo.png" alt="Scalezify Logo" fill className="object-contain object-left" />
              </div>
            </Link>
            <p className="text-gray-400 max-w-sm mt-4">
              Growth. Precision. Luxury. <br />
              {siteConfig.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading text-[#FFB800]">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#work" className="hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading text-[#FFB800]">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href={siteConfig.links.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© 2026 Scalezify. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
