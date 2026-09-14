"use client";

import React from "react";
import { Hammer, Cpu, Sparkles, Flame, Shield, Building2 } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: <Building2 className="w-6 h-6 text-amber-500" />,
      title: "The Divine Architect",
      subtitle: "Deva Shilpi & Master Builder",
      description:
        "In sacred tradition, Lord Vishwakarma is the principal architect of the cosmos—designer of celestial realms, legendary cities like Dwarka and Lanka, and divine instruments.",
    },
    {
      icon: <Hammer className="w-6 h-6 text-orange-500" />,
      title: "Sanctification of Tools",
      subtitle: "Ayudha Puja & Respect for Craft",
      description:
        "On this sacred day, we offer homage and blessings to the instruments, tools, machinery, computing hardware, and crafts that power our daily work and creations.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      title: "Engineering & Innovation",
      subtitle: "Honoring Modern Builders",
      description:
        "A bridge between ancient wisdom and modern technology—celebrating engineers, developers, designers, mechanics, and creators who shape our futuristic world.",
    },
    {
      icon: <Flame className="w-6 h-6 text-amber-600" />,
      title: "Sacred Fire & Blessings",
      subtitle: "Homa, Aarti & Fellowship",
      description:
        "Participate in the auspicious Homa fire ceremony and Aarti to invoke precision, creativity, prosperity, safety, and excellence in all our technical endeavors.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle mandala background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mandala-pattern" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300/60 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Spiritual & Cultural Heritage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Honoring Craftsmanship, <br />
            <span className="text-amber-600 font-serif">Engineering & Devotion</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Vishwakarma Puja is more than a ritual—it is a celebration of human ingenuity,
            scientific curiosity, hard work, and the divine spirit within every tool and creation.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-white/90 rounded-2xl p-6 border border-amber-200/80 shadow-sm hover:shadow-xl hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-amber-700/90 uppercase tracking-wider mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative Card Accent */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Pillar 0{idx + 1}</span>
                <div className="w-8 h-[2px] bg-gradient-to-r from-amber-400 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Sanskrit Inscription Quote Banner */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#0B132B] via-[#16274D] to-[#0B132B] p-6 sm:p-8 text-center text-white border border-amber-400/40 shadow-xl relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-amber-500/10 blur-xl pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-amber-300 font-medium italic">
              “शिल्पानां विविधानां च कर्ता त्वं विश्वकर्मकः”
            </p>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light">
              “O Vishwakarma, Thou art the supreme author and master of all arts, crafts, and architecture.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
