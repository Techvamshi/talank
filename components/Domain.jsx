'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import StrategicConsulting from '@/components/StrategicConsulting';
import IdeateX from '@/components/IdeateX';
import HiTechSolutions from '@/components/HiTechSolutions';
import LearningDevelopment from '@/components/LearningDevelopment';

const offerings = {
  strategic: { label: 'Strategic Consulting', Component: StrategicConsulting },
  ideatex: { label: 'ideateX', Component: IdeateX },
  hitech: { label: 'Hi Tech Solutions', Component: HiTechSolutions },
  learning: { label: 'Learning and Development', Component: LearningDevelopment },
};

const desktopPositions = {
  ideatex: { position: 'absolute', top: '5px', left: '36%' },
  hitech: { position: 'absolute', top: '45%', right: '55%' },
  learning: { position: 'absolute', bottom: '42%', left: '55%' },
  strategic: { position: 'absolute', top: '88%', right: '42%' },
};

const mobilePositions = {
  ideatex: { position: 'absolute', top: '10%', left: '10%' },
  hitech: { position: 'absolute', top: '25%', right: '10%' },
  learning: { position: 'absolute', bottom: '25%', left: '0%' },
  strategic: { position: 'absolute', top: '170px', right: '33%' },
};

export default function OfferingSection() {
  const [active, setActive] = useState('strategic');
  const [positions, setPositions] = useState(desktopPositions);
  const [isMobile, setIsMobile] = useState(false);

  // Auto-switch between tabs
  useEffect(() => {
    const updatePositions = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setPositions(mobile ? mobilePositions : desktopPositions);
    };
    updatePositions();
    window.addEventListener('resize', updatePositions);

    const interval = setInterval(() => {
      const keys = Object.keys(offerings);
      const currentIndex = keys.indexOf(active);
      const nextIndex = (currentIndex + 1) % keys.length;
      setActive(keys[nextIndex]);
    }, 3000); // Switch every 3 seconds

    return () => {
      window.removeEventListener('resize', updatePositions);
      clearInterval(interval);
    };
  }, [active]);

  const handleClick = useCallback((id) => {
    if (id === active) return;
    setActive(id);
  }, [active]);

  // Animation presets per tab
  const paneVariants = {
    strategic: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 50 } },
    ideatex: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 50 } },
    hitech: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 } },
    learning: { initial: { opacity: 0, rotateY: 90 }, animate: { opacity: 1, rotateY: 0 }, exit: { opacity: 0, rotateY: -90 } },
  };

  const ActiveComponent = offerings[active].Component;
  const { initial, animate, exit } = paneVariants[active];

  return (
    <>
      <p
        style={{
          color: 'blue',
          fontWeight: 'bold',
          fontSize: isMobile ? '22px' : '30px',
          textAlign: 'center',
          marginBottom: '30px',
          marginTop: isMobile ? '-20px' : '',
        }}
      >
        Our Domains &amp; Solutions
      </p>

      {/* --- Selector / Blub Section --- */}
      <section
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: isMobile ? '80px' : '96px',
          paddingBottom: isMobile ? (active === 'strategic' ? '120px' : '95px') : '96px',
          marginTop: '10px',
          zIndex: '1',
        }}
      >
        {/* Ellipse background */}
        <Image
          src="/Ellipse_.png"
          alt="Background ellipse"
          fill
          className="select-none pointer-events-none"
          style={{
            objectFit: 'contain',
            transform: isMobile ? 'scale(1)' : 'scale(1.3)',
            zIndex: -10,
            marginTop: isMobile ? '0px' : '0px',
            pointerEvents: 'none',
          }}
          priority
        />

        {/* Blub Image */}
        <Image
          src="/blub.png"
          alt="Decorative blub"
          width={isMobile ? 200 : 230}
          height={isMobile ? 200 : 230}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            marginTop: isMobile ? '0px' : '-20px',
          }}
        />

        {/* Rectangular tab buttons */}
        {Object.keys(offerings).map((key) => (
          <motion.div
            key={key}
            animate={isMobile ? {} : positions[key]}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={isMobile ? mobilePositions[key] : {}}
            className="relative z-20"
          >
            <div
              onClick={() => handleClick(key)}
              className="pointer-events-auto"
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                padding: isMobile ? '6px 10px' : '10px 20px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s, border 0.3s',
                transform: active === key ? 'scale(1.05)' : 'scale(1)',
                border: active === key ? '2px solid rgba(143, 0, 0, 0.7)' : 'none',
                fontFamily: 'Montserrat, sans-serif',
                minWidth: isMobile ? '100px' : undefined,
              }}
            >
              <p
                style={{
                  fontWeight: '800',
                  fontStyle: 'italic',
                  color: '#8f0000',
                  fontSize: isMobile ? '10px' : '16px',
                  whiteSpace: 'pre-line',
                }}
              >
                {offerings[key].label}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* --- Animated Content Pane --- */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          marginTop: isMobile ? (active === 'strategic' ? '-210px' : '16px') : '48px',
          marginBottom: isMobile ? (active === 'strategic' ? '-400px' : '16px') : '48px',
          paddingInline: isMobile ? '16px' : '24px',
          position: 'relative',
          backgroundColor: 'white',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}