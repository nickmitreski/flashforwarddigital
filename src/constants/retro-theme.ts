export const RETRO_COLORS = {
  DESKTOP_BACKGROUND: '#008080',
  WINDOW_BACKGROUND: '#c0c0c0',
  WINDOW_BORDER_LIGHT: '#ffffff',
  WINDOW_BORDER_DARK: '#808080',
  TITLE_BAR: '#000080',
  TEXT_COLOR: '#000000',
  TEXT_COLOR_LIGHT: '#ffffff',
} as const;

export const WINDOW_DEFAULTS = {
  MIN_WIDTH: 200,
  MIN_HEIGHT: 150,
  TITLE_HEIGHT: 20,
  BORDER_WIDTH: 2,
} as const;

export const TASKBAR = {
  HEIGHT: 28,
  START_BUTTON_WIDTH: 50,
  START_BUTTON_HEIGHT: 22,
} as const;

export const DESKTOP_ICON = {
  WIDTH: 64,
  MARGIN: 8,
  FONT_SIZE: 11,
} as const; 