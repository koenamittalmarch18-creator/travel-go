import { CheckCircle2 } from 'lucide-react';

import styles from './AboutIntro.module.scss';

const highlights = [
  'Trusted Travel Partner',
  'Best Price Guarantee',
  '24/7 Customer Support',
  'Customized Packages',
];

export function AboutIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>ABOUT TRAVELGO</p>

          <h2>
            Making Every Journey
            <span> Worth Remembering</span>
          </h2>

          <p className={styles.description}>
            We are passionate about travel and dedicated to
            providing memorable experiences across India.
            With years of experience in the travel industry,
            we understand that your journey is more than just
            a destination.
          </p>

          <p className={styles.description}>
            From carefully selected hotels and comfortable
            transportation to local experiences and expert
            guidance, we take care of the details so you can
            focus on enjoying your journey.
          </p>

          <ul className={styles.highlights}>
            {highlights.map((highlight) => (
              <li key={highlight}>
                <CheckCircle2 size={18} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src="/images/hero/traveller.jpg"
            alt="Travellers enjoying a mountain destination"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}