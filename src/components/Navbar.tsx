import React, { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  onOpenBooking: (roomId?: string) => void;
}

const navLinks = [
  { name: 'Stay', href: '#rooms' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Visit', href: '#location' },
  { name: 'Reviews', href: '#reviews' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const solid = scrolled || mobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          solid
            ? 'bg-paper/90 backdrop-blur-xl border-b border-line/80'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-[76px] flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3 min-w-0">
            <span
              className={`w-11 h-11 rounded-full flex items-center justify-center p-2 shrink-0 transition-colors ${
                solid ? 'bg-ink' : 'bg-white/10 backdrop-blur-md ring-1 ring-white/30'
              }`}
            >
              <img src="/logo-white.png" alt="" className="w-full h-full object-contain" />
            </span>
            <span className="min-w-0">
              <span
                className={`font-display text-[1.35rem] leading-none tracking-tight block ${
                  solid ? 'text-ink' : 'text-white'
                }`}
              >
                Vansh
              </span>
              <span
                className={`text-[10px] tracking-[0.28em] uppercase mt-1 block ${
                  solid ? 'text-brass' : 'text-white/75'
                }`}
              >
                Hotel · Bidhuna
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[13px] tracking-[0.16em] uppercase transition-colors ${
                  solid ? 'text-ink/70 hover:text-ink' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:+91${HOTEL_INFO.primaryPhone}`}
              className={`hidden md:inline-flex items-center gap-2 text-[13px] tracking-wide transition-colors ${
                solid ? 'text-ink/80 hover:text-ink' : 'text-white/85 hover:text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              {HOTEL_INFO.mobileDisplay}
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-full bg-brass text-white text-[13px] tracking-[0.14em] uppercase hover:bg-ink transition-colors"
            >
              Reserve
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={`lg:hidden w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
              solid ? 'text-ink hover:bg-ivory' : 'text-white hover:bg-white/10'
            }`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-ivory lg:hidden flex flex-col pt-[76px]">
          <nav className="flex-1 px-7 py-8 flex flex-col justify-center gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-5xl text-ink hover:text-brass transition-colors py-1"
              >
                <span className="text-brass text-sm tracking-[0.2em] mr-3 align-middle">
                  0{index + 1}
                </span>
                {link.name}
              </a>
            ))}
          </nav>
          <div className="px-7 pb-8 space-y-3 border-t border-line pt-6">
            <a
              href={`tel:+91${HOTEL_INFO.primaryPhone}`}
              className="flex items-center justify-between text-ink"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-brass">Call</span>
              <span className="font-display text-2xl">{HOTEL_INFO.mobileDisplay}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 rounded-full bg-ink text-ivory tracking-[0.16em] uppercase text-sm"
            >
              Reserve on WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
};
