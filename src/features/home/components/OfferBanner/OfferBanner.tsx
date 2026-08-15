import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import styles from './OfferBanner.module.scss';

export function OfferBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <span className={styles.badge}>
            <Star size={12} fill="currentColor" />
            Best Offers
          </span>

          <h2>
            Get Up To 30% Off
            <br />
            On Your First Booking
          </h2>

          <p>
            Join TravelGo today and unlock exclusive deals
            <br className={styles.desktopBreak} />
            on handpicked travel experiences.
          </p>

          <Link to="/packages" className={styles.button}>
            Explore Packages
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}