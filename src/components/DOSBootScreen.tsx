import React, { useEffect, useState } from "react";

const DOSBootScreen = () => {
  const [text, setText] = useState("");
  const bootSequence = [
    "Starting MS-DOS...",
    "HIMEM is testing extended memory...",
    "Loading Windows 98...",
    "Starting Windows 98..."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setText(prev => prev + bootSequence[currentLine] + "\n");
        currentLine++;
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black min-h-screen p-4 font-mono text-white whitespace-pre-line">
      {text}
      <span className="animate-pulse">_</span>
    </div>
  );
};

export default DOSBootScreen;