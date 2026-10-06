import React from 'react';
import { Room } from '../types/hotel';
import { 
  Users, 
  Bed, 
  Sparkles, 
  Check, 
  MessageSquare, 
  Eye, 
  Maximize2,
  Crown
} from 'lucide-react';

interface RoomCardProps {
  room: Room;
  onBookRoom: (roomId: string) => void;
  onOpenRoomModal: (room: Room) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onBookRoom, onOpenRoomModal }) => {
  return (
    <div className="group relative rounded-3xl bg-slate-900/80 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-amber-950/40">
      
      {/* Top Image Box */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />

        {/* Top Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {room.isFeatured && (
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-1">
              <Crown className="w-3 h-3" />
              Royal Choice
            </span>
          )}
          <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-[11px] font-semibold uppercase tracking-wider">
            {room.category}
          </span>
        </div>

        {/* Gallery Count Badge */}
        <button
          onClick={() => onOpenRoomModal(room)}
          className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-slate-200 hover:text-amber-400 text-xs font-medium flex items-center gap-1.5 transition-colors"
        >
          <Eye className="w-3.5 h-3.5 text-amber-400" />
          <span>{room.gallery.length} Photos</span>
        </button>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          {/* Quick Specs */}
          <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-amber-400" />
              {room.capacity}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Bed className="w-3.5 h-3.5 text-amber-400" />
              {room.bedType}
            </span>
          </div>

          <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
            {room.name}
          </h3>

          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-light">
            {room.tagline}
          </p>

          {/* Key Highlights */}
          <ul className="space-y-1.5 pt-1">
            {room.highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & Booking CTA */}
        <div className="pt-4 border-t border-slate-800 space-y-4">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xs text-slate-400 block">Nightly Rate</span>
              <div className="flex items-baseline gap-2">
                <span className="font-cinzel text-2xl font-bold text-gold-gradient">
                  ₹{room.price.toLocaleString('en-IN')}
                </span>
                {room.originalPrice && (
                  <span className="text-xs text-slate-500 line-through">
                    ₹{room.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-[11px] text-slate-400">/ night</span>
              </div>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
              AC • 24h Service
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenRoomModal(room)}
              className="w-full py-2.5 rounded-xl border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              Details
            </button>
            <button
              onClick={() => onBookRoom(room.id)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5"
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
