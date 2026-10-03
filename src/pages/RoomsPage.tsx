import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ROOMS_DATA, HOTEL_INFO } from '../data/hotelData';
import { SafeImage } from '../components/SafeImage';
import { Check, Calendar, Phone, Sparkles, Bed, ShieldCheck, ChevronRight } from 'lucide-react';

interface RoomsPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (roomType?: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<Record<string, number>>({});

  const handleImageSwitch = (roomId: string, index: number) => {
    setActiveImageIndex((prev) => ({ ...prev, [roomId]: index }));
  };

  return (
    <div className="pt-24 pb-16 space-y-16 text-slate-100">
      
      {/* PAGE HERO */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950 via-indigo-950 to-[#0e071a] text-center border-b border-purple-800/40">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase block">
            GRAND RİMEDYA HOTEL MUDANYA
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-wide">
            Rooms & Suites
          </h1>
          <p className="text-base sm:text-lg text-purple-200/90 max-w-xl mx-auto font-light leading-relaxed">
            Comfortable spaces designed for a relaxing stay in Mudanya.
          </p>
        </div>
      </section>

      {/* DETAILED ROOM SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {ROOMS_DATA.map((room, idx) => {
          const currentImgIndex = activeImageIndex[room.id] || 0;
          const currentImage = room.gallery[currentImgIndex] || room.image;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={room.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl glass-card border border-purple-800/60 ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Gallery Column */}
              <div className={`lg:col-span-7 space-y-4 ${isEven ? '' : 'lg:order-2'}`}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-purple-700/40 shadow-2xl group">
                  <SafeImage
                    src={currentImage}
                    alt={room.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-950/80 backdrop-blur-md text-amber-300 text-xs font-bold border border-purple-500/40">
                    {room.category} Class
                  </div>

                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs">
                    {room.size} · {room.capacity}
                  </div>
                </div>

                {/* Gallery Thumbnails */}
                {room.gallery.length > 1 && (
                  <div className="flex items-center gap-3">
                    {room.gallery.map((imgUrl, imgIdx) => (
                      <button
                        key={imgIdx}
                        onClick={() => handleImageSwitch(room.id, imgIdx)}
                        className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                          currentImgIndex === imgIdx
                            ? 'border-amber-400 ring-2 ring-amber-400/30'
                            : 'border-purple-800 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <SafeImage src={imgUrl} alt={`${room.name} ${imgIdx}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Description & Features Column */}
              <div className={`lg:col-span-5 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                      {room.bedType}
                    </span>
                    <span className="font-serif text-xl font-bold text-amber-300">
                      {room.priceEstimate}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                    {room.name}
                  </h2>
                </div>

                <p className="text-sm text-purple-200/90 leading-relaxed font-light">
                  {room.fullDesc}
                </p>

                {/* Key Highlight Features */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300">
                    Room Highlights:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {room.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-purple-100">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full Amenities Grid */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">
                    Included Amenities:
                  </h4>
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    {room.amenities.map((amenity, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2.5 py-1 rounded-md bg-purple-900/40 border border-purple-800/60 text-purple-200"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-indigo-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book This Room</span>
                  </button>

                  <a
                    href={`tel:${HOTEL_INFO.rawPhone}`}
                    className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-purple-200 bg-purple-900/40 hover:bg-purple-900/80 border border-purple-600/40 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-300" />
                    <span>Inquire Phone</span>
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* BOTTOM BOOKING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-purple-gold-cta border border-purple-600/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="font-serif text-3xl font-bold text-white">
              Ready for a Relaxing Stay in Mudanya?
            </h3>
            <p className="text-sm text-purple-200/90 font-light">
              Contact our front desk directly for special seasonal rates or group reservations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 text-xs font-bold text-indigo-950 bg-gradient-to-r from-amber-300 to-amber-500 rounded-xl shadow-lg hover:brightness-110 transition-all"
            >
              Book Your Stay Now
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 text-xs font-semibold text-white bg-purple-900/60 hover:bg-purple-800 border border-purple-400/30 rounded-xl"
            >
              Contact Reception →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
