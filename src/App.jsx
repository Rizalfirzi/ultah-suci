import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import AudioController from './components/AudioController';
import HeaderHero from './components/HeaderHero';
import StoryTimeline from './components/StoryTimeline';
import SuciSpotlight from './components/SuciSpotlight';
import PolaroidWall from './components/PolaroidWall';
import GalleryFilter from './components/GalleryFilter';
import MemoryVideos from './components/MemoryVideos';
import BirthdayCake from './components/BirthdayCake';
import LoveReasonsModal from './components/LoveReasonsModal';
import HeartfeltDoa from './components/HeartfeltDoa';
import LoveLetter from './components/LoveLetter';
import WhatsAppReply from './components/WhatsAppReply';
import BottomNav from './components/BottomNav';
import { Heart } from 'lucide-react';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'timeline', 'gallery', 'cake', 'wishes'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#07040d] text-white flex justify-center selection:bg-pink-500 selection:text-white">
      {/* Welcome / Gift Box Unboxing Overlay */}
      {!hasStarted && <WelcomeScreen onStart={() => setHasStarted(true)} />}

      {/* Floating Audio BGM Player */}
      <AudioController />

      {/* Mobile-First Frame Container */}
      <main className="w-full max-w-md min-h-screen bg-gradient-to-b from-[#12081f] via-[#0d0617] to-[#090310] border-x border-pink-500/15 shadow-[0_0_50px_rgba(236,72,153,0.15)] relative pb-28 overflow-x-hidden">
        {/* Subtle Ambient Glow Blobs */}
        <div className="fixed top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

        {/* 1. Hero Banner & Day Counter */}
        <div id="hero">
          <HeaderHero onNavigate={scrollToSection} />
        </div>

        {/* 2. Interactive Chronological Journey (History Bareng Bareng) */}
        <StoryTimeline />

        {/* 3. Dedicated Spotlight to Suci Nur Fitri */}
        <SuciSpotlight />

        {/* 4. Interactive Polaroid Wall with Flip Notes */}
        <PolaroidWall />

        {/* 5. Memory Videos Section */}
        <MemoryVideos />

        {/* 6. Curated Photo Album & Lightbox */}
        <GalleryFilter />

        {/* 7. Interactive Birthday Cake & Make A Wish */}
        <BirthdayCake />

        {/* 8. 35+ Love Reasons Generator */}
        <LoveReasonsModal />

        {/* 9. Heartfelt Prayers & Islamic Wishes */}
        <HeartfeltDoa />

        {/* 10. Open Love Letter from Rizal */}
        <LoveLetter />

        {/* 11. WhatsApp Direct Reply Card */}
        <WhatsAppReply />

        {/* Sweet Footer Note */}
        <footer className="text-center py-6 px-4 border-t border-white/10 text-xs text-pink-300/70 space-y-1">
          <p className="flex items-center justify-center gap-1.5 font-medium">
            Dibuat dengan segenap cinta oleh <span className="text-pink-300 font-bold">Rizal</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          </p>
          <p className="text-[11px] text-gray-400">
            Khusus untuk bidadari tercantik: <span className="text-pink-200">Suci Nur Fitri</span>
          </p>
          <p className="text-[10px] text-gray-500 pt-2">
            © {new Date().getFullYear()} • Forever & Always Together
          </p>
        </footer>

        {/* Floating Bottom Navigation Bar */}
        <BottomNav activeSection={activeSection} onNavigate={scrollToSection} />
      </main>
    </div>
  );
}
