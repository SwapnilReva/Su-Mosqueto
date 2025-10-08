"use client";

import { useState } from "react";
import { Phone, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-[var(--header-from)] to-[var(--header-to)] border-b border-slate-200/80 text-slate-900 shadow-sm backdrop-blur-sm transform-gpu will-change-[transform,opacity]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo on the left */}
            <div className="flex items-center">
              <button
                type="button"
                aria-label="Scroll to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="h-full w-[220px] md:w-[260px] overflow-hidden flex items-center cursor-pointer"
              >
                <img
                  src="/images/su-mosquito-logo.png"
                  alt="Su Mosquito Net logo"
                  className="h-[60%] md:h-[62%] w-auto block -mt-1 md:-mt-2 shrink-0 select-none [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges]"
                  decoding="async"
                  loading="eager"
                />
              </button>
            </div>

            {/* Navigation in the middle (desktop) */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center gap-8">
                <a href="#home" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                  Home
                </a>
                <a href="#about" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                  About
                </a>
                <a href="#services" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                  Services
                </a>
                <a href="#gallery" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                  Gallery
                </a>
                <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                  Contact
                </a>
              </div>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Phone (desktop only) */}
              <a
                href="tel:+49123456789"
                aria-label="Call us at +49 123 456 789"
                className="hidden md:inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full text-blue-600 hover:text-blue-700 font-semibold whitespace-nowrap transition-all"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>+49 123 456 789</span>
              </a>

              {/* Hamburger (mobile only) */}
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
                className="inline-flex md:hidden items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile slide-over menu */}
      <MobileMenu isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
