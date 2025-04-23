import React, { useState } from 'react';
import Win95FolderWindow from './Win95FolderWindow';
import Win95Icon from './Win95Icon';

// Windows 95 icon URLs
const win95Icons = {
  hardDrive: "/lovable-uploads/hard_disk_drive-4.png",
  floppyDrive: "/lovable-uploads/floppy_drive-4.png",
  controlPanel: "/lovable-uploads/settings_gear-0.png",
  printer: "/lovable-uploads/printer-0.png"
};

const MyComputer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Win95FolderWindow
      title="My Computer"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      objectCount={4}
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 p-2">
        <Win95Icon
          icon={win95Icons.hardDrive}
          label="Hard disk (C:)"
          onDoubleClick={() => console.log('Opening C: drive')}
        />
        <Win95Icon
          icon={win95Icons.floppyDrive}
          label="3½ Floppy (A:)"
          onDoubleClick={() => console.log('Opening floppy drive')}
        />
        <Win95Icon
          icon={win95Icons.printer}
          label="Printers"
          onDoubleClick={() => console.log('Opening Printers')}
        />
        <Win95Icon
          icon={win95Icons.controlPanel}
          label="Control Panel"
          onDoubleClick={() => console.log('Opening Control Panel')}
        />
      </div>
    </Win95FolderWindow>
  );
};

export default MyComputer; 