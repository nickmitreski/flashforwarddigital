# Creating a Portfolio Work Section

This guide provides a detailed explanation of how to create a portfolio work section using React, including all components, styling, and functionality.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Components Overview](#components-overview)
3. [Implementation Details](#implementation-details)
4. [Styling](#styling)
5. [Functionality](#functionality)
6. [Data Structure](#data-structure)

## Project Structure

The work section consists of several key files:

```
src/
├── Components/
│   ├── Projects/
│   │   └── Projects.jsx
│   └── Shared/
│       ├── ProjectCard/
│       │   └── ProjectCard.jsx
│       └── LightBox/
│           └── LightBox.jsx
├── Utlits/
│   └── projectList.js
└── scss/
    └── _projects.scss
```

## Components Overview

### 1. Projects Component (Projects.jsx)

The main container component that:
- Manages the grid layout of projects
- Handles the lightbox state
- Renders individual project cards

```jsx
import React, { useState } from "react";
import Lightbox from "../Shared/LightBox/LightBox";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
import { imagesList, projectList } from "../../Utlits/projectList";

const Projects = () => {
  const [currentId, setCurrentId] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  return (
    <section className="project__section pt-120 pb-120" id="projects">
      <div className="container">
        <div className={`project__wrapone`}>
          {projectList.map(({ heading, id, image, subHeading }, index) => (
            <ProjectCard
              key={id}
              image={image}
              heading={heading}
              subHeading={subHeading}
              openLightbox={openLightbox}
              index={index}
              navigate="/protfolio"
            />
          ))}
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox
          images={imagesList}
          setLightboxOpen={setLightboxOpen}
          currentId={currentId}
        />
      )}
    </section>
  );
};
```

### 2. ProjectCard Component (ProjectCard.jsx)

Individual project card that:
- Displays project image
- Shows project title and subtitle
- Handles hover effects
- Triggers lightbox on click

```jsx
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ image, heading, subHeading, openLightbox, index, navigate }) => {
  return (
    <div className="project__item" data-aos="fade-up">
      <div className="project__thumb">
        <img src={image} alt={heading} />
        <div className="project__overlay">
          <div className="project__content">
            <h3>{heading}</h3>
            <p>{subHeading}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
```

### 3. Lightbox Component (LightBox.jsx)

Modal component for displaying project images in full screen:
- Shows current image
- Allows navigation between images
- Handles keyboard navigation
- Provides close functionality

```jsx
import React from "react";

const Lightbox = ({ images, setLightboxOpen, currentId }) => {
  return (
    <div className="lightbox">
      <button className="close-btn" onClick={() => setLightboxOpen(false)}>
        ×
      </button>
      <img src={images[currentId]} alt="Project" />
    </div>
  );
};
```

## Implementation Details

### 1. Project Data Structure (projectList.js)

```javascript
export const projectList = [
  {
    id: 1,
    heading: "Project Title",
    subHeading: "Project Description",
    image: "/path/to/image.jpg"
  },
  // ... more projects
];

export const imagesList = [
  "/path/to/image1.jpg",
  "/path/to/image2.jpg",
  // ... more images
];
```

### 2. State Management

The Projects component manages two pieces of state:
- `currentId`: Tracks the currently selected project
- `lightboxOpen`: Controls the visibility of the lightbox

### 3. Event Handling

- `openLightbox`: Function to open the lightbox with a specific project
- Click handlers for project cards
- Keyboard navigation in lightbox
- Close button functionality

## Styling

### 1. Project Grid Layout

```scss
.project__section {
  padding: 120px 0;
  
  .project__wrapone {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
  }
}
```

### 2. Project Card Styling

```scss
.project__item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  
  .project__thumb {
    position: relative;
    
    img {
      width: 100%;
      height: auto;
      transition: transform 0.3s ease;
    }
    
    .project__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      opacity: 0;
      transition: opacity 0.3s ease;
      
      .project__content {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: white;
      }
    }
    
    &:hover {
      img {
        transform: scale(1.1);
      }
      
      .project__overlay {
        opacity: 1;
      }
    }
  }
}
```

### 3. Lightbox Styling

```scss
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  
  img {
    max-width: 90%;
    max-height: 90vh;
    object-fit: contain;
  }
  
  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
  }
}
```

## Functionality

### 1. Project Card Interactions

- Hover effects:
  - Image scale
  - Overlay fade-in
  - Text appearance
- Click to open lightbox
- Smooth transitions

### 2. Lightbox Features

- Full-screen image display
- Navigation between images
- Keyboard controls:
  - Arrow keys for navigation
  - Escape key to close
- Touch swipe support
- Close button
- Background overlay

### 3. Responsive Design

- Grid layout adjusts to screen size
- Images maintain aspect ratio
- Touch-friendly interactions
- Mobile-optimized lightbox

## Data Structure

### Project Object Structure

```javascript
{
  id: number,          // Unique identifier
  heading: string,     // Project title
  subHeading: string,  // Project description
  image: string        // Image path/URL
}
```

### Image List Structure

```javascript
[
  string,  // Image path/URL
  string,  // Image path/URL
  // ... more images
]
```

## Best Practices

1. **Image Optimization**
   - Use appropriate image sizes
   - Implement lazy loading
   - Consider using WebP format
   - Provide fallback images

2. **Performance**
   - Implement code splitting
   - Use React.memo for components
   - Optimize re-renders
   - Cache images

3. **Accessibility**
   - Add alt text to images
   - Implement keyboard navigation
   - Use ARIA labels
   - Ensure proper contrast

4. **User Experience**
   - Smooth transitions
   - Loading states
   - Error handling
   - Responsive design

## Additional Features to Consider

1. **Filtering**
   - Add category filters
   - Search functionality
   - Sort options

2. **Enhanced Interactions**
   - Video support
   - Multiple images per project
   - Project details page
   - Share functionality

3. **Animation**
   - Scroll animations
   - Page transitions
   - Loading animations
   - Hover effects

4. **Integration**
   - CMS integration
   - Analytics tracking
   - Social media sharing
   - Contact forms 