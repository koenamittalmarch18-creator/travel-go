import type { TravelDestination } from '../../types/travel.types';

import { PackageCard } from '../PackageCard/PackageCard';

import styles from './PackageGrid.module.scss';

interface PackageGridProps {
  packages: TravelDestination[];
}

export function PackageGrid({
  packages,
}: PackageGridProps) {
  if (packages.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>No packages found</h2>
        <p>
          Try changing your search or filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {packages.map((packageItem) => (
        <PackageCard
          key={packageItem.id}
          packageItem={packageItem}
        />
      ))}
    </div>
  );
}