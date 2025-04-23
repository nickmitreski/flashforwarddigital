import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { DesktopState, WindowState, DesktopIconState } from '../components/retro/types';

// Action types
type DesktopAction =
  | { type: 'OPEN_WINDOW'; payload: WindowState }
  | { type: 'CLOSE_WINDOW'; payload: string }
  | { type: 'UPDATE_WINDOW'; payload: WindowState }
  | { type: 'SET_ACTIVE_WINDOW'; payload: string }
  | { type: 'UPDATE_ICON'; payload: DesktopIconState }
  | { type: 'SELECT_ICON'; payload: string }
  | { type: 'DESELECT_ALL_ICONS' };

// Initial state
const initialState: DesktopState = {
  activeWindow: null,
  windows: [],
  icons: [],
};

// Reducer
function desktopReducer(state: DesktopState, action: DesktopAction): DesktopState {
  switch (action.type) {
    case 'OPEN_WINDOW':
      return {
        ...state,
        windows: [...state.windows, action.payload],
        activeWindow: action.payload.id,
      };

    case 'CLOSE_WINDOW':
      return {
        ...state,
        windows: state.windows.filter(w => w.id !== action.payload),
        activeWindow: state.activeWindow === action.payload ? null : state.activeWindow,
      };

    case 'UPDATE_WINDOW':
      return {
        ...state,
        windows: state.windows.map(w =>
          w.id === action.payload.id ? action.payload : w
        ),
      };

    case 'SET_ACTIVE_WINDOW':
      return {
        ...state,
        activeWindow: action.payload,
      };

    case 'UPDATE_ICON':
      return {
        ...state,
        icons: state.icons.map(icon =>
          icon.id === action.payload.id ? action.payload : icon
        ),
      };

    case 'SELECT_ICON':
      return {
        ...state,
        icons: state.icons.map(icon => ({
          ...icon,
          isSelected: icon.id === action.payload,
        })),
      };

    case 'DESELECT_ALL_ICONS':
      return {
        ...state,
        icons: state.icons.map(icon => ({
          ...icon,
          isSelected: false,
        })),
      };

    default:
      return state;
  }
}

// Context
interface DesktopContextValue {
  state: DesktopState;
  openWindow: (window: WindowState) => void;
  closeWindow: (id: string) => void;
  updateWindow: (window: WindowState) => void;
  setActiveWindow: (id: string) => void;
  updateIcon: (icon: DesktopIconState) => void;
  selectIcon: (id: string) => void;
  deselectAllIcons: () => void;
}

const DesktopContext = createContext<DesktopContextValue | null>(null);

// Provider component
export const DesktopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(desktopReducer, initialState);

  const openWindow = useCallback((window: WindowState) => {
    dispatch({ type: 'OPEN_WINDOW', payload: window });
  }, []);

  const closeWindow = useCallback((id: string) => {
    dispatch({ type: 'CLOSE_WINDOW', payload: id });
  }, []);

  const updateWindow = useCallback((window: WindowState) => {
    dispatch({ type: 'UPDATE_WINDOW', payload: window });
  }, []);

  const setActiveWindow = useCallback((id: string) => {
    dispatch({ type: 'SET_ACTIVE_WINDOW', payload: id });
  }, []);

  const updateIcon = useCallback((icon: DesktopIconState) => {
    dispatch({ type: 'UPDATE_ICON', payload: icon });
  }, []);

  const selectIcon = useCallback((id: string) => {
    dispatch({ type: 'SELECT_ICON', payload: id });
  }, []);

  const deselectAllIcons = useCallback(() => {
    dispatch({ type: 'DESELECT_ALL_ICONS' });
  }, []);

  return (
    <DesktopContext.Provider
      value={{
        state,
        openWindow,
        closeWindow,
        updateWindow,
        setActiveWindow,
        updateIcon,
        selectIcon,
        deselectAllIcons,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
};

// Hook for using the desktop context
export const useDesktop = () => {
  const context = useContext(DesktopContext);
  if (!context) {
    throw new Error('useDesktop must be used within a DesktopProvider');
  }
  return context;
}; 