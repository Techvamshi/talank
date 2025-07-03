'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

/*──────────  MANUALLY PLACE EACH ELLIPSE  ──────────*/
const items = [
  { img: '/Ellipse 55.png', title: 'Business Transformation',         desc: 'Adapting to market changes and growth',                    top: 15, left: 20 },
  { img: '/Ellipse 56.png', title: 'BOOT Model',                      desc: 'Implements build‑operate‑own & transfer projects',          top: 35, left: 70 },
  { img: '/Ellipse 57.png', title: 'Regulatory Consulting',           desc: 'Navigating legal and compliance landscapes',               top: 60, left: 25 },
  { img: '/Ellipse 58.png', title: 'TQM / Compliance Consulting',     desc: 'Ensuring quality and regulatory adherence',                top: 25, left: 50 },
  { img: '/Ellipse 59.png', title: 'Business Re‑Engineering',         desc: 'Redesigning processes for efficiency',                     top: 55, left: 50 },
  { img: '/Ellipse 60.png', title: 'Management Consulting',           desc: 'Enhancing organizational efficiency and strategy',         top: 40, left: 15 },
  { img: '/Ellipse 61.png', title: 'Technology / IT Consulting',      desc: 'Integrating digital solutions and innovation',             top: 10, left: 75 },
  { img: '/Ellipse 62.png', title: 'Operations Consulting',           desc: 'Streamlining processes and productivity',                  top: 70, left: 70 },
  { img: '/Ellipse 63.png', title: 'Financial Advisory',              desc: 'Providing financial insights and planning',                top: 75, left: 40 },
  { img: '/Ellipse 64.png', title: 'GTM, Marketing & Sales Strategy', desc: 'Implement GTMs, boosting market presence and sales',       top: 30, left: 85 },
  { img: '/Ellipse 65.png', title: 'HR & Organization Consulting',    desc: 'Developing human capital and culture',                     top: 50, left: 85 },
];

export default function StrategicConsulting() {
  /* ────────── STATE & REFS ────────── */
  const [current, setCurrent] = useState(0);
  const cycleRef   = useRef(null);   // interval for auto‑tour
  const resumeRef  = useRef(null);   // timeout to resume tour

  const AUTO_DELAY    = 4000;  // 4 s between cards
  const RESUME_DELAY  = 6000;  // 6 s idle → resume tour

  /* ────────── TOUR CONTROL ────────── */
  const startAutoCycle = () => {
    stopAutoCycle();
    cycleRef.current = setInterval(
      () => setCurrent((p) => (p + 1) % items.length),
      AUTO_DELAY
    );
  };
  const stopAutoCycle = () => {
    if (cycleRef.current) clearInterval(cycleRef.current);
    cycleRef.current = null;
  };
  const scheduleResume = () => {
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(startAutoCycle, RESUME_DELAY);
  };

  /* mount/unmount */
  useEffect(() => {
    startAutoCycle();
    return () => {
      stopAutoCycle();
      if (resumeRef.current) clearTimeout(resumeRef.current);
    };
  }, []);

  /* click from ellipse or title */
  const handleSelect = (idx) => {
    stopAutoCycle();
    setCurrent(idx);
    scheduleResume();
  };

  /* ────────── RENDER ────────── */
  return (
    <>
      {/*══════════  CANVAS  ══════════*/}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '80vh',
          overflow: 'hidden',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {items.map((item, idx) => (
          <div
            key={item.title}
            style={{
              position: 'absolute',
              top: `${item.top}%`,
              left: `${item.left}%`,
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/*──────────  ELLIPSE  ──────────*/}
            <motion.div
              onClick={() => handleSelect(idx)}
              whileHover={{ scale: 1.12 }}
              style={{ position: 'relative', cursor: 'pointer', pointerEvents: 'auto' }}
            >
              {idx === current && (
                <motion.span
                  layoutId="ring"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: '3px solid #6A5CFF',
                    borderRadius: '50%',
                    boxShadow: '0 0 12px rgba(106,92,255,0.6)',
                    zIndex: 2,
                  }}
                />
              )}
              <Image
                src={item.img}
                alt={item.title}
                width={70}
                height={70}
                style={{ borderRadius: '50%' }}
                priority={idx === 0}
              />
            </motion.div>

            {/*──────────  INFO CARD  ──────────*/}
            <AnimatePresence>
              {idx === current && (
                <motion.div
                  key="card"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    position: 'absolute',
                    top: '110%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '320px',
                    maxWidth: '85vw',
                    background: '#fff',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '24px',
                    padding: '28px 30px',
                    boxShadow: '0 20px 48px rgba(0,0,0,0.18)',
                    textAlign: 'left',
                    zIndex: 9999,
                  }}
                >
                  {/* arrow */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '28px',
                      width: '24px',
                      height: '24px',
                      background: '#fff',
                      borderTop: '1px solid rgba(0,0,0,0.1)',
                      borderLeft: '1px solid rgba(0,0,0,0.1)',
                      transform: 'rotate(45deg)',
                      borderRadius: '3px',
                      boxShadow: '0 -4px 6px rgba(0,0,0,0.06)',
                      zIndex: -1,
                    }}
                  />
                  <h4
                    style={{
                      margin: '0 0 12px',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#6A5CFF',
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.55, color: '#2e2e2e' }}>
                    {item.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/*══════════  TITLE STRIP  ══════════*/}
      <div
        style={{
          width: '100%',
          background: '#111',
          color: '#fff',
          borderRadius: '0 0 20px 20px',
          padding: '28px 22px 36px',
          boxShadow: '0 -6px 18px rgba(0,0,0,0.35)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '22px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            onClick={() => handleSelect(idx)}
            whileHover={{ scale: 1.06 }}
            style={{
              cursor: 'pointer',
              fontSize: '15.5px',
              fontWeight: idx === current ? 700 : 500,
              opacity: idx === current ? 1 : 0.85,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              userSelect: 'none',
              padding: '9px 14px',
              background: idx === current ? 'rgba(255,255,255,0.1)' : 'transparent',
              borderRadius: '14px',
              transition: 'background 0.35s, opacity 0.35s',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: idx === current ? '#3BFFB2' : '#555',
              }}
            />
            {item.title}
          </motion.div>
        ))}
      </div>
    </>
  );
}
