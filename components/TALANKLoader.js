import React from "react";

const TALANKLoader = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "white",
      fontFamily: "'Inter', sans-serif",
      overflow: "hidden",
    }}>
      {/* Dot Wave Animation */}
      <div style={{
        display: "flex",
        gap: "12px",
        padding: "20px",
      }}>
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "black",
              animation: `wave 1.2s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes wave {
          0%, 60%, 100% { 
            transform: "translateY(0)";
            opacity: 1;
          }
          30% { 
            transform: "translateY(-20px)";
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default TALANKLoader;