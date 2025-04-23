import { ICONS } from '../constants/icons';
import { IconType } from '../types/icon';

const ICON_BASE_PATH = '/icons';

// Cache for icon paths to avoid repeated fetches
const iconPathCache: Record<string, string> = {};

/**
 * Utility function to safely load icons with fallback
 * @param iconKey - Key from the IconType
 * @returns The path to the icon or fallback icon
 */
export const getIconPath = async (iconKey: IconType): Promise<string> => {
  // Check cache first
  if (iconPathCache[iconKey]) {
    return iconPathCache[iconKey];
  }

  try {
    // First try to load the specific icon
    const response = await fetch(`${ICON_BASE_PATH}/${iconKey}.svg`);
    if (response.ok) {
      const path = `${ICON_BASE_PATH}/${iconKey}.svg`;
      iconPathCache[iconKey] = path;
      return path;
    }
    
    // If specific icon not found, try to determine type and use generic
    if (iconKey.includes('folder')) {
      const path = `${ICON_BASE_PATH}/folder.svg`;
      iconPathCache[iconKey] = path;
      return path;
    }
    if (iconKey.includes('file')) {
      const path = `${ICON_BASE_PATH}/file.svg`;
      iconPathCache[iconKey] = path;
      return path;
    }
    
    // If no match found, throw error to trigger fallback
    throw new Error(`Icon not found: ${iconKey}`);
  } catch (error) {
    console.error(`Error loading icon ${iconKey}:`, error);
    throw error;
  }
};

/**
 * Preload an icon to ensure it's available
 * @param iconPath - Path to the icon
 * @returns Promise that resolves when the icon is loaded
 */
export const preloadIcon = (iconPath: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => {
      console.error(`Failed to load icon: ${iconPath}`);
      reject(new Error(`Failed to load icon: ${iconPath}`));
    };
    img.src = iconPath;
  });
};

/**
 * Preload multiple icons
 * @param iconKeys - Array of icon keys to preload
 * @returns Promise that resolves when all icons are loaded
 */
export const preloadIcons = async (iconKeys: IconType[]): Promise<void> => {
  const preloadPromises = iconKeys.map(async (key) => {
    try {
      const path = await getIconPath(key);
      return preloadIcon(path);
    } catch (error) {
      console.error(`Failed to preload icon: ${key}`, error);
    }
  });
  
  await Promise.all(preloadPromises);
};

export const getFallbackIcon = (): string => {
  return `${ICON_BASE_PATH}/error.svg`;
};

export const validateIconKey = (iconKey: string): boolean => {
  // Add validation logic for icon keys
  // For example, check if the key exists in your icon mapping
  return typeof iconKey === 'string' && iconKey.length > 0;
}; 