import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import styles from './Testimonials.module.scss';

export function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>What Our Travelers Say</h2>
        </div>

        <div className={styles.testimonial}>
          <button
            type="button"
            className={styles.navigationButton}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className={styles.content}>
            <div className={styles.profile}>
              <div className={styles.avatar}>PS</div>

              <div>
                <h3>Priya Sharma</h3>
                <p>Delhi, India</p>
              </div>

              <div className={styles.rating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>

            <blockquote>
              “TravelGo made our trip absolutely amazing! The
              experience was seamless from booking to the entire
              journey. Highly recommended!”
            </blockquote>
          </div>

          <button
            type="button"
            className={styles.navigationButton}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className={styles.indicators}>
          <span className={styles.active} />
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}