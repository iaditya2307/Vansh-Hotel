import React, { useEffect, useState } from 'react';
import { HOTEL_INFO, whatsappLink } from '../data/hotelData';
import { Phone, MessageCircle } from 'lucide-react';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenBooking }) => {
  const [overHero, setOverHero] = useState(true);
  const chat = whatsappLink('Hello, I would like to enquire about a room at Vansh Hotel.');

  useEffect(() => {
    const onScroll = () => setOverHero(window.scrollY < window.innerHeight - 120);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-paper/95 backdrop-blur-md border-t border-line px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:+91${HOTEL_INFO.primaryPhone}`}
            className="py-3 rounded-full border border-line text-sm tracking-[0.12em] uppercase flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
          <button
            onClick={onOpenBooking}
            className="py-3 rounded-full bg-moss text-white text-sm tracking-[0.12em] uppercase flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </button>
        </div>
      </div>

      <a
        href={chat}
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden sm:flex fixed right-6 z-40 items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-moss text-white shadow-lg shadow-ink/20 hover:bg-ink transition-all ${
          overHero ? 'bottom-24' : 'bottom-6'
        }`}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm tracking-[0.12em] uppercase">WhatsApp</span>
      </a>
    </>
  );
};
