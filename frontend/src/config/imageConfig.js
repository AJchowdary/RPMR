/**
 * Cloudinary Image Configuration
 * Cloud Name: dqjkpe5kx
 * All images are served via CDN with optimization
 */

const CLOUD_NAME = 'dqjkpe5kx';

/**
 * Generate Cloudinary URL with optimization parameters
 * @param {string} publicId - Public ID of the image in Cloudinary
 * @param {object} options - Transformation options
 * @returns {string} Optimized Cloudinary URL
 */
export const getCloudinaryUrl = (publicId, options = {}) => {
  const defaults = {
    f: 'auto',
    q: 'auto',
    w: options.w || 600,
    dpr: 'auto',
  };

  const params = { ...defaults, ...options };
  // Cloudinary transformation format: key_value separated by commas
  const transform = Object.entries(params)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transform}/${publicId}`;
};

/**
 * Gallery Images Configuration
 * Organized by category for easy management
 */
export const galleryImages = {
  painting: [
    {
      id: 1,
      publicId: 'rpmr/gallery/exterior-home-painting',
      title: 'Exterior Home Painting',
      description: 'Complete exterior transformation with weather-resistant coating',
      responsive: true,
    },
    {
      id: 3,
      publicId: 'rpmr/gallery/commercial-interior-paint',
      title: 'Commercial Interior Paint',
      description: 'Modern office space renovation with custom color palette',
      responsive: true,
    },
    {
      id: 7,
      publicId: 'rpmr/gallery/professional-painting-job',
      title: 'Professional Painting Job',
      description: 'High-quality interior and exterior painting services',
      responsive: true,
    },
    {
      id: 9,
      publicId: 'rpmr/gallery/exterior-house-painting',
      title: 'Exterior House Painting',
      description: 'Professional exterior painting with ladder work and safety protocols',
      responsive: true,
    },
  ],
  masonry: [
    {
      id: 2,
      publicId: 'rpmr/gallery/historic-brick-restoration',
      title: 'Historic Brick Restoration',
      description: 'Restored 100-year-old brick facade to original condition',
      responsive: true,
    },
    {
      id: 4,
      publicId: 'rpmr/gallery/stone-wall-repair',
      title: 'Stone Wall Repair',
      description: 'Structural stone wall restoration and reinforcement',
      responsive: true,
    },
    {
      id: 6,
      publicId: 'rpmr/gallery/brick-repair-tuckpointing',
      title: 'Brick Repair & Tuckpointing',
      description: 'Professional tuckpointing and brick restoration services',
      responsive: true,
    },
  ],
  renovation: [
    {
      id: 5,
      publicId: 'rpmr/gallery/residential-renovation',
      title: 'Residential Renovation',
      description: 'Complete home renovation including painting and masonry work',
      responsive: true,
    },
    {
      id: 8,
      publicId: 'rpmr/gallery/construction-renovation',
      title: 'Construction & Renovation',
      description: 'Full-scale renovation project with expert craftsmanship',
      responsive: true,
    },
  ],
};

/**
 * Service Images Configuration
 */
export const serviceImages = {
  interiorPainting:
    'rpmr/services/interior-painting',
  exteriorPainting:
    'rpmr/services/exterior-painting',
  masonryRestoration:
    'rpmr/services/masonry-restoration',
  brickStoneRepair:
    'rpmr/services/brick-stone-repair',
  concreteRepair:
    'rpmr/services/concrete-repair',
  fullRenovations:
    'rpmr/services/full-renovations',
};

/**
 * Hero Section Images
 */
export const heroImages = {
  home: 'rpmr/hero/home-hero',
  services: 'rpmr/hero/services-hero',
  gallery: 'rpmr/hero/gallery-hero',
  contact: 'rpmr/hero/contact-hero',
  about: 'rpmr/hero/about-hero',
};

/**
 * Utility function to get responsive image srcset
 * @param {string} publicId - Cloudinary public ID
 * @param {number} maxWidth - Maximum width for largest screen
 * @returns {string} srcset string for responsive images
 */
export const getResponsiveImageSrcSet = (publicId, maxWidth = 1200) => {
  const widths = [400, 600, 800, 1000, maxWidth];
  return widths
    .map(
      (width) =>
        `${getCloudinaryUrl(publicId, { w: width })} ${width}w`
    )
    .join(', ');
};

/**
 * Get all gallery projects with images
 */
export const getGalleryProjects = () => {
  const allProjects = [
    ...galleryImages.painting.map((img) => ({
      ...img,
      category: 'Painting',
    })),
    ...galleryImages.masonry.map((img) => ({
      ...img,
      category: 'Masonry',
    })),
    ...galleryImages.renovation.map((img) => ({
      ...img,
      category: 'Renovation',
    })),
  ];

  // Sort by ID to maintain original order
  return allProjects.sort((a, b) => a.id - b.id);
};
