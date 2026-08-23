import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { TravelDestination } from '../../../packages/types/travel.types';
import styles from './DestinationCard.module.scss';

interface DestinationCardProps {
  destination: TravelDestination;
}

export function DestinationCard({
  destination,
}: DestinationCardProps) {
return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={destination.cardImage}
          alt={destination.name}
          loading="lazy"
        />

        <span className={styles.location}>
          <MapPin size={14} fill="currentColor" />
          {destination.name}
        </span>
      </div>

      <div className={styles.content}>
        <div>
          <h3>{destination.name}</h3>

          <p>
            Starting from ₹
            {destination.price.toLocaleString('en-IN')}
          </p>
        </div>

        <Link
        to={`/destinations/${destination.id}`}
          className={styles.arrowButton}
          aria-label={`View ${destination.name} packages`}
        >
          <ArrowRight size={19} />
        </Link>
      </div>
    </article>
  );
}