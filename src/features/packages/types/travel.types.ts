export interface TravelDestination {
    id: string;
  
    name: string;
    cardImage: string;
  
    packageName: string;
    duration: string;
    durationDays: number;
    price: number;
    packageImage: string;
    badge?: string;
  
    overview: string;
  
    inclusions: string[];
    exclusions: string[];
    highlights: string[];
    gallery: string[];
  }
  