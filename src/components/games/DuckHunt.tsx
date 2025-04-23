import React from 'react';
import { Win95FolderWindow } from '../Win95FolderWindow';

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
      objectCount={1}
    >
      <div className="p-4 text-center bg-white min-h-[200px]">
        <p className="text-sm font-[system-ui]">Duck Hunt game coming soon!</p>
      </div>
    </Win95FolderWindow>
  );
};

export default DuckHunt; 