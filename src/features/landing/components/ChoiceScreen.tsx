import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/choice.css';

interface ChoiceScreenProps {
  setShowChoiceScreen: (show: boolean) => void;
  setShowWindows: (show: boolean) => void;
}

export const ChoiceScreen: React.FC<ChoiceScreenProps> = ({ setShowChoiceScreen, setShowWindows }) => {
  const navigate = useNavigate();

  const handleRetroChoice = () => {
    setShowChoiceScreen(false);
    setShowWindows(true);
  };

  const handleModernChoice = () => {
    navigate('/modern');
  };

  return (
    <div className="choice-container">
      {/* Background Grid */}
      <div className="dotted-grid" />
      
      <div className="choice-title">
        <img src="/ffdig.svg" alt="FFdig" className="ffdig-logo" style={{ filter: 'brightness(0) invert(1)', width: '600px', marginBottom: '2rem' }} />
      </div>
      
      <div className="choice-content">
        <div className="choice-subtitle" style={{ fontSize: '2rem' }}>choose your experience</div>
        <div className="choice-buttons">
          {/* Retro Button */}
          <div className="glass-button-wrap">
            <button className="glass-button" onClick={handleRetroChoice}>
              <span>Let's go back in time</span>
            </button>
            <div className="glass-button-shadow"></div>
          </div>

          {/* Modern Button */}
          <div className="glass-button-wrap">
            <button className="glass-button" onClick={handleModernChoice}>
              <span>Straight to business</span>
            </button>
            <div className="glass-button-shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoiceScreen; 