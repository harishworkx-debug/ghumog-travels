import { PageHero, CtaBanner } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { Link } from '../lib/router';
import { BLOGS, BLOG_CATEGORIES, HOTELS } from '../lib/data';
import { DESTINATIONS, CITIES } from '../lib/seo-models';
import { Calendar, Clock, ArrowRight, ArrowLeft, Tag, MapPin, Map } from 'lucide-react';
import { DynamicBreadcrumbs } from '../components/DynamicBreadcrumbs';
import hpTravel from '../assets/hp-Travel.jpg';
import { useEffect, useState } from 'react';

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setActiveCategory(params.get('category'));
  }, []);

  const displayedBlogs = activeCategory ? BLOGS.filter(b => b.categorySlug === activeCategory) : BLOGS;

  return (
    <div>
      <PageHero
        title="Travel Journal & Guides"
        subtitle="Stories, itineraries, and local secrets from across the Himalayas."
        image={hpTravel}
      />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <DynamicBreadcrumbs items={[{ label: 'Blog' }]} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBlogs.length === 0 && <p className="text-forest-600 col-span-3">No blogs found in this category.</p>}
          {displayedBlogs.map((b, i) => (
            <Reveal key={b.slug} delay={(i % 3) * 100}>
              <Link to={`/blog/${b.slug}`} className="group glass rounded-3xl overflow-hidden card-hover block h-full flex flex-col">
                <div className="h-56 overflow-hidden relative">
                  <img src={b.image} alt={b.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {b.categorySlug && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-forest-900 flex items-center gap-1">
                      <Tag size={12} /> {BLOG_CATEGORIES.find(c => c.slug === b.categorySlug)?.name || b.categorySlug}
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-forest-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {b.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {b.readTime}</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-forest-900 mb-2 group-hover:text-forest-700 transition-colors line-clamp-2">{b.title}</h3>
                  <p className="text-sm text-forest-600 line-clamp-3 mb-4 flex-1">{b.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner title="Inspired to Explore?" text="Turn these stories into your own adventure — let us plan your Himalayan journey." />
    </div>
  );
}

export function BlogDetailPage({ slug }: { slug: string }) {
  const blog = BLOGS.find((b) => b.slug === slug);
  if (!blog) return null;

  const category = BLOG_CATEGORIES.find(c => c.slug === blog.categorySlug);
  const relatedBlogs = BLOGS.filter((b) => b.slug !== slug && (b.categorySlug === blog.categorySlug || b.relatedCitySlug === blog.relatedCitySlug)).slice(0, 3);
  const relatedHotels = HOTELS.filter(h => h.citySlug === blog.relatedCitySlug || h.destinationSlug === blog.relatedDestinationSlug).slice(0, 3);
  const destination = DESTINATIONS.find(d => d.slug === blog.relatedDestinationSlug);
  const city = CITIES.find(c => c.slug === blog.relatedCitySlug);

  return (
    <div>
      <PageHero
        title={blog.title}
        image={blog.image}
      />

      <article className="max-w-7xl mx-auto px-4 py-16">
        <DynamicBreadcrumbs items={[{ label: 'Blog', to: '/blog' }, { label: blog.title }]} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex flex-wrap items-center gap-4 text-sm text-forest-500 mb-8">
                {category && (
                  <span className="flex items-center gap-1.5 bg-forest-50 px-3 py-1 rounded-full text-forest-800 font-medium">
                    <Tag size={14} /> {category.name}
                  </span>
                )}
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {blog.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> {blog.readTime}</span>
              </div>
              <div className="space-y-6">
                {blog.content.map((p, i) => (
                  <p key={i} className="text-lg text-forest-700 leading-relaxed first-letter:text-4xl first-letter:font-serif first-letter:text-gold-600 first-letter:mr-1 first-letter:float-left first-letter:leading-none first-letter:mt-1 [&:not(:first-child)]:first-letter:text-base [&:not(:first-child)]:first-letter:font-sans [&:not(:first-child)]:first-letter:float-none [&:not(:first-child)]:first-letter:mr-0 [&:not(:first-child)]:first-letter:mt-0">
                    {p}
                  </p>
                ))}
                {blog.videoEmbed ? (
                  <div className="mt-10 rounded-2xl overflow-hidden shadow-lg" dangerouslySetInnerHTML={{ __html: blog.videoEmbed }} />
                ) : null}
              </div>
              <div className="mt-10 pt-6 border-t border-forest-100">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-gold-600">
                  <ArrowLeft size={14} /> Back to all stories
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
            {(destination || city) && (
              <Reveal>
                <div className="bg-forest-50 rounded-3xl p-6 border border-forest-100">
                  <h3 className="font-serif text-lg text-forest-900 mb-4 flex items-center gap-2">
                    <Map size={18} className="text-gold-500" /> Discover the Region
                  </h3>
                  {destination && (
                    <Link to={`/destinations/${destination.slug}`} className="block p-4 bg-white rounded-2xl mb-3 shadow-sm hover:shadow-md transition-shadow group">
                      <h4 className="font-semibold text-forest-900 group-hover:text-gold-600">{destination.name}</h4>
                      <p className="text-xs text-forest-600 mt-1 line-clamp-2">{destination.description}</p>
                    </Link>
                  )}
                  {city && (
                    <Link to={`/hotels/${city.slug}`} className="block p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                      <h4 className="font-semibold text-forest-900 group-hover:text-gold-600">Hotels in {city.name}</h4>
                      <p className="text-xs text-forest-600 mt-1 line-clamp-2">{city.description}</p>
                    </Link>
                  )}
                </div>
              </Reveal>
            )}

            {relatedHotels.length > 0 && (
              <Reveal>
                <div className="bg-forest-900 rounded-3xl p-6 text-white sticky top-24">
                  <h3 className="font-serif text-lg text-gold-300 mb-4 flex items-center gap-2">
                    <MapPin size={18} /> Places to Stay
                  </h3>
                  <div className="space-y-4">
                    {relatedHotels.map((hotel) => (
                      <Link key={hotel.slug} to={`/hotels/${hotel.slug}`} className="flex gap-3 items-center group bg-forest-800/50 p-2 rounded-xl hover:bg-forest-800 transition-colors">
                        <img src={hotel.cardImage || hotel.image} alt={hotel.name} className="w-14 h-14 rounded-lg object-cover" />
                        <div>
                          <h4 className="font-medium text-sm text-white group-hover:text-gold-300 transition-colors line-clamp-1">{hotel.name}</h4>
                          <p className="text-[10px] text-forest-300">₹{hotel.price} / night</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>

        {relatedBlogs.length > 0 && (
          <div className="mt-20 pt-12 border-t border-forest-100">
            <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-8">Related Reads</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {relatedBlogs.map((b, i) => (
                <Reveal key={b.slug} delay={i * 100}>
                  <Link to={`/blog/${b.slug}`} className="group glass rounded-3xl overflow-hidden card-hover block h-full flex flex-col">
                    <div className="h-44 overflow-hidden">
                      <img src={b.image} alt={b.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-base font-serif font-semibold text-forest-900 group-hover:text-forest-700 line-clamp-2 mb-2">{b.title}</h3>
                      <p className="text-xs text-forest-500 mb-3">{b.date}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
