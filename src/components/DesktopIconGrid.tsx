import React, { useState, useEffect } from "react";
import DesktopIcon from "./DesktopIcon";
import Win95FolderWindow from "./Win95FolderWindow";
import Games from "./Games";
import Win95Chat from "./Win95Chat";
import WebTV from "./webtv/WebTV";
import { ChevronRight } from "lucide-react";
import { Monitor } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// First, let's add the missing style constants
const win95Button = "px-2 py-1 bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] active:border-[#808080] active:border-r-[#ffffff] active:border-b-[#ffffff] flex items-center gap-1";
const win95Toolbar = "flex items-center gap-1 border-b border-[#808080] bg-[#c0c0c0] p-1";
const win95Divider = "w-px h-full bg-[#808080] mx-1";
const win95Heading = "px-2 py-1 text-[11px] font-[system-ui] border-b border-[#808080]";

// Updated window styles to match classic Windows 95
const win95MenuButton = "px-2 py-0.5 hover:bg-[#000080] hover:text-white focus:outline-none focus:bg-[#000080] focus:text-white text-left whitespace-nowrap font-[system-ui]";
const win95Window = "bg-[#c0c0c0] border border-[#ffffff] border-r-[#000000] border-b-[#000000]";
const win95ContentArea = "bg-white border border-[#808080] border-r-[#ffffff] border-b-[#ffffff]";
const win95MenuBar = "flex border-b border-[#808080] bg-[#c0c0c0] px-0.5 py-[2px] select-none";
const win95StatusBar = "border-t border-[#ffffff] bg-[#c0c0c0] px-2 py-0.5 text-[11px] font-[system-ui]";
const win95IconContainer = "flex flex-col items-center p-2 cursor-pointer select-none group";
const win95Label = "text-[11px] font-[system-ui] text-center mt-1 px-1";

// Add these icon URLs at the top of the file after the imports
const win95Icons = {
  textFile: "https://win98icons.alexmeub.com/icons/png/notepad-0.png",
  wordDoc: "https://win98icons.alexmeub.com/icons/png/write_file-0.png",
  excelDoc: "https://win98icons.alexmeub.com/icons/png/excel_file-0.png",
  folder: "https://win98icons.alexmeub.com/icons/png/directory_closed-4.png",
  image: "https://win98icons.alexmeub.com/icons/png/paint_file-0.png",
  video: "https://win98icons.alexmeub.com/icons/png/video_file-0.png",
  audio: "https://win98icons.alexmeub.com/icons/png/sound-0.png",
  help: "https://win98icons.alexmeub.com/icons/png/help_book-0.png",
  settings: "https://win98icons.alexmeub.com/icons/png/settings_gear-0.png",
  game: "https://win98icons.alexmeub.com/icons/png/joystick-0.png",
  network: "https://win98icons.alexmeub.com/icons/png/network_computer_2-0.png",
  computer: "https://win98icons.alexmeub.com/icons/png/computer_2-0.png",
  cdrom: "https://win98icons.alexmeub.com/icons/png/cd_drive-5.png",
  floppyDrive: "https://win98icons.alexmeub.com/icons/png/floppy_drive-4.png",
  error: "/lovable-uploads/error.png",
  play: "https://win98icons.alexmeub.com/icons/png/media_play-0.png",
  pause: "https://win98icons.alexmeub.com/icons/png/media_pause-0.png",
  stop: "https://win98icons.alexmeub.com/icons/png/media_stop-0.png",
  next: "https://win98icons.alexmeub.com/icons/png/media_next-0.png",
  prev: "https://win98icons.alexmeub.com/icons/png/media_prev-0.png",
  volume: "https://win98icons.alexmeub.com/icons/png/loudspeaker_rays-0.png"
};

// Update the interface to include all window types
interface DesktopIconGridProps {
  toggleWindow: (window: string) => void;
  openExternalLink: (url: string) => void;
  showChoiceScreen: boolean;
  setShowChoiceScreen: (show: boolean) => void;
  showWindows: boolean;
  setShowWindows: (show: boolean) => void;
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties;

