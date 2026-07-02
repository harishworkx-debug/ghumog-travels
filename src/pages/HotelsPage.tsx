import { useState } from 'react';
import { PageHero, CtaBanner } from '../components/ui';
import { HotelCard } from '../components/HotelCard';
import { Reveal } from '../components/Reveal';
import { Link } from '../lib/router';
import { HOTELS, HOTEL_CATEGORIES } from '../lib/data';
import { Search } from 'lucide-react';

export function HotelsPage() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('all');

  const filtered = HOTELS.filter((h) => {
    const matchQ = h.name.toLowerCase().includes(query.toLowerCase()) || h.location.toLowerCase().includes(query.toLowerCase());
    const matchC = cat === 'all' || h.category === cat;
    return matchQ && matchC;
  });

  return (
    <div>
      <PageHero
        title="Our Hotels & Stays"
        subtitle="We book your hotel within your budget."
        image="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Hotels' }]}
      />

      <section className="container-px py-16">
        {/* Search + filter */}
        <div className="glass rounded-3xl p-5 mb-10 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by hotel name or location..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-forest-50 border border-forest-100 focus:border-forest-400 focus:outline-none text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setCat('all')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === 'all' ? 'bg-forest-800 text-white' : 'bg-forest-100 text-forest-700 hover:bg-forest-200'}`}>All</button>
            {HOTEL_CATEGORIES.map((c) => (
              <button key={c.slug} onClick={() => setCat(c.slug)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.slug ? 'bg-forest-800 text-white' : 'bg-forest-100 text-forest-700 hover:bg-forest-200'}`}>
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-forest-500">
            <p className="text-lg">No hotels found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((h, i) => (
              <Reveal key={h.slug} delay={(i % 3) * 100}>
                <HotelCard hotel={h} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <CtaBanner title="Can't Find the Perfect Stay?" text="Tell us what you're looking for and we'll find the ideal Himalayan property for you." />
    </div>
  );
}

export function HotelCategoryPage({ slug }: { slug: string }) {
  const category = HOTEL_CATEGORIES.find((c) => c.slug === slug);
  const hotels = HOTELS.filter((h) => h.category === slug);

  if (!category) return null;

  return (
    <div>
      <PageHero
        title={category.name}
        subtitle={category.tagline}
        image="https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Hotels', to: '/hotels' }, { label: category.name }]}
      />

      <section className="container-px py-16">
        {hotels.length === 0 ? (
          <div className="text-center py-20 text-forest-500">
            <p className="text-lg">More properties coming soon to {category.name}. Contact us for custom stays.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {hotels.map((h, i) => (
              <Reveal key={h.slug} delay={(i % 3) * 100}>
                <HotelCard hotel={h} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <CtaBanner title={`Planning a Trip to ${category.name}?`} text="Let our local experts craft the perfect itinerary for you — stays, transport, and experiences." />
    </div>
  );
}
