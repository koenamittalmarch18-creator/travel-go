import { Navigation } from 'lucide-react';

import styles from './ContactLocation.module.scss';

export function ContactLocation() {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <h2>Our Location</h2>

        <p>
          Visit our office or connect
          <br />
          with us anytime.
        </p>

        <a
          href="https://www.google.com/maps/search/?api=1&query=TravelGo+Tower+Sector+62+Noida"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.directions}
        >
          Get Directions
          <Navigation size={15} />
        </a>
      </div>

      <div className={styles.map}>
        <div className={styles.mapGrid} />

        <div className={styles.pin}>
          <span />
          <strong>TravelGo Office</strong>
        </div>

        <span className={styles.landmarkOne}>
          Sector 62 Metro Station
        </span>

        <span className={styles.landmarkTwo}>
          Logic City Center Mall
        </span>

        <span className={styles.landmarkThree}>
          Fortis Hospital, Noida
        </span>
      </div>
    </section>
  );
}