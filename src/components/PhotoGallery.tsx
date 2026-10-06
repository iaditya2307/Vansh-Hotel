import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/hotelData';

interface PhotoGalleryProps {
  onOpenLightbox: (imageSrc: string, title: string) => void;
}

const filters = ['All', 'Rooms', 'Lobby', 'Exterior'];

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems =
    activeFilter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="scroll-mt-24 bg-ivory py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-brass">Gallery</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mt-4">Look inside.</h2>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-sm tracking-[0.12em] uppercase pb-1 border-b transition-colors ${
                  activeFilter === filter
                    ? 'border-ink text-ink'
                    : 'border-transparent text-ink/45 hover:text-ink'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredItems.map((item, index) => {
            const lead = activeFilter === 'All' && index === 0;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onOpenLightbox(item.image, item.title)}
                className={`group relative overflow-hidden rounded-[1.25rem] bg-ink text-left ${
                  lead ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[320px] lg:min-h-[560px]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-80" />
                <span className="absolute left-5 right-5 bottom-5">
                  <span className="block text-[10px] tracking-[0.24em] uppercase text-brass-bright">
                    {item.category}
                  </span>
                  <span className="font-display text-2xl text-white">{item.title}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
