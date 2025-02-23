import React, { useRef } from "react";
import { X, Minus, Square } from "lucide-react";

interface Win98WindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Win98Window = ({ title, isOpen, onClose, children }: Win98WindowProps) => {
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const windowElement = windowRef.current;
    if (!windowElement) return;

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

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      className="fixed inset-0 flex items-center justify-center"
      style={{ position: "absolute" }}
    >
      <div className="bg-[#c0c0c0] min-w-[300px]">
        {/* Main window border - creates the outer black edge */}
        <div className="border border-[#868686] border-r-black border-b-black">
          {/* First inner border - creates the white highlight */}
          <div className="border border-white border-r-[#868686] border-b-[#868686]">
            {/* Content container */}
            <div className="bg-[#c0c0c0]">
              {/* Title bar */}
              <div
                className="bg-[#000080] text-white px-1 py-[2px] flex justify-between items-center cursor-move select-none"
                onMouseDown={handleMouseDown}
              >
                <span className="text-sm font-bold">{title}</span>
                <div className="flex gap-[2px]">
                  <button className="w-[16px] h-[14px] flex items-center justify-center text-black bg-[#c0c0c0] border border-white border-r-black border-b-black active:border-black active:border-r-white active:border-b-white">
                    <Minus size={8} />
                  </button>
                  <button className="w-[16px] h-[14px] flex items-center justify-center text-black bg-[#c0c0c0] border border-white border-r-black border-b-black active:border-black active:border-r-white active:border-b-white">
                    <Square size={8} />
                  </button>
                  <button
                    onClick={onClose}
                    className="w-[16px] h-[14px] flex items-center justify-center text-black bg-[#c0c0c0] border border-white border-r-black border-b-black hover:bg-red-600 hover:text-white active:border-black active:border-r-white active:border-b-white"
                  >
                    <X size={8} />
                  </button>
                </div>
              </div>

              {/* Content area with its own 3D inset effect */}
              <div className="border border-[#868686] border-r-white border-b-white m-1">
                <div className="border border-black border-r-[#dfdfdf] border-b-[#dfdfdf]">
                  <div className="bg-white">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Win98Window;