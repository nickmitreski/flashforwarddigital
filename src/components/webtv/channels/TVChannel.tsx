import React from 'react';

interface TVChannelProps {
  name: string;
  videoId: string;
}

const TVChannel: React.FC<TVChannelProps> = ({ name, videoId }) => {
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

        {/* Channel Name Overlay */}
        <div className="absolute top-4 left-4 text-white z-10 bg-black/50 p-2 rounded">
          <div className="text-xl font-bold">{name}</div>
          <div className="text-sm text-gray-400">Now Playing</div>
        </div>

        {/* VHS Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-20"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/vhs-scanlines.png')] opacity-5"></div>
        </div>
      </div>
    </div>
  );
};

export default TVChannel; 