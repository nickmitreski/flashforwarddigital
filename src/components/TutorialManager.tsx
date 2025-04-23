import React, { useState, useEffect, useRef } from 'react';

interface TutorialStep {
  id: number;
  title: string;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  target?: string;
}

const tutorialSteps: TutorialStep[] = [
  {
    id: 1,
    title: 'Welcome to Windows 95!',
    content: 'Welcome to our interactive retro Windows 95 experience! You can click on icons to open programs and explore the interface.',
    position: 'bottom',
    target: 'desktop'
  },
  {
    id: 2,
    title: 'Games Folder',
    content: 'The Games folder contains actual playable retro games! Try opening it to play some classic Windows games.',
    position: 'right',
    target: 'games-folder'
  },
  {
    id: 3,
    title: 'Modern Site',
    content: 'The Modern Site icon will take you to our contemporary website. Click it whenever you want to switch between retro and modern experiences.',
    position: 'right',
    target: 'modern-site'
  }
];

const TutorialManager: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showTutorial, setShowTutorial] = useState<boolean>(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const tutorialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
    if (hasSeenTutorial) {
      setShowTutorial(false);
    }
  }, []);

  useEffect(() => {
    if (!showTutorial) return;

    const currentTutorialStep = tutorialSteps[currentStep];
    if (!currentTutorialStep.target) return;

    const targetElement = document.querySelector(`[data-tutorial-target="${currentTutorialStep.target}"]`);
    if (!targetElement || !tutorialRef.current) return;

    const targetRect = targetElement.getBoundingClientRect();
    const tutorialRect = tutorialRef.current.getBoundingClientRect();
    
    let x = 0;
    let y = 0;

    switch (currentTutorialStep.position) {
      case 'right':
        x = targetRect.right + 10;
        y = targetRect.top + (targetRect.height - tutorialRect.height) / 2;
        
        // Special case for Modern Site - position it further to the right
        if (currentTutorialStep.target === 'modern-site') {
          x = targetRect.right + 50; // Increased offset for Modern Site
        }
        break;
      case 'left':
        x = targetRect.left - tutorialRect.width - 10;
        y = targetRect.top + (targetRect.height - tutorialRect.height) / 2;
        break;
      case 'top':
        x = targetRect.left + (targetRect.width - tutorialRect.width) / 2;
        y = targetRect.top - tutorialRect.height - 10;
        break;
      case 'bottom':
      default:
        x = targetRect.left + (targetRect.width - tutorialRect.width) / 2;
        y = targetRect.bottom + 10;
        break;
    }

    // Ensure the tutorial stays within viewport
    x = Math.max(10, Math.min(x, window.innerWidth - tutorialRect.width - 10));
    y = Math.max(10, Math.min(y, window.innerHeight - tutorialRect.height - 10));

    setPosition({ x, y });
  }, [currentStep, showTutorial]);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowTutorial(false);
      localStorage.setItem('hasSeenTutorial', 'true');
    }
  };

  const handleClose = () => {
    setShowTutorial(false);
    localStorage.setItem('hasSeenTutorial', 'true');
  };

  if (!showTutorial) return null;

  const currentTutorialStep = tutorialSteps[currentStep];

  return (
    <div 
      ref={tutorialRef}
      className="fixed z-50 w-80 bg-[#c0c0c0] border-2 border-[#868686] border-r-black border-b-black"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      {/* Title bar */}
      <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center">
        <span className="text-sm font-bold">{currentTutorialStep.title}</span>
        <button
          onClick={handleClose}
          className="w-4 h-4 flex items-center justify-center bg-[#c0c0c0] border border-white border-r-black border-b-black active:border-black active:border-r-white active:border-b-white"
        >
          ×
        </button>
      </div>

      {/* Content area */}
      <div className="p-4 bg-white border border-[#868686] border-r-white border-b-white m-1">
        <p className="text-sm font-[system-ui]">{currentTutorialStep.content}</p>
      </div>

      {/* Button bar */}
      <div className="flex justify-end gap-2 p-2 bg-[#c0c0c0] border-t border-[#868686]">
        <button
          onClick={handleNext}
          className="px-4 py-1 bg-[#c0c0c0] border border-white border-r-black border-b-black active:border-black active:border-r-white active:border-b-white text-sm"
        >
          {currentStep === tutorialSteps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default TutorialManager; 