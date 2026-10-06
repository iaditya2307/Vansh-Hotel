import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-slate-950/95 backdrop-blur-xl border-t border-amber-500/30 p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${HOTEL_INFO.primaryPhone}`}
          className="py-3 px-3 rounded-xl border border-amber-500/40 text-amber-300 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 bg-amber-950/40 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          Call Reception
        </a>

        <button
          onClick={onOpenBooking}
          className="py-3 px-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950" />
          Book WhatsApp
        </button>
      </div>
    </div>
  );
};
