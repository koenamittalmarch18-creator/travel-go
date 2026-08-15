import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { travelPackages } from '../../../packages/data/packages.data';
import {
  CalendarDays,
  ChevronDown,
  MapPin,
  Search,
  Users,
} from 'lucide-react';

import styles from './HeroSection.module.scss';

type DateInputRef = HTMLInputElement & {
  showPicker?: () => void;
};

const formatDate = (date: string): string => {
  if (!date) {
    return 'Select date';
  }

  return new Date(`${date}T00:00:00`).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

export function HeroSection() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [destination, setDestination] = useState('');

  const checkInRef = useRef<DateInputRef | null>(null);
  const checkOutRef = useRef<DateInputRef | null>(null);
  const navigate = useNavigate();

  const openDatePicker = (
    inputRef: React.RefObject<DateInputRef | null>,
  ) => {
    const input = inputRef.current;

    if (!input) {
      return;
    }

    if (input.showPicker) {
      input.showPicker();
      return;
    }

    input.click();
  };
  const handleSearch = () => {
    const searchValue = destination.trim().toLowerCase();

    if (!searchValue) {
      return;
    }

    const matchedPackage = travelPackages.find(
      (pkg) =>
        pkg.destination.toLowerCase().includes(searchValue) ||
        pkg.name.toLowerCase().includes(searchValue),
    );

    if (matchedPackage) {
      navigate(`/destinations/${matchedPackage.id}`);
    } else {
      alert('No package found for this destination');
    }
  };
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>
          <MapPin size={14} />
          Explore India
        </span>

        <h1>
          Explore Incredible
          <br />
          India With Us
        </h1>

        <p>
          Discover unique destinations, amazing packages
          <br className={styles.desktopBreak} />
          and unforgettable experiences.
        </p>

        <div className={styles.searchPanel}>
          {/* Destination */}
          <div className={styles.searchField}>
            <label htmlFor="destination">Where to?</label>

            <div className={styles.fieldValue}>
              <Search size={20} />

              <input
                id="destination"
                type="text"
                placeholder="Search destinations"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          {/* Check In */}
          <div className={styles.searchField}>
            <label htmlFor="check-in">Check In</label>

            <div className={styles.fieldValue}>
              <button
                type="button"
                className={styles.iconButton}
                aria-label="Select check-in date"
                onClick={() => openDatePicker(checkInRef)}
              >
                <CalendarDays size={19} />
              </button>

              <button
                type="button"
                className={styles.dateValue}
                onClick={() => openDatePicker(checkInRef)}
              >
                {formatDate(checkIn)}
              </button>

              <input
                ref={checkInRef}
                id="check-in"
                className={styles.hiddenDateInput}
                type="date"
                value={checkIn}
                onChange={(event) => {
                  setCheckIn(event.target.value);

                  if (
                    checkOut &&
                    event.target.value > checkOut
                  ) {
                    setCheckOut('');
                  }
                }}
              />
            </div>
          </div>

          {/* Check Out */}
          <div className={styles.searchField}>
            <label htmlFor="check-out">Check Out</label>

            <div className={styles.fieldValue}>
              <button
                type="button"
                className={styles.iconButton}
                aria-label="Select check-out date"
                onClick={() => openDatePicker(checkOutRef)}
              >
                <CalendarDays size={19} />
              </button>

              <button
                type="button"
                className={styles.dateValue}
                onClick={() => openDatePicker(checkOutRef)}
              >
                {formatDate(checkOut)}
              </button>

              <input
                ref={checkOutRef}
                id="check-out"
                className={styles.hiddenDateInput}
                type="date"
                min={checkIn || undefined}
                value={checkOut}
                onChange={(event) =>
                  setCheckOut(event.target.value)
                }
              />
            </div>
          </div>

          {/* Travelers */}
          <div className={styles.searchField}>
            <label htmlFor="travelers">Travelers</label>

            <button
              id="travelers"
              type="button"
              className={styles.travelerValue}
            >
              <Users size={20} />
              <span>2 Adults</span>
              <ChevronDown size={16} />
            </button>
          </div>

          <button
            type="button"
            className={styles.searchButton}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}