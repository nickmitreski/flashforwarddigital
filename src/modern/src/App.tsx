import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout';
import { AdminLayout } from './app/admin/AdminLayout';
import { AdminLogin } from './app/admin/login/page';
import { AdminDashboard } from './app/admin/dashboard/page';
import { Suspense, lazy } from 'react';

// Lazy load components
const Hero = lazy(() => import('./components/hero').then(module => ({ default: module.Hero })));
const About = lazy(() => import('./components/about').then(module => ({ default: module.About })));
const Services = lazy(() => import('./components/services'));
const Stats = lazy(() => import('./components/stats').then(module => ({ default: module.Stats })));
const Pricing = lazy(() => import('./components/pricing').then(module => ({ default: module.Pricing })));
const Contact = lazy(() => import('./components/contact').then(module => ({ default: module.Contact })));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function HomePage() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>

      {/* Admin routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/login" replace />} />
        <Route path="login" element={<AdminLogin />} />
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;