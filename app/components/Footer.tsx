"use client";

import { MapPin, Phone, Mail, Share2, Sparkles } from "lucide-react";

export default function Footer() {
  const mapsUrl = "https://maps.app.goo.gl/XofsLJkqFawW4btX9";

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `🙏 You are cordially invited to Vishwakarma Puja 2026 (Hosted by Ram Sharma)!\n\n` +
      `📅 Sept 17, 2026: Puja & Sthapana (09:30 AM) | Homa & Aarti (10:15 AM)\n` +
      `📅 Sept 18, 2026: Vishwakarma Visarjan (06:00 PM)\n` +
      `📍 Venue: ${mapsUrl}\n\n` +
      `Please RSVP to grace the occasion with your presence!`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <footer id="location" className="bg-[#070D1E] text-slate-300 relative overflow-hidden border-t-2 border-amber-500/30">
      {/* Decorative Marigold Garland Top Border */}
      <div className="h-2.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 flex items-center justify-around overflow-hidden shadow-inner">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-amber-300 border border-orange-600 -mt-0.5 shadow-sm"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Main Branding & Host info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 p-[2px] shadow-md">
                <div className="w-full h-full rounded-[10px] bg-[#070D1E] flex items-center justify-center text-amber-400 font-bold text-lg">
                  ॐ
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                  Vishwakarma Puja 2026
                </h3>
                <span className="text-xs text-amber-400 uppercase tracking-widest font-semibold block">
                  Hosted by: Ram Sharma
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Honoring the divine architect of the universe, celebrating modern craftsmanship,
              technological innovation, and the sacred spirit within our daily work.
            </p>

            <div className="pt-2">
              <button
                onClick={handleShareWhatsApp}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md hover:scale-105 transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Invitation via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Col 2: Event Dates Quick Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
              Ceremonial Schedule
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-amber-400 block text-xs font-semibold">
                  Thursday, Sept 17, 2026
                </strong>
                <span>• 09:30 AM: Puja & Sthapana</span>
                <br />
                <span>• 10:15 AM: Homa & Aarti</span>
              </li>
              <li className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <strong className="text-orange-400 block text-xs font-semibold">
                  Friday, Sept 18, 2026
                </strong>
                <span>• 06:00 PM: Visarjan Procession</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Venue & Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
              Venue & Contact Details
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/40 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-white font-semibold block">Puja Grounds / Venue</span>
                  <span className="text-slate-400 text-[11px] underline">
                    View on Google Maps (Directions)
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Host Contact: +91 90048 77986</span>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Email: ramsharma9004877986@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Warm Closing Line Banner */}
        <div className="mt-10 py-6 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-200 text-sm sm:text-base font-serif italic shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>“Your presence will add grace to our celebrations.”</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 pt-6 gap-2">
            <div>
              © 2026 Vishwakarma Puja Invitation • Hosted with devotion by <strong>Ram Sharma</strong>
            </div>
            <div className="flex items-center gap-1 text-slate-400">
              <span>May Lord Vishwakarma bless your craft with innovation & prosperity</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
