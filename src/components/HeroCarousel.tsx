import React, { useState, useEffect, useRef } from 'react';
import { CAROUSEL_SLIDES } from '../data/hotelData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Crown, 
  MessageSquare, 
  Maximize2, 
  Pause, 
  Play,
  CheckCircle2
} from 'lucide-react';

interface HeroCarouselProps {
  onSelectRoom: (roomId?: string) => void;
  onOpenLightbox: (imageSrc: string, title: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onSelectRoom, onOpenLightbox }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Minimum swipe distance in px
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPlaying]);

  // Touch Swipe Handlers for Fast Mobile UX
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const currentSlide = CAROUSEL_SLIDES[currentIndex];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 pt-2 pb-12 lg:pb-16">
      {/* Background Royal Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-yellow-600/15 to-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Container */}
        <div 
          className="relative w-full rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-amber-950/40 bg-slate-900 group"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Main Slide Aspect Box */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden">
            {CAROUSEL_SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 pointer-events-none z-0'
                }`}
              >
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />

                {/* Dark Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 lg:p-14 z-20">
                  
                  {/* Top Badge & Controls */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 shadow-lg">
                      <Crown className="w-4 h-4 text-amber-400" />
                      <span className="text-xs uppercase tracking-widest font-semibold text-amber-300">
                        {slide.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenLightbox(slide.image, slide.title)}
                        className="p-2.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 hover:text-white hover:bg-amber-500/20 transition-all shadow-lg"
                        title="Zoom Image"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 hover:text-white hover:bg-amber-500/20 transition-all shadow-lg"
                        title={isPlaying ? "Pause Auto-play" : "Start Auto-play"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Slide Main Copy */}
                  <div className="max-w-2xl space-y-3 sm:space-y-4">
                    <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-widest uppercase">
                      <Sparkles className="w-3.5 h-3.5" />
                      Vansh Hotel Luxury Collection
                    </div>
                    <h1 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {slide.subtitle}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                      <button
                        onClick={() => onSelectRoom(slide.roomId)}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        {slide.ctaText}
                      </button>
                      
                      <a
                        href="#rooms"
                        className="px-5 py-3 rounded-xl bg-slate-950/70 hover:bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center gap-2"
                      >
                        View All Rooms
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Carousel Next / Prev Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all opacity-80 group-hover:opacity-100 shadow-xl"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all opacity-80 group-hover:opacity-100 shadow-xl"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Progress Timer Line */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-950/60 z-30">
              <div
                key={currentIndex}
                className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 transition-all duration-5000 ease-linear"
                style={{
                  width: '100%',
                  animation: 'carouselProgress 5s linear infinite'
                }}
              />
            </div>
          )}
        </div>

        {/* Thumbnail Navigation Bar for Instant Visual Access */}
        <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
          {CAROUSEL_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              className={`relative rounded-xl overflow-hidden border transition-all duration-300 aspect-[16/10] sm:aspect-[16/9] group ${
                idx === currentIndex
                  ? 'border-amber-400 ring-2 ring-amber-400/50 scale-[1.02] z-10 shadow-lg shadow-amber-500/20'
                  : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-amber-500/40'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-1 left-1 right-1 hidden sm:block">
                <span className="text-[10px] font-semibold text-white truncate block bg-slate-950/80 px-1.5 py-0.5 rounded text-center">
                  {slide.title}
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes carouselProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};
