import React, { useState } from 'react';
import { Mail, Heart, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { birthdayWishes } from '../data/wishes';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(true);
  const { letter } = birthdayWishes;

  return (
    <section className="py-8 px-4 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium mb-2">
          <Mail className="w-3.5 h-3.5" />
          <span>Surat Cinta Terbuka</span>
        </div>
        <h2 className="text-2xl font-bold text-white font-serif">
          Dari Lubuk Hatiku yang Terdalam
        </h2>
        <p className="text-xs text-pink-200/70 max-w-xs mx-auto mt-1">
          Sepenggal kata tulus yang kurangkai khusus untukmu, Suci Nur Fitri.
        </p>
      </div>

      {/* Love Letter Paper Container */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#2a1324] via-[#1f0e1b] to-[#160814] border border-pink-500/40 p-6 shadow-2xl backdrop-blur-xl">
        {/* Wax Seal Accent */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-tr from-rose-700 to-pink-500 border-2 border-amber-300/60 shadow-lg flex items-center justify-center text-white">
          <Heart className="w-4 h-4 fill-white" />
        </div>

        {/* Salutation */}
        <div className="pt-2 pb-3 border-b border-pink-500/20 mb-4">
          <h3 className="text-base font-bold text-pink-200 font-serif">
            {letter.salutation}
          </h3>
          <span className="text-[10px] text-pink-400">
            Ditulis penuh cinta oleh Rizal
          </span>
        </div>

        {/* Letter Paragraphs */}
        <div className="space-y-3.5 text-xs text-pink-100/90 font-light leading-relaxed text-justify font-sans">
          {letter.paragraphs.map((p, idx) => (
            <p key={idx} className="indent-4">
              {p}
            </p>
          ))}
        </div>

        {/* Closing & Signature */}
        <div className="mt-6 pt-4 border-t border-pink-500/20 text-right">
          <p className="text-[11px] text-pink-300/80 italic font-serif">
            {letter.closing}
          </p>
          <p className="text-base font-extrabold text-pink-200 font-serif mt-1">
            {letter.signature}
          </p>
        </div>
      </div>
    </section>
  );
}

