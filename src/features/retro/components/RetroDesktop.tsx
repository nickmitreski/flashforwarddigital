import React, { useState } from 'react';
import '../styles/retro.css';

interface Window {
  id: string;
  title: string;
  content: React.ReactNode;
  position: { x: number; y: number };
  isMinimized: boolean;
}

export const RetroDesktop: React.FC = () => {
  const [windows, setWindows] = useState<Window[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const openWindow = (newWindow: Omit<Window, 'position' | 'isMinimized'>) => {
    const position = {
      x: Math.random() * (window.innerWidth - 400),
      y: Math.random() * (window.innerHeight - 300),
    };
    
    setWindows(prev => [...prev, { ...newWindow, position, isMinimized: false }]);
    setActiveWindow(newWindow.id);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindow === id) {
      setActiveWindow(null);
    }
  };

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
    ));
  };

  return (
    <div className="retro-desktop">
      {/* Desktop Icons */}
      <div className="desktop-icons">
        {/* Add your desktop icons here */}
      </div>

      {/* Windows */}
      {windows.map(window => (
        !window.isMinimized && (
          <div
            key={window.id}
            className="win95-window"
            style={{
              left: window.position.x,
              top: window.position.y,
              zIndex: activeWindow === window.id ? 10 : 1,
            }}
            onClick={() => setActiveWindow(window.id)}
          >
            <div className="win95-window-title">
              <span>{window.title}</span>
              <div>
                <button 
                  className="win95-button"
                  onClick={() => minimizeWindow(window.id)}
                >
                  _
                </button>
                <button 
                  className="win95-button"
                  onClick={() => closeWindow(window.id)}
                >
                  X
                </button>
              </div>
            </div>
            <div className="win95-window-content">
              {window.content}
            </div>
          </div>
        )
      ))}

      {/* Taskbar */}
      <div className="win95-taskbar">
        <button className="win95-button start-button">
          Start
        </button>
        {/* Window tabs */}
        <div className="taskbar-windows">
          {windows.map(window => (
            <button
              key={window.id}
              className={`win95-button ${activeWindow === window.id ? 'active' : ''}`}
              onClick={() => {
                setActiveWindow(window.id);
                if (window.isMinimized) {
                  minimizeWindow(window.id);
                }
              }}
            >
              {window.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetroDesktop; 