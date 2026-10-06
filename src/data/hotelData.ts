import { Room, CarouselSlide, Amenity, Testimonial } from '../types/hotel';

export const HOTEL_INFO = {
  name: "Vansh Hotel & Suites",
  tagline: "Warm Hospitality & Comfortable Stay in Bidhuna",
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
    title: "Presidential Suite",
    subtitle: "Spacious luxury with 3D relief wall, emerald velvet headboard & warm ambient lighting",
    tag: "Signature Stay",
    image: "/images/presidential-gold-suite.jpg",
    roomId: "presidential-gold",
    ctaText: "View Presidential Suite"
  },
  {
    id: "slide-2",
    title: "Royal Emerald Suite",
    subtitle: "Relaxing ambient ceiling LED halo with cozy striped wall interior",
    tag: "Guest Favorite",
    image: "/images/royal-emerald-suite.jpg",
    roomId: "royal-emerald",
    ctaText: "View Emerald Suite"
  },
  {
    id: "slide-3",
    title: "Family Grand Suite",
    subtitle: "Twin double beds thoughtfully designed for families and group comfort",
    tag: "Family Choice",
    image: "/images/family-grand-suite.jpg",
    roomId: "family-grand",
    ctaText: "Book Family Suite"
  },
  {
    id: "slide-4",
    title: "Maharaja Luxury Room",
    subtitle: "Elegant dark marble accents, tufted headboard & peaceful room setting",
    tag: "Premium Room",
    image: "/images/maharaja-luxury-room.jpg",
    roomId: "maharaja-luxury",
    ctaText: "Book Maharaja Room"
  },
  {
    id: "slide-5",
    title: "Executive Timber Room",
    subtitle: "Teak wood style panelling with comfortable green lounge seating & full AC",
    tag: "Executive Stay",
    image: "/images/executive-timber-room.jpg",
    roomId: "executive-timber",
    ctaText: "View Executive Room"
  }
];

export const ROOMS: Room[] = [
  {
    id: "presidential-gold",
    name: "Presidential Suite",
    category: "presidential",
    tagline: "Our finest spacious suite featuring a 3D feature wall & plush velvet headboard",
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
    description: "Designed for guest comfort and space. Features a beautifully detailed feature wall, plush headboard, soft warm ceiling lighting, quiet air conditioning, and clean marble flooring.",
    highlights: [
      "Custom 3D Feature Wall",
      "Plush Velvet Headboard",
      "Soft Ambient Cove Lighting",
      "Marble Bedside Console"
    ],
    amenities: ["Powerful AC", "24/7 Room Service", "High Speed Wi-Fi", "HD Smart TV", "Marble Bath", "Power Backup"],
    isFeatured: true
  },
  {
    id: "maharaja-luxury",
    name: "Maharaja Room",
    category: "suite",
    tagline: "Dark marble aesthetics with rich tufted headboard & calm lighting",
    price: 1599,
    originalPrice: 1999,
    capacity: "2 Guests",
    bedType: "King Size Bed",
    size: "300 sq. ft.",
    image: "/images/maharaja-luxury-room.jpg",
    gallery: [
      "/images/maharaja-luxury-room.jpg",
      "/images/lounge.jpg",
      "/images/reception.jpg"
    ],
    description: "A peaceful retreat featuring dark marble wall paneling, a comfortable padded headboard, vanity mirror, and round-the-clock air conditioning.",
    highlights: [
      "Dark Marble Wall Panel Accent",
      "Tufted Leatherette Headboard",
      "Full Vanity Dressing Mirror",
      "24h Climate Controlled AC"
    ],
    amenities: ["Air Conditioning", "Dressing Mirror", "24/7 Hot Water", "Marble Nightstand", "Daily Housekeeping"],
    isFeatured: true
  },
  {
    id: "royal-emerald",
    name: "Royal Emerald Suite",
    category: "suite",
    tagline: "Relaxing ambient ceiling lights & elegant striped wall design",
    price: 1499,
    originalPrice: 1799,
    capacity: "2 Guests",
    bedType: "Queen Size Bed",
    size: "280 sq. ft.",
    image: "/images/royal-emerald-suite.jpg",
    gallery: [
      "/images/royal-emerald-suite.jpg",
      "/images/deluxe-room.jpg",
      "/images/lounge.jpg"
    ],
    description: "Features soft emerald ceiling halo lighting, double-tone wall styling, full-length vanity mirror, flat screen TV, and comfortable clean bedding.",
    highlights: [
      "Soft Emerald Ambient Ceiling Light",
      "Full Mirror Dressing Unit",
      "In-room Wall Mounted TV",
      "Warm Accent Striping"
    ],
    amenities: ["Ceiling Ambient Light", "Flat Screen TV", "AC", "Full Mirror", "Soft Clean Linens"],
    isFeatured: true
  },
  {
    id: "family-grand",
    name: "Family Grand Suite",
    category: "family",
    tagline: "Twin double beds comfortably accommodating families up to 6 guests",
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
    description: "The perfect setup for families and traveling groups. Offers two large double beds, padded headboards, dual ceiling fans, dedicated AC, and generous floor space.",
    highlights: [
      "2 Extra Large Double Beds",
      "Comfortably Sleeps 4 to 6 Guests",
      "Dual Ceiling Fans & Full AC",
      "Spacious Tile Walkway"
    ],
    amenities: ["Twin Double Beds", "High Capacity AC", "Dual Fans", "24h Room Service", "Private Bathroom"],
    isFeatured: true
  },
  {
    id: "executive-timber",
    name: "Executive Timber Room",
    category: "deluxe",
    tagline: "Teak wood style panelling with comfortable armchairs",
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
    description: "Combines warm natural wood tones with modern guest conveniences. Features teak wood pattern walls, a mirror dressing table, and comfortable seating.",
    highlights: [
      "Natural Teak Wood Style Wall",
      "Comfortable Armchairs",
      "Quiet & Peaceful Ambience",
      "Dressing Table"
    ],
    amenities: ["Air Conditioning", "Lounge Chairs", "Dressing Mirror", "Room Service", "Clean Linens"],
    isFeatured: false
  },
  {
    id: "deluxe-ac",
    name: "Deluxe AC Room",
    category: "deluxe",
    tagline: "Teal headboard with soft warm lighting",
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
    description: "Cozy and practical for guests seeking a clean, restful room with reliable air conditioning and prompt room service.",
    highlights: [
      "Teal Tufted Headboard",
      "Soft Recessed Lighting",
      "Quiet Split AC",
      "Bedside Station"
    ],
    amenities: ["AC", "Double Bed", "Room Service", "24h Check-in", "Clean Bathroom"],
    isFeatured: false
  },
  {
    id: "classic-ac",
    name: "Classic AC Room",
    category: "classic",
    tagline: "Clean comfortable room with full length mirror & air conditioning",
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
    description: "An affordable, spotless room featuring floral panel accents, a full mirror, sturdy double bed, and 24/7 air conditioning.",
    highlights: [
      "Floral Patterned Accent Panel",
      "Full Length Mirror",
      "Compact & Clean Layout"
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
