import { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RouterProvider, useRouter } from './lib/router';
import { HomePage } from './pages/HomePage';
import { HotelsPage, HotelCategoryPage } from './pages/HotelsPage';
import { OnlineTransportPage } from './pages/OnlineTransportPage';
import { HotelAccessoriesPage } from './pages/HotelAccessoriesPage';
import { BlogPage, BlogDetailPage } from './pages/BlogPage';
import { VideoTourPage } from './pages/VideoTourPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage, FaqPage, PolicyPage, NotFoundPage } from './pages/MiscPages';
import { HOTELS, HOTEL_CATEGORIES, WHATSAPP, PHONE_TEL } from './lib/data';
import { CITIES, AREAS, DESTINATIONS } from './lib/seo-models';

const HotelDetailPage = lazy(() => import('./pages/HotelDetailPage').then(m => ({ default: m.HotelDetailPage })));
const CityPage = lazy(() => import('./pages/CityPage').then(m => ({ default: m.CityPage })));
const AreaPage = lazy(() => import('./pages/AreaPage').then(m => ({ default: m.AreaPage })));
const DestinationPage = lazy(() => import('./pages/DestinationPage').then(m => ({ default: m.DestinationPage })));

function Routes() {
  const { path } = useRouter();

  const render = () => {
    if (path === '/' || path === '') return <HomePage />;
    if (path === '/hotels') return <HotelsPage />;
    if (path.startsWith('/hotels/')) {
      const slug = path.split('/hotels/')[1];
      const hotel = HOTELS.find((h) => h.slug === slug);
      if (hotel) return <HotelDetailPage slug={slug} />;
      const city = CITIES.find((c) => c.slug === slug);
      if (city) return <CityPage slug={slug} />;
      const area = AREAS.find((a) => a.slug === slug);
      if (area) return <AreaPage slug={slug} />;
      const cat = HOTEL_CATEGORIES.find((c) => c.slug === slug);
      if (cat) return <HotelCategoryPage slug={slug} />;
      return <NotFoundPage />;
    }
    if (path.startsWith('/destinations/')) {
      const slug = path.split('/destinations/')[1];
      const destination = DESTINATIONS.find((d) => d.slug === slug);
      if (destination) return <DestinationPage slug={slug} />;
      return <NotFoundPage />;
    }
    if (path === '/online-transport') return <OnlineTransportPage />;
    if (path === '/hotel-accessories') return <HotelAccessoriesPage />;
    if (path === '/blog') return <BlogPage />;
    if (path.startsWith('/blog/')) return <BlogDetailPage slug={path.split('/blog/')[1]} />;
    if (path === '/video-tour') return <VideoTourPage />;
    if (path === '/contact') return <ContactPage />;
    if (path === '/about') return <AboutPage />;
    if (path === '/faqs') return <FaqPage />;
    if (path === '/privacy-policy') return <PolicyPage title="Privacy Policy" sections={PRIVACY} />;
    if (path === '/terms') return <PolicyPage title="Terms & Conditions" sections={TERMS} />;
    if (path === '/cancellation') return <PolicyPage title="Cancellation Policy" sections={CANCELLATION} />;
    if (path === '/refund') return <PolicyPage title="Refund Policy" sections={REFUND} />;
    return <NotFoundPage />;
  };

  const isHotelLandingPage = (() => {
    if (path.startsWith('/hotels/')) {
      const slug = path.split('/hotels/')[1];
      return HOTELS.some((h) => h.slug === slug);
    }
    return false;
  })();

  return (
    <div className="min-h-screen flex flex-col" style={{ scrollBehavior: 'smooth' }}>
      {!isHotelLandingPage && <Navbar />}
      <main className="flex-1">
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          {render()}
        </Suspense>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3">
      {/* Call */}
      <a
        href={PHONE_TEL}
        aria-label="Call us"
        className="group relative w-14 h-14 rounded-full bg-forest-700 hover:bg-forest-600 shadow-xl shadow-forest-900/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
          <path d="M6.62 10.79a15.45 15.45 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/>
        </svg>
        <span className="absolute right-16 whitespace-nowrap glass text-forest-900 text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow">
          Call Now
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba58] shadow-xl shadow-green-900/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7" fill="white">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.658 4.615 1.805 6.516L4 29l7.697-1.784A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a10.94 10.94 0 0 1-5.516-1.492l-.39-.23-4.569 1.059 1.094-4.441-.255-.405A9.944 9.944 0 0 1 6 15c0-5.514 4.486-10 10-10zm-3.447 5.037c-.198 0-.52.075-.793.374-.274.299-1.045 1.02-1.045 2.487s1.07 2.886 1.219 3.085c.149.198 2.076 3.175 5.065 4.325 2.99 1.15 2.99.766 3.528.718.538-.05 1.736-.71 1.981-1.394.248-.685.248-1.27.173-1.394-.075-.124-.274-.198-.572-.348-.298-.149-1.736-.856-2.005-.953-.274-.099-.473-.149-.672.149-.199.298-.77.953-.942 1.152-.173.199-.348.224-.647.075-.298-.149-1.257-.463-2.394-1.48-.885-.789-1.482-1.764-1.657-2.062-.173-.299-.018-.46.131-.608.132-.132.298-.348.447-.523.149-.174.199-.298.298-.497.1-.199.05-.373-.025-.522-.075-.149-.66-1.618-.906-2.21-.24-.577-.48-.498-.672-.507l-.572-.01z"/>
        </svg>
        <span className="absolute right-16 whitespace-nowrap glass text-forest-900 text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}

const PRIVACY = [
  { heading: 'Information We Collect', body: 'We collect information you provide when booking — name, email, phone, and travel preferences. We also collect basic analytics to improve our services.' },
  { heading: 'How We Use Your Information', body: 'Your information is used solely to process bookings, communicate with you about your trip, and provide better service. We never sell your data to third parties.' },
  { heading: 'Data Security', body: 'We use industry-standard security measures to protect your personal information. Access is restricted to authorised team members only.' },
  { heading: 'Your Rights', body: 'You may request access to, correction of, or deletion of your personal data at any time by contacting us at ghumog.com@gmail.com.' },
];

const TERMS = [
  { heading: 'Bookings', body: 'All bookings are subject to availability. A 25% advance confirms your reservation, with the balance payable on arrival unless otherwise agreed.' },
  { heading: 'Conduct', body: 'Guests are expected to respect property, other guests, and local customs. We reserve the right to refuse service in case of misconduct.' },
  { heading: 'Liability', body: 'GhumoG is not liable for personal injury, loss, or damage to personal property during your stay or travel. We recommend adequate travel insurance.' },
  { heading: 'Changes', body: 'We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the updated terms.' },
];

const CANCELLATION = [
  { heading: 'Free Cancellation', body: 'Cancellations made 7 or more days before check-in are fully refundable with no charges.' },
  { heading: 'Partial Cancellation', body: 'Cancellations within 7 days of check-in are subject to a one-night charge. The remaining advance is refunded.' },
  { heading: 'No-Show', body: 'If you do not arrive without prior notice, the full booking amount will be charged.' },
  { heading: 'Weather Cancellations', body: 'In case of natural calamities or road closures, we offer full rescheduling or refund at no extra cost.' },
];

const REFUND = [
  { heading: 'Refund Timeline', body: 'Approved refunds are processed within 7-10 business days to the original payment method.' },
  { heading: 'Refund Method', body: 'Refunds are issued to the original payment method — UPI, bank transfer, or card.' },
  { heading: 'Non-Refundable Cases', body: 'No-shows, cancellations within 48 hours of check-in, and services already rendered are non-refundable.' },
  { heading: 'Refund Queries', body: 'For any refund-related questions, contact us at ghumog.com@gmail.com or +91 70189 39901.' },
];

export default function App() {
  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  );
}
