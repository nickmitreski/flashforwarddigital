import React from 'react';
import { Win95Icon } from './Win95Icon';
import DesktopBackground from './DesktopBackground';
import { useParallaxEffect } from '../utils/animation';
import { useIcons } from '../hooks/useIcons';
import { useNavigate } from 'react-router-dom';
import type { Win95IconConfig } from '../types/icons';

const Desktop: React.FC = () => {
  useParallaxEffect();
  const icons = useIcons();
  const navigate = useNavigate();

  const handleModernSiteClick = () => {
    console.log('Navigating to modern site');
    navigate('/modern');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <DesktopBackground />

      {/* Desktop Icons */}
      <div className="relative z-10 w-full h-full">
        {icons.map((icon: Win95IconConfig, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${icon.position.x}%`,
              top: `${icon.position.y}%`,
              transform: `scale(${icon.size})`,
              zIndex: icon.depth
            }}
          >
            <Win95Icon 
              icon={icon.icon}
              label={icon.label}
              size={48}
            />
          </div>
        ))}
      </div>

      {/* Screen dimming overlay */}
      <div className="pointer-events-none absolute inset-0 transition-colors duration-300 bg-black/0 group-hover:bg-black/30" />

      {/* Modern Site Button */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black flex items-center justify-center gap-12 p-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="relative group cursor-pointer" onClick={handleModernSiteClick}>
          <div className="absolute inset-0 bg-[#c0c0c0] border-[3px] border-[#ffffff] border-r-[#808080] border-b-[#808080] transform transition-transform group-hover:-translate-y-1"></div>
          <div className="relative px-12 py-6 bg-[#c0c0c0] border-[3px] border-[#ffffff] border-r-[#808080] border-b-[#808080] font-[system-ui] text-xl transform transition-transform active:translate-y-1 active:border-[#808080] active:border-r-[#ffffff] active:border-b-[#ffffff] group-hover:bg-[#d4d4d4]">
            <div className="flex flex-col items-center gap-3">
              <img src="/lovable-uploads/95545d84-1015-4c18-8508-5625fd44954f.png" alt="Windows" className="w-12 h-12" />
              <span>Go to Modern Site</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;