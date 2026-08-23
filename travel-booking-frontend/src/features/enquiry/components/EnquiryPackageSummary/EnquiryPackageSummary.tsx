import { Link } from 'react-router-dom';

import type { TravelPackage } from '../../../packages/types/packages.types';

import styles from './EnquiryPackageSummary.module.scss';

interface EnquiryPackageSummaryProps {
  packageItem: TravelPackage;
}

export function EnquiryPackageSummary({
  packageItem,
}: EnquiryPackageSummaryProps) {
  return (
    <div className={styles.summary}>
      <Link
        to={`/destinations/${packageItem.id}`}
        className={styles.imageWrapper}
      >
        <img
          src={packageItem.image}
          alt={packageItem.name}
        />
      </Link>

      <div className={styles.details}>
        <h2>{packageItem.name}</h2>

        <p>{packageItem.duration}</p>

        <strong>
          ₹{packageItem.price.toLocaleString('en-IN')}
          <span> / person</span>
        </strong>
      </div>
    </div>
  );
}