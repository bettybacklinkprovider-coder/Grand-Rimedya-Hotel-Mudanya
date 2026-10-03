import React, { useState } from 'react';
import { PageRoute, GalleryImage } from '../types';
import { GALLERY_IMAGES } from '../data/hotelData';
import { SafeImage } from '../components/SafeImage';
import { X, ChevronLeft, ChevronRight, Maximize2, Calendar, Sparkles } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Rooms', 'Exterior', 'Dining', 'Mudanya'];

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === 0 ? filteredImages.length - 1 : prev! - 1));
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === filteredImages.length - 1 ? 0 : prev! + 1));
  };

  return (
    <div className="pt-24 pb-16 space-y-12 text-slate-100">
      
      {/* PAGE HERO */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-purple-950 via-indigo-950 to-[#0e071a] border-b border-purple-800/40">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase block">
            VISUAL ATMOSPHERE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
            Hotel Gallery
          </h1>
          <p className="text-base sm:text-lg text-purple-200/90 font-light max-w-lg mx-auto">
            Discover the atmosphere of Grand Rimedya Hotel Mudanya.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-purple-950/80 border border-purple-800/60 max-w-xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-700 to-indigo-800 text-amber-300 shadow-lg border border-purple-500/40'
                  : 'text-purple-300 hover:text-white hover:bg-purple-900/40'
              }`}
            >
              {cat === 'All' ? 'All Photos' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden glass-card border border-purple-800/50 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-purple-900/40"
            >
              <div className="aspect-[4/3] overflow-hidden bg-purple-950 relative">
                <SafeImage
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-purple-200/90 line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-amber-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in">
          
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-purple-900/80 text-white hover:bg-purple-800 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-purple-900/80 text-white hover:bg-purple-800 transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6 text-amber-300" />
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-purple-900/80 text-white hover:bg-purple-800 transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6 text-amber-300" />
          </button>

          {/* Lightbox content */}
          <div className="max-w-4xl w-full space-y-4 text-center">
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl max-h-[75vh] flex items-center justify-center bg-black">
              <SafeImage
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                {filteredImages[lightboxIndex].category} · Photo {lightboxIndex + 1} of {filteredImages.length}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                {filteredImages[lightboxIndex].title}
              </h3>
              <p className="text-xs text-purple-200/90 max-w-xl mx-auto">
                {filteredImages[lightboxIndex].description}
              </p>
            </div>
          </div>

        </div>
      )}

      {/* BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-purple-gold-cta border border-purple-600/40 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Ready to Experience Grand Rimedya Hotel?
            </h3>
            <p className="text-sm text-purple-200/90 font-light">
              Book your room online today or contact our reception for personal assistance.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-4 text-xs font-bold text-indigo-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-xl shadow-xl hover:brightness-110 transition-all inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-indigo-950" />
            <span>Book Your Stay</span>
          </button>
        </div>
      </section>

    </div>
  );
};
