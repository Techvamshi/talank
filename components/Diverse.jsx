'use client'
import React, { useState, useEffect } from 'react';

function Diverse() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only run on client side
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = [
    {
      src: '/Rectangle 32.png',
      desktopMt: '0px',
      desktopMl: '30px',
      mobileMt: '0px',
      mobileMl: '15px',
      title: 'Medi/Health Tech',
      desc: 'Focuses on technological advancements in medicine',
      logoStyle: {
        width: '80px',
        height: '120px',
        margin: '2px auto',
        borderRadius: '8px',
      },
      mobileLogoStyle: {
        width: '60px',
        height: '90px',
        margin: '2px auto',
        borderRadius: '8px',
      }
    },
    {
      src: '/Rectangle 34.png',
      desktopMt: '210px',
      desktopMl: '-50px',
      mobileMt: '30px',
      mobileMl: '0px',
      title: 'Pharma',
      desc: 'Concerned with the research, development, and manufacture of drugs',
      logoStyle: {
        width: '60px',
        height: '80px',
        marginBottom: '8px',
        borderRadius: '8px',
        marginLeft: '30px',
      },
      mobileLogoStyle: {
        width: '50px',
        height: '70px',
        marginBottom: '8px',
        borderRadius: '8px',
        marginLeft: '15px',
      }
    },
    {
      src: '/Rectangle 33.png',
      desktopMt: '0px',
      desktopMl: '-60px',
      mobileMt: '0px',
      mobileMl: '0px',
      title: 'Clinical Trials',
      desc: 'Research studies to evaluate new medical interventions',
      logoStyle: {
        width: '90px',
        height: '120px',
        margin: '8px auto',
        borderRadius: '8px',
      },
      mobileLogoStyle: {
        width: '70px',
        height: '100px',
        margin: '8px auto',
        borderRadius: '8px',
      }
    },
    {
      src: '/Rectangle 35.png',
      desktopMt: '210px',
      desktopMl: '-50px',
      mobileMt: '30px',
      mobileMl: '0px',
      title: 'Lifesciences',
      desc: 'Encompasses the study of living organisms and life processes',
      logoStyle: {
        width: '80px',
        height: '80px',
        margin: '0 0 8px 0',
        borderRadius: '8px',
        marginLeft: '30px',
      },
      mobileLogoStyle: {
        width: '60px',
        height: '60px',
        margin: '0 0 8px 0',
        borderRadius: '8px',
        marginLeft: '15px',
      }
    },
    {
      src: '/Rectangle 36.png',
      desktopMt: '0px',
      desktopMl: '-60px',
      mobileMt: '0px',
      mobileMl: '0px',
      title: 'EdTech',
      desc: 'Focuses on growth and training in healthcare',
      logoStyle: {
        width: '90px',
        height: '120px',
        marginBottom: '8px',
        borderRadius: '8px',
        marginLeft: '30px',
        marginTop: '15px',
      },
      mobileLogoStyle: {
        width: '70px',
        height: '100px',
        marginBottom: '8px',
        borderRadius: '8px',
        marginLeft: '15px',
        marginTop: '10px',
      }
    },
    {
      src: '/Rectangle 38.png',
      desktopMt: '210px',
      desktopMl: '-50px',
      mobileMt: '30px',
      mobileMl: '0px',
      title: 'Medical Diagnostics',
      desc: 'Deals with identifying diseases and medical conditions',
      logoStyle: {
        width: '90px',
        height: '100px',
        margin: '8px auto',
        borderRadius: '8px',
      },
      mobileLogoStyle: {
        width: '70px',
        height: '80px',
        margin: '8px auto',
        borderRadius: '8px',
      }
    },
    {
      src: '/Rectangle 37.png',
      desktopMt: '0px',
      desktopMl: '-60px',
      mobileMt: '0px',
      mobileMl: '0px',
      title: 'FMCG',
      desc: 'Fast-moving consumer goods related to health and wellness',
      logoStyle: {
        width: '90px',
        height: '120px',
        marginBottom: '8px',
        borderRadius: '8px',
        marginLeft: '20px',
      },
      mobileLogoStyle: {
        width: '70px',
        height: '100px',
        marginBottom: '8px',
        borderRadius: '8px',
        marginLeft: '10px',
      }
    },
    {
      src: '/Rectangle 39.png',
      desktopMt: '210px',
      desktopMl: '-50px',
      mobileMt: '30px',
      mobileMl: '0px',
      title: 'Manufacturing',
      desc: 'Production of medical devices and healthcare equipment',
      logoStyle: {
        width: '60px',
        height: '80px',
        margin: '8px auto',
        borderRadius: '8px',
      },
      mobileLogoStyle: {
        width: '50px',
        height: '70px',
        margin: '8px auto',
        borderRadius: '8px',
      }
    },
    {
      src: '/Rectangle 40.png',
      desktopMt: '0px',
      desktopMl: '-60px',
      mobileMt: '0px',
      mobileMl: '0px',
      title: 'Logistics',
      desc: 'Management of the flow of medical supplies',
      logoStyle: {
        width: '90px',
        height: '120px',
        marginBottom: '8px',
        borderRadius: '8px',
        marginLeft: '24px',
      },
      mobileLogoStyle: {
        width: '70px',
        height: '100px',
        marginBottom: '8px',
        borderRadius: '8px',
        marginLeft: '12px',
      }
    },
    {
      src: '/Rectangle 42.png',
      desktopMt: '210px',
      desktopMl: '-50px',
      mobileMt: '30px',
      mobileMl: '0px',
      title: 'Real Estate',
      desc: 'Properties used for healthcare facilities',
      logoStyle: {
        width: '60px',
        height: '80px',
        margin: '8px auto',
        borderRadius: '8px',
      },
      mobileLogoStyle: {
        width: '50px',
        height: '70px',
        margin: '8px auto',
        borderRadius: '8px',
      }
    },
  ];

  return (
    <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      {/* ────────────────── Heading ────────────────── */}
      <div>
        <p
          style={{
            fontSize: 'clamp(20px, 5vw, 30px)',
            fontWeight: 'bold',
            color: '#A10000',
            textAlign: 'center',
            marginTop: 'clamp(25px, 5vw, 45px)',
            padding: '0 10px',
          }}
        >
          Serving Diverse Industries with Custom Solutions
        </p>
      </div>

      {/* ──────────────── Card Grid ──────────────── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '0px',
          justifyContent: 'center',
          marginTop: 'clamp(20px, 5vw, 35px)',
          flexWrap: 'wrap',
          padding: '0 10px',
        }}
      >
        {items.map((item, index) => {
          const headerStyle = {
            margin: '0',
            fontSize: 'clamp(11px, 3vw, 13px)',
            fontWeight: 'bold',
            color: '#ffffff',
            lineHeight: '1.4',
            textAlign: 'center',
          };

          const descStyle = {
            margin: '4px 0 0',
            fontSize: 'clamp(9px, 2.8vw, 11px)',
            color: '#dddddd',
            lineHeight: '1.3',
            textAlign: 'center',
          };

          const logoSrc = `/Talank Business ${index + 1}.png`;

          return (
            <div
              key={index}
              style={{
                position: 'relative',
                width: 'clamp(120px, 40vw, 165.29px)',
                height: 'clamp(180px, 50vw, 239.32px)',
                marginLeft: isMobile ? item.mobileMl : item.desktopMl,
                marginTop: isMobile ? item.mobileMt : item.desktopMt,
                overflow: 'hidden',
                borderRadius: '8px',
                marginBottom: isMobile ? '20px' : '0',
              }}
            >
              {/* Background image */}
              <img
                src={item.src}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Overlay content */}
              <div
                style={{
                  position: 'absolute',
                  top: 'clamp(5px, 2vw, 10px)',
                  left: 'clamp(5px, 2vw, 10px)',
                  right: 'clamp(5px, 2vw, 10px)',
                  padding: 'clamp(4px, 1.5vw, 8px)',
                  borderRadius: '6px',
                }}
              >
                {index % 2 === 0 ? (
                  <>
                    <h4 style={headerStyle}>{item.title}</h4>
                    <p style={descStyle}>{item.desc}</p>
                    <img 
                      src={logoSrc} 
                      alt={`Logo ${index + 1}`} 
                      style={isMobile ? item.mobileLogoStyle : item.logoStyle} 
                    />
                  </>
                ) : (
                  <>
                    <img 
                      src={logoSrc} 
                      alt={`Logo ${index + 1}`} 
                      style={isMobile ? item.mobileLogoStyle : item.logoStyle} 
                    />
                    <h4 style={headerStyle}>{item.title}</h4>
                    <p style={descStyle}>{item.desc}</p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Diverse;