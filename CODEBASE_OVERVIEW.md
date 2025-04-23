# Codebase Overview

## 🏗️ Project Structure
- Framework: React + TypeScript + Vite
- Styling: Tailwind CSS
- Build Tool: Vite
- Package Manager: Multiple options available (yarn, npm, bun)

## 📁 Layout & Page Structure

### Main Layout Files
- `src/modern/src/components/layout.tsx`
  - Main layout wrapper
  - Contains header with navigation
  - Includes Chatbot component
  - Responsive design with mobile menu

### Pages/Components
1. `src/modern/src/components/hero.tsx`
   - Landing page hero section
   - Main visual section of the homepage

2. `src/modern/src/components/about.tsx`
   - About page component
   - Company information and mission

3. `src/modern/src/components/services.tsx`
   - Services page component
   - Detailed service offerings

4. `src/modern/src/components/pricing.tsx`
   - Pricing page component
   - Pricing plans and features

5. `src/modern/src/components/contact.tsx`
   - Contact page component
   - Contact form and information

## 🧩 Components (UI + Functional)

### Core Components
1. `src/modern/src/components/layout.tsx`
   - Main layout wrapper
   - Navigation header
   - Mobile menu
   - Used across all pages

2. `src/modern/src/components/Chatbot.tsx`
   - Interactive chatbot component
   - Used in layout for global access

3. `src/modern/src/components/Desktop.tsx`
   - Desktop interface component
   - Windows-like interface

4. `src/modern/src/components/DesktopBackground.tsx`
   - Background component for desktop view
   - Visual styling for desktop interface

5. `src/modern/src/components/Win95Icon.tsx`
   - Windows 95 style icon component
   - Used in desktop interface

6. `src/modern/src/components/StatCard.tsx`
   - Statistics display card
   - Used in stats section

7. `src/modern/src/components/stats.tsx`
   - Statistics section component
   - Displays key metrics

## 🎨 Styles

### Global Styles
- `src/modern/src/index.css`
  - Global Tailwind CSS styles
  - Custom utility classes
  - Base styling

### Theme Configuration
- `src/modern/src/constants/theme.ts`
  - Theme configuration
  - Color schemes
  - Design tokens

## 🖼️ Images & Assets

### Asset Directories
- `src/modern/src/assets/`
  - Images
  - Icons
  - Other static assets

### Public Assets
- `public/`
  - Favicon
  - Static assets
  - Placeholder images

## 🧠 Technical Details

### Framework & Tools
- React + TypeScript
- Vite as build tool
- Tailwind CSS for styling
- React Router for navigation

### Key Features
- Responsive design
- Mobile-first approach
- Interactive chatbot
- Windows 95-style desktop interface
- Modern UI components

### Configuration Files
- `vite.config.ts`: Vite configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `package.json`: Project dependencies and scripts

## 📝 Notes for Design Changes
- Main layout changes: Edit `src/modern/src/components/layout.tsx`
- Global styles: Modify `src/modern/src/index.css`
- Theme changes: Update `src/modern/src/constants/theme.ts`
- Component-specific styles: Edit individual component files
- Navigation structure: Modify `src/modern/src/constants/navigation.ts` 