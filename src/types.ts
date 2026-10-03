export type PageRoute = 'home' | 'rooms' | 'gallery' | 'contact';

export interface RoomItem {
  id: string;
  name: string;
  category: 'Standard' | 'Deluxe' | 'Suite';
  shortDesc: string;
  fullDesc: string;
  image: string;
  gallery: string[];
  capacity: string;
  size: string;
  bedType: string;
  priceEstimate: string;
  features: string[];
  amenities: string[];
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Rooms' | 'Exterior' | 'Dining' | 'Mudanya';
  url: string;
  description: string;
  aspectRatio?: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  message: string;
}
