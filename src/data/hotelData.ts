import { RoomItem, GalleryImage } from '../types';

import heroImg from '../assets/images/hero_hotel_mudanya_1791021294095.jpg';
import lobbyImg from '../assets/images/about_hotel_lobby_1791021313709.jpg';
import standardRoomImg from '../assets/images/room_standard_1791021328624.jpg';
import deluxeRoomImg from '../assets/images/room_deluxe_1791021346668.jpg';
import suiteRoomImg from '../assets/images/room_suite_1791021360984.jpg';
import mudanyaCoastImg from '../assets/images/mudanya_coastal_1791021376246.jpg';
import bathroomImg from '../assets/images/gallery_bathroom_1791021391334.jpg';
import breakfastImg from '../assets/images/gallery_breakfast_1791021408959.jpg';
import restaurantImg from '../assets/images/gallery_restaurant_1791021431033.jpg';
import bursaNatureImg from '../assets/images/gallery_bursa_nature_1791021449295.jpg';

// Image paths from parallel image imports
export const IMAGES = {
  hero: heroImg,
  lobby: lobbyImg,
  standardRoom: standardRoomImg,
  deluxeRoom: deluxeRoomImg,
  suiteRoom: suiteRoomImg,
  mudanyaCoast: mudanyaCoastImg,
  bathroom: bathroomImg,
  breakfast: breakfastImg,
  restaurant: restaurantImg,
  bursaNature: bursaNatureImg,
};

export const HOTEL_INFO = {
  name: 'GRAND RİMEDYA HOTEL MUDANYA',
  phone: '+90 552 836 8016',
  rawPhone: '+905528368016',
  address: 'Yeni, Bursa Asfaltı Cd. No:140, 16940 Mudanya/Bursa, Türkiye',
  city: 'Mudanya / Bursa',
  country: 'Türkiye',
  locationTag: 'Mudanya • Bursa • Türkiye',
  email: 'info@grandrimedyahotel.com',
  checkInTime: '14:00 PM',
  checkOutTime: '12:00 PM',
  reception: '24/7 Front Desk Service',
};

export const ROOMS_DATA: RoomItem[] = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    category: 'Standard',
    shortDesc: 'Comfortable and stylish accommodation for a relaxing stay.',
    fullDesc: 'Designed with modern elegance and warm tones, our Standard Room offers a serene haven after exploring Mudanya. Ideal for solo travelers or couples seeking a quiet and pleasant retreat.',
    image: IMAGES.standardRoom,
    gallery: [IMAGES.standardRoom, IMAGES.bathroom],
    capacity: 'Up to 2 Guests',
    size: '28 m²',
    bedType: '1 Queen Bed or 2 Twin Beds',
    priceEstimate: '₺ 1,800 / night',
    features: [
      'Comfortable queen bed',
      'Modern elegant interior',
      'Private marble bathroom',
      'Relaxing atmosphere',
    ],
    amenities: [
      'High-Speed Wi-Fi',
      'Individual Air Conditioning',
      'Flat-Screen Smart TV',
      'Minibar & Tea/Coffee Maker',
      'Luxury Bathroom Toiletries',
      'Hair Dryer & Soft Towels',
      'In-Room Safety Safe',
      '24/7 Room Service',
    ],
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    category: 'Deluxe',
    shortDesc: 'More spacious surroundings with an elegant modern atmosphere.',
    fullDesc: 'The Deluxe Room expands your living area with sophisticated furnishings, an inviting seating nook, and expansive windows. Perfect for guests who desire extra space and superior comfort.',
    image: IMAGES.deluxeRoom,
    gallery: [IMAGES.deluxeRoom, IMAGES.bathroom, IMAGES.lobby],
    capacity: 'Up to 3 Guests',
    size: '38 m²',
    bedType: '1 King Bed + Lounge Sofa',
    priceEstimate: '₺ 2,600 / night',
    features: [
      'Spacious layout',
      'Premium furnishings',
      'Comfortable sleeping area',
      'Modern bathroom',
    ],
    amenities: [
      'Panoramic City or Coastal View',
      'Luxury Plush Bathrobes & Slippers',
      'Nespresso Espresso Machine',
      'High-Speed Fiber Wi-Fi',
      'Soundproof Triple-Glazed Windows',
      'Smart Climate Control',
      'Laptop-Sized Digital Safe',
      'Complimentary Bottled Water',
    ],
  },
  {
    id: 'premium-suite',
    name: 'Premium Suite',
    category: 'Suite',
    shortDesc: 'A refined stay with extra comfort and premium details.',
    fullDesc: 'Our crowning jewel, the Premium Suite offers an elevated level of luxury with a king-sized bed, dedicated relaxation salon, lavish marble bath, and tailored hotel amenities for an unforgettable stay in Mudanya.',
    image: IMAGES.suiteRoom,
    gallery: [IMAGES.suiteRoom, IMAGES.bathroom, IMAGES.restaurant],
    capacity: 'Up to 4 Guests',
    size: '54 m²',
    bedType: '1 King Velvet Canopy Bed + Sofabed',
    priceEstimate: '₺ 3,800 / night',
    features: [
      'Elegant spacious design',
      'Premium comfort',
      'Separate relaxing atmosphere',
      'Beautiful hotel-style interior',
    ],
    amenities: [
      'Separate Executive Lounge Area',
      'Deep Soaking Jacuzzi Bath',
      'VIP Welcome Refreshment Basket',
      'Daily Gourmet Breakfast Included',
      'Priority Reception & Concierge',
      'Premium Audio System & Smart TV',
      'Pillow Menu Selection',
      'Turn-down Evening Service',
    ],
  },
];

