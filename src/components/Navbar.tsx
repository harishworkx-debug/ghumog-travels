import { useEffect, useState } from 'react';
import { Link, useRouter } from '../lib/router';
import { HOTEL_CATEGORIES, WHATSAPP, PHONE_TEL } from '../lib/data';
import FavIcon  from "../assets/favicon.png";
import { Menu, X, ChevronDown, Phone, Mountain, Home, Bus, Package, Newspaper, Video, Mail } from 'lucide-react';

const NAV = [
  { label: 'Home', to: '/', icon: Home },
  {
    label: 'Hotels', to: '/hotels', icon: Mountain, mega: true,
    children: HOTEL_CATEGORIES.map((c) => ({ label: c.name, to: `/hotels/${c.slug}`, tagline: c.tagline })),
  },
  { label: 'Online Transport', to: '/online-transport', icon: Bus },
  { label: 'Hotel Accessories', to: '/hotel-accessories', icon: Package },
  { label: 'Blog', to: '/blog', icon: Newspaper },
  { label: 'Video Tour', to: '/video-tour', icon: Video },
  { label: 'Contact Us', to: '/contact', icon: Mail },
];

export function Navbar() {
  const { path } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [path]);

  const isActive = (to: string) => (to === '/' ? path === '/' : path.startsWith(to));

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-forest-900/10 py-2' : 'bg-transparent py-4'
        }`}
      >
        <nav className="container-px flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest-600 to-forest-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <img src={FavIcon} alt="GhumoG Logo" className="w-10 h-10 rounded border-2 border-black" />
            </div>
            <div className="leading-none">
              <span className={`block font-serif text-xl font-bold tracking-tight ${scrolled ? 'text-forest-900' : 'text-white'}`}>GhumoG</span>
              <span className={`block text-[10px] uppercase tracking-[0.2em] ${scrolled ? 'text-gold-600' : 'text-gold-300'}`}>BharKe</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.mega && setMegaOpen(true)}
                onMouseLeave={() => item.mega && setMegaOpen(false)}
              >
                <Link
                  to={item.to}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(item.to)
                      ? (scrolled ? 'bg-forest-800 text-white' : 'bg-white/20 text-white backdrop-blur')
                      : (scrolled ? 'text-forest-800 hover:bg-forest-100' : 'text-white/90 hover:bg-white/15')
                  }`}
                >
                  {item.label}
                  {item.mega && <ChevronDown size={14} className={`transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Mega menu */}
                {item.mega && megaOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[520px]">
                    <div className="glass rounded-2xl p-3 shadow-2xl shadow-forest-900/20 animate-fade-in">
                      <div className="grid grid-cols-2 gap-1">
                        {item.children!.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="group p-3 rounded-xl hover:bg-forest-50 transition-colors"
                          >
                            <div className="font-semibold text-forest-900 text-sm group-hover:text-forest-700">{child.label}</div>
                            <div className="text-xs text-forest-500 mt-0.5">{child.tagline}</div>
                          </Link>
                        ))}
                      </div>
                      <Link to="/hotels" className="mt-1 block text-center py-2.5 rounded-xl bg-forest-800 text-white text-sm font-medium hover:bg-forest-700 transition-colors">
                        View All Hotels
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a href={PHONE_TEL} className={`hidden md:flex items-center gap-1.5 text-sm font-medium ${scrolled ? 'text-forest-700' : 'text-white/90'} hover:text-gold-500 transition-colors`}>
              <Phone size={14} /> +91 70189 39901
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden sm:inline-flex btn-gold text-sm py-2.5 px-5">
              Book Now
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-forest-900' : 'text-white'}`}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto pt-20 pb-8 px-6 animate-fade-in">
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive(item.to) ? 'bg-forest-800 text-white' : 'text-forest-800 hover:bg-forest-50'
                    }`}
                  >
                    {item.icon && <item.icon size={18} />}
                    {item.label}
                  </Link>
                  {item.mega && (
                    <ul className="ml-8 mt-1 space-y-1 border-l-2 border-forest-100 pl-3">
                      {item.children!.map((child) => (
                        <li key={child.to}>
                          <Link to={child.to} className="block px-3 py-2 rounded-lg text-sm text-forest-600 hover:bg-forest-50 hover:text-forest-800">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold w-full">Book Now</a>
              <a href={PHONE_TEL} className="btn-outline w-full">Call +91 70189 39901</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
