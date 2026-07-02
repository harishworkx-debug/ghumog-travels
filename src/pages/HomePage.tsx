import { Link } from '../lib/router';
import { Reveal } from '../components/Reveal';
import { HotelCard } from '../components/HotelCard';
import { SectionHeading, CtaBanner } from '../components/ui';
import { HOTELS, HOTEL_CATEGORIES, TESTIMONIALS, WHATSAPP, BLOGS, TAGLINES } from '../lib/data';
import { ArrowRight, Star, MapPin, Play, ChevronLeft, ChevronRight, Quote, Mountain, Bus, Package, Compass, Trees, Sparkles, ShieldCheck, Home, Flame, Utensils, Car } from 'lucide-react';
import { useState } from 'react';

const HERO_SLIDES = [
  'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

const SERVICES = [
  { icon: Mountain, title: 'Hotel & Stay Booking', text: 'Handpicked stays across Rishikesh and Shimla — from riverside hotels to camping resorts.' },
  { icon: Package, title: 'Holiday Packages', text: 'Curated itineraries for Rishikesh, Shimla, Kedarnath and beyond, fully customisable.' },
  { icon: Bus, title: 'Taxi & Bike Rental', text: 'Reliable transport for sightseeing and road trips, with local expert drivers.' },
  { icon: Compass, title: 'Dharmik Yatra', text: 'Sacred journeys to Kedarnath, Badrinath, Vaishno Devi and more, with full support.' },
];

const FEATURES = [
  { icon: Mountain, title: 'Scenic Views', text: 'Wake up to breathtaking Himalayan vistas from every property.' },
  { icon: Sparkles, title: 'Premium Stay', text: 'Thoughtfully designed rooms with comfort and elegance in mind.' },
  { icon: Home, title: 'Wooden Rooms', text: 'Authentic mountain architecture with warm wooden interiors.' },
  { icon: Home, title: 'Terrace Rooms', text: 'Open-air terraces perfect for morning tea and sunset views.' },
  { icon: Sparkles, title: 'Comfort & Luxury', text: 'Modern amenities blended seamlessly with rustic charm.' },
  { icon: Sparkles, title: 'Peaceful Stay', text: 'Quiet, serene locations far from the noise of city life.' },
  { icon: Home, title: 'Family & Couple Friendly', text: 'Safe, welcoming spaces for every kind of traveller.' },
  { icon: Utensils, title: 'Homely Food on Request', text: 'Authentic home-style meals prepared just for you.' },
  { icon: Flame, title: 'Bonfire on Request', text: 'Cozy bonfire evenings under star-filled mountain skies.' },
  { icon: Car, title: 'Free Parking', text: 'Secure, complimentary parking at all our properties.' },
  { icon: ShieldCheck, title: 'Safe & Secure Environment', text: 'Your safety and peace of mind are our top priority.' },
  { icon: ShieldCheck, title: 'Safe, Reliable & Trusted', text: 'A travel partner thousands of guests have come to trust.' },
];

export function HomePage() {
  const [slide, setSlide] = useState(0);
  const [testi, setTesti] = useState(0);

  const featured = HOTELS.slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {HERO_SLIDES.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: i === slide ? 1 : 0 }}
            >
              <img src={s} alt="Himalayas" className="w-full h-full object-cover scale-105" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/35 via-forest-900/20 to-forest-950/55" />
        </div>

        {/* Floating decorative orbs */}
        <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-gold-500/20 blur-2xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-forest-400/20 blur-3xl animate-float" style={{ animationDelay: '3s' }} />

        <div className="relative z-10 text-center text-white container-px px-4 sm:px-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-black/25 backdrop-blur-xl text-xs font-semibold uppercase tracking-[0.25em] text-gold-300 mb-6 animate-fade-up shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            Premium Himalayan Travel & Stays
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold leading-[1.05] mb-6 animate-fade-up drop-shadow-[0_4px_18px_rgba(0,0,0,0.8)]" style={{ animationDelay: '100ms' }}>
            {TAGLINES.primary}<br /><span className="text-gold-300 italic whitespace-pre-line drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]">{TAGLINES.experience}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-9 animate-fade-up leading-relaxed tracking-wide" style={{ animationDelay: '200ms' }}>
            <span className="block font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">{TAGLINES.secondary}</span>
            <span className="mt-3 block text-sm md:text-lg uppercase tracking-[0.25em] text-white/90 font-semibold bg-black/15 backdrop-blur-sm rounded-2xl border border-white/10 px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
              Book your hotels, resorts, camping, homestay, taxis & bike rentals
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Link to="/hotels" className="btn-gold text-base">
              Explore Hotels <ArrowRight size={18} />
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-outline border-white/30 text-white hover:bg-white hover:text-forest-900 hover:border-white text-base">
              Book Your Hotel
            </a>
          </div>
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === slide ? 'w-10 bg-gold-400' : 'w-4 bg-white/40'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2 text-white/60 text-xs uppercase tracking-widest">
          <ChevronLeft size={16} className="rotate-90 animate-bounce" /> Scroll
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-px py-20">
        <Reveal>
          <SectionHeading eyebrow="What We Offer" title="Curated Himalayan Experiences" subtitle="From stays to transport to sacred journeys — everything you need for a seamless mountain escape." />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group glass rounded-3xl p-7 card-hover h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-forest-600 to-forest-900 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <s.icon size={24} className="text-gold-300" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-forest-900 mb-2">{s.title}</h3>
                <p className="text-sm text-forest-600 leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED HOTELS */}
      <section className="bg-forest-100/50 py-20">
        <div className="container-px">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                {/* <span className="section-eyebrow">Our Properties</span> */}
                <h2 className="text-3xl md:text-5xl font-serif font-semibold text-forest-900">Ghumo G Properties</h2>
                <p className="text-forest-600 mt-2 max-w-xl">{TAGLINES.home} — signature stays across Rishikesh, Shimla and beyond.</p>
              </div>
              <Link to="/hotels" className="btn-outline text-sm self-start md:self-auto">
                View All Hotels <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {featured.map((h, i) => (
              <Reveal key={h.slug} delay={(i % 3) * 100}>
                <HotelCard hotel={h} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES / HIGHLIGHTS */}
      <section className="container-px py-20">
        <Reveal>
          <SectionHeading eyebrow="Why GhumoG" title="Features & Highlights" subtitle="Every detail crafted for a memorable Himalayan stay — comfort, safety, and homely warmth." />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 80}>
              <div className="group glass rounded-2xl p-6 card-hover h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-forest-600 to-forest-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <f.icon size={22} className="text-gold-300" />
                </div>
                <h3 className="text-base font-serif font-semibold text-forest-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-forest-600 leading-relaxed">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-forest-100/50 py-20">
        <div className="container-px">
          <Reveal>
            <SectionHeading eyebrow="Where To Go" title="Explore Destinations" subtitle="Four regions, countless stories. Pick your Himalayan adventure." />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOTEL_CATEGORIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 100}>
                <Link to={`/hotels/${c.slug}`} className="group relative block h-80 rounded-3xl overflow-hidden card-hover">
                  <img
                    src={['https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
                          'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=800',
                          'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=800',
                          'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800'][i]}
                    alt={c.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-900/30 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-semibold mb-1">{c.name}</h3>
                    <p className="text-sm text-white/75 mb-3">{c.tagline}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 group-hover:gap-3 transition-all">
                      Discover <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-800 to-forest-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="container-px relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { num: '12+', label: 'Curated Stays' },
              { num: '10K+', label: 'Happy Travellers' },
              { num: '4', label: 'Destinations' },
              { num: '4.8★', label: 'Average Rating' },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div>
                  <div className="text-4xl md:text-5xl font-serif font-bold text-gold-300 mb-2">{s.num}</div>
                  <div className="text-sm uppercase tracking-widest text-white/60">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-px py-20">
        <Reveal>
          <SectionHeading eyebrow="Traveller Stories" title="Loved by Our Guests" subtitle={`${TAGLINES.family}. Real experiences from travellers who stayed with us.`} />
        </Reveal>
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 text-center relative">
              <Quote size={48} className="text-gold-300/40 mx-auto mb-4" />
              <p className="text-lg md:text-xl text-forest-800 font-serif italic leading-relaxed mb-6 min-h-[100px]">
                "{TESTIMONIALS[testi].text}"
              </p>
              <div className="flex justify-center gap-1 mb-3">
                {Array.from({ length: TESTIMONIALS[testi].rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-gold-500 text-gold-500" />
                ))}
              </div>
              <div className="font-semibold text-forest-900">{TESTIMONIALS[testi].name}</div>
              <div className="text-sm text-forest-500 flex items-center justify-center gap-1 mt-1">
                <MapPin size={12} /> {TESTIMONIALS[testi].location}
              </div>
              <div className="flex justify-center gap-3 mt-6">
                <button onClick={() => setTesti((t) => (t - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="w-10 h-10 rounded-full bg-forest-100 hover:bg-forest-800 hover:text-white text-forest-700 flex items-center justify-center transition-colors">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={() => setTesti((t) => (t + 1) % TESTIMONIALS.length)} className="w-10 h-10 rounded-full bg-forest-100 hover:bg-forest-800 hover:text-white text-forest-700 flex items-center justify-center transition-colors">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* VIDEO TEASER */}
      <section className="bg-forest-100/50 py-20">
        <div className="container-px">
          <Reveal>
            <SectionHeading eyebrow="See It First" title="Video Tours" subtitle="Watch the Himalayas come alive before you book your journey." />
          </Reveal>
          <Reveal>
            <Link to="/video-tour" className="group relative block h-[50vh] min-h-[360px] rounded-3xl overflow-hidden">
              <img src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Video tour" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-forest-950/50 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Play size={28} className="text-forest-950 ml-1" fill="currentColor" />
                  </div>
                  <span className="text-lg font-serif">Watch Our Tours</span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="container-px py-20">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="section-eyebrow">From Our Journal</span>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold text-forest-900">Travel Stories</h2>
            </div>
            <Link to="/blog" className="btn-outline text-sm self-start md:self-auto">
              Read All Blogs <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {BLOGS.slice(0, 3).map((b, i) => (
            <Reveal key={b.slug} delay={i * 100}>
              <Link to={`/blog/${b.slug}`} className="group glass rounded-3xl overflow-hidden card-hover block h-full">
                <div className="h-52 overflow-hidden">
                  <img src={b.image} alt={b.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-forest-500 mb-2">{b.date} · {b.readTime}</div>
                  <h3 className="text-lg font-serif font-semibold text-forest-900 mb-2 group-hover:text-forest-700 transition-colors line-clamp-2">{b.title}</h3>
                  <p className="text-sm text-forest-600 line-clamp-2">{b.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner title="Ready for Your Himalayan Escape?" text={`${TAGLINES.secondary}. Message us on WhatsApp and our travel experts will craft your perfect itinerary — stays, transport, and experiences, all in one place.`} />
    </div>
  );
}
