import React, { useState, useEffect } from 'react';

interface NewsChannelProps {
  videoId: string;
}

const NewsChannel: React.FC<NewsChannelProps> = ({ videoId }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [breakingNews, setBreakingNews] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate breaking news every 30 seconds
    const newsTimer = setInterval(() => {
      setBreakingNews(true);
      setTimeout(() => setBreakingNews(false), 5000);
    }, 30000);

    return () => {
      clearInterval(timer);
      clearInterval(newsTimer);
    };
  }, []);

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

        {/* News Logo and Time */}
        <div className="absolute top-4 left-4 text-white z-10 bg-black/50 p-2 rounded flex items-center gap-4">
          <div className="text-2xl font-bold text-blue-500">ABC NEWS</div>
          <div className="text-lg">{currentTime.toLocaleTimeString()}</div>
        </div>

        {/* Breaking News Alert */}
        {breakingNews && (
          <div className="absolute bottom-20 left-0 right-0 bg-red-600 text-white py-2 animate-pulse">
            <div className="container mx-auto px-4">
              <span className="font-bold mr-2">BREAKING NEWS:</span>
              <span>Major developments in our top story...</span>
            </div>
          </div>
        )}

        {/* News Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-blue-900 text-white p-2">
          <div className="animate-scrolling-text whitespace-nowrap">
            MARKET UPDATE: DOW +120.52 • NASDAQ +45.33 • S&P +15.71 • 
            WEATHER: Sunny skies expected across the region • 
            SPORTS: Local team advances to finals • 
            ENTERTAINMENT: New blockbuster breaks box office records
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsChannel; 