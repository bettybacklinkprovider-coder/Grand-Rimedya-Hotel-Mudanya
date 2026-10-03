import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, Calendar } from 'lucide-react';
import { HOTEL_INFO, IMAGES } from './data/hotelData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string>('deluxe-room');

  // Preload all hotel images in background for instant, lag-free navigation
  useEffect(() => {
    Object.values(IMAGES).forEach((src) => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, []);

  // Handle hash changes for direct URL deep-linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (['home', 'rooms', 'gallery', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const handleOpenBooking = (roomType?: string) => {
    if (roomType) {
      setSelectedRoom(roomType);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0412] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Sticky Top Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page View Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Footer on all 4 pages */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Direct Booking Modal Drawer */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedRoom={selectedRoom}
      />

      {/* Floating Mobile/Tablet Quick Bar */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 sm:hidden">
        <a
          href={`tel:${HOTEL_INFO.rawPhone}`}
          className="p-3.5 bg-purple-900/90 text-amber-300 border border-purple-500/40 rounded-full shadow-2xl backdrop-blur-md"
          aria-label="Call Hotel Desk"
        >
          <Phone className="w-5 h-5" />
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="px-4 py-3 bg-gradient-to-r from-amber-300 to-amber-500 text-indigo-950 font-bold text-xs rounded-full shadow-2xl flex items-center gap-1.5"
        >
          <Calendar className="w-4 h-4 text-indigo-950" />
          <span>Book Room</span>
        </button>
      </div>
    </div>
  );
}
