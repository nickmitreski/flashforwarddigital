# Icon System

A flexible and type-safe icon system for React applications.

## Features

- Type-safe icon names through TypeScript
- SVG-based icons with consistent base path
- Smart fallback logic for similar icon types
- Error handling with fallback icons
- Icon path caching for performance
- Preloading capabilities for critical icons

## Usage

### Basic Usage

```tsx
import { Icon } from './components/Icon';

// Basic usage
<Icon icon="folder" />

// With custom size and class
<Icon 
  icon="file-pdf" 
  size={32} 
  className="my-custom-class" 
  alt="PDF Document" 
/>
```

### Preloading Icons

For critical icons that should be preloaded:

```tsx
import { preloadIcons } from '../utils/iconUtils';

// Preload multiple icons
useEffect(() => {
  preloadIcons(['folder', 'file-pdf', 'error']);
}, []);
```

## Icon Types

The system supports the following icon types:

- `folder`
- `folder-open`
- `file`
- `file-text`
- `file-image`
- `file-pdf`
- `error`

## File Structure

- `/public/icons/` - SVG icons directory
- `src/components/Icon.tsx` - Main icon component
- `src/components/Icon.css` - Icon styling
- `src/utils/iconUtils.ts` - Icon utility functions
- `src/types/icon.ts` - TypeScript types

## Adding New Icons

1. Add the SVG file to `/public/icons/` with the appropriate name (e.g., `new-icon.svg`)
2. Add the icon type to the `IconType` union in `src/types/icon.ts`
3. The icon will be automatically available for use 