import type {
  HeroSlide,
  DestinationCard,
  ExcursionCard,
  PartnerLogo,
  FooterColumn,
  ContactInfo,
  SocialLink,
} from "@/types/content";

export const heroSlides: HeroSlide[] = [
  {
    title: "Programs & Hotels",
    subtitle:
      "Unveiling Ancient Wonders and Timeless Beauty.\nA Journey through Time and Tranquility",
    ctaText: "Explore Now",
    ctaHref: "/en/ibe",
    backgroundImage: "/images/slides/slider1.jpg",
  },
  {
    title: "Book your next adventure",
    subtitle:
      "Embark on an unforgettable journey through the land of Pharaohs and Pyramids.",
    ctaText: "Explore Now",
    ctaHref: "/en/ibe",
    backgroundImage: "/images/slides/slider2.jpg",
  },
  {
    title: "Journey Through Time",
    subtitle: "Sail the Majestic Nile River aboard our Nile Cruises.",
    ctaText: "Explore Now",
    ctaHref: "/en/ibe",
    backgroundImage: "/images/slides/slider3.jpg",
  },
  {
    title: "Secure Your Stay with Ease",
    subtitle: "Find Your Ideal Accommodation in Egypt",
    ctaText: "Explore Now",
    ctaHref: "/en/hotels-destinations",
    backgroundImage: "/images/slides/slider5.jpg",
  },
  {
    title: "Seamless Travel Experiences Across Egypt's Landscapes",
    subtitle: "Elevating Travel Experiences with our Diverse Fleet in Egypt",
    ctaText: "Explore Now",
    ctaHref: "/en/ibe",
    backgroundImage: "/images/slides/slider4.jpg",
  },
  {
    title: "Welcome Aboard",
    subtitle: "A Luxury aviation experience, tailored to you",
    ctaText: "Explore Now",
    ctaHref: "#",
    backgroundImage: "/images/slides/slider6-privatejet.webp",
  },
  {
    title: "Travel Smart with eSIM",
    subtitle: "Stay connected, wherever you travel, at affordable rates",
    ctaText: "Book Now",
    ctaHref: "#",
    backgroundImage: "/images/slides/slider7-esim.webp",
  },
];

export const destinations: DestinationCard[] = [
  {
    name: "Aswan",
    tourCount: 4,
    image: "/images/destinations/aswan.jpg",
    href: "/en/destination/egypt/aswan",
  },
  {
    name: "Hurghada",
    tourCount: 15,
    image: "/images/destinations/hurghada.jpg",
    href: "/en/destination/egypt/hurghada",
  },
  {
    name: "Sharm El Sheikh",
    tourCount: 13,
    image: "/images/destinations/sharm-el-sheikh.jpg",
    href: "/en/destination/egypt/sharm-el-sheikh",
  },
  {
    name: "Cairo",
    tourCount: 11,
    image: "/images/destinations/cairo.jpg",
    href: "/en/destination/egypt/cairo",
  },
  {
    name: "Luxor",
    tourCount: 10,
    image: "/images/destinations/luxor.jpg",
    href: "/en/destination/egypt/luxor",
  },
  {
    name: "Marsa Alam",
    tourCount: 18,
    image: "/images/destinations/marsa-alam.jpg",
    href: "/en/destination/egypt/marsa-alam",
  },
  {
    name: "Mersa Matruh",
    tourCount: 6,
    image: "/images/destinations/hurghada.jpg",
    href: "/en/destination/egypt/mersa-matruh",
  },
];

