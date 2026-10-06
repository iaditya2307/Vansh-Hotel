import React from 'react';
import { Room } from '../types/hotel';
import { 
  Users, 
  Bed, 
  Check, 
  MessageSquare, 
  Eye, 
  Maximize2
} from 'lucide-react';

interface RoomCardProps {
  room: Room;
  onBookRoom: (roomId: string) => void;
  onOpenRoomModal: (room: Room) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onBookRoom, onOpenRoomModal }) => {
  return (
    <div className="card-clean overflow-hidden flex flex-col justify-between">
      
      {/* Room Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover object-center"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {room.isFeatured && (
            <span className="px-3 py-1 rounded-full bg-stone-900 text-white font-semibold text-[11px] uppercase tracking-wider shadow-sm">
              Popular Choice
            </span>
          )}
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-stone-800 text-[11px] font-semibold uppercase tracking-wider shadow-sm border border-stone-200/80">
            {room.category}
          </span>
        </div>

        {/* Gallery Photos Count */}
        <button
          onClick={() => onOpenRoomModal(room)}
          className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-stone-900/80 text-white hover:bg-stone-900 text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{room.gallery.length} Photos</span>
        </button>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          {/* Quick Specs */}
          <div className="flex items-center gap-3 text-xs text-stone-500 font-medium">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-stone-700" />
              {room.capacity}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Bed className="w-3.5 h-3.5 text-stone-700" />
              {room.bedType}
            </span>
            <span>•</span>
            <span>{room.size}</span>
          </div>

          <h3 className="font-serif-display text-xl font-bold text-stone-900">
            {room.name}
          </h3>

          <p className="text-xs text-stone-600 leading-relaxed font-normal">
            {room.tagline}
          </p>

          {/* Key Highlights */}
          <ul className="space-y-1.5 pt-1">
            {room.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                <Check className="w-3.5 h-3.5 text-amber-700 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & Booking CTA */}
        <div className="pt-4 border-t border-stone-200 space-y-4">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[11px] text-stone-500 block font-medium">Nightly Rate</span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif-display text-2xl font-bold text-stone-900">
                  ₹{room.price.toLocaleString('en-IN')}
                </span>
                {room.originalPrice && (
                  <span className="text-xs text-stone-400 line-through">
                    ₹{room.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs text-stone-500">/ night</span>
              </div>
            </div>
            <span className="text-[11px] text-emerald-700 font-semibold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
              AC Included
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenRoomModal(room)}
              className="w-full py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 font-semibold text-xs tracking-wide transition-colors flex items-center justify-center gap-1.5"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              Details
            </button>
            <button
              onClick={() => onBookRoom(room.id)}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wide transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Book Now
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
