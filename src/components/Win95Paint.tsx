import React, { useRef, useState, useEffect } from 'react';

interface Win95PaintProps {
  onClose: () => void;
  isOpen: boolean;
}

const Win95Paint: React.FC<Win95PaintProps> = ({ onClose, isOpen }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [tool, setTool] = useState<'pencil' | 'eraser' | 'fill'>('pencil');
  const [lineWidth, setLineWidth] = useState(1);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [zIndex, setZIndex] = useState(1000);
  const windowRef = useRef<HTMLDivElement>(null);

  const colors = [
    '#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080',
    '#ffffff', '#c0c0c0', '#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    const windowElement = windowRef.current;
    if (!windowElement) return;

    setZIndex(prev => prev + 1);
    
    const initialX = e.clientX - windowElement.offsetLeft;
    const initialY = e.clientY - windowElement.offsetTop;

    const handleMouseMove = (e: MouseEvent) => {
      windowElement.style.left = `${e.clientX - initialX}px`;
      windowElement.style.top = `${e.clientY - initialY}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    setLastX(e.clientX - rect.left);
    setLastY(e.clientY - rect.top);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.strokeStyle = tool === 'eraser' ? '#ffffff' : color;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = 'round';
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    setLastX(x);
    setLastY(y);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      className="fixed"
      style={{ 
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex,
        width: '800px',
        background: '#c0c0c0'
      }}
    >
      {/* Main window border */}
      <div className="border border-white border-r-black border-b-black">
        <div className="border border-[#c0c0c0] border-r-[#404040] border-b-[#404040]">
          <div className="border border-[#dfdfdf] border-r-[#808080] border-b-[#808080]">
            {/* Title bar */}
            <div
              className="bg-[#000080] text-white px-1 py-[2px] flex justify-between items-center cursor-move select-none"
              onMouseDown={handleMouseDown}
            >
              <span className="text-[13px]">Paint</span>
              <button
                onClick={onClose}
                className="w-[16px] h-[14px] flex items-center justify-center text-black bg-[#c0c0c0] border border-white border-r-black border-b-black active:border-black active:border-r-white active:border-b-white leading-none text-sm pb-[2px]"
              >
                ×
              </button>
            </div>

            {/* Menu bar */}
            <div className="flex text-[12px] px-[1px] py-[2px] border-b border-[#808080]">
              <button className="px-2 hover:bg-[#000080] hover:text-white">File</button>
              <button className="px-2 hover:bg-[#000080] hover:text-white">Edit</button>
              <button className="px-2 hover:bg-[#000080] hover:text-white">View</button>
              <button className="px-2 hover:bg-[#000080] hover:text-white">Image</button>
              <button className="px-2 hover:bg-[#000080] hover:text-white">Colors</button>
              <button className="px-2 hover:bg-[#000080] hover:text-white">Help</button>
            </div>

            {/* Toolbar */}
            <div className="border-b border-[#808080] p-[2px] flex gap-[2px] bg-[#c0c0c0]">
              <div className="flex gap-[2px]">
                <button
                  onClick={() => setTool('pencil')}
                  className={`w-8 h-8 flex items-center justify-center border ${
                    tool === 'pencil' 
                      ? 'border-[#808080] border-r-white border-b-white' 
                      : 'border-white border-r-[#808080] border-b-[#808080]'
                  }`}
                >
                  ✏️
                </button>
                <button
                  onClick={() => setTool('eraser')}
                  className={`w-8 h-8 flex items-center justify-center border ${
                    tool === 'eraser'
                      ? 'border-[#808080] border-r-white border-b-white'
                      : 'border-white border-r-[#808080] border-b-[#808080]'
                  }`}
                >
                  🧽
                </button>
                <button
                  onClick={() => setTool('fill')}
                  className={`w-8 h-8 flex items-center justify-center border ${
                    tool === 'fill'
                      ? 'border-[#808080] border-r-white border-b-white'
                      : 'border-white border-r-[#808080] border-b-[#808080]'
                  }`}
                >
                  🪣
                </button>
              </div>

              <div className="w-[1px] h-8 bg-[#808080] mx-1" />

              <div className="flex flex-wrap gap-[2px] items-center">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`w-4 h-4 border ${
                      color === c
                        ? 'border-[#808080] border-r-white border-b-white'
                        : 'border-[#404040]'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            {/* Canvas Area with 3D inset effect */}
            <div className="border border-[#808080] border-r-white border-b-white m-[2px]">
              <div className="border border-[#404040] border-r-[#dfdfdf] border-b-[#dfdfdf]">
                <canvas
                  ref={canvasRef}
                  width={780}
                  height={500}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseOut={stopDrawing}
                  className="bg-white cursor-crosshair"
                />
              </div>
            </div>

            {/* Status Bar */}
            <div className="border-t border-[#808080] px-[2px] py-[2px] text-[12px] flex">
              <div className="border border-[#808080] border-r-white border-b-white px-2 flex-grow">
                {tool === 'pencil' ? 'Drawing' : tool === 'eraser' ? 'Erasing' : 'Fill'} tool selected
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Win95Paint; 