import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
  color?: string;
  gradient?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showFooter?: boolean;
  footerContent?: React.ReactNode;
}

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-2xl',
  lg: 'max-w-4xl',
  xl: 'max-w-6xl',
  full: 'max-w-full mx-4'
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  color = 'text-[#008CFF]',
  gradient = 'from-blue-400 via-indigo-500 to-purple-600',
  size = 'md',
  showFooter = true,
  footerContent
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className={`relative bg-gray-950 rounded-2xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-y-auto`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className={`p-6 border-b border-[#008CFF]/30 flex items-center justify-between sticky top-0 bg-gray-950 z-10`}>
            <h2 className={`text-2xl font-medium ${color}`}>{title}</h2>
            <button 
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {children}
          </div>

          {/* Modal Footer */}
          {showFooter && (
            <div className="p-6 border-t border-[#008CFF]/30 flex justify-end sticky bottom-0 bg-gray-950">
              {footerContent || (
                <button 
                  onClick={onClose}
                  className={`shiny-cta bg-gradient-to-r ${gradient}`}
                >
                  <span>Close</span>
                </button>
              )}
            </div>
          )}

          {/* Decorative gradient border */}
          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10 rounded-2xl pointer-events-none`} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};