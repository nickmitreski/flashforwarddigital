import React from 'react';
import '../styles/modern.css';

interface ModernLayoutProps {
  children: React.ReactNode;
}

export const ModernLayout: React.FC<ModernLayoutProps> = ({ children }) => {
  return (
    <div className="modern-layout">
      <nav className="modern-nav">
        <div className="modern-nav-brand">
          Portfolio
        </div>
        <div className="modern-nav-links">
          <a href="#about" className="modern-nav-link">About</a>
          <a href="#projects" className="modern-nav-link">Projects</a>
          <a href="#contact" className="modern-nav-link">Contact</a>
        </div>
      </nav>

      <main className="modern-container">
        {children}
      </main>

      <footer className="modern-footer">
        <div className="modern-container">
          <p>&copy; 2024 Your Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ModernLayout; 