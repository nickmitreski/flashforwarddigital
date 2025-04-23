export const IMAGE_PATHS = {
  // Retro icons
  WINAMP: '/assets/images/winamp.png',
  GAME_ICON: '/assets/images/gameicon.png',
  CAR: '/assets/images/car.png',
  
  // Modern site images
  LOGO: '/assets/images/logo.png',
  FAVICON: '/favicon.ico',
  PLACEHOLDER: '/placeholder.svg',
} as const;

export const FONT_PATHS = {
  GRAYFEL: '/assets/fonts/Grayfel-NorReg.otf',
} as const;

export const ASSET_DIMENSIONS = {
  ICON: {
    SM: 16,
    MD: 24,
    LG: 32,
    XL: 48,
  },
  AVATAR: {
    SM: 24,
    MD: 32,
    LG: 48,
    XL: 64,
  },
  THUMBNAIL: {
    WIDTH: 200,
    HEIGHT: 150,
  },
} as const;

export const FILE_TYPES = {
  IMAGES: ['.jpg', '.jpeg', '.png', '.gif', '.svg'],
  DOCUMENTS: ['.pdf', '.doc', '.docx', '.txt'],
  AUDIO: ['.mp3', '.wav', '.ogg'],
  VIDEO: ['.mp4', '.webm', '.ogv'],
} as const; 