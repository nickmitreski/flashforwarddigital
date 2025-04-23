import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Project data structure
interface Project {
  id: number;
  heading: string;
  url: string;
  image: string;
}

// Actual project data
const projectList: Project[] = [
  {
    id: 1,
    heading: "1 Step Ahead",
    url: "https://1stepahead.vercel.app",
    image: "/images/1stepahead.png"
  },
  {
    id: 2,
    heading: "Boostr AI",
    url: "https://boostr-seven.vercel.app",
    image: "/images/booster.png"
  },
  {
    id: 3,
    heading: "Content Maker",
    url: "https://vercel.com/niks-projects-b9d07588/content-maker",
    image: "/images/contentmaker.png"
  },
  {
    id: 4,
    heading: "FollowFuse Cover",
    url: "https://vercel.com/niks-projects-b9d07588/cover",
    image: "/images/folllowfusecover.png"
  },
  {
    id: 5,
    heading: "FollowFuse Lander",
    url: "https://landernew.vercel.app",
    image: "/images/followfuselander.png"
  },
  {
    id: 6,
    heading: "MG Accounting",
    url: "https://mg-sepia.vercel.app",
    image: "/images/mg.png"
  }
];

interface PortfolioPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PortfolioPopup({ isOpen, onClose }: PortfolioPopupProps) {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div 
              className="relative w-full max-w-5xl max-h-[85vh] overflow-y-auto rounded-[20px] bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close button in the corner */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-black hover:text-black/80 transition-colors z-10 bg-white/5 backdrop-blur-xl rounded-full p-2 border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Grid of projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                {projectList.map((project) => (
                  <a 
                    key={project.id}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
                      <div className="relative w-full pb-[56.25%]">
                        <img 
                          src={project.image} 
                          alt={project.heading}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-medium text-lg">{project.heading}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 