import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import photosData from '../data/photosData.json';

export default function GalleryFilter() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const tabs = [
    { id: 'all', label: 'Semua Momen' },
    { id: '2023', label: 'Awal 2023' },
    { id: '2024', label: 'Kisah 2024' },
    { id: 'suci', label: 'Bidadariku' },
    { id: '2026', label: 'Tawa 2026' },
    { id: 'special', label: 'Photoshoot' }
  ];

  const filteredPhotos = activeTab === 'all'
    ? photosData.photos
    : photosData.photos.filter((p) => p.category === activeTab);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-8 px-4 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium mb-2">
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Album Abadi ({photosData.total} Foto)</span>
        </div>
        <h2 className="text-2xl font-bold text-white font-serif">
          Galeri Kenangan Kita
        </h2>
        <p className="text-xs text-pink-200/70 max-w-xs mx-auto mt-1">
          Kumpulan momen manis yang membuktikan indahnya kebersamaan kita.
        </p>
      </div>

      {/* Tabs Filter */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]'
                : 'bg-white/5 text-gray-300 border border-white/10 hover:border-pink-500/30'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-3 gap-2">
        {filteredPhotos.map((photo, idx) => (
          <div
            key={photo.id || idx}
            onClick={() => openLightbox(idx)}
            className="group relative rounded-xl overflow-hidden aspect-square bg-gray-900 border border-white/10 cursor-pointer active:scale-95 transition-all"
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Heart className="w-5 h-5 text-pink-400 fill-pink-400 drop-shadow" />
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/95 backdrop-blur-xl animate-fade-in select-none">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous button */}
          <button
            onClick={prevPhoto}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={nextPhoto}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-sm w-full text-center space-y-3">
            <div className="relative rounded-2xl overflow-hidden max-h-[65vh] bg-black border border-white/20 flex items-center justify-center shadow-2xl">
              <img
                src={filteredPhotos[lightboxIndex].url}
                alt={filteredPhotos[lightboxIndex].title}
                className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {/* Caption & Metadata */}
            <div className="bg-gray-900/80 border border-white/10 rounded-2xl p-3.5 backdrop-blur-md text-left">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="font-bold text-pink-400">
                  {filteredPhotos[lightboxIndex].tag || filteredPhotos[lightboxIndex].era}
                </span>
                <span className="text-gray-400">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white font-serif">
                {filteredPhotos[lightboxIndex].title}
              </h4>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed italic">
                "{filteredPhotos[lightboxIndex].caption}"
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

