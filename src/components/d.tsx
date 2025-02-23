import React, { useState } from "react";
import DesktopIcon from "./DesktopIcon";
import Modal from "./Modal";
import Win98Window from "./Win98Window";

interface DesktopIconGridProps {
  toggleWindow: (window: string) => void;
  openExternalLink: (url: string) => void;
}

const DesktopIconGrid = ({ toggleWindow, openExternalLink }: DesktopIconGridProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [isWin98WindowOpen, setWin98WindowOpen] = useState(false);

  const handleDesignFolioDoubleClick = () => {
    setModalContent(
      <iframe
        src="/src/designfolio/index-design.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Design Folio"
      />
    );
    setModalOpen(true);
  };

  const handlePromoVideosDoubleClick = () => {
    setModalContent(
      <iframe
        src="/src/videofolio/index-videofolio.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Promo Videos"
      />
    );
    setModalOpen(true);
  };

  const handleAppsShowcaseDoubleClick = () => {
    setModalContent(
      <iframe
        src="/src/appshowcase/appshowcase.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Apps Showcase"
      />
    );
    setModalOpen(true);
  };

  const handleRecycleBinDoubleClick = () => {
    setWin98WindowOpen(true);
  };

  const handleCarGameDoubleClick = () => {
    setWin98WindowOpen(false);
    setModalContent(
      <iframe
        src="/Sample_Sites/cargame.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Car Game"
      />
    );
    setModalOpen(true);
  };

  return (
    <div className="grid grid-cols-2 gap-4 w-fit">
      {!isModalOpen && (
        <>
          <DesktopIcon
            icon="/lovable-uploads/95545d84-1015-4c18-8508-5625fd44954f.png"
            label="My Computer"
            onDoubleClick={() => toggleWindow("computer")}
          />
          <DesktopIcon
            icon="/lovable-uploads/2baca9bf-b561-458e-8261-029c304a16a9.png"
            label="Notepad"
            onDoubleClick={() => toggleWindow("notepad")}
          />
          <DesktopIcon
            icon="/lovable-uploads/8e4189e0-c0c4-443d-9760-d907188d485a.png"
            label="Recycle Bin"
            onDoubleClick={handleRecycleBinDoubleClick}
          />
          <DesktopIcon
            icon="/lovable-uploads/7ad41ea0-8483-4e73-a800-0692685088a3.png"
            label="Internet Explorer"
            onDoubleClick={() => toggleWindow("explorer")}
          />
          <DesktopIcon
            icon="/lovable-uploads/b234211c-172f-4fb4-aa59-8aefbfecafa99.png"
            label="Minesweeper"
            onDoubleClick={() => toggleWindow("minesweeper")}
          />
          <DesktopIcon
            icon="/lovable-uploads/8e4189e0-c0c4-443d-9760-d907188d485aaa.png"
            label="Calculator"
            onDoubleClick={() => toggleWindow("calculator")}
          />
          <DesktopIcon
            icon="/lovable-uploads/85716acf-aa1b-47c6-a710-e67220339c76.png"
            label="My Documents"
            onDoubleClick={() => toggleWindow("documents")}
          />
          <DesktopIcon
            icon="/lovable-uploads/74f98405-c40b-4abb-bfdd-9be1717d8088.png"
            label="Website Portfolio"
            onDoubleClick={() => openExternalLink("https://example.com/portfolio")}
          />
          <DesktopIcon
            icon="/lovable-uploads/32551a2e-31f6-4695-9ed8-3abfa3946bf8.png"
            label="Design Folio"
            onDoubleClick={handleDesignFolioDoubleClick}
          />
          <DesktopIcon
            icon="/lovable-uploads/55e6bf6a-5595-4a49-adc9-bfae04580a37.png"
            label="Apps Showcase"
            onDoubleClick={handleAppsShowcaseDoubleClick}
          />
          <DesktopIcon
            icon="/lovable-uploads/b234211c-172f-4fb4-aa59-8aefbfecafa3.png"
            label="Promo Videos"
            onDoubleClick={handlePromoVideosDoubleClick}
          />
          <DesktopIcon
            icon="/lovable-uploads/mirc.png"
            label="Chat"
            onDoubleClick={() => toggleWindow("chat")}
          />
          <DesktopIcon
            icon="https://file.garden/Zxsc5-9aojhlnJO6/winampold.png" // Replace with the correct path
            label="Winamp"
            onDoubleClick={() => toggleWindow("winamp")}
          />
        </>
      )}
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          {modalContent}
        </Modal>
      )}
      {isWin98WindowOpen && (
        <Win98Window title="Recycle Bin" isOpen={isWin98WindowOpen} onClose={() => setWin98WindowOpen(false)}>
          <div className="p-4">
            <button
              className="flex flex-col items-center"
              onDoubleClick={handleCarGameDoubleClick}
            >
              <img
                src="/lovable-uploads/car_game_icon.png" // Replace with actual icon path
                alt="Car Game"
                className="w-16 h-16"
              />
              <span className="text-sm mt-2">car_game.exe</span>
            </button>
          </div>
        </Win98Window>
      )}
    </div>
  );
};

export default DesktopIconGrid;