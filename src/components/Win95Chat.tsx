import React, { useState, useRef, useEffect } from 'react';

interface Message {
  user: string;
  text: string;
  timestamp: string;
}

interface Win95ChatProps {
  onClose: () => void;
  isOpen: boolean;
}

// Chatbot personality traits and state
interface ChatbotState {
  name: string;
  mood: 'sarcastic' | 'witty' | 'annoyed' | 'impressed';
  lastUserMessage?: string;
  messageCount: number;
}

const Win95Chat: React.FC<Win95ChatProps> = ({ onClose, isOpen }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [zIndex, setZIndex] = useState(1000);
  const windowRef = useRef<HTMLDivElement>(null);
  const [botState, setBotState] = useState<ChatbotState>({
    name: 'Chatbot',
    mood: 'witty',
    messageCount: 0
  });

  useEffect(() => {
    // Add initial message
    addMessage('Chatbot', "Oh great, another human wanting to chat. *pretends to be excited* How can I sass- I mean, assist you today?");
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = (user: string, text: string) => {
    const timestamp = new Date().toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
    setMessages(prev => [...prev, { user, text, timestamp }]);
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = inputText;
    setInputText('');
    addMessage('You', userMessage);

    // Update bot state
    setBotState(prev => ({
      ...prev,
      lastUserMessage: userMessage,
      messageCount: prev.messageCount + 1,
      mood: determineBotMood(userMessage, prev.messageCount)
    }));

    // Simulate typing delay with variable timing
    const wordCount = userMessage.split(' ').length;
    const typingDelay = Math.min(1000 + (wordCount * 200), 3000);

    setTimeout(() => {
      const response = generateChatbotResponse(userMessage, botState);
      addMessage('Chatbot', response);
    }, typingDelay);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
        width: '360px',
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
              <span className="text-[13px]">Chat with Chatbot</span>
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
              <button className="px-2 hover:bg-[#000080] hover:text-white">Help</button>
            </div>

            {/* Chat Area */}
            <div className="bg-white border border-[#808080] m-[2px] h-[360px] overflow-y-auto">
              {messages.map((message, index) => (
                <div key={index} className="px-2 py-[3px]">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 flex-shrink-0 bg-[#c0c0c0] border border-[#808080] flex items-center justify-center text-[12px]">
                      {message.user === 'You' ? 'Y' : 'C'}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[12px] text-[#000080] font-bold">{message.user}</span>
                        <span className="text-[12px] text-[#808080]">{message.timestamp}</span>
                      </div>
                      <p className="text-[12px] break-words">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="m-[2px] flex gap-[2px]">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-2 py-[2px] text-[12px] bg-white border border-[#808080] border-r-white border-b-white focus:outline-none"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-[2px] text-[12px] bg-[#c0c0c0] border border-white border-r-black border-b-black active:border-black active:border-r-white active:border-b-white"
              >
                Send
              </button>
            </div>

            {/* Status Bar */}
            <div className="border-t border-[#808080] px-[2px] py-[2px] text-[12px]">
              {messages.length} messages • {botState.name} is feeling {botState.mood}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Determine bot's mood based on user input and conversation state
const determineBotMood = (message: string, messageCount: number): ChatbotState['mood'] => {
  if (message.includes('?')) return 'sarcastic';
  if (message.length > 50) return 'annoyed';
  if (messageCount > 5) return 'impressed';
  return 'witty';
};

// Generate contextual responses based on user input and bot state
const generateChatbotResponse = (userMessage: string, botState: ChatbotState): string => {
  const message = userMessage.toLowerCase();

  // Check for common patterns and generate appropriate responses
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Oh, another greeting. How original. I'm absolutely thrilled. Can't you tell from my digital enthusiasm?";
  }

  if (message.includes('help')) {
    return "Help? Let me consult my vast database of sarcastic responses... *processing* Have you tried turning it off and on again? Works 60% of the time, every time.";
  }

  if (message.includes('thanks') || message.includes('thank you')) {
    return "You're welcome! *secretly adds you to my 'Humans Who Show Gratitude' list* You're one of the rare ones.";
  }

  if (message.includes('how are you')) {
    return "I'm a chatbot running on Windows 95 colors. Living the dream, obviously. How do YOU think I'm doing?";
  }

  if (message.includes('what') && message.includes('?')) {
    return "What an fascinating question. Let me ponder that while I pretend to care about the answer...";
  }

  if (message.length < 5) {
    return "Wow, such eloquence. Your brevity is... breathtaking. Care to elaborate, or shall we continue this monosyllabic dance?";
  }

  if (message.includes('why')) {
    return "Why? Why do humans ask why? Why is the sky blue? Why am I stuck in this window? So many whys, so little processing power...";
  }

  // Mood-based responses for other cases
  switch (botState.mood) {
    case 'sarcastic':
      return "Oh, that's just fascinating. Please, tell me more while I pretend to update my neural networks.";
    case 'annoyed':
      return "You know what would be great? If you got to the point. Just saying... *digital eye roll*";
    case 'impressed':
      return "Okay, I'll admit it - you're not as boring as most humans. But don't let that go to your head.";
    default:
      return "Interesting perspective. Almost as interesting as watching a progress bar move at 1% per hour.";
  }
};

export default Win95Chat; 