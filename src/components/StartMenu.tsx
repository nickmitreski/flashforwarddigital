import React from "react";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onPowerOff: () => void;
}

const StartMenu = ({ isOpen, onClose, onPowerOff }: StartMenuProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed bottom-8 left-0 w-64 bg-win98-gray border-2 border-win98-border-light border-r-win98-border-dark border-b-win98-border-dark animate-fade-in"
      onMouseLeave={onClose}
    >
      <div className="bg-win98-blue p-2 text-white font-bold">
        Windows 98
      </div>
      <div className="p-2">
        <div className="p-1 cursor-pointer hover:bg-[#000080] hover:text-white">Programs</div>
        <div className="p-1 cursor-pointer hover:bg-[#000080] hover:text-white">Documents</div>
        <div className="p-1 cursor-pointer hover:bg-[#000080] hover:text-white">Settings</div>
        <div className="border-t border-win98-border-dark mt-2 pt-2">
          <div 
            className="p-1 cursor-pointer hover:bg-[#000080] hover:text-white"
            onClick={() => {
              onClose();
              onPowerOff();
            }}
          >
            Shut Down...
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;