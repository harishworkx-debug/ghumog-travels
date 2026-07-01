import { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Grid2x2 } from 'lucide-react';
import type { GalleryImage } from '../lib/data';

type Props = {
  images: GalleryImage[];
  categories: { slug: string; name: string }[];
  title?: string;
};

export function Gallery({ images, categories, title }: Props) {
  const [activeCat, setActiveCat] = useState<string>('all');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [zoom, setZoom] = useState(false);

  const filtered = activeCat === 'all' ? images : images.filter((i) => i.category === activeCat);

  const close = useCallback(() => {
    setLightbox(null);
    setZoom(false);
  }, []);

  const next = useCallback(() => {
    setLightbox((i) => (i === null ? i : (i + 1) % filtered.length));
    setZoom(false);
  }, [filtered.length]);

  const prev = useCallback(() => {
    setLightbox((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
    setZoom(false);
  }, [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === ' ' || e.key === 'Enter') setZoom((z) => !z);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
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
            className="group relative block w-full mb-4 rounded-2xl overflow-hidden glass break-inside-avoid"
            aria-label={`Open ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xs font-medium capitalize glass px-2.5 py-1 rounded-full">{img.category}</span>
              <span className="w-9 h-9 rounded-full bg-white/90 text-forest-900 flex items-center justify-center">
                <ZoomIn size={16} />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-forest-950/95 backdrop-blur-sm flex items-center justify-center animate-fade-in" onClick={close}>
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 text-white/80 text-sm font-medium glass-dark px-4 py-1.5 rounded-full">
            {lightbox + 1} / {filtered.length}
            {title && <span className="hidden sm:inline"> · {title}</span>}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div className="relative max-w-[90vw] max-h-[82vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className={`max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl transition-transform duration-300 ${zoom ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`}
              onClick={() => setZoom((z) => !z)}
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          {/* Zoom toggle + caption */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); setZoom((z) => !z); }}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label={zoom ? 'Zoom out' : 'Zoom in'}
              >
                {zoom ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
              </button>
            </div>
            <p className="text-white/70 text-xs capitalize glass-dark px-3 py-1 rounded-full">{filtered[lightbox].category}</p>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 hidden md:flex gap-2 max-w-[80vw] overflow-x-auto no-scrollbar pb-1">
            {filtered.map((img, i) => (
              <button
                key={img.src + i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); setZoom(false); }}
                className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${i === lightbox ? 'border-gold-400 scale-105' : 'border-white/20 opacity-60 hover:opacity-100'}`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
