import React from 'react';
import { LAYER_CONFIGS, useParallaxEffect } from '../utils/animation';

const BACKGROUND_LAYERS = [
  {
    url: 'https://file.garden/Zxsc5-9aojhlnJO6/4.png',
    depth: 0.4,
    opacity: 0.7,
    zIndex: 1,
    config: LAYER_CONFIGS.layer4
  },
  {
    url: 'https://file.garden/Zxsc5-9aojhlnJO6/3.png',
    depth: 0.3,
    opacity: 0.8,
    zIndex: 2,
    config: LAYER_CONFIGS.layer3
  },
  {
    url: 'https://file.garden/Zxsc5-9aojhlnJO6/2.png',
    depth: 0.2,
    opacity: 0.9,
    zIndex: 3,
    config: LAYER_CONFIGS.layer2
  },
  {
    url: 'https://file.garden/Zxsc5-9aojhlnJO6/1.png',
    depth: 0.1,
    opacity: 1,
    zIndex: 4,
    config: LAYER_CONFIGS.layer1
  }
];

const DesktopBackground: React.FC = () => {
  // Use the improved parallax hook
  useParallaxEffect('.bg-layer');

  return (
    <div 
      className="absolute inset-0 overflow-hidden bg-gradient-to-b from-blue-950 to-black perspective-1000"
      style={{ perspective: '1000px' }}
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/30 to-black" />
      
      {/* Parallax container */}
      <div className="relative w-full h-full transform-style-preserve-3d">
        {/* Parallax layers */}
        {BACKGROUND_LAYERS.map((layer, index) => (
          <div
            key={index}
            className="bg-layer absolute inset-0 bg-cover bg-center will-change-transform"
            style={{
              backgroundImage: `url(${layer.url})`,
              opacity: layer.opacity,
              zIndex: layer.zIndex,
              transformStyle: 'preserve-3d',
              transform: 'scale(1.2)',
              backgroundSize: '120% 120%',
              backgroundPosition: 'center center'
            }}
            data-depth={layer.depth}
          />
        ))}
      </div>

      {/* Ambient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
};

export default DesktopBackground;