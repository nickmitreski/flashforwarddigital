import React from 'react';

interface Win95MarioProps {
  onClose: () => void;
}

const Win95Mario: React.FC<Win95MarioProps> = ({ onClose }) => {
  return (
    <div className="bg-[#c0c0c0] p-4">
      <div className="bg-black p-2">
        <iframe
          src="https://tylerreichle.github.io/mario_js/"
          className="border-2 border-white"
          width="760"
          height="600"
          style={{ maxWidth: '100%' }}
          allow="autoplay"
        />
      </div>
    </div>
  );
};

export default Win95Mario; 