import { Reveal } from '../components/Reveal';
import { HotelCard } from '../components/HotelCard';
import { SEOHead } from '../components/SEOHead';
import { HOTELS, BLOGS } from '../lib/data';
import { CITIES, AREAS, InfoItem } from '../lib/seo-models';
import { Link } from '../lib/router';
import { DynamicBreadcrumbs } from '../components/DynamicBreadcrumbs';
import { MapPin, Info, Compass, ArrowRight, Sun, Clock, Car, Navigation, Star } from 'lucide-react';
import { PageHero } from '../components/ui';

function SectionBlock({ icon: Icon, title, content }: { icon: any, title: string, content?: string }) {
  if (!content) return null;
  return (
    <Reveal>
      <div className="glass p-8 rounded-3xl mb-8">
        <h2 className="text-2xl font-serif text-forest-900 mb-4 flex items-center gap-2">
          <Icon className="text-gold-500" /> {title}
        </h2>
        <p className="text-forest-700 leading-relaxed">{content}</p>
      </div>
    </Reveal>
  );
}

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

export function CityPage({ slug }: { slug: string }) {
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) return null;

  const cityHotels = HOTELS.filter((h) => h.citySlug === slug);
  const cityAreas = AREAS.filter((a) => a.citySlug === slug);
  const cityBlogs = BLOGS.filter((b) => b.relatedCitySlug === slug);

  return (
    <>
      <SEOHead
        title={`Hotels in ${city.name} - Luxury & Budget Stays | GhumoG`}
        description={city.description}
        keywords={`Hotels in ${city.name}, Best places to stay in ${city.name}, ${city.name} travel guide`}
      />
      <PageHero
        title={`Discover ${city.name}`}
        subtitle={city.description}
        image={cityHotels[0]?.image || ''}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <DynamicBreadcrumbs items={[
          { label: 'Hotels', to: '/hotels' },
          { label: city.name }
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          <div className="lg:col-span-2">
            <SectionBlock icon={Sun} title="Weather & Climate" content={city.weather} />
            <SectionBlock icon={Clock} title="Best Time to Visit" content={city.bestTimeToVisit} />
            <SectionBlock icon={Car} title="Transportation Guide" content={city.transportationGuide} />

            <GridBlock icon={Navigation} title="Nearby Attractions" items={city.nearbyAttractions} />
            <GridBlock icon={Star} title="Things To Do" items={city.thingsToDo} />

            {city.faqs && city.faqs.length > 0 && (
              <Reveal>
                <div className="mb-12">
                  <h2 className="text-2xl font-serif text-forest-900 mb-6 flex items-center gap-2">
                    <Info className="text-gold-500" /> Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {city.faqs.map((faq, idx) => (
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
            {city.travelTips && city.travelTips.length > 0 && (
              <Reveal>
                <div className="bg-forest-900 rounded-3xl p-8 text-white sticky top-24">
                  <h3 className="text-2xl font-serif text-gold-300 mb-6 flex items-center gap-2">
                    <Info size={24} /> Travel Tips
                  </h3>
                  <ul className="space-y-4">
                    {city.travelTips.map((tip, idx) => (
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
              <h2 className="text-3xl font-serif text-forest-900">Featured Hotels in {city.name}</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cityHotels.map((hotel) => (
              <Reveal key={hotel.slug}>
                <HotelCard hotel={hotel} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {cityAreas.length > 0 && (
        <div className="bg-forest-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <Reveal>
              <div className="flex items-center gap-2 mb-10">
                <Compass className="text-gold-500" />
                <h2 className="text-3xl font-serif text-forest-900">Popular Areas in {city.name}</h2>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cityAreas.map((area) => (
                <Reveal key={area.slug}>
                  <Link to={`/hotels/${area.slug}`} className="block group glass p-6 rounded-3xl hover:bg-forest-100 transition-colors">
                    <h3 className="text-xl font-serif text-forest-900 mb-2 group-hover:text-forest-700">{area.name}</h3>
                    <p className="text-sm text-forest-600 mb-4">{area.description}</p>
                    <span className="text-gold-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Hotels <ArrowRight size={14} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      )}

      {cityBlogs.length > 0 && (
        <div className="bg-forest-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <Reveal>
              <h2 className="text-3xl font-serif text-gold-300 mb-10">Travel Guides for {city.name}</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cityBlogs.slice(0, 3).map((blog) => (
                <Reveal key={blog.slug}>
                  <Link to={`/blog/${blog.slug}`} className="block group">
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-white group-hover:text-gold-300 transition-colors">{blog.title}</h3>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
