import { PageHero, CtaBanner } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { Gallery } from '../components/Gallery';
import { Link } from '../lib/router';
import { HOTELS, HOTEL_CATEGORIES, WHATSAPP, PHONE_TEL, TAGLINES } from '../lib/data';
import { Star, MapPin, Check, ArrowRight, Wifi, Coffee, Car, Flame, Mountain, Utensils, ShieldCheck, Home, Trees, Sparkles, CloudSun } from 'lucide-react';

const amenityIcon: Record<string, typeof Wifi> = {
  'Free WiFi': Wifi, 'Breakfast': Coffee, 'Parking': Car, 'Bonfire': Flame,
  'Mountain View': Mountain, 'Heater': Flame, 'Room Service': Utensils, 'Restaurant': Utensils,
  'Homely Food on Request': Utensils, 'Free Parking': Car, 'Hot Water': Flame, 'Meals': Utensils,
  'Nature Views': Mountain, 'Swimming Pool': Mountain, 'Peaceful Stay': Sparkles,
};

const highlightIcon: Record<string, typeof Wifi> = {
  'Scenic Views': Mountain, 'Premium Stay': Sparkles, 'Wooden Rooms': Home, 'Terrace Rooms': Home,
  'Comfort & Luxury': Sparkles, 'Peaceful Stay': Sparkles, 'Family & Couple Friendly': Home,
  'Homely Hospitality': Home, 'Homely Food on Request': Utensils, 'Bonfire on Request': Flame,
  'Free Parking': Car, 'Safe & Secure Environment': ShieldCheck, 'Best Budget Options': Check,
  'Special Discounts': Check, 'Safe, Reliable & Trusted': ShieldCheck,
  'Camping Experience': Trees, 'Swimming Pool': Mountain, 'Nature Views': Mountain,
  'Outdoor Stay': Trees, 'Comfortable Rooms': Home,
};

