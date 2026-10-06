import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Hotel, MapPin, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-700 text-amber-50 flex items-center justify-center">
                <Hotel className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif-display text-xl font-bold text-white block">
                  Vansh Hotel
                </span>
                <span className="text-[11px] font-medium text-stone-400 block tracking-wider uppercase">
                  Bidhuna, Auraiya, UP
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-md font-normal">
              Comfortable, clean air-conditioned stay with 24-hour generator backup, friendly desk service, and direct WhatsApp booking in Bidhuna.
            </p>

            <div className="flex items-center gap-3 pt-1 text-xs">
              <span className="px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-300 font-medium">
                24/7 Front Desk
              </span>
              <span className="px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-300 font-medium">
                Full AC Rooms
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif-display text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#rooms" className="hover:text-amber-400 transition-colors">Rooms & Suites</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">Photo Showcase</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-amber-400 transition-colors">Hotel Amenities</a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">Location & Map</a>
              </li>
              <li>
                <a href="#book" className="hover:text-amber-400 transition-colors">WhatsApp Reservation</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-serif-display text-sm font-bold text-white uppercase tracking-wider">
              Contact Reception
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Bharthana Road, Bidhuna, Auraiya, UP 206243</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${HOTEL_INFO.primaryPhone}`} className="hover:text-amber-400">
                  +91 {HOTEL_INFO.primaryPhone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${HOTEL_INFO.secondaryPhone}`} className="hover:text-amber-400">
                  +91 {HOTEL_INFO.secondaryPhone}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Vansh Hotel, Bidhuna. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-stone-800 hover:bg-stone-700 text-white transition-colors flex items-center gap-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
