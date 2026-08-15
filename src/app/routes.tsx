import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '../features/home/pages/HomePage';
import { DestinationPage } from '../features/packages/pages/DestinationPage';
import { EnquiryPage } from '../features/enquiry/pages/EnquiryPage';
import { PackageDetailsPage } from '../features/packages/pages/PackageDetailsPage';
import { AboutPage } from '../about/pages/AboutPage';
import { EnquiryConfirmationPage } from '../features/packages/pages/EnquiryConfirmationPage';


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<DestinationPage />} />
        <Route path="/destinations/:packageId" element={<PackageDetailsPage />} />
        <Route path="/destinations/:packageId/enquiry" element={<EnquiryPage />} />
        <Route path="/destinations/:packageId/enquiry/success" element={<EnquiryConfirmationPage />} />
        <Route path="/about" element={<AboutPage />} />

      </Routes>
    </BrowserRouter>
  );
}