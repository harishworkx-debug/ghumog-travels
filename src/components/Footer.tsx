import { Link } from '../lib/router';
import { Mountain, Phone, Mail, MapPin, Youtube, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { WHATSAPP, PHONE, EMAIL, MAP_LINK, HOTEL_CATEGORIES, TAGLINES } from '../lib/data';

export function Footer() {
  return (
    <footer className="bg-forest-950 text-white/70 mt-20">
      <div className="container-px py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest-600 to-forest-800 flex items-center justify-center">
                <Mountain size={20} className="text-gold-300" />
              </div>
              <div className="leading-none">
                <span className="block font-serif text-xl font-bold text-white">GhumoG</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-gold-300">BharKe</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              {TAGLINES.primary} — premium Himalayan travel & hospitality. Hotels, camping resorts, packages, taxi & bike rentals. {TAGLINES.family}.
            </p>
            <div className="flex gap-3">
              <a href="https://www.youtube.com/@ghumog" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center transition-all"><Youtube size={16} /></a>
              <a href="https://www.facebook.com/ghumogbharke" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center transition-all"><Facebook size={16} /></a>
              <a href="https://www.instagram.com/aviral9913" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center transition-all"><Instagram size={16} /></a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-gold-300 transition-colors">Home</Link></li>
              <li><Link to="/hotels" className="hover:text-gold-300 transition-colors">All Hotels</Link></li>
              <li><Link to="/online-transport" className="hover:text-gold-300 transition-colors">Transport Solutions</Link></li>
              <li><Link to="/hotel-accessories" className="hover:text-gold-300 transition-colors">Hotel Accessories</Link></li>
              <li><Link to="/blog" className="hover:text-gold-300 transition-colors">Blog</Link></li>
              <li><Link to="/video-tour" className="hover:text-gold-300 transition-colors">Video Tour</Link></li>
              <li><Link to="/contact" className="hover:text-gold-300 transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-gold-300 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Hotel categories */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-4">Hotel Categories</h4>
            <ul className="space-y-2.5 text-sm">
              {HOTEL_CATEGORIES.map((c) => (
                <li key={c.slug}><Link to={`/hotels/${c.slug}`} className="hover:text-gold-300 transition-colors">{c.name}</Link></li>
              ))}
              <li><Link to="/hotels/top-temples" className="hover:text-gold-300 transition-colors">Dharmik Yatra</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5"><MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" /> Shoghi, Shimla, Himachal Pradesh</li>
              <li><a href="tel:+917018939901" className="flex items-center gap-2.5 hover:text-gold-300 transition-colors"><Phone size={16} className="text-gold-400" /> {PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 hover:text-gold-300 transition-colors break-all"><Mail size={16} className="text-gold-400 shrink-0" /> {EMAIL}</a></li>
              <li><a href={MAP_LINK} target="_blank" rel="noreferrer" className="hover:text-gold-300 transition-colors">Google Business Profile</a></li>
            </ul>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-gold-200">
              WhatsApp Now <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} GhumoG BharKe. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-gold-300">Privacy</Link>
            <Link to="/terms" className="hover:text-gold-300">Terms</Link>
            <Link to="/cancellation" className="hover:text-gold-300">Cancellation</Link>
            <Link to="/refund" className="hover:text-gold-300">Refund</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
