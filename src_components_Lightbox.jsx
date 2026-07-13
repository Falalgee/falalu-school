import { useEffect, useCallback } from 'react';

export default function Lightbox({ images, currentIndex, onClose }) {
  const image = images[currentIndex];

  const goTo = useCallback((dir) => {
    const newIndex = (currentIndex + dir + images.length) % images.length;
    onClose(); // close and reopen with new index? We'll handle with state in parent but for simplicity, just close for now.
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goTo(1);
      if (e.key === 'ArrowLeft') goTo(-1);
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [currentIndex, onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl z-10">
        <span className="material-symbols-outlined">close</span>
      </button>
      <img src={image.src} alt={image.alt} className="max-h-[90vh] max-w-[90vw] object-contain" onClick={e => e.stopPropagation()} />
    </div>
  );
}