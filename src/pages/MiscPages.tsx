import { PageHero, CtaBanner, SectionHeading } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { FAQS } from '../lib/data';
import { useState } from 'react';
import Himachalpradesh1 from '../assets/Himachal-pradesh1.png';
import { ChevronDown, Mountain, Heart, Compass, Award, Phone, Mail, MessageCircle, Youtube, Facebook, Instagram, MapPin } from 'lucide-react';

const AviralJain = '/images/founder/image.png';

import HimachalImg2 from '../assets/paraglading.png';
import HimachalImg3 from '../assets/travel.png';
import HimachalImg4 from '../assets/rafting.png';
import HimachalImg5 from '../assets/Himachal-pradesh5.png';


const DESTINATIONS = [
  'Shimla', 'Manali', 'Kufri', 'Kasauli', 'Haridwar', 'Rishikesh',
  'Mussoorie', 'Bhimtal', 'Nainital', 'Jim Corbett National Park',
];

const FOUNDER_SOCIALS = [
  { icon: Phone, label: 'Call', value: '+91 70189 39901', href: 'tel:+917018939901', color: 'bg-forest-800' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+91 70189 39901', href: 'https://wa.me/917018939901', color: 'bg-[#25D366]' },
  { icon: Mail, label: 'Email', value: 'ghumog.com@gmail.com', href: 'mailto:ghumog.com@gmail.com', color: 'bg-gold-600' },
  { icon: Instagram, label: 'Instagram', value: '@aviral9913', href: 'https://www.instagram.com/aviral9913', color: 'bg-[#E1306C]' },
  { icon: Youtube, label: 'YouTube', value: '@Ghumog', href: 'https://www.youtube.com/@ghumog', color: 'bg-[#FF0000]' },
  { icon: Facebook, label: 'Facebook', value: 'ghumogbharke', href: 'https://www.facebook.com/ghumogbharke', color: 'bg-[#1877F2]' },
];

export function AboutPage() {
  return (
    <div>
      <PageHero
        title="Introduction to GhumoG"
        subtitle="Your trusted Himalayan travel companion. Expert of<br>Himachal and Uttarakhand."
        image={Himachalpradesh1}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      <section className="container-px py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <span className="section-eyebrow">Key offerings in Himachal and Uttarakhand</span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-forest-900 mb-5">GhumoG Bharke</h2>
              <div className="space-y-4 text-forest-700 leading-relaxed">
                <p>Welcome to Ghumog Stay, your peaceful mountain escape where nature, comfort, and unforgettable experiences come together. Nestled in the beautiful hills of Himachal Pradesh and Uttarakhand, Ghumog Stay offers cozy rooms, breathtaking valley views, fresh mountain air, and a perfect environment for travelers who want to relax and explore the beauty of the Himalayas.</p>
                <p>At Ghumog Stay, we believe that travel is not just about staying somewhere — it’s about creating memories. Whether you are planning a family vacation, romantic getaway, workation, adventure trip, or weekend escape, we provide a comfortable and homely experience surrounded by nature.</p>
                <p>We are dedicated to offering warm hospitality, local experiences, and affordable luxury for every guest. From peaceful mornings in the mountains to adventurous evenings exploring nearby attractions, Ghumog Stay is designed to make your trip special.</p>
                <div className="rounded-2xl border border-forest-200 bg-forest-50/80 p-5">
                  <h3 className="text-lg font-serif font-semibold text-forest-900 mb-3">Why Choose Ghumog Stay?</h3>
                  <ul className="space-y-2 text-sm text-forest-700">
                    <li>• Best stay experience</li>
                    <li>• Perfect for couples, families &amp; solo travelers</li>
                    <li>• Budget-friendly luxury rooms</li>
                    <li>• Scenic valley and forest views</li>
                    <li>• Friendly hospitality with local touch</li>
                    <li>• Ideal for vacations, workstations &amp; weekend trips</li>
                  </ul>
                </div>
                <p>At Ghumog Stay – “Ghumog Bharke”, we invite you to disconnect from stress and reconnect with nature.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-4">
              <img src={HimachalImg3} alt="Himalayas" className="rounded-3xl h-64 w-full object-cover" />
              <img src={HimachalImg4} alt="Cottage" className="rounded-3xl h-64 w-full object-cover mt-8" />
              <img src={HimachalImg5} alt="Shimla" className="rounded-3xl h-64 w-full object-cover -mt-8" />
              <img src={HimachalImg2} alt="Valley" className="rounded-3xl h-64 w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

  

      {/* ABOUT THE FOUNDER */}
      <section className="container-px py-20">
        <Reveal>
          <SectionHeading eyebrow="About the Founder" title="Meet Aviral Jain" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Photo */}
          <Reveal className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-forest-600/30 to-gold-500/20 blur-xl" />
              <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl shadow-forest-900/20 aspect-[3/4] max-w-sm mx-auto lg:max-w-none bg-forest-100">
                <img
                  src={AviralJain}
                  alt="Aviral Jain — Founder, GhumoG"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Name badge */}
              <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4">
                <p className="font-serif font-semibold text-forest-900 text-lg leading-tight">Aviral Jain</p>
                <p className="text-xs text-gold-700 font-semibold mt-0.5">Founder, GhumoG Stay</p>
                <p className="text-xs text-forest-600 mt-0.5">Director — AMV Vyapar Pvt. Ltd.</p>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={100} className="lg:col-span-3">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-[0.2em] text-gold-700 mb-4">
                "Ghumog Bharke"
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-forest-900 mb-6">
                20+ Years of Passion for Travel & Hospitality
              </h3>

              <div className="space-y-4 text-forest-700 leading-relaxed mb-8">
                <p>
                  Aviral Jain is a passionate entrepreneur, travel expert, hotelier, travel content creator, and media professional with more than 20 years of experience in the travel and hospitality industry.
                </p>
                <p>
                  As the Director of <strong className="text-forest-900">AMV Vyapar Pvt. Ltd.</strong> and the proud owner of <strong className="text-forest-900">Ghumog Stay</strong>, he has successfully managed and operated hotels, resorts, homestays, and luxury villas across some of India's most popular tourist destinations. His vision is to provide travelers with comfortable stays, memorable experiences, and the true beauty of nature and local culture.
                </p>
                <p>
                  Over the years, Aviral Jain has built strong experience in hospitality management, travel planning, tourism promotion, and guest services. His work has connected thousands of travelers with premium stays and unforgettable journeys across destinations including:
                </p>
              </div>

              {/* Destinations */}
              <div className="flex flex-wrap gap-2 mb-8">
                {DESTINATIONS.map((d) => (
                  <span key={d} className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-xs font-medium text-forest-800">
                    <MapPin size={11} className="text-gold-600" /> {d}
                  </span>
                ))}
                <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-full text-xs font-medium text-forest-500 italic">
                  & many more across India
                </span>
              </div>

              <div className="space-y-4 text-forest-700 leading-relaxed">
                <p>
                  Apart from hospitality, Aviral Jain is the creator and owner of the travel platform <strong className="text-forest-900">"Ghumog Bharke" (@Ghumog)</strong>, where he shares travel vlogs, hotel reviews, destination guides, road trips, tourism experiences, and informative travel videos.
                </p>
                <p>
                  He is also the <strong className="text-forest-900">Chief Editor of Hindi TV News</strong>, actively managing digital journalism, regional news coverage, and social media platforms under the handle <strong className="text-forest-900">@HindiTV</strong>.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Contact & Social Links */}
        <Reveal>
          <div className="mt-16 glass rounded-3xl p-8 md:p-10">
            <h3 className="text-xl font-serif font-semibold text-forest-900 mb-2 text-center">Connect with Aviral Jain</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FOUNDER_SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-4 bg-forest-50 hover:bg-forest-100 border border-forest-100 hover:border-forest-200 rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-forest-900/10"
                >
                  <div className={`w-11 h-11 rounded-xl ${s.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <s.icon size={20} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-forest-500">{s.label}</p>
                    <p className="text-sm font-medium text-forest-900 truncate">{s.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBanner title="Come Visit Us in Himachal and Uttarakhand" text="Experience Himalayan hospitality firsthand. We can't wait to welcome you." />
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
