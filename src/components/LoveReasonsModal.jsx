import React, { useState } from 'react';
import { Heart, Sparkles, RefreshCw, Smile } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveReasons } from '../data/loveReasons';

export default function LoveReasonsModal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextReason = () => {
    let nextIdx = Math.floor(Math.random() * loveReasons.length);
    if (nextIdx === currentIndex) {
      nextIdx = (currentIndex + 1) % loveReasons.length;
    }
    setCurrentIndex(nextIdx);

    confetti({
      particleCount: 15,
      spread: 45,
      origin: { y: 0.8 },
      colors: ['#f472b6', '#fda4af', '#f43f5e']
    });
  };

  return (
    <section className="py-8 px-4 max-w-md mx-auto">
      <div className="rounded-3xl bg-gradient-to-br from-pink-900/30 via-rose-950/40 to-purple-950/40 border border-pink-500/30 p-5 backdrop-blur-xl shadow-2xl text-center space-y-4">
        {/* Header */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-semibold">
          <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
          <span>Alasan Mencintaimu</span>
        </div>

        <h3 className="text-xl font-bold text-white font-serif">
          Kenapa Aku Begitu Sayang Sama Kamu?
        </h3>

        {/* Reason Card */}
        <div className="relative min-h-[110px] rounded-2xl bg-white/5 border border-white/10 p-4 flex flex-col justify-center items-center shadow-inner">
          <span className="text-[10px] uppercase font-bold tracking-widest text-pink-400 mb-1">
            Alasan #{currentIndex + 1} Dari {loveReasons.length}
          </span>
          <p className="text-sm text-pink-100 font-serif leading-relaxed italic transition-all duration-300">
            "{loveReasons[currentIndex]}"
          </p>
        </div>

        {/* Shuffle Button */}
        <button
          onClick={handleNextReason}
          className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium text-xs shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-3.5 h-3.5 animate-spin-reverse" />
          <span>Lihat Alasan Lainnya 💕</span>
        </button>

        <p className="text-[10px] text-gray-400">
          Dan masih ada ribuan alasan lain yang tak muat dituliskan di sini...
        </p>
      </div>
    </section>
  );
}

