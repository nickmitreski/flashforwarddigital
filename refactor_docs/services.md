# Refactor Documentation: services.tsx

## Purpose
`services.tsx` is the main component for displaying the project's services section. It includes cards, modals, and interactive UI for users to explore available services.

## Main Props & Structure
- This file is a page-level component and may not receive props directly, but it composes many subcomponents.
- It typically renders:
  - Service cards (branding, content, AI, etc.)
  - Modals/popups for detailed service info
  - Animations and interactive UI elements

## Refactor Plan
- Extract large or repeated UI blocks into smaller, reusable components.
- Move static data to `data/serviceData.ts` if not already present.
- Ensure all props and data use TypeScript interfaces.
- Add or improve comments and documentation for each new/extracted component.

## Design Reference
- **Before refactor:**
  - [ ] (Add screenshots or descriptions of the UI here before making changes)
- **After each step:**
  - [ ] (Update with screenshots or notes if the UI changes)

## How to Restore Original Design
- If the UI changes unexpectedly, restore the backup from `backups/services.tsx.bak.<timestamp>`.
- Use this document to track what was changed and why.

---

## Refactor Steps Log
- (Add a bullet point for each extraction or major change, with a date and summary) 