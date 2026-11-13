import React, { useState } from 'react';
import { MessageCircle, Heart, Send, Check } from 'lucide-react';

export default function WhatsAppReply() {
  const [copied, setCopied] = useState(false);
  const [customMsg, setCustomMsg] = useState(
    "Makasih banyak ya sayangku Rizal... Aku terharu banget liat perjalanan kita dari 2023 sampai sekarang. Doa-doanya bikin nangis bahagia. I love you so much sayang! ❤️🎂"
  );

  const handleSendWA = () => {
    const encoded = encodeURIComponent(customMsg);
    // Opens WhatsApp share dialog or chat
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(customMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-8 px-4 max-w-md mx-auto">
      <div className="rounded-3xl bg-gradient-to-br from-emerald-950/40 via-gray-950 to-pink-950/40 border border-emerald-500/30 p-5 backdrop-blur-xl shadow-2xl text-center space-y-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>Kirim Balasan Cinta</span>
        </div>

        <h3 className="text-xl font-bold text-white font-serif">
          Peluk & Balas Pesan ke Rizal
        </h3>

        <p className="text-xs text-gray-300 leading-relaxed font-light">
          Punya kata-kata balasan untuk Rizal setelah melihat kejutan ini? Kirim langsung lewat WhatsApp!
        </p>

        {/* Message Box */}
        <div className="relative">
          <textarea
            value={customMsg}
            onChange={(e) => setCustomMsg(e.target.value)}
            rows={3}
            className="w-full rounded-2xl bg-black/40 border border-emerald-500/30 p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 resize-none font-sans"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleSendWA}
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold text-xs shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Kirim ke WhatsApp</span>
          </button>

          <button
            onClick={handleCopy}
            className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition flex items-center justify-center gap-1.5"
            title="Salin Teks"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px]">Tersalin</span>
              </>
            ) : (
              <span className="text-[10px]">Salin</span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

