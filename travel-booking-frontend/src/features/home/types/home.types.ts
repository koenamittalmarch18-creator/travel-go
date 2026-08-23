export interface Destination {
    id: string;
    name: string;
    startingPrice: number;
    image: string;
  }
  
  export interface TrustFeature {
    id: string;
    title: string;
    description: string;
    icon: 'shield' | 'tag' | 'headphones' | 'badge';
  }