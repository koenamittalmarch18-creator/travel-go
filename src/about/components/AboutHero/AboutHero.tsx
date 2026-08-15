import { Link } from 'react-router-dom';

import styles from './AboutHero.module.scss';

export function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </p>

        <h1>About Us</h1>

        <p className={styles.subtitle}>
          Discover the story behind TravelGo and our passion
          for creating unforgettable journeys across India.
        </p>
      </div>
    </section>
  );
}