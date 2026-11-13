import React, { useState } from 'react';
import { Camera, Heart, Sparkles, RotateCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PolaroidWall() {
  const [flipped, setFlipped] = useState({});
  const [loved, setLoved] = useState({});

  const polaroids = [
    {
      id: 1,
      photo: "/photos/2026/cayang_02.webp",
      frontCaption: "Kencan Paling Manis ☕",
      date: "2026",
      rotation: "-rotate-2",
      secretNote: "Waktu foto ini diambil, aku cuma mikir: 'Gimana bisa ada cewek yang senyumnya secantik ini, dan beruntungnya dia milikku'."
    },
    {
      id: 2,
      photo: "/photos/2024/momen_03.webp",
      frontCaption: "Photoshoot Kita Berdua ✨",
      date: "2024",
      rotation: "rotate-2",
      secretNote: "Di momen ini kita banyak ketawa karena pose kita yang suka kagok. Tapi hasilnya selalu jadi favoritku karena ada kamu."
    },
    {
      id: 3,
      photo: "/photos/2023/lama_04.webp",
      frontCaption: "Awal Cerita 2023 💖",
      date: "2023",
      rotation: "-rotate-1",
      secretNote: "Foto masa-masa awal kita. Masih ingat rasanya debar-debar jantung pas kita pertama kali jalan bareng."
    },
    {
      id: 4,
      photo: "/photos/special/dslr_03.webp",
      frontCaption: "Tatapan Bidadariku 🌸",
      date: "2026",
      rotation: "rotate-3",
      secretNote: "Kalau ditanya apa pemandangan paling indah di dunia, jawabannya tetap sama: Saat kamu tersenyum padaku."
    },
    {
      id: 5,
      photo: "/photos/suci/suci_08.webp",
      frontCaption: "My Beautiful Ayang 💕",
      date: "2026",
      rotation: "-rotate-2",
      secretNote: "Terima kasih sudah selalu jadi wanita yang sholehah, sabar, dan penuh kasih sayang. Aku sangat bangga padamu."
    },
    {
      id: 6,
      photo: "/photos/2026/cayang_08.webp",
      frontCaption: "Selamanya Bersamamu 💍",
      date: "Masa Depan",
      rotation: "rotate-1",
      secretNote: "Semoga Allah lancarkan niat kita berdua sampai ke pelaminan ya sayang. Bismillah kita menua bersama."
    }
  ];

  const handleFlip = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleLove = (e, id) => {
    e.stopPropagation();
    setLoved((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));

    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#f43f5e', '#fda4af', '#f472b6']
    });
  };

  return (
    <section className="py-8 px-4 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-medium mb-2">
          <Camera className="w-3.5 h-3.5" />
          <span>Polaroid Cinta Kita</span>
        </div>
        <h2 className="text-2xl font-bold text-white font-serif">
          Galeri Kenangan Instan
        </h2>
        <p className="text-xs text-pink-200/70 max-w-xs mx-auto mt-1">
          Ketuk foto untuk membalik dan membaca pesan rahasia di baliknya ✨
        </p>
      </div>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-2 gap-4">
        {polaroids.map((p) => {
          const isFlipped = flipped[p.id];
          const isLoved = loved[p.id];

          return (
            <div
              key={p.id}
              onClick={() => handleFlip(p.id)}
              className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${p.rotation} select-none`}
            >
              {/* Washi Tape / Sticker on Top */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-4 bg-pink-300/40 backdrop-blur-sm border border-white/20 rounded-sm shadow z-20 transform -rotate-1"></div>

              {/* Card Container */}
              <div className="rounded-xl bg-gradient-to-b from-gray-100 to-amber-50 p-3 pt-4 shadow-xl border border-white/30 text-gray-800 min-h-[250px] flex flex-col justify-between">
                {!isFlipped ? (
                  // Front Side
                  <>
                    <div className="relative rounded-lg overflow-hidden aspect-[4/4] bg-gray-900 border border-black/10">
                      <img
                        src={p.photo}
                        alt={p.frontCaption}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* Love button */}
                      <button
                        onClick={(e) => handleLove(e, p.id)}
                        className="absolute bottom-1.5 right-1.5 p-1 rounded-full bg-white/70 backdrop-blur-sm text-rose-500 hover:scale-110 active:scale-95 transition"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${
                            isLoved ? 'fill-rose-500 text-rose-500' : 'text-gray-600'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="mt-2 text-center">
                      <p className="text-xs font-serif font-bold text-gray-800 tracking-tight">
                        {p.frontCaption}
                      </p>
                      <div className="flex items-center justify-between text-[10px] text-gray-500 mt-1">
                        <span>{p.date}</span>
                        <span className="text-pink-600 font-medium flex items-center gap-0.5">
                          <RotateCw className="w-2.5 h-2.5" /> Balik
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  // Back Side (Secret Note)
                  <div className="h-full flex flex-col justify-between p-1 text-left">
                    <div>
                      <div className="flex items-center justify-between text-[10px] text-pink-600 font-semibold mb-2 pb-1 border-b border-pink-200">
                        <span>Pesan Rahasia Rizal 💌</span>
                        <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
                      </div>
                      <p className="text-[11px] leading-relaxed text-gray-700 italic font-serif">
                        "{p.secretNote}"
                      </p>
                    </div>

                    <div className="pt-2 text-center text-[10px] text-gray-400 border-t border-gray-200">
                      Ketuk untuk kembali
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

