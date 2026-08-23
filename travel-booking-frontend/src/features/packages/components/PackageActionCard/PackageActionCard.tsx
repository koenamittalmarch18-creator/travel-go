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

  const handlePayment = async () => {
    try {
      const amountInPaise = packageItem.price * 100;
  
      const response = await fetch(
        `http://localhost:8080/api/payment/create-order?amount=${amountInPaise}`,
        {
          method: 'POST',
        }
      );
  
      if (!response.ok) {
        throw new Error('Failed to create payment order');
      }
  
      const order = await response.json();
  
      console.log('Razorpay order created:', order);

      console.log(
        'Razorpay key:'
      );
      
      const options = {
        
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'TravelGo',
        description: 'Travel Package Payment',
        order_id: order.id,
      
        handler: (paymentResponse: RazorpayResponse) => {
          console.log('Payment successful:', paymentResponse);
        },
      };
      
      const razorpay = new window.Razorpay(options);
      
      razorpay.open();

    } catch (error) {
      console.error('Payment order creation failed:', error);
    }
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
      <button
      type='button'
      onClick={handlePayment}
      className={styles.enquireButton}
      >
        <CreditCard size={17} />
        Pay Now
      </button>

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