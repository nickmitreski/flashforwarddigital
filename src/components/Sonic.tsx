import React from 'react';
import Win95FolderWindow from './Win95FolderWindow';

interface SonicProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sonic: React.FC<SonicProps> = ({ isOpen, onClose }) => {
  return (
    <Win95FolderWindow
      title="Sonic"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="w-[800px] h-[600px]">
        <iframe
          src="https://clarkeadg.github.io/opensonic-js/"
          className="w-full h-full border-none"
          title="Sonic"
        />
      </div>
    </Win95FolderWindow>
  );
};

export default Sonic; 