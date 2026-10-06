import React, { useState, useEffect } from 'react';
import { Crown, Phone, MessageSquare, Menu, X, MapPin, Sparkles } from 'lucide-react';
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
    { name: 'Suites & Rooms', href: '#rooms' },
    { name: 'Photo Showcase', href: '#gallery' },
    { name: 'Royal Amenities', href: '#amenities' },
    { name: 'Location & Map', href: '#location' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 text-amber-200 text-xs py-2 px-4 border-b border-amber-500/20 text-center flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          Royal AC Rooms Available 24 Hours on Bharthana Road
        </span>
        <span className="hidden sm:inline text-amber-500/50">•</span>
        <a 
          href={`tel:${HOTEL_INFO.primaryPhone}`} 
          className="hidden sm:inline-flex items-center gap-1 hover:text-white transition-colors"
        >
          <Phone className="w-3 h-3 text-amber-400" />
          +91 {HOTEL_INFO.primaryPhone}
        </a>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-xl shadow-black/50'
            : 'bg-gradient-to-b from-slate-950/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-[1px] shadow-lg shadow-amber-600/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                <Crown className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-gold-gradient block leading-tight">
                VANSH HOTEL
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-medium block">
                Royal Suites • Bidhuna
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-slate-300 hover:text-amber-400 font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.primaryPhone}`}
              className="px-4 py-2 rounded-full border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              Call Reception
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Book
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-400 hover:bg-slate-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-[70px] right-0 bottom-0 w-[85%] max-w-sm bg-slate-950 border-l border-amber-500/30 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <Crown className="w-6 h-6 text-amber-400" />
                <div>
                  <span className="font-cinzel text-base font-bold text-gold-gradient block">
                    VANSH HOTEL
                  </span>
                  <span className="text-xs text-slate-400">Bharthana Road, Bidhuna</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm uppercase tracking-wider text-slate-200 hover:text-amber-400 font-medium py-2 border-b border-slate-900 flex items-center justify-between"
                  >
                    {link.name}
                    <span className="text-amber-500">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-900 space-y-3">
              <a
                href={`tel:${HOTEL_INFO.primaryPhone}`}
                className="w-full py-3 rounded-xl border border-amber-500/40 text-amber-300 text-center font-medium text-sm flex items-center justify-center gap-2 bg-amber-950/30"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call +91 {HOTEL_INFO.primaryPhone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Book via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
