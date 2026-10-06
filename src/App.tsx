import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { RoomGrid } from './components/RoomGrid';
import { PhotoGallery } from './components/PhotoGallery';
import { AmenitiesGrid } from './components/AmenitiesGrid';
import { QuickBookingForm } from './components/QuickBookingForm';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { Welcome } from './components/Welcome';
import { LocalStay } from './components/LocalStay';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { RoomDetailModal } from './components/RoomDetailModal';
import { ImageViewerModal } from './components/ImageViewerModal';
import { Room } from './types/hotel';

export const App: React.FC = () => {
  const [bookingRoomId, setBookingRoomId] = useState<string | undefined>(undefined);
  const [roomModal, setRoomModal] = useState<Room | null>(null);
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; src: string; title: string }>({
    isOpen: false,
    src: '',
    title: '',
  });

  const handleOpenBooking = (roomId?: string) => {
    if (roomId) {
      setBookingRoomId(roomId);
    }
    const bookElement = document.getElementById('book');
    if (bookElement) {
      bookElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (imageSrc: string, title: string) => {
    setLightbox({
      isOpen: true,
      src: imageSrc,
      title: title,
    });
  };

  return (
    <div className="min-h-screen bg-ivory text-ink flex flex-col font-sans">
      <Navbar onOpenBooking={handleOpenBooking} />

      <HeroCarousel
        onSelectRoom={handleOpenBooking}
        onOpenLightbox={handleOpenLightbox}
      />

      <main className="flex-grow">
        <Welcome />
        <LocalStay />

        {/* Rooms Grid with Category Filter Tabs */}
        <RoomGrid
          onBookRoom={handleOpenBooking}
          onOpenRoomModal={(room) => setRoomModal(room)}
        />

        {/* Interactive Photo Showcase Gallery */}
        <PhotoGallery onOpenLightbox={handleOpenLightbox} />

        {/* Royal Amenities & Facilities */}
        <AmenitiesGrid />

        {/* WhatsApp Reservation Calculator Form */}
        <QuickBookingForm initialRoomId={bookingRoomId} />

        {/* Guest Reviews & FAQ */}
        <TestimonialsAndFaq />

        {/* Location & Map Section */}
        <LocationSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Conversion Bar */}
      <FloatingMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* Room Detail Lightbox Modal */}
      <RoomDetailModal
        room={roomModal}
        onClose={() => setRoomModal(null)}
        onBookRoom={handleOpenBooking}
      />

      {/* Image Lightbox Zoom Modal */}
      <ImageViewerModal
        isOpen={lightbox.isOpen}
        imageSrc={lightbox.src}
        title={lightbox.title}
        onClose={() => setLightbox({ isOpen: false, src: '', title: '' })}
      />

    </div>
  );
};

export default App;
