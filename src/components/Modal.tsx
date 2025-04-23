import React, { useEffect } from "react";
import { ModalProps, MouseHandler } from "../types";

const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  title,
  size = "md",
  className = "",
  style,
  ...props
}) => {
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleOverlayClick: MouseHandler = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full",
  };

  return (
    <div
      className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
      {...props}
    >
      <div
        className={`modal-content bg-white rounded-lg shadow-xl overflow-hidden ${sizeClasses[size]} w-full m-4 ${className}`}
        style={style}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header flex items-center justify-between p-4 border-b">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          <button
            className="modal-close p-1 hover:bg-gray-100 rounded-full transition-colors"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="modal-body p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal; 