import React, { useState, useEffect } from 'react';

interface WeatherChannelProps {
  videoId: string;
}

interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
}

const MOCK_WEATHER: WeatherData = {
  city: "Los Angeles, CA",
  temperature: 72,
  condition: "Sunny"
};

const WeatherChannel: React.FC<WeatherChannelProps> = ({ videoId }) => {
  const [weather, setWeather] = useState<WeatherData>(MOCK_WEATHER);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
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

        {/* Weather Network Logo */}
        <div className="absolute top-4 left-4 text-white z-10 bg-black/50 p-2 rounded">
          <div className="text-2xl font-bold text-blue-400">WEATHER NETWORK</div>
          <div className="text-lg">{currentTime.toLocaleTimeString()} PST</div>
        </div>

        {/* Current Conditions */}
        <div className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded text-right">
          <div className="text-6xl text-yellow-400">{weather.temperature}°F</div>
          <div className="text-xl text-blue-300">{weather.condition}</div>
          <div className="text-lg text-white">{weather.city}</div>
        </div>

        {/* Scrolling alerts */}
        <div className="absolute bottom-0 left-0 right-0 bg-red-900 text-white p-2">
          <div className="animate-scrolling-text whitespace-nowrap">
            WEATHER ALERT: High surf advisory in effect until 6 PM PST • Wind advisory in effect for mountain areas • 
            WEATHER ALERT: High surf advisory in effect until 6 PM PST • Wind advisory in effect for mountain areas
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherChannel; 