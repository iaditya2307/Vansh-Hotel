import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ImageViewerModalProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  onClose: () => void;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  isOpen,
  imageSrc,
  title,
  onClose,
}) => {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-ink/95 flex flex-col animate-fadeIn">
      <div className="flex items-center justify-between px-5 sm:px-8 h-16 text-ivory">
        <p className="font-display text-xl">{title}</p>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"
          aria-label="Close photo"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <button className="flex-1 flex items-center justify-center px-4 pb-8" onClick={onClose}>
        <img
          src={imageSrc}
          alt={title}
          className="max-w-full max-h-[calc(100svh-6rem)] object-contain"
          onClick={(event) => event.stopPropagation()}
        />
      </button>
    </div>
  );
};
