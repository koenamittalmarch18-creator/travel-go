import {
    Mail,
    MapPin,
    Phone,
    Users,
  } from 'lucide-react';
  
  import { contactDetails } from '../../data/contact.data';
  
  import styles from './ContactInformation.module.scss';
  
  const icons = {
    phone: Phone,
    email: Mail,
    location: MapPin,
  };
  
  export function ContactInformation() {
    return (
      <section className={styles.section}>
        <div className={styles.header}>
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you!</p>
        </div>
  
        <div className={styles.cards}>
          {contactDetails.map((detail) => {
            const Icon = icons[detail.type];
  
            return (
              <article
                key={detail.type}
                className={styles.card}
              >
                <div className={styles.icon}>
                  <Icon size={22} />
                </div>
  
                <div>
                  <span className={styles.label}>
                    {detail.label}
                  </span>
  
                  <strong>{detail.value}</strong>
  
                  <p>{detail.description}</p>
                </div>
              </article>
            );
          })}
  
          <article className={styles.card}>
            <div className={styles.icon}>
              <Users size={22} />
            </div>
  
            <div>
              <span className={styles.label}>Follow Us</span>
  
              <div className={styles.socials}>
                <a
                  href="#"
                  aria-label="Facebook"
                >
                  f
                </a>
  
                <a
                  href="#"
                  aria-label="Instagram"
                >
                  ◎
                </a>
  
                <a
                  href="#"
                  aria-label="YouTube"
                >
                  ▶
                </a>
  
                <a
                  href="#"
                  aria-label="Twitter"
                >
                  𝕏
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }