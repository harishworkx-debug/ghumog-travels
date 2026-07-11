
import { Reveal } from '../components/Reveal';
import { Gallery } from '../components/Gallery';
import { Link } from '../lib/router';
import { HOTELS, HOTEL_CATEGORIES, WHATSAPP, PHONE_TEL } from '../lib/data';
import { Star, MapPin, Check, ArrowRight, Wifi, Coffee, Car, Flame, Mountain, Utensils, ShieldCheck, Home, Trees, Sparkles, CloudSun, Users, Phone, MessageCircle, Quote } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { FAQAccordion } from '../components/FAQAccordion';
import { HotelNavbar } from '../components/HotelNavbar';
import { DynamicBreadcrumbs } from '../components/DynamicBreadcrumbs';
import { DESTINATIONS, CITIES, AREAS } from '../lib/seo-models';
import { generateRelatedBlogs } from '../lib/seo-engine';

const amenityIcon: Record<string, typeof Wifi> = {
  'Free WiFi': Wifi, 'Breakfast': Coffee, 'Parking': Car, 'Bonfire': Flame,
  'Mountain View': Mountain, 'Restaurant': Utensils, 'Security': ShieldCheck,
  'Room Service': Home, 'Garden': Trees, 'Daily Housekeeping': Sparkles,
};

