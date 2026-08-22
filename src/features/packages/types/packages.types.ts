export interface TravelPackage {
    id: string;
    name: string;
    destination: string;
    duration: string;
    durationDays: number;
    price: number;
    image: string;
    badge?: string;
  }
  
  export type PackageSortOption =
    | 'popularity'
    | 'price-low'
    | 'price-high';
  
  export interface PackageFilters {
    search: string;
    destination: string;
    price: string;
    duration: string;
    sortBy: PackageSortOption;
  }