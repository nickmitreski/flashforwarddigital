import React from 'react';

interface Win95IconProps {
  icon: string;
  label: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
}

const win95IconStyles = {
  container: "flex flex-col items-center w-[70px] h-[70px] cursor-pointer select-none group",
  icon: "w-[32px] h-[32px] mb-1",
  label: "text-[11px] text-center leading-tight px-1 max-w-[64px]",
};

const Win95Icon: React.FC<Win95IconProps> = ({
  icon,
  label,
  onClick,
  onDoubleClick,
}) => {
  return (
    <div
      className={win95IconStyles.container}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <img src={icon} alt={label} className={win95IconStyles.icon} />
      <span className={win95IconStyles.label}>{label}</span>
    </div>
  );
};

export default Win95Icon; 