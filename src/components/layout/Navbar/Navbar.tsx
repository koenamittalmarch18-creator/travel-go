import { Menu, Plane } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Destinations', path: '/destinations' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} aria-label="TravelGo home">
          <Plane size={27} strokeWidth={2.5} />
          <span>TravelGo</span>
        </Link>

        <nav className={styles.navigation} aria-label="Main navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-label="Open navigation menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}