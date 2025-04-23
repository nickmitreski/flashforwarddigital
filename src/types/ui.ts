import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

// Base props that many components share
export interface BaseProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  'data-testid'?: string;
}

// Common button props
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

// Common input props
export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, BaseProps {
  label?: string;
  error?: string;
  helperText?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

// Modal/Dialog props
export interface ModalProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

// Card props
export interface CardProps extends BaseProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
  footer?: ReactNode;
  onClick?: () => void;
  isHoverable?: boolean;
}

// Icon props
export interface IconProps extends BaseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}

// Layout component props
export interface LayoutProps extends BaseProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
}

// Form field props
export interface FormFieldProps extends BaseProps {
  name: string;
  label?: string;
  error?: string;
  touched?: boolean;
  required?: boolean;
  children: ReactNode;
} 