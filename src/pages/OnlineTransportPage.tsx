import { PageHero, CtaBanner, SectionHeading } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { WHATSAPP } from '../lib/data';
import { MapPin, Clock, Users, ArrowRight, Route, Fuel, ShieldCheck } from 'lucide-react';

const TAXI = [
  { route: 'Shimla Local Sightseeing', duration: '8 hours', price: '₹2,500', seats: '4+1 Seater' },
  { route: 'Shimla → Kufri → Narkanda', duration: 'Full day', price: '₹3,500', seats: '4+1 Seater' },
  { route: 'Delhi → Shimla', duration: '8-9 hours', price: '₹6,500', seats: '4+1 Seater' },
  { route: 'Shimla → Manali', duration: '6-7 hours', price: '₹5,000', seats: '4+1 Seater' },
  { route: 'Shimla → Kedarnath (Gaurikund)', duration: '2 days', price: '₹14,000', seats: '4+1 Seater' },
  { route: 'Chandigarh → Shimla', duration: '4 hours', price: '₹4,000', seats: '4+1 Seater' },
];

const BIKES = [
  { name: 'Royal Enfield Classic 350', price: '₹1,200/day', img: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Royal Enfield Himalayan', price: '₹1,500/day', img: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Activa / Scooty', price: '₹500/day', img: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Bullet 500', price: '₹1,400/day', img: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export function OnlineTransportPage() {
  return (
    <div>
      <PageHero
        title="Transport Solutions"
        subtitle="Taxis, bikes & scooty rentals for seamless Himalayan travel."
        image="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1920"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Transport Solutions' }]}
      />

      {/* Taxi */}
      <section className="container-px py-16">
        <Reveal><SectionHeading eyebrow="Taxi Booking" title="Popular Routes & Fares" subtitle="Reliable, well-maintained vehicles with experienced local drivers." /></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TAXI.map((t, i) => (
            <Reveal key={t.route} delay={(i % 3) * 100}>
              <div className="glass rounded-3xl p-6 card-hover h-full">
                <div className="w-12 h-12 rounded-2xl bg-forest-800 flex items-center justify-center mb-4">
                  <Route size={20} className="text-gold-300" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-forest-900 mb-3">{t.route}</h3>
                <div className="space-y-2 text-sm text-forest-600 mb-5">
                  <div className="flex items-center gap-2"><Clock size={14} className="text-forest-400" /> {t.duration}</div>
                  <div className="flex items-center gap-2"><Users size={14} className="text-forest-400" /> {t.seats}</div>
                  <div className="flex items-center gap-2"><Fuel size={14} className="text-forest-400" /> Fuel included</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-bold text-gold-600">{t.price}</span>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold text-sm py-2 px-4">Book <ArrowRight size={14} /></a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bikes */}
      <section className="bg-forest-100/50 py-16">
        <div className="container-px">
          <Reveal><SectionHeading eyebrow="Bike & Scooty Rental" title="Ride the Mountains" subtitle="Self-ride bikes and scootys for the adventurous traveller." /></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BIKES.map((b, i) => (
              <Reveal key={b.name} delay={i * 100}>
                <div className="group glass rounded-3xl overflow-hidden card-hover h-full">
                  <div className="h-44 overflow-hidden">
                    <img src={b.img} alt={b.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-serif font-semibold text-forest-900 mb-1">{b.name}</h3>
                    <div className="text-gold-600 font-semibold mb-4">{b.price}</div>
                    <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2.5 w-full">Rent Now</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container-px py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: 'Safe & Insured', text: 'All vehicles are well-maintained, insured, and driven by verified local drivers.' },
            { icon: Clock, title: '24/7 Availability', text: 'Book anytime — we operate round the clock for your convenience.' },
            { icon: MapPin, title: 'Local Expertise', text: 'Our drivers know every hidden gem and the safest mountain routes.' },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="glass rounded-3xl p-7 text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-forest-600 to-forest-900 flex items-center justify-center mx-auto mb-4">
                  <f.icon size={24} className="text-gold-300" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-forest-900 mb-2">{f.title}</h3>
                <p className="text-sm text-forest-600">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner title="Need a Custom Route?" text="Tell us your destination and we'll arrange the perfect vehicle at the best price." />
    </div>
  );
}
