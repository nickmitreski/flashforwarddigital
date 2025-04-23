export const FADE_ANIMATION = {
  DURATION: 200,
  TIMING: 'ease-in-out',
} as const;

export const SLIDE_ANIMATION = {
  DURATION: 300,
  TIMING: 'cubic-bezier(0.4, 0, 0.2, 1)',
  DISTANCE: '20px',
} as const;

export const SCALE_ANIMATION = {
  DURATION: 150,
  TIMING: 'ease-out',
  START: 0.95,
  END: 1,
} as const;

export const WINDOW_ANIMATION = {
  MINIMIZE: {
    DURATION: 200,
    TIMING: 'ease-in-out',
  },
  MAXIMIZE: {
    DURATION: 250,
    TIMING: 'ease-out',
  },
  DRAG: {
    DURATION: 0,
  },
} as const;

export const PAGE_TRANSITION = {
  DURATION: 400,
  TIMING: 'cubic-bezier(0.4, 0, 0.2, 1)',
  ENTER: {
    OPACITY: [0, 1],
    TRANSFORM: ['translateY(10px)', 'translateY(0)'],
  },
  EXIT: {
    OPACITY: [1, 0],
    TRANSFORM: ['translateY(0)', 'translateY(-10px)'],
  },
} as const; 