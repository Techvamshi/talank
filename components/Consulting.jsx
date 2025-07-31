import React, { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useMediaQuery } from '@mui/material';

// Frames data from Modulus component
const frames = [
  {
    id: 1,
    title: "[D]ISCOVER",
    content: "Discuss current state, identify the core problem(s), opportunities, G-T-Ms, Inclination, Culture and Design Specific objectives(O&KR) framework",
    image: "/Frame 46.png",
    screImage: "/scre1.png",
    desktop: {
      opacity: '0.9',
      top: '12%',
      left: '10%',
      textLeft: '5px',
      textTop: '-13px',
      maxWidth: '190px',
      textAlign: 'center',
    },
    mobile: {
      opacity: '0.9',
      titlePosition: {
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center'
      },
      contentPosition: {
        top: '25%',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '250px',
        textAlign: 'center',
        padding: '0 10px'
      }
    }
  },
  {
    id: 2,
    title: "[D]EVELOP",
    content: "Configure the actual solution, Develop COE Plan, Next Gen Technology adaptation plan, Create Tech Stack, GTM plans, program plans",
    image: "/Frame 46 (1).png",
    screImage: "/scre2.png",
    desktop: {
      opacity: '0.9',
      top: '25%',
      left: '10%',
      textLeft: '0px',
      textTop: '-45px',
      maxWidth: '160px'
    },
    mobile: {
      opacity: '0.9',
      titlePosition: {
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center'
      },
      contentPosition: {
        top: '25%',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '250px',
        textAlign: 'center',
        padding: '0 10px'
      }
    }
  },
  {
    id: 3,
    title: "[D]IGITIZE",
    content: "Design, Digitize, analyze data, Plan Re-engineer process, conceptualize and blueprint the future state solution",
    image: "/Frame 46 (2).png",
    screImage: "/scre3.png",
    desktop: {
      opacity: '1',
      top: '20%',
      left: '10%',
      textLeft: '13px',
      textTop: '-33px',
      maxWidth: '140px'
    },
    mobile: {
      opacity: '1',
      titlePosition: {
        top: '12%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center'
      },
      contentPosition: {
        top: '22%',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '250px',
        textAlign: 'center',
        padding: '0 10px'
      }
    }
  },
  {
    id: 4,
    title: "[D]EPLOY",
    content: "Sign off and roll out the developed solution to the target users or organization, ensure adoption, and transition to ongoing operations and implement strategies",
    image: "/Frame 46 (3).png",
    screImage: "/scre4.png",
    desktop: {
      opacity: '1',
      top: '25%',
      left: '10%',
      textLeft: '15px',
      textTop: '-48px',
      maxWidth: '140px'
    },
    mobile: {
      opacity: '1',
      titlePosition: {
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center'
      },
      contentPosition: {
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '250px',
        textAlign: 'center',
        padding: '0 10px'
      }
    }
  },
  {
    id: 5,
    title: "[O]WN",
    content: "Own the business, Monitor & Measure the performance, efficiencies & Report KPIs Revenue, Growth and Cost",
    image: "/Frame 46 (4).png",
    screImage: "/scre5.png",
    desktop: {
      opacity: '1',
      top: '30%',
      left: '15%',
      textLeft: '1px',
      textTop: '-61px',
      maxWidth: '140px'
    },
    mobile: {
      opacity: '1',
      titlePosition: {
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center'
      },
      contentPosition: {
        top: '25%',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '250px',
        textAlign: 'center',
        padding: '0 10px'
      }
    }
  },
  {
    id: 6,
    title: "[T]RANSFER",
    content: "Start Transitioning the business and take feedback",
    image: "/Frame 46 (5).png",
    screImage: "/scre6.png",
    desktop: {
      opacity: '1',
      top: '35%',
      left: '5%',
      textLeft: '25px',
      textTop: '-75px',
      maxWidth: '140px'
    },
    mobile: {
      opacity: '1',
      titlePosition: {
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center'
      },
      contentPosition: {
        top: '25%',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '250px',
        textAlign: 'center',
        padding: '0 10px'
      }
    }
  }
];

