import { useMemo, useState } from 'react';
import {useNavigate, Link, useParams } from 'react-router-dom';

import { Footer } from '../../../components/layout/Footer/Footer';
import { Navbar } from '../../../components/layout/Navbar/Navbar';

import { travelPackages } from '../../packages/data/packages.data';

import { EnquiryForm } from '../components/EnquiryForm/EnquiryForm';
import { EnquiryPackageSummary } from '../components/EnquiryPackageSummary/EnquiryPackageSummary';
import { EnquirySidebar } from '../components/EnquirySidebar/EnquirySidebar';
import type { EnquiryFormData } from '../types/enquiry.types';

import styles from './EnquiryPage.module.scss';

export function EnquiryPage() {
  const navigate = useNavigate();
  const { packageId } = useParams<{ packageId: string }>();

  const [submitted, setSubmitted] = useState(false);

  const packageItem = useMemo(
    () =>
      travelPackages.find(
        (item) => item.id === packageId,
      ),
    [packageId],
  );

  if (!packageItem) {
    return (
      <>
        <Navbar />

        <main className={styles.notFound}>
          <h1>Package not found</h1>

          <p>
            The package you're trying to enquire about
            could not be found.
          </p>

          <Link to="/destinations">
            Explore Destinations
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  const handleSubmit = async (data: EnquiryFormData) => {
    try {
      const response = await fetch(
        'http://localhost:8080/api/enquiries',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            packageId: packageItem.id,
            ...data,
          }),
        },
      );
  
      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }
  
      setSubmitted(true);
  
      navigate(`/destinations/${packageId}/enquiry/success`, {
        state: {
          packageName: packageItem.name,
        },
      });
    } catch (error) {
      console.error('Enquiry submission failed:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/destinations">
              Enquiry
            </Link>
          </div>

          <header className={styles.header}>
            <h1>Enquire About This Package</h1>

            <p>
              Fill in your details and we'll get back to
              you shortly.
            </p>
          </header>

          {submitted ? (
            <section className={styles.success}>
              <div className={styles.successIcon}>
                ✓
              </div>

              <h2>Enquiry Submitted Successfully!</h2>

              <p>
                Thank you for your interest in{' '}
                <strong>{packageItem.name}</strong>.
                Our travel expert will contact you shortly.
              </p>

              <Link to="/destinations">
                Explore More Destinations
              </Link>
            </section>
          ) : (
            <div className={styles.content}>
              <section className={styles.formCard}>
                <EnquiryPackageSummary
                  packageItem={packageItem}
                />

                <EnquiryForm onSubmit={handleSubmit} />
              </section>

              <EnquirySidebar />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}