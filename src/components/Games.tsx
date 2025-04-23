import React, { useState } from 'react';
import Win95FolderWindow from './Win95FolderWindow';
import Minesweeper from './minesweeper';
import DuckHunt from './DuckHunt';
import StreetFighter from './StreetFighter';
import MortalKombat from './MortalKombat';

interface GamesProps {
  isOpen: boolean;
  onClose: () => void;
}

const win95IconContainer = "flex flex-col items-center gap-1 p-1";
const win95Label = "text-sm font-[system-ui] text-center";

const Games: React.FC<GamesProps> = ({ isOpen, onClose }) => {
  const [openGames, setOpenGames] = useState({
    minesweeper: false,
    duckhunt: false,
    streetfighter: false,
    mortalkombat: false,
  });

  const toggleGame = (game: keyof typeof openGames) => {
    setOpenGames(prev => ({
      ...prev,
      [game]: !prev[game]
    }));
  };

  return (
    <>
      <Win95FolderWindow
        title="Games"
        isOpen={isOpen}
        onClose={onClose}
        objectCount={4}
      >
        <div className="grid grid-cols-3 gap-2 p-2 bg-white min-h-[200px]">
          <div 
            className={win95IconContainer}
            onDoubleClick={() => toggleGame('minesweeper')}
          >
            <img 
              src="/lovable-uploads/minsweeper.png" 
              alt="Minesweeper" 
              className="w-8 h-8"
            />
            <span className={win95Label}>Minesweeper</span>
          </div>
          <div 
            className={win95IconContainer}
            onDoubleClick={() => toggleGame('duckhunt')}
          >
            <img 
              src="/lovable-uploads/duckhunt.png" 
              alt="Duck Hunt" 
              className="w-8 h-8"
            />
            <span className={win95Label}>Duck Hunt</span>
          </div>
          <div 
            className={win95IconContainer}
            onDoubleClick={() => toggleGame('streetfighter')}
          >
            <img 
              src="/lovable-uploads/streetfighter.png" 
              alt="Street Fighter" 
              className="w-8 h-8"
            />
            <span className={win95Label}>Street Fighter</span>
          </div>
          <div 
            className={win95IconContainer}
            onDoubleClick={() => toggleGame('mortalkombat')}
          >
            <img 
              src="/lovable-uploads/mortalkombat.png" 
              alt="Mortal Kombat" 
              className="w-8 h-8"
            />
            <span className={win95Label}>Mortal Kombat</span>
          </div>
        </div>
      </Win95FolderWindow>

      {/* Game Windows */}
      {openGames.minesweeper && (
        <Win95FolderWindow
          title="Minesweeper"
          isOpen={true}
          onClose={() => toggleGame('minesweeper')}
          objectCount={1}
        >
          <Minesweeper />
        </Win95FolderWindow>
      )}

      {openGames.duckhunt && (
        <DuckHunt
          isOpen={true}
          onClose={() => toggleGame('duckhunt')}
        />
      )}

      {openGames.streetfighter && (
        <StreetFighter
          isOpen={true}
          onClose={() => toggleGame('streetfighter')}
        />
      )}

      {openGames.mortalkombat && (
        <MortalKombat
          isOpen={true}
          onClose={() => toggleGame('mortalkombat')}
        />
      )}
    </>
  );
};

export default Games;