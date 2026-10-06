import { Room, CarouselSlide, Amenity, Testimonial } from '../types/hotel';

export const HOTEL_INFO = {
  name: "Vansh Hotel & Royal Suites",
  tagline: "Opulent Hospitality & Unmatched Comfort in Bidhuna",
  address: "Vansh Plaza, Bharthana Road, Bidhuna, Auraiya, UP 206243",
  plusCode: "RG32+5C7",
  primaryPhone: "9535047946",
  secondaryPhone: "9756113185",
  whatsappPhone: "919535047946",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=26.802919,79.501043",
  justdialUrl: "https://www.justdial.com/Auraiya/Vansh-Hotel-Bidhuna-Bharthana-Road-Bidhuna-Auraiya-Bidhuna/9999P5683-5683-250419084853-M5R5_BZDET",
  embedMapUrl: "https://maps.google.com/maps?q=26.802919,79.501043&hl=en&z=17&output=embed"
};

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: "slide-1",
    title: "Presidential Gold Suite",
    subtitle: "Features 3D Royal Wall Sculpture, Emerald Velvet Headboard & Ambient Cove Lighting",
    tag: "Crown Luxury",
    image: "/images/presidential-gold-suite.jpg",
    roomId: "presidential-gold",
    ctaText: "Explore Presidential Suite"
  },
  {
    id: "slide-2",
    title: "Royal Emerald Suite",
    subtitle: "Signature Glowing Ceiling LED Lighting Ring & Premium Silk Striped Interior",
    tag: "Royal Ambience",
    image: "/images/royal-emerald-suite.jpg",
    roomId: "royal-emerald",
    ctaText: "View Emerald Suite"
  },
  {
    id: "slide-3",
    title: "Family Grand Double Suite",
    subtitle: "Spacious Twin Double Beds Designed for Family & Group Luxury Comfort",
    tag: "Family Special",
    image: "/images/family-grand-suite.jpg",
    roomId: "family-grand",
    ctaText: "Book Family Suite"
  },
  {
    id: "slide-4",
    title: "Maharaja Luxury Room",
    subtitle: "Dark Italian Marble Accents, Tufted Headboard & Marble Bedside Station",
    tag: "Opulent Stay",
    image: "/images/maharaja-luxury-room.jpg",
    roomId: "maharaja-luxury",
    ctaText: "Book Maharaja Room"
  },
  {
    id: "slide-5",
    title: "Executive Timber Room",
    subtitle: "Warm Teak Wood Wall Panels with Custom Lounge Seating & Modern AC",
    tag: "Executive Comfort",
    image: "/images/executive-timber-room.jpg",
    roomId: "executive-timber",
    ctaText: "Explore Executive Room"
  }
];

