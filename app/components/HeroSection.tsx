"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, Clock, Navigation, ChevronDown, Flame, Compass } from "lucide-react";
import VishwakarmaArt from "./VishwakarmaArt";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target: September 17, 2026, 09:30 AM IST (+05:30)
    const targetDate = new Date("2026-09-17T09:30:00+05:30").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#070D1E] via-[#0D1836] to-[#FAF7F2]">
      {/* Sacred Geometric Gear & Star Overlays in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full border border-amber-400/30 animate-spin-slow" />
        <div className="absolute top-40 right-10 w-[500px] h-[500px] rounded-full border border-orange-500/20 animate-spin-reverse-slow" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full border border-yellow-300/20" />
      </div>

      {/* Decorative Marigold Garland Top Border */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 flex items-center justify-around overflow-hidden shadow-md">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="w-3.5 h-3.5 rounded-full bg-amber-300 border border-orange-600 -mt-1 shadow-sm"
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Host Name Banner */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-orange-500/20 to-amber-500/15 border border-amber-400/40 backdrop-blur-md shadow-lg shadow-amber-500/5">
            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-amber-200 uppercase font-sans">
              Cordially Invited • <span className="text-white font-bold">Hosted by: Ram Sharma</span>
            </span>
            <Compass className="w-4 h-4 text-amber-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left / Main Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Sanskrit Shloka Badge */}
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-amber-500/30 via-orange-500/20 to-amber-500/30 border border-amber-400/30">
              <div className="px-4 py-1.5 rounded-xl bg-[#0B132B]/80 backdrop-blur-sm flex items-center justify-center lg:justify-start gap-2">
                <span className="text-amber-400 font-serif font-bold tracking-wider text-sm sm:text-base">
                  ॐ श्री विश्वकर्मणे नमः
                </span>
                <span className="hidden sm:inline text-xs text-slate-300">
                  | Salutations to the Master Creator
                </span>
              </div>
            </div>

            {/* Main Title & Subtitles matching reference style */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Vishwakarma <br />
                <span className="gold-gradient-text">Puja 2026</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-amber-200/90 font-serif">
                An Auspicious Celebration of Craftsmanship & Innovation
              </p>
              <p className="text-sm sm:text-base font-light text-slate-300 tracking-wide">
                Celebrating the Divine Architect of the Universe
              </p>
            </div>

            {/* Cordial Invitation Intro Card */}
            <div className="p-4 rounded-2xl bg-[#0E1B3A]/70 border border-amber-400/25 backdrop-blur-md text-left">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                You Are Cordially Invited
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Welcome to celebrate with <strong>Ram Sharma</strong> and family as we sanctify our tools,
                machinery, computers, and crafts. May Lord Vishwakarma shower eternal blessings of
                creativity, technical excellence, safety, and prosperity.
              </p>
            </div>

            {/* Quick Key Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-amber-500/30 text-xs sm:text-sm text-slate-200 shadow-sm backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span className="font-medium">Sept 17: Puja (09:30 AM)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-orange-500/30 text-xs sm:text-sm text-slate-200 shadow-sm backdrop-blur-sm">
                <Clock className="w-4 h-4 text-orange-400" />
                <span className="font-medium">Sept 18: Visarjan (06:00 PM)</span>
              </div>
            </div>

            {/* Real-time Countdown Grid */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-widest text-amber-300/80 mb-3 font-semibold text-center lg:text-left">
                Ceremony Begins In:
              </div>
              <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Mins", value: timeLeft.minutes },
                  { label: "Secs", value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#122247]/90 border border-amber-500/30 p-2.5 sm:p-3 text-center shadow-lg shadow-black/40 backdrop-blur-md group hover:border-amber-400/70 transition-all"
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-white group-hover:text-amber-300 transition-colors">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold tracking-wider text-amber-300/90 uppercase mt-0.5">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://maps.app.goo.gl/8vGVq1SB6caVnh5p9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold text-base shadow-xl shadow-orange-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-98 transition-all duration-200 border border-amber-300/50"
              >
                <Navigation className="w-5 h-5 text-amber-100" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href="#schedule"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-100 hover:text-white font-semibold text-base border border-amber-500/30 hover:border-amber-400/60 shadow-md backdrop-blur-sm transition-all"
              >
                <span>View Schedule</span>
                <ChevronDown className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Right Column / Lord Vishwakarma Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <VishwakarmaArt />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-10 text-center flex justify-center">
        <a
          href="#about"
          className="inline-flex flex-col items-center text-xs text-slate-400 hover:text-amber-400 transition-colors gap-1 animate-bounce"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
