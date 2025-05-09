# PROJECT.md

## Project Overview

This document provides a comprehensive overview of the project structure, including all major files and folders, their purposes, and how the project is organized. It is intended to guide future refactoring, cleanup, and onboarding.

---

## Directory Structure (Modern Site)

```
src/modern/src/
├── App.tsx                # Main React app entry point
├── main.tsx               # Main TypeScript entry (mounts React app)
├── index.css              # Global styles
├── env.d.ts               # TypeScript environment definitions
├── components/            # All React components (pages, UI, shared, etc.)
│   ├── about.tsx          # About section/page component
│   ├── ServicePopups.tsx  # Popups for services (uses shared components)
│   ├── services.tsx       # Main services section/page
│   ├── ServiceModals.tsx  # Modal components for services
│   ├── SupabaseTest.tsx   # (Potentially unused) Supabase test component
│   ├── layout.tsx         # Main layout wrapper
│   ├── Footer.tsx         # Footer component
│   ├── pricing.tsx        # Pricing section/page
│   ├── stats.tsx          # Stats section/page
│   ├── hero.tsx           # Hero/landing section
│   ├── index.ts           # (Potentially unused) Barrel file
│   ├── contact.tsx        # Contact form/page
│   ├── StatCard.tsx       # Card for displaying a stat
│   ├── Chatbot.tsx        # Chatbot UI component
│   ├── Desktop.tsx        # Windows-style desktop interface
│   ├── PortfolioPopup.tsx # Portfolio modal/popup
│   ├── DesktopBackground.tsx # Desktop background component
│   ├── Win95Icon.tsx      # Windows 95-style icon component
│   └── shared/            # Shared, reusable UI components
│       ├── ServiceIcons.tsx   # Central icon library for services
│       ├── BasePopup.tsx      # Generic popup/modal component
│       └── ServiceCard.tsx    # Card for displaying a service
├── data/                  # Centralized data (service lists, etc.)
│   └── serviceData.ts     # Data for branding, content, and AI services
├── utils/                 # Utility/helper functions
│   ├── refactor-logger.ts # Logs refactor actions
│   ├── logger.ts          # Logging utility
│   ├── analytics.ts       # Analytics tracking
│   ├── helpers.ts         # Miscellaneous helpers
│   ├── animation.ts       # Animation helpers
│   └── win95Icons.ts      # Windows 95 icon helpers
├── config/                # Configuration files
│   └── icons.tsx          # Icon configuration
├── lib/                   # Library code (external integrations)
│   ├── supabase.ts        # Supabase client setup
│   └── utils.ts           # Miscellaneous utilities
├── pages/                 # Page-level components (e.g., Home)
│   └── Home.tsx           # Home page
├── app/                   # App-level routing/layout (Next.js style)
│   ├── layout.tsx         # App layout
│   └── admin/             # Admin dashboard and login
│       ├── AdminLayout.tsx    # Admin layout
│       ├── dashboard/         # Admin dashboard pages
│       │   └── page.tsx       # Dashboard main page
│       └── login/             # Admin login pages
│           └── page.tsx       # Login page
├── styles/                # CSS files
│   └── portfolio.css      # Portfolio-specific styles
├── types/                 # TypeScript type definitions
│   ├── chatbot.ts         # Chatbot types
│   ├── stats.ts           # Stats types
│   ├── content.ts         # Content types
│   ├── icons.ts           # Icon types
│   └── images.d.ts        # Image type definitions
├── constants/             # Project-wide constants
│   ├── navigation.ts      # Navigation links
│   ├── portfolio.ts       # Portfolio constants
│   └── theme.ts           # Theme constants
├── assets/                # Static assets (images, backgrounds, videos)
│   ├── portfolio/         # Portfolio images/assets
│   │   └── placeholder.js # Placeholder image logic
│   ├── backgrounds/       # Background images
│   │   ├── services-bg.png
│   │   └── hero-bg.png
│   └── videos/            # (Currently empty)
```

---

## Folder & File Descriptions

