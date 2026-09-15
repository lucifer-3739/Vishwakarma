"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Navigation, MapPin } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Event Details", href: "#details" },
    { name: "Schedule", href: "#schedule" },
    { name: "Location", href: "#location" },
  ];

  const mapsUrl = "https://maps.app.goo.gl/XofsLJkqFawW4btX9";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B132B]/90 backdrop-blur-md shadow-lg border-b border-amber-500/20 py-2.5"
          : "bg-[#0B132B]/75 backdrop-blur-sm py-3 border-b border-amber-500/15"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Host Tag */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 p-[2px] shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-[10px] bg-[#0B132B] flex items-center justify-center">
                <span className="text-amber-400 font-bold text-lg select-none">ॐ</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                Vishwakarma Puja 2026
              </span>
              <span className="text-[11px] font-medium text-amber-400/90 tracking-wider uppercase flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                Hosted by: <strong className="text-amber-300 font-semibold">Ram Sharma</strong>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-amber-400 after:to-orange-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all duration-200 border border-amber-300/40"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-100" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B132B]/95 border-b border-amber-500/30 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-fadeIn">
          <div className="pb-2 mb-2 border-b border-slate-800/80">
            <span className="text-xs text-amber-400 font-medium uppercase tracking-widest block">
              Hosted by: Ram Sharma
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white text-sm font-semibold shadow-lg shadow-amber-500/20"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions (Google Maps)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
