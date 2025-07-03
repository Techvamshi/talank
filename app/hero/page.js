'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';           // ✅ use next/image
import HeroSection   from '@/components/Ani';
import AutoPlayAudio from '@/components/Voice';

export default function Page() {
  const [currentAction, setCurrentAction] = useState('idle');
  const splineRef = useRef(null);

  /* ─────────── Load Spline viewer once ─────────── */
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src =
      'https://unpkg.com/@splinetool/viewer@1.10.16/build/spline-viewer.js';
    script.async = true;
    document.body.appendChild(script);

    /* Animation sequence */
    const animationTimeline = [
      { action: 'wave',  delay:   0 },
      { action: 'talk',  delay: 1500 },
      { action: 'point', delay: 3500 },
      { action: 'nod',   delay: 6000 },
    ];

    const timers = animationTimeline.map(({ action, delay }) =>
      setTimeout(() => {
        setCurrentAction(action);
        splineRef.current?.setAttribute(`animation-${action}`, 'true');
      }, delay)
    );

    return () => {
      document.body.removeChild(script);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <div style={{ width: '100vw', overflowX: 'hidden', background: '#fff' }}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '0 6rem',
            gap: '2rem',
            boxSizing: 'border-box',
            marginLeft: 'auto',
            maxWidth: 'calc(100vw - 100px)',
          }}
        >
          {/* Text / Animation */}
          <div style={{ flex: '1 1 400px', maxWidth: 600 }}>
            <HeroSection currentAction={currentAction} />
          </div>

          {/* 3‑D Spline viewer */}
          <div style={{ position: 'relative', width: '100%', maxWidth: 700, height: 700 }}>
            <spline-viewer
              ref={splineRef}
              url="https://prod.spline.design/XRsCmH5Zw52QRs3m/scene.splinecode"
              events-target="global"
              style={{ width: '100%', height: '100%', border: 'none', background: '#fff' }}
            />

            {/* Card overlay image (next/image removes LCP warning) */}
            <Image
              src="/Card screens.png"     // rename to /card-screens.png if you change the file name
              alt="Card screens"
              width={350}
              height={350}
              priority
              style={{
                position: 'absolute',
                top: '33%',
                left: '82%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                pointerEvents: 'none',
              }}
            />

            {/* Floating white box */}
            <div
              style={{
                position: 'fixed',
                top: '95%',
                left: '87%',
                transform: 'translate(-50%, -50%)',
                width: 150,
                height: 50,
                background: '#fff',
                zIndex: 11,
                pointerEvents: 'none',
              }}
            />

            {/* Speech bubble appears while “talk” animation plays */}
            {currentAction === 'talk' && (
              <div
                style={{
                  position: 'absolute',
                  top: 100,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#fff',
                  padding: '1rem',
                  borderRadius: 12,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  maxWidth: 300,
                  opacity: 0,
                  animation: 'fadeIn 0.5s forwards',
                  zIndex: 20,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: '20%',
                    width: 0,
                    height: 0,
                    borderLeft:  '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderTop:   '10px solid #fff',
                  }}
                />
                <p style={{ margin: 0, color: '#000' }}>
                  Let me explain our services...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <AutoPlayAudio />

      {/* fade‑in keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0);  }
        }
      `}</style>
    </>
  );
}
