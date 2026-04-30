"use client";

import { useState } from "react";
import Link from "next/link";

export default function TopAppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Live Tracking", href: "#tracking" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
  ];

  return (
    <header className="top-appbar fixed top-0 left-0 w-full z-50">
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <div className="text-lg sm:text-xl font-bold text-white tracking-tighter flex-shrink-0">
              Scan.in
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <Link href="/login" className="text-zinc-400 font-medium hover:text-white transition-colors duration-200 text-sm">
                Log In
              </Link>
              <Link href="/register" className="bg-[#1ed760] text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest active:scale-95 transition-transform hover:bg-[#1fdf64]">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:bg-zinc-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Centered pill navigation (desktop) */}
        <nav className="nav-pill hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2 top-5 z-40 w-[calc(100%-320px)] max-w-xl px-5 py-2 rounded-full border border-zinc-800">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="text-zinc-400 font-medium hover:text-white transition-colors duration-200 text-sm"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="block px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors text-sm font-medium"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 space-y-2 border-t border-zinc-700">
              <Link href="/login" className="block w-full text-left px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                Log In
              </Link>
              <Link href="/register" className="block w-full text-center bg-[#1ed760] text-black px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-widest active:scale-95 transition-transform hover:bg-[#1fdf64]" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
