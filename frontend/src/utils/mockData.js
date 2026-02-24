// Mock data for Renovations Painting and Masonry Restorations LLC
import { getCloudinaryUrl } from '../config/imageConfig';

export const businessInfo = {
  name: "Renovations Painting and Masonry Restorations LLC",
  shortName: "RPMR LLC",
  phone: "(555) 123-4567",
  email: "info@rpmrllc.com",
  address: "123 Main Street, Springfield, IL 62701",
  serviceArea: "Springfield & Surrounding Areas",
  hours: {
    weekday: "Monday - Friday: 7:00 AM - 6:00 PM",
    saturday: "Saturday: 8:00 AM - 4:00 PM",
    sunday: "Sunday: Closed"
  },
  facebook: "https://facebook.com/rpmrllc",
  license: "License #IL-12345",
  insurance: "Fully Insured"
};

export const services = [
  {
    id: 1,
    title: "Interior Painting",
    icon: "PaintBrush",
    description: "Transform your indoor spaces with precision painting that brings your vision to life.",
    details: "Professional interior painting services for residential and commercial properties. We handle everything from color consultation to final touches.",
    benefits: [
      "Premium quality paints",
      "Clean, professional finish",
      "Minimal disruption to your space",
      "Color consultation included"
    ],
    image: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: 2,
    title: "Exterior Painting",
    icon: "Home",
    description: "Protect and beautify your property with durable exterior painting designed to last.",
    details: "Weather-resistant exterior painting that enhances curb appeal and protects your investment from the elements.",
    benefits: [
      "Weather-resistant coatings",
      "Surface preparation included",
      "Extended warranty available",
      "Increases property value"
    ],
    image: 'https://picsum.photos/600/400?random=11'
  },
  {
    id: 3,
    title: "Masonry Restoration",
    icon: "Hammer",
    description: "Expert restoration of brick, stone, and masonry structures to their original beauty.",
    details: "Comprehensive masonry restoration services including tuckpointing, brick replacement, and structural repairs.",
    benefits: [
      "Preserves structural integrity",
      "Authentic restoration techniques",
      "Prevents further damage",
      "Enhances property appearance"
    ],
    image: 'https://picsum.photos/600/400?random=12'
  },
  {
    id: 4,
    title: "Brick & Stone Repair",
    icon: "Wrench",
    description: "Skilled repair services for damaged or deteriorating brick and stone work.",
    details: "Expert brick and stone repair addressing cracks, chips, water damage, and structural concerns.",
    benefits: [
      "Prevents water infiltration",
      "Matches existing materials",
      "Strengthens structure",
      "Cost-effective solutions"
    ],
    image: 'https://picsum.photos/600/400?random=13'
  },
  {
    id: 5,
    title: "Concrete Repair",
    icon: "Construction",
    description: "Professional concrete repair and restoration for driveways, walkways, and foundations.",
    details: "Complete concrete services including crack repair, resurfacing, and waterproofing solutions.",
    benefits: [
      "Extends concrete lifespan",
      "Improves safety",
      "Prevents further deterioration",
      "Enhances appearance"
    ],
    image: 'https://picsum.photos/600/400?random=14'
  },
  {
    id: 6,
    title: "Full Renovations",
    icon: "HardHat",
    description: "Complete renovation services bringing your entire project from concept to completion.",
    details: "End-to-end renovation management combining all our services for complete property transformation.",
    benefits: [
      "Single point of contact",
      "Coordinated project timeline",
      "Comprehensive solutions",
      "Quality craftsmanship guaranteed"
    ],
    image: 'https://picsum.photos/600/400?random=15'
  }
];

export const galleryProjects = [
  {
    id: 1,
    title: "Exterior Home Painting",
    category: "Painting",
    image: 'https://picsum.photos/600/500?random=1',
    description: "Complete exterior transformation with weather-resistant coating"
  },
  {
    id: 2,
    title: "Historic Brick Restoration",
    category: "Masonry",
    image: 'https://picsum.photos/600/500?random=2',
    description: "Restored 100-year-old brick facade to original condition"
  },
  {
    id: 3,
    title: "Commercial Interior Paint",
    category: "Painting",
    image: 'https://picsum.photos/600/500?random=3',
    description: "Modern office space renovation with custom color palette"
  },
  {
    id: 4,
    title: "Stone Wall Repair",
    category: "Masonry",
    image: 'https://picsum.photos/600/500?random=4',
    description: "Structural stone wall restoration and reinforcement"
  },
  {
    id: 5,
    title: "Residential Renovation",
    category: "Renovation",
    image: 'https://picsum.photos/600/500?random=5',
    description: "Complete home renovation including painting and masonry work"
  },
  {
    id: 6,
    title: "Brick Repair & Tuckpointing",
    category: "Masonry",
    image: 'https://picsum.photos/600/500?random=6',
    description: "Professional tuckpointing and brick restoration services"
  },
  {
    id: 7,
    title: "Professional Painting Job",
    category: "Painting",
    image: 'https://picsum.photos/600/500?random=7',
    description: "High-quality interior and exterior painting services"
  },
  {
    id: 8,
    title: "Construction & Renovation",
    category: "Renovation",
    image: 'https://picsum.photos/600/500?random=8',
    description: "Full-scale renovation project with expert craftsmanship"
  },
  {
    id: 9,
    title: "Exterior House Painting",
    category: "Painting",
    image: 'https://picsum.photos/600/500?random=9',
    description: "Professional exterior painting with ladder work and safety protocols"
  }
];

export const trustBadges = [
  {
    icon: "Shield",
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your protection"
  },
  {
    icon: "DollarSign",
    title: "Free Estimates",
    description: "No-obligation free estimates on all projects"
  },
  {
    icon: "Building",
    title: "Residential & Commercial",
    description: "Serving both residential and commercial clients"
  },
  {
    icon: "Award",
    title: "Experienced Professionals",
    description: "Skilled craftsmen with years of experience"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "John Smith",
    location: "Springfield, IL",
    rating: 5,
    text: "Exceptional work on our home's exterior painting. The team was professional, punctual, and the results exceeded our expectations. Highly recommend!",
    project: "Exterior Painting"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "Springfield, IL",
    rating: 5,
    text: "They restored our historic brick facade beautifully. True craftsmen who take pride in their work. The attention to detail was outstanding.",
    project: "Masonry Restoration"
  },
  {
    id: 3,
    name: "Mike Davis",
    location: "Springfield, IL",
    rating: 5,
    text: "Complete renovation of our commercial property. From start to finish, they delivered quality work on time and within budget. Very satisfied!",
    project: "Full Renovation"
  }
];

export const serviceTypes = [
  "Interior Painting",
  "Exterior Painting",
  "Masonry Restoration",
  "Brick Repair",
  "Stone Repair",
  "Concrete Repair",
  "Full Renovation",
  "Other"
];
