'use client';
import React from 'react';

const StylishButton = () => {
  return (
    <button
      style={{
        position: 'relative',
        padding: '16px 40px',
        fontSize: '22px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '4px',
        color: '#fff',
        border: '2px solid transparent',
        borderRadius: '50px',
        cursor: 'pointer',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)', // Glass effect
        boxShadow: '0 0 15px rgba(37, 117, 252, 0.6)',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        zIndex: 1,
      }}
      onMouseOver={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.boxShadow = '0 0 40px rgba(106, 17, 203, 0.9), 0 0 80px rgba(37, 117, 252, 0.8)';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 0 15px rgba(37, 117, 252, 0.6)';
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'conic-gradient(from 180deg, #6a11cb, #2575fc, #ff512f, #dd2476, #6a11cb)',
          animation: 'spin 3s linear infinite',
          zIndex: -1,
        }}
      ></span>
      IQLIMS
    </button>
  );
};

// Add keyframes dynamically
if (typeof document !== 'undefined') {
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, styleSheet.cssRules.length);
}

export default StylishButton;
