import React, { useState } from 'react';
import { Sparkles, Heart, Crown } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SuciSpotlight() {
  const [likes, setLikes] = useState({});
  const [activeIdx, setActiveIdx] = useState(0);

  const portraits = [
    {
      src: "/photos/suci/suci_01.webp",
      compliment: "Senyummu yang selalu bisa mengubah hari yang kelabu jadi penuh kehangatan."
    },
    {
      src: "/photos/suci/suci_03.webp",
      compliment: "Mata indahmu yang selalu memancarkan keteduhan dan ketulusan hati."
    },
    {
      src: "/photos/suci/suci_05.webp",
      compliment: "Anggun, sederhana, dan selalu memikat dalam setiap tingkah lakumu."
    },
    {
      src: "/photos/suci/suci_07.webp",
      compliment: "Definisi bidadari nyata yang dikirim Allah untuk melengkapi hidupku."
    },
    {
      src: "/photos/suci/suci_09.webp",
      compliment: "Wanita tercantik yang selalu kurindukan di setiap waktu dan detak nafasku."
    },
    {
      src: "/photos/suci/suci_11.webp",
      compliment: "Bukan hanya parasmu yang memesona, tapi hatimu yang begitu suci dan tulus."
    }
  ];

  const handleLike = (idx) => {
    setLikes((prev) => ({
      ...prev,
      [idx]: (prev[idx] || 0) + 1
    }));

    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f43f5e', '#ec4899', '#fda4af']
    });
  };

  return (
    <section className="py-8 px-4 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium mb-2">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span>Bidadari Terindah Hatiku</span>
        </div>
        <h2 className="text-2xl font-bold text-white font-serif">
          Pesona Suci Nur Fitri
        </h2>
        <p className="text-xs text-pink-200/70 max-w-xs mx-auto mt-1">
          Setiap potretmu adalah lukisan terindah yang tak pernah bosan kupandangi.
        </p>
      </div>

      {/* Main Focus Card */}
      <div className="relative rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-rose-500/30 via-pink-500/20 to-purple-500/30 border border-pink-500/30 shadow-2xl backdrop-blur-xl mb-4">
        <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-gray-900">
          <img
            src={portraits[activeIdx].src}
            alt="Suci Nur Fitri"
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>

          {/* Floating like button */}
          <button
            onClick={() => handleLike(activeIdx)}
            className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center gap-1.5 active:scale-125 transition-transform"
          >
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span className="text-xs font-semibold">
              {likes[activeIdx] || 100}+
            </span>
          </button>

          {/* Compliment Quote */}
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-rose-500/30 border border-rose-400/40 text-[10px] text-rose-200 font-semibold uppercase tracking-wider mb-1.5">
              Catatan Cinta Rizal
            </span>
            <p className="text-xs font-light text-pink-100 leading-relaxed drop-shadow">
              "{portraits[activeIdx].compliment}"
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnails row */}
      <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none px-1">
        {portraits.map((p, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`relative flex-shrink-0 w-16 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
              activeIdx === i
                ? 'border-pink-400 scale-105 shadow-[0_0_15px_rgba(244,114,182,0.6)]'
                : 'border-white/20 opacity-60 hover:opacity-100'
            }`}
          >
            <img src={p.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
}

