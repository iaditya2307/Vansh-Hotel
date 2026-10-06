import React, { useState } from 'react';
import { ROOMS } from '../data/hotelData';
import { RoomCard } from './RoomCard';
import { Room } from '../types/hotel';

interface RoomGridProps {
  onBookRoom: (roomId: string) => void;
  onOpenRoomModal: (room: Room) => void;
}

const categories = [
  { id: 'all', label: 'All rooms' },
  { id: 'double', label: '₹2,500' },
  { id: 'attached', label: '₹1,500' },
  { id: 'standard', label: '₹1,000' },
];

export const RoomGrid: React.FC<RoomGridProps> = ({ onBookRoom, onOpenRoomModal }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredRooms = activeTab === 'all' ? ROOMS : ROOMS.filter((room) => room.category === activeTab);

  return (
    <section id="rooms" className="scroll-mt-24 bg-paper py-20 lg:py-28 border-t border-line">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div className="max-w-xl">
            <p className="text-[11px] tracking-[0.32em] uppercase text-brass">The rooms</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] mt-4">
              Three nightly rates.
            </h2>
          </div>
          <p className="max-w-sm text-ink/65 leading-relaxed">
            ₹2,500 is a double bed with AC and an attached bathroom. ₹1,500 is AC with an attached bathroom. ₹1,000 is AC, and the bathroom is not attached.
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm transition-colors ${
                activeTab === tab.id
                  ? 'bg-ink text-ivory'
                  : 'bg-ivory text-ink/70 hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filteredRooms.map((room, index) => (
            <div key={room.id} className={index === 0 && activeTab === 'all' ? 'lg:col-span-2' : ''}>
              <RoomCard
                room={room}
                featured={index === 0 && activeTab === 'all'}
                onBookRoom={onBookRoom}
                onOpenRoomModal={onOpenRoomModal}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
