import React, { useState, useEffect } from 'react';

interface MTVChannelProps {
  videoId: string;
}

interface Song {
  title: string;
  artist: string;
  year: string;
}

const MTVChannel: React.FC<MTVChannelProps> = ({ videoId }) => {
  const [currentSong, setCurrentSong] = useState<Song>({
    title: "Take On Me",
    artist: "a-ha",
    year: "1985"
  });
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    // Hide song info after 5 seconds
    const timer = setTimeout(() => {
      setShowInfo(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSong]);

  return (
    <div className="h-full font-mono bg-black">
      {/* Main Video Feed */}
      <div className="relative w-full h-full">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* MTV Logo */}
        <div className="absolute top-4 right-4">
          <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient">
            MTV
          </div>
        </div>

        {/* Song Info Overlay */}
        {showInfo && (
          <div className="absolute bottom-8 left-8 bg-black/80 p-4 transform transition-transform duration-500">
            <div className="text-white text-2xl mb-2">
              NOW PLAYING
            </div>
            <div className="text-pink-500 text-3xl font-bold mb-1">
              {currentSong.title}
            </div>
            <div className="text-purple-400 text-xl">
              {currentSong.artist}
            </div>
            <div className="text-blue-400">
              {currentSong.year}
            </div>
          </div>
        )}

        {/* VHS Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-20"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/vhs-scanlines.png')] opacity-5"></div>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button className="bg-white/10 text-white px-3 py-1 rounded hover:bg-white/20">
            PREV
          </button>
          <button className="bg-white/10 text-white px-3 py-1 rounded hover:bg-white/20">
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default MTVChannel; 