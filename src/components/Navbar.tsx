import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Hotel } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  onOpenBooking: (roomId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Rooms & Pricing', href: '#rooms' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location', href: '#location' },
    { name: 'Guest Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-3">
        <span>✨ 24/7 Air-Conditioned Rooms & Power Backup on Bharthana Road, Bidhuna</span>
        <span className="hidden sm:inline text-stone-600">•</span>
        <a 
          href={`tel:${HOTEL_INFO.primaryPhone}`} 
          className="hidden sm:inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors"
        >
          <Phone className="w-3 h-3" />
          +91 {HOTEL_INFO.primaryPhone}
        </a>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf8f5]/95 backdrop-blur-md border-b border-stone-200 shadow-sm py-3'
            : 'bg-[#faf8f5]/80 backdrop-blur-sm border-b border-stone-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-amber-700 text-amber-50 flex items-center justify-center shadow-sm">
              <Hotel className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif-display text-xl font-bold tracking-tight text-stone-900 block leading-tight">
                Vansh Hotel
              </span>
              <span className="text-[11px] font-medium text-stone-500 block tracking-wider uppercase">
                Bidhuna • Auraiya
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-wider font-semibold text-stone-600 hover:text-amber-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.primaryPhone}`}
              className="px-4 py-2 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-100 font-medium text-xs tracking-wide flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-stone-500" />
              Call Reception
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wide shadow-sm flex items-center gap-2 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Booking
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#faf8f5] border-l border-stone-200 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2.5">
                  <Hotel className="w-6 h-6 text-amber-700" />
                  <span className="font-serif-display text-lg font-bold text-stone-900">
                    Vansh Hotel
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold text-stone-700 hover:text-amber-700 py-2 border-b border-stone-200/60 flex items-center justify-between"
                  >
                    {link.name}
                    <span className="text-stone-400">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-stone-200">
              <a
                href={`tel:${HOTEL_INFO.primaryPhone}`}
                className="w-full py-3 rounded-xl border border-stone-300 text-stone-800 text-center font-semibold text-sm flex items-center justify-center gap-2 bg-white"
              >
                <Phone className="w-4 h-4 text-stone-600" />
                Call +91 {HOTEL_INFO.primaryPhone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Reservation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
