import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, Calendar, Menu, X, Hotel } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Rooms & Suites', page: 'rooms' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact & Booking', page: 'contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-header py-3 shadow-2xl shadow-purple-950/40' : 'bg-gradient-to-b from-purple-950/90 via-indigo-950/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Zone */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-md p-1"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 via-purple-800 to-indigo-950 border border-purple-400/30 flex items-center justify-center text-amber-300 shadow-lg group-hover:scale-105 transition-transform">
            <Hotel className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white uppercase block leading-tight group-hover:text-amber-200 transition-colors">
              GRAND RİMEDYA
            </span>
            <span className="text-[10px] tracking-[0.2em] font-medium text-purple-300 uppercase block">
              HOTEL MUDANYA
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`text-sm font-medium tracking-wide transition-all relative py-1 focus:outline-none ${
                  isActive
                    ? 'text-amber-300 font-semibold'
                    : 'text-purple-100/90 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-purple-400 rounded-full animate-fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${HOTEL_INFO.rawPhone}`}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-purple-200 hover:text-amber-300 bg-purple-900/40 hover:bg-purple-900/70 border border-purple-500/30 rounded-lg transition-all duration-200 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Call Now</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-indigo-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-lg shadow-md hover:shadow-amber-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-indigo-950" />
            <span>Book Your Stay</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="p-2 text-xs font-semibold text-indigo-950 bg-amber-400 rounded-md sm:hidden"
            aria-label="Book"
          >
            <Calendar className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-purple-200 hover:text-white bg-purple-900/50 rounded-lg border border-purple-500/30 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-300" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-t border-purple-800/40 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-900/60 text-amber-300 font-semibold border-l-4 border-amber-400'
                      : 'text-purple-100 hover:bg-purple-900/30'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-purple-800/40 flex flex-col gap-2">
            <a
              href={`tel:${HOTEL_INFO.rawPhone}`}
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-purple-200 bg-purple-900/50 border border-purple-500/30 rounded-lg"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now: {HOTEL_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-indigo-950 bg-gradient-to-r from-amber-300 to-amber-500 rounded-lg shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
