import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '../lib/router';
import { Hotel } from '../lib/data';

interface HotelNavbarProps {
  hotel: Hotel;
}

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQs', href: '#faqs' },
];

export function HotelNavbar({ hotel }: HotelNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of the sticky navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-md py-4 border-b border-forest-100'}`}>
      <div className="container-px flex items-center justify-between">
        
        {/* Logo / Hotel Name */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-serif font-bold text-forest-900 tracking-tight hidden sm:block">
            Ghumo<span className="text-gold-500">G</span>
          </Link>
          <div className="hidden sm:block h-6 w-px bg-forest-200"></div>
          <span className="font-serif font-semibold text-forest-800 text-lg truncate max-w-[200px] sm:max-w-xs">{hotel.name}</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(link => (
            <a 
              key={link.href} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-semibold text-forest-700 hover:text-gold-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="btn-gold text-sm py-2 px-5"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-forest-900" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 border-t border-forest-100' : 'max-h-0'}`}>
        <div className="flex flex-col px-6 py-4 space-y-4">
          {NAV_LINKS.map(link => (
            <a 
              key={link.href} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-base font-medium text-forest-800 hover:text-gold-600"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-forest-100">
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn-gold text-center block w-full py-2.5"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
