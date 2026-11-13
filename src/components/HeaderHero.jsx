import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Clock, Calendar, ChevronDown } from 'lucide-react';

export default function HeaderHero({ onNavigate }) {
  // Relationship start date: around February 26, 2023 (first milestone in files)
  const startDate = new Date('2023-02-26T00:00:00');
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeTogether({ days, hours, minutes, seconds });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative pt-12 pb-8 px-4 text-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-pink-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-medium mb-4 shadow-[0_0_15px_rgba(244,114,182,0.2)]">
        <Sparkles className="w-3.5 h-3.5 text-pink-400" />
        <span>Hari Terindah untuk Wanita Terindah</span>
        <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
      </div>

      {/* Main Title */}
      <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-pink-200/80 mb-2">
        Happy Birthday My Love
      </h2>
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-pink-200 via-rose-300 to-pink-100 bg-clip-text text-transparent font-serif mb-3">
        Suci Nur Fitri
      </h1>

      <p className="text-xs text-pink-100/75 max-w-sm mx-auto leading-relaxed mb-6 font-light">
        "Di setiap detik waktu yang berputar, namamu adalah doa yang tak pernah lelah kulangitkan, dan senyummu adalah rumah tempat bahagiaku berlabuh."
      </p>

      {/* Hero Featured Photo Card */}
      <div className="relative mx-auto max-w-[280px] mb-8">
        <div className="relative rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-pink-400/50 via-rose-500/30 to-purple-500/50 shadow-[0_15px_35px_rgba(236,72,153,0.3)] animate-romantic-float">
          <div className="relative rounded-[22px] overflow-hidden bg-gray-900 aspect-[4/5]">
            <img
              src="/photos/suci/suci_01.webp"
              alt="Suci Nur Fitri"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-3 left-3 right-3 text-left">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-pink-300 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-pink-400/30">
                Bidadari Tercantik
              </span>
              <p className="text-xs font-medium text-white mt-1 drop-shadow">
                Mencintaimu adalah anugerah terindah ❤️
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Floating Hearts */}
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-pink-500/80 flex items-center justify-center text-white shadow-lg animate-bounce">
          <Heart className="w-4 h-4 fill-white" />
        </div>
      </div>

      {/* Relationship Days Counter */}
      <div className="mx-auto max-w-sm rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-pink-500/25 p-4 backdrop-blur-xl shadow-xl mb-6">
        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-pink-300 mb-2">
          <Clock className="w-3.5 h-3.5 text-pink-400" />
          <span>Waktu Indah Kita Bersama</span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="bg-pink-950/40 rounded-xl p-2 border border-pink-500/20">
            <span className="block text-xl font-bold text-pink-200 font-mono">
              {timeTogether.days}
            </span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Hari</span>
          </div>
          <div className="bg-pink-950/40 rounded-xl p-2 border border-pink-500/20">
            <span className="block text-xl font-bold text-pink-200 font-mono">
              {timeTogether.hours}
            </span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Jam</span>
          </div>
          <div className="bg-pink-950/40 rounded-xl p-2 border border-pink-500/20">
            <span className="block text-xl font-bold text-pink-200 font-mono">
              {timeTogether.minutes}
            </span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Menit</span>
          </div>
          <div className="bg-pink-950/40 rounded-xl p-2 border border-pink-500/20">
            <span className="block text-xl font-bold text-pink-300 font-mono">
              {timeTogether.seconds}
            </span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Detik</span>
          </div>
        </div>

        <p className="text-[11px] text-pink-200/70 mt-2.5">
          Dan setiap detiknya selalu membuatku makin jatuh cinta padamu...
        </p>
      </div>

      {/* Quick Jump Buttons */}
      <div className="flex flex-wrap justify-center gap-2 max-w-xs mx-auto">
        <button
          onClick={() => onNavigate('timeline')}
          className="text-xs px-3.5 py-1.5 rounded-full bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/40 text-pink-200 transition"
        >
          ⏳ Kisah Kita
        </button>
        <button
          onClick={() => onNavigate('cake')}
          className="text-xs px-3.5 py-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-200 transition"
        >
          🎂 Tiup Lilin
        </button>
        <button
          onClick={() => onNavigate('wishes')}
          className="text-xs px-3.5 py-1.5 rounded-full bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-200 transition"
        >
          💌 Doa & Surat
        </button>
      </div>
    </header>
  );
}

