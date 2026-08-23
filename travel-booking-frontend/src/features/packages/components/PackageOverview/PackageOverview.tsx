import { Check, X } from 'lucide-react';

import styles from './PackageOverview.module.scss';

interface PackageOverviewProps {
  overview: string;
  inclusions: string[];
  exclusions: string[];
}

export function PackageOverview({
  overview,
  inclusions,
  exclusions,
}: PackageOverviewProps) {
  return (
    <section className={styles.section}>
      <h2>Package Overview</h2>

      <p className={styles.overview}>{overview}</p>

      <div className={styles.divider} />

      <div className={styles.columns}>
        <div>
          <h3>Inclusions</h3>

          <ul>
            {inclusions.map((item) => (
              <li key={item}>
                <Check size={15} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Exclusions</h3>

          <ul>
            {exclusions.map((item) => (
              <li key={item}>
                <X size={15} />
                <span>{item}</span>
              </li>
          ))}
          </ul>
        </div>
      </div>
    </section>
  );
}