export const HOTEL_EXPERIENCES = [
  {
    id: 'comfortable-rooms',
    title: 'Comfortable Rooms',
    desc: 'Thoughtfully designed guest rooms with orthopaedic bedding, crisp linens, and quiet soundproofing.',
    iconName: 'BedDouble',
  },
  {
    id: 'breakfast-experience',
    title: 'Breakfast Experience',
    desc: 'Savor rich traditional Turkish breakfast spreads featuring local cheeses, olives, pastries, and fresh tea.',
    iconName: 'Coffee',
  },
  {
    id: 'relaxing-atmosphere',
    title: 'Relaxing Atmosphere',
    desc: 'Calm and sophisticated purple luxury interior design crafted for restful downtime after sightseeing.',
    iconName: 'Sparkles',
  },
  {
    id: 'modern-facilities',
    title: 'Modern Facilities',
    desc: 'High-speed Wi-Fi, climate control, LED smart TVs, and express check-in for seamless hospitality.',
    iconName: 'Wifi',
  },
  {
    id: 'friendly-service',
    title: 'Friendly Service',
    desc: 'Dedicated 24/7 staff welcoming every guest with genuine Turkish warmth and attentiveness.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'convenient-location',
    title: 'Convenient Location',
    desc: 'Situated on Bursa Asfaltı Cd. with easy access to Mudanya seaside promenade, ferry terminals, and Bursa center.',
    iconName: 'MapPin',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Hotel Main Exterior',
    category: 'Exterior',
    url: IMAGES.hero,
    description: 'Modern glass architecture and golden evening illumination of Grand Rimedya Hotel Mudanya.',
    aspectRatio: '16/9',
  },
  {
    id: 'gal-2',
    title: 'Welcoming Hotel Lobby',
    category: 'Exterior',
    url: IMAGES.lobby,
    description: 'Polished marble reception with luxury purple seating and ambient chandeliers.',
    aspectRatio: '4/3',
  },
  {
    id: 'gal-3',
    title: 'Standard Guest Room',
    category: 'Rooms',
    url: IMAGES.standardRoom,
    description: 'Pristine bed setup with royal purple plush accent throw blanket.',
    aspectRatio: '4/3',
  },
  {
    id: 'gal-4',
    title: 'Deluxe Room Suite',
    category: 'Rooms',
    url: IMAGES.deluxeRoom,
    description: 'Spacious guest suite featuring contemporary furniture and panoramic light.',
    aspectRatio: '4/3',
  },
  {
    id: 'gal-5',
    title: 'Premium Suite Canopy Bed',
    category: 'Rooms',
    url: IMAGES.suiteRoom,
    description: 'Luxurious king canopy bedroom with gold finishes and private lounge space.',
    aspectRatio: '4/3',
  },
  {
    id: 'gal-6',
    title: 'Mudanya Sea Coast Promenade',
    category: 'Mudanya',
    url: IMAGES.mudanyaCoast,
    description: 'Historic Ottoman timber architecture along the Sea of Marmara shoreline.',
    aspectRatio: '16/9',
  },
  {
    id: 'gal-7',
    title: 'Marble Bathroom Interior',
    category: 'Rooms',
    url: IMAGES.bathroom,
    description: 'Clean marble bathroom with rain shower and golden luxury fixtures.',
    aspectRatio: '4/3',
  },
  {
    id: 'gal-8',
    title: 'Traditional Turkish Breakfast',
    category: 'Dining',
    url: IMAGES.breakfast,
    description: 'Rich Serpme Kahvaltı breakfast spread with artisanal items and fresh Turkish tea.',
    aspectRatio: '4/3',
  },
  {
    id: 'gal-9',
    title: 'Fine Dining Restaurant',
    category: 'Dining',
    url: IMAGES.restaurant,
    description: 'Atmospheric evening restaurant dining setting with plush seating and soft candlelight.',
    aspectRatio: '4/3',
  },
  {
    id: 'gal-10',
    title: 'Bursa Historic & Natural Scenery',
    category: 'Mudanya',
    url: IMAGES.bursaNature,
    description: 'Scenic view of historic Bursa architecture framed by lush Uludağ green hills.',
    aspectRatio: '4/3',
  },
];
