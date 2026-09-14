"use client";

import React, { useState } from "react";
import { Clock, Calendar, Sparkles, Flame, Waves, Flower2, ChevronRight, CheckCircle2 } from "lucide-react";

export default function TimelineSection() {
  const [activeDay, setActiveDay] = useState<"all" | "day1" | "day2">("all");

  const stepperItems = [
    {
      time: "09:30 AM",
      date: "Sept 17",
      title: "Ganesh & Vishwakarma Sthapana",
      desc: "Sacred Invocation & Ayudha Puja (Tool Sanctification)",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      color: "from-amber-500 to-amber-600",
    },
    {
      time: "10:15 AM",
      date: "Sept 17",
      title: "Vishwakarma Homa & Aarti",
      desc: "Sacred Fire Yajna, Pushpanjali & Maha Aarti",
      icon: <Flame className="w-5 h-5 text-orange-500" />,
      color: "from-orange-500 to-amber-600",
    },
    {
      time: "06:00 PM",
      date: "Sept 18",
      title: "Vishwakarma Visarjan",
      desc: "Shobha Yatra, Devotional Farewell & Sacred Immersion",
      icon: <Waves className="w-5 h-5 text-blue-500" />,
      color: "from-blue-600 to-indigo-600",
    },
  ];

  const scheduleDay1 = [
    {
      time: "09:30 AM",
      title: "Vishwakarma Puja & Sthapana",
      category: "Sacred Invocation & Ayudha Sanctification",
      description:
        "Ceremonial invocation of Lord Vishwakarma with Kalash Sthapana, Vedic chants, and sanctification of tools, machinery, hardware, and engineering equipment.",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      tag: "Day 1 - Morning",
      highlights: ["Kalash Sthapana", "Ayudha Puja (Tool Blessings)", "Vedic Chants"],
    },
    {
      time: "10:15 AM",
      title: "Vishwakarma Homa & Aarti",
      category: "Sacred Fire Ceremony & Pushpanjali",
      description:
        "Auspicious Homa (sacred fire ritual) invoking divine blessings for technical excellence, safety, and prosperity, followed by grand Pushpanjali floral offering and Maha Aarti.",
      icon: <Flame className="w-5 h-5 text-orange-500" />,
      tag: "Day 1 - Rituals",
      highlights: ["Sacred Homa Yajna", "Pushpanjali Floral Offering", "Maha Aarti"],
    },
  ];

  const scheduleDay2 = [
    {
      time: "06:00 PM",
      title: "Vishwakarma Visarjan",
      category: "Sacred Immersion & Shobha Yatra",
      description:
        "Devotional farewell procession (Shobha Yatra) accompanied by traditional dhak beats, sacred hymns, and holy idol immersion (Visarjan) seeking eternal blessings.",
      icon: <Waves className="w-5 h-5 text-blue-500" />,
      tag: "Day 2 - Evening",
      highlights: ["Shobha Yatra Procession", "Farewell Aarti", "Idol Visarjan (Immersion)"],
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative side accents */}
      <div className="absolute -left-20 top-1/3 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300/60 text-xs font-semibold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Ceremony Schedule</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Interactive Event Timeline
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Please join us for each sacred milestone across the 2-day celebration.
          </p>

          {/* Connected Horizontal Stepper Bar (inspired by reference layout) */}
          <div className="mt-8 pt-4 pb-6 hidden md:block">
            <div className="relative flex items-center justify-between">
              {/* Connecting line */}
              <div className="absolute top-1/2 left-16 right-16 -translate-y-1/2 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-blue-500 rounded-full z-0" />

              {stepperItems.map((step, sIdx) => (
                <div key={sIdx} className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-amber-400 shadow-lg flex items-center justify-center p-1 group hover:scale-110 transition-transform">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <span className="mt-2.5 px-2.5 py-0.5 rounded-full bg-slate-900 text-amber-300 text-[11px] font-bold font-mono">
                    {step.time}
                  </span>
                  <span className="text-[10px] text-amber-700 font-semibold uppercase mt-1">
                    {step.date}
                  </span>
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-slate-900 mt-1">
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-amber-300/60 shadow-sm mt-4">
            <button
              onClick={() => setActiveDay("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeDay === "all"
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md"
                  : "text-slate-600 hover:text-amber-600"
              }`}
            >
              All Ceremonies
            </button>
            <button
              onClick={() => setActiveDay("day1")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeDay === "day1"
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md"
                  : "text-slate-600 hover:text-amber-600"
              }`}
            >
              Day 1: Puja (Sept 17)
            </button>
            <button
              onClick={() => setActiveDay("day2")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeDay === "day2"
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md"
                  : "text-slate-600 hover:text-amber-600"
              }`}
            >
              Day 2: Visarjan (Sept 18)
            </button>
          </div>
        </div>

        {/* Timeline Detailed Cards Container */}
        <div className="space-y-12">
          {/* DAY 1 SECTION */}
          {(activeDay === "all" || activeDay === "day1") && (
            <div className="space-y-6">
              {/* Day Header Badge */}
              <div className="flex items-center gap-3">
                <div className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#0B132B] to-[#172952] text-amber-300 text-xs sm:text-sm font-serif font-bold tracking-wide border border-amber-400/40 shadow-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Thursday, Sept 17, 2026 • Main Puja Day</span>
                </div>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-amber-300 to-transparent" />
              </div>

              {/* Day 1 Cards */}
              <div className="space-y-4 pl-2 sm:pl-4 border-l-2 border-amber-400/60 ml-3 sm:ml-6">
                {scheduleDay1.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative group bg-white rounded-2xl p-5 sm:p-6 border-2 border-amber-200/80 shadow-md hover:shadow-xl hover:border-amber-500 transition-all duration-300"
                  >
                    <div className="absolute -left-[27px] sm:-left-[35px] top-6 w-5 h-5 rounded-full bg-amber-500 border-4 border-[#FAF7F2] shadow" />

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-bold font-mono">
                            <Clock className="w-3.5 h-3.5 text-amber-600" />
                            {item.time}
                          </span>
                          <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>

                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.highlights.map((h, hIdx) => (
                            <span
                              key={hIdx}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 text-xs border border-amber-200/60 font-medium"
                            >
                              <Flower2 className="w-3 h-3 text-amber-600" />
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="hidden sm:flex flex-col items-center justify-center p-3 rounded-2xl bg-amber-50 border border-amber-200/60">
                        {item.icon}
                        <span className="text-[10px] font-bold text-amber-800 uppercase mt-1">
                          Step 0{idx + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DAY 2 SECTION */}
          {(activeDay === "all" || activeDay === "day2") && (
            <div className="space-y-6">
              {/* Day Header Badge */}
              <div className="flex items-center gap-3">
                <div className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#0B132B] to-[#1C3263] text-orange-300 text-xs sm:text-sm font-serif font-bold tracking-wide border border-orange-400/40 shadow-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-400" />
                  <span>Friday, Sept 18, 2026 • Visarjan Day</span>
                </div>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-orange-300 to-transparent" />
              </div>

              {/* Day 2 Cards */}
              <div className="space-y-4 pl-2 sm:pl-4 border-l-2 border-orange-400/60 ml-3 sm:ml-6">
                {scheduleDay2.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative group bg-white rounded-2xl p-5 sm:p-6 border-2 border-orange-200/80 shadow-md hover:shadow-xl hover:border-orange-500 transition-all duration-300"
                  >
                    <div className="absolute -left-[27px] sm:-left-[35px] top-6 w-5 h-5 rounded-full bg-orange-500 border-4 border-[#FAF7F2] shadow" />

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-800 text-xs font-bold font-mono">
                            <Clock className="w-3.5 h-3.5 text-orange-600" />
                            {item.time}
                          </span>
                          <span className="text-[11px] font-semibold text-orange-700 uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>

                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.highlights.map((h, hIdx) => (
                            <span
                              key={hIdx}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-50 text-orange-900 text-xs border border-orange-200/60 font-medium"
                            >
                              <Waves className="w-3 h-3 text-orange-600" />
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="hidden sm:flex flex-col items-center justify-center p-3 rounded-2xl bg-orange-50 border border-orange-200/60">
                        {item.icon}
                        <span className="text-[10px] font-bold text-orange-800 uppercase mt-1">
                          Finale
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
