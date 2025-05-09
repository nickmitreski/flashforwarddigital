import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/30 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <p className="text-sm text-gray-400">© 2024 Flash Forward Digital. All rights reserved.</p>
        <a 
          href="/modern/admin/login" 
          className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg border border-white/10 bg-black/20 hover:bg-black/40 backdrop-blur-sm"
        >
          Admin Login
        </a>
      </div>
    </footer>
  );
} 