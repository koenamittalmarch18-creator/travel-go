import { Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import { createSlug } from '../../../utils/createSlug';
const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Destinations', path: '/destination' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

const supportLinks = [
  { label: 'FAQ', path: '/faq' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Refund Policy', path: '/refund-policy' },
  { label: 'Contact Support', path: '/contact' },
];

const popularDestinations = [
  'Himachal Pradesh',
  'Kerala',
  'Rajasthan',
  'Uttarakhand',
  'Goa',
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <Plane size={21} />
            TravelGo
          </Link>

          <p>
            Your trusted travel partner for exploring the
            incredible India. Let's make your travel dreams
            come true.
          </p>

          <div className={styles.socials}>
            <button type="button" aria-label="Facebook">
              f
            </button>
            <button type="button" aria-label="Instagram">
              ◎
            </button>
            <button type="button" aria-label="Twitter">
              𝕏
            </button>
            <button type="button" aria-label="YouTube">
              ▶
            </button>
          </div>
        </div>

        <div className={styles.column}>
          <h3>Quick Links</h3>

          {quickLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.column}>
          <h3>Support</h3>

          {supportLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.column}>
          <h3>Popular Destinations</h3>

          {popularDestinations.map((destination) => (
            <Link
              key={destination}
              to={`/destinations/${createSlug(destination)}`}
            >
              {destination}
            </Link>
          ))}
        </div>

        <div className={styles.newsletter}>
          <h3>Newsletter</h3>

          <p>
            Subscribe to get best travel deals and exclusive
            offers.
          </p>

          <form className={styles.form}>
            <label htmlFor="newsletter-email">
              Email address
            </label>

            <div>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
              />

              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2026 TravelGo. All rights reserved.
      </div>
    </footer>
  );
}