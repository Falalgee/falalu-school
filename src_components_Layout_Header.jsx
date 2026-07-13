import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/academics', label: 'Academics' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-nav border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center space-x-2 text-xl md:text-2xl font-bold tracking-tight text-primary">
          <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-sans text-sm">F</span>
          <span className="hidden sm:inline">Falalu & Sons</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-text-secondary hover:text-primary hover:bg-neutral-100'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            to="/admissions"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-primary-600 transition-colors shadow-sm"
          >
            Apply Now
          </NavLink>
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100"
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </div>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </header>
  );
}