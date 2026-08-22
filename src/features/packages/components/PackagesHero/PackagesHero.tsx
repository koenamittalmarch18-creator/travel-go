import { Link } from 'react-router-dom';

import styles from './PackagesHero.module.scss';

export function PackagesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1>Our Tour Destinations</h1>

        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Destinations</span>
        </div>
      </div>
    </section>
  );
}