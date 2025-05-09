import React from 'react';
import { trackFeatureClick } from '../../utils/analytics';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  onClick?: () => void;
}

export function ServiceCard({ 
  title, 
  description, 
  icon, 
  gradientFrom, 
  gradientTo,
  onClick 
}: ServiceCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    trackFeatureClick(title);
  };

  return (
    <div 
      className="group relative rounded-xl border border-white/10 bg-black/30 p-6 backdrop-blur-lg transition-all hover:bg-black/40"
      onClick={handleClick}
    >
      <div className="flex items-center gap-4">
        <div className={`rounded-lg bg-gradient-to-br from-${gradientFrom} to-${gradientTo} p-2`}>
          {icon}
        </div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>
      <p className="mt-4 text-sm/relaxed text-gray-300">
        {description}
      </p>
    </div>
  );
} 