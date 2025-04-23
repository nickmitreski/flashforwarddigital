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

            {/* Content */}
            <div className="p-8">
              <div className="w-full aspect-video rounded-lg overflow-hidden">
                <video 
                  src="/Promo_Videos/branding.mov" 
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
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* N8N Automations */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">N8N Automations</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Custom workflow automations powered by N8N to streamline your business processes and integrate various services seamlessly.
                  </p>
                </div>

                {/* AI Image Generation */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">AI Image Generation</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    State-of-the-art AI image generation tools to create unique, high-quality visuals for your brand and marketing needs.
                  </p>
                </div>

                {/* Chatbot */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">AI Chatbot</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Intelligent conversational AI that provides instant support and engagement for your customers 24/7.
                  </p>
                </div>

                {/* Web Browser Tool */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-orange-500 to-yellow-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Web Browser Tool</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Coming soon: A powerful web-based application that enhances your browsing experience with AI-powered features.
                  </p>
                </div>

                {/* AI Voice Agent */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-blue-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">AI Voice Agent</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Advanced voice AI technology that can handle customer inquiries, schedule appointments, and provide information naturally.
                  </p>
                </div>

                {/* Lead Generation */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-rose-500 to-red-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Lead Generation</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    AI-powered lead generation system that identifies and qualifies potential customers, maximizing your sales pipeline efficiency.
                  </p>
                </div>

                {/* Sales Agent */}
                <div className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-emerald-500 to-teal-400 p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white">Sales Agent</h3>
                  </div>
                  <p className="mt-4 text-sm/relaxed text-gray-300">
                    Intelligent AI sales assistant that nurtures leads, handles inquiries, and closes deals with personalized communication.
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