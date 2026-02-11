export interface Project {
  id: string;
  title: string;
  location: string;
  category: "Residential" | "Commercial";
  year: string;
  area: string;
  image: string;
  images: string[];
  description: string;
  concept: string;
  materials: string;
}

export const projects: Project[] = [
  {
    id: "minimalist-villa",
    title: "Minimalist Villa",
    location: "Beverly Hills, CA",
    category: "Residential",
    year: "2024",
    area: "450 m²",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    description: "A stunning minimalist villa that blends contemporary architecture with the natural landscape. The design emphasizes open spaces, clean lines, and an intimate connection between indoor and outdoor living areas.",
    concept: "The design concept revolves around the idea of 'living within nature.' Floor-to-ceiling windows dissolve the boundary between interior and exterior, while the muted material palette ensures the surrounding landscape remains the focal point.",
    materials: "Polished concrete floors, white oak millwork, floor-to-ceiling low-iron glass, natural stone cladding, and integrated LED lighting systems create a warm yet minimal atmosphere throughout the residence.",
  },
  {
    id: "urban-loft",
    title: "Urban Loft Conversion",
    location: "New York, NY",
    category: "Residential",
    year: "2023",
    area: "280 m²",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    ],
    description: "A former industrial warehouse transformed into a luxurious urban residence. The project preserves the raw character of the original structure while introducing refined contemporary elements.",
    concept: "Honoring the building's industrial heritage was paramount. Exposed brick walls, steel beams, and original timber trusses are juxtaposed with bespoke cabinetry, Italian marble, and curated lighting to create a space that is both raw and refined.",
    materials: "Reclaimed timber flooring, exposed steel structure, Calacatta marble countertops, blackened steel fixtures, and custom brass hardware define the material narrative of this conversion.",
  },
  {
    id: "coastal-retreat",
    title: "Coastal Retreat",
    location: "Malibu, CA",
    category: "Residential",
    year: "2023",
    area: "520 m²",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1616137466211-f736a1f6b53e?w=1200&q=80",
    ],
    description: "A serene coastal residence designed to maximize ocean views and natural light. The architecture draws inspiration from the surrounding landscape, creating a seamless transition between built and natural environments.",
    concept: "The concept embraces the Pacific coastline through a series of interconnected pavilions that step down the hillside. Each space frames a unique view, creating an ever-changing relationship with the ocean and sky.",
    materials: "Weathered teak cladding, limestone flooring, frameless glass systems, and a restrained palette of natural textiles ensure the architecture complements rather than competes with its spectacular setting.",
  },
  {
    id: "boutique-hotel",
    title: "Boutique Hotel Lobby",
    location: "Miami, FL",
    category: "Commercial",
    year: "2024",
    area: "800 m²",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
    ],
    description: "A luxury boutique hotel lobby that sets the tone for an unforgettable guest experience. The space combines Art Deco influences with contemporary minimalism to create an atmosphere of understated opulence.",
    concept: "The lobby is conceived as a 'living room for the city' — a place where guests and locals converge. Layered seating arrangements, curated art installations, and a dramatic double-height atrium create a sense of arrival and discovery.",
    materials: "Terrazzo flooring with brass inlays, fluted marble walls, custom upholstery in rich velvets, sculptural lighting fixtures, and living green walls that introduce biophilic elements throughout the space.",
  },
  {
    id: "creative-office",
    title: "Creative Office Space",
    location: "San Francisco, CA",
    category: "Commercial",
    year: "2022",
    area: "1,200 m²",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=80",
    ],
    description: "A forward-thinking office environment designed to foster creativity and collaboration. The space balances open collaborative areas with private focus zones, supporting diverse work styles.",
    concept: "The design creates a 'creative ecosystem' with distinct neighborhoods — from energetic brainstorming zones to contemplative focus pods. A central 'street' connects all areas, encouraging spontaneous interactions.",
    materials: "Acoustic felt panels, birch plywood partitions, polished concrete floors, integrated planting systems, and a carefully designed lighting scheme that supports circadian rhythms throughout the workday.",
  },
  {
    id: "penthouse-suite",
    title: "Penthouse Suite",
    location: "Chicago, IL",
    category: "Residential",
    year: "2024",
    area: "350 m²",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
    description: "A panoramic penthouse that redefines luxury urban living. Perched atop a landmark tower, the residence offers 360-degree city views through wraparound glazing.",
    concept: "The interior architecture is deliberately restrained, allowing the dramatic cityscape to serve as living art. Custom millwork conceals all technology, creating clean sight lines from every vantage point.",
    materials: "Book-matched marble feature walls, engineered wide-plank walnut flooring, bronze-finished steel details, and sheer linen drapery that filters natural light into soft, ambient illumination.",
  },
];