export function HotelDetailPage({ slug }: { slug: string }) {
  const hotel = HOTELS.find((h) => h.slug === slug);
  if (!hotel) return null;

  const related = HOTELS.filter((h) => h.category === hotel.category && h.slug !== hotel.slug).slice(0, 3);
  const relatedBlogs = generateRelatedBlogs(hotel);

  const getRoomImage = (index: number) => {
    const roomGallery = hotel.gallery.filter(g => g.category === 'rooms');
    return roomGallery[index]?.src || hotel.image;
  };

  const weatherCategory = HOTEL_CATEGORIES.find((c) => c.slug === hotel.category);
  const weatherQuery = weatherCategory?.weatherQuery || `${hotel.location} Weather`;

  return (
    <div className="bg-white relative">
      <SEOHead hotel={hotel} />
      <HotelNavbar hotel={hotel} />
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-6">
              <Star size={16} className="fill-gold-400 text-gold-400" />
              {hotel.rating} Guest Rating
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {hotel.name}
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/90 text-lg md:text-xl mb-8">
              <MapPin size={20} className="text-gold-400" />
              <span>{hotel.location}</span>
            </div>
            <p className="text-xl md:text-2xl text-gold-200 font-serif italic mb-10">
              "{hotel.tagline}"
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn-gold text-lg px-8 py-3.5 w-full sm:w-auto shadow-lg shadow-gold-900/30">
                Check Availability
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full px-8 py-3.5 font-semibold text-lg transition-all flex items-center gap-2 w-full sm:w-auto">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. OVERVIEW & USPs (#overview) */}
      <section id="overview" className="py-12 md:py-24 container-px">
        <DynamicBreadcrumbs items={[
          { label: 'Hotels', to: '/hotels' },
          ...(hotel.destinationSlug ? [{ label: DESTINATIONS.find(d => d.slug === hotel.destinationSlug)?.name || hotel.destinationSlug, to: `/destinations/${hotel.destinationSlug}` }] : []),
          ...(hotel.citySlug ? [{ label: CITIES.find(c => c.slug === hotel.citySlug)?.name || hotel.citySlug, to: `/hotels/${hotel.citySlug}` }] : []),
          ...(hotel.areaSlug ? [{ label: AREAS.find(a => a.slug === hotel.areaSlug)?.name || hotel.areaSlug, to: `/hotels/${hotel.areaSlug}` }] : []),
          { label: hotel.name }
        ]} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-8">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-2">Welcome</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-8">About {hotel.name}</h3>
              <div className="space-y-5 text-forest-700 text-lg leading-relaxed">
                {hotel.longAbout ? (
                  hotel.longAbout.map((para, i) => <p key={i}>{para}</p>)
                ) : (
                  <p>{hotel.description}</p>
                )}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="glass bg-forest-50/50 p-8 rounded-3xl border border-forest-100 h-full">
                <h4 className="text-2xl font-serif font-bold text-forest-900 mb-6">Why Stay Here?</h4>
                <div className="space-y-4">
                  {(hotel.whyStayHere || hotel.highlights).map((reason, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="bg-white p-2 rounded-full shadow-sm text-gold-600 shrink-0 mt-1">
                        <Check size={18} />
                      </div>
                      <p className="text-forest-800 font-medium leading-snug">{reason}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-forest-200">
                  <a href={`https://www.google.com/search?q=${encodeURIComponent(weatherQuery)}`} target="_blank" rel="noreferrer" className="flex items-center justify-between text-forest-700 hover:text-gold-600 font-semibold transition-colors">
                    <span className="flex items-center gap-2"><CloudSun size={20} /> Check Weather Forecast</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. ROOMS (#rooms) */}
      {hotel.rooms && hotel.rooms.length > 0 && (
        <section id="rooms" className="py-24 bg-forest-900 text-white">
          <div className="container-px">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-400 mb-2">Accommodation</h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Our Rooms & Suites</h3>
                <p className="text-forest-200 text-lg">Designed for absolute comfort, offering a blend of modern amenities and traditional aesthetics.</p>
              </div>
            </Reveal>

            <div className="space-y-12">
              {hotel.rooms.map((room, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="flex flex-col lg:flex-row bg-forest-800 rounded-3xl overflow-hidden border border-forest-700 shadow-2xl">
                    <div className="lg:w-1/2 h-64 lg:h-auto relative">
                      <img src={room.image || getRoomImage(i)} alt={`${room.name} at ${hotel.name}`} loading="lazy" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-forest-900/40 to-transparent"></div>
                    </div>
                    <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl md:text-3xl font-serif font-bold text-white">{room.name}</h4>
                        <div className="flex items-center gap-1.5 bg-forest-700 px-3 py-1 rounded-full text-sm font-medium text-gold-300">
                          <Users size={16} /> {room.occupancy}
                        </div>
                      </div>
                      <p className="text-forest-200 text-lg mb-8 leading-relaxed">{room.description}</p>
                      
                      <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-10">
                        {room.amenities.map(a => {
                           const Icon = amenityIcon[a] || Check;
                           return (
                             <div key={a} className="flex items-center gap-2 text-forest-100 text-sm font-medium">
                               <Icon size={18} className="text-gold-400" /> {a}
                             </div>
                           )
                        })}
                      </div>
                      
                      <div className="mt-auto pt-8 border-t border-forest-700 flex flex-wrap gap-4">
                        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold flex items-center gap-2">
                          Inquire about {room.name} <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. GALLERY (#gallery) */}
      <section id="gallery" className="py-24 container-px">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-2">Discover</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-forest-900 mb-6">Photo Gallery</h3>
          </div>
          <Gallery images={hotel.gallery} categories={hotel.galleryCategories} title={hotel.name} />
        </Reveal>
      </section>

      {/* 5. FACILITIES & SURROUNDINGS (Combined Amenities, Attractions, Things To Do) */}
      <section className="py-24 bg-forest-50 border-y border-forest-100">
        <div className="container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* General Amenities */}
            <Reveal>
              <h3 className="text-3xl font-serif font-bold text-forest-900 mb-8">Property Facilities</h3>
              <div className="grid grid-cols-2 gap-4">
                {hotel.amenities.map((a) => {
                  const Icon = amenityIcon[a] || Check;
                  return (
                    <div key={a} className="flex items-center gap-3 bg-white border border-forest-100 rounded-2xl px-5 py-4 text-forest-800 shadow-sm transition-transform hover:-translate-y-1">
                      <Icon size={20} className="text-gold-500" />
                      <span className="font-semibold">{a}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Things To Do & Attractions */}
            <div>
              {hotel.thingsToDo && hotel.thingsToDo.length > 0 && (
                <Reveal delay={100}>
                  <h3 className="text-3xl font-serif font-bold text-forest-900 mb-8">Things To Do</h3>
                  <div className="space-y-6">
                    {hotel.thingsToDo.map((thing, i) => (
                      <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-forest-100 shadow-sm">
                        <div className="bg-forest-900 p-3 rounded-xl text-gold-400 shrink-0">
                          <Check size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-forest-900 text-lg mb-1">{thing.name}</h4>
                          <p className="text-forest-600 leading-relaxed">{thing.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. LOCATION (#location) */}
      {hotel.locationDetails && (
        <section id="location" className="py-24 container-px">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-2">Getting Here</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-forest-900">Location & Directions</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 glass rounded-3xl overflow-hidden h-[400px] border border-forest-100 shadow-lg">
                <iframe
                  src={hotel.locationDetails.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing location of ${hotel.name}`}
                ></iframe>
              </div>
              
              <div className="lg:col-span-1 flex flex-col justify-between space-y-8 glass p-8 rounded-3xl border border-forest-100 shadow-lg">
                <div>
                  <div className="flex items-center gap-3 text-gold-600 mb-3">
                    <MapPin size={24} />
                    <h4 className="text-xl font-serif font-bold text-forest-900">Address</h4>
                  </div>
                  <p className="text-forest-700 font-medium leading-relaxed">{hotel.locationDetails.address}</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-forest-900 mb-2">Directions</h4>
                  <p className="text-forest-600 text-sm leading-relaxed">{hotel.locationDetails.directions}</p>
                </div>
                
                <div className="space-y-4 pt-6 border-t border-forest-100">
                  <div>
                    <h4 className="text-xs font-bold uppercase text-forest-400 mb-1">Nearest Railway</h4>
                    <p className="text-forest-800 font-medium">{hotel.locationDetails.railwayStation}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-forest-400 mb-1">Nearest Airport</h4>
                    <p className="text-forest-800 font-medium">{hotel.locationDetails.airport}</p>
                  </div>
                </div>
              </div>
            </div>

            {hotel.nearbyAttractions && hotel.nearbyAttractions.length > 0 && (
              <div className="mt-16">
                <h4 className="text-2xl font-serif font-bold text-forest-900 mb-8 text-center">Nearby Attractions</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {hotel.nearbyAttractions.map((attraction, i) => (
                    <div key={i} className="glass p-5 rounded-2xl border border-forest-100 text-center hover:-translate-y-1 transition-transform">
                      <h5 className="font-bold text-forest-900 mb-1">{attraction.name}</h5>
                      <span className="inline-block bg-gold-100 text-gold-800 text-xs px-2.5 py-1 rounded-full font-bold mb-3">{attraction.distance}</span>
                      <p className="text-xs text-forest-600 line-clamp-2">{attraction.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Reveal>
        </section>
      )}

      {/* 7. REVIEWS (#reviews) */}
      {hotel.reviews && hotel.reviews.length > 0 && (
        <section id="reviews" className="py-24 bg-forest-900 text-white">
          <div className="container-px">
            <Reveal>
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                <div className="bg-gold-500 text-forest-900 font-bold px-4 py-2 rounded-xl text-xl flex items-center gap-2 mb-6">
                  {hotel.rating} <Star size={20} className="fill-forest-900" />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Guest Reviews</h3>
                <p className="text-forest-200 text-lg">See what our recent guests have to say about their experience.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {hotel.reviews.map((review, i) => (
                  <div key={i} className="bg-forest-800 p-8 rounded-3xl border border-forest-700 relative">
                    <Quote size={40} className="absolute top-6 right-6 text-forest-700/50" />
                    <div className="flex gap-1 mb-6 text-gold-400">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} size={16} className={idx < Math.floor(review.rating) ? "fill-gold-400" : ""} />
                      ))}
                    </div>
                    <p className="text-forest-100 text-lg italic mb-8 leading-relaxed">"{review.text}"</p>
                    <div className="flex justify-between items-center mt-auto pt-6 border-t border-forest-700">
                      <span className="font-bold text-white">{review.author}</span>
                      <span className="text-sm text-forest-400">{review.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* 8. FAQS (#faqs) */}
      {hotel.faqs && hotel.faqs.length > 0 && (
        <section id="faqs" className="py-24 container-px">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-2">Answers</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-forest-900">Frequently Asked Questions</h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion faqs={hotel.faqs} />
            </div>
          </Reveal>
        </section>
      )}

      {/* 9. CONTACT / BOOK NOW (#contact) */}
      <section id="contact" className="py-24 bg-forest-50 border-t border-forest-100">
        <div className="container-px max-w-5xl mx-auto">
          <Reveal>
            <div className="glass bg-white p-10 md:p-16 rounded-[40px] border border-forest-100 shadow-2xl text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 mb-6">Ready to Book Your Stay?</h2>
              <p className="text-forest-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Reserve your room at {hotel.name} today. We guarantee the best rates when you book directly with GhumoG.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold text-lg px-10 py-4 w-full sm:w-auto flex items-center justify-center gap-2">
                  <MessageCircle size={24} /> Chat on WhatsApp
                </a>
                <a href={PHONE_TEL} className="btn-outline text-lg px-10 py-4 w-full sm:w-auto flex items-center justify-center gap-2">
                  <Phone size={24} /> Call Us Now
                </a>
              </div>
              <p className="text-sm text-forest-400 mt-6">No payment required immediately. Fast response guaranteed.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. SIMILAR HOTELS (Optional Footer block) */}
      {related.length > 0 && (
        <section className="py-16 container-px border-t border-forest-100">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-forest-900">Explore Similar Stays</h2>
            <Link to="/hotels" className="text-sm font-bold text-forest-700 hover:text-gold-600 flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((h, i) => (
              <Reveal key={h.slug} delay={i * 100}>
                <Link to={`/hotels/${h.slug}`} className="group glass bg-white rounded-3xl overflow-hidden card-hover block border border-forest-100">
                  <div className="h-60 overflow-hidden relative">
                    <img src={h.image} alt={h.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-forest-900 flex items-center gap-1 shadow-sm">
                      <Star size={12} className="fill-gold-500 text-gold-500" /> {h.rating}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-forest-500 mb-2 uppercase tracking-wide"><MapPin size={12} /> {h.location}</div>
                    <h3 className="text-xl font-serif font-bold text-forest-900 group-hover:text-forest-700 mb-4">{h.name}</h3>
                    <div className="flex items-center justify-between pt-4 border-t border-forest-100">
                      <span className="text-gold-600 font-bold text-lg">₹{h.price.toLocaleString('en-IN')}<span className="text-xs text-forest-400 font-medium ml-1">/night</span></span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 11. RELATED BLOGS */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-forest-50 border-t border-forest-100">
          <div className="container-px">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif font-bold text-forest-900">Travel Guides</h2>
              <Link to="/blog" className="text-sm font-bold text-forest-700 hover:text-gold-600 flex items-center gap-1">
                View All <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((blog, i) => (
                <Reveal key={blog.slug} delay={i * 100}>
                  <Link to={`/blog/${blog.slug}`} className="group glass bg-white rounded-3xl overflow-hidden card-hover block border border-forest-100">
                    <div className="h-48 overflow-hidden">
                      <img src={blog.image} alt={blog.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-forest-100 text-forest-800 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">{blog.categorySlug}</span>
                        <span className="text-forest-400 text-xs font-medium">{blog.readingTime}</span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-forest-900 mb-3 group-hover:text-forest-700 leading-snug line-clamp-2">{blog.title}</h3>
                      <p className="text-forest-600 text-sm line-clamp-2 mb-4">{blog.excerpt}</p>
                      <span className="text-gold-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
