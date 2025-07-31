import React, { useState, useEffect } from 'react';

function WhoWeAre() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkIfMobile = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        // Initial check
        checkIfMobile();
    
        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);
    
        
    
        
      }, []);
    
  return (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      marginBottom:isMobile ?'':'-8%',
      marginTop:isMobile ?'':'8%',
    }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#222',
        marginBottom: '20px'
      }}>
        Who we are?
      </h2>
      <p style={{
        fontSize:isMobile ?'12px':'18px',
        lineHeight: '1.6',
        color: '#444',

      }}>
        Talank Global is a tech lead management consulting firm, provides comprehensive 
        “Suite of Services (SoS)”, blending with Domain Expertise & NeXT-Gen technologies 
        designed to help businesses to build & grow in a dynamic market.
      </p>
    </div>
  );
}

export default WhoWeAre;
