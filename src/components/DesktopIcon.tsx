// src/components/DesktopIcon.tsx
import React from "react";

interface DesktopIconProps {
  icon: string;
  label: string;
  onDoubleClick: () => void;
}

const DesktopIcon = ({ icon, label, onDoubleClick }: DesktopIconProps) => {
  return (
    <div
      className="inline-flex flex-col items-center p-2 cursor-pointer"
      onDoubleClick={onDoubleClick}
    >
      <img src={icon} alt={label} className="w-12 h-12 mb-1" />
      <span className="text-xs text-center break-words bg-[#037F80] text-white px-1">
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;