import React, { useState } from 'react';
import { PageRoute, BookingFormData } from '../types';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Calendar,
  Send,
  CheckCircle2,
  Compass,
  Building,
  Navigation
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    checkIn: new Date().toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    guests: '2 Guests',
    roomType: 'deluxe-room',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    }, 700);
  };

  return (
    <div className="pt-24 pb-16 space-y-16 text-slate-100">
      
      {/* HERO SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-purple-950 via-indigo-950 to-[#0e071a] border-b border-purple-800/40">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase block">
            GET IN TOUCH
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
            Contact & Booking
          </h1>
          <p className="text-base sm:text-lg text-purple-200/90 font-light max-w-lg mx-auto">
            We look forward to welcoming you to Grand Rimedya Hotel Mudanya.
          </p>
        </div>
      </section>

      {/* TWO COLUMN CONTACT & BOOKING LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT SIDE: CONTACT INFORMATION */}
          <div className="lg:col-span-5 space-y-8 p-8 rounded-3xl glass-card border border-purple-800/60 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                DIRECT HOTEL DETAILS
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                Grand Rimedya Hotel Mudanya
              </h2>
              <p className="text-xs text-purple-200/80 leading-relaxed font-light">
                Reach out directly to our 24/7 reception desk for immediate room availability, seasonal inquiries, or custom group bookings.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-900/30 border border-purple-800/50">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-purple-400 uppercase block">Telephone Number</span>
                  <a
                    href={`tel:${HOTEL_INFO.rawPhone}`}
                    className="font-serif text-xl font-bold text-amber-300 hover:underline"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                  <p className="text-[11px] text-purple-300/70 mt-0.5">Available 24 hours a day, 7 days a week</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-900/30 border border-purple-800/50">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-purple-400 uppercase block">Hotel Address</span>
                  <p className="text-sm font-semibold text-white leading-snug">
                    {HOTEL_INFO.address}
                  </p>
                  <p className="text-[11px] text-purple-300/70 mt-0.5">Yeni Mahallesi, Mudanya / Bursa, Türkiye</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-900/30 border border-purple-800/50">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-purple-400 uppercase block">Email Address</span>
                  <a
                    href={`mailto:${HOTEL_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-amber-300 transition-colors"
                  >
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Call & Booking Buttons */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${HOTEL_INFO.rawPhone}`}
                className="py-3 px-4 text-xs font-bold text-indigo-950 bg-amber-400 hover:bg-amber-300 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-indigo-950" />
                <span>Call Now</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="py-3 px-4 text-xs font-bold text-white bg-purple-900/60 hover:bg-purple-800 border border-purple-500/40 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4 text-amber-300" />
                <span>Book Your Stay</span>
              </button>
            </div>
          </div>


          {/* RIGHT SIDE: PROFESSIONAL BOOKING FORM */}
          <div className="lg:col-span-7 p-8 rounded-3xl glass-card border border-purple-800/60 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                RESERVATION FORM
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                Request a Reservation
              </h2>
              <p className="text-xs text-purple-200/80 mt-1">
                Fill in your details below and our front desk will confirm your room availability within minutes.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-xs text-purple-200/90 max-w-md mx-auto leading-relaxed">
                    Your room request for <span className="text-amber-300 font-semibold">{formData.roomType}</span> ({formData.checkIn} to {formData.checkOut}) has been submitted successfully.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-purple-900/40 border border-purple-800 max-w-sm mx-auto text-left text-xs space-y-1.5 text-purple-200">
                  <div><span className="text-purple-400">Guest Name:</span> {formData.fullName}</div>
                  <div><span className="text-purple-400">Phone:</span> {formData.phone}</div>
                  <div><span className="text-purple-400">Email:</span> {formData.email}</div>
                  <div><span className="text-purple-400">Guests:</span> {formData.guests}</div>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-bold text-indigo-950 bg-amber-400 rounded-lg hover:bg-amber-300"
                >
                  Submit Another Request
                </button>
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
                      placeholder="e.g. Mehmet Kaya"
                      className="w-full px-4 py-3 text-sm bg-purple-950/40 border border-purple-700/50 rounded-xl text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 transition-colors"
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
                      className="w-full px-4 py-3 text-sm bg-purple-950/40 border border-purple-700/50 rounded-xl text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 transition-colors"
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
                      className="w-full px-4 py-3 text-sm bg-purple-950/40 border border-purple-700/50 rounded-xl text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-purple-200 mb-1">
                      Room Type *
                    </label>
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm bg-purple-950/70 border border-purple-700/50 rounded-xl text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      {ROOMS_DATA.map((r) => (
                        <option key={r.id} value={r.id} className="bg-purple-950 text-white">
                          {r.name}
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
                      className="w-full px-4 py-3 text-sm bg-purple-950/40 border border-purple-700/50 rounded-xl text-white focus:outline-none focus:border-amber-400"
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
                      className="w-full px-4 py-3 text-sm bg-purple-950/40 border border-purple-700/50 rounded-xl text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-purple-200 mb-1">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm bg-purple-950/70 border border-purple-700/50 rounded-xl text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="1 Guest" className="bg-purple-950 text-white">1 Guest</option>
                      <option value="2 Guests" className="bg-purple-950 text-white">2 Guests</option>
                      <option value="3 Guests" className="bg-purple-950 text-white">3 Guests</option>
                      <option value="4+ Guests" className="bg-purple-950 text-white">4+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-purple-200 mb-1">
                    Special Requests or Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide any additional requests (e.g. late check-in, extra bed, transfer inquiry)..."
                    className="w-full px-4 py-3 text-sm bg-purple-950/40 border border-purple-700/50 rounded-xl text-white placeholder-purple-400/60 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs font-bold text-indigo-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-xl shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request Booking</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>


      {/* LOCATION & MAP SECTION BELOW FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="p-8 rounded-3xl glass-card border border-purple-800/60 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase block">
                LOCATION & DIRECTIONS
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                How to Reach Grand Rimedya Hotel
              </h3>
              <p className="text-xs text-purple-200/80 mt-0.5">
                Yeni, Bursa Asfaltı Cd. No:140, 16940 Mudanya/Bursa, Türkiye
              </p>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(HOTEL_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-bold text-amber-300 bg-purple-900/60 hover:bg-purple-800 border border-purple-500/40 rounded-xl flex items-center gap-2 shrink-0"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Map Preview Canvas Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-purple-700/50 bg-purple-950 aspect-[21/9] flex items-center justify-center text-center p-6 group">
            <iframe
              title="Grand Rimedya Hotel Mudanya Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.68940828784!2d28.8950!3d40.3700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b8a24555555555%3A0x1!2sYeni%2C%20Bursa%20Asfalt%C4%B1%20Cd.%20No%3A140%2C%2016940%20Mudanya%2FBursa!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.1) saturate(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
            />
            
            <div className="relative z-10 p-4 rounded-xl bg-purple-950/90 backdrop-blur-md border border-purple-500/40 max-w-sm pointer-events-none shadow-2xl">
              <span className="font-serif text-lg font-bold text-amber-300 block">
                Grand Rimedya Hotel
              </span>
              <p className="text-xs text-purple-200 mt-1">
                Located on Bursa Asfaltı Cd. with easy drive & transit access.
              </p>
            </div>
          </div>

          {/* Proximity Distances */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-xl bg-purple-900/30 border border-purple-800/50 space-y-1">
              <span className="font-semibold text-white block">Mudanya Ferry Pier (BUDO / İDO)</span>
              <p className="text-purple-300/80">~5-8 minutes drive (Connecting to Istanbul European & Asian sides)</p>
            </div>

            <div className="p-4 rounded-xl bg-purple-900/30 border border-purple-800/50 space-y-1">
              <span className="font-semibold text-white block">Mudanya Waterfront Promenade</span>
              <p className="text-purple-300/80">~3 minutes to coastal cafes, seafood dining & historical sites</p>
            </div>

            <div className="p-4 rounded-xl bg-purple-900/30 border border-purple-800/50 space-y-1">
              <span className="font-semibold text-white block">Bursa City Center</span>
              <p className="text-purple-300/80">~25 minutes drive to Grand Mosque, Silk Market & Uludağ cable car</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
