import { Footer } from '../../../components/layout/Footer/Footer';
import { Navbar } from '../../../components/layout/Navbar/Navbar';

import { ContactFaq } from '../components/ContactFaq/ContactFaq';
import { ContactHero } from '../components/ContactHero/ContactHero';
import { ContactInformation } from '../components/ContactInformation/ContactInformation';
import { ContactLocation } from '../components/ContactLocation/ContactLocation';
import { ContactMessage } from '../components/ContactMessage/ContactMessage';

import styles from './ContactPage.module.scss';

export function ContactPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main>
        <ContactHero />

        <div className={styles.container}>
          <section className={styles.contactGrid}>
            <ContactInformation />
            <ContactMessage />
          </section>

          <ContactLocation />

          <ContactFaq />
        </div>
      </main>

      <Footer />
    </div>
  );
}