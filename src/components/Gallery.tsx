import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Grid2x2 } from 'lucide-react';
import type { GalleryImage } from '../lib/data';

type Props = {
  images: GalleryImage[];
  categories: { slug: string; name: string }[];
  title?: string;
};

export function Gallery({ images, categories }: Props) {
  const [activeCat, setActiveCat] = useState<string>('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCat === 'all' ? images : images.filter((i) => i.category === activeCat);

  const close = useCallback(() => setLightbox(null), []);

  const next = useCallback(() =>
    setLightbox((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length]);

  const prev = useCallback(() =>
    setLightbox((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, close, next, prev]);

  if (images.length === 0) {
    return (
      <div className="glass rounded-3xl p-12 text-center">
        <Grid2x2 size={40} className="text-forest-300 mx-auto mb-4" />
        <p className="text-forest-500">Gallery images coming soon.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCat('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCat === 'all' ? 'bg-forest-800 text-white' : 'bg-forest-100 text-forest-700 hover:bg-forest-200'}`}
        >
          All Photos
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => setActiveCat(c.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCat === c.slug ? 'bg-forest-800 text-white' : 'bg-forest-100 text-forest-700 hover:bg-forest-200'}`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {filtered.map((img, i) => (
          <button
            key={img.src + i}
            onClick={() => setLightbox(i)}
            className="group relative block w-full mb-4 rounded-2xl overflow-hidden glass break-inside-avoid cursor-zoom-in"
            aria-label={`View ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/20 transition-colors duration-300 rounded-2xl" />
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      {lightbox !== null && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999]">
          {/* overlay that scrolls when content is large */}
          <div className="fixed inset-0 bg-black/95" onClick={close} />

          {/* Top bar - fixed so it's always visible */}
          <div
            className="fixed top-0 left-0 right-0 z-[10000] flex items-center justify-between px-4 py-3 bg-black/70 backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-white/80 text-sm font-medium">
              {lightbox + 1} / {filtered.length}
              <span className="ml-2 text-white/40 capitalize">· {filtered[lightbox].category}</span>
            </span>
            <button
              onClick={close}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors duration-200 focus:outline-none"
              aria-label="Close"
            >
              <X size={22} />
            </button>
          </div>

          {/* Scrollable content area */}
          <div className="fixed inset-0 overflow-y-auto z-[9999]">
            <div className="min-h-screen flex flex-col items-stretch pt-16 pb-20">
              {/* Image area */}
              <div className="flex-1 flex items-center justify-center relative px-4 md:px-20" onClick={(e) => e.stopPropagation()}>
                <div className="relative w-full flex items-center justify-center">
                  {/* Prev */}
                  <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors duration-200 focus:outline-none z-20 hidden md:flex"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={26} />
                  </button>

                  {/* Main image container */}
                  <div className="flex-1 flex items-center justify-center overflow-hidden">
                    <img
                      key={filtered[lightbox].src}
                      src={filtered[lightbox].src}
                      alt={filtered[lightbox].alt}
                      className="max-w-full max-h-[85vh] object-contain rounded-lg select-none"
                      draggable={false}
                    />
                  </div>

                  {/* Next */}
                  <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors duration-200 focus:outline-none z-20 hidden md:flex"
                    aria-label="Next image"
                  >
                    <ChevronRight size={26} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail strip fixed at bottom */}
          <div className="fixed bottom-0 left-0 right-0 z-[10000] px-4 py-3 bg-black/70 backdrop-blur-md overflow-x-auto whitespace-nowrap no-scrollbar" onClick={(e) => e.stopPropagation()}>
            {filtered.map((img, i) => (
              <button
                key={img.src + i}
                onClick={() => setLightbox(i)}
                className={`inline-block mr-2 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none ${
                  i === lightbox ? 'border-gold-400 opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
