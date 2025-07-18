'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TalankHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false); // For very large screens
  const [isLargeScreensmac, setIsLargeScreensmac] = useState(false); // For Mac size screens

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth; // ✅ Fix: define width
      setIsMobile(width < 768);
      setIsLargeScreen(width >= 1450); // Large screen check
      setIsLargeScreensmac(width >= 1024 && width < 1445); // ✅ Mac screens check
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  return (
    <div style={{ marginTop: '70px', position: 'relative', paddingBottom: isMobile ? '60px' : '0' }}>
      
      {/* Hero Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          paddingLeft: '16px',
          paddingRight: '16px',
          marginRight: 0
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingLeft: '16px',
            paddingRight: '16px',
            textAlign: 'center'
          }}
          variants={itemVariants}
        >
          <h1 style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: isMobile ? '28px' : '38px',
            fontWeight: 'bold',
            lineHeight: 1.25,
            color: '#0F172A',
            margin: 0,
            padding: 0
          }}>
            Revolutionizing Your Business with Cutting<br />
            Edge IT Solutions
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 400,
            lineHeight: 1.75,
            textAlign: 'center',
            color: '#0F172A',
            marginTop: '16px',
            maxWidth: isMobile ? '100%' : '56rem'
          }}
          variants={itemVariants}
        >
          Our solutions are designed to optimize operations, elevate customer experiences,
          and future-proof your business.
        </motion.p>

        {/* Consult Us Button */}
        <motion.button
  onClick={() => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  style={{
    backgroundColor: '#022947',
    color: 'white',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: isMobile ? '18px' : '24px',
    fontWeight: 500,
    padding: '12px 24px',
    borderRadius: '9999px',
    cursor: 'pointer',
    border: 'none',
    width: isMobile ? '160px' : '180px'
  }}
  variants={buttonVariants}
  whileHover="hover"
  whileTap="tap"
>
  Consult Us
</motion.button>

      </motion.div>

      {/* Desktop View Designs */}
      {!isMobile && (
        <>
          {/* Left Design */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <img
              src="leftdesign.svg"
              alt="Left Design"
              style={{
                marginLeft: isLargeScreen ? '880px' : isLargeScreensmac ? '630px' : '640px',
                transform: 'scale(0.7)',
                marginTop: '-100px'
              }}
            />
          </motion.div>

          {/* Right Design */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.8 }}>
            <img
              src="rightdesign.svg"
              alt="Right Design"
              style={{
                marginLeft: isLargeScreen
                ? '210px'           // for very large screens ≥1440px
                : isLargeScreensmac
                ? '20px'          // for Mac screens (1024px–1439px)
                : '-40px'        ,   // for normal desktop,

                marginTop: '-890px',
                transform: 'scale(0.85)'
              }}
            />
          </motion.div>

          {/* Hero Part */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}>
            <img
              src="heropart.png"
              alt="Hero"
              style={{
                marginLeft: isLargeScreen ? '280px' : isLargeScreensmac ? '50px' : '40px',
                marginTop: '-900px',
                transform: 'scale(0.8)'
              }}
            />
          </motion.div>
        </>
      )}

      {/* Mobile View Designs */}
      {isMobile && (
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', width: '100%' }}>
          <motion.div style={{ position: 'absolute', right: '400px', top: '0%', zIndex: 1 }} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
            <img src="rightdesign.svg" alt="Right Design" style={{ width: '160px', opacity: 0.8 }} />
          </motion.div>
          <motion.img src="leftdesign.svg" alt="Left Design" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }} style={{ width: '180px', alignSelf: 'flex-end', marginRight: '20px', marginBottom: '-40px' }} />
          <motion.div style={{ position: 'relative', zIndex: 3, display: 'flex', justifyContent: 'center' }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <img src="heropart.png" alt="Mobile Hero" style={{ width: '80%', maxWidth: '400px', marginTop: '-200px' }} />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default TalankHomepage;
