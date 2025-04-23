import React, { useState, useEffect } from 'react';
import { IconProps } from '../types/icon';
import { getIconPath, getFallbackIcon } from '../utils/iconUtils';
import './Icon.css';

export const Icon: React.FC<IconProps> = ({ 
  icon, 
  size = 24, 
  className = '', 
  alt = 'icon' 
}) => {
  const [iconPath, setIconPath] = useState<string>(getFallbackIcon());
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const path = await getIconPath(icon);
        setIconPath(path);
        setError(false);
      } catch (err) {
        setIconPath(getFallbackIcon());
        setError(true);
        console.error(`Failed to load icon: ${icon}`, err);
      }
    };

    loadIcon();
  }, [icon]);

  return (
    <img
      src={iconPath}
      alt={alt}
      width={size}
      height={size}
      className={`icon ${className} ${error ? 'icon-error' : ''}`}
      style={{ minWidth: size, minHeight: size }}
    />
  );
}; 