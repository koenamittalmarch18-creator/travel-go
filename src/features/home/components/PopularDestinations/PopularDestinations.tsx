import { Link } from 'react-router-dom';

import { DestinationCard } from '../DestinationCard/DestinationCard';
import { travelData } from '../../../packages/data/travel.data';
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
          {travelData.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}