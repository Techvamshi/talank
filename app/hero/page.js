'use client';
import HeroSection from '@/components/Ani';
import AutoPlayAudio from '@/components/Voice';
import React, { useEffect, useState, useRef } from 'react';

function Page() {
  const [currentAction, setCurrentAction] = useState('idle');
  const splineRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.16/build/spline-viewer.js';
    script.async = true;
    document.body.appendChild(script);

    // Animation sequence
    const animationTimeline = [
      { action: 'wave', delay: 0 },
      { action: 'talk', delay: 1500 },
      { action: 'point', delay: 3500 },
      { action: 'nod', delay: 6000 },
    ];

    const timers = animationTimeline.map(({ action, delay }) =>
      setTimeout(() => {
        setCurrentAction(action);
        if (splineRef.current) {
          splineRef.current.setAttribute(`animation-${action}`, 'true');
        }
      }, delay)
    );

    return () => {
      document.body.removeChild(script);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <div style={{
        width: '100vw',
        overflowX: 'hidden',
        backgroundColor: '#fff',
      }}>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '0 6rem',
          gap: '2rem',
          boxSizing: 'border-box',
          marginLeft: 'auto',
          maxWidth: 'calc(100vw - 100px)',
        }}>
          {/* Text / Animation Section */}
          <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
            <HeroSection currentAction={currentAction} />
          </div>

          {/* Spline Viewer Section */}
          <div style={{
            width: '100%',
            maxWidth: '700px',
            height: '700px',
            position: 'relative',
          }}>
            <spline-viewer
              ref={splineRef}
              url="https://prod.spline.design/XRsCmH5Zw52QRs3m/scene.splinecode"
              events-target="global"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                backgroundColor: '#fff',
              }}
            ></spline-viewer>

            {/* Card image positioned over the spline */}
            <img 
              src="/Card screens.png" 
              alt="Card screens" 
              style={{
                position: 'absolute',
                top: '33%',
                left: '82%',
                transform: 'translate(-50%, -50%)',
                width: '350px',
                height: '350px',
                zIndex: 10,
                pointerEvents: 'none',
              }}
            />

            {/* Fixed floating white box */}
            <div style={{
              position: 'fixed',
              top: '95%',
              left: '87%',
              transform: 'translate(-50%, -50%)',
              width: '150px',
              height: '50px',
              background: 'white',
              zIndex: 11,
              pointerEvents: 'none',
            }}></div>

            {/* Speech Bubble when talking */}
            {currentAction === 'talk' && (
              <div style={{
                position: 'absolute',
                top: '100px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                maxWidth: '300px',
                opacity: 0,
                animation: 'fadeIn 0.5s forwards',
                zIndex: 20,
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '20%',
                  width: '0',
                  height: '0',
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderTop: '10px solid white',
                }}></div>
                <p style={{ margin: 0, color: 'black' }}>Let me explain our services...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <AutoPlayAudio />

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </>
  );
}

export default Page;
