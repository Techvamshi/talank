import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export default function BusinessGrowthDiagram() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      padding: isMobile ? '1rem' : '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: isMobile ? '5%' : '10%',
    }}>
      <Head>
        <title>Business Growth Transformation</title>
        <meta name="description" content="Strategic Management Consulting for Business Growth" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '1200px',
          width: '100%',
          backgroundColor: 'white',
          borderRadius: isMobile ? '0.75rem' : '1.5rem',
          padding: isMobile ? '1.5rem' : '3rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          position: 'relative'
        }}
      >
        {/* Header */}
        <h1 style={{
          textAlign: 'center',
          fontSize: isMobile ? '1.5rem' : '2.25rem',
          fontWeight: '700',
          color: '#1e293b',
          marginBottom: isMobile ? '1.5rem' : '3rem',
          background: 'linear-gradient(90deg, #3b82f6, #10b981)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1.3'
        }}>
          Business Growth Transformation
        </h1>

        {/* Top Section with Circle and Arrows */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: isMobile ? '2rem' : '3rem',
          gap: isMobile ? '2rem' : '2rem'
        }}>
          {/* Problem Section */}
          <motion.div 
            whileHover={!isMobile ? { scale: 1.03 } : {}}
            style={{
              backgroundColor: '#fff1f2',
              padding: isMobile ? '1rem' : '1.5rem',
              borderRadius: '0.75rem',
              width: isMobile ? '100%' : '250px',
              textAlign: 'center',
              borderLeft: '4px solid #ef4444',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{
              fontSize: '2rem',
              marginBottom: '0.5rem',
              color: '#ef4444'
            }}>📉</div>
            <h3 style={{
              fontSize: isMobile ? '1.1rem' : '1.25rem',
              fontWeight: '600',
              color: '#dc2626',
              marginBottom: '0.5rem'
            }}>Stagnant Business Growth?</h3>
            <p style={{
              color: '#6b7280',
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              lineHeight: '1.5'
            }}>
              Limited revenue and not growing in market
            </p>
          </motion.div>

          {/* Center Circle */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            order: isMobile ? -1 : 0,
            margin: isMobile ? '0 0 1rem 0' : '0'
          }}>
            {!isMobile && (
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '2px',
                backgroundColor: '#e2e8f0',
                top: '50%',
                zIndex: 1
              }}></div>
            )}
            
            <motion.div 
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              style={{
                width: isMobile ? '150px' : '220px',
                height: isMobile ? '150px' : '220px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)'
              }}
            >
              <div style={{
                width: isMobile ? '120px' : '180px',
                height: isMobile ? '120px' : '180px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: isMobile ? '0.5rem' : '1rem',
                boxShadow: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <p style={{
                  color: '#1e293b',
                  fontWeight: '600',
                  fontSize: isMobile ? '0.75rem' : '0.95rem',
                  lineHeight: '1.4'
                }}>
                  Strategic Management Consulting Provides
                </p>
              </div>
            </motion.div>

            {isMobile && (
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: 40 }}
                transition={{ duration: 0.8 }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  bottom: '-40px',
                  transform: 'translateX(-50%)'
                }}
              >
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  style={{
                    width: '2px',
                    backgroundColor: '#3b82f6',
                    position: 'absolute'
                  }}
                ></motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                  style={{
                    width: '0',
                    height: '0',
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '12px solid #3b82f6',
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                ></motion.div>
              </motion.div>
            )}
          </div>

          {/* Solution Section */}
          <motion.div 
            whileHover={!isMobile ? { scale: 1.03 } : {}}
            style={{
              backgroundColor: '#ecfdf5',
              padding: isMobile ? '1rem' : '1.5rem',
              borderRadius: '0.75rem',
              width: isMobile ? '100%' : '250px',
              textAlign: 'center',
              borderLeft: '4px solid #10b981',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{
              fontSize: '2rem',
              marginBottom: '0.5rem',
              color: '#10b981'
            }}>📈</div>
            <h3 style={{
              fontSize: isMobile ? '1.1rem' : '1.25rem',
              fontWeight: '600',
              color: '#059669',
              marginBottom: '0.5rem'
            }}>Accelerated Revenue Growth</h3>
            <p style={{
              color: '#6b7280',
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              lineHeight: '1.5'
            }}>
              Optimized revenue and market expansion
            </p>
          </motion.div>
        </div>

        {!isMobile && (
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 40 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}
          >
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                width: '2px',
                backgroundColor: '#3b82f6',
                position: 'absolute'
              }}
            ></motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                width: '0',
                height: '0',
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '12px solid #3b82f6',
                position: 'absolute',
                bottom: '0'
              }}
            ></motion.div>
          </motion.div>
        )}

        {/* State Comparison Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            backgroundColor: 'white',
            borderRadius: isMobile ? '0.5rem' : '1rem',
            padding: '0',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid #e2e8f0'
          }}
        >
          {/* Decorative header */}
          <div style={{
            display: 'flex',
            height: isMobile ? '60px' : '80px',
            backgroundColor: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <div style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRight: isMobile ? 'none' : '1px solid #e2e8f0',
              borderBottom: isMobile ? '1px solid #e2e8f0' : 'none',
              background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), transparent)'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1rem' : '1.25rem',
                fontWeight: '600',
                color: '#1e40af',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >📋</motion.span> Current State
              </h3>
            </div>
            <div style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'linear-gradient(to left, rgba(16, 185, 129, 0.1), transparent)'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1rem' : '1.25rem',
                fontWeight: '600',
                color: '#065f46',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >🎯</motion.span> Desired State
              </h3>
            </div>
          </div>

          {/* Content area */}
          <div style={{
            display: isMobile ? 'block' : 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: isMobile ? 'auto' : '400px'
          }}>
            {/* Current State */}
            <div style={{
              padding: isMobile ? '1rem' : '2rem',
              borderRight: isMobile ? 'none' : '1px dashed #e2e8f0',
              borderBottom: isMobile ? '1px dashed #e2e8f0' : 'none',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <ul style={{
                listStyleType: 'none',
                paddingLeft: '0',
                display: 'grid',
                gap: isMobile ? '0.75rem' : '1rem',
                position: 'relative',
                zIndex: 1
              }}>
                {[
                  "Strategic Advisory & Guidance",
                  "Business Growth Programs",
                  "Stakeholder Engagement",
                  "NextGen Tech Solutions",
                  "Operations Excellence (COE)"
                ].map((item, index) => (
                  <motion.li 
                    key={`current-${index}`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={!isMobile ? { 
                      x: 5,
                      backgroundColor: 'rgba(59, 130, 246, 0.05)'
                    } : {}}
                    onMouseEnter={() => !isMobile && setHoveredItem(`current-${index}`)}
                    onMouseLeave={() => !isMobile && setHoveredItem(null)}
                    style={{
                      padding: isMobile ? '0.75rem' : '1.25rem',
                      borderRadius: '0.5rem',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: isMobile ? '0.75rem' : '1rem',
                      backgroundColor: 'white',
                      transition: 'all 0.3s ease',
                      border: '1px solid #e2e8f0',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div 
                      animate={{ 
                        backgroundColor: hoveredItem === `current-${index}` ? '#3b82f6' : '#e2e8f0'
                      }}
                      style={{
                        width: '6px',
                        height: '100%',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        borderRadius: '6px 0 0 6px'
                      }}
                    />
                    
                    <div style={{
                      minWidth: isMobile ? '24px' : '32px',
                      height: isMobile ? '24px' : '32px',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: isMobile ? '0.65rem' : '0.75rem',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}>{index + 1}</div>
                    
                    <div>
                      <h4 style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '0.25rem'
                      }}>{item}</h4>
                      <motion.p 
                        animate={{ 
                          opacity: hoveredItem === `current-${index}` || isMobile ? 1 : 0.7 
                        }}
                        style={{
                          color: '#64748b',
                          fontSize: isMobile ? '0.8rem' : '0.85rem',
                          lineHeight: '1.5',
                          margin: 0,
                          transition: 'opacity 0.2s ease'
                        }}
                      >
                        {[
                          "Expert direction for challenges",
                          "Programs for rapid scaling",
                          "Strategic partnerships",
                          "Digital transformation",
                          "Center for efficiency"
                        ][index]}
                      </motion.p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Desired State */}
            <div style={{
              padding: isMobile ? '1rem' : '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <ul style={{
                listStyleType: 'none',
                paddingLeft: '0',
                display: 'grid',
                gap: isMobile ? '0.75rem' : '1rem',
                position: 'relative',
                zIndex: 1
              }}>
                {[
                  "Program & Change Management",
                  "Scale & Revenue Growth",
                  "Market Expansion",
                  "Operational Excellence",
                  "Competitive Advantage"
                ].map((item, index) => (
                  <motion.li 
                    key={`desired-${index}`}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={!isMobile ? { 
                      x: 5,
                      backgroundColor: 'rgba(16, 185, 129, 0.05)'
                    } : {}}
                    onMouseEnter={() => !isMobile && setHoveredItem(`desired-${index}`)}
                    onMouseLeave={() => !isMobile && setHoveredItem(null)}
                    style={{
                      padding: isMobile ? '0.75rem' : '1.25rem',
                      borderRadius: '0.5rem',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: isMobile ? '0.75rem' : '1rem',
                      backgroundColor: 'white',
                      transition: 'all 0.3s ease',
                      border: '1px solid #e2e8f0',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div 
                      animate={{ 
                        backgroundColor: hoveredItem === `desired-${index}` ? '#10b981' : '#e2e8f0'
                      }}
                      style={{
                        width: '6px',
                        height: '100%',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        borderRadius: '6px 0 0 6px'
                      }}
                    />
                    
                    <div style={{
                      minWidth: isMobile ? '24px' : '32px',
                      height: isMobile ? '24px' : '32px',
                      backgroundColor: '#10b981',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: isMobile ? '0.65rem' : '0.75rem',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}>{index + 1}</div>
                    
                    <div>
                      <h4 style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '0.25rem'
                      }}>{item}</h4>
                      <motion.p 
                        animate={{ 
                          opacity: hoveredItem === `desired-${index}` || isMobile ? 1 : 0.7 
                        }}
                        style={{
                          color: '#64748b',
                          fontSize: isMobile ? '0.8rem' : '0.85rem',
                          lineHeight: '1.5',
                          margin: 0,
                          transition: 'opacity 0.2s ease'
                        }}
                      >
                        {[
                          "Transformation execution",
                          "Increased revenue",
                          "New market segments",
                          "Streamlined processes",
                          "Market leadership"
                        ][index]}
                      </motion.p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Footer Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            textAlign: 'center',
            color: '#64748b',
            fontSize: isMobile ? '0.95rem' : '1.1rem',
            fontWeight: '500',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: isMobile ? '1.5rem' : '2rem',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row'
          }}
        >
          <span>Building business from</span>
          <motion.span 
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            style={{
              backgroundColor: '#fee2e2',
              color: '#b91c1c',
              padding: isMobile ? '0.2rem 0.6rem' : '0.25rem 0.75rem',
              borderRadius: '9999px',
              fontWeight: '600',
              cursor: 'default'
            }}
          >"Stagnation"</motion.span>
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              transform: isMobile ? 'rotate(90deg)' : 'none'
            }}
          >→</motion.span>
          <motion.span 
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            style={{
              backgroundColor: '#dcfce7',
              color: '#166534',
              padding: isMobile ? '0.2rem 0.6rem' : '0.25rem 0.75rem',
              borderRadius: '9999px',
              fontWeight: '600',
              cursor: 'default'
            }}
          >"Success"</motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
}