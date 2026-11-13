import React, { useState } from 'react';
import { Film, Play, Pause, Sparkles } from 'lucide-react';

export default function MemoryVideos() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    {
      id: 'v1',
      title: 'Tawa Manis Ayang',
      era: 'Mei 2026',
      src: '/videos/video_wa_2026.mp4',
      desc: 'Senyum dan tingkah lucumu yang selalu bikin hari-hariku penuh warna.'
    },
    {
      id: 'v2',
      title: 'Momen Spesial Kita',
      era: 'November 2024',
      src: '/videos/video_edit_2024.mp4',
      desc: 'Kompilasi kenangan indah yang membuktikan betapa hangatnya kebersamaan kita.'
    },
    {
      id: 'v3',
      title: 'Awal Tahun Penuh Cinta',
      era: 'Januari 2025',
      src: '/videos/video_momen_2025.mp4',
      desc: 'Melangkah ke lembaran baru selalu terasa tenang karena ada kamu di sisiku.'
    },
    {
      id: 'v4',
      title: 'Detik-Detik Berharga',
      era: 'Maret 2026',
      src: '/videos/video_iphone_2026.mov',
      desc: 'Setiap detik bersamamu adalah rekaman terindah yang tak ternilai.'
    }
  ];

  return (
    <section className="py-8 px-4 max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium mb-2">
          <Film className="w-3.5 h-3.5" />
          <span>Video Kenangan Nyata</span>
        </div>
        <h2 className="text-2xl font-bold text-white font-serif">
          Rekaman Momen Indah
        </h2>
        <p className="text-xs text-pink-200/70 max-w-xs mx-auto mt-1">
          Bukan cuma foto, suara dan tawamu di video ini selalu terasa begitu hidup dan nyata.
        </p>
      </div>

      {/* Video Cards List */}
      <div className="space-y-4">
        {videos.map((vid) => (
          <div
            key={vid.id}
            className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-pink-500/30 p-3.5 backdrop-blur-md shadow-xl"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-pink-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                {vid.title}
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-200 border border-pink-500/30">
                {vid.era}
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden bg-black aspect-video border border-white/10 shadow-inner">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
                onPlay={() => setPlayingVideo(vid.id)}
                onPause={() => setPlayingVideo(null)}
              >
                <source src={vid.src} type="video/mp4" />
                <source src={vid.src} type="video/quicktime" />
                Browser Anda belum mendukung pemutaran video ini.
              </video>
            </div>

            <p className="text-[11px] text-gray-300 mt-2 italic text-center">
              "{vid.desc}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
