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
    <section className="relative w-full pt-4 pb-12 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Slider Container */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-900 group">
          
          {/* Aspect Ratio Box */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden">
            {CAROUSEL_SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 z-10'
                    : 'opacity-0 pointer-events-none z-0'
                }`}
              >
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />

                {/* Gentle Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/30 to-transparent" />

                {/* Content Layer */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 lg:p-12 z-20">
                  
                  {/* Top Bar: Badge & Image Lightbox */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-stone-900 text-xs font-semibold tracking-wide shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-amber-600" />
                      {slide.tag}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenLightbox(slide.image, slide.title)}
                        className="p-2.5 rounded-full bg-stone-950/70 text-stone-200 hover:bg-white hover:text-stone-900 transition-colors shadow-sm"
                        title="View Full Image"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2.5 rounded-full bg-stone-950/70 text-stone-200 hover:bg-white hover:text-stone-900 transition-colors shadow-sm"
                        title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Main Headlines */}
                  <div className="max-w-2xl space-y-3 sm:space-y-4">
                    <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-medium uppercase tracking-widest">
                      <MapPin className="w-3.5 h-3.5" />
                      Bidhuna, Auraiya
                    </div>
                    
                    <h1 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                      {slide.title}
                    </h1>
                    
                    <p className="text-sm sm:text-base text-stone-200 font-light leading-relaxed max-w-xl">
                      {slide.subtitle}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onSelectRoom(slide.roomId)}
                        className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md flex items-center gap-2 transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Book via WhatsApp
                      </button>
                      
                      <a
                        href="#rooms"
                        className="px-5 py-3 rounded-xl bg-white/90 hover:bg-white text-stone-900 font-semibold text-xs sm:text-sm tracking-wide transition-colors"
                      >
                        Explore Rooms
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Nav Arrow Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/80 hover:bg-white text-stone-900 transition-colors shadow-md"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/80 hover:bg-white text-stone-900 transition-colors shadow-md"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Thumbnail Strip */}
        <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
          {CAROUSEL_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-xl overflow-hidden border transition-all aspect-[16/10] ${
                idx === currentIndex
                  ? 'border-amber-700 ring-2 ring-amber-700/40 shadow-sm'
                  : 'border-stone-200 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
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
