import React from 'react';
import Win95FolderWindow from './Win95FolderWindow';

interface StreetFighterProps {
  isOpen: boolean;
  onClose: () => void;
}

const StreetFighter: React.FC<StreetFighterProps> = ({ isOpen, onClose }) => {
  return (
    <Win95FolderWindow
      title="Street Fighter Alpha"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="w-[800px] h-[600px]">
        <iframe
          src="https://gamedev8.github.io/js-sfa/default.htm"
          className="w-full h-full border-none"
          title="Street Fighter Alpha"
        />
      </div>
    </Win95FolderWindow>
  );
};

export default StreetFighter; 