import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '../data/images';
import './Gallery.css';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null); // index or null

  const open = (idx) => setLightbox(idx);
  const close = () => setLightbox(null);

  const prev = useCallback(() => {
    setLightbox((i) => (i - 1 + images.gallery.length) % images.gallery.length);
  }, []);

  const next = useCallback(() => {
    setLightbox((i) => (i + 1) % images.gallery.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, prev, next]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section className="gallery section section--light" id="gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="gallery__header reveal">
          <span className="eyebrow">Photo Gallery</span>
          <div className="divider divider--center" />
          <h2 id="gallery-heading">Moments from the Initiative</h2>
          <p className="gallery__lead">
            A visual record of the Ajogbo Future Leaders Initiative as it grows.
            More images will be added as the programme progresses.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="gallery__grid" role="list">
          {images.gallery.map((img, idx) => (
            <div
              key={idx}
              className={`gallery__item gallery__item--${img.span} reveal delay-${Math.min(idx + 1, 5)}`}
              role="listitem"
            >
              <button
                className="gallery__btn"
                onClick={() => open(idx)}
                aria-label={`View full size: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="gallery__img"
                  loading="lazy"
                />
                <div className="gallery__hover" aria-hidden="true">
                  <span className="gallery__hover-text">View</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={close}
        >
          <button
            className="lightbox__close"
            onClick={close}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <button
            className="lightbox__prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images.gallery[lightbox].src}
              alt={images.gallery[lightbox].alt}
              className="lightbox__img"
            />
            <p className="lightbox__caption">{images.gallery[lightbox].alt}</p>
          </div>

          <button
            className="lightbox__next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          <span className="lightbox__counter" aria-live="polite">
            {lightbox + 1} / {images.gallery.length}
          </span>
        </div>
      )}
    </section>
  );
}
