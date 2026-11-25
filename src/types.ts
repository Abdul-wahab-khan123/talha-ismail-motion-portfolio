export type Category = 
  | 'ALL' 
  | '2D ANIMATION' 
  | 'LOGO ANIMATION' 
  | 'EXPLAINER' 
  | 'TYPOGRAPHY';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: Category;
  categoryDisplay: string;
  year: string;
  client: string;
  role: string;
  shortDesc: string;
  duration: string;
  fps: number;
  tools: string[];
  thumbnail: string;
  videoUrl?: string; // Optional real motion video loop / asset
  aspectRatio?: 'wide' | 'tall' | 'standard';
  overview: string;
  challenge: string;
  concept: string;
  process: string[];
  finalResult: string;
  stats?: { label: string; value: string }[];
  colorPalette?: string[];
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  period: string;
  role: string;
  type: string;
  location: string;
  summary: string;
  highlights: string[];
  toolsUsed: string[];
  featuredPillar: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technique: string;
  metric: string;
}

export interface ProcessStep {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  deliverable: string;
  studioAction: string;
}
