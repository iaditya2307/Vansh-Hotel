import React from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-xs animate-fadeIn">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
      />
      <div className="relative max-w-5xl w-full bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-2xl z-10">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#faf8f5] border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-stone-700" />
            <span className="font-serif-display text-sm sm:text-base font-bold text-stone-900">
              {title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[75vh] w-full bg-stone-950 flex items-center justify-center overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="max-w-full max-h-[75vh] object-contain"
          />
        </div>

      </div>
    </div>
  );
};
