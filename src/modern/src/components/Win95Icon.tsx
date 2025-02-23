import React from 'react'
import { win95Icons, type Win95IconName } from '../utils/win95Icons'

interface Win95IconProps {
  icon: Win95IconName
  label?: string
  size?: number
  className?: string
  onClick?: () => void
  onDoubleClick?: () => void
  isSelected?: boolean
}

export const Win95Icon: React.FC<Win95IconProps> = ({ 
  icon, 
  label,
  size = 32,
  className = '',
  onClick,
  onDoubleClick,
  isSelected = false
}) => {
  const IconComponent = win95Icons[icon]
  if (!IconComponent) return null

  return (
    <div 
      className={`flex flex-col items-center p-2 cursor-pointer select-none group
        ${isSelected ? 'bg-[#000080] text-white' : 'hover:bg-[#000080]/20'}
        ${className}`}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <div style={{ width: size, height: size }}>
        <IconComponent style={{ width: '100%', height: '100%' }} />
      </div>
      {label && (
        <span className="text-[11px] font-[system-ui] text-center mt-1 px-1">
          {label}
        </span>
      )}
    </div>
  )
} 