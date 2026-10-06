import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/hotelData';
import { Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';

interface PhotoGalleryProps {
  onOpenLightbox: (imageSrc: string, title: string) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Suites', 'Rooms', 'Family', 'Lobby', 'Exterior'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-slate-900/60 relative border-t border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-widest font-semibold">
            <ImageIcon className="w-3.5 h-3.5" />
            Visual Tour
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Hotel & Suite <span className="text-gold-gradient">Gallery</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Take a visual walkthrough of our luxury rooms, 3D relief feature walls, ambient LED ceilings, royal reception desk, and guest lounge.
          </p>
        </div>

        {/* Gallery Filter Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item.image, item.title)}
              className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-amber-500/20 cursor-pointer aspect-[4/3] shadow-lg hover:shadow-2xl hover:border-amber-400/60 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
