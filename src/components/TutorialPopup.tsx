import React from 'react';
import soundPlayer from "@/utils/sounds";

interface TutorialPopupProps {
  title: string;
  content: string;
  position?: { x: number; y: number };
  onClose: () => void;
  showNext?: boolean;
  onNext?: () => void;
}

const TutorialPopup: React.FC<TutorialPopupProps> = ({
  title,
  content,
  position,
  onClose,
  showNext = false,
  onNext
}) => {
  const handleClose = () => {
    soundPlayer.play('ding');
    onClose();
  };

  const handleNext = () => {
    soundPlayer.play('ding');
    onNext?.();
  };

  return (
    <div 
      className="fixed z-50 w-80 bg-[#c0c0c0] border-2 border-[#868686] border-r-black border-b-black"
      style={{
        left: position?.x ?? '50%',
        top: position?.y ?? '50%',
        transform: position ? 'none' : 'translate(-50%, -50%)'
      }}
    >
      {/* Title bar */}
      <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center">
        <span className="text-sm font-bold">{title}</span>
        <button
          onClick={handleClose}
          className="w-4 h-4 flex items-center justify-center bg-[#c0c0c0] border border-white border-r-black border-b-black active:border-black active:border-r-white active:border-b-white"
        >
          ×
        </button>
      </div>

      {/* Content area */}
      <div className="p-4 bg-white border border-[#868686] border-r-white border-b-white m-1">
        <p className="text-sm font-[system-ui]">{content}</p>
      </div>

      {/* Button bar */}
      <div className="flex justify-end gap-2 p-2 bg-[#c0c0c0] border-t border-[#868686]">
        {showNext && (
          <button
            onClick={handleNext}
            className="px-4 py-1 bg-[#c0c0c0] border border-white border-r-black border-b-black active:border-black active:border-r-white active:border-b-white text-sm"
          >
            Next
          </button>
        )}
        <button
          onClick={handleClose}
          className="px-4 py-1 bg-[#c0c0c0] border border-white border-r-black border-b-black active:border-black active:border-r-white active:border-b-white text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TutorialPopup; 