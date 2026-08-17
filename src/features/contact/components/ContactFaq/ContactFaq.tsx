import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { contactFaqs } from '../../data/contact.data';

import styles from './ContactFaq.module.scss';

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index,
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2>Frequently Asked Questions</h2>

          <p>Find quick answers to common questions.</p>
        </div>

        <button type="button" className={styles.viewAll}>
          View All FAQs
        </button>
      </div>

      <div className={styles.list}>
        {contactFaqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className={styles.item}
            >
              <button
                type="button"
                className={styles.question}
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>

                <ChevronDown
                  size={17}
                  className={isOpen ? styles.rotate : ''}
                />
              </button>

              {isOpen && (
                <p className={styles.answer}>
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}