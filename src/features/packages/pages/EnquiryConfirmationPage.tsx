import {
    Check,
    Clock3,
    FileText,
    Home,
    MapPin,
  } from 'lucide-react';
  import { Link, useLocation } from 'react-router-dom';
  
  import { Footer } from '../../../components/layout/Footer/Footer';
  import { Navbar } from '../../../components/layout/Navbar/Navbar';
  
  import styles from './EnquiryConfirmationPage.module.scss';
  
  interface EnquiryConfirmationState {
    referenceNumber?: string;
    packageName?: string;
    duration?: string;
    packageImage?: string;
  }
  
  const DEFAULT_CONFIRMATION: Required<EnquiryConfirmationState> = {
    referenceNumber: 'ENQ-20260815-001',
    packageName: 'Himachal Explorer',
    duration: '2 Nights / 3 Days',
    packageImage: '/images/destinations/himachal-1.jpg',
  };
  
  export function EnquiryConfirmationPage() {
    const location = useLocation();
  
    const state =
      location.state as EnquiryConfirmationState | null;
  
    const confirmation = {
      ...DEFAULT_CONFIRMATION,
      ...state,
    };
  
    return (
      <div className={styles.page}>
        <Navbar />
  
        <main className={styles.main}>
          <div className={styles.background} />
  
          <section
            className={styles.confirmationCard}
            aria-labelledby="confirmation-title"
          >
            <div className={styles.successIcon}>
              <Check size={44} strokeWidth={3} />
            </div>
  
            <h1 id="confirmation-title">
              Enquiry Sent Successfully!
            </h1>
  
            <p className={styles.message}>
              Thank you for your enquiry. We've received your
              request and our travel expert will contact you
              shortly.
            </p>
  
            <div className={styles.reference}>
              <div className={styles.referenceIcon}>
                <FileText size={21} />
              </div>
  
              <div>
                <span>Enquiry Reference Number</span>
  
                <strong>
                  {confirmation.referenceNumber}
                </strong>
              </div>
            </div>
  
            <div className={styles.packageCard}>
              <img
                src={confirmation.packageImage}
                alt={confirmation.packageName}
              />
  
              <div className={styles.packageInfo}>
                <span className={styles.packageLabel}>
                  Package
                </span>
  
                <h2>{confirmation.packageName}</h2>
  
                <p>{confirmation.duration}</p>
              </div>
            </div>
  
            <div className={styles.responseInfo}>
              <div className={styles.responseIcon}>
                <Clock3 size={21} />
              </div>
  
              <div>
                <strong>Expected Response</strong>
  
                <p>
                  Our team will contact you within{' '}
                  <strong>24 hours.</strong>
                </p>
              </div>
            </div>
  
            <div className={styles.actions}>
              <Link
                to="/"
                className={styles.primaryButton}
              >
                <Home size={18} />
                Back to Home
              </Link>
  
              <Link
                to="/destinations"
                className={styles.secondaryButton}
              >
                <MapPin size={18} />
                View More Destinations
              </Link>
            </div>
          </section>
        </main>
  
        <Footer />
      </div>
    );
  }