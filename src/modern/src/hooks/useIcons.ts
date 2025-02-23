import { useMemo } from 'react';
import { Win95IconConfig } from '../types/icons';
import { FIXED_ICONS, RANDOM_ICONS } from '../config/icons';

export function useIcons() {
  const minSpacing = 20;

  return useMemo(() => {
    const icons: Win95IconConfig[] = [];

    const isPositionValid = (newPosition: { x: number; y: number }) => {
      return !icons.some(icon => {
        const dx = icon.position.x - newPosition.x;
        const dy = icon.position.y - newPosition.y;
        return Math.sqrt(dx * dx + dy * dy) < minSpacing;
      });
    };

    const getValidPosition = (initialPosition: { x: number; y: number }) => {
      let position = initialPosition;
      while (!isPositionValid(position)) {
        position = {
          x: Math.min(95, Math.max(5, position.x + (Math.random() * 2 - 1))),
          y: Math.min(80, Math.max(5, position.y + (Math.random() * 2 - 1)))
        };
      }
      return position;
    };

    FIXED_ICONS.forEach(icon => {
      icons.push({
        ...icon,
        position: getValidPosition({
          x: Math.random() * 90 + 5,
          y: Math.random() * 75 + 5
        })
      });
    });

    RANDOM_ICONS.forEach(icon => {
      icons.push({
        ...icon,
        position: getValidPosition({
          x: Math.random() * 90 + 5,
          y: Math.random() * 75 + 5
        })
      });
    });

    return icons;
  }, []);
}