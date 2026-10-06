import React, { useState } from 'react';
import { ROOMS } from '../data/hotelData';
import { RoomCard } from './RoomCard';
import { Room } from '../types/hotel';
import { BedDouble } from 'lucide-react';

interface RoomGridProps {
  onBookRoom: (roomId: string) => void;
  onOpenRoomModal: (room: Room) => void;
}

export const RoomGrid: React.FC<RoomGridProps> = ({ onBookRoom, onOpenRoomModal }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Accommodations' },
    { id: 'presidential', label: 'Presidential Suite' },
    { id: 'suite', label: 'Suites' },
    { id: 'family', label: 'Family Double' },
    { id: 'deluxe', label: 'Deluxe AC' },
    { id: 'classic', label: 'Classic AC' },
  ];

  const filteredRooms = activeTab === 'all'
    ? ROOMS
    : ROOMS.filter(r => r.category === activeTab);

  return (
    <section id="rooms" className="py-16 lg:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/60 text-stone-800 text-xs uppercase tracking-widest font-semibold">
            <BedDouble className="w-3.5 h-3.5 text-stone-700" />
            Rooms & Pricing
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Designed for <span className="text-amber-800">Your Comfort</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-normal">
            Every room at Vansh Hotel includes 24-hour air conditioning, power backup generator, attached bathroom, clean linens, and front desk assistance.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTab === tab.id
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50'
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
