"use client";

import React from "react";
import Image from "next/image";

export default function VishwakarmaArt() {
  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center p-2 sm:p-4">
      {/* Outer Divine Aura Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/25 via-orange-500/30 to-yellow-300/35 blur-3xl animate-pulse-glow" />

      {/* Rotating Sacred Gear / Mandala (Outer) */}
      <div className="absolute inset-0 rounded-full border border-amber-400/30 animate-spin-slow pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full h-full text-amber-500/25">
          <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8,6" />
          <circle cx="200" cy="200" r="170" fill="none" stroke="currentColor" strokeWidth="1" />
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <g key={i} transform={`rotate(${angle} 200 200)`}>
                <rect x="194" y="6" width="12" height="18" rx="3" fill="currentColor" fillOpacity="0.5" />
                <circle cx="200" cy="34" r="3" fill="#D97706" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Rotating Architectural Blueprint Mandala (Inner Reverse) */}
      <div className="absolute inset-6 rounded-full border border-orange-400/20 animate-spin-reverse-slow pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 320 320" className="w-full h-full text-orange-400/20">
          <circle cx="160" cy="160" r="145" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            return (
              <g key={i} transform={`rotate(${angle} 160 160)`}>
                <path d="M160 15 C166 32 170 50 160 68 C150 50 154 32 160 15 Z" fill="currentColor" />
                <circle cx="160" cy="76" r="3" fill="#EA580C" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Central Glowing Halo Disc */}
      <div className="absolute w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] rounded-full bg-gradient-to-tr from-amber-400/30 via-yellow-200/40 to-orange-400/30 shadow-[0_0_60px_rgba(251,191,36,0.35)] backdrop-blur-sm border border-amber-300/40 pointer-events-none" />

      {/* Lord Vishwakarma Image Showcase */}
      <div className="relative z-10 w-full h-full flex items-center justify-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
        <div className="relative w-[92%] h-[92%] max-w-[420px] max-h-[420px] flex items-center justify-center">
          <Image
            src="/Vishwakarma_1.png"
            alt="Lord Vishwakarma - Divine Architect"
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-contain filter drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            priority
          />
        </div>
      </div>

      {/* Floating Diya Light Lamps at Bottom */}
      <div className="absolute -bottom-2 left-2 z-20 flex flex-col items-center animate-float-slow pointer-events-none">
        <div className="w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_20px_#F59E0B] animate-pulse" />
        <div className="w-10 h-5 rounded-b-full bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 border border-amber-400/70 shadow-lg" />
      </div>

      <div
        className="absolute -bottom-2 right-2 z-20 flex flex-col items-center animate-float-slow pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_20px_#F59E0B] animate-pulse" />
        <div className="w-10 h-5 rounded-b-full bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 border border-amber-400/70 shadow-lg" />
      </div>
    </div>
  );
}
