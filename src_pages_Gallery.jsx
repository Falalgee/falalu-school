import { useState, useCallback } from 'react';
import Lightbox from '../components/Lightbox';

const allImages = [
  { id: 1, src: 'https://picsum.photos/id/1015/800/600', alt: 'Campus building', category: 'buildings' },
  { id: 2, src: 'https://picsum.photos/id/20/800/600', alt: 'Classroom', category: 'classrooms' },
  { id: 3, src: 'https://picsum.photos/id/26/800/600', alt: 'Sports', category: 'sports' },
  { id: 4, src: 'https://picsum.photos/id/64/800/600', alt: 'Graduation', category: 'graduation' },
  { id: 5, src: 'https://picsum.photos/id/30/800/600', alt: 'Cultural event', category: 'cultural' },
  { id: 6, src: 'https://picsum.photos/id/43/800/600', alt: 'Library', category: 'buildings' },
];

const categories = ['all', 'buildings', 'classrooms', 'sports', 'graduation', 'cultural'];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = filter === 'all' ? allImages : allImages.filter(img => img.category === filter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <>
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <span className="text-xs font-semibold tracking-widest text-secondary uppercase">Gallery</span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-primary">Our Moments</h1>
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">Explore the vibrant life at Falalu & Sons.</p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition ${
                filter === cat ? 'bg-primary text-white' : 'bg-neutral-100 text-text-secondary hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition"
            >
              <img src={img.src} alt={img.alt} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                <span className="text-white text-sm font-medium capitalize">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox images={filtered} currentIndex={lightboxIndex} onClose={closeLightbox} />
      )}
    </>
  );
}