import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Crown, MapPin, Phone, MessageSquare, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-amber-500/20 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold text-gold-gradient block">
                  VANSH HOTEL
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
                  Royal Suites & Accommodations
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md font-light">
              Experience grand luxury, 24-hour air conditioned stay, and royal hospitality at Vansh Plaza on Bharthana Road, Bidhuna, Auraiya.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 font-medium">
                Open 24 Hours
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 font-medium">
                AC Rooms
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#rooms" className="hover:text-amber-400 transition-colors">Presidential & Royal Suites</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">Photo Showcase</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-amber-400 transition-colors">Amenities & Facilities</a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">Google Map & Location</a>
              </li>
              <li>
                <a href="#book" className="hover:text-amber-400 transition-colors">WhatsApp Reservation</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Contact Reception
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Bharthana Road, Bidhuna, Auraiya, UP 206243</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${HOTEL_INFO.primaryPhone}`} className="hover:text-amber-400">
                  +91 {HOTEL_INFO.primaryPhone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${HOTEL_INFO.secondaryPhone}`} className="hover:text-amber-400">
                  +91 {HOTEL_INFO.secondaryPhone}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Vansh Hotel & Royal Suites, Bidhuna. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all shadow-lg flex items-center gap-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
