import React from 'react';
import { Home, Calendar, Image as ImageIcon, Flame, Mail } from 'lucide-react';

export default function BottomNav({ activeSection, onNavigate }) {
  const navItems = [
    { id: 'hero', label: 'Beranda', icon: Home },
    { id: 'timeline', label: 'Kisah', icon: Calendar },
    { id: 'gallery', label: 'Galeri', icon: ImageIcon },
    { id: 'cake', label: 'Lilin', icon: Flame },
    { id: 'wishes', label: 'Doa', icon: Mail }
  ];

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 max-w-sm w-[92%]">
      <div className="rounded-full bg-gray-950/80 border border-pink-500/30 backdrop-blur-xl px-3 py-2 shadow-2xl flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-full transition-all duration-200 select-none ${
                isActive
                  ? 'text-pink-300 font-bold scale-110'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon
                className={`w-4 h-4 ${
                  isActive ? 'text-pink-400 fill-pink-400/20' : ''
                }`}
              />
              <span className="text-[9px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

