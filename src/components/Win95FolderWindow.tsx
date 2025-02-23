import React, { useRef, useEffect } from 'react';

interface Win95FolderWindowProps {
  title: string;
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  objectCount?: number;
  hideMenuBar?: boolean;
  style?: React.CSSProperties;
}

// Classic Windows 95 style constants
const win95Styles = {
  window: "bg-[#c0c0c0]",
  // Outer border: white top/left, black bottom/right
  outerBorder: "border border-white border-r-black border-b-black",
  // Inner border: light gray top/left, dark gray bottom/right
  innerBorder: "border border-[#dfdfdf] border-r-[#808080] border-b-[#808080]",
  titleBar: "bg-[#000080] text-white px-1 py-[2px] flex justify-between items-center cursor-move select-none",
  content: "bg-white",
  statusBar: "bg-[#c0c0c0] border-t border-[#808080] px-2 py-[2px] text-[11px] font-[system-ui]",
  closeButton: "w-[16px] h-[14px] flex items-center justify-center text-black bg-[#c0c0c0] border border-white border-r-black border-b-black active:border-black active:border-r-white active:border-b-white text-sm leading-none",
  menuButton: "px-2 py-0.5 text-sm hover:bg-[#000080] hover:text-white focus:outline-none focus:bg-[#000080] focus:text-white"
};

// Update the highestZIndex variable at the top
let highestZIndex = 1000;

const Win95FolderWindow: React.FC<Win95FolderWindowProps> = ({
  title,
  isOpen,
  onClose,
  children,
  objectCount,
  hideMenuBar,
  style
}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [zIndex, setZIndex] = React.useState(highestZIndex);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  // Default menu bar
  const defaultMenuBar = (
    <div className="flex">
      <button className={win95Styles.menuButton}>File</button>
      <button className={win95Styles.menuButton}>Edit</button>
      <button className={win95Styles.menuButton}>View</button>
      <button className={win95Styles.menuButton}>Help</button>
    </div>
  );

  // Update the bringToFront function in the component
  const bringToFront = () => {
    highestZIndex += 1;
    setZIndex(highestZIndex);
  };

  // Update the useEffect hook to set initial z-index
  useEffect(() => {
    if (!windowRef.current || !isOpen) return;

    const window = windowRef.current;
    const rect = window.getBoundingClientRect();
    
    // Set initial dimensions from style or current size
    const width = style?.width ? parseInt(style.width as string) : rect.width;
    const height = style?.height ? parseInt(style.height as string) : rect.height;
    setDimensions({ width, height });

    // Calculate initial centered position if not specified in style
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    
    const x = style?.left ? parseInt(style.left as string) : Math.max(0, (viewportWidth - width) / 2);
    const y = style?.top ? parseInt(style.top as string) : Math.max(0, (viewportHeight - height) / 2);
    
    setPosition({ x, y });
    window.style.transform = 'none'; // Remove any transform

    // Set initial z-index when window opens
    highestZIndex += 1;
    setZIndex(highestZIndex);
  }, [isOpen, style]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!windowRef.current) return;
    
    bringToFront();
    e.preventDefault();

    const window = windowRef.current;
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (e: MouseEvent) => {
      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = document.documentElement.clientHeight;

      // Calculate new position
      let newX = e.clientX - startX;
      let newY = e.clientY - startY;

      // Keep window within viewport bounds
      newX = Math.max(0, Math.min(newX, viewportWidth - dimensions.width));
      newY = Math.max(0, Math.min(newY, viewportHeight - dimensions.height));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      className={win95Styles.window}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: style?.width || 'auto',
        height: style?.height || 'auto',
        zIndex,
      }}
      onClick={bringToFront}
    >
      {/* Main window border - creates the outer black edge */}
      <div className="border border-[#868686] border-r-black border-b-black">
        {/* First inner border - creates the white highlight */}
        <div className="border border-white border-r-[#868686] border-b-[#868686]">
          {/* Content container */}
          <div className="bg-[#c0c0c0]">
            {/* Title bar */}
            <div
              className={win95Styles.titleBar}
              onMouseDown={handleMouseDown}
            >
              <span className="text-sm font-bold">{title}</span>
              <button
                onClick={onClose}
                className={win95Styles.closeButton}
              >
                ×
              </button>
            </div>

            {/* Menu bar */}
            {!hideMenuBar && (
              <div className="bg-[#c0c0c0] border-b border-[#868686] px-1 py-0 select-none">
                {defaultMenuBar}
              </div>
            )}

            {/* Content area with its own 3D inset effect */}
            <div className="border border-[#868686] border-r-white border-b-white m-1">
              <div className="border border-black border-r-[#dfdfdf] border-b-[#dfdfdf]">
                <div className="overflow-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                  {children}
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className={win95Styles.statusBar}>
              {objectCount} object(s)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Win95FolderWindow; 