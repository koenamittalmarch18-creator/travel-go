import { Search, SlidersHorizontal } from 'lucide-react';

import type {
  PackageFilters as PackageFiltersState,
  PackageSortOption,
} from '../../types/packages.types';

import styles from './PackageFilters.module.scss';

interface PackageFiltersProps {
  filters: PackageFiltersState;
  destinations: string[];
  onChange: (
    key: keyof PackageFiltersState,
    value: string,
  ) => void;
}

const priceOptions = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-10000', label: 'Under ₹10,000' },
  { value: '10000-15000', label: '₹10,000 - ₹15,000' },
  { value: 'above-15000', label: 'Above ₹15,000' },
];

const durationOptions = [
  { value: 'all', label: 'Any Duration' },
  { value: '1-3', label: '1 - 3 Days' },
  { value: '4-5', label: '4 - 5 Days' },
  { value: '6+', label: '6+ Days' },
];

const sortOptions: {
  value: PackageSortOption;
  label: string;
}[] = [
  {
    value: 'popularity',
    label: 'Popularity',
  },
  {
    value: 'price-low',
    label: 'Price: Low to High',
  },
  {
    value: 'price-high',
    label: 'Price: High to Low',
  },
];

export function PackageFilters({
  filters,
  destinations,
  onChange,
}: PackageFiltersProps) {
  return (
    <div className={styles.filters}>
      <div className={styles.filterField}>
        <label htmlFor="package-search">
          Search Packages
        </label>

        <div className={styles.inputWrapper}>
          <Search size={14} />

          <input
            id="package-search"
            type="search"
            value={filters.search}
            onChange={(event) =>
              onChange('search', event.target.value)
            }
            placeholder="Search..."
          />
        </div>
      </div>

      <div className={styles.filterField}>
        <label htmlFor="destination-filter">
          Destination
        </label>

        <select
          id="destination-filter"
          value={filters.destination}
          onChange={(event) =>
            onChange('destination', event.target.value)
          }
        >
          <option value="all">All Destinations</option>

          {destinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterField}>
        <label htmlFor="price-filter">Price Range</label>

        <select
          id="price-filter"
          value={filters.price}
          onChange={(event) =>
            onChange('price', event.target.value)
          }
        >
          {priceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterField}>
        <label htmlFor="duration-filter">Duration</label>

        <select
          id="duration-filter"
          value={filters.duration}
          onChange={(event) =>
            onChange('duration', event.target.value)
          }
        >
          {durationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterField}>
        <label htmlFor="sort-filter">Sort By</label>

        <select
          id="sort-filter"
          value={filters.sortBy}
          onChange={(event) =>
            onChange('sortBy', event.target.value)
          }
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.mobileFilterIcon}>
        <SlidersHorizontal size={15} />
      </div>
    </div>
  );
}