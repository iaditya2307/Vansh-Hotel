import React, { useEffect, useState } from 'react';
import { CAROUSEL_SLIDES } from '../data/hotelData';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';

interface HeroCarouselProps {
  onSelectRoom: (roomId?: string) => void;
  onOpenLightbox: (imageSrc: string, title: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onSelectRoom, onOpenLightbox }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);

  useEffect(() => {
    const timer = window.setInterval(nextSlide, 7000);
    return () => window.clearInterval(timer);
  }, [currentIndex]);

  const slide = CAROUSEL_SLIDES[currentIndex];

  return (
    <section id="top" className="relative h-[100svh] min-h-[680px] bg-ink text-white overflow-hidden">
      {CAROUSEL_SLIDES.map((item, index) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onOpenLightbox(item.image, item.title)}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-label={`View ${item.title}`}
        >
          <img
            src={item.image}
            alt={item.title}
            className={`w-full h-full object-cover ${index === currentIndex ? 'ken-burns' : ''}`}
          />
        </button>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 sm:px-8 flex flex-col justify-end pb-44 sm:pb-32">
        <div className="max-w-3xl">
          <p className="text-[11px] sm:text-xs tracking-[0.32em] uppercase text-brass-bright mb-5">
            {slide.tag} · Bharthana Road
          </p>
          <h1 className="font-display text-[3.1rem] sm:text-7xl lg:text-[5.6rem] leading-[0.92] font-medium tracking-tight">
            {slide.title}
          </h1>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-white/80 font-light leading-relaxed">
            {slide.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectRoom(slide.roomId)}
              className="px-6 py-3.5 rounded-full bg-ivory text-ink text-sm tracking-[0.12em] uppercase hover:bg-brass-bright transition-colors"
            >
              Reserve this room
            </button>
            <a
              href="#rooms"
              className="px-6 py-3.5 rounded-full border border-white/35 text-white text-sm tracking-[0.12em] uppercase hover:bg-white/10 transition-colors"
            >
              View the stay
            </a>
          </div>
        </div>
      </div>

      <div className="absolute z-20 bottom-[5.25rem] sm:bottom-6 left-0 right-0 px-5 sm:px-8">
        <div className="max-w-[1400px] mx-auto flex items-end justify-between gap-4">
          <div className="hidden md:flex items-center gap-2">
            {CAROUSEL_SLIDES.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative h-14 w-20 overflow-hidden rounded-lg transition-all ${
                  index === currentIndex
                    ? 'ring-2 ring-brass-bright opacity-100'
                    : 'opacity-55 hover:opacity-100'
                }`}
                aria-label={item.title}
              >
                <img src={item.image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="flex md:hidden items-center gap-2">
            {CAROUSEL_SLIDES.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-brass-bright' : 'w-3 bg-white/40'
                }`}
                aria-label={item.title}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="font-display text-lg tabular-nums text-white/90">
              0{currentIndex + 1}
              <span className="text-white/40"> / 0{CAROUSEL_SLIDES.length}</span>
            </span>
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-ink transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-ink transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <a
        href="#welcome"
        className="absolute z-20 right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 text-[10px] tracking-[0.28em] uppercase text-white/70"
      >
        <span className="[writing-mode:vertical-rl]">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
};
