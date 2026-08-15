import type { Destination, TrustFeature } from '../types/home.types';

export const popularDestinations: Destination[] = [
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    startingPrice: 6500,
    image: '/images/destinations/himachal.jpg',
  },
  {
    id: 'kerala',
    name: 'Kerala',
    startingPrice: 7500,
    image: '/images/destinations/kerala.jpg',
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    startingPrice: 8500,
    image: '/images/destinations/rajasthan.jpg',
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    startingPrice: 6910,
    image: '/images/destinations/uttarakhand.jpg',
  },
  {
    id: 'goa',
    name: 'Goa',
    startingPrice: 7900,
    image: '/images/destinations/goa.jpg',
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    startingPrice: 9500,
    image: '/images/destinations/ladakh.jpg',
  },
  {
    id: 'manali',
    name: 'Manali',
    startingPrice: 6800,
    image: '/images/destinations/manali.jpg',
  },
  {
    id: 'andaman',
    name: 'Andaman',
    startingPrice: 10200,
    image: '/images/destinations/andaman.jpg',
  },
];

export const trustFeatures: TrustFeature[] = [
  {
    id: 'price',
    title: 'Best Price Guarantee',
    description: 'Get the most competitive prices on all our packages',
    icon: 'shield',
  },
  {
    id: 'booking',
    title: 'Easy Booking',
    description: 'Book your next adventure in just a few clicks',
    icon: 'tag',
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'We are here to assist you anytime, anywhere',
    icon: 'headphones',
  },
  {
    id: 'trusted',
    title: 'Trusted Travel Agency',
    description: 'Thousands of happy travelers and counting',
    icon: 'badge',
  },
];