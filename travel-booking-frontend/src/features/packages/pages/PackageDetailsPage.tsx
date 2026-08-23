import { Link, useParams } from 'react-router-dom';

import { Footer } from '../../../components/layout/Footer/Footer';
import { Navbar } from '../../../components/layout/Navbar/Navbar';

import { packageDetails } from '../data/packageDetails.data';
import { travelPackages } from '../data/packages.data';

import { PackageActionCard } from '../components/PackageActionCard/PackageActionCard';
import { PackageGallery } from '../components/PackageGallery/PackageGallery';
import { PackageHeader } from '../components/PackageHeader/PackageHeader';
import { PackageOverview } from '../components/PackageOverview/PackageOverview';
import { TripHighlights } from '../components/TripHighlights/TripHighlights';

import styles from './PackageDetailsPage.module.scss';

export function PackageDetailsPage() {
  const { packageId } = useParams<{
    packageId: string;
  }>();

  const packageItem = travelPackages.find(
    (item) => item.id === packageId,
  );

  const details = packageId
    ? packageDetails[packageId]
    : undefined;

  if (!packageItem || !details) {
    return (
      <>
        <Navbar />

        <main className={styles.notFound}>
          <h1>Package not found</h1>

          <p>
            We couldn't find the package you're looking
            for.
          </p>

          <Link to="/destinations">
            Explore Destinations
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <div className={styles.container}>
          <nav
            className={styles.breadcrumb}
            aria-label="Breadcrumb"
          >
            <Link to="/">Home</Link>

            <span>/</span>

            <Link to="/destinations">
              Destinations
            </Link>

            <span>/</span>

            <span>{packageItem.name}</span>
          </nav>

          <div className={styles.layout}>
            <div className={styles.mainContent}>
              <PackageHeader
                packageItem={packageItem}
              />

              <PackageGallery
                images={details.gallery}
                packageName={packageItem.name}
              />

              <PackageOverview
                overview={details.overview}
                inclusions={details.inclusions}
                exclusions={details.exclusions}
              />

              <TripHighlights
                highlights={details.highlights}
              />
            </div>

            <PackageActionCard
              packageItem={packageItem}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}