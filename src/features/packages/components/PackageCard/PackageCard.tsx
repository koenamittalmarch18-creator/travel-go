import { Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { TravelPackage } from '../../types/packages.types';

import styles from './PackageCard.module.scss';

interface PackageCardProps {
  packageItem: TravelPackage;
}

export function PackageCard({
  packageItem,
}: PackageCardProps) {
  return (
    <article className={styles.card}>
      <Link
        to={`/destinations/${packageItem.id}`}
        className={styles.imageLink}
      >
        <div className={styles.imageWrapper}>
          <img
            src={packageItem.image}
            alt={packageItem.name}
            loading="lazy"
          />

          {packageItem.badge && (
            <span className={styles.badge}>
              {packageItem.badge}
            </span>
          )}

          <button
            type="button"
            className={styles.favorite}
            aria-label={`Add ${packageItem.name} to favourites`}
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <Heart size={13} />
          </button>

          <span className={styles.location}>
            <MapPin size={11} />
            {packageItem.destination}
          </span>
        </div>
      </Link>

      <div className={styles.content}>
        <Link
          to={`/destinations/${packageItem.id}`}
          className={styles.title}
        >
          {packageItem.name}
        </Link>

        <p className={styles.duration}>
          {packageItem.duration}
        </p>

        <p className={styles.price}>
          ₹{packageItem.price.toLocaleString('en-IN')}
          <span>/ person</span>
        </p>
      </div>
    </article>
  );
}