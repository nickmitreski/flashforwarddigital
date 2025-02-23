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

// Add these style constants at the top after imports
const win95MenuButton = "px-2 py-0.5 hover:bg-[#000080] hover:text-white focus:outline-none focus:bg-[#000080] focus:text-white text-left whitespace-nowrap font-[system-ui]";
const win95MenuBar = "flex border-b border-[#808080] bg-[#c0c0c0] px-0.5 py-[2px] select-none";

const Index = () => {
  const [activeWindows, setActiveWindows] = useState<Record<string, boolean>>({});
  const [notepadContent, setNotepadContent] = useState("");
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showWindows, setShowWindows] = useState(true);
  const [showChoiceScreen, setShowChoiceScreen] = useState(false);
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
      className="min-h-screen relative p-4"
      style={{
        backgroundImage: showWindows ? "url('/lovable-uploads/b35d775f-3435-4421-a821-9d8981adb33d.png')" : "none",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
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

          <Win98Window
            title="My Computer"
            isOpen={activeWindows["computer"]}
            onClose={() => toggleWindow("computer")}
          >
            <div className="p-4 bg-white">
              <div className="grid grid-cols-3 gap-4">
                {/* Control Panel */}
                <div 
                  className="flex flex-col items-center gap-1 cursor-pointer hover:bg-[#000080]/10"
                  onClick={() => setAnalyticsVisible(true)}
                >
                  <img src="https://win98icons.alexmeub.com/icons/png/control_panel_users-0.png" alt="Control Panel" className="w-8 h-8" />
                  <span className="text-sm font-[system-ui]">Control Panel</span>
                </div>

                {/* System Update */}
                <div className="flex flex-col items-center gap-1">
                  <img src="/lovable-uploads/50530a06-749f-494f-826a-1cf8c4d9be38.png" alt="System Update" className="w-8 h-8" />
                  <span className="text-sm font-[system-ui]">System Update</span>
                </div>

                {/* Network Drives */}
                <div className="flex flex-col items-center gap-1">
                  <img src="https://win98icons.alexmeub.com/icons/png/network_drive_unavailable-0.png" alt="Network Drives" className="w-8 h-8" />
                  <span className="text-sm font-[system-ui]">Network Drives</span>
                </div>

                {/* Web Sharing */}
                <div className="flex flex-col items-center gap-1">
                  <img src="https://win98icons.alexmeub.com/icons/png/world-0.png" alt="Web Sharing" className="w-8 h-8" />
                  <span className="text-sm font-[system-ui]">Web Sharing</span>
                </div>
              </div>
            </div>
          </Win98Window>

          <Win98Window
            title="Website Analytics"
            isOpen={analyticsVisible}
            onClose={() => setAnalyticsVisible(false)}
          >
            <div className="bg-white p-4 min-w-[480px]">
              {/* Your Stats */}
              <div className="mb-6">
                <div className="bg-[#000080] text-white px-2 py-1 text-sm font-bold mb-3">
                  Your Engagement
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#c0c0c0] p-3 border border-[#808080] border-r-[#ffffff] border-b-[#ffffff]">
                    <div className="text-sm mb-1">Time spent on this website</div>
                    <div className="text-xl font-bold font-[system-ui]">{sessionDuration}</div>
                  </div>
                  <div className="bg-[#c0c0c0] p-3 border border-[#808080] border-r-[#ffffff] border-b-[#ffffff]">
                    <div className="text-sm mb-1">Total clicks</div>
                    <div className="text-xl font-bold font-[system-ui]">{totalClicks}</div>
                  </div>
                </div>
              </div>

              {/* Engagement Statistics */}
              <div>
                <div className="bg-[#000080] text-white px-2 py-1 text-sm font-bold mb-3">
                  Why Engagement Matters
                </div>
                <div className="border border-[#808080] border-r-[#ffffff] border-b-[#ffffff] p-3 bg-[#c0c0c0] space-y-4">
                  <div>
                    <div className="font-bold text-sm mb-1">📊 Time on Site Impact</div>
                    <div className="text-sm">
                      Visitors who spend 3+ minutes on a website are 2x more likely to return and have a 70% higher conversion rate.
                      <div className="text-[11px] text-[#404040] mt-1">Source: Contentsquare 2023 Report</div>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-sm mb-1">🎯 Engagement & Conversions</div>
                    <div className="text-sm">
                      Websites with high user engagement see up to 83% higher conversion rates than those with low engagement.
                      <div className="text-[11px] text-[#404040] mt-1">Source: WordStream Research</div>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-sm mb-1">📈 SEO Benefits</div>
                    <div className="text-sm">
                      Longer session duration can improve search rankings by up to 45% due to improved behavioral metrics.
                      <div className="text-[11px] text-[#404040] mt-1">Source: SEMrush Study 2023</div>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-sm mb-1">💡 User Interaction</div>
                    <div className="text-sm">
                      Each additional click increases the likelihood of conversion by 12%. Interactive users are 5x more likely to make a purchase.
                      <div className="text-[11px] text-[#404040] mt-1">Source: HubSpot Marketing Statistics</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="mt-4 border border-[#808080] bg-[#c0c0c0] px-2 py-1 text-[11px]">
                Real-time engagement tracking
              </div>
            </div>
          </Win98Window>
        </>
      )}

      {/* Chat Window */}
      {activeWindows["chat"] && (
        <Win95Chat
          isOpen={true}
          onClose={() => toggleWindow("chat")}
        />
      )}

      {/* Windows */}
      <Win98Window
        title="My Documents"
        isOpen={activeWindows["documents"]}
        onClose={() => toggleWindow("documents")}
      >
        <div className="grid grid-cols-3 gap-4 p-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              src={`https://picsum.photos/200/200?random=${i}`}
              alt={`Document ${i}`}
              className="w-32 h-32 object-cover cursor-pointer"
              onDoubleClick={() => handleImageClick(`https://picsum.photos/800/600?random=${i}`)}
            />
          ))}
        </div>
      </Win98Window>

      <Win98Window
        title="Image Viewer"
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <div className="p-4">
            <img src={selectedImage} alt="Selected" className="max-w-full h-auto" />
          </div>
        )}
      </Win98Window>

      <Win98Window
        title="Notepad"
        isOpen={activeWindows["notepad"]}
        onClose={() => toggleWindow("notepad")}
      >
        <div className="p-4 bg-white min-h-[300px] min-w-[400px]">
          <Textarea
            value={notepadContent}
            onChange={(e) => setNotepadContent(e.target.value)}
            className="w-full h-full min-h-[280px] resize-none font-mono text-sm border-none focus:outline-none p-0"
            placeholder="Type here..."
          />
        </div>
      </Win98Window>

      <Win98Window
        title="Calculator"
        isOpen={activeWindows["calculator"]}
        onClose={() => toggleWindow("calculator")}
      >
        <Calculator />
      </Win98Window>

      <Win98Window
        title="Minesweeper"
        isOpen={activeWindows["minesweeper"]}
        onClose={() => toggleWindow("minesweeper")}
      >
        <Minesweeper />
      </Win98Window>

      {/* Paint Window */}
      {activeWindows["paint"] && (
        <Win95Paint
          isOpen={true}
          onClose={() => toggleWindow("paint")}
        />
      )}

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
    </div>
  );
};

export default Index;