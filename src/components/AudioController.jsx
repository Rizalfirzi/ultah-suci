import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Disc3, Upload } from 'lucide-react';
import { romanticAudio } from '../utils/audioPlayer';

export default function AudioController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const unsubscribe = romanticAudio.subscribe((playing, vol) => {
      setIsPlaying(playing);
      setVolume(vol);
    });
    return unsubscribe;
  }, []);

  const handleToggle = () => {
    romanticAudio.toggle();
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    romanticAudio.setVolume(val);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      romanticAudio.loadCustomAudioFile(file);
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={handleToggle}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-md border transition-all duration-300 shadow-lg ${
            isPlaying
              ? 'bg-pink-900/60 border-pink-500/60 text-pink-200 shadow-pink-500/20'
              : 'bg-gray-900/60 border-white/20 text-gray-300 hover:border-pink-400'
          }`}
          title="Putar Musik Latar"
        >
          <Disc3
            className={`w-5 h-5 text-pink-400 ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '4s' }}
          />
          <span className="text-xs font-medium tracking-wide">
            {isPlaying ? 'Musik Menyala' : 'Putar Musik'}
          </span>
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-pink-300 animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 text-gray-400" />
          )}
        </button>

        {/* Small settings trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full bg-pink-600/80 hover:bg-pink-500 flex items-center justify-center text-white text-[10px] shadow"
          title="Pengaturan Musik / Ganti Lagu"
        >
          ♪
        </button>

        {/* Volume & Custom Audio Dropdown */}
        {isOpen && (
          <div className="absolute right-0 mt-3 w-64 p-4 rounded-2xl bg-gray-950/90 border border-pink-500/30 backdrop-blur-xl shadow-2xl text-white text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="font-semibold text-pink-300 flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5" /> Nada & Musik
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-gray-300 mb-1">
                <span>Volume</span>
                <span>{Math.round(volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full accent-pink-500 h-1.5 bg-gray-800 rounded-lg cursor-pointer"
              />
            </div>

            <div className="pt-1">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-2 px-3 rounded-xl bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/40 text-pink-200 flex items-center justify-center gap-2 transition"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Pilih Lagu Favorit Kalian</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <p className="text-[10px] text-gray-400 text-center mt-1">
                Bisa memutar lagu MP3 kesukaan kalian berdua
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

