import React, { useState } from 'react';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';
import { BookingFormData } from '../types';
import { X, Calendar, CheckCircle2, Phone, ShieldCheck, Hotel } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedRoom?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedRoom = 'deluxe-room',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    checkIn: new Date().toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    guests: '2 Guests',
    roomType: preSelectedRoom,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-purple-950 via-indigo-950 to-[#0e071a] border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="px-6 py-5 bg-purple-900/40 border-b border-purple-800/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
              <Hotel className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                Direct Room Reservation
              </h3>
              <p className="text-xs text-purple-300/80">Grand Rimedya Hotel Mudanya</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-purple-300 hover:text-white bg-purple-900/50 rounded-full hover:bg-purple-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-2xl font-bold text-white">
                  Reservation Request Received!
                </h4>
                <p className="text-sm text-purple-200/90 max-w-md mx-auto leading-relaxed">
                  Thank you <span className="font-semibold text-amber-300">{formData.fullName}</span>. Our reception team at Grand Rimedya Hotel Mudanya will contact you shortly to confirm your booking details.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-900/30 border border-purple-800/60 max-w-md mx-auto text-left text-xs space-y-2 text-purple-200">
                <div className="flex justify-between border-b border-purple-800/40 pb-1.5">
                  <span className="text-purple-400">Guests & Room:</span>
                  <span className="font-semibold text-amber-300">{formData.guests} · {ROOMS_DATA.find(r => r.id === formData.roomType)?.name || formData.roomType}</span>
                </div>
                <div className="flex justify-between border-b border-purple-800/40 pb-1.5">
                  <span className="text-purple-400">Dates:</span>
                  <span className="font-semibold text-white">{formData.checkIn} to {formData.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">Direct Contact:</span>
                  <span className="font-semibold text-white">{HOTEL_INFO.phone}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${HOTEL_INFO.rawPhone}`}
                  className="px-5 py-2.5 text-xs font-semibold text-amber-300 bg-purple-900/60 border border-purple-500/40 rounded-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Front Desk Now</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 text-xs font-bold text-indigo-950 bg-amber-400 hover:bg-amber-300 rounded-lg"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-purple-200 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ahmet Yılmaz"
                    className="w-full px-3.5 py-2.5 text-sm bg-purple-900/30 border border-purple-700/50 rounded-lg text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-purple-200 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+90 5XX XXX XX XX"
                    className="w-full px-3.5 py-2.5 text-sm bg-purple-900/30 border border-purple-700/50 rounded-lg text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-purple-200 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="guest@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-purple-900/30 border border-purple-700/50 rounded-lg text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-purple-200 mb-1">
                    Room Choice *
                  </label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-purple-900/60 border border-purple-700/50 rounded-lg text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  >
                    {ROOMS_DATA.map((room) => (
                      <option key={room.id} value={room.id} className="bg-purple-950 text-white">
                        {room.name} ({room.priceEstimate})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-purple-200 mb-1">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    required
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-purple-900/30 border border-purple-700/50 rounded-lg text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-purple-200 mb-1">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    required
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-purple-900/30 border border-purple-700/50 rounded-lg text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-purple-200 mb-1">
                    Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-purple-900/60 border border-purple-700/50 rounded-lg text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="1 Guest" className="bg-purple-950 text-white">1 Guest</option>
                    <option value="2 Guests" className="bg-purple-950 text-white">2 Guests</option>
                    <option value="3 Guests" className="bg-purple-950 text-white">3 Guests</option>
                    <option value="4+ Guests" className="bg-purple-950 text-white">4+ Guests / Family</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-purple-200 mb-1">
                  Special Requests / Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. Late check-in, high floor preference, airport shuttle info..."
                  className="w-full px-3.5 py-2.5 text-sm bg-purple-900/30 border border-purple-700/50 rounded-lg text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-purple-300/80">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No prepayment required. Best rate guaranteed.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 text-xs font-bold text-indigo-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-lg shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Request Booking</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
