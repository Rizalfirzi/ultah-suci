// Web Audio API Ambient Romantic Melodic Synthesizer + Custom Audio Support

class RomanticAudioService {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.volume = 0.6;
    this.timer = null;
    this.step = 0;
    this.audioElement = null;
    this.useCustomAudio = false;
    this.listeners = new Set();
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    
    // Check if user has put custom audio in /audio/lagu.mp3
    if (!this.audioElement && typeof window !== 'undefined') {
      const audio = new Audio('/audio/lagu.mp3');
      audio.loop = true;
      audio.volume = this.volume;
      this.audioElement = audio;
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    for (const l of this.listeners) {
      l(this.isPlaying, this.volume);
    }
  }

  // Romantic chord progression in Hertz:
  // Cmaj7 -> Am9 -> Fmaj7 -> Gsus4 -> C
  getRomanticNotes() {
    return [
      // Fmaj7
      [174.61, 220.00, 261.63, 329.63, 440.00], // F3, A3, C4, E4, A4
      // Em7
      [164.81, 196.00, 246.94, 293.66, 392.00], // E3, G3, B3, D4, G4
      // Dm7
      [146.83, 174.61, 220.00, 261.63, 349.23], // D3, F3, A3, C4, F4
      // Cmaj7
      [130.81, 164.81, 196.00, 246.94, 329.63], // C3, E3, G3, B3, E4
      // Am9
      [110.00, 164.81, 220.00, 246.94, 329.63], // A2, E3, A3, B3, E4
      // Gsus4 -> G
      [196.00, 261.63, 293.66, 392.00, 523.25]  // G3, C4, D4, G4, C5
    ];
  }

  playChord(frequencies) {
    if (!this.ctx || this.ctx.state === 'suspended') return;

    const now = this.ctx.currentTime;
    
    // Play each note with warm acoustic bell/piano timbre
    frequencies.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Soft triangle + sine warm tone
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Stagger slightly for acoustic arpeggio strum feel
      const noteDelay = idx * 0.08;
      const startTime = now + noteDelay;

      // Soft envelope
      const peak = (this.volume * 0.12) / (idx === 0 ? 1 : 1.3);
      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(peak, startTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 3.8);

      // Warm low pass filter
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(900 + idx * 250, startTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 4.0);
    });
  }

  startSynthLoop() {
    if (this.timer) clearInterval(this.timer);
    
    const chords = this.getRomanticNotes();
    this.playChord(chords[this.step % chords.length]);
    this.step++;

    this.timer = setInterval(() => {
      if (!this.isPlaying) return;
      const chords = this.getRomanticNotes();
      this.playChord(chords[this.step % chords.length]);
      this.step++;
    }, 3800);
  }

  async play() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    this.isPlaying = true;

    // Check if custom audio can be played
    if (this.audioElement && this.audioElement.src) {
      this.audioElement.play().then(() => {
        this.useCustomAudio = true;
      }).catch(() => {
        // Fallback to soothing built-in melodic synth
        this.useCustomAudio = false;
        this.startSynthLoop();
      });
    } else {
      this.startSynthLoop();
    }

    this.notify();
  }

  pause() {
    this.isPlaying = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.notify();
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
    this.notify();
  }

  loadCustomAudioFile(file) {
    const url = URL.createObjectURL(file);
    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.loop = true;
    }
    this.audioElement.src = url;
    this.audioElement.volume = this.volume;
    if (this.isPlaying) {
      if (this.timer) clearInterval(this.timer);
      this.audioElement.play();
      this.useCustomAudio = true;
    }
  }
}

export const romanticAudio = new RomanticAudioService();

