export interface NavItem {
  label: string;
  href: string;
}

export interface PackageTier {
  name: string;
  price: string;
  unit: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  project: string;
  image: string;      // User avatar
  spaceImage: string; // The interior image associated with the review
}

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}