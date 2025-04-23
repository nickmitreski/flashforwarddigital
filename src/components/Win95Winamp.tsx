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
            artist: "90s Mix",
            title: "Track 1",
          },
          url: "/audio/track1.mp3",
          duration: 180,
        },
        {
          metaData: {
            artist: "90s Mix",
            title: "Track 2",
          },
          url: "/audio/track2.mp3",
          duration: 180,
        },
        {
          metaData: {
            artist: "90s Mix",
            title: "Track 3",
          },
          url: "/audio/track3.mp3",
          duration: 180,
        }
      ],
      initialSkin: {
        url: "https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82/skins/SpyAMP%20II.wsz",
      },
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