# Features Directory

This directory contains the main feature modules of the application, each with its own components, styles, and logic.

## Landing (`/landing`)
The entry point of the application where users choose their experience.
- Components for the choice interface
- Transition animations
- Navigation logic

## Retro (`/retro`)
The Windows 95/98-style interface implementation.
- Window management system
- Desktop environment
- Start menu and taskbar
- Context menus
- Desktop icons

### Key Components:
- `RetroDesktop.tsx` - Main desktop environment
- `Window.tsx` - Window component
- `Taskbar.tsx` - Bottom taskbar
- `StartMenu.tsx` - Start menu implementation
- `DesktopIcon.tsx` - Interactive desktop icons

## Modern (`/modern`)
The contemporary interface implementation.
- Modern UI components
- Responsive layouts
- Navigation system
- Content sections

### Key Components:
- `ModernLayout.tsx` - Main layout wrapper
- `Navigation.tsx` - Top navigation bar
- `ContentSection.tsx` - Content area components
- `Footer.tsx` - Footer component

## Component Organization

Each feature follows this structure:
```
feature/
  ├── components/     # React components
  ├── styles/         # Feature-specific styles
  ├── hooks/          # Custom hooks
  ├── utils/          # Utility functions
  └── types/          # TypeScript types
``` 