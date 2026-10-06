import { Room, CarouselSlide, Amenity, Testimonial } from '../types/hotel';

export const HOTEL_INFO = {
  name: "Vansh Hotel",
  tagline: "A calm, air-conditioned stay on Bharthana Road",
  address: "Vansh Plaza, Bharthana Road, Bidhuna, Auraiya, UP 206243",
  plusCode: "RG32+5C7",
  primaryPhone: "9045555604",
  mobileDisplay: "+91 90455 55604",
  landline: "05681358855",
  landlineDisplay: "05681-358855",
  whatsapp: "9760662179",
  whatsappDisplay: "+91 97606 62179",
  whatsappPhone: "919760662179",
  email: "vanshhotel92@gmail.com",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=26.802919,79.501043",
  justdialUrl: "https://www.justdial.com/Auraiya/Vansh-Hotel-Bidhuna-Bharthana-Road-Bidhuna-Auraiya-Bidhuna/9999P5683-5683-250419084853-M5R5_BZDET",
  embedMapUrl: "https://maps.google.com/maps?q=26.802919,79.501043&hl=en&z=17&output=embed"
};

export const whatsappLink = (text?: string) => {
  const base = `https://wa.me/${HOTEL_INFO.whatsappPhone}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: "slide-1",
    title: "Double Bed Room",
    subtitle: "Double beds, air conditioning, and an attached bathroom.",
    tag: "₹2,500 a night",
    image: "/images/family-grand-suite.jpg",
    roomId: "double-bed",
    ctaText: "Reserve this room"
  },
  {
    id: "slide-2",
    title: "AC Room with Attached Bath",
    subtitle: "Air conditioning, with the bathroom attached to the room.",
    tag: "₹1,500 a night",
    image: "/images/deluxe-room.jpg",
    roomId: "ac-attached",
    ctaText: "Reserve this room"
  },
  {
    id: "slide-3",
    title: "AC Room",
    subtitle: "Air conditioning. The bathroom is not attached.",
    tag: "₹1,000 a night",
    image: "/images/classic-room.jpg",
    roomId: "ac-standard",
    ctaText: "Reserve this room"
  }
];

export const ROOMS: Room[] = [
  {
    id: "double-bed",
    name: "Double Bed Room",
    category: "double",
    tagline: "Double beds, air conditioning, and an attached bathroom",
    price: 2500,
    capacity: "2 Guests",
    bedType: "Double beds",
    size: "Attached bathroom",
    image: "/images/family-grand-suite.jpg",
    gallery: [
      "/images/family-grand-suite.jpg",
      "/images/presidential-gold-suite.jpg",
      "/images/royal-emerald-suite.jpg",
      "/images/maharaja-luxury-room.jpg",
      "/images/executive-timber-room.jpg"
    ],
    description: "A double-bed room with air conditioning and its own attached bathroom. Nightly rate is ₹2,500.",
    highlights: [
      "Double beds",
      "Air conditioning",
      "Attached bathroom"
    ],
    amenities: ["Double beds", "Air conditioning", "Attached bathroom", "24-hour front desk", "Power backup"],
    isFeatured: true
  },
  {
    id: "ac-attached",
    name: "AC Room with Attached Bath",
    category: "attached",
    tagline: "Air conditioning with an attached bathroom",
    price: 1500,
    capacity: "2 Guests",
    bedType: "AC room",
    size: "Attached bathroom",
    image: "/images/deluxe-room.jpg",
    gallery: [
      "/images/deluxe-room.jpg",
      "/images/classic-room.jpg",
      "/images/corridor.jpg"
    ],
    description: "An air-conditioned room with an attached bathroom. Nightly rate is ₹1,500.",
    highlights: [
      "Air conditioning",
      "Attached bathroom"
    ],
    amenities: ["Air conditioning", "Attached bathroom", "24-hour front desk", "Power backup"],
    isFeatured: false
  },
  {
    id: "ac-standard",
    name: "AC Room",
    category: "standard",
    tagline: "Air conditioning. The bathroom is not attached.",
    price: 1000,
    capacity: "2 Guests",
    bedType: "AC room",
    size: "Bathroom not attached",
    image: "/images/classic-room.jpg",
    gallery: [
      "/images/classic-room.jpg",
      "/images/corridor.jpg"
    ],
    description: "An air-conditioned room. The bathroom is not attached to the room. Nightly rate is ₹1,000.",
    highlights: [
      "Air conditioning",
      "Bathroom is not attached"
    ],
    amenities: ["Air conditioning", "Bathroom not attached", "24-hour front desk", "Power backup"],
    isFeatured: false
  }
];

export const GALLERY_ITEMS = [
  { id: "g1", title: "Double Bed Room", category: "Rooms", image: "/images/presidential-gold-suite.jpg" },
  { id: "g2", title: "Ceiling Light Room", category: "Rooms", image: "/images/royal-emerald-suite.jpg" },
  { id: "g3", title: "Double Beds", category: "Rooms", image: "/images/family-grand-suite.jpg" },
  { id: "g4", title: "Marble Accent Room", category: "Rooms", image: "/images/maharaja-luxury-room.jpg" },
  { id: "g5", title: "Timber Room & Seating", category: "Rooms", image: "/images/executive-timber-room.jpg" },
  { id: "g6", title: "Hotel Exterior Facade", category: "Exterior", image: "/images/exterior.jpg" },
  { id: "g7", title: "Royal Reception Desk", category: "Lobby", image: "/images/reception.jpg" },
  { id: "g8", title: "VIP Guests Lounge", category: "Lobby", image: "/images/lounge.jpg" },
  { id: "g9", title: "Grand Room Corridor", category: "Lobby", image: "/images/corridor.jpg" }
];

export const AMENITIES: Amenity[] = [
  {
    icon: "Crown",
    title: "Royal Ambient Lighting",
    description: "Custom LED cove lighting & mood glow in every luxury suite."
  },
  {
    icon: "Snowflake",
    title: "24/7 Air Conditioning",
    description: "Powerful climate control in all rooms day & night."
  },
  {
    icon: "Clock",
    title: "24-Hour Hospitality",
    description: "Round-the-clock desk reception, check-in, and attendant service."
  },
  {
    icon: "Zap",
    title: "100% Power Backup",
    description: "Continuous dual generator setup so your stay remains uninterrupted."
  },
  {
    icon: "Wifi",
    title: "High-Speed Wi-Fi",
    description: "Complimentary high-speed internet across all floors."
  },
  {
    icon: "ShieldCheck",
    title: "CCTV & Security",
    description: "Monitored premises with secure keycard entry & guest safety."
  },
  {
    icon: "Sparkles",
    title: "Immaculate Hygiene",
    description: "Freshly laundered linens, sanitized rooms, and spotless bathrooms."
  },
  {
    icon: "Car",
    title: "Ample Parking",
    description: "Safe & spacious parking space right outside Vansh Plaza."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Sharma",
    location: "Kanpur",
    rating: 5,
    comment: "The double bed room was comfortable, the AC worked through the night, and the attached bathroom was clean. Extremely polite staff.",
    date: "October 2026",
    roomType: "Double Bed Room"
  },
  {
    id: "t2",
    name: "Dr. Alok Verma",
    location: "Etawah",
    rating: 5,
    comment: "Stayed in the double bed room with my family. The room was clean, the bathroom was attached, and the AC worked perfectly.",
    date: "September 2026",
    roomType: "Double Bed Room"
  },
  {
    id: "t3",
    name: "Priya & Amit Singh",
    location: "Lucknow",
    rating: 5,
    comment: "WhatsApp booking was seamless. Instant response from the front desk, a clean AC room, and a great location on Bharthana Road.",
    date: "September 2026",
    roomType: "AC Room with Attached Bath"
  }
];

export const FAQS = [
  {
    q: "How can I book a room instantly?",
    a: "Choose your room and dates, then send the enquiry. It opens a WhatsApp chat with our desk on +91 97606 62179, with your stay details already filled in."
  },
  {
    q: "Is the hotel open 24 hours for check-in?",
    a: "Yes! Our reception is active 24 hours a day, 7 days a week. Whether you arrive late at night or early morning, our staff is ready to welcome you."
  },
  {
    q: "Where is Vansh Hotel located?",
    a: "We are located at Vansh Plaza, Bharthana Road, Bidhuna, Auraiya district, Uttar Pradesh 206243 (Plus code: RG32+5C7)."
  },
  {
    q: "Are all rooms air-conditioned?",
    a: "Yes. Every room is air-conditioned. The ₹2,500 double bed room and the ₹1,500 room have an attached bathroom. The ₹1,000 room is air-conditioned, and the bathroom is not attached."
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept Cash, UPI (GPay, PhonePe, Paytm), and major Bank Transfers at check-in."
  }
];
