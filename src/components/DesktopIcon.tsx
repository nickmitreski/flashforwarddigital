// src/components/DesktopIcon.tsx
import React, { useState } from "react";
import { BaseProps, MouseHandler } from "../types";

interface DesktopIconProps extends BaseProps {
  icon: string;
  label: string;
  onDoubleClick: MouseHandler;
  isSelected?: boolean;
  isDisabled?: boolean;
  position?: {
    x: number;
    y: number;
  };
  'data-tutorial-target'?: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({
  icon,
  label,
  onDoubleClick,
  isSelected = false,
  isDisabled = false,
  position,
  className = "",
  style,
  'data-tutorial-target': dataTutorialTarget,
  ...props
}) => {
  const [imgError, setImgError] = useState(false);
  
  // Fallback icon for when the main icon fails to load
  const fallbackIcon = "/lovable-uploads/error.png";
  
  return (
    <div
      className={`inline-flex flex-col items-center p-2 cursor-pointer ${
        isSelected ? "bg-[#037F80] bg-opacity-50" : ""
      } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      onDoubleClick={!isDisabled ? onDoubleClick : undefined}
      style={{
        ...style,
        ...(position && {
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
        }),
      }}
      data-tutorial-target={dataTutorialTarget}
      {...props}
    >
      <img 
        src={imgError ? fallbackIcon : icon} 
        alt={label} 
        className="w-12 h-12 mb-1" 
        onError={() => setImgError(true)}
      />
      <span className="text-xs text-center break-words bg-[#037F80] text-white px-1">
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;