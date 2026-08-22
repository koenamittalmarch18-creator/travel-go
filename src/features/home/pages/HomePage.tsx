import { Footer } from '../../../components/layout/Footer/Footer';
import { Navbar } from '../../../components/layout/Navbar/Navbar';

import { HeroSection } from '../components/HeroSection/HeroSection';
import { OfferBanner } from '../components/OfferBanner/OfferBanner';
import { PopularDestinations } from '../components/PopularDestinations/PopularDestinations';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { TrustFeatures } from '../components/TrustFeatures/TrustFeatures';
import { WhyChooseUs } from '../components/WhyChooseUs/WhyChooseUs';
import { ChatbotWidget } from '../../chatbot/components/ChatbotWidget/ChatbotWidget';

export function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <TrustFeatures />

        <PopularDestinations />

        <OfferBanner />

        <div className="container-custom">
          <div className="row g-4">
            <div className="col-lg-6">
              <WhyChooseUs />
            </div>

            <div className="col-lg-6">
              <Testimonials />
            </div>
            <div>
            <ChatbotWidget />
            </div>
          </div>
        </div>
      </main>


      <Footer />
    </>
  );
}