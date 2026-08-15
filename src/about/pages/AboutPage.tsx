import { Footer } from '../../components/layout/Footer/Footer';
import { Navbar } from '../../components/layout/Navbar/Navbar';

import { AboutHero } from '../components/AboutHero/AboutHero';
import { AboutIntro } from '../components/AboutIntro/AboutIntro';
import { AboutValues } from '../components/AboutValues/AboutValues';

import styles from './AboutPage.module.scss';

export function AboutPage() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main>
        <AboutHero />
        <AboutIntro />
        <AboutValues />
      </main>

      <Footer />
    </div>
  );
}