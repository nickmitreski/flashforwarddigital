// Layout types
export interface ModernLayoutProps {
  children: React.ReactNode;
}

// Navigation types
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Card types
export interface ModernCard {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

// Modal types
export interface ModernModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select';
  options?: { value: string; label: string }[];
  required?: boolean;
  placeholder?: string;
} 