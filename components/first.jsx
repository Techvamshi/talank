import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export default function BusinessGrowthDiagram() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeTab, setActiveTab] = useState('current');
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Simplified points for mobile
  const mobileCurrentPoints = [
    "Strategic Advisory",
    "Growth Programs",
    "Tech Solutions"
  ];

  const mobileCurrentDescriptions = [
    "Expert direction for business challenges",
    "Frameworks for rapid scaling",
    "Digital transformation solutions"
  ];

  const mobileDesiredPoints = [
    "Revenue Growth",
    "Market Expansion",
    "Competitive Edge"
  ];

  const mobileDesiredDescriptions = [
    "Increased profitability",
    "New market opportunities",
    "Market leadership position"
  ];

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      padding: isMobile ? '1rem' : '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
          borderRadius: isMobile ? '1rem' : '1.5rem',
          padding: isMobile ? '1.25rem' : '3rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          position: 'relative'
        }}
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            textAlign: 'center',
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: isMobile ? '1.5rem' : '3rem',
            background: 'linear-gradient(90deg, #3b82f6, #10b981)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.3'
          }}
        >
          Business Growth Transformation
        </motion.h1>

        {/* Problem/Solution Cards with Central Circle */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: isMobile ? '2.5rem' : '3rem',
          gap: isMobile ? '2rem' : '2rem'
        }}>
          {/* Problem Card */}
          <motion.div 
            whileHover={!isMobile ? { scale: 1.03 } : {}}
            whileTap={isMobile ? { scale: 0.98 } : {}}
            style={{
              backgroundColor: '#fff1f2',
              padding: isMobile ? '1.5rem' : '1.5rem',
              borderRadius: '1rem',
              width: isMobile ? '100%' : '250px',
              textAlign: 'center',
              borderLeft: '6px solid #ef4444',
              boxShadow: '0 10px 15px -3px rgba(239, 68, 68, 0.2)',
              order: isMobile ? 2 : 0
            }}
          >
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '0.75rem',
              color: '#ef4444'
            }}>📉</div>
            <h3 style={{
              fontSize: isMobile ? '1.3rem' : '1.25rem',
              fontWeight: '700',
              color: '#dc2626',
              marginBottom: '0.5rem'
            }}>Business Challenges</h3>
            <p style={{
              color: '#6b7280',
              fontSize: isMobile ? '1rem' : '0.9rem',
              lineHeight: '1.6'
            }}>
              Stagnant growth and limited market expansion
            </p>
          </motion.div>

          {/* Central Circle */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            order: isMobile ? 1 : 0,
            margin: isMobile ? '0 0 2rem 0' : '0'
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
              whileTap={isMobile ? { scale: 0.95 } : {}}
              style={{
                width: isMobile ? '200px' : '220px',
                height: isMobile ? '200px' : '220px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 15px 30px -5px rgba(59, 130, 246, 0.4)'
              }}
            >
              <div style={{
                width: isMobile ? '160px' : '180px',
                height: isMobile ? '160px' : '180px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: isMobile ? '1rem' : '1rem',
                boxShadow: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <p style={{
                  color: '#1e293b',
                  fontWeight: '600',
                  fontSize: isMobile ? '1rem' : '0.95rem',
                  lineHeight: '1.5'
                }}>
                  Strategic Management Consulting Solutions
                </p>
              </div>
            </motion.div>

            {isMobile && (
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: 50 }}
                transition={{ duration: 0.8 }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  bottom: '-50px',
                  transform: 'translateX(-50%)'
                }}
              >
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  style={{
                    width: '3px',
                    background: 'linear-gradient(to bottom, #3b82f6, #10b981)',
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
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderTop: '15px solid #3b82f6',
                    position: 'absolute',
                    bottom: '0',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                ></motion.div>
              </motion.div>
            )}
          </div>

          {/* Solution Card */}
          <motion.div 
            whileHover={!isMobile ? { scale: 1.03 } : {}}
            whileTap={isMobile ? { scale: 0.98 } : {}}
            style={{
              backgroundColor: '#ecfdf5',
              padding: isMobile ? '1.5rem' : '1.5rem',
              borderRadius: '1rem',
              width: isMobile ? '100%' : '250px',
              textAlign: 'center',
              borderLeft: '6px solid #10b981',
              boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.2)',
              order: isMobile ? 3 : 0
            }}
          >
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '0.75rem',
              color: '#10b981'
            }}>📈</div>
            <h3 style={{
              fontSize: isMobile ? '1.3rem' : '1.25rem',
              fontWeight: '700',
              color: '#059669',
              marginBottom: '0.5rem'
            }}>Growth Outcomes</h3>
            <p style={{
              color: '#6b7280',
              fontSize: isMobile ? '1rem' : '0.9rem',
              lineHeight: '1.6'
            }}>
              Accelerated revenue and market leadership
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
                background: 'linear-gradient(to bottom, #3b82f6, #10b981)',
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
            borderRadius: isMobile ? '1rem' : '1rem',
            padding: '0',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid #e2e8f0'
          }}
        >
          {isMobile ? (
            <>
              {/* Mobile Tabs */}
              <div style={{
                display: 'flex',
                height: '70px',
                backgroundColor: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: activeTab === 'current' ? '0' : '50%',
                  width: '50%',
                  height: '4px',
                  backgroundColor: activeTab === 'current' ? '#3b82f6' : '#10b981',
                  transition: 'all 0.3s ease'
                }}></div>
                <button 
                  onClick={() => setActiveTab('current')}
                  style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    outline: 'none',
                    position: 'relative'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: activeTab === 'current' ? '#1e40af' : '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <motion.span
                      animate={activeTab === 'current' ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ repeat: Infinity, duration: 3 }}
                    >📋</motion.span> Current
                  </h3>
                </button>
                <button 
                  onClick={() => setActiveTab('desired')}
                  style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: activeTab === 'desired' ? '#065f46' : '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <motion.span
                      animate={activeTab === 'desired' ? { y: [0, -5, 0] } : {}}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >🎯</motion.span> Desired
                  </h3>
                </button>
              </div>

              {/* Mobile Content */}
              <div style={{
                padding: '1.5rem',
                minHeight: '400px'
              }}>
                <ul style={{
                  listStyleType: 'none',
                  paddingLeft: '0',
                  display: 'grid',
                  gap: '1.25rem'
                }}>
                  {(activeTab === 'current' ? mobileCurrentPoints : mobileDesiredPoints).map((item, index) => (
                    <motion.li 
                      key={`${activeTab}-${index}`}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        padding: '1.5rem',
                        borderRadius: '0.75rem',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        backgroundColor: 'white',
                        border: `1px solid ${activeTab === 'current' ? '#e2e8f0' : '#e2e8f0'}`,
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <div style={{
                        width: '8px',
                        height: '100%',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        borderRadius: '8px 0 0 8px',
                        backgroundColor: activeTab === 'current' ? '#3b82f6' : '#10b981'
                      }} />
                      
                      <div style={{
                        minWidth: '40px',
                        height: '40px',
                        backgroundColor: activeTab === 'current' ? '#3b82f6' : '#10b981',
                        color: 'white',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        boxShadow: `0 4px 6px ${activeTab === 'current' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`
                      }}>
                        {index + 1}
                      </div>
                      
                      <div>
                        <h4 style={{
                          fontSize: '1.15rem',
                          fontWeight: '700',
                          color: '#1e293b',
                          marginBottom: '0.5rem'
                        }}>{item}</h4>
                        <p style={{
                          color: '#64748b',
                          fontSize: '0.95rem',
                          lineHeight: '1.5',
                          margin: 0
                        }}>
                          {activeTab === 'current' 
                            ? mobileCurrentDescriptions[index] 
                            : mobileDesiredDescriptions[index]}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <>
              {/* Desktop Version (unchanged) */}
              <div style={{
                display: 'flex',
                height: '80px',
                backgroundColor: '#f8fafc',
                borderBottom: '1px solid #e2e8f0'
              }}>
                <div style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRight: '1px solid #e2e8f0',
                  background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), transparent)'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
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
                    fontSize: '1.25rem',
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

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                minHeight: '400px'
              }}>
                {/* Current State */}
                <div style={{
                  padding: '2rem',
                  borderRight: '1px dashed #e2e8f0',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <ul style={{
                    listStyleType: 'none',
                    paddingLeft: '0',
                    display: 'grid',
                    gap: '1rem',
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
                        whileHover={{ 
                          x: 5,
                          backgroundColor: 'rgba(59, 130, 246, 0.05)'
                        }}
                        onMouseEnter={() => setHoveredItem(`current-${index}`)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{
                          padding: '1.25rem',
                          borderRadius: '0.75rem',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '1rem',
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
                          minWidth: '32px',
                          height: '32px',
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          borderRadius: '50%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          flexShrink: 0
                        }}>{index + 1}</div>
                        
                        <div>
                          <h4 style={{
                            fontSize: '1.05rem',
                            fontWeight: '600',
                            color: '#1e293b',
                            marginBottom: '0.5rem'
                          }}>{item}</h4>
                          <motion.p 
                            animate={{ 
                              opacity: hoveredItem === `current-${index}` ? 1 : 0.7 
                            }}
                            style={{
                              color: '#64748b',
                              fontSize: '0.9rem',
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
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <ul style={{
                    listStyleType: 'none',
                    paddingLeft: '0',
                    display: 'grid',
                    gap: '1rem',
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
                        whileHover={{ 
                          x: 5,
                          backgroundColor: 'rgba(16, 185, 129, 0.05)'
                        }}
                        onMouseEnter={() => setHoveredItem(`desired-${index}`)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{
                          padding: '1.25rem',
                          borderRadius: '0.75rem',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '1rem',
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
                          minWidth: '32px',
                          height: '32px',
                          backgroundColor: '#10b981',
                          color: 'white',
                          borderRadius: '50%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          flexShrink: 0
                        }}>{index + 1}</div>
                        
                        <div>
                          <h4 style={{
                            fontSize: '1.05rem',
                            fontWeight: '600',
                            color: '#1e293b',
                            marginBottom: '0.5rem'
                          }}>{item}</h4>
                          <motion.p 
                            animate={{ 
                              opacity: hoveredItem === `desired-${index}` ? 1 : 0.7 
                            }}
                            style={{
                              color: '#64748b',
                              fontSize: '0.9rem',
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
            </>
          )}
        </motion.div>

        {/* Footer Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            textAlign: 'center',
            color: '#64748b',
            fontSize: isMobile ? '1.1rem' : '1.1rem',
            fontWeight: '500',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.75rem',
            marginTop: isMobile ? '2.5rem' : '2rem',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row'
          }}
        >
          <span>Transforming business from</span>
          <motion.span 
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            whileTap={isMobile ? { scale: 0.95 } : {}}
            style={{
              backgroundColor: '#fee2e2',
              color: '#b91c1c',
              padding: isMobile ? '0.6rem 1.25rem' : '0.25rem 0.75rem',
              borderRadius: '12px',
              fontWeight: '700',
              cursor: 'default',
              boxShadow: '0 4px 6px -1px rgba(239, 68, 68, 0.2)'
            }}
          >Stagnation</motion.span>
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              transform: isMobile ? 'rotate(90deg)' : 'none',
              fontSize: isMobile ? '1.5rem' : '1rem',
              color: '#3b82f6'
            }}
          >→</motion.span>
          <motion.span 
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            whileTap={isMobile ? { scale: 0.95 } : {}}
            style={{
              backgroundColor: '#dcfce7',
              color: '#166534',
              padding: isMobile ? '0.6rem 1.25rem' : '0.25rem 0.75rem',
              borderRadius: '12px',
              fontWeight: '700',
              cursor: 'default',
              boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)'
            }}
          >Success</motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
}