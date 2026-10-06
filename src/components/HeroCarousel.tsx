import React, { useState, useEffect, useRef } from 'react';
import { CAROUSEL_SLIDES } from '../data/hotelData';
import { 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare, 
  Maximize2, 
  Pause, 
  Play,
  ShieldCheck,
  CheckCircle,
  MapPin
} from 'lucide-react';

interface HeroCarouselProps {
  onSelectRoom: (roomId?: string) => void;
  onOpenLightbox: (imageSrc: string, title: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onSelectRoom, onOpenLightbox }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPlaying]);

  const currentSlide = CAROUSEL_SLIDES[currentIndex];

  return (
    <section className="relative w-full pt-2 pb-10 bg-[#faf8f5]">
      <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Main Landscape Photo Carousel Container */}
        <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-900 group">
          
          {/* Full Landscape Aspect Ratio Viewport */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] xl:aspect-[2.35/1] w-full overflow-hidden">
            {CAROUSEL_SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 z-10'
                    : 'opacity-0 pointer-events-none z-0'
                }`}
              >
                {/* Razor-Sharp HD Landscape Image (No Blur) */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000"
                />

                {/* Crystal Clear Light Overlay (Only bottom gradient for legibility - No center blur or heavy darkness) */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-stone-950/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-transparent to-transparent" />

                {/* Content Overlay Layer */}
                <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8 lg:p-10 z-20">
                  
                  {/* Top Controls Bar: Tag Badge & Action Icons */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/80 backdrop-blur-md text-amber-300 border border-stone-700/60 text-xs font-semibold tracking-wide shadow-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {slide.tag}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenLightbox(slide.image, slide.title)}
                        className="p-2.5 rounded-full bg-stone-900/80 backdrop-blur-md text-stone-200 hover:bg-white hover:text-stone-900 transition-all border border-stone-700/60 shadow-md"
                        title="View Full Resolution Landscape Photo"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2.5 rounded-full bg-stone-900/80 backdrop-blur-md text-stone-200 hover:bg-white hover:text-stone-900 transition-all border border-stone-700/60 shadow-md"
                        title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Main Landscape Photo Information */}
                  <div className="max-w-2xl space-y-2 sm:space-y-3">
                    <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-semibold uppercase tracking-widest bg-stone-900/60 px-2.5 py-1 rounded-md backdrop-blur-xs w-fit">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      Vansh Hotel • Bharthana Road, Bidhuna
                    </div>
                    
                    <h1 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
                      {slide.title}
                    </h1>
                    
                    <p className="text-xs sm:text-sm lg:text-base text-stone-100 font-normal leading-relaxed max-w-xl drop-shadow-xs">
                      {slide.subtitle}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onSelectRoom(slide.roomId)}
                        className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg flex items-center gap-2 transition-all hover:scale-102"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Book Room via WhatsApp
                      </button>
                      
                      <a
                        href="#rooms"
                        className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white/90 hover:bg-white text-stone-900 font-bold text-xs sm:text-sm tracking-wide shadow-md transition-colors"
                      >
                        View All Rooms
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrow Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-stone-900/80 hover:bg-white text-white hover:text-stone-900 transition-all border border-stone-700/60 shadow-lg backdrop-blur-sm"
            aria-label="Previous landscape photo"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-stone-900/80 hover:bg-white text-white hover:text-stone-900 transition-all border border-stone-700/60 shadow-lg backdrop-blur-sm"
            aria-label="Next landscape photo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

        </div>

        {/* Crisp Full Landscape Photo Carousel Thumbnails */}
        <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
          {CAROUSEL_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-xl overflow-hidden border-2 transition-all aspect-[16/10] group ${
                idx === currentIndex
                  ? 'border-amber-600 ring-2 ring-amber-500/40 shadow-md scale-[1.02]'
                  : 'border-stone-300/80 opacity-75 hover:opacity-100 hover:border-amber-400'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              {idx !== currentIndex && (
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors" />
              )}
            </button>
          ))}
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-stone-900 block">24/7 Power Backup</span>
              <span className="text-[11px] text-stone-500">Uninterrupted stay</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-stone-900 block">Full Air Conditioning</span>
              <span className="text-[11px] text-stone-500">All rooms fully AC</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-stone-900 block">Instant WhatsApp</span>
              <span className="text-[11px] text-stone-500">Quick room inquiry</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-800">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-stone-900 block">Bharthana Road</span>
              <span className="text-[11px] text-stone-500">Prime location Bidhuna</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
