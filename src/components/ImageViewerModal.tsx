import React from 'react';
import { X, Sparkles } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fadeIn">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
      />
      <div className="relative max-w-5xl w-full bg-slate-900 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl z-10">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-950/80 border-b border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="font-cinzel text-sm sm:text-base font-bold text-white">
              {title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 border border-slate-700 text-amber-400 hover:text-white hover:bg-amber-500/20 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[75vh] w-full bg-black flex items-center justify-center overflow-hidden">
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