function Consulting() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  // Auto-scroll functionality for mobile only
  useEffect(() => {
    if (!autoScroll || !isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev < frames.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, [autoScroll, isMobile]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setActiveIndex(prev => (prev < frames.length - 1 ? prev + 1 : prev));
      setAutoScroll(false);
      setTimeout(() => setAutoScroll(true), 10000);
    },
    onSwipedRight: () => {
      setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
      setAutoScroll(false);
      setTimeout(() => setAutoScroll(true), 10000);
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false
  });

  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  }, []);

  // Mobile version (EXACTLY from Modulus component)
  if (isMobile) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '20px', 
        overflow: 'hidden',
        touchAction: 'pan-y',
        maxWidth: '100vw'
      }}>
        <h1 style={{ 
          color: 'black', 
          fontSize: '18px', 
          marginBottom: '20px',
          userSelect: 'none'
        }}>
          How Does Talank as consultancy helps customer to overcome business challenges?
        </h1>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '20px',
          userSelect: 'none',
          gap: '10px',
          flexWrap: 'wrap'
        }}>
          {frames.map((frame, index) => (
            <img 
              key={index}
              src={frame.screImage} 
              alt=""
              style={{ 
                width: '40px',
                height: '45px',
                opacity: index === activeIndex ? 1 : 0.5,
                transition: 'opacity 0.3s ease',
                filter: index === activeIndex ? 'drop-shadow(0 0 5px rgba(143, 0, 0, 0.7))' : 'none'
              }}
            />
          ))}
        </div>

        <div style={{ 
          position: 'relative', 
          marginBottom: '20px',
          userSelect: 'none'
        }}>
          <img 
            src="/Rectangle 58.png" 
            alt="" 
            style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }} 
          />
          <p style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#8F0000',
            fontWeight: 'bold',
            fontSize: '14px',
            textAlign: 'center',
            width: '100%'
          }}>
            Modus Operandi [4DOT] Framework
          </p>
        </div>

        <div 
          {...handlers}
          style={{ 
            position: 'relative',
            width: '100%',
            maxWidth: '300px',
            margin: '0 auto',
            overflow: 'hidden',
            touchAction: 'pan-y',
            userSelect: 'none',
            height: '300px'
          }}
        >
          <div
            style={{
              display: 'flex',
              width: `${frames.length * 100}%`,
              transform: `translateX(-${activeIndex * (100 / frames.length)}%)`,
              transition: 'transform 0.3s ease',
              willChange: 'transform',
              height: '100%'
            }}
          >
            {frames.map((frame, index) => {
              const mobileConfig = frame.mobile;
              return (
                <div
                  key={frame.id}
                  style={{
                    width: `${100 / frames.length}%`,
                    padding: '0 10px',
                    boxSizing: 'border-box',
                    position: 'relative',
                    height: '100%'
                  }}
                >
                  <div style={{ 
                    position: 'relative',
                    width: '100%',
                    height: '100%'
                  }}>
                    <img 
                      src={frame.image} 
                      alt={frame.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        borderRadius: '8px',
                        opacity: mobileConfig.opacity,
                        boxSizing: 'border-box'
                      }} 
                    />
                    <h3 style={{
                      position: 'absolute',
                      margin: 0,
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: 'white',
                      textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                      ...mobileConfig.titlePosition
                    }}>
                      {frame.title}
                    </h3>
                    <p style={{
                      position: 'absolute',
                      margin: 0,
                      fontSize: '12px',
                      color: 'white',
                      textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                      ...mobileConfig.contentPosition
                    }}>
                      {frame.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          gap: '8px'
        }}>
          {frames.map((_, index) => (
            <div 
              key={index}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: index === activeIndex ? '#8F0000' : '#ccc',
                cursor: 'pointer'
              }}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Original desktop version (EXACTLY as in your original Consulting component)
  return (
    <div style={{ marginTop: '-8%' }}>
      <div style={{ padding: '20px', textAlign: 'center', color: 'black' }}>
        <h2 style={{ fontSize: '44px', fontWeight: 'bold', marginBottom: '5px' }}>
          How do we do?
        </h2>
        <h3 style={{ fontSize: '20px', color: '#555', marginBottom: '5px' }}>
          Our Modus Operandi
        </h3>
        <h4 style={{ fontSize: '18px', color: '#888' }}>
          [4-DOT] Framework
        </h4>
      </div>
      <img 
        src="/Screenshot 2025-07-28 at 1.25.44 PM.png" 
        alt="4-DOT Framework" 
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}

export default Consulting;