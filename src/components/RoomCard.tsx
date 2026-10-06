import React from 'react';
import { Room } from '../types/hotel';
import { ArrowUpRight } from 'lucide-react';

interface RoomCardProps {
  room: Room;
  onBookRoom: (roomId: string) => void;
  onOpenRoomModal: (room: Room) => void;
  featured?: boolean;
}

const categoryLabel: Record<Room['category'], string> = {
  presidential: 'Signature',
  suite: 'Suite',
  family: 'Family',
  deluxe: 'Deluxe',
  classic: 'Classic',
};

export const RoomCard: React.FC<RoomCardProps> = ({ room, onBookRoom, onOpenRoomModal, featured }) => {
  return (
    <article
      className={`group bg-paper rounded-[1.5rem] overflow-hidden border border-line/80 flex flex-col ${
        featured ? 'lg:flex-row lg:min-h-[420px]' : ''
      }`}
    >
      <button
        type="button"
        onClick={() => onOpenRoomModal(room)}
        className={`relative overflow-hidden bg-ink text-left ${
          featured ? 'lg:w-[58%] aspect-[16/11] lg:aspect-auto' : 'aspect-[16/11]'
        }`}
      >
        <img
          src={room.image}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-paper/90 text-[11px] tracking-[0.18em] uppercase text-ink">
          {categoryLabel[room.category]}
        </span>
        <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-paper text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </button>

      <div className={`p-6 sm:p-7 flex flex-col justify-between gap-6 ${featured ? 'lg:flex-1' : ''}`}>
        <div>
          <div className="flex items-center gap-3 text-xs tracking-[0.14em] uppercase text-ink/50">
            <span>{room.capacity}</span>
            <span className="w-1 h-1 rounded-full bg-brass" />
            <span>{room.size}</span>
          </div>
          <h3 className="font-display text-3xl mt-3 text-ink">{room.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">{room.tagline}</p>
          <p className="mt-3 text-sm text-ink/50">{room.bedType}</p>
        </div>

        <div className="flex items-end justify-between gap-4 pt-2">
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-ink/45">Per night</p>
            <p className="font-display text-3xl text-ink leading-none mt-1">
              ₹{room.price.toLocaleString('en-IN')}
            </p>
            {room.originalPrice && (
              <p className="text-xs text-ink/35 line-through mt-1">
                ₹{room.originalPrice.toLocaleString('en-IN')}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => onOpenRoomModal(room)}
              className="px-4 py-2.5 rounded-full border border-line text-xs tracking-[0.14em] uppercase text-ink hover:border-ink transition-colors"
            >
              Details
            </button>
            <button
              onClick={() => onBookRoom(room.id)}
              className="px-4 py-2.5 rounded-full bg-ink text-ivory text-xs tracking-[0.14em] uppercase hover:bg-brass transition-colors"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
