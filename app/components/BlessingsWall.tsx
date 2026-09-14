"use client";

import React, { useState } from "react";
import { MessageSquareHeart, Send, Sparkles, Heart, Flame } from "lucide-react";

export default function BlessingsWall() {
  const [blessings, setBlessings] = useState([
    {
      name: "Suresh & Family",
      message: "May Lord Vishwakarma bless all our engineering works with precision, success, and prosperity!",
      time: "2 hours ago",
      likes: 12,
    },
    {
      name: "Rohit Verma",
      message: "Looking forward to attending the Puja Sthapana & Visarjan ceremonies. Heartiest congratulations to R!",
      time: "5 hours ago",
      likes: 8,
    },
    {
      name: "Meera & Tech Team",
      message: "May divine creativity inspire our architecture, tools, and creations throughout the coming year. ॐ श्री विश्वकर्मणे नमः!",
      time: "Yesterday",
      likes: 19,
    },
  ]);

  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const handleAddBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newMessage.trim()) return;

    setBlessings([
      {
        name: newName.trim(),
        message: newMessage.trim(),
        time: "Just now",
        likes: 1,
      },
      ...blessings,
    ]);

    setNewName("");
    setNewMessage("");
  };

  return (
    <section id="blessings" className="py-16 bg-[#FAF7F2] border-t border-amber-200/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider">
            <MessageSquareHeart className="w-3.5 h-3.5 text-amber-600" />
            <span>Community Wall</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Blessings & Festive Wishes
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Leave your warm prayer or blessing for Lord Vishwakarma and our celebration.
          </p>
        </div>

        {/* Input box */}
        <form
          onSubmit={handleAddBlessing}
          className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-amber-300/70 shadow-md mb-8 space-y-3"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              placeholder="Your Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
              required
            />
            <input
              type="text"
              placeholder="Write your blessing or message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="sm:col-span-2 px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Post Blessing</span>
            </button>
          </div>
        </form>

        {/* List of blessings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blessings.map((b, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-amber-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-slate-900 text-sm">
                    {b.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{b.time}</span>
                </div>
                <p className="text-xs text-slate-600 italic">
                  "{b.message}"
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-amber-700">
                <span className="flex items-center gap-1">
                  <Flame className="w-3 h-3 text-orange-500" />
                  <span>Blessing</span>
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Heart className="w-3 h-3 text-red-400 fill-red-400" />
                  <span>{b.likes}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
