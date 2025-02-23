import React, { useState } from 'react';

interface GameShowChannelProps {
  videoId: string;
}

const GameShowChannel: React.FC<GameShowChannelProps> = ({ videoId }) => {
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

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

        {/* Show Logo */}
        <div className="absolute top-4 left-4 z-10 bg-black/50 p-2 rounded">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500">
            SINGLED OUT
          </div>
          <div className="text-gray-400">MTV's Dating Game Show</div>
        </div>

        {/* Interactive Elements */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/70 p-4 rounded">
          <div className="text-center">
            <div className="text-yellow-400 text-xl mb-2">
              PLAY ALONG AT HOME!
            </div>
            <div className="text-white text-lg mb-4">
              Which contestant will get Singled Out?
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button 
                className="bg-pink-600 text-white p-2 hover:bg-pink-500 rounded"
                onClick={() => setShowAnswer(true)}
              >
                Contestant #1
              </button>
              <button 
                className="bg-purple-600 text-white p-2 hover:bg-purple-500 rounded"
                onClick={() => setShowAnswer(true)}
              >
                Contestant #2
              </button>
              <button 
                className="bg-yellow-600 text-white p-2 hover:bg-yellow-500 rounded"
                onClick={() => setShowAnswer(true)}
              >
                Contestant #3
              </button>
            </div>
          </div>
        </div>

        {/* 90s Style Graphics */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/90s-pattern.png')] opacity-10"></div>
        </div>
      </div>
    </div>
  );
};

export default GameShowChannel; 