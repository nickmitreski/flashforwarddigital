import React, { useEffect, useRef } from 'react';
import Webamp from 'webamp';

interface Win95WinampProps {
  onClose: () => void;
}

const Win95Winamp: React.FC<Win95WinampProps> = ({ onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const webampRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const webamp = new Webamp({
      initialTracks: [
        {
          metaData: {
            artist: "DJ Mike Llama",
            title: "Llama Whippin' Intro",
          },
          url: "https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82/mp3/llama-2.91.mp3",
          duration: 5.322286,
        },
      ],
    });

    webamp.renderWhenReady(containerRef.current).then(() => {
      webampRef.current = webamp;
    });

    webamp.onClose(() => {
      onClose();
    });

    return () => {
      if (webampRef.current) {
        webampRef.current.dispose();
      }
    };
  }, [onClose]);

  return <div ref={containerRef} className="webamp-container" />;
};

export default Win95Winamp; 