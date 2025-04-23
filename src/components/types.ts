import { BaseProps } from '../../types';
import { ReactNode } from 'react';

export interface IconProps extends BaseProps {
  src: string;
  alt: string;
  size?: number;
}

export interface GridProps extends BaseProps {
  children: ReactNode;
  columns?: number;
  gap?: number;
  padding?: number;
}

export interface ModalProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export interface DesktopIconProps extends BaseProps {
  icon: string;
  label: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
  isSelected?: boolean;
  isDisabled?: boolean;
  position?: {
    x: number;
    y: number;
  };
}

export interface DesktopIconGridProps extends BaseProps {
  icons: DesktopIconProps[];
  onIconClick?: (icon: DesktopIconProps) => void;
  onIconDoubleClick?: (icon: DesktopIconProps) => void;
  gridSize?: {
    columns: number;
    rows: number;
  };
  spacing?: number;
} 