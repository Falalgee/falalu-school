import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ProtectedRoute from './components/ProtectedRoute';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Admissions = React.lazy(() => import('./pages/Admissions'));
const Academics = React.lazy(() => import('./pages/Academics'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const News = React.lazy(() => import('./pages/News'));
const Contact = React.lazy(() => import('./pages/Contact'));
const AdminDashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}