import React from 'react';
import Win95FolderWindow from './Win95FolderWindow';

interface MortalKombatProps {
  isOpen: boolean;
  onClose: () => void;
}

const MortalKombat: React.FC<MortalKombatProps> = ({ isOpen, onClose }) => {
  return (
    <Win95FolderWindow
      title="Mortal Kombat"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="w-[800px] h-[600px]">
        <iframe
          src="https://mk.mgechev.com/"
          className="w-full h-full border-none"
          title="Mortal Kombat"
        />
      </div>
    </Win95FolderWindow>
  );
};

export default MortalKombat; 