export function HotelDetailPage({ slug }: { slug: string }) {
  const hotel = HOTELS.find((h) => h.slug === slug);
  if (!hotel) return null;

  const related = HOTELS.filter((h) => h.category === hotel.category && h.slug !== hotel.slug).slice(0, 3);

  return (
    <div>
      <PageHero
        title={hotel.name}
        subtitle={`${hotel.location} · ${hotel.tagline}`}
        image={hotel.image}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Hotels', to: '/hotels' }, { label: hotel.name }]}
      />

      <section className="container-px py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-sm font-semibold text-forest-800">
                  <Star size={14} className="fill-gold-500 text-gold-500" /> {hotel.rating}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-forest-600">
                  <MapPin size={14} /> {hotel.location}
                </div>
                <div className="text-sm font-serif italic text-gold-700">{hotel.tagline}</div>
              </div>
              <div className="mb-8">
                {(() => {
                  const category = HOTEL_CATEGORIES.find((c) => c.slug === hotel.category);
                  const query = category?.weatherQuery || `${hotel.location} Weather`;
                  const label = category ? `Check ${query}` : `Check Weather`;
                  return (
                    <a
                      href={`https://www.google.com/search?q=${encodeURIComponent(query)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold inline-flex items-center gap-2 text-sm"
                    >
                      <CloudSun size={18} />
                      {label}
                    </a>
                  );
                })()}
              </div>
              <p className="text-lg text-forest-700 leading-relaxed mb-8">{hotel.description}</p>
            </Reveal>

            {/* Highlights */}
            <Reveal>
              <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-5">Highlights</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                {hotel.highlights.map((h) => {
                  const Icon = highlightIcon[h] || Check;
                  return (
                    <div key={h} className="flex items-center gap-2.5 glass rounded-xl px-4 py-3 text-sm text-forest-800">
                      <Icon size={16} className="text-gold-600 shrink-0" /> {h}
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Amenities */}
            <Reveal>
              <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-5">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                {hotel.amenities.map((a) => {
                  const Icon = amenityIcon[a] || Check;
                  return (
                    <div key={a} className="flex items-center gap-2.5 glass rounded-xl px-4 py-3 text-sm text-forest-800">
                      <Icon size={16} className="text-forest-600" /> {a}
                    </div>
                  );
                })}
              </div>
            </Reveal>

          
          </div>
          

          {/* Booking card */}
          <div className="lg:col-span-1">
            <Reveal>
              <div className="glass rounded-3xl p-6 sticky top-28">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-serif font-bold text-forest-900">₹{hotel.price.toLocaleString('en-IN')}</span>
                  <span className="text-sm text-forest-500">/night</span>
                </div>
                <div className="text-sm text-forest-500 mb-6">Taxes included · Free cancellation up to 7 days</div>

                <div className="space-y-3 mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-forest-500">Check-in</label>
                      <input type="date" className="w-full mt-1 px-3 py-2 rounded-xl bg-forest-50 border border-forest-100 focus:border-forest-400 focus:outline-none text-sm" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-forest-500">Check-out</label>
                      <input type="date" className="w-full mt-1 px-3 py-2 rounded-xl bg-forest-50 border border-forest-100 focus:border-forest-400 focus:outline-none text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wide text-forest-500">Guests</label>
                    <select className="w-full mt-1 px-3 py-2 rounded-xl bg-forest-50 border border-forest-100 focus:border-forest-400 focus:outline-none text-sm">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                </div>

                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold w-full mb-3 fs-16 flex items-center justify-cente">
                  Check Availability <ArrowRight size={16} />
                </a>
                <a href={PHONE_TEL} className="btn-outline w-full">Call to Book</a>

                <p className="text-xs text-forest-500 text-center mt-4">No payment needed now — confirm via WhatsApp.</p>
              </div>
            </Reveal>
          </div>
        </div>

          {/* Gallery */}
            <Reveal>
              <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-2">Photo Gallery</h2>
              <p className="text-sm text-forest-500 mb-6">Click any photo to view full screen · Use arrow keys to navigate · Click image to zoom</p>
              <Gallery images={hotel.gallery} categories={hotel.galleryCategories} title={hotel.name} />
            </Reveal>

            {/* About */}
            <Reveal>
              <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-5 mt-12">About This Stay</h2>
              <div className="space-y-4 text-forest-700 leading-relaxed">
                <p>Nestled in {hotel.location}, {hotel.name} offers a serene retreat far from the noise of city life. {hotel.tagline} — this is more than a slogan, it is how we host every guest.</p>
                <p>Our property is designed for comfort and tranquility, with thoughtfully appointed rooms, attentive hospitality, and authentic local cuisine. Whether you're seeking adventure or simply a peaceful escape, {hotel.name} is your perfect Himalayan home base.</p>
                <p>As part of the GhumoG family, we can arrange local sightseeing, trekking, taxi services, and bike rentals to make your stay effortless. {TAGLINES.family} — just ask, we're here to help you explore.</p>
              </div>
            </Reveal>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-forest-900">You May Also Like</h2>
              <Link to="/hotels" className="text-sm font-semibold text-forest-700 hover:text-gold-600 flex items-center gap-1">
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {related.map((h, i) => (
                <Reveal key={h.slug} delay={i * 100}>
                  <Link to={`/hotels/${h.slug}`} className="group glass rounded-3xl overflow-hidden card-hover block">
                    <div className="h-52 overflow-hidden">
                      <img src={h.image} alt={h.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-forest-500 mb-1.5"><MapPin size={12} /> {h.location}</div>
                      <h3 className="text-lg font-serif font-semibold text-forest-900 group-hover:text-forest-700">{h.name}</h3>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-gold-600 font-semibold">₹{h.price.toLocaleString('en-IN')}<span className="text-xs text-forest-500 font-normal">/night</span></span>
                        <span className="flex items-center gap-1 text-sm text-forest-700"><Star size={12} className="fill-gold-500 text-gold-500" /> {h.rating}</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </section>

      <CtaBanner title="Ready to Book Your Stay?" text={`Reserve ${hotel.name} now or ask us anything — we respond within minutes on WhatsApp.`} />
    </div>
  );
}