### **components/**
- **about.tsx**: About section/page, includes company/mission info.
- **ServicePopups.tsx**: Renders popups for branding, content, and AI services using shared components.
- **services.tsx**: Main services section/page, lists all services.
- **ServiceModals.tsx**: Modal components for detailed service info.
- **SupabaseTest.tsx**: (Potentially unused) For testing Supabase integration.
- **layout.tsx**: Main layout wrapper for the app.
- **Footer.tsx**: Footer UI component.
- **pricing.tsx**: Pricing section/page.
- **stats.tsx**: Stats section/page, uses StatCard.
- **hero.tsx**: Hero/landing section with main call-to-action.
- **index.ts**: (Potentially unused) Barrel file for exports.
- **contact.tsx**: Contact form/page.
- **StatCard.tsx**: Card for displaying a stat.
- **Chatbot.tsx**: Chatbot UI component.
- **Desktop.tsx**: Windows-style desktop interface.
- **PortfolioPopup.tsx**: Modal/popup for portfolio projects.
- **DesktopBackground.tsx**: Background for desktop interface.
- **Win95Icon.tsx**: Windows 95-style icon component.
- **shared/**: Shared, reusable UI components (ServiceIcons, BasePopup, ServiceCard).

### **data/**
- **serviceData.ts**: Centralized data for all branding, content, and AI services. Used by popups and service sections.

### **utils/**
- **refactor-logger.ts**: Logs refactor actions for auditability.
- **logger.ts**: Logging utility for persistent logs.
- **analytics.ts**: Analytics tracking functions.
- **helpers.ts**: Miscellaneous helper functions.
- **animation.ts**: Animation helpers for UI effects.
- **win95Icons.ts**: Helpers for Windows 95-style icons.

### **config/**
- **icons.tsx**: Icon configuration and mapping.

### **lib/**
- **supabase.ts**: Supabase client setup for backend integration.
- **utils.ts**: Miscellaneous utility functions.

### **pages/**
- **Home.tsx**: Home page component, assembles main sections.

### **app/**
- **layout.tsx**: App-level layout (Next.js style).
- **admin/**: Admin dashboard and login pages.
    - **AdminLayout.tsx**: Layout for admin pages.
    - **dashboard/page.tsx**: Main admin dashboard page.
    - **login/page.tsx**: Admin login page.

### **styles/**
- **portfolio.css**: CSS for portfolio section.

### **types/**
- **chatbot.ts, stats.ts, content.ts, icons.ts, images.d.ts**: TypeScript type definitions for various features.

### **constants/**
- **navigation.ts, portfolio.ts, theme.ts**: Project-wide constants for navigation, portfolio, and theming.

### **assets/**
- **portfolio/**: Portfolio images/assets.
- **backgrounds/**: Background images for hero/services.
- **videos/**: (Currently empty) Placeholder for video assets.

---

## Project Setup & Component Architecture

- **Component-Driven:** The project is organized around reusable React components. Shared UI (cards, popups, icons) lives in `components/shared/`.
- **Centralized Data:** All service-related data is in `data/serviceData.ts`, making it easy to update or extend services.
- **Utilities:** Common logic (logging, analytics, helpers) is in `utils/`.
- **Type Safety:** TypeScript is used throughout, with types in `types/`.
- **Styling:** Uses global CSS (`index.css`), section-specific CSS (`portfolio.css`), and utility classes (likely Tailwind or similar).
- **Assets:** Images and backgrounds are organized in `assets/`.
- **Admin Area:** Separate admin dashboard and login under `app/admin/`.
- **App Structure:** Main entry is `App.tsx`, with routing/layout handled by `app/` and `pages/`.

---

## Refactoring & Cleanup Notes

- **Unused Files:** `SupabaseTest.tsx`, `index.ts` (in components), and the empty `services/` subfolder are candidates for removal.
- **Shared Components:** All major UI elements are already modularized; further refactoring should focus on reducing duplication and improving documentation.
- **Logging:** Use `refactor-logger.ts` and `logger.ts` to track changes and maintain auditability.
- **Type Consistency:** Ensure all data and props use the defined interfaces/types.
- **Visual Consistency:** Use shared components and centralized data to maintain a consistent look and feel.

---

## How to Use This Document

- Use this as a reference for onboarding, refactoring, or cleaning up the codebase.
- Update this document as the project evolves to keep it accurate and helpful.

--- 