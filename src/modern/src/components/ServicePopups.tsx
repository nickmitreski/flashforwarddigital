import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function BrandingPopup({ isOpen, onClose, title }: ServicePopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="relative w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-[20px] bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors z-10 bg-white/5 backdrop-blur-xl rounded-full p-2 border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="p-8 border-b border-white/10">
              <h2 className="text-2xl font-medium text-white">{title}</h2>
              <p className="mt-2 text-gray-400">Comprehensive branding solutions to build and strengthen your unique identity in the market.</p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Logo Design & Development */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-yellow-500 to-amber-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Logo Design</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Professional logo design including primary & secondary variations, responsive designs, and comprehensive usage guidelines.
                  </p>
                </div>

                {/* Print Materials */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-red-500 to-orange-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Print Materials</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Professional brochures, catalogs, packaging design, and trade show materials creation.
                  </p>
                </div>

                {/* Brand Photography & Art Direction */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Brand Photography</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Custom photography direction, lifestyle shoots, product photography, and visual storytelling that captures your brand's unique essence.
                  </p>
                </div>

                {/* Digital Marketing Assets */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-blue-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Digital Assets</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Social media graphics, banner ads, email templates, and custom landing page designs.
                  </p>
                </div>

                {/* Brand Style Guide */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-purple-500 to-violet-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Brand Style Guide</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Comprehensive style guides including color palettes, typography, design elements, and visual hierarchy guidelines.
                  </p>
                </div>

                {/* Visual Asset Creation */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-pink-500 to-rose-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Visual Assets</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Business cards, stationery, social media templates, email signatures, and presentation materials design.
                  </p>
                </div>

                {/* Brand Experience Design */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Brand Experience</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Customer journey mapping, touchpoint optimization, and comprehensive brand interaction guidelines.
                  </p>
                </div>

                {/* Motion & Animation */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Motion Design</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Animated logos, brand motion graphics, video templates, and engaging social media animations.
                  </p>
                </div>

                {/* Event Branding */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-violet-500 to-purple-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Event Branding</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Event identity design, promotional materials, environmental graphics, and merchandise design.
                  </p>
                </div>

                {/* Product Branding */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-amber-500 to-yellow-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Product Branding</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Product naming, packaging design, product identity development, and line extension branding.
                  </p>
                </div>

                {/* Corporate Identity */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Corporate Identity</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Office environment design, vehicle wraps, uniform design, and comprehensive signage systems.
                  </p>
                </div>

                {/* Trademark & Legal */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-rose-500 to-pink-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Brand Protection</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Trademark research, registration assistance, usage guidelines, and legal compliance support.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ContentPopup({ isOpen, onClose, title }: ServicePopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="relative w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-[20px] bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors z-10 bg-white/5 backdrop-blur-xl rounded-full p-2 border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="p-8">
              <div className="w-full aspect-video rounded-lg overflow-hidden">
                <video 
                  src="/Promo_Videos/content.mov" 
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function AIPopup({ isOpen, onClose, title }: ServicePopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="relative w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-[20px] bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors z-10 bg-white/5 backdrop-blur-xl rounded-full p-2 border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="p-8 border-b border-white/10">
              <h2 className="text-2xl font-medium text-white">{title}</h2>
              <p className="mt-2 text-gray-400">Discover our suite of custom AI solutions designed to transform your business operations and drive innovation.</p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Business Process Automation */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Business Automation</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Custom workflow automations to streamline your business processes and integrate various services seamlessly for maximum efficiency.
                  </p>
                </div>

                {/* Social Media Growth */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-pink-500 to-purple-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Social Media Growth</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Strategic AI-powered growth solutions in partnership with Follow Fuse, delivering exceptional social media presence, engagement optimization, and targeted audience building.
                  </p>
                </div>

                {/* SEO Optimization */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">SEO Optimization</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Comprehensive SEO solutions powered by Impressive Digital, combining AI-driven insights with expert strategies to boost your search rankings and online visibility.
                  </p>
                </div>

                {/* AI Market Analyzer */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">AI Market Analyzer</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Real-time market analysis, competitor monitoring, and industry insights powered by advanced AI algorithms.
                  </p>
                </div>

                {/* Predictive Analytics */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-blue-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Predictive Analytics</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Advanced forecasting for revenue, customer behavior, and business metrics with interactive dashboards.
                  </p>
                </div>

                {/* AI Content Generator */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-yellow-500 to-orange-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">AI Content Generator</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Create engaging blog posts, social media content, and marketing copy with AI-powered writing assistance.
                  </p>
                </div>

                {/* Multilingual AI Translator */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-purple-500 to-violet-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Multilingual AI Translator</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Real-time content translation with cultural context adaptation and SEO optimization for global reach.
                  </p>
                </div>

                {/* AI Ad Campaign Manager */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-red-500 to-rose-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">AI Ad Campaign Manager</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Automated A/B testing, budget optimization, and performance prediction for your advertising campaigns.
                  </p>
                </div>

                {/* Social Media AI Assistant */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-cyan-500 to-teal-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Social Media AI Assistant</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Smart content scheduling, engagement optimization, and trend analysis for social media success.
                  </p>
                </div>

                {/* Dynamic Pricing Engine */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-emerald-500 to-green-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Dynamic Pricing Engine</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Real-time price optimization and competitor monitoring to maximize your profit margins.
                  </p>
                </div>

                {/* AI Security Guardian */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">AI Security Guardian</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Advanced fraud detection, threat prevention, and data protection powered by AI.
                  </p>
                </div>

                {/* Smart Document Processor */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-violet-500 to-purple-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Smart Document Processor</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Automated data extraction, document classification, and intelligent form processing.
                  </p>
                </div>

                {/* AI Research Assistant */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-amber-500 to-yellow-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">AI Research Assistant</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Automated market research, data analysis, and trend identification with comprehensive reporting.
                  </p>
                </div>

                {/* Support Quality Analyzer */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-pink-500 to-rose-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Support Quality Analyzer</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    AI-powered analysis of support quality, response times, and customer satisfaction metrics.
                  </p>
                </div>

                {/* Smart Data Cleansing */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Smart Data Cleansing</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Automated data cleaning, duplicate detection, and standardization for improved data quality.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 