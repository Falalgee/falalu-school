import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-light mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-primary">Falalu & Sons</Link>
            <p className="text-sm text-text-secondary max-w-xs">
              International School Minna — nurturing excellence in a modern learning environment.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-4">School</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-text-secondary hover:text-primary">About</Link></li>
                <li><Link to="/academics" className="text-sm text-text-secondary hover:text-primary">Academics</Link></li>
                <li><Link to="/news" className="text-sm text-text-secondary hover:text-primary">News</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-sm text-text-secondary hover:text-primary">Contact</Link></li>
                <li><Link to="/admissions" className="text-sm text-text-secondary hover:text-primary">Admissions</Link></li>
                <li><a href="#" className="text-sm text-text-secondary hover:text-primary">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border-light text-center text-sm text-text-muted">
          © {new Date().getFullYear()} Falalu and Sons International School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}