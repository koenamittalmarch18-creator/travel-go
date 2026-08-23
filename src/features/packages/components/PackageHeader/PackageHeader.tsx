import { MapPin, Star } from 'lucide-react';

import type { TravelPackage } from '../../types/packages.types';

import styles from './PackageHeader.module.scss';

interface PackageHeaderProps {
  packageItem: TravelPackage;
}

export function PackageHeader({
  packageItem,
}: PackageHeaderProps) {
  return (
    <header className={styles.header}>
      <h1>{packageItem.name}</h1>

      <p className={styles.duration}>
        {packageItem.duration}
      </p>

      <div className={styles.meta}>
        <div className={styles.rating}>
          <Star size={15} fill="currentColor" />
          <strong>4.8</strong>
          <span>128 reviews</span>
        </div>

        <div className={styles.location}>
          <MapPin size={15} />
          <span>{packageItem.destination}</span>
        </div>
      </div>
    </header>
  );
}