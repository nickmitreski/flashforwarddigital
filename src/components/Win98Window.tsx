import React, { useRef, useCallback } from "react";
import { X, Minus, Square } from "lucide-react";
import { BaseProps, MouseHandler, WindowEventHandlers } from "../types";
import { WINDOW_ANIMATION, RETRO_COLORS } from "../constants/retro-theme";
import soundPlayer from "@/utils/sounds";

interface Win98WindowProps extends BaseProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  isMaximized?: boolean;
  zIndex?: number;
}

const Win98Window: React.FC<Win98WindowProps> = ({
  title,
  isOpen,
  onClose,
  onMinimize,
  onMaximize,
  children,
  initialPosition,
  isMaximized = false,
  zIndex = 1,
  className = "",
  style,
  ...props
}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ x: 0, y: 0, isDragging: false });

  const handleMouseDown: MouseHandler = useCallback((e) => {
    if (!windowRef.current || isMaximized) return;

    const rect = windowRef.current.getBoundingClientRect();
    dragRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isDragging: true,
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragRef.current.isDragging || !windowRef.current) return;

      const x = e.clientX - dragRef.current.x;
      const y = e.clientY - dragRef.current.y;

      windowRef.current.style.left = `${x}px`;
      windowRef.current.style.top = `${y}px`;
    };

    const handleMouseUp = () => {
      dragRef.current.isDragging = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, [isMaximized]);

  const handleClose = () => {
    soundPlayer.play('error');
    onClose();
  };

  const handleMinimize = () => {
    soundPlayer.play('ding');
    onMinimize?.();
  };

  const handleMaximize = () => {
    soundPlayer.play('ding');
    onMaximize?.();
  };

  const handleMouseDownBase = (e: React.MouseEvent) => {
    handleMouseDown(e);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={windowRef}
      className={`fixed ${isMaximized ? 'inset-0' : ''} ${className}`}
      style={{
        ...style,
        position: "absolute",
        left: initialPosition?.x ?? "50%",
        top: initialPosition?.y ?? "50%",
        transform: initialPosition ? "none" : "translate(-50%, -50%)",
        zIndex,
      }}
      {...props}
    >
      <div className="bg-[#c0c0c0] min-w-[300px] shadow-lg">
        <div className="border border-[#868686] border-r-black border-b-black">
          <div className="border border-white border-r-[#868686] border-b-[#868686]">
            <div className="bg-[#c0c0c0]">
              <div
                className="bg-[#000080] text-white px-1 py-[2px] flex justify-between items-center cursor-move select-none"
                onMouseDown={handleMouseDownBase}
              >
                <span className="text-sm font-bold">{title}</span>
                <div className="flex gap-[2px]">
                  {onMinimize && (
                    <button
                      onClick={handleMinimize}
                      className="win98-button w-[16px] h-[14px]"
                      aria-label="Minimize"
                    >
                      <Minus size={8} />
                    </button>
                  )}
                  {onMaximize && (
                    <button
                      onClick={handleMaximize}
                      className="win98-button w-[16px] h-[14px]"
                      aria-label="Maximize"
                    >
                      <Square size={8} />
                    </button>
                  )}
                  <button
                    onClick={handleClose}
                    className="win98-button w-[16px] h-[14px] hover:bg-red-600 hover:text-white"
                    aria-label="Close"
                  >
                    <X size={8} />
                  </button>
                </div>
              </div>
              <div className="border border-[#868686] border-r-white border-b-white m-1">
                <div className="border border-black border-r-[#dfdfdf] border-b-[#dfdfdf]">
                  <div className="bg-white p-2">{children}</div>
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