import { Layout } from './components/layout'
import { Suspense, lazy } from 'react'

// Lazy load components
const Hero = lazy(() => import('./components/hero').then(module => ({ default: module.Hero })))
const About = lazy(() => import('./components/about').then(module => ({ default: module.About })))
const Services = lazy(() => import('./components/services'))
const Stats = lazy(() => import('./components/stats').then(module => ({ default: module.Stats })))
const Pricing = lazy(() => import('./components/pricing').then(module => ({ default: module.Pricing })))
const Contact = lazy(() => import('./components/contact').then(module => ({ default: module.Contact })))

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

export default function App() {
  return (
    <Layout>
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
    </Layout>
  );
}