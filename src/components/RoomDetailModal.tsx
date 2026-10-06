import React, { useState } from 'react';
import { Room } from '../types/hotel';
import { 
  X, 
  Hotel, 
  Users, 
  Bed, 
  Check, 
  MessageSquare, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onBookRoom,
}) => {
  if (!room) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = room.gallery.length > 0 ? room.gallery : [room.image];

  const nextImg = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImg = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
      />
      
      <div className="relative max-w-4xl w-full bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#faf8f5] border-b border-stone-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Hotel className="w-5 h-5 text-amber-800" />
            <div>
              <h3 className="font-serif-display text-lg font-bold text-stone-900">
                {room.name}
              </h3>
              <span className="text-xs text-amber-800 font-semibold">
                ₹{room.price.toLocaleString('en-IN')} / night
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Main Gallery Display */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
            <img
              src={images[activeImageIndex]}
              alt={`${room.name} ${activeImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImg}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 text-stone-800 shadow-md hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 text-stone-800 shadow-md hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`relative w-20 h-14 rounded-xl overflow-hidden border shrink-0 transition-all ${
                    i === activeImageIndex
                      ? 'border-stone-900 ring-2 ring-stone-900/20'
                      : 'border-stone-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="space-y-2">
            <h4 className="font-serif-display text-base font-bold text-stone-900">
              Room Description
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              {room.description}
            </p>
          </div>

          {/* Room Specs */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200 text-center">
            <div>
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-medium">Guests</span>
              <span className="text-xs font-bold text-stone-900">{room.capacity}</span>
            </div>
            <div>
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-medium">Bedding</span>
              <span className="text-xs font-bold text-stone-900">{room.bedType}</span>
            </div>
            <div>
              <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-medium">Area</span>
              <span className="text-xs font-bold text-stone-900">{room.size}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="font-serif-display text-base font-bold text-stone-900">
              Key Room Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {room.highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-3">
            <h4 className="font-serif-display text-base font-bold text-stone-900">
              Included Amenities
            </h4>
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((a, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200 text-stone-800 text-xs font-medium">
                  ✓ {a}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#faf8f5] border-t border-stone-200 flex items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-stone-500 block font-medium">Nightly Rate</span>
            <span className="font-serif-display text-xl font-bold text-stone-900">
              ₹{room.price.toLocaleString('en-IN')} <span className="text-xs text-stone-500 font-normal">/ night</span>
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookRoom(room.id);
            }}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wide shadow-sm flex items-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Book This Room
          </button>
        </div>

      </div>
    </div>
  );
};