  return (
    <div
      className="pointer-events-none absolute size-full overflow-hidden [perspective:200px] opacity-[var(--opacity)]"
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  );
};

const DesktopIconGrid = ({ 
  toggleWindow, 
  openExternalLink,
  showChoiceScreen,
  setShowChoiceScreen,
  showWindows,
  setShowWindows
}: DesktopIconGridProps) => {
  const [openFolderWindows, setOpenFolderWindows] = useState<Record<string, boolean>>({});
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [visitStartTime] = useState<Date>(new Date());
  const [visitDuration, setVisitDuration] = useState<string>("0:00");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showWebTV, setShowWebTV] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateDuration = () => {
      const now = new Date();
      const diff = now.getTime() - visitStartTime.getTime();
      const minutes = Math.floor(diff / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setVisitDuration(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    };

    const timer = setInterval(updateDuration, 1000);
    return () => clearInterval(timer);
  }, [visitStartTime]);

  useEffect(() => {
    if (isLoading) {
      const startTime = Date.now();
      const duration = 3000; // 3 seconds
      
      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / duration) * 100, 100);
        setLoadingProgress(progress);
        
        if (progress < 100) {
          requestAnimationFrame(updateProgress);
        }
      };
      
      requestAnimationFrame(updateProgress);
    } else {
      setLoadingProgress(0);
    }
  }, [isLoading]);

  const toggleFolderWindow = (folder: string) => {
    setOpenFolderWindows(prev => ({
      ...prev,
      [folder]: !prev[folder]
    }));
  };

  const handleFirstErrorClose = () => {
    setShowErrorMessage(false);
    setShowSecondPopup(true);
  };

  const handleContinue = () => {
    setIsLoading(true);
    let progress = 0;
    
    const interval = setInterval(() => {
      progress += 2;
      setLoadingProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setShowSecondPopup(false);
        setIsLoading(false);
        navigate('/analytics-transition');
      }
    }, 60);

    return () => clearInterval(interval);
  };

  const handleTimeTravelClick = () => {
    setShowChoiceScreen(false);
    setShowWindows(true);
  };

  const handleModernClick = () => {
    setShowChoiceScreen(false);
    navigate('/modern');
  };

  const handleToggleWindow = (window: string) => {
    if (window === "webtv") {
      setShowWebTV(!showWebTV);
    } else {
      toggleWindow(window);
    }
  };

  if (showChoiceScreen) {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black flex items-center justify-center gap-12 p-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Windows 95 Style Button */}
        <div className="relative group cursor-pointer" onClick={handleTimeTravelClick}>
          <div className="relative px-8 py-4 bg-[#c0c0c0] border border-[#ffffff] border-r-[#808080] border-b-[#808080] flex flex-col items-center gap-2">
            <img src="/lovable-uploads/95545d84-1015-4c18-8508-5625fd44954f.png" alt="Windows" className="w-8 h-8" />
            <span className="text-black text-base">Time Travel back in time</span>
          </div>
        </div>

        {/* Modern Style Button */}
        <div className="relative group cursor-pointer" onClick={handleModernClick}>
          <div className="relative px-8 py-4 bg-black/50 backdrop-blur-sm rounded-lg flex flex-col items-center gap-2 border-2 border-purple-500">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </div>
            <span className="text-purple-500 text-base font-bold">Straight to business</span>
          </div>
        </div>

        {/* Add a subtle description */}
        <div className="absolute bottom-8 text-center text-gray-400">
          <p className="text-sm">Choose your experience</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {showWindows && (
        <div className="grid grid-cols-2 gap-4 w-fit">
          <DesktopIcon
            icon="/lovable-uploads/95545d84-1015-4c18-8508-5625fd44954f.png"
            label="My Computer"
            onDoubleClick={() => toggleFolderWindow("computer")}
          />
          <DesktopIcon
            icon="/lovable-uploads/2baca9bf-b561-458e-8261-029c304a16a9.png"
            label="Notepad"
            onDoubleClick={() => toggleFolderWindow("notepad")}
          />
          <DesktopIcon
            icon="/lovable-uploads/8e4189e0-c0c4-443d-9760-d907188d485a.png"
            label="Recycle Bin"
            onDoubleClick={() => toggleFolderWindow("recyclebin")}
          />
          <DesktopIcon
            icon="/lovable-uploads/7ad41ea0-8483-4e73-a800-0692685088a3.png"
            label="Internet Explorer"
            onDoubleClick={() => toggleFolderWindow("explorer")}
          />
          <DesktopIcon
            icon="/lovable-uploads/85716acf-aa1b-47c6-a710-e67220339c76.png"
            label="My Documents"
            onDoubleClick={() => toggleFolderWindow("documents")}
          />
          <DesktopIcon
            icon="/lovable-uploads/webtv.png"
            label="WebTV"
            onDoubleClick={() => handleToggleWindow("webtv")}
          />
          <DesktopIcon
            icon="/lovable-uploads/32551a2e-31f6-4695-9ed8-3abfa3946bf8.png"
            label="MS Paint"
            onDoubleClick={() => toggleWindow("paint")}
          />
          <DesktopIcon
            icon="/lovable-uploads/55e6bf6a-5595-4a49-adc9-bfae04580a37.png"
            label="Games"
            onDoubleClick={() => toggleWindow("games")}
          />
          <DesktopIcon
            icon="/lovable-uploads/b234211c-172f-4fb4-aa59-8aefbfecafa3.png"
            label="Multimedia"
            onDoubleClick={() => toggleFolderWindow("multimedia")}
          />
          <DesktopIcon
            icon="/lovable-uploads/mirc.png"
            label="Chat"
            onDoubleClick={() => toggleWindow("chat")}
          />
          <DesktopIcon
            icon="/lovable-uploads/winamp.png"
            label="Winamp"
            onDoubleClick={() => toggleWindow("winamp")}
          />
          <DesktopIcon
            icon="/lovable-uploads/error.png"
            label="Modern Site"
            onDoubleClick={() => setShowErrorMessage(true)}
          />
        </div>
      )}

      {/* Windows 95 style folder windows */}
      {showWindows && openFolderWindows["computer"] && (
        <Win95FolderWindow 
          title="My Computer"
          isOpen={true}
          onClose={() => toggleFolderWindow("computer")}
          objectCount={8}
        >
          <div className="grid grid-cols-3 gap-6 p-4 bg-white">
            <div className={win95IconContainer}>
              <img 
                src="https://win98icons.alexmeub.com/icons/png/floppy_drive_3_5-5.png"
                alt="Drive A" 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://win98icons.alexmeub.com/icons/png/floppy_drive-4.png";
                }}
              />
              <span className={win95Label}>3½ Floppy (A:)</span>
            </div>
            <div className={win95IconContainer}>
              <img 
                src="https://win98icons.alexmeub.com/icons/png/hard_disk_drive-4.png"
                alt="Drive C" 
                className="w-8 h-8 object-contain"
              />
              <span className={win95Label}>Local Disk (C:)</span>
            </div>
            <div className={win95IconContainer}>
              <img 
                src="https://win98icons.alexmeub.com/icons/png/cd_drive-5.png"
                alt="Drive D" 
                className="w-8 h-8 object-contain"
              />
              <span className={win95Label}>CD-ROM (D:)</span>
            </div>
            <div className={win95IconContainer}>
              <img 
                src="https://win98icons.alexmeub.com/icons/png/settings_gear-0.png"
                alt="Control Panel" 
                className="w-8 h-8 object-contain"
              />
              <span className={win95Label}>Control Panel</span>
            </div>
            <div className={win95IconContainer}>
              <img 
                src="https://win98icons.alexmeub.com/icons/png/printer-4.png"
                alt="Printers" 
                className="w-8 h-8 object-contain"
              />
              <span className={win95Label}>Printers</span>
            </div>
            <div className={win95IconContainer}>
              <img 
                src="https://win98icons.alexmeub.com/icons/png/network_drive_unavailable-0.png"
                alt="Network Drives" 
                className="w-8 h-8 object-contain"
              />
              <span className={win95Label}>Network<br/>Drives</span>
            </div>
            <div className={win95IconContainer}>
              <img 
                src="https://win98icons.alexmeub.com/icons/png/world-0.png"
                alt="Web Sharing" 
                className="w-8 h-8 object-contain"
              />
              <span className={win95Label}>Web<br/>Sharing</span>
            </div>
            <div className={win95IconContainer}>
              <img 
                src="https://win98icons.alexmeub.com/icons/png/console_prompt-0.png"
                alt="MS-DOS" 
                className="w-8 h-8 object-contain"
              />
              <span className={win95Label}>MS-DOS<br/>Prompt</span>
            </div>
          </div>
        </Win95FolderWindow>
      )}

      {/* Notepad Window */}
      {showWindows && openFolderWindows["notepad"] && (
        <Win95FolderWindow 
          title="Untitled - Notepad"
          isOpen={true}
          onClose={() => toggleFolderWindow("notepad")}
          objectCount={1}
        >
          <div className="min-w-[480px]">
            <textarea 
              className="w-full h-[300px] p-1 resize-none focus:outline-none font-[system-ui] text-sm bg-white"
              placeholder=""
              spellCheck={false}
            />
          </div>
        </Win95FolderWindow>
      )}

      {/* Recycle Bin Window */}
      {showWindows && openFolderWindows["recyclebin"] && (
        <Win95FolderWindow 
          title="Recycle Bin"
          isOpen={true}
          onClose={() => toggleFolderWindow("recyclebin")}
          objectCount={0}
        >
          <div className="min-w-[480px] min-h-[300px] flex items-center justify-center text-sm text-gray-600">
            The Recycle Bin is empty
          </div>
        </Win95FolderWindow>
      )}

      {/* Internet Explorer Window */}
      {showWindows && openFolderWindows["explorer"] && (
        <Win95FolderWindow 
          title="Internet Explorer"
          isOpen={true}
          onClose={() => toggleFolderWindow("explorer")}
          objectCount={1}
        >
          <div className="min-w-[800px]">
            <div className="flex items-center gap-1 border-b border-[#808080] bg-[#c0c0c0] p-1">
              <span className="text-sm font-[system-ui]">Address:</span>
              <div className="flex-1 bg-white border border-[#808080] border-r-[#ffffff] border-b-[#ffffff] px-1 py-[2px] text-sm font-[system-ui]">
                <div className="flex items-center">
                  <img src="/lovable-uploads/ie_icon.png" alt="IE" className="w-4 h-4 mr-1" />
                  https://www.example.com
                </div>
              </div>
            </div>

            <div className="flex-1 p-4 bg-white min-h-[300px]">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <img src="/lovable-uploads/ie_large.png" alt="IE" className="w-16 h-16 mb-4" />
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-t-2 border-l-2 border-[#000080] animate-spin"></div>
                  <span className="text-sm font-[system-ui]">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </Win95FolderWindow>
      )}

      {/* My Documents Window */}
      {showWindows && openFolderWindows["documents"] && (
        <Win95FolderWindow 
          title="My Documents"
          isOpen={true}
          onClose={() => toggleFolderWindow("documents")}
          objectCount={3}
        >
          <div className="grid grid-cols-4 gap-2 p-2 bg-white min-h-[200px]">
            <div className={win95IconContainer}>
              <img src={win95Icons.textFile} alt="Text File" className="w-8 h-8" />
              <span className={win95Label}>Notes.txt</span>
            </div>
            <div className={win95IconContainer}>
              <img src={win95Icons.wordDoc} alt="Word Doc" className="w-8 h-8" />
              <span className={win95Label}>Report.doc</span>
            </div>
            <div className={win95IconContainer}>
              <img src={win95Icons.folder} alt="Folder" className="w-8 h-8" />
              <span className="text-sm font-[system-ui]">Personal</span>
            </div>
          </div>
        </Win95FolderWindow>
      )}

      {/* Multimedia Window */}
      {showWindows && openFolderWindows["multimedia"] && (
        <Win95FolderWindow 
          title="Multimedia"
          isOpen={true}
          onClose={() => toggleFolderWindow("multimedia")}
          objectCount={6}
        >
          <div className="grid grid-cols-3 gap-2 p-2 bg-white min-h-[200px]">
            <div className={win95IconContainer}>
              <img src="/lovable-uploads/movie_frame.png" alt="Video" className="w-8 h-8" />
              <span className={win95Label}>Movie.avi</span>
            </div>
            <div className={win95IconContainer}>
              <img src="/lovable-uploads/audio.png" alt="Audio" className="w-8 h-8" />
              <span className={win95Label}>Music.wav</span>
            </div>
            <div className={win95IconContainer}>
              <img src="/lovable-uploads/Cin_Film_Roll.png" alt="Video" className="w-8 h-8" />
              <span className={win95Label}>Cinema.mpg</span>
            </div>
            <div className={win95IconContainer}>
              <img src="/lovable-uploads/cine_film.png" alt="Film" className="w-8 h-8" />
              <span className={win95Label}>Film.avi</span>
            </div>
            <div className={win95IconContainer}>
              <img src="/lovable-uploads/film_roll.png" alt="Film Roll" className="w-8 h-8" />
              <span className={win95Label}>Movie.mkv</span>
            </div>
            <div className={win95IconContainer}>
              <img src="/lovable-uploads/bear.png" alt="Animation" className="w-8 h-8" />
              <span className={win95Label}>Animation.gif</span>
            </div>
          </div>
        </Win95FolderWindow>
      )}

      {/* Chat Window */}
      {showWindows && openFolderWindows["chat"] && (
        <Win95Chat
          isOpen={true}
          onClose={() => toggleFolderWindow("chat")}
        />
      )}

      {/* Error Message Window */}
      {showWindows && showErrorMessage && (
        <Win95FolderWindow
          title="Error"
          isOpen={true}
          onClose={() => setShowErrorMessage(false)}
          objectCount={1}
        >
          <div className="p-4 bg-white min-h-[100px]">
            <div className="flex items-center gap-4 mb-4">
              <img src="/lovable-uploads/error.png" alt="Error" className="w-10 h-10" />
              <p className="font-[system-ui] text-sm">Let's go into the future...</p>
            </div>
            <div className="flex justify-center">
              <button
                className={win95Button}
                onClick={handleFirstErrorClose}
              >
                OK
              </button>
            </div>
          </div>
        </Win95FolderWindow>
      )}

      {/* Second Popup Window - Media Player */}
      {showWindows && showSecondPopup && (
        <Win95FolderWindow
          title="Media Player"
          isOpen={true}
          onClose={() => setShowSecondPopup(false)}
          objectCount={1}
          style={{ width: '800px' }}
        >
          <div className="p-4 bg-white">
            {/* Video Display Area */}
            <div className="aspect-video bg-black flex items-center justify-center">
              <div className="text-gray-500 font-[system-ui] text-sm">
                [Video Display]
              </div>
            </div>

            {/* Continue Button and Loading Bar */}
            <div className="flex flex-col items-center gap-4 p-4 border-t border-[#808080]">
              {isLoading && (
                <div className="w-full h-6 bg-[#c0c0c0] border border-[#808080] border-r-[#ffffff] border-b-[#ffffff] relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-[#000080] transition-transform duration-300 ease-out origin-left"
                    style={{ transform: `scaleX(${loadingProgress / 100})` }}
                  >
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xs font-[system-ui] whitespace-nowrap">
                      Loading... {Math.round(loadingProgress)}%
                    </span>
                  </div>
                </div>
              )}
              <button
                className={`${win95Button} min-w-[120px] ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleContinue}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-t-2 border-l-2 border-[#000080] animate-spin"></div>
                    <span>Please wait...</span>
                  </div>
                ) : (
                  'Continue'
                )}
              </button>
            </div>
          </div>
        </Win95FolderWindow>
      )}

      {/* Add WebTV Window */}
      {showWindows && showWebTV && (
        <WebTV
          isOpen={true}
          onClose={() => setShowWebTV(false)}
        />
      )}
    </>
  );
};

export default DesktopIconGrid;