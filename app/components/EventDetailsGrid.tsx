"use client";

import React, { useState } from "react";
import { Calendar, Clock, MapPin, Video, Navigation, Copy, Check, ExternalLink, Sparkles } from "lucide-react";

export default function EventDetailsGrid() {
  const [copied, setCopied] = useState(false);
  const mapsUrl = "https://maps.app.goo.gl/8vGVq1SB6caVnh5p9";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(mapsUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="details" className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F3EDE2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 border border-orange-300/60 text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-orange-600" />
            <span>Essential Information</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Event Details & Venue
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know to join us in person or celebrate virtually.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Day 1 Puja & Sthapana */}
          <div className="bg-white rounded-2xl p-6 border-2 border-amber-300/80 shadow-md hover:shadow-xl hover:border-amber-500 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-300 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold uppercase tracking-wider">
                Day 1 • Main Puja
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Thursday, Sept 17, 2026
                </h3>
                <p className="text-xs font-semibold text-amber-700 mt-1">
                  Kanya Sankranti • Sthapana & Homa
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Puja Sthapana begins promptly at <strong>09:30 AM</strong>, followed by the sacred Homa and Maha Aarti at <strong>10:15 AM</strong>.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-xs font-medium text-amber-700">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>Morning Rituals: 09:30 AM onwards</span>
              </div>
            </div>
          </div>

          {/* Card 2: Day 2 Visarjan */}
          <div className="bg-white rounded-2xl p-6 border-2 border-orange-300/80 shadow-md hover:shadow-xl hover:border-orange-500 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-300 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[11px] font-bold uppercase tracking-wider">
                Day 2 • Visarjan
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Friday, Sept 18, 2026
                </h3>
                <p className="text-xs font-semibold text-orange-700 mt-1">
                  Sacred Immersion & Shobha Yatra
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Join us for the devotional Visarjan procession and farewell Aarti in the evening between <strong>06:00 PM</strong>.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-xs font-medium text-orange-700">
                <Clock className="w-3.5 h-3.5 text-orange-500" />
                <span>Evening: 06:00 PM</span>
              </div>
            </div>
          </div>

          {/* Card 3: Location / Venue (Google Maps Link) */}
          <div className="bg-white rounded-2xl p-6 border-2 border-blue-200/80 shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-300 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wider">
                In-Person Venue
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Puja Venue Location
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  Tap below for exact map coordinates
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Easily navigate to our puja grounds via Google Maps navigation.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs font-semibold shadow hover:from-blue-700 hover:to-indigo-800 transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions (Google Maps)</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <button
                onClick={handleCopyLink}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-700 font-semibold">Location Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Location Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 4: Virtual Live Stream */}
          <div className="bg-white rounded-2xl p-6 border-2 border-purple-200/80 shadow-md hover:shadow-xl hover:border-purple-500 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-300 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[11px] font-bold uppercase tracking-wider">
                Virtual Broadcast
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Virtual Live Stream
                </h3>
                <p className="text-xs font-semibold text-purple-700 mt-1">
                  HD Live Video Broadcast
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cannot make it in person? Experience the live rituals, mantras, and aarti from anywhere across the globe.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="#details"
                onClick={() => alert("Live stream broadcast link will go live on Sept 17, 2026 at 09:30 AM IST!")}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-300 text-purple-800 text-xs font-semibold transition-all cursor-pointer"
              >
                <Video className="w-3.5 h-3.5 text-purple-600" />
                <span>Join Live Stream</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
