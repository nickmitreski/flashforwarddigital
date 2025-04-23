export type IconType = 
  | 'folder'
  | 'folder-open'
  | 'file'
  | 'file-text'
  | 'file-image'
  | 'file-pdf'
  | 'error';

export interface IconProps {
  icon: IconType;
  size?: number;
  className?: string;
  alt?: string;
} 