import { useEffect, useCallback } from 'react';
import { useWindowsStore } from '@/lib/store/windows';

export const useWindowAccessibility = (windowId: string) => {
  const { windows, activeWindowId, closeWindow, focusWindow } = useWindowsStore();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Only handle keyboard events for the active window
    if (activeWindowId !== windowId) return;

    // ESC to close window
    if (e.key === 'Escape') {
      closeWindow(windowId);
    }

    // Alt + Tab to cycle through windows
    if (e.altKey && e.key === 'Tab') {
      e.preventDefault();
      const openWindows = Object.entries(windows)
        .filter(([_, window]) => window.isOpen)
        .map(([id]) => id);

      const currentIndex = openWindows.indexOf(windowId);
      const nextIndex = (currentIndex + 1) % openWindows.length;
      focusWindow(openWindows[nextIndex]);
    }

    // Ctrl + W to close window
    if (e.ctrlKey && e.key === 'w') {
      e.preventDefault();
      closeWindow(windowId);
    }
  }, [windowId, activeWindowId, windows, closeWindow, focusWindow]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // ARIA attributes for the window
  const ariaProps = {
    role: 'dialog',
    'aria-modal': true,
    'aria-labelledby': `window-${windowId}-title`,
    tabIndex: -1,
  };

  // ARIA attributes for the title bar
  const titleBarProps = {
    id: `window-${windowId}-title`,
    role: 'heading',
    'aria-level': 1,
  };

  // ARIA attributes for window controls
  const controlProps = {
    minimize: {
      'aria-label': 'Minimize window',
      role: 'button',
      tabIndex: 0,
    },
    maximize: {
      'aria-label': 'Maximize window',
      role: 'button',
      tabIndex: 0,
    },
    close: {
      'aria-label': 'Close window',
      role: 'button',
      tabIndex: 0,
    },
  };

  return {
    ariaProps,
    titleBarProps,
    controlProps,
  };
}; 