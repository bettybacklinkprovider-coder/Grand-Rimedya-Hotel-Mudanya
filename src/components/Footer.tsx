import React from 'react';
import { PageRoute } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { Hotel, Phone, MapPin, Mail, Clock, Instagram, Facebook, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-indigo-950 via-purple-950 to-[#0a0412] text-purple-200 border-t border-purple-800/40 relative overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-purple-900/60">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-950 border border-purple-400/30 flex items-center justify-center text-amber-300 shadow-lg">
                <Hotel className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-white uppercase block leading-tight">
                  GRAND RİMEDYA
                </span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-purple-300 uppercase block">
                  HOTEL MUDANYA
                </span>
              </div>
            </div>

            <p className="text-sm text-purple-300/80 leading-relaxed pt-2">
              A comfortable and elegant hotel experience in Mudanya, Bursa. Modern accommodation, serene coastal proximity, and warm Turkish hospitality.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-purple-900/50 hover:bg-purple-800/80 border border-purple-700/50 flex items-center justify-center text-purple-300 hover:text-amber-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-purple-900/50 hover:bg-purple-800/80 border border-purple-700/50 flex items-center justify-center text-purple-300 hover:text-amber-300 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Website"
                className="w-9 h-9 rounded-full bg-purple-900/50 hover:bg-purple-800/80 border border-purple-700/50 flex items-center justify-center text-purple-300 hover:text-amber-300 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-amber-300 tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-purple-200/80 hover:text-amber-300 transition-colors"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rooms')}
                  className="text-purple-200/80 hover:text-amber-300 transition-colors"
                >
                  Rooms & Suites
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="text-purple-200/80 hover:text-amber-300 transition-colors"
                >
                  Hotel Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-purple-200/80 hover:text-amber-300 transition-colors"
                >
                  Contact & Booking
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-amber-400 font-medium hover:underline"
                >
                  Online Reservation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-amber-300 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-purple-200/90">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-purple-400 font-medium">Direct Telephone</span>
                  <a href={`tel:${HOTEL_INFO.rawPhone}`} className="hover:text-amber-300 font-semibold transition-colors">
                    {HOTEL_INFO.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 text-purple-200/90">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-purple-400 font-medium">Hotel Address</span>
                  <p className="text-purple-200/80 leading-snug">{HOTEL_INFO.address}</p>
                </div>
              </li>

              <li className="flex items-start gap-3 text-purple-200/90">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-purple-400 font-medium">Email Inquiry</span>
                  <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-amber-300 transition-colors">
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Reception & Quick Reserve */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-amber-300 tracking-wide">
              Front Desk Service
            </h4>
            <div className="p-4 rounded-xl bg-purple-900/30 border border-purple-800/50 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>24/7 Guest Assistance</span>
              </div>
              <p className="text-xs text-purple-300/80 leading-relaxed">
                Check-in: {HOTEL_INFO.checkInTime} · Check-out: {HOTEL_INFO.checkOutTime}
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 px-4 text-xs font-bold text-indigo-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-lg hover:brightness-110 transition-all shadow-lg text-center"
            >
              Reserve Room Now
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-400/80 gap-4">
          <p>© 2026 Grand Rimedya Hotel Mudanya. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            <span>Mudanya</span>
            <span>·</span>
            <span>Bursa</span>
            <span>·</span>
            <span>Türkiye</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
