import { Reveal } from '../components/Reveal';
import { SEOHead } from '../components/SEOHead';
import { HOTELS, BLOGS } from '../lib/data';
import { DESTINATIONS, CITIES, InfoItem } from '../lib/seo-models';
import { Link } from '../lib/router';
import { DynamicBreadcrumbs } from '../components/DynamicBreadcrumbs';
import { Map, BookOpen, Clock, Building, ArrowRight, Sun, Car, Compass, ShoppingBag, Music, Users, DollarSign, Star, Briefcase, AlertCircle, HelpCircle } from 'lucide-react';
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

export function DestinationPage({ slug }: { slug: string }) {
  const destination = DESTINATIONS.find((d) => d.slug === slug);
  if (!destination) return null;

  const destCities = CITIES.filter((c) => c.destinationSlug === slug);
  const destHotels = HOTELS.filter((h) => h.destinationSlug === slug);
  const destBlogs = BLOGS.filter((b) => b.relatedDestinationSlug === slug);

  return (
    <>
      <SEOHead
        title={`${destination.name} Travel Guide & Best Hotels | GhumoG`}
        description={destination.description}
        keywords={`${destination.name} travel, ${destination.name} hotels, ${destination.name} tourism, guide to ${destination.name}`}
      />
      
      <PageHero
        title={`Explore ${destination.name}`}
        subtitle={destination.description}
        image={destHotels[0]?.image || ''}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <DynamicBreadcrumbs items={[
          { label: 'Destinations', to: '/destinations' },
          { label: destination.name }
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          
          <div className="lg:col-span-2">
            <SectionBlock icon={BookOpen} title="History & Culture" content={destination.history ? `${destination.history} ${destination.culture || ''}` : destination.culture} />
            <SectionBlock icon={Sun} title="Weather & Climate" content={destination.weather} />
            <SectionBlock icon={Clock} title="Best Time to Visit" content={destination.bestTimeToVisit} />
            <SectionBlock icon={Car} title="How to Reach" content={destination.howToReach} />

            <GridBlock icon={Compass} title="Top Attractions" items={destination.topAttractions} />
            <GridBlock icon={Map} title="Adventure Activities" items={destination.adventureActivities} />
            <GridBlock icon={ShoppingBag} title="Shopping" items={destination.shopping} />
            <GridBlock icon={Music} title="Nightlife" items={destination.nightlife} />
            <GridBlock icon={Users} title="Family Activities" items={destination.familyActivities} />
            <GridBlock icon={Star} title="Luxury Experiences" items={destination.luxuryExperiences} />

            {destination.suggestedItineraries && destination.suggestedItineraries.length > 0 && (
              <Reveal>
                <div className="mb-12 glass p-8 rounded-3xl">
                  <h2 className="text-2xl font-serif text-forest-900 mb-6 flex items-center gap-2">
                    <Briefcase className="text-gold-500" /> Suggested Itineraries
                  </h2>
                  <div className="space-y-6">
                    {destination.suggestedItineraries.map((itinerary, idx) => (
                      <div key={idx} className="border-l-2 border-gold-500 pl-4">
                        <h4 className="font-semibold text-forest-900">{itinerary.day}</h4>
                        <p className="text-sm text-forest-700 mt-1">{itinerary.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {(destination.budgetTips || destination.travelTips) && (
              <Reveal>
                <div className="mb-12 bg-forest-50 p-8 rounded-3xl">
                  <h2 className="text-2xl font-serif text-forest-900 mb-6 flex items-center gap-2">
                    <DollarSign className="text-gold-500" /> Budget & Travel Tips
                  </h2>
                  <ul className="space-y-3">
                    {[...(destination.budgetTips || []), ...(destination.travelTips || [])].map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-forest-700 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {destination.emergencyInfo && (
              <Reveal>
                <div className="mb-12 bg-red-50 p-6 rounded-2xl border border-red-100 flex items-start gap-4">
                  <AlertCircle className="text-red-500 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-900">Emergency Information</h3>
                    <p className="text-sm text-red-700 mt-1">{destination.emergencyInfo}</p>
                  </div>
                </div>
              </Reveal>
            )}

            {destination.faqs && destination.faqs.length > 0 && (
              <Reveal>
                <div className="mb-12">
                  <h2 className="text-2xl font-serif text-forest-900 mb-6 flex items-center gap-2">
                    <HelpCircle className="text-gold-500" /> Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {destination.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-forest-100">
                        <h4 className="font-semibold text-forest-900 mb-2">{faq.question}</h4>
                        <p className="text-sm text-forest-700">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {destCities.length > 0 && (
              <Reveal>
                <div className="mt-16">
                  <h2 className="text-3xl font-serif text-forest-900 mb-6 flex items-center gap-2">
                    <Map className="text-gold-500" /> Key Cities
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {destCities.map((city) => (
                      <Link key={city.slug} to={`/hotels/${city.slug}`} className="block group glass p-6 rounded-2xl hover:bg-forest-100 transition-colors">
                        <h3 className="text-xl font-serif font-semibold text-forest-900 mb-2 group-hover:text-forest-700">{city.name}</h3>
                        <p className="text-sm text-forest-600 mb-4 line-clamp-2">{city.description}</p>
                        <span className="text-gold-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Explore {city.name} <ArrowRight size={14} />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          <div className="space-y-8">
            {destHotels.length > 0 && (
              <Reveal>
                <div className="bg-forest-900 rounded-3xl p-8 text-white sticky top-24">
                  <h3 className="text-2xl font-serif text-gold-300 mb-6 flex items-center gap-2">
                    <Building size={24} /> Top Hotels
                  </h3>
                  <div className="space-y-6">
                    {destHotels.slice(0, 4).map((hotel) => (
                      <Link key={hotel.slug} to={`/hotels/${hotel.slug}`} className="block group">
                        <div className="flex gap-4 items-center">
                          <img src={hotel.cardImage || hotel.image} alt={hotel.name} className="w-16 h-16 rounded-xl object-cover" />
                          <div>
                            <h4 className="font-serif font-semibold text-white group-hover:text-gold-300 transition-colors line-clamp-1">{hotel.name}</h4>
                            <p className="text-xs text-forest-300">{hotel.location}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link to="/hotels" className="block text-center w-full btn-gold mt-8 py-3">View All Hotels</Link>
                </div>
              </Reveal>
            )}
          </div>

        </div>
      </div>

      {destBlogs.length > 0 && (
        <div className="bg-forest-50 py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <Reveal>
              <h2 className="text-3xl font-serif text-forest-900 mb-10 text-center">Destination Guides</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {destBlogs.map((blog) => (
                <Reveal key={blog.slug}>
                  <Link to={`/blog/${blog.slug}`} className="block group glass p-4 rounded-3xl">
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-forest-900 group-hover:text-forest-700 mb-2">{blog.title}</h3>
                    <p className="text-sm text-forest-600 line-clamp-2">{blog.excerpt}</p>
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
