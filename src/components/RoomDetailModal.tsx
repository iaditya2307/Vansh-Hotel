import React, { useState } from 'react';
import { Room } from '../types/hotel';
import { 
  X, 
  Crown, 
  Users, 
  Bed, 
  Check, 
  MessageSquare, 
  Sparkles,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl overflow-y-auto">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
      />
      
      <div className="relative max-w-4xl w-full bg-slate-900 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-950/90 border-b border-amber-500/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-cinzel text-lg font-bold text-white">
                {room.name}
              </h3>
              <span className="text-xs text-amber-400 uppercase tracking-widest font-semibold">
                {room.category} • ₹{room.price.toLocaleString('en-IN')}/night
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 border border-slate-700 text-amber-400 hover:text-white hover:bg-amber-500/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Main Gallery Display */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-amber-500/20">
            <img
              src={images[activeImageIndex]}
              alt={`${room.name} ${activeImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImg}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/80 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/80 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all"
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
                      ? 'border-amber-400 ring-2 ring-amber-400/50 scale-105'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="space-y-2">
            <h4 className="font-cinzel text-base font-bold text-white">
              Suite Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {room.description}
            </p>
          </div>

          {/* Room Specs */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Occupancy</span>
              <span className="text-xs font-bold text-amber-300">{room.capacity}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Bedding</span>
              <span className="text-xs font-bold text-amber-300">{room.bedType}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Room Size</span>
              <span className="text-xs font-bold text-amber-300">{room.size}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-base font-bold text-white">
              Room Highlights & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {room.highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-base font-bold text-white">
              Included Amenities
            </h4>
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((a, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  {a}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Foot Actions */}
        <div className="p-4 sm:p-5 bg-slate-950/90 border-t border-amber-500/20 flex items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-slate-400 block">Tariff Rate</span>
            <span className="font-cinzel text-xl font-bold text-gold-gradient">
              ₹{room.price.toLocaleString('en-IN')} <span className="text-xs text-slate-400">/ night</span>
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookRoom(room.id);
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Book This Suite
          </button>
        </div>

      </div>
    </div>
  );
};
