'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';

// Frames data with separate desktop and mobile configurations
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
  // ... (keep all other frame objects exactly as they were)
];

function Modulus() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsMac(width > 768 && width <= 1440);
      setIsLargeScreen(width > 1440);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Mobile version - EXACTLY your original UI (unchanged)
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

  // Desktop version with your preferred ternary format
  return (
    <>
      <div style={{
        textAlign: 'center',
        position: 'relative',
        marginTop: isLargeScreen
          ? '50px'
          : isMac
          ? '40px'
          : '30px'
      }}>
        <p style={{
          color: 'black',
          fontSize: isLargeScreen
            ? '40px'
            : isMac
            ? '33px'
            : '28px',
          textAlign: 'center',
          marginBottom: isLargeScreen
            ? '30px'
            : isMac
            ? '25px'
            : '20px'
        }}>
          How Does Talank as consultancy helps customer to overcome business challenges?
        </p>

        {/* Screen images with ternary positioning */}
        {frames.map((frame, index) => {
  // Calculate individual positions for each image
  const positions = [
    { // First image
      marginLeft: isLargeScreen ? '230px' : isMac ? '178px' : '150px'
    },
    { // Second image
      marginLeft: isLargeScreen ? '512px' : isMac ? '392px' : '350px'
    },
    { // Third image
      marginLeft: isLargeScreen ? '758px' : isMac ? '578px' : '550px',
      marginTop: isLargeScreen ? '23px' : isMac ? '' : ''
    },
    { // Fourth image
      marginLeft: isLargeScreen ? '1000px' : isMac ? '778px' : '750px',
      marginTop: isLargeScreen ? '43px' : isMac ? '' : ''
    },
    { // Fifth image
      marginLeft: isLargeScreen ? '1248px' : isMac ? '978px' : '950px',
      marginTop: isLargeScreen ? '53px' : isMac ? '' : ''
    },
    { // Sixth image
      marginLeft: isLargeScreen ? '1517px' : isMac ? '1187px' : '1150px',
      marginTop: isLargeScreen ? '53px' : isMac ? '' : ''
    }
  ];

  return (
    <img 
      key={index}
      src={frame.screImage} 
      alt=""
      style={{
        position: 'absolute',
        width: isLargeScreen
          ? '85px'
          : isMac
          ? '75px'
          : '65px',
        height: isLargeScreen
          ? '95px'
          : isMac
          ? '85px'
          : '75px',
        top: isLargeScreen
          ? '300px'
          : isMac
          ? '285px'
          : '270px',
        marginLeft: positions[index].marginLeft,
        marginTop: positions[index].marginTop, // Add this line
        zIndex: 10
      }}
    />
  );
})}

        <div style={{ 
          position: 'relative', 
          display: 'inline-block', 
          marginTop: isLargeScreen
            ? '-80px'
            : isMac
            ? '-70px'
            : '-60px'
        }}>
          <img src="/Rectangle 58.png" alt="" style={{ 
            display: 'block', 
            width: isLargeScreen
              ? '110%'
              : isMac
              ? '100%'
              : '90%'
          }} />
          <p style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#8F0000',
            fontWeight: 'bold',
            fontSize: isLargeScreen
              ? '24px'
              : isMac
              ? '18px'
              : '16px',
            textAlign: 'center'
          }}>
            Modus Operandi [4DOT] Framework
          </p>
        </div>
      </div>

      <div style={{ 
        marginLeft: isLargeScreen
          ? '210px'
          : isMac
          ? '80px'
          : '60px',
        marginRight: 'auto',
        marginTop: isLargeScreen
          ? ''
          : isMac
          ? '-25px'
          : '60px',
        marginBottom: '0'
      }}>
        <div style={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          padding: isLargeScreen
            ? '15px 0'
            : isMac
            ? '12px 0'
            : '10px 0',
          marginLeft: isLargeScreen
            ? '100px'
            : isMac
            ? '65px'
            : '50px',
          marginRight: 'auto'
        }}>
          <div style={{ 
            width: isLargeScreen
              ? '30%'
              : isMac
              ? '28%'
              : '26%',
            textAlign: 'center', 
            transform: 'translateY(0px)',
            marginRight: isLargeScreen
              ? '-20px'
              : isMac
              ? '30px'
              : '20px',
              marginTop: isLargeScreen
              ? '-40px'
              : isMac
              ? ''
              : '',
              marginLeft: isLargeScreen
              ? '-130px'
              : isMac
              ? ''
              : '',
          }}>
            <img src="/Group 940.png" alt="" style={{ 
              width: '100%', 
              height: 'auto', 
              objectFit: 'contain' 
            }} />
          </div>
          <div style={{ 
            width: isLargeScreen
              ? '30%'
              : isMac
              ? '28%'
              : '26%',
            textAlign: 'center',
            transform: isLargeScreen
              ? 'translateY(15px) translateX(-200px)'
              : isMac
              ? 'translateY(10px) translateX(-187px)'
              : 'translateY(8px) translateX(-175px)',
            marginLeft: isLargeScreen
              ? '-50px'
              : isMac
              ? '-40px'
              : '-30px',
              marginTop: isLargeScreen
              ? '-30px'
              : isMac
              ? ''
              : '',
          }}>
            <img src="/Group 942.png" alt="" style={{ 
              width: isLargeScreen
                ? '600px'
                : isMac
                ? '550px'
                : '500px', 
              height: 'auto', 
              objectFit: 'contain' 
            }} />
          </div>
          <div style={{ 
            width: isLargeScreen
              ? '30%'
              : isMac
              ? '28%'
              : '26%',
            textAlign: 'center', 
            transform: isLargeScreen
              ? 'translateY(-5px) translateX(-390px)'
              : isMac
              ? 'translateY(-5px) translateX(-365px)'
              : 'translateY(-5px) translateX(-340px)',
            marginRight: isLargeScreen
              ? '50px'
              : isMac
              ? '30px'
              : '30px',
              marginLeft: isLargeScreen
              ? '-50px'
              : isMac
              ? ''
              : '',
          }}>
            <img src="/Group 943.png" alt="" style={{ 
              width: '100%', 
              height: 'auto', 
              objectFit: 'contain', 
              transform: 'translateX(-10px)' 
            }} />
          </div>
        </div>
        
        <div style={{ 
          width: isLargeScreen
            ? '30%'
            : isMac
            ? '28%'
            : '26%', 
          textAlign: 'center', 
          transform: 'translateY(-10px) translateX(-10px)', 
          marginTop: isLargeScreen
            ? '-173px'
            : isMac
            ? '-163px'
            : '-153px', 
          marginLeft: isLargeScreen
            ? '761px'
            : isMac
            ? '661px'
            : '601px',
          marginRight: 'auto',
          marginLeft: isLargeScreen
              ? '710px'
              : isMac
              ? '650px'
              : '',
        }}>
          <img src="/Group 944.png" alt="" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </div>
        
        <div style={{ 
          width: isLargeScreen
            ? '30%'
            : isMac
            ? '28%'
            : '26%', 
          textAlign: 'center', 
          transform: 'translateY(0px)', 
          marginTop: isLargeScreen
            ? '-195px'
            : isMac
            ? '-160px'
            : '-130px', 
          marginLeft: isLargeScreen
            ? '940px'
            : isMac
            ? '840px'
            : '740px',
          marginRight: 'auto'
        }}>
          <img src="/Group 945.png" alt="" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        
        marginLeft: isLargeScreen
          ? '150px'
          : isMac
          ? '100px'
          : '80px',
        marginRight: 'auto',
        marginTop: isLargeScreen
          ? '60px'
          : isMac
          ? '50px'
          : '40px',
        marginBottom: '0',
        gap: isLargeScreen
          ? '0px'
          : isMac
          ? '0px'
          : '20px',
        maxWidth: isLargeScreen
          ? '1650px'
          : isMac
          ? '1400px'
          : '1200px'
      }}>
        {frames.map((frame) => (
          <div key={frame.id} style={{ 
            position: 'relative', 
            width: isLargeScreen
              ? '260px'
              : isMac
              ? '200px'
              : '180px',
            marginRight: isLargeScreen
              ? '30px'
              : isMac
              ? '20px'
              : '15px'
          }}>
            <img 
              src={frame.image} 
              alt={frame.title} 
              style={{ 
                width: isLargeScreen
                  ? '280px'
                  : isMac
                  ? '250px'
                  : '230px',
                height: 'auto', 
                borderRadius: '8px', 
                opacity: frame.desktop.opacity 
              }} 
            />
            <div style={{
              position: 'absolute',
              top: isLargeScreen
                ? '15%'
                : isMac
                ? frame.desktop.top
                : '12%',
              left: isLargeScreen
                ? '15%'
                : isMac
                ? frame.desktop.left
                : '10%',
              color: 'white',
              textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
              width: '80%'
            }}>
              <h3 style={{
                margin: 0,
                fontSize: isLargeScreen
                  ? '22px'
                  : isMac
                  ? '18px'
                  : '16px',
                fontWeight: 'bold',
                textAlign: 'center',
                marginLeft: isLargeScreen
                  ? '-8px'
                  : isMac
                  ? frame.desktop.textLeft
                  : '5px',
                marginTop: isLargeScreen
                  ? '-22px'
                  : isMac
                  ? frame.desktop.textTop
                  : '-10px'
              }}>
                {frame.title}
              </h3>
              <p style={{
                marginTop: isLargeScreen
                  ? '25px'
                  : isMac
                  ? '20px'
                  : '15px',
                fontSize: isLargeScreen
                  ? '16px'
                  : isMac
                  ? '13px'
                  : '12px',
                maxWidth: isLargeScreen
                  ? '200px'
                  : isMac
                  ? frame.desktop.maxWidth
                  : '160px',
                marginLeft: isLargeScreen
                  ? '-10px'
                  : isMac
                  ? frame.desktop.textLeft
                  : '5px',
                textAlign: 'center',
                color: 'white',
              }}>
                {frame.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Modulus;