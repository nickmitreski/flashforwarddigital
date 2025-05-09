import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BasePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

export function BasePopup({ isOpen, onClose, title, description, children }: BasePopupProps) {
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
            className="relative w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-[20px] bg-black/10 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]"
            style={{
              background: 'linear-gradient(135deg, rgba(18,18,18,0.8), rgba(18,18,18,0.9))',
              backdropFilter: 'blur(10px)',
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors z-10 bg-white/10 backdrop-blur-xl rounded-full p-2 border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="p-8 border-b border-white/10">
              <h2 className="text-2xl font-medium text-white">{title}</h2>
              <p className="mt-2 text-gray-400">{description}</p>
            </div>

            {/* Content */}
            <div className="p-8">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 