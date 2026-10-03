import React from 'react';
import { PageRoute } from '../types';
import { HOTEL_INFO, HOTEL_EXPERIENCES, ROOMS_DATA, IMAGES } from '../data/hotelData';
import { SafeImage } from '../components/SafeImage';
import {
  Calendar,
  Phone,
  BedDouble,
  Coffee,
  Sparkles,
  Wifi,
  HeartHandshake,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Compass,
  Star,
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenBooking: (roomType?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BedDouble': return <BedDouble className="w-6 h-6 text-amber-300" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-amber-300" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-300" />;
      case 'Wifi': return <Wifi className="w-6 h-6 text-amber-300" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-amber-300" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-amber-300" />;
      default: return <Sparkles className="w-6 h-6 text-amber-300" />;
    }
  };

  return (
    <div className="space-y-0 text-slate-100">
      
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Hero Background Image with Purple Overlay */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={IMAGES.hero}
            alt="Grand Rimedya Hotel Mudanya Facade"
            loading="eager"
            className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-purple-950/80 to-purple-950/60" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pt-12">
          {/* Location Badge Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-purple-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-lg">
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            <span>{HOTEL_INFO.locationTag}</span>
          </div>

          <div className="space-y-4">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-purple-300 uppercase block">
              WELCOME TO GRAND RİMEDYA HOTEL MUDANYA
            </span>
            
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] text-wrap-balance">
              Stay in Comfort. <span className="text-gold-accent italic font-normal">Experience Mudanya.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-purple-100/90 max-w-2xl mx-auto leading-relaxed font-light">
              A refined hotel experience combining comfort, elegance and warm Turkish hospitality in the heart of Mudanya, Bursa.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-indigo-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-xl shadow-xl hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-indigo-950" />
              <span>Book Your Stay</span>
            </button>

            <button
              onClick={() => {
                onNavigate('rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-purple-900/40 hover:bg-purple-800/60 border border-purple-400/40 rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Rooms</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>

          {/* Key Quick Badges */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-purple-950/50 border border-purple-800/40 backdrop-blur-sm flex items-center gap-3">
              <Star className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="text-xs text-purple-300 block font-medium">Boutique Experience</span>
                <span className="text-xs font-semibold text-white">Refined Comfort</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-950/50 border border-purple-800/40 backdrop-blur-sm flex items-center gap-3">
              <Coffee className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="text-xs text-purple-300 block font-medium">Turkish Hospitality</span>
                <span className="text-xs font-semibold text-white">Fresh Breakfast</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-950/50 border border-purple-800/40 backdrop-blur-sm flex items-center gap-3">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="text-xs text-purple-300 block font-medium">Prime Location</span>
                <span className="text-xs font-semibold text-white">Bursa Asfaltı Cd.</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-950/50 border border-purple-800/40 backdrop-blur-sm flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-xs text-purple-300 block font-medium">Direct Booking</span>
                <span className="text-xs font-semibold text-white">Best Rate Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 2 — ABOUT THE HOTEL */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-950 via-purple-950/60 to-indigo-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Premium Hotel Image */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-amber-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl aspect-[4/3]">
              <SafeImage
                src={IMAGES.lobby}
                alt="Grand Rimedya Hotel Mudanya Lobby"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-purple-950/80 backdrop-blur-md border border-purple-700/50 text-white">
                <span className="font-serif text-lg font-bold text-amber-300 block">
                  Welcoming Hotel Reception
                </span>
                <p className="text-xs text-purple-200">
                  Step into our modern lobby designed with purple velvet accents and Turkish marble elegance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hotel Story & Features */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase block">
                ABOUT OUR HOTEL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                A Comfortable Stay in Mudanya
              </h2>
            </div>

            <p className="text-base text-purple-200/90 leading-relaxed font-light">
              Grand Rimedya Hotel Mudanya offers guests a comfortable, stylish and welcoming environment for relaxing stays in Bursa. Located along Bursa Asfaltı Cd. in Mudanya, our boutique hotel seamlessly merges contemporary conveniences with peaceful Turkish hospitality.
            </p>

            <p className="text-sm text-purple-300/80 leading-relaxed">
              Whether you are visiting for business, a weekend coastal escape, or exploring historic Mudanya and the Sea of Marmara, our hotel provides thoughtfully equipped guest rooms, attentive front desk care, and quiet luxury.
            </p>

            {/* Feature Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl glass-card glass-card-hover border border-purple-800/50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 flex items-center justify-center text-amber-300">
                  <BedDouble className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-semibold text-white">Comfortable Accommodation</h4>
                <p className="text-xs text-purple-300/80">Soft linens, quiet soundproofing, and spacious bedding.</p>
              </div>

              <div className="p-4 rounded-xl glass-card glass-card-hover border border-purple-800/50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 flex items-center justify-center text-amber-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-semibold text-white">Modern Interiors</h4>
                <p className="text-xs text-purple-300/80">Contemporary styling with royal purple aesthetics.</p>
              </div>

              <div className="p-4 rounded-xl glass-card glass-card-hover border border-purple-800/50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 flex items-center justify-center text-amber-300">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-semibold text-white">Warm Hospitality</h4>
                <p className="text-xs text-purple-300/80">Attentive 24/7 reception ensuring a hassle-free stay.</p>
              </div>

              <div className="p-4 rounded-xl glass-card glass-card-hover border border-purple-800/50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 flex items-center justify-center text-amber-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-semibold text-white">Convenient Location</h4>
                <p className="text-xs text-purple-300/80">Direct access to Mudanya center & ferry connections.</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 3 — ROOMS & COMFORT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0e071a] relative">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase block">
              ACCOMMODATION PREVIEW
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Rooms Designed for Relaxation
            </h2>
            <p className="text-sm text-purple-200/80">
              Select your preferred level of comfort for a serene retreat in Mudanya.
            </p>
          </div>

          {/* 3 Room Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS_DATA.map((room) => (
              <div
                key={room.id}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-purple-800/50 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <SafeImage
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-transparent opacity-80" />
                    
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-900/80 backdrop-blur-md text-amber-300 text-xs font-semibold border border-purple-600/40">
                      {room.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-purple-200/90 leading-relaxed">
                      {room.shortDesc}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-purple-300">
                      <span className="px-2.5 py-1 rounded-md bg-purple-900/40 border border-purple-800">
                        {room.size}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-purple-900/40 border border-purple-800">
                        {room.capacity}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-4">
                  <div className="pt-4 border-t border-purple-800/40 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-purple-400 block uppercase">Starting From</span>
                      <span className="font-serif text-lg font-bold text-amber-300">{room.priceEstimate}</span>
                    </div>

                    <button
                      onClick={() => {
                        onNavigate('rooms');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-2 text-xs font-bold text-white bg-purple-800/60 hover:bg-purple-700 border border-purple-500/40 rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <span>View Room</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => {
                onNavigate('rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 text-xs font-bold text-amber-300 bg-purple-900/50 hover:bg-purple-900/80 border border-purple-500/40 rounded-xl transition-all"
            >
              Explore Full Rooms & Suites Details →
            </button>
          </div>

        </div>
      </section>


      {/* SECTION 4 — HOTEL EXPERIENCE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase block">
              GUEST AMENITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Everything You Need for a Pleasant Stay
            </h2>
            <p className="text-sm text-purple-200/80">
              Thoughtfully curated features to ensure your visit is smooth, relaxing, and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOTEL_EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="p-6 rounded-2xl glass-card glass-card-hover border border-purple-800/50 space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-800 to-indigo-950 border border-purple-500/30 flex items-center justify-center shadow-lg">
                  {getIcon(exp.iconName)}
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {exp.title}
                </h3>
                <p className="text-xs text-purple-200/80 leading-relaxed font-light">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 5 — MUDANYA & BURSA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0618] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase block">
                EXPLORE THE REGION
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                Discover Mudanya
              </h2>
            </div>

            <p className="text-base text-purple-200/90 leading-relaxed font-light">
              Stay with us and enjoy the charm of Mudanya and the wider Bursa region, with its coastal atmosphere, local culture, restaurants and beautiful surroundings.
            </p>

            <div className="space-y-3 text-xs text-purple-200/80">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-950/60 border border-purple-800/40">
                <Compass className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Mudanya Coastal Promenade</span>
                  <span>Historic wooden Ottoman houses, seaside cafes, and picturesque Sea of Marmara sunsets.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-950/60 border border-purple-800/40">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Easy Ferry Access</span>
                  <span>Conveniently connected to Istanbul via BUDO & İDO Mudanya sea ferry ports.</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 text-xs font-bold text-indigo-950 bg-gradient-to-r from-amber-300 to-amber-500 rounded-xl shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-indigo-950" />
              <span>Explore Our Location</span>
            </button>
          </div>

          {/* Right Column Grid Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-purple-800/50 shadow-xl aspect-[4/3]">
                <SafeImage
                  src={IMAGES.mudanyaCoast}
                  alt="Mudanya Bursa Coast"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-purple-800/50 shadow-xl aspect-square">
                <SafeImage
                  src={IMAGES.breakfast}
                  alt="Turkish Breakfast Mudanya"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden border border-purple-800/50 shadow-xl aspect-square">
                <SafeImage
                  src={IMAGES.bursaNature}
                  alt="Bursa Türkiye Nature"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-purple-800/50 shadow-xl aspect-[4/3]">
                <SafeImage
                  src={IMAGES.restaurant}
                  alt="Hotel Dining Atmosphere"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 6 — BOOK YOUR STAY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-purple-gold-cta relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 mx-auto shadow-xl">
            <Sparkles className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide">
              Make Your Stay Special
            </h2>
            <p className="text-base sm:text-lg text-purple-100/90 max-w-xl mx-auto font-light leading-relaxed">
              Plan your visit to Mudanya and enjoy a comfortable stay at Grand Rimedya Hotel Mudanya.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-indigo-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-xl shadow-2xl hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-indigo-950" />
              <span>Book Your Stay</span>
            </button>

            <a
              href={`tel:${HOTEL_INFO.rawPhone}`}
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-purple-900/60 hover:bg-purple-800 border border-purple-400/40 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call +90 552 836 8016</span>
            </a>
          </div>

          <div className="pt-6 flex items-center justify-center gap-6 text-xs text-purple-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Direct Front Desk Booking
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Best Price Guarantee
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};
