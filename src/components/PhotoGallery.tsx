import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/hotelData';
import { Maximize2, Image as ImageIcon } from 'lucide-react';

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
    <section id="gallery" className="py-16 lg:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs uppercase tracking-widest font-semibold border border-stone-200">
            <ImageIcon className="w-3.5 h-3.5 text-stone-700" />
            Photo Showcase
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Explore <span className="text-amber-800">Our Hotel</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Take a visual tour of our guest rooms, reception desk, VIP lounge area, and hotel premises.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeFilter === filter
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70 border border-stone-200/60'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item.image, item.title)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 cursor-pointer aspect-[4/3] shadow-xs hover:shadow-md transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors" />

              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex justify-end">
                  <span className="p-2 rounded-lg bg-white/90 text-stone-900 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif-display text-base sm:text-lg font-bold text-white">
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
