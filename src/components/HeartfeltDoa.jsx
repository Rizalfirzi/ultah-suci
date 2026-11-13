import React from 'react';
import { Sparkles, Heart, Sun, Shield, Coins, Flame } from 'lucide-react';
import { birthdayWishes } from '../data/wishes';

const iconMap = {
  Sparkles: Sparkles,
  Heart: Heart,
  Sun: Sun,
  Coins: Coins,
  Shield: Shield,
  Flame: Flame
};

export default function HeartfeltDoa() {
  return (
    <section id="wishes" className="py-8 px-4 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-medium mb-2">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>Doa Tulus Untuk {birthdayWishes.name}</span>
        </div>
        <h2 className="text-2xl font-bold text-white font-serif">
          Untaian Doa & Harapan
        </h2>
        <p className="text-xs text-pink-200/70 max-w-xs mx-auto mt-1 leading-relaxed">
          {birthdayWishes.intro}
        </p>
      </div>

      {/* Prayers List */}
      <div className="space-y-4">
        {birthdayWishes.prayers.map((prayer, idx) => {
          const IconComp = iconMap[prayer.icon] || Heart;

          return (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-pink-500/20 hover:border-pink-500/40 p-4 backdrop-blur-md shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center flex-shrink-0 text-white shadow-md">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-serif">
                    {prayer.title}
                  </h3>
                  {prayer.latin && (
                    <p className="text-[10px] text-pink-300 font-mono italic">
                      "{prayer.latin}"
                    </p>
                  )}
                </div>
              </div>

              {prayer.arabic && (
                <div className="my-2.5 p-2 rounded-xl bg-pink-950/40 border border-pink-500/30 text-center">
                  <p className="text-base font-serif text-pink-200 tracking-wider">
                    {prayer.arabic}
                  </p>
                  {prayer.meaning && (
                    <p className="text-[10px] text-gray-300 italic mt-1">
                      Artinya: "{prayer.meaning}"
                    </p>
                  )}
                </div>
              )}

              <p className="text-xs text-pink-100/90 leading-relaxed font-light text-justify">
                {prayer.content}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

