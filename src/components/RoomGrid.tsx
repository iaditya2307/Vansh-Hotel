import React, { useState } from 'react';
import { ROOMS } from '../data/hotelData';
import { RoomCard } from './RoomCard';
import { Room } from '../types/hotel';
import { Sparkles, Crown } from 'lucide-react';

interface RoomGridProps {
  onBookRoom: (roomId: string) => void;
  onOpenRoomModal: (room: Room) => void;
}

export const RoomGrid: React.FC<RoomGridProps> = ({ onBookRoom, onOpenRoomModal }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Suites & Rooms' },
    { id: 'presidential', label: 'Presidential Gold' },
    { id: 'suite', label: 'Royal Suites' },
    { id: 'family', label: 'Family Double' },
    { id: 'deluxe', label: 'Deluxe AC' },
    { id: 'classic', label: 'Classic AC' },
  ];

  const filteredRooms = activeTab === 'all'
    ? ROOMS
    : ROOMS.filter(r => r.category === activeTab);

  return (
    <section id="rooms" className="py-16 lg:py-24 bg-slate-950 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs uppercase tracking-widest font-semibold">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            Opulent Accommodations
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Luxury <span className="text-gold-gradient">Suites & Rooms</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Every room at Vansh Hotel is equipped with 24-hour climate controlled air conditioning, custom ambient illumination, high speed internet, and round-the-clock room service.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-500/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onBookRoom={onBookRoom}
              onOpenRoomModal={onOpenRoomModal}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
