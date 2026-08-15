import { Link } from 'react-router-dom';

import { popularDestinations } from '../../data/home.data';
import { DestinationCard } from '../DestinationCard/DestinationCard';

import styles from './PopularDestinations.module.scss';

export function PopularDestinations() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2>Popular Destinations</h2>
            <p>Explore most loved destinations across India</p>
          </div>

          <Link to="/destinations" className={styles.viewAll}>
            View All
          </Link>
        </div>

        <div className={styles.grid}>
          {popularDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </section>
  );
}