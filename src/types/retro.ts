// Window related types
export interface WindowPosition {
  x: number;
  y: number;
}

export interface Window {
  id: string;
  title: string;
  content: React.ReactNode;
  position: WindowPosition;
  isMinimized: boolean;
}

// Desktop icon types
export interface DesktopIcon {
  id: string;
  label: string;
  icon: string;
  onClick: () => void;
}

// Taskbar types
export interface TaskbarItem {
  id: string;
  title: string;
  isActive: boolean;
  isMinimized: boolean;
}

// Context menu types
export interface ContextMenuItem {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  separator?: boolean;
} 