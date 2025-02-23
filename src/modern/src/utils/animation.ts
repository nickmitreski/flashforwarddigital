import { useEffect, useRef } from 'react';

interface LayerConfig {
  x: number;
  y: number;
}

export const LAYER_CONFIGS = {
  layer1: { x: 10, y: 5 },   // Front layer (moves least)
  layer2: { x: 20, y: 10 },
  layer3: { x: 30, y: 15 },
  layer4: { x: 40, y: 20 }   // Back layer (moves most)
};

export function calculateParallaxTransform(
  mouseX: number,
  mouseY: number,
  centerX: number,
  centerY: number,
  config: LayerConfig | number
): string {
  const distX = (mouseX - centerX) / centerX;
  const distY = (mouseY - centerY) / centerY;
  
  let x, y;
  if (typeof config === 'number') {
    // For simple depth-based parallax
    x = distX * config * 15;
    y = distY * config * 15;
  } else {
    // For configured layer parallax
    x = distX * config.x;
    y = distY * config.y;
  }
  
  return `translate3d(${x}px, ${y}px, 0)`;
}

export const useParallaxEffect = (selector: string = '.layer') => {
  const centerX = useRef(window.innerWidth / 2);
  const centerY = useRef(window.innerHeight / 2);
  const rafId = useRef<number>();
  const lastMousePos = useRef({ x: 0, y: 0 });
  const layers = useRef<NodeListOf<Element>>();

  useEffect(() => {
    const updateCenter = () => {
      centerX.current = window.innerWidth / 2;
      centerY.current = window.innerHeight / 2;
    };

    const handleMouseMove = (event: MouseEvent) => {
      lastMousePos.current = {
        x: event.clientX,
        y: event.clientY
      };

      if (!rafId.current) {
        rafId.current = requestAnimationFrame(updateParallax);
      }
    };

    const updateParallax = () => {
      if (!layers.current) {
        layers.current = document.querySelectorAll(selector);
      }

      layers.current.forEach(layer => {
        const depth = parseFloat(layer.getAttribute('data-depth') || '0');
        const transform = calculateParallaxTransform(
          lastMousePos.current.x,
          lastMousePos.current.y,
          centerX.current,
          centerY.current,
          depth
        );
        
        (layer as HTMLElement).style.transform = transform;
      });

      rafId.current = undefined;
    };

    // Add initial transition for smooth load
    const initialLayers = document.querySelectorAll(selector);
    initialLayers.forEach((layer) => {
      const el = layer as HTMLElement;
      el.style.transition = 'transform 0.5s ease-out';
      el.style.willChange = 'transform';
      
      setTimeout(() => {
        el.style.transition = 'transform 0.1s ease-out';
      }, 500);
    });

    window.addEventListener('resize', updateCenter, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', updateCenter);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [selector]);
};