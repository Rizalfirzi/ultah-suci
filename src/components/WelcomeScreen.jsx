import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Gift } from 'lucide-react';
import { romanticAudio } from '../utils/audioPlayer';

export default function WelcomeScreen({ onStart }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    romanticAudio.play();

    // Trigger sweet confetti burst
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fb7185', '#fda4af', '#fef08a', '#e879f9']
    });

    setTimeout(() => {
      onStart();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-b from-[#150a21] via-[#0d0716] to-[#08040d] transition-all duration-700 ${
        opening ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Ambient background glow & stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-pink-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-600/15 rounded-full blur-[90px]"></div>
      </div>

      <div className="relative z-10 max-w-sm w-full text-center flex flex-col items-center">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-medium mb-6 animate-bounce">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>Ada Pesan Rahasia Menunggumu</span>
        </div>

        {/* Title */}
        <h2 className="text-sm uppercase tracking-[0.25em] text-pink-300/80 font-light mb-2">
          Spesial di Hari Ulang Tahun
        </h2>
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-300 via-rose-200 to-purple-300 bg-clip-text text-transparent font-serif mb-3 tracking-wide">
          Suci Nur Fitri
        </h1>

        <p className="text-xs text-pink-200/70 mb-8 max-w-xs leading-relaxed">
          Kisah perjalanan, untaian doa, dan sejuta rasa sayang yang dirajut khusus untuk bidadari tercinta.
        </p>

        {/* Interactive Gift Box / Heart */}
        <div className="relative mb-8 cursor-pointer group" onClick={handleOpen}>
          <div className="w-28 h-28 rounded-3xl bg-gradient-to-tr from-pink-600 to-rose-400 flex items-center justify-center shadow-[0_0_40px_rgba(244,114,182,0.4)] group-hover:scale-105 transition-transform duration-300 animate-romantic-float">
            <Gift className="w-14 h-14 text-white drop-shadow-md" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-3 py-0.5 rounded-full border border-white/20 text-[10px] text-pink-100">
            Ketuk Di Sini ✨
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleOpen}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-medium text-sm shadow-[0_0_25px_rgba(244,114,182,0.35)] hover:shadow-[0_0_35px_rgba(244,114,182,0.5)] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Heart className="w-4 h-4 fill-white text-white animate-pulse" />
          <span>Buka Kejutan Cinta Dari Rizal</span>
        </button>

        <p className="text-[11px] text-gray-400 mt-4">
          🎵 Pasang earphone untuk pengalaman terbaik
        </p>
      </div>
    </div>
  );
}

