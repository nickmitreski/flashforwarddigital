import React from 'react';
import { ModalProps } from '@/types';
import { X } from 'lucide-react';

const Win95Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      />
      <div 
        className={`relative bg-[#c0c0c0] shadow-[2px_2px_0px_0px_#000000] ${className}`}
        style={{ minWidth: '200px' }}
      >
        {/* Title Bar */}
        <div className="bg-[#000080] px-2 py-1 flex items-center justify-between">
          <span className="text-white text-sm font-bold">{title}</span>
          <button
            onClick={onClose}
            className="px-2 py-0.5 text-black bg-[#c0c0c0] hover:bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]"
          >
            <X size={12} />
          </button>
        </div>

        {/* Content */}
        <div className="border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] m-1">
          <div className="border border-[#808080] border-r-white border-b-white">
            <div className="bg-[#c0c0c0] p-4">
              {children}
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-end gap-2 p-2">
          <button
            onClick={onClose}
            className="px-4 py-1 text-sm bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Win95Modal; 