import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MessageSquare } from 'lucide-react';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 p-3 shadow-lg">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${HOTEL_INFO.primaryPhone}`}
          className="py-3 px-3 rounded-xl border border-stone-300 text-stone-800 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 bg-stone-50"
        >
          <Phone className="w-4 h-4 text-stone-600" />
          Call Desk
        </a>

        <button
          onClick={onOpenBooking}
          className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          WhatsApp Book
        </button>
      </div>
    </div>
  );
};
