import React from 'react';
import { Win95FolderWindow } from '@/components';

interface DuckHuntProps {
  isOpen: boolean;
  onClose: () => void;
}

const DuckHunt: React.FC<DuckHuntProps> = ({ isOpen, onClose }) => {
  return (
    <Win95FolderWindow
      title="Duck Hunt"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="w-[800px] h-[600px]">
        <iframe
          src="https://duckhuntjs.com/"
          className="w-full h-full border-none"
          title="Duck Hunt"
        />
      </div>
    </Win95FolderWindow>
  );
};

export default DuckHunt; 