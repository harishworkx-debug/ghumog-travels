import { PageHero, CtaBanner, SectionHeading } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { FAQS, TAGLINES } from '../lib/data';
import { useState } from 'react';
import { ChevronDown, Mountain, Heart, Compass, Award } from 'lucide-react';

export function AboutPage() {
  return (
    <div>
      <PageHero
        title="About GhumoG"
        subtitle="Your trusted Himalayan travel companion, rooted in Shoghi, Shimla."
        image="https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      <section className="container-px py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <span className="section-eyebrow">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-forest-900 mb-5">Born in the Mountains, for the Mountains</h2>
              <div className="space-y-4 text-forest-700 leading-relaxed">
                <p>GhumoG BharKe began as a small homestay in Shoghi, Shimla — a family's love for hosting travellers from across the world. Today we run three signature properties — Rishikesh Hotel 4U, Hotel Rashal Stay in Shoghi, and Rishikesh Camping Resorts — but our heart remains the same: genuine Himalayan hospitality.</p>
                <p>{TAGLINES.home}. We offer hotels, camping resorts, holiday packages, taxi services, bike rentals, and trekking — all curated by people who call these mountains home. We know the hidden trails, the best viewpoints, the quietest stays, and the warmest people.</p>
                <p>When you travel with GhumoG, you're not just a customer. {TAGLINES.family}.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Himalayas" className="rounded-3xl h-64 w-full object-cover" />
              <img src="https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Cottage" className="rounded-3xl h-64 w-full object-cover mt-8" />
              <img src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shimla" className="rounded-3xl h-64 w-full object-cover -mt-8" />
              <img src="https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Valley" className="rounded-3xl h-64 w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest-100/50 py-16">
        <div className="container-px">
          <Reveal><SectionHeading eyebrow="Our Values" title="What Drives Us" /></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Genuine Hospitality', text: 'Every guest is family. We go beyond service to make you feel truly at home in the mountains.' },
              { icon: Compass, title: 'Local Expertise', text: 'We live here. We know the trails, the people, and the stories that make each place special.' },
              { icon: Award, title: 'Trusted Quality', text: 'Handpicked stays, reliable transport, and transparent pricing — every time, no surprises.' },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="glass rounded-3xl p-7 text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-forest-600 to-forest-900 flex items-center justify-center mx-auto mb-4">
                    <v.icon size={24} className="text-gold-300" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-forest-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-forest-600">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Come Visit Us in Shoghi" text="Experience Himalayan hospitality firsthand. We can't wait to welcome you." />
    </div>
  );
}

export function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about booking with GhumoG."
        image="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'FAQs' }]}
      />
      <section className="container-px py-16">
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={(i % 4) * 50}>
              <div className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-serif font-semibold text-forest-900">{f.q}</span>
                  <ChevronDown size={20} className={`text-forest-500 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-forest-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export function PolicyPage({ title, sections }: { title: string; sections: { heading: string; body: string }[] }) {
  return (
    <div>
      <PageHero
        title={title}
        image="https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: title }]}
      />
      <section className="container-px py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map((s, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <div className="glass rounded-3xl p-7">
                <h2 className="text-xl font-serif font-semibold text-forest-900 mb-3">{s.heading}</h2>
                <p className="text-forest-700 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center container-px">
      <div className="text-center">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-forest-600 to-forest-900 flex items-center justify-center mx-auto mb-6 animate-float">
          <Mountain size={36} className="text-gold-300" />
        </div>
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-forest-900 mb-3">404</h1>
        <p className="text-lg text-forest-600 mb-8">This trail leads nowhere. Let's get you back.</p>
        <a href="#/" className="btn-gold">Back to Home</a>
      </div>
    </section>
  );
}
