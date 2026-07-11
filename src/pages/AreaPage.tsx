import { Reveal } from '../components/Reveal';
import { HotelCard } from '../components/HotelCard';
import { SEOHead } from '../components/SEOHead';
import { HOTELS } from '../lib/data';
import { AREAS, CITIES, InfoItem } from '../lib/seo-models';
import { Link } from '../lib/router';
import { DynamicBreadcrumbs } from '../components/DynamicBreadcrumbs';
import { MapPin, Info, ArrowLeft, Navigation, Utensils, Coffee, Map, Star, HelpCircle } from 'lucide-react';
import { PageHero } from '../components/ui';

function GridBlock({ icon: Icon, title, items }: { icon: any, title: string, items?: InfoItem[] }) {
  if (!items || items.length === 0) return null;
  return (
    <Reveal>
      <div className="mb-12">
        <h2 className="text-2xl font-serif text-forest-900 mb-6 flex items-center gap-2">
          <Icon className="text-gold-500" /> {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-forest-100 hover:shadow-md transition-shadow">
              <h3 className="font-serif font-semibold text-forest-900 mb-2">{item.name}</h3>
              <p className="text-sm text-forest-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function AreaPage({ slug }: { slug: string }) {
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) return null;

  const city = CITIES.find((c) => c.slug === area.citySlug);
  const areaHotels = HOTELS.filter((h) => h.areaSlug === slug);

  return (
    <>
      <SEOHead
        title={`Hotels in ${area.name}, ${city?.name || ''} | GhumoG`}
        description={area.description}
        keywords={`Hotels in ${area.name}, Stays in ${area.name} ${city?.name}, ${area.name} travel`}
      />
      
      <PageHero
        title={area.name}
        subtitle={`${city?.name ? `A beautiful area in ${city.name}` : ''}`}
        image={areaHotels[0]?.image || ''}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <DynamicBreadcrumbs items={[
          { label: 'Hotels', to: '/hotels' },
          ...(city ? [{ label: city.name, to: `/hotels/${city.slug}` }] : []),
          { label: area.name }
        ]} />

        {city && (
          <Link to={`/hotels/${city.slug}`} className="inline-flex items-center gap-2 text-forest-600 hover:text-gold-600 font-semibold mb-8 transition-colors mt-4">
            <ArrowLeft size={16} /> Back to {city.name}
          </Link>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="bg-forest-50 p-8 rounded-3xl mb-12 border border-forest-100">
                <h2 className="text-2xl font-serif text-forest-900 mb-4">About {area.name}</h2>
                <p className="text-forest-700 leading-relaxed">{area.description}</p>
              </div>
            </Reveal>

            <GridBlock icon={Navigation} title="Nearby Attractions" items={area.nearbyAttractions} />
            <GridBlock icon={Utensils} title="Restaurants" items={area.restaurants} />
            <GridBlock icon={Coffee} title="Cafes" items={area.cafes} />
            <GridBlock icon={Map} title="Adventure Activities" items={area.adventureActivities} />
            <GridBlock icon={Star} title="Things To Do" items={area.thingsToDo} />

            {area.faqs && area.faqs.length > 0 && (
              <Reveal>
                <div className="mb-12">
                  <h2 className="text-2xl font-serif text-forest-900 mb-6 flex items-center gap-2">
                    <HelpCircle className="text-gold-500" /> Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {area.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-forest-100">
                        <h4 className="font-semibold text-forest-900 mb-2">{faq.question}</h4>
                        <p className="text-sm text-forest-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
          
          <div className="space-y-8">
            {area.travelTips && area.travelTips.length > 0 && (
              <Reveal>
                <div className="bg-forest-900 rounded-3xl p-8 text-white sticky top-24">
                  <h3 className="text-2xl font-serif text-gold-300 mb-6 flex items-center gap-2">
                    <Info size={24} /> Travel Tips
                  </h3>
                  <ul className="space-y-4">
                    {area.travelTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-forest-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="flex items-center gap-2 mb-10">
              <MapPin className="text-gold-500" />
              <h2 className="text-3xl font-serif text-forest-900">Hotels in {area.name}</h2>
            </div>
          </Reveal>
          
          {areaHotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {areaHotels.map((hotel) => (
                <Reveal key={hotel.slug}>
                  <HotelCard hotel={hotel} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="text-forest-600">No hotels found in this area yet.</p>
          )}
        </div>
      </div>
    </>
  );
}
