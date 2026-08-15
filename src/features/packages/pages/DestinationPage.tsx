import { useMemo, useState } from 'react';

import { Footer } from '../../../components/layout/Footer/Footer';
import { Navbar } from '../../../components/layout/Navbar/Navbar';

import { CategoryList } from '../components/CategoryList/CategoryList';
import { PackageFilters } from '../components/PackageFilters/PackageFilters';
import { PackageGrid } from '../components/PackageGrid/PackageGrid';
import { PackagesHero } from '../components/PackagesHero/PackagesHero';
import { travelPackages } from '../data/packages.data';
import type {
  PackageFilters as PackageFiltersState,
} from '../types/packages.types';

import styles from './DestinationPage.module.scss';

const categories = [
  'All Packages',
  'Himachal Pradesh',
  'Uttarakhand',
  'Kerala',
  'Rajasthan',
  'North East',
  'Goa',
  'Andaman',
];

const initialFilters: PackageFiltersState = {
  search: '',
  destination: 'all',
  price: 'all',
  duration: 'all',
  sortBy: 'popularity',
};

export function DestinationPage() {
  const [filters, setFilters] =
    useState<PackageFiltersState>(initialFilters);

  const [selectedCategory, setSelectedCategory] =
    useState('All Packages');

  const destinations = useMemo(
    () =>
      Array.from(
        new Set(
          travelPackages.map(
            (packageItem) => packageItem.destination,
          ),
        ),
      ),
    [],
  );

  const filteredPackages = useMemo(() => {
    const result = travelPackages.filter(
      (packageItem) => {
        const searchTerm = filters.search
          .trim()
          .toLowerCase();

        const matchesSearch =
          !searchTerm ||
          packageItem.name
            .toLowerCase()
            .includes(searchTerm) ||
          packageItem.destination
            .toLowerCase()
            .includes(searchTerm);

        const matchesDestination =
          filters.destination === 'all' ||
          packageItem.destination ===
            filters.destination;

        const matchesCategory =
          selectedCategory === 'All Packages' ||
          packageItem.destination === selectedCategory;

        const matchesPrice =
          filters.price === 'all' ||
          (filters.price === 'under-10000' &&
            packageItem.price < 10000) ||
          (filters.price === '10000-15000' &&
            packageItem.price >= 10000 &&
            packageItem.price <= 15000) ||
          (filters.price === 'above-15000' &&
            packageItem.price > 15000);

        const matchesDuration =
          filters.duration === 'all' ||
          (filters.duration === '1-3' &&
            packageItem.durationDays <= 3) ||
          (filters.duration === '4-5' &&
            packageItem.durationDays >= 4 &&
            packageItem.durationDays <= 5) ||
          (filters.duration === '6+' &&
            packageItem.durationDays >= 6);

        return (
          matchesSearch &&
          matchesDestination &&
          matchesCategory &&
          matchesPrice &&
          matchesDuration
        );
      },
    );

    return [...result].sort((a, b) => {
      if (filters.sortBy === 'price-low') {
        return a.price - b.price;
      }

      if (filters.sortBy === 'price-high') {
        return b.price - a.price;
      }

      return 0;
    });
  }, [filters, selectedCategory]);

  const handleFilterChange = (
    key: keyof PackageFiltersState,
    value: string,
  ) => {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    setFilters((current) => ({
      ...current,
      destination:
        category === 'All Packages' ? 'all' : category,
    }));
  };

  return (
    <>
      <Navbar />

      <main>
        <PackagesHero />

        <section className={styles.packages}>
          <div className={styles.container}>
            <PackageFilters
              filters={filters}
              destinations={destinations}
              onChange={handleFilterChange}
            />

            <div className={styles.content}>
              <CategoryList
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={handleCategoryChange}
              />

              <PackageGrid packages={filteredPackages} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}