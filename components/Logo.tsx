
import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", inverted = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg viewBox="0 0 280 100" className="h-full w-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Calendar Background/Shadow */}
        <rect x="52" y="10" width="106" height="80" rx="10" fill="#0c4a9e" opacity="0.1" transform="translate(4, 4)" />
        
        {/* Main Calendar Body */}
        <rect x="52" y="10" width="106" height="80" rx="10" fill="#0c4a9e" />
        
        {/* Top Hooks */}
        <rect x="62" y="2" width="6" height="15" rx="3" fill="#e2e8f0" />
        <rect x="84" y="2" width="6" height="15" rx="3" fill="#e2e8f0" />
        <rect x="106" y="2" width="6" height="15" rx="3" fill="#e2e8f0" />
        <rect x="128" y="2" width="6" height="15" rx="3" fill="#e2e8f0" />
        <rect x="150" y="2" width="6" height="15" rx="3" fill="#e2e8f0" />

        {/* Calendar Inner White Page */}
        <rect x="58" y="25" width="94" height="60" rx="4" fill="white" />
        
        {/* Page Grid */}
        <rect x="65" y="32" width="24" height="18" rx="2" fill="#60a5fa" opacity="0.4" />
        <rect x="94" y="32" width="8" height="8" rx="1" fill="#ef4444" /> {/* The Red Marked Date */}
        
        <path d="M65 54 H145 M65 64 H145 M65 74 H145 M80 32 V80 M95 32 V80 M110 32 V80 M125 32 V80 M140 32 V80" 
              stroke="#e2e8f0" strokeWidth="1" />

        {/* Magnifying Glass / Plus Icon Circle */}
        <circle cx="150" cy="75" r="22" fill="white" stroke="#3b82f6" strokeWidth="4" />
        <circle cx="150" cy="75" r="14" fill="#3b82f6" />
        
        {/* Plus Sign */}
        <path d="M150 68 V82 M143 75 H157" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M150 71 V79 M146 75 H154" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />

        {/* Text Part: CLINIC */}
        <text 
          x="10" 
          y="85" 
          fill={inverted ? "white" : "#0c4a9e"} 
          style={{ font: "900 48px sans-serif", letterSpacing: "-2px" }}
        >
          CLINIC
        </text>

        {/* Text Part: plus (Script Font) */}
        <text 
          x="175" 
          y="75" 
          fill={inverted ? "white" : "#4ba3e3"} 
          style={{ font: "italic 44px 'Brush Script MT', 'Comic Sans MS', cursive" }}
        >
          plus
        </text>
      </svg>
    </div>
  );
};

export default Logo;
