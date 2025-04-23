import React from 'react';
import { ButtonProps } from '@/types';

const Win95Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-1 
        text-sm 
        font-[system-ui]
        bg-[#c0c0c0] 
        border-2 
        border-t-white 
        border-l-white 
        border-r-[#808080] 
        border-b-[#808080] 
        active:border-t-[#808080] 
        active:border-l-[#808080] 
        active:border-r-white 
        active:border-b-white
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Win95Button; 