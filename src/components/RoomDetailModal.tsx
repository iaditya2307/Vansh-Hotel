import React, { useEffect, useRef, useState } from 'react';
import { Room } from '../types/hotel';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, onClose, onBookRoom }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    setActiveImageIndex(0);
  }, [room?.id]);

  useEffect(() => {
    if (!room) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [room]);

  if (!room) return null;

  const images = room.gallery.length > 0 ? room.gallery : [room.image];

  return (
    <div className="fixed inset-0 z-[70] bg-ink/70 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center">
      <button className="absolute inset-0" aria-label="Close room details" onClick={onClose} />
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-paper rounded-[1.5rem] grid lg:grid-cols-2">
        <div className="relative bg-ink min-h-[260px] lg:min-h-full">
          <img
            src={images[activeImageIndex]}
            alt={`${room.name} photo ${activeImageIndex + 1}`}
            className="w-full h-full object-cover min-h-[260px] lg:absolute lg:inset-0"
          />
          {images.length > 1 && (
            <div className="absolute bottom-4 left-4 flex gap-2">
              <button
                onClick={() => setActiveImageIndex((i) => (i - 1 + images.length) % images.length)}
                className="w-10 h-10 rounded-full bg-paper text-ink flex items-center justify-center"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveImageIndex((i) => (i + 1) % images.length)}
                className="w-10 h-10 rounded-full bg-paper text-ink flex items-center justify-center"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.24em] uppercase text-brass">
                ₹{room.price.toLocaleString('en-IN')} a night
              </p>
              <h3 className="font-display text-4xl mt-2">{room.name}</h3>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-4 text-ink/70 leading-relaxed">{room.description}</p>

          <dl className="mt-6 grid grid-cols-3 gap-3 text-sm">
            <div>
              <dt className="text-[10px] tracking-[0.18em] uppercase text-ink/45">Guests</dt>
              <dd className="mt-1">{room.capacity}</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.18em] uppercase text-ink/45">Bed</dt>
              <dd className="mt-1">{room.bedType}</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.18em] uppercase text-ink/45">Size</dt>
              <dd className="mt-1">{room.size}</dd>
            </div>
          </dl>

          <ul className="mt-6 space-y-2 text-sm text-ink/75">
            {room.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-brass">—</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {room.amenities.map((item) => (
              <span key={item} className="px-3 py-1 rounded-full bg-ivory text-xs text-ink/80">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="font-display text-4xl">
              ₹{room.price.toLocaleString('en-IN')}
              <span className="text-sm text-ink/45 ml-2">/ night</span>
            </p>
            <button
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              className="px-5 py-3 rounded-full bg-ink text-ivory text-sm tracking-[0.12em] uppercase hover:bg-brass transition-colors"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
