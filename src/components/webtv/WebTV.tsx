import React, { useState, useEffect } from 'react';
import Win95FolderWindow from '../Win95FolderWindow';
import './WebTV.css';

interface WebTVProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Channel {
  id: number;
  name: string;
  file: string;
}

const CHANNELS: Channel[] = [
  { id: 1, name: "CNN News", file: "/videos/cnn.mp4" },
  { id: 2, name: "Full House", file: "/videos/fullhouse.mp4" },
  { id: 3, name: "Jeopardy", file: "/videos/jeopardy.mp4" },
  { id: 4, name: "MTV", file: "/videos/mtv.mp4" },
  { id: 5, name: "Dinosaurs", file: "/videos/dinosaurs.mp4" },
  { id: 6, name: "Weather", file: "/videos/weather.mp4" }
];

const WebTV: React.FC<WebTVProps> = ({ isOpen, onClose }) => {
  const [currentChannel, setCurrentChannel] = useState<number>(0);
  const [isChangingChannel, setIsChangingChannel] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const changeChannel = (direction: 'next' | 'prev') => {
    setIsChangingChannel(true);
    
    let newChannel;
    if (direction === 'next') {
      newChannel = currentChannel === CHANNELS.length - 1 ? 0 : currentChannel + 1;
    } else {
      newChannel = currentChannel === 0 ? CHANNELS.length - 1 : currentChannel - 1;
    }

    // Add static effect during channel change
    setTimeout(() => {
      setCurrentChannel(newChannel);
      setIsChangingChannel(false);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 500);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentChannel]);

  return (
    <Win95FolderWindow
      title="WebTV"
      isOpen={isOpen}
      onClose={onClose}
      hideMenuBar
    >
      <div className="relative w-[800px] h-[600px] bg-black text-white">
        {/* Video Player */}
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-contain bg-black"
            src={CHANNELS[currentChannel].file}
            autoPlay
            loop
            playsInline
            muted={false}
            onError={(e) => console.error('Video playback error:', e)}
          />

          {/* Channel Name */}
          <div className="absolute bottom-6 left-6 font-['VT323',monospace] bg-black/80 px-3 py-1 rounded">
            <div className="text-green-500 text-sm">CH-{currentChannel + 1}</div>
            <div className="text-2xl font-bold text-white tracking-wide drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]">
              {CHANNELS[currentChannel].name}
            </div>
          </div>

          {/* Channel Controls */}
          <div className="absolute bottom-6 right-6 flex gap-4">
            <button
              onClick={() => changeChannel('prev')}
              className="px-4 py-2 bg-gray-800/80 text-white rounded hover:bg-gray-700/80 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => changeChannel('next')}
              className="px-4 py-2 bg-gray-800/80 text-white rounded hover:bg-gray-700/80 transition-colors"
            >
              Next
            </button>
          </div>

          {/* Static Overlay when changing channels */}
          {isChangingChannel && (
            <div className="absolute inset-0 bg-static animate-static opacity-50" />
          )}

          {/* Scanlines Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-20" />
            <div className="absolute inset-0 bg-[url('/vhs-scanlines.png')] opacity-5" />
          </div>
        </div>
      </div>
    </Win95FolderWindow>
  );
};

export default WebTV; 