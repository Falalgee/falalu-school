import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-xl text-text-secondary">Page not found.</p>
      <Link to="/" className="mt-8 px-6 py-3 bg-primary text-white rounded-lg font-medium">
        Return Home
      </Link>
    </div>
  );
}