export const ROOMS: Room[] = [
  {
    id: "presidential-gold",
    name: "Presidential Gold Suite",
    category: "presidential",
    tagline: "The Pinnacle of Opulence with 3D Relief Artwork & Velvet Headboard",
    price: 1899,
    originalPrice: 2499,
    capacity: "2-3 Guests",
    bedType: "King Size Royal Bed",
    size: "350 sq. ft.",
    image: "/images/presidential-gold-suite.jpg",
    gallery: [
      "/images/presidential-gold-suite.jpg",
      "/images/reception.jpg",
      "/images/lounge.jpg",
      "/images/corridor.jpg"
    ],
    description: "Immerse yourself in supreme grandeur. Features a spectacular 3D gold relief feature wall, emerald velvet tufted headboard, ambient ceiling cove lighting, silent split air conditioning, and luxury marble flooring.",
    highlights: [
      "Signature 3D Gold Wall Sculpture",
      "Plush Emerald Velvet Headboard",
      "Ambient Multi-color Cove Lighting",
      "Marble Bedside Station & Nightstand"
    ],
    amenities: ["Powerful AC", "24/7 Room Service", "High Speed Wi-Fi", "HD Smart TV", "Marble Bath", "Power Backup"],
    isFeatured: true
  },
  {
    id: "maharaja-luxury",
    name: "Maharaja Luxury Room",
    category: "suite",
    tagline: "Rich Dark Marble Aesthetics & Burgundy Padded Headboard",
    price: 1599,
    originalPrice: 1999,
    capacity: "2 Guests",
    bedType: "Royal King Bed",
    size: "300 sq. ft.",
    image: "/images/maharaja-luxury-room.jpg",
    gallery: [
      "/images/maharaja-luxury-room.jpg",
      "/images/lounge.jpg",
      "/images/reception.jpg"
    ],
    description: "Designed for regal tranquility with deep black marble wall stripes, rich burgundy leatherette headboard, polished ceiling panels, and handcrafted nightstand.",
    highlights: [
      "Italian Dark Marble Texture Wall",
      "Burgundy Leatherette Tufted Bed",
      "Vanity Dressing Mirror Console",
      "24h Climate Controlled AC"
    ],
    amenities: ["Air Conditioning", "Dressing Mirror", "24/7 Hot Water", "Marble Nightstand", "Daily Housekeeping"],
    isFeatured: true
  },
  {
    id: "royal-emerald",
    name: "Royal Emerald Suite",
    category: "suite",
    tagline: "Signature Neon Emerald LED Ceiling & Striped Accent Walls",
    price: 1499,
    originalPrice: 1799,
    capacity: "2 Guests",
    bedType: "Queen Comfort Bed",
    size: "280 sq. ft.",
    image: "/images/royal-emerald-suite.jpg",
    gallery: [
      "/images/royal-emerald-suite.jpg",
      "/images/deluxe-room.jpg",
      "/images/lounge.jpg"
    ],
    description: "Features a dramatic neon emerald ceiling halo lighting, double-tone wall paneling, full-length vanity unit with flat TV, and ultra-plush bedding.",
    highlights: [
      "Neon Emerald LED Ceiling Halo",
      "Full Mirror Dressing Station",
      "In-room Wall Mounted TV",
      "Warm Golden Accent Striping"
    ],
    amenities: ["Neon Ceiling Ambient Light", "Flat Screen TV", "AC", "Full Mirror", "Super Soft Blanket"],
    isFeatured: true
  },
  {
    id: "family-grand",
    name: "Family Grand Double Suite",
    category: "family",
    tagline: "Twin King Beds Accommodating up to 4-6 Guests Comfortably",
    price: 2499,
    originalPrice: 2999,
    capacity: "4-6 Guests",
    bedType: "2 Double Beds",
    size: "450 sq. ft.",
    image: "/images/family-grand-suite.jpg",
    gallery: [
      "/images/family-grand-suite.jpg",
      "/images/corridor.jpg",
      "/images/reception.jpg"
    ],
    description: "The ideal choice for families and groups travelling together. Includes two spacious double beds, custom blue padded headboards, dual ceiling fans, green LED mood lights, and room for extra bedding.",
    highlights: [
      "2 Extra Large Double Beds",
      "Sleeps 4 to 6 Guests",
      "Dual Ceiling Fans & AC",
      "Spacious Tile Walkway"
    ],
    amenities: ["Twin Double Beds", "High Capacity AC", "Dual Fans", "24h Room Service", "Private Bathroom"],
    isFeatured: true
  },
  {
    id: "executive-timber",
    name: "Executive Timber Room",
    category: "deluxe",
    tagline: "Teak Wood Paneling with Ergonomic Green Lounge Seating",
    price: 1399,
    originalPrice: 1699,
    capacity: "2 Guests",
    bedType: "Double Bed",
    size: "260 sq. ft.",
    image: "/images/executive-timber-room.jpg",
    gallery: [
      "/images/executive-timber-room.jpg",
      "/images/lounge.jpg"
    ],
    description: "Blends natural wood textures with modern comfort. Outfitted with vertical teak wood style walls, a sleek vanity table, and green accent seating.",
    highlights: [
      "Natural Teak Wood Aesthetic",
      "Accent Armchairs",
      "Quiet Environment",
      "Dedicated Work/Vanity Table"
    ],
    amenities: ["Air Conditioning", "Lounge Chairs", "Dressing Mirror", "Room Service", "Clean Linens"],
    isFeatured: false
  },
  {
    id: "deluxe-ac",
    name: "Deluxe AC Room",
    category: "deluxe",
    tagline: "Teal Headboard & Soft Cove Warm Lighting",
    price: 1299,
    originalPrice: 1499,
    capacity: "2 Guests",
    bedType: "Double Bed",
    size: "240 sq. ft.",
    image: "/images/deluxe-room.jpg",
    gallery: [
      "/images/deluxe-room.jpg",
      "/images/reception.jpg"
    ],
    description: "Relaxing ambiance featuring soft cove lighting, comfortable double bed, clean linen, and efficient air conditioning for guest comfort.",
    highlights: [
      "Quilted Teal Headboard",
      "Warm Recessed Lighting",
      "Silent Split AC",
      "Marble Nightstand"
    ],
    amenities: ["AC", "Double Bed", "Room Service", "24h Check-in", "Clean Bathroom"],
    isFeatured: false
  },
  {
    id: "classic-ac",
    name: "Classic AC Room",
    category: "classic",
    tagline: "Floral Wall Panels & Full Length Mirror",
    price: 1099,
    originalPrice: 1299,
    capacity: "2 Guests",
    bedType: "Double Bed",
    size: "220 sq. ft.",
    image: "/images/classic-room.jpg",
    gallery: [
      "/images/classic-room.jpg",
      "/images/corridor.jpg"
    ],
    description: "Affordable luxury with decorative floral panels, full length mirror, sturdy double bed, and round-the-clock air conditioning.",
    highlights: [
      "Floral Patterned Wall Panels",
      "Full Mirror Console",
      "Compact Comfort Layout"
    ],
    amenities: ["Air Conditioning", "Double Bed", "Mirror", "Fast Room Service", "24 Hours Available"],
    isFeatured: false
  }
];

