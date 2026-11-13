import React, { useState } from 'react';
import { Calendar, Heart, Sparkles, MapPin, ChevronRight, X } from 'lucide-react';
import photosData from '../data/photosData.json';

export default function StoryTimeline() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const timelineItems = [
    {
      year: "2023",
      tag: "Awal Cerita",
      title: "Saat Semesta Mempertemukan Kita",
      subtitle: "Dari Orang Asing Menjadi Yang Paling Berharga",
      dateLabel: "Awal 2023",
      photo: "/photos/covers/cover_2023_awal.webp",
      shortText: "Masih ingatkah kamu saat pertama kali kita mulai banyak ngobrol? Dari sekadar sapaan malu-malu sampai akhirnya kita sadar kalau hari terasa hampa tanpa kabar darimu.",
      longStory: "Tahun 2023 menjadi tahun yang mengubah seluruh duniaku. Setiap pesan darimu selalu bikin aku tersenyum sendiri di depan layar. Masa-masa awal yang penuh rasa penasaran, rasa canggung yang manis, dan debaran jantung yang tak menentu setiap kali kamu menyebut namaku. Siapa sangka, wanita manis ini sekarang menjadi bidadari yang paling kucintai di dunia.",
      quote: "Dan di antara miliaran manusia di bumi, hatiku memilihmu tanpa pernah ragu.",
      photos: [
        "/photos/covers/cover_2023_awal.webp",
        "/photos/2023/lama_03.webp",
        "/photos/2023/lama_05.webp"
      ]
    },
    {
      year: "2023 - Lanjutan",
      tag: "Tawa Pertama",
      title: "Kencan & Senyum Yang Tak Terlupakan",
      subtitle: "Setiap Detik Bersamamu Terasa Begitu Berharga",
      dateLabel: "Pertengahan 2023",
      photo: "/photos/covers/cover_2023_kencan.webp",
      shortText: "Jalan bareng, ketawa bareng, makan hal-hal sederhana yang jadi terasa luar biasa mewah karena ada kamu di sampingku.",
      longStory: "Bukan tentang mewahnya tempat yang kita kunjungi, tapi tentang hangatnya tatapan matamu saat bercerita. Aku belajar banyak tentangmu: makanan kesukaanmu, caramu tertawa saat mendengar lelucon recehku, hingga kebiasaan manismu yang selalu bikin aku gemas. Bersamamu, hal yang paling sederhana pun berubah jadi kenangan abadi.",
      quote: "Bahagia itu sederhana: Cukup melihatmu tersenyum lepas di depanku.",
      photos: [
        "/photos/covers/cover_2023_kencan.webp",
        "/photos/2023/lama_09.webp",
        "/photos/2023/lama_12.webp"
      ]
    },
    {
      year: "2024",
      tag: "Makin Dekat",
      title: "Menenun Kenangan & Menguatkan Hati",
      subtitle: "Belajar Memahami, Menjaga, dan Bertahan",
      dateLabel: "Sepanjang 2024",
      photo: "/photos/covers/cover_2024.webp",
      shortText: "Hubungan kita bukan hanya tentang saat senang, tapi juga tentang bagaimana kita saling menggenggam saat ada badai kecil yang datang.",
      longStory: "Di tahun 2024, cinta kita semakin dewasa. Kita belajar saling mengalah, menurunkan ego, dan saling mendengarkan saat lelah. Terima kasih sudah selalu menjadi penyejuk saat kepalaku panas, dan menjadi pendengar setia saat duniaku terasa berat. Photoshoot kita bersama, tatapan penuh kasihmu, semuanya terukir rapi di dalam hatiku.",
      quote: "Terima kasih sudah memilih untuk terus bertahan dan saling memperjuangkan.",
      photos: [
        "/photos/covers/cover_2024.webp",
        "/photos/covers/cover_2024_romantic.webp",
        "/photos/2024/momen_04.webp"
      ]
    },
    {
      year: "2026",
      tag: "Cinta Matang",
      title: "Tawa Lepas & Kebahagiaan Tanpa Syarat",
      subtitle: "Bersamamu Adalah Tempat Paling Nyaman di Dunia",
      dateLabel: "Tahun 2026",
      photo: "/photos/covers/cover_2026.webp",
      shortText: "Tiga tahun lebih berlalu, tapi rasa kagum dan sayangku padamu selalu bertambah setiap kali matahari terbit.",
      longStory: "Melihatmu sekarang, aku selalu merasa takjub. Kamu semakin anggun, semakin dewasa, dan senyummu tetap menjadi hal paling menyejukkan yang pernah kulihat. Momen-momen kencan kita di 2026, canda tawa di perjalanan, hingga foto-foto manis kita berdua, membuktikan bahwa cinta kita bukan sekadar rasa sesaat, melainkan komitmen tulus yang akan kujaga seumur hidupku.",
      quote: "Tiga tahun bersamamu hanyalah awal dari selamanya yang ingin kuisi denganmu.",
      photos: [
        "/photos/covers/cover_2026.webp",
        "/photos/covers/cover_2026_smile.webp",
        "/photos/special/dslr_05.webp"
      ]
    },
    {
      year: "Masa Depan",
      tag: "Janji Suci",
      title: "Menuju Pelaminan & Surga Bersamamu",
      subtitle: "Membangun Masa Depan Berdua",
      dateLabel: "Selamanya",
      photo: "/photos/covers/cover_future.webp",
      shortText: "Puncak dari semua perjalanan ini adalah keinginanku untuk menjadikanmu pendamping hidupku yang sah di hadapan Allah dan manusia.",
      longStory: "Aku tidak hanya mencintai siapa dirimu di masa lalu atau masa kini, tapi aku ingin mencintaimu di setiap uban yang nanti tumbuh di rambutmu, di setiap kerutan yang akan menghiasi sudut matamu karena terlalu sering tersenyum bahagia. Semoga Allah meridhoi niat tulusku untuk membimbingmu dan melangkah bersama menuju surga-Nya.",
      quote: "Bismillah, semoga Allah persatukan kita dalam ikatan suci pernikahan kelak. Aamiin.",
      photos: [
        "/photos/covers/cover_future.webp",
        "/photos/special/dslr_05.webp",
        "/photos/suci/suci_05.webp"
      ]
    }
  ];

  return (
    <section id="timeline" className="py-8 px-4 max-w-md mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-medium mb-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>Timeline Kisah Kita</span>
        </div>
        <h2 className="text-2xl font-bold text-white font-serif">
          Jejak Langkah Bersamamu
        </h2>
        <p className="text-xs text-pink-200/70 mt-1 max-w-xs mx-auto">
          Setiap tahun yang kita lalui adalah untaian doa dan kenangan manis yang tak tergantikan.
        </p>
      </div>

      {/* Timeline Journey Track */}
      <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-pink-500 before:via-purple-500 before:to-rose-500">
        {timelineItems.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Point */}
            <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 border-2 border-gray-950 shadow-[0_0_10px_rgba(244,114,182,0.8)] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
            </div>

            {/* Timeline Card */}
            <div
              onClick={() => setSelectedMilestone(item)}
              className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-pink-500/40 p-3.5 backdrop-blur-md shadow-lg transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              {/* Card Meta */}
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded-md bg-pink-500/20 text-pink-300 text-[10px] font-bold tracking-wide uppercase border border-pink-500/30">
                  {item.year}
                </span>
                <span className="text-[11px] text-pink-200/60 font-light flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-pink-400" />
                  {item.tag}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-base font-bold text-white font-serif leading-snug">
                {item.title}
              </h3>
              <p className="text-[11px] text-pink-200/80 italic mb-3">
                "{item.subtitle}"
              </p>

              {/* Thumbnail Image */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-3 bg-gray-900 border border-white/10">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 text-left">
                  <p className="text-[10px] text-white/90 line-clamp-1 italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs text-gray-300 leading-relaxed line-clamp-3 mb-2">
                {item.shortText}
              </p>

              {/* Read More Trigger */}
              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-pink-400 font-medium">
                <span>Baca kisah lengkap & foto</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedMilestone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-sm w-full bg-gray-950 border border-pink-500/40 rounded-3xl p-5 shadow-2xl max-h-[85vh] overflow-y-auto space-y-4">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMilestone(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5" />
              <span>{selectedMilestone.dateLabel} ({selectedMilestone.year})</span>
            </div>

            <h3 className="text-xl font-bold text-white font-serif">
              {selectedMilestone.title}
            </h3>

            {/* Photo Gallery inside Modal */}
            <div className="space-y-2">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900 border border-white/10">
                <img
                  src={selectedMilestone.photo}
                  alt={selectedMilestone.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {selectedMilestone.photos.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {selectedMilestone.photos.map((p, i) => (
                    <div key={i} className="rounded-xl overflow-hidden aspect-square bg-gray-900 border border-white/10">
                      <img src={p} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Full Story text */}
            <div className="bg-pink-950/20 rounded-2xl p-4 border border-pink-500/20">
              <p className="text-xs text-pink-100 leading-relaxed font-light">
                {selectedMilestone.longStory}
              </p>
            </div>

            {/* Quote */}
            <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
              <Heart className="w-4 h-4 text-pink-400 mx-auto mb-1 fill-pink-400" />
              <p className="text-xs italic text-pink-200">
                "{selectedMilestone.quote}"
              </p>
            </div>

            <button
              onClick={() => setSelectedMilestone(null)}
              className="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-medium text-xs shadow-lg"
            >
              Tutup Kisah
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

