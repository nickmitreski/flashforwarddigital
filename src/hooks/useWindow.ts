import { useCallback, useRef, useState } from 'react';
import { WindowState } from '../components/retro/types';

interface UseWindowProps {
  id: string;
  initialState?: Partial<WindowState>;
  onStateChange?: (state: WindowState) => void;
}

export const useWindow = ({ id, initialState, onStateChange }: UseWindowProps) => {
  const [state, setState] = useState<WindowState>({
    id,
    isOpen: initialState?.isOpen ?? true,
    isMinimized: initialState?.isMinimized ?? false,
    isMaximized: initialState?.isMaximized ?? false,
    zIndex: initialState?.zIndex ?? 1,
    position: initialState?.position ?? { x: 0, y: 0 },
  });

  const dragRef = useRef({ x: 0, y: 0, isDragging: false });
  const windowRef = useRef<HTMLDivElement>(null);

  const updateState = useCallback((updates: Partial<WindowState>) => {
    setState(prev => {
      const newState = { ...prev, ...updates };
      onStateChange?.(newState);
      return newState;
    });
  }, [onStateChange]);

  const handleClose = useCallback(() => {
    updateState({ isOpen: false });
  }, [updateState]);

  const handleMinimize = useCallback(() => {
    updateState({ isMinimized: !state.isMinimized });
  }, [state.isMinimized, updateState]);

  const handleMaximize = useCallback(() => {
    updateState({ 
      isMaximized: !state.isMaximized,
      position: !state.isMaximized ? state.position : { x: 0, y: 0 }
    });
  }, [state.isMaximized, state.position, updateState]);

  const handleFocus = useCallback(() => {
    updateState({ zIndex: Date.now() });
  }, [updateState]);

  const handleDragStart = useCallback((e: React.MouseEvent) => {
    if (!windowRef.current || state.isMaximized) return;

    const rect = windowRef.current.getBoundingClientRect();
    dragRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isDragging: true,
    };

    const handleDragMove = (e: MouseEvent) => {
      if (!dragRef.current.isDragging || !windowRef.current) return;

      const x = e.clientX - dragRef.current.x;
      const y = e.clientY - dragRef.current.y;

      updateState({ position: { x, y } });
    };

    const handleDragEnd = () => {
      dragRef.current.isDragging = false;
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
    };

    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
  }, [state.isMaximized, updateState]);

  return {
    windowRef,
    state,
    handleClose,
    handleMinimize,
    handleMaximize,
    handleFocus,
    handleDragStart,
  };
}; 