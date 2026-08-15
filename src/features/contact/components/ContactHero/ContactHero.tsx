import { Clock3, Headphones, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import styles from './ContactHero.module.scss';

export function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Contact Us</span>
        </div>

        <h1>Contact Us</h1>

        <p className={styles.description}>
          We're here to help you plan your perfect trip.
          <br />
          Reach out to our travel experts for any assistance.
        </p>

        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <div className={styles.icon}>
              <Headphones size={23} />
            </div>

            <div>
              <strong>24/7 Support</strong>
              <span>We're always here to help you</span>
            </div>
          </div>

          <div className={styles.highlight}>
            <div className={styles.icon}>
              <Clock3 size={23} />
            </div>

            <div>
              <strong>Quick Response</strong>
              <span>We respond within a few hours</span>
            </div>
          </div>

          <div className={styles.highlight}>
            <div className={styles.icon}>
              <ShieldCheck size={23} />
            </div>

            <div>
              <strong>Trusted Service</strong>
              <span>Thousands of travelers trust TravelGo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}