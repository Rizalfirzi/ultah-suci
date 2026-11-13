import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Flame, Sparkles, Heart, RotateCcw } from 'lucide-react';

export default function BirthdayCake() {
  const [isBlown, setIsBlown] = useState(false);
  const [showWishModal, setShowWishModal] = useState(false);

  const handleBlowCandle = () => {
    if (isBlown) return;

    setIsBlown(true);

    // Multi-stage celebratory confetti explosion
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#f472b6', '#ec4899', '#fb7185', '#fbbf24', '#c084fc', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    setTimeout(() => {
      setShowWishModal(true);
    }, 800);
  };

  const handleReset = () => {
    setIsBlown(false);
    setShowWishModal(false);
  };

  return (
    <section id="cake" className="py-8 px-4 max-w-md mx-auto text-center">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Wish & Cake</span>
        </div>
        <h2 className="text-2xl font-bold text-white font-serif">
          Tiup Lilin Ulang Tahunmu
        </h2>
        <p className="text-xs text-pink-200/70 max-w-xs mx-auto mt-1">
          {isBlown
            ? "Permohonanmu sedang didengar semesta! ✨"
            : "Tutup matamu, buat satu permohonan indah di dalam hati, lalu ketuk lilin ini untuk meniupnya."}
        </p>
      </div>

      {/* Cake Container */}
      <div className="relative mx-auto w-64 h-64 flex flex-col items-center justify-end mb-6">
        {/* Candle */}
        <div
          onClick={handleBlowCandle}
          className="relative z-20 flex flex-col items-center cursor-pointer group select-none -mb-1"
        >
          {/* Flame */}
          {!isBlown ? (
            <div className="relative">
              <div className="w-6 h-9 rounded-[50%_50%_40%_40%] bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 flame-animation shadow-[0_0_20px_#f59e0b]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-4 rounded-full bg-white/70 blur-[1px]"></div>
            </div>
          ) : (
            // Extinguished smoke effect
            <div className="h-9 flex flex-col items-center justify-end">
              <span className="text-xs text-gray-400 animate-ping">💨</span>
              <span className="text-[10px] text-pink-300 font-semibold mt-1">Padam ✨</span>
            </div>
          )}

          {/* Wick */}
          <div className="w-1 h-3 bg-gray-700"></div>

          {/* Candle Body */}
          <div className="w-5 h-16 rounded-t-md bg-gradient-to-b from-pink-300 via-rose-300 to-pink-400 border border-white/30 shadow-md flex flex-col justify-around py-1">
            <div className="w-full h-1 bg-white/40"></div>
            <div className="w-full h-1 bg-white/40"></div>
            <div className="w-full h-1 bg-white/40"></div>
          </div>
        </div>

        {/* Cake Layer 1 (Top) */}
        <div className="relative z-10 w-40 h-14 rounded-2xl bg-gradient-to-r from-pink-300 via-rose-200 to-pink-300 border-2 border-pink-400/50 shadow-lg flex items-center justify-center -mb-2">
          {/* Strawberries on top */}
          <div className="absolute -top-3 flex justify-around w-full px-4">
            <span className="text-base drop-shadow animate-bounce">🍓</span>
            <span className="text-base drop-shadow animate-bounce delay-100">🍓</span>
            <span className="text-base drop-shadow animate-bounce delay-200">🍓</span>
          </div>
          <span className="text-[11px] font-bold text-rose-800 tracking-wide font-serif">
            Suci Nur Fitri
          </span>
        </div>

        {/* Cake Layer 2 (Bottom base) */}
        <div className="relative w-56 h-20 rounded-2xl bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 border-2 border-rose-500/50 shadow-2xl flex flex-col justify-center items-center px-4">
          <div className="w-full h-1.5 bg-white/40 rounded-full mb-1.5"></div>
          <span className="text-xs font-extrabold text-white tracking-widest uppercase drop-shadow font-serif">
            Happy Birthday
          </span>
          <div className="w-full h-1.5 bg-white/40 rounded-full mt-1.5"></div>
        </div>

        {/* Plate / Stand */}
        <div className="w-64 h-3 rounded-full bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-xl border border-white/50 -mt-1"></div>
      </div>

      {/* Action Button */}
      {!isBlown ? (
        <button
          onClick={handleBlowCandle}
          className="w-full max-w-xs py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 text-white font-semibold text-xs shadow-[0_0_25px_rgba(245,158,11,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto"
        >
          <Flame className="w-4 h-4 text-yellow-200 animate-pulse" />
          <span>Tiup Lilin Sekarang</span>
        </button>
      ) : (
        <button
          onClick={handleReset}
          className="w-full max-w-xs py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs flex items-center justify-center gap-2 mx-auto transition"
        >
          <RotateCcw className="w-3.5 h-3.5 text-pink-300" />
          <span>Nyalakan Lilin Lagi</span>
        </button>
      )}

      {/* Wish Reveal Modal */}
      {showWishModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="max-w-sm w-full bg-gray-950 border border-pink-500/50 rounded-3xl p-6 shadow-2xl text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-amber-400 mx-auto flex items-center justify-center shadow-lg animate-bounce">
              <Sparkles className="w-7 h-7 text-white" />
            </div>

            <h3 className="text-xl font-bold text-white font-serif">
              Make A Wish Terkabul! ✨
            </h3>

            <p className="text-xs text-pink-100 leading-relaxed font-light">
              "Semoga Allah SWT mendengar bisikan doamu, mengabulkan setiap impian tulusmu, dan memelukmu dengan segala kebaikan di setiap tarikan nafasmu."
            </p>

            <div className="p-3 rounded-2xl bg-pink-950/40 border border-pink-500/30 text-left">
              <p className="text-[11px] text-pink-300 font-semibold mb-1 flex items-center gap-1">
                <Heart className="w-3 h-3 fill-pink-400 text-pink-400" /> Janji Rizal untuk Suci:
              </p>
              <p className="text-[11px] text-pink-100/90 leading-relaxed">
                "Apapun permohonan yang kamu panjatkan hari ini, aku berjanji akan berusaha sekuat tenagaku untuk mendampingimu dan mewujudkannya bersama."
              </p>
            </div>

            <button
              onClick={() => setShowWishModal(false)}
              className="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-semibold text-xs shadow-md transition"
            >
              Aamiin Ya Allah ❤️
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

