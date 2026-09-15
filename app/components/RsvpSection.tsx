"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Users,
  Mail,
  Phone,
  User,
  CheckCircle2,
  Utensils,
  MonitorPlay,
  MapPin,
  X,
  Share2,
} from "lucide-react";

export default function RsvpSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "1",
    attendanceType: "in-person", // "in-person" | "virtual"
    dietPreference: "satvik-pure-veg", // "satvik-pure-veg" | "jain" | "general" | "none"
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGuestCount = (count: number) => {
    setFormData({ ...formData, guests: count.toString() });
  };

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#EA580C", "#F59E0B", "#FBBF24", "#D97706", "#2563EB"],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#EA580C", "#F59E0B", "#FBBF24", "#D97706", "#2563EB"],
      });
    }, 250);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const randomId = "VKP-2026-" + Math.floor(1000 + Math.random() * 9000);

    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmationCode(randomId);
      setSubmittedData({ ...formData });
      setShowModal(true);
      triggerConfetti();
    }, 600);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `🎉 I have confirmed my RSVP for Vishwakarma Puja 2026 (Hosted by Ram Sharma)!\n\n` +
      `📅 Sept 17: Puja (09:30 AM) | Sept 18: Visarjan (06:00 PM)\n` +
      `📍 Venue: https://maps.app.goo.gl/XofsLJkqFawW4btX9\n` +
      `Pass Ref: ${confirmationCode}`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <section id="rsvp" className="py-24 bg-gradient-to-b from-[#FAF7F2] via-white to-[#F6EFE6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300/60 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Join Our Celebration</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            RSVP for Vishwakarma Puja 2026
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Hosted by <strong>Ram Sharma</strong>. Please kindly confirm your attendance so we may make gracious arrangements for puja seating,
            prasad, and celebrations.
          </p>
        </div>

        {/* RSVP Card Form */}
        <div className="bg-white rounded-3xl border-2 border-amber-300/80 shadow-2xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-xl">
          {/* Top Gold Shimmer Bar */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400" />

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-slate-800">
                  Full Name <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Aditi Sharma"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-800 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-slate-800">
                  Email Address <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. aditi@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-800 text-sm outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Phone & Number of Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-slate-800">
                  Phone Number <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-800 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* Number of Guests */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-slate-800 flex items-center justify-between">
                  <span>Number of Guests Attending</span>
                  <span className="text-xs text-amber-600 font-bold">
                    {formData.guests} {parseInt(formData.guests) > 1 ? "People" : "Person"}
                  </span>
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => handleGuestCount(num)}
                      className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                        formData.guests === num.toString()
                          ? "bg-amber-500 text-white border-amber-600 shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-amber-50 hover:border-amber-300"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold outline-none focus:border-amber-500"
                  >
                    {[6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}+
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Attendance Type Selector Cards */}
            <div className="space-y-3">
              <label className="block text-xs sm:text-sm font-semibold text-slate-800">
                How will you attend? <span className="text-orange-600">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  className={`cursor-pointer rounded-2xl p-4 border-2 flex items-start gap-3 transition-all ${
                    formData.attendanceType === "in-person"
                      ? "border-amber-500 bg-amber-50/60 shadow-md"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendanceType"
                    value="in-person"
                    checked={formData.attendanceType === "in-person"}
                    onChange={handleChange}
                    className="mt-1 text-amber-600 focus:ring-amber-500"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      <span>In-Person at Venue</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Join us on-site for the Puja rituals, Homa, Prasad, and Visarjan procession.
                    </p>
                  </div>
                </label>

                <label
                  className={`cursor-pointer rounded-2xl p-4 border-2 flex items-start gap-3 transition-all ${
                    formData.attendanceType === "virtual"
                      ? "border-amber-500 bg-amber-50/60 shadow-md"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendanceType"
                    value="virtual"
                    checked={formData.attendanceType === "virtual"}
                    onChange={handleChange}
                    className="mt-1 text-amber-600 focus:ring-amber-500"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                      <MonitorPlay className="w-4 h-4 text-purple-600" />
                      <span>Virtual Live Stream</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Tune in online for HD live streaming of the sacred ceremonies.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Diet / Food Preference (if in-person) */}
            {formData.attendanceType === "in-person" && (
              <div className="space-y-2 animate-fadeIn">
                <label className="block text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-amber-600" />
                  <span>Prasadam & Food Preference</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "satvik-pure-veg", label: "Pure Veg Satvik Bhog" },
                    { id: "jain", label: "Jain Bhog (No Root Veg)" },
                    { id: "general", label: "General Festive Feast" },
                  ].map((diet) => (
                    <label
                      key={diet.id}
                      className={`cursor-pointer p-3 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all ${
                        formData.dietPreference === diet.id
                          ? "bg-amber-100/70 border-amber-500 text-amber-900 shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name="dietPreference"
                        value={diet.id}
                        checked={formData.dietPreference === diet.id}
                        onChange={handleChange}
                        className="text-amber-600 focus:ring-amber-500"
                      />
                      <span>{diet.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Message / Wishes */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-semibold text-slate-800">
                Warm Wishes / Note for Host <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share any special notes, wishes, or dietary needs..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-slate-800 text-sm outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-serif font-bold text-base sm:text-lg shadow-xl shadow-orange-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-99 transition-all duration-200 flex items-center justify-center gap-2 border border-amber-300/40"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Confirming RSVP...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-amber-100" />
                    <span>Submit RSVP Confirmation</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* CONFIRMATION POPUP MODAL */}
      {showModal && submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-amber-400 overflow-hidden animate-scaleUp">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0B132B] via-[#16274D] to-[#0B132B] p-6 text-white text-center relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-amber-400 mx-auto flex items-center justify-center text-amber-400 mb-3 shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-amber-300" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-200">
                Thank you! Your RSVP is confirmed.
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-1">
                Ram Sharma & family look forward to welcoming you!
              </p>
            </div>

            {/* Modal Digital Pass Body */}
            <div className="p-6 space-y-5 bg-[#FAF7F2]">
              {/* Digital Pass Ticket */}
              <div className="bg-white rounded-2xl p-5 border-2 border-amber-300/80 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest block">
                      Digital Guest Pass
                    </span>
                    <span className="font-serif font-bold text-slate-900 text-lg">
                      {submittedData.fullName}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Pass ID</span>
                    <span className="font-mono text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {confirmationCode}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 py-3 text-xs border-b border-amber-100">
                  <div>
                    <span className="text-slate-400 block text-[10px]">ATTENDANCE</span>
                    <span className="font-semibold text-slate-800 capitalize">
                      {submittedData.attendanceType === "in-person" ? "📍 In-Person" : "💻 Virtual Stream"}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">TOTAL GUESTS</span>
                    <span className="font-semibold text-slate-800">
                      {submittedData.guests} {parseInt(submittedData.guests) > 1 ? "Attendees" : "Attendee"}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">DAY 1 PUJA</span>
                    <span className="font-semibold text-slate-800">Sept 17, 09:30 AM</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">DAY 2 VISARJAN</span>
                    <span className="font-semibold text-slate-800">Sept 18, 06:00 PM</span>
                  </div>
                </div>

                {/* Footer of pass */}
                <div className="pt-3 flex items-center justify-between text-xs text-slate-500">
                  <span className="text-[11px] text-amber-800 font-medium">
                    Hosted by: <strong>Ram Sharma</strong>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Present at entrance</span>
                </div>
              </div>

              {/* Actions inside Modal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleShareWhatsApp}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow transition-all"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share via WhatsApp</span>
                </button>

                <a
                  href="https://maps.app.goo.gl/8vGVq1SB6caVnh5p9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B132B] hover:bg-[#16274D] text-amber-300 text-xs sm:text-sm font-semibold border border-amber-400/40 shadow transition-all"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Open Venue Map</span>
                </a>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xs text-slate-500 hover:text-slate-800 font-medium underline"
                >
                  Done & Return to Invitation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
