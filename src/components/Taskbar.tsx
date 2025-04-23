import React, { useState, useEffect } from "react";
import StartMenu from "./StartMenu";

interface TaskbarProps {
  startMenuOpen: boolean;
  setStartMenuOpen: (open: boolean) => void;
  onPowerOff: () => void;
}

const Taskbar = ({ startMenuOpen, setStartMenuOpen, onPowerOff }: TaskbarProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleStartClick = () => {
    setStartMenuOpen(!startMenuOpen);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-8 bg-win98-gray border-t-2 border-win98-border-light flex items-center justify-between px-2">
      <button
        onClick={handleStartClick}
        className="h-6 flex items-center justify-center bg-win98-gray border-2 border-win98-border-light border-r-win98-border-dark border-b-win98-border-dark"
      >
        <img 
          src="/lovable-uploads/7ac32b65-329f-43e9-8e7e-460b5975136d.png" 
          alt="Start" 
          className="h-full"
        />
      </button>
      <StartMenu 
        isOpen={startMenuOpen} 
        onClose={() => setStartMenuOpen(false)} 
        onPowerOff={onPowerOff}
      />
      <div className="px-2 py-1 bg-win98-gray border border-win98-border-dark">
        {currentTime.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Taskbar;