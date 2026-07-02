import { Link } from '../lib/router';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { WHATSAPP } from '../lib/data';
import type { Hotel } from '../lib/data';

export function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="group glass rounded-3xl overflow-hidden card-hover">
      <div className="relative h-64 overflow-hidden">
        <img
          src={hotel.cardImage || hotel.image}
          alt={hotel.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-full text-xs font-semibold text-forest-800 flex items-center gap-1">
          <Star size={12} className="fill-gold-500 text-gold-500" />
          {hotel.rating}
        </div>
        <div className="absolute bottom-4 right-4 bg-forest-900/80 backdrop-blur px-4 py-2 rounded-full text-white">
          <span className="text-gold-300 font-semibold text-lg">₹{hotel.price.toLocaleString('en-IN')}</span>
          <span className="text-xs text-white/70 ml-1">/night</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1.5 text-xs text-forest-500 mb-2">
          <MapPin size={12} />
          {hotel.location}
        </div>
        <h3 className="text-xl font-serif font-semibold text-forest-900 mb-1 group-hover:text-forest-700 transition-colors">
          {hotel.name}
        </h3>
        <p className="text-sm font-serif italic text-gold-700 mb-2">{hotel.tagline}</p>
        <p className="text-sm text-forest-600 line-clamp-2 mb-4">{hotel.description}</p>
        <div className="flex items-center gap-3">
          <Link to={`/hotels/${hotel.slug}`} className="flex-1 btn-gold text-sm py-2.5">
            View Details <ArrowRight size={14} />
          </Link>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2.5 px-4">
            Book
          </a>
        </div>
      </div>
    </div>
  );
}
