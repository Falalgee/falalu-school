import { Link } from 'react-router-dom';
import heroBg from '../../assets/hero-campus.jpg';

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] min-h-[600px] flex items-center">
      <img
        src={heroBg}
        alt="School campus"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm mb-6">
            Est. 1998 · Minna
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 leading-tight">
            Excellence in<br />Every Step
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-lg">
            Nurturing minds, building character, and shaping tomorrow's leaders.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/admissions"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-neutral-100 transition"
            >
              Apply Now
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}