export const excursions: ExcursionCard[] = [
  {
    name: "Snorkeling",
    tourCount: 1,
    image: "/images/excursions/snorkeling.jpg",
    href: "/en/travel-idea/snorkeling",
  },
  {
    name: "Luxury & Premium Experiences",
    tourCount: 2,
    image: "/images/excursions/luxury-experiences.jpg",
    href: "/en/travel-idea/luxury-premium-experiences",
  },
  {
    name: "Boat Trips & Luxury Cruises",
    tourCount: 15,
    image: "/images/excursions/cruises-sailing.jpg",
    href: "/en/travel-idea/boat-trips-luxury-cruises",
  },
  {
    name: "Safaris",
    tourCount: 1,
    image: "/images/excursions/safaris.jpg",
    href: "/en/travel-idea/safaris",
  },
  {
    name: "Fast Track & Assistance Services",
    tourCount: 3,
    image: "/images/excursions/airport-services.jpg",
    href: "/en/travel-idea/fast-track-assistance-services",
  },
  {
    name: "Cultural & Historical Tours",
    tourCount: 20,
    image: "/images/excursions/cultural-historical.jpg",
    href: "/en/travel-idea/cultural-historical-tours",
  },
  {
    name: "Adventure & Desert Tours",
    tourCount: 7,
    image: "/images/excursions/adventure-desert.jpg",
    href: "/en/travel-idea/adventure-desert-tours",
  },
  {
    name: "City Breaks",
    tourCount: 2,
    image: "/images/excursions/city-breaks.jpg",
    href: "/en/travel-idea/city-breaks",
  },
  {
    name: "Night Tours & Entertainment",
    tourCount: 5,
    image: "/images/excursions/night-tours.jpg",
    href: "/en/travel-idea/night-tours-entertainment",
  },
  {
    name: "Private Airport Transfers",
    tourCount: 14,
    image: "/images/excursions/transfers.jpg",
    href: "/en/travel-idea/private-airport-transfers",
  },
];

export const partnerLogos: PartnerLogo[] = [
  { name: "IATA", image: "/images/partners/iata.png", alt: "IATA" },
  {
    name: "Italian Chamber",
    image: "/images/partners/italian-chamber.png",
    alt: "The Italian Chamber of Commerce - Egypt",
  },
  { name: "USTOA", image: "/images/partners/ustoa.jpg", alt: "USTOA" },
  { name: "JATA", image: "/images/partners/jata.jpg", alt: "JATA" },
  { name: "NTA", image: "/images/partners/nta.jpg", alt: "NTA" },
  { name: "AHK", image: "/images/partners/ahk.png", alt: "AHK" },
  { name: "AMC", image: "/images/partners/amc.png", alt: "AMC" },
  { name: "DRV", image: "/images/partners/drv.png", alt: "DRV" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Our Services",
    links: [
      { label: "Destination Guide", href: "/en/destination/egypt" },
      { label: "Packages", href: "/en/ibe" },
      { label: "Day Trips & Excursions", href: "/en/excursions" },
      {
        label: "Fast Track & Airport Transfer",
        href: "/en/travel-idea/fast-track-assistance-services",
      },
      {
        label: "Visa Assistance & Meet and Greet",
        href: "/en/travel-idea/fast-track-assistance-services",
      },
    ],
  },
  {
    title: "Top Destinations",
    links: [
      { label: "Aswan", href: "/en/destination/egypt/aswan" },
      { label: "Cairo", href: "/en/destination/egypt/cairo" },
      { label: "Hurghada", href: "/en/destination/egypt/hurghada" },
      { label: "Luxor", href: "/en/destination/egypt/luxor" },
      { label: "Marsa Alam", href: "/en/destination/egypt/marsa-alam" },
      { label: "Mersa Matruh", href: "/en/destination/egypt/mersa-matruh" },
      {
        label: "Sharm El Sheikh",
        href: "/en/destination/egypt/sharm-el-sheikh",
      },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "About Gedotravel", href: "/en/about" },
      { label: "Gedotravel News", href: "/en/news" },
      { label: "International Offices", href: "/en/international-offices" },
      { label: "Affiliated Companies", href: "/en/affiliated-companies" },
      { label: "Contact Us", href: "/en/contact" },
      { label: "Be Our Partner", href: "/en/partner" },
      { label: "Branches", href: "/en/branches" },
      { label: "Destination Handbook", href: "/en/destination-handbook" },
      { label: "Testimonials", href: "/en/testimonials" },
    ],
  },
];

export const contactInfo: ContactInfo = {
  phone: "+20 10 00927322",
  phoneLabel: "Round the clock support",
  email: "info@gedotravel.com",
  emailLabel: "For any inquiries",
  address: "TODO: Gedotravel address",
};

export const socialLinks: SocialLink[] = [
  { platform: "facebook", href: "https://www.facebook.com/share/17R2qTnpnu/", icon: "facebook" },
  { platform: "twitter", href: "#", icon: "twitter" },
  { platform: "instagram", href: "#", icon: "instagram" },
  { platform: "youtube", href: "#", icon: "youtube" },
  { platform: "whatsapp", href: "#", icon: "whatsapp" },
];
