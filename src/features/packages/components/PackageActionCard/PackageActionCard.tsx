import { Mail, Share2, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { TravelPackage } from '../../types/packages.types';

import styles from './PackageActionCard.module.scss';

interface PackageActionCardProps {
  packageItem: TravelPackage;
}

export function PackageActionCard({
  packageItem,
}: PackageActionCardProps) {
  const handleShare = async () => {
    const shareUrl = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: packageItem.name,
        text: `Check out ${packageItem.name} on TravelGo.`,
        url: shareUrl,
      });

      return;
    }

    await navigator.clipboard.writeText(shareUrl);
  };

  return (
    <aside className={styles.card}>
      <div className={styles.price}>
        <span>Starting from</span>

        <div>
          <strong>
            ₹{packageItem.price.toLocaleString('en-IN')}
          </strong>

          <small>/ person</small>
        </div>
      </div>

      <Link
        to={`/destinations/${packageItem.id}/enquiry`}
        className={styles.enquireButton}
      >
        <Mail size={17} />
        Enquire Now
      </Link>
      <Link
        to={`/destinations/${packageItem.id}/payment`}
        className={styles.enquireButton}
      >
        <CreditCard size={17} />
        Pay Now
      </Link>

      <button
        type="button"
        className={styles.shareButton}
        onClick={handleShare}
      >
        <Share2 size={16} />
        Share Package
      </button>
    </aside>
  );
}