import { Mail, Send } from 'lucide-react';

import styles from './ContactMessage.module.scss';

export function ContactMessage() {
  return (
    <section className={styles.section}>
      <div className={styles.illustration}>
        <img
          src="/images/contact/contact-message.png"
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.icon}>
          <Mail size={21} />
        </div>

        <h2>Want to send us a message?</h2>

        <p>
          You can reach out to us using the contact details
          provided. Our team will be happy to assist you.
        </p>

        <a
          href="mailto:support@travelgo.com"
          className={styles.link}
        >
          <Send size={16} />
          Email our support team
        </a>
      </div>
    </section>
  );
}