'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Content components ───────────────────────────────────────────
import StrategicConsulting   from '@/components/StrategicConsulting';
import IdeateX               from '@/components/IdeateX';
import HiTechSolutions       from '@/components/HiTechSolutions';
import LearningDevelopment   from '@/components/LearningDevelopment';

// ─── Mapping of ID → label / component ─────────────────────────────
const offerings = {
  strategic: { label: 'Strategic Consulting',      Component: StrategicConsulting },
  ideatex:   { label: 'ideateX',                   Component: IdeateX },
  hitech:    { label: 'Hi Tech Solutions',         Component: HiTechSolutions },
  learning:  { label: 'Learning and Development',  Component: LearningDevelopment },
};

// ─── Initial absolute positions for rectangles ─────────────────────
const initialPositions = {
  ideatex:   { top: '11%',  left: '35%' },
  hitech:    { top: '65%',  right: '55%' },
  learning:  { bottom: '30%', left: '55%' },
  strategic: { top: '118%', right: '42%' },
};

export default function OfferingSection() {
  const [active, setActive] = useState('strategic');
  const [positions, setPositions] = useState(initialPositions);

  // swap rectangle positions
  const handleClick = (id) => {
    if (id === active) return;
    setPositions((prev) => {
      const next = { ...prev };
      [next[id], next[active]] = [prev[active], prev[id]];
      return next;
    });
    setActive(id);
  };

  return (
    <>
      <p style={{
        color:'blue',
        fontWeight:'bold',
        fontSize:'30px',
        textAlign:'center',
      }}>Our Domains & Solutions</p>
      {/* ─── Ellipse background + Blub overlay + rectangles ───────── */}
      <section className="relative flex items-center justify-center py-24" style={{ marginTop: '10px' }}>
        {/* Background ellipse (always visible) */}
        <Image
          src="/Ellipse_.png"
          alt=""
          fill
          className="object-contain scale-[1.5] -z-10 select-none pointer-events-none"
          style={{ marginTop: '35px' }}
          priority   // keep it loaded eagerly
        />

        {/* Blub overlay (sits on top of the ellipse) */}
        <Image
          src="/blub.png"
          alt="Decorative blub"
          width={200}            // adjust size as needed
          height={200}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
        />

        {/* ─── Animated rectangles ─────────────────────────────── */}
        {Object.keys(offerings).map((key) => (
          <motion.div
            key={key}
            className="absolute"
            animate={positions[key]}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Rect
              label={offerings[key].label}
              active={active === key}
              onClick={() => handleClick(key)}
            />
          </motion.div>
        ))}
      </section>

      {/* ─── Swapping content area ─────────────────────────────── */}
      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-full"
            style={{ perspective: 1000 }}
          >
            {React.createElement(offerings[active].Component)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── Bottom spacer ─────────────────────────────────────── */}
      <div style={{ width: '100%', height: '200px' }} />
    </>
  );
}

/* ───────────────────────── Rectangle UI component ───────────────── */
function Rect({ label, onClick, active }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md px-6 py-3 w-fit text-center cursor-pointer
                  transition-transform duration-300 hover:scale-105 ${
                    active ? 'ring-2 ring-[#8f0000]/70' : ''
                  }`}
      onClick={onClick}
    >
      <p className="font-montserrat font-extrabold italic text-[#8f0000] text-sm sm:text-base whitespace-pre-line">
        {label}
      </p>
    </div>
  );
}
