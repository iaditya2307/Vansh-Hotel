export interface Room {
  id: string;
  name: string;
  category: 'presidential' | 'suite' | 'deluxe' | 'family' | 'classic';
  tagline: string;
  price: number;
  originalPrice?: number;
  capacity: string;
  bedType: string;
  size: string;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  isFeatured?: boolean;
}

export interface CarouselSlide {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  roomId?: string;
  ctaText: string;
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  roomType: string;
}

export interface BookingDetails {
  name: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomId: string;
  note: string;
}
