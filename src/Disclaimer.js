import React, { useState, useEffect } from 'react';

function Disclaimer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerStyle = {
    padding: '20px 25px',
    background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(255, 0, 0, 0.1) 100%)',
    border: '2px solid rgba(255, 107, 107, 0.5)',
    borderRadius: '12px',
    textAlign: 'center',
    color: '#ffffff',
    margin: '20px 0',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(255, 107, 107, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
  };

  const glowStyle = {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(255, 107, 107, 0.15) 0%, transparent 70%)',
    animation: 'pulse 4s ease-in-out infinite',
    pointerEvents: 'none'
  };

  const iconStyle = {
    display: 'inline-block',
    width: '24px',
    height: '24px',
    marginRight: '10px',
    verticalAlign: 'middle',
    animation: 'bounce 2s ease-in-out infinite'
  };

  const titleStyle = {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#ff6b6b',
    textShadow: '0 2px 10px rgba(255, 107, 107, 0.5)',
    letterSpacing: '1px',
    marginBottom: '8px',
    position: 'relative',
    zIndex: 1
  };

  const textStyle = {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#e8f1f5',
    position: 'relative',
    zIndex: 1,
    fontWeight: '500'
  };

  const shimmerStyle = {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
    animation: 'shimmer 3s ease-in-out infinite',
    pointerEvents: 'none'
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { 
              transform: scale(1); 
              opacity: 0.3; 
            }
            50% { 
              transform: scale(1.05); 
              opacity: 0.5; 
            }
          }

          @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
          }

          @keyframes bounce {
            0%, 100% { 
              transform: translateY(0) rotate(0deg); 
            }
            25% { 
              transform: translateY(-5px) rotate(-5deg); 
            }
            75% { 
              transform: translateY(-3px) rotate(5deg); 
            }
          }

          @keyframes borderGlow {
            0%, 100% { 
              border-color: rgba(255, 107, 107, 0.5);
              box-shadow: 0 8px 24px rgba(255, 107, 107, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
            }
            50% { 
              border-color: rgba(255, 107, 107, 0.8);
              box-shadow: 0 8px 32px rgba(255, 107, 107, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15);
            }
          }
        `}
      </style>
      <div style={{
        ...containerStyle,
        animation: `${containerStyle.animation || ''}, borderGlow 3s ease-in-out infinite`
      }}>
        <div style={glowStyle}></div>
        <div style={shimmerStyle}></div>
        
        <div style={titleStyle}>
          <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" stroke="#ff6b6b"/>
            <line x1="12" y1="8" x2="12" y2="12" stroke="#ff6b6b" strokeLinecap="round"/>
            <circle cx="12" cy="16" r="0.5" fill="#ff6b6b"/>
          </svg>
          MEDICAL DISCLAIMER
        </div>
        
        <div style={textStyle}>
          This website is for <strong>informational purposes only</strong> and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified health provider with any questions you may have regarding a medical condition.
        </div>
      </div>
    </>
  );
}

export default Disclaimer;