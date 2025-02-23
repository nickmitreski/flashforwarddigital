import React, { useEffect } from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'calc(100% - 100px)',
          height: 'calc(100% - 100px)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          overflow: 'auto',
          position: 'relative',
        }}
      >
        <button
          className="modal-close"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: '#ff5c5c',
            border: 'none',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            color: 'lightblue',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ff1c1c')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff5c5c')}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal; 