import { Headphones } from 'lucide-react';

import styles from './EnquirySidebar.module.scss';

const enquirySteps = [
  'We receive your enquiry',
  'Our travel expert will contact you',
  'Get best package suggestions',
  'Book your dream vacation',
];

export function EnquirySidebar() {
  return (
    <aside className={styles.sidebar}>
      <section className={styles.card}>
        <h2>What happens next?</h2>

        <ol className={styles.steps}>
          {enquirySteps.map((step, index) => (
            <li key={step}>
              <span className={styles.stepNumber}>
                {index + 1}
              </span>

              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.helpCard}>
        <div>
          <h2>Need immediate help?</h2>

          <p>
            Call us at <strong>+91 98765 43210</strong>
          </p>

          <small>Mon - Sun (9AM - 8PM)</small>
        </div>

        <Headphones
          size={23}
          strokeWidth={1.8}
        />
      </section>
    </aside>
  );
}