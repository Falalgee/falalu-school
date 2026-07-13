import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function MobileMenu({ open, onClose, links }) {
  const panelRef = useRef();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleBackdropClick = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target)) onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/20 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div
        ref={panelRef}
        className="w-full max-w-xs bg-white h-full shadow-2xl p-6 transform transition-transform duration-300 ease-in-out"
        style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded-lg">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col space-y-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-base font-medium ${
                  isActive ? 'bg-primary/10 text-primary' : 'text-text-primary hover:bg-neutral-50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <NavLink
          to="/admissions"
          onClick={onClose}
          className="mt-6 block w-full text-center px-4 py-3 rounded-lg font-semibold bg-primary text-white"
        >
          Apply Now
        </NavLink>
      </div>
    </div>
  );
}