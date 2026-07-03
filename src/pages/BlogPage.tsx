import { PageHero, CtaBanner } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { Link } from '../lib/router';
import { BLOGS } from '../lib/data';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

export function BlogPage() {
  return (
    <div>
      <PageHero
        title="Travel Journal"
        subtitle="Stories, guides and hidden gems from across the Himalayas."
        image="https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Blog' }]}
      />

      <section className="container-px py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {BLOGS.map((b, i) => (
            <Reveal key={b.slug} delay={(i % 3) * 100}>
              <Link to={`/blog/${b.slug}`} className="group glass rounded-3xl overflow-hidden card-hover block h-full">
                <div className="h-56 overflow-hidden">
                  <img src={b.image} alt={b.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-forest-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {b.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {b.readTime}</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-forest-900 mb-2 group-hover:text-forest-700 transition-colors line-clamp-2">{b.title}</h3>
                  <p className="text-sm text-forest-600 line-clamp-3 mb-4">{b.excerpt}</p>
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

  const related = BLOGS.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <div>
      <PageHero
        title={blog.title}
        image={blog.image}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }, { label: blog.title }]}
      />

      <article className="container-px py-16">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 text-sm text-forest-500 mb-8">
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
                <div className="mt-10" dangerouslySetInnerHTML={{ __html: blog.videoEmbed }} />
              ) : null}
            </div>
            <div className="mt-10 pt-6 border-t border-forest-100">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-gold-600">
                <ArrowLeft size={14} /> Back to all stories
              </Link>
            </div>
          </Reveal>
        </div>

        {related.length > 0 && (
          <div className="max-w-5xl mx-auto mt-20">
            <h2 className="text-2xl font-serif font-semibold text-forest-900 mb-8">More Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {related.map((b, i) => (
                <Reveal key={b.slug} delay={i * 100}>
                  <Link to={`/blog/${b.slug}`} className="group glass rounded-3xl overflow-hidden card-hover block h-full">
                    <div className="h-44 overflow-hidden">
                      <img src={b.image} alt={b.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-serif font-semibold text-forest-900 group-hover:text-forest-700 line-clamp-2">{b.title}</h3>
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
