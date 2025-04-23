import React, { useState, useEffect } from "react";
import Win98Window from "@/components/Win98Window";
import Calculator from "@/components/Calculator";
import DesktopIconGrid from "@/components/DesktopIconGrid";
import Taskbar from "@/components/Taskbar";
import { Textarea } from "@/components/ui/textarea";
import Minesweeper from "@/components/minesweeper";
import Win95Chat from "@/components/Win95Chat";
import Win95Paint from "@/components/Win95Paint";
import Win95Winamp from '@/components/Win95Winamp';
import Games from '@/components/Games';
import { analytics } from "@/lib/analytics";
import { ChoiceScreen } from "@/features/landing/components/ChoiceScreen";
<<<<<<< HEAD
import TutorialManager from "@/components/TutorialManager";
=======
>>>>>>> 32603a7d2d85d011e99b8ec884c4ddbe07708848

// Add these style constants at the top after imports
const win95MenuButton = "px-2 py-0.5 hover:bg-[#000080] hover:text-white focus:outline-none focus:bg-[#000080] focus:text-white text-left whitespace-nowrap font-[system-ui]";
const win95MenuBar = "flex border-b border-[#808080] bg-[#c0c0c0] px-0.5 py-[2px] select-none";

const Index = () => {
  const [activeWindows, setActiveWindows] = useState<Record<string, boolean>>({});
  const [notepadContent, setNotepadContent] = useState("");
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showWindows, setShowWindows] = useState(false);
  const [showChoiceScreen, setShowChoiceScreen] = useState(true);
  const [analyticsVisible, setAnalyticsVisible] = useState(false);
  const [sessionDuration, setSessionDuration] = useState("0:00");
  const [totalClicks, setTotalClicks] = useState(0);

  useEffect(() => {
    const updateAnalytics = () => {
      setSessionDuration(analytics.getSessionDuration());
      setTotalClicks(analytics.getTotalClicks());
    };

    const timer = setInterval(updateAnalytics, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePowerOff = () => {
    analytics.trackEvent('powerOff', {
      sessionDuration: analytics.getSessionDuration(),
      totalClicks: analytics.getTotalClicks()
    });
    setShowWindows(false);
    setShowChoiceScreen(true);
    setActiveWindows({});
    setNotepadContent("");
    setSelectedImage(null);
  };

  const toggleWindow = (window: string) => {
    analytics.trackEvent('toggleWindow', { window, action: !activeWindows[window] ? 'open' : 'close' });
    setActiveWindows(prev => ({
      ...prev,
      [window]: !prev[window]
    }));
  };

  const openExternalLink = (url: string) => {
    analytics.trackEvent('externalLink', { url });
    window.open(url, '_blank');
  };

  const handleImageClick = (imageUrl: string) => {
    analytics.trackEvent('imageView', { imageUrl });
    setSelectedImage(imageUrl);
  };

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: showWindows ? "url('/lovable-uploads/b35d775f-3435-4421-a821-9d8981adb33d.png')" : "none",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {showChoiceScreen ? (
        <ChoiceScreen 
          setShowChoiceScreen={setShowChoiceScreen}
          setShowWindows={setShowWindows}
        />
      ) : (
        <>
          <DesktopIconGrid
            toggleWindow={toggleWindow}
            openExternalLink={openExternalLink}
            showChoiceScreen={showChoiceScreen}
            setShowChoiceScreen={setShowChoiceScreen}
            showWindows={showWindows}
            setShowWindows={setShowWindows}
          />

          {showWindows && (
            <>
              <Taskbar 
                startMenuOpen={startMenuOpen} 
                setStartMenuOpen={setStartMenuOpen}
                onPowerOff={handlePowerOff}
              />

              {/* Paint Window */}
              {activeWindows["paint"] && (
                <Win95Paint
                  isOpen={true}
                  onClose={() => toggleWindow("paint")}
                />
              )}

              {/* Chat Window */}
              {activeWindows["chat"] && (
                <Win95Chat
                  isOpen={true}
                  onClose={() => toggleWindow("chat")}
                />
              )}

              {/* Winamp Window */}
              {activeWindows.winamp && (
                <Win95Winamp onClose={() => toggleWindow('winamp')} />
              )}

              {/* Games Window */}
              {activeWindows["games"] && (
                <Games
                  isOpen={true}
                  onClose={() => toggleWindow("games")}
                />
              )}
<<<<<<< HEAD

              {/* Tutorial Manager */}
              <TutorialManager />
=======
>>>>>>> 32603a7d2d85d011e99b8ec884c4ddbe07708848
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Index;