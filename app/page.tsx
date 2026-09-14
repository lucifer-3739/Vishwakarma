"use client";

import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EventDetailsGrid from "./components/EventDetailsGrid";
import TimelineSection from "./components/TimelineSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2] text-slate-900 overflow-x-hidden selection:bg-amber-500 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section with Host Banner, Countdown & Lord Vishwakarma Art */}
      <HeroSection />

      {/* About & Cultural/Engineering Significance */}
      <AboutSection />

      {/* Essential Event Details Grid with Google Maps navigation */}
      <EventDetailsGrid />

      {/* Interactive Timeline (Sept 17 Puja & Sept 18 Visarjan) */}
      <TimelineSection />

      {/* Footer with Host Info, Venue Link, WhatsApp Share & Closing Message */}
      <Footer />
    </main>
  );
}