export const GALLERY_ITEMS = [
  { id: "g1", title: "Presidential Suite 3D Relief", category: "Suites", image: "/images/presidential-gold-suite.jpg" },
  { id: "g2", title: "Royal Emerald Neon Glow", category: "Suites", image: "/images/royal-emerald-suite.jpg" },
  { id: "g3", title: "Family Grand Double Bed Suite", category: "Family", image: "/images/family-grand-suite.jpg" },
  { id: "g4", title: "Maharaja Dark Marble Room", category: "Suites", image: "/images/maharaja-luxury-room.jpg" },
  { id: "g5", title: "Executive Timber Room & Seating", category: "Rooms", image: "/images/executive-timber-room.jpg" },
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
    comment: "The Presidential Gold Suite exceeded all expectations! The ceiling lighting and 3D wall art gave a true 5-star feel right here in Bidhuna. Extremely polite staff.",
    date: "October 2026",
    roomType: "Presidential Gold Suite"
  },
  {
    id: "t2",
    name: "Dr. Alok Verma",
    location: "Etawah",
    rating: 5,
    comment: "Stayed in the Family Grand Suite with my family. Having two big double beds in one spacious room was super convenient. Very clean and AC worked perfectly 24 hours.",
    date: "September 2026",
    roomType: "Family Grand Suite"
  },
  {
    id: "t3",
    name: "Priya & Amit Singh",
    location: "Lucknow",
    rating: 5,
    comment: "WhatsApp booking was seamless! Instant response from the front desk. Loved the neon green LED suite. High quality bedding and great location on Bharthana road.",
    date: "September 2026",
    roomType: "Royal Emerald Suite"
  }
];

export const FAQS = [
  {
    q: "How can I book a room instantly?",
    a: "Click any 'Send WhatsApp Enquiry' button on our website. Your room preference and date details will automatically fill in a WhatsApp message directly to our desk at 95350 47946."
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
    a: "Yes, every single room at Vansh Hotel features dedicated air conditioning with backup power generators."
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept Cash, UPI (GPay, PhonePe, Paytm), and major Bank Transfers at check-in."
  }
];
