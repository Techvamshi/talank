'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ProductCard = ({ product, isActive, onClick }) => {
  const [imgError, setImgError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      onClick={onClick}
      style={{
        background: `linear-gradient(135deg, ${product.color} 0%, #f8f9fa 100%)`,
        borderRadius: '20px',
        padding: isMobile ? '20px' : '30px',
        cursor: 'pointer',
        boxShadow: isActive ? `0 0 30px ${product.color}40` : '0 4px 20px rgba(0,0,0,0.08)',
        position: 'relative',
        overflow: 'hidden',
        height: isActive ? (isMobile ? 'auto' : '500px') : (isMobile ? '150px' : '200px'),
        transition: 'height 0.5s ease',
        marginBottom: '20px',
        border: '1px solid rgba(0,0,0,0.05)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { type: 'spring', stiffness: 100 }
      }}
      whileHover={{ 
        y: isMobile ? 0 : -10,
        transition: { type: 'spring', stiffness: 300 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: isMobile ? '10px' : '20px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div style={{
          height: isMobile ? '30px' : '40px',
          display: 'flex',
          alignItems: 'center'
        }}>
          {product.image ? (
            <Image 
              src={imgError ? '/icons/fallback-icon.png' : product.image} 
              alt={product.title}
              width={isMobile ? 30 : 40}
              height={isMobile ? 30 : 40}
              onError={() => setImgError(true)}
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
            />
          ) : (
            <div style={{
              width: isMobile ? 30 : 40,
              height: isMobile ? 30 : 40,
              backgroundColor: product.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              color: 'white',
              fontWeight: 'bold'
            }}>
              {product.title.charAt(0)}
            </div>
          )}
        </div>
        <motion.div 
          style={{
            width: isMobile ? '30px' : '40px',
            height: isMobile ? '30px' : '40px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: product.color,
            fontSize: isMobile ? '16px' : '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}
          initial={{ rotate: -90, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ 
            delay: 0.4,
            type: 'spring',
            stiffness: 500,
            damping: 10
          }}
          whileHover={{ rotate: isMobile ? 0 : 10 }}
        >
          {product.icon}
        </motion.div>
      </motion.div>
      
      <motion.p 
        style={{
          color: '#4a5568',
          fontSize: isMobile ? '14px' : '16px',
          marginBottom: isMobile ? '10px' : '20px'
        }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {product.tagline}
      </motion.p>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1,
              height: 'auto',
              transition: { 
                opacity: { duration: 0.4 },
                height: { duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }
              }
            }}
            exit={{ 
              opacity: 0,
              height: 0,
              transition: { 
                opacity: { duration: 0.2 },
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }
              }
            }}
          >
            <motion.div 
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: isMobile ? '15px' : '20px',
                marginBottom: isMobile ? '20px' : '30px'
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
              }}
            >
              {product.features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    padding: isMobile ? '12px' : '15px',
                    borderRadius: '10px',
                    backdropFilter: 'blur(5px)',
                    boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  whileHover={{ y: isMobile ? 0 : -5 }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: isMobile ? '8px' : '10px'
                  }}>
                    <motion.div 
                      style={{
                        width: isMobile ? '25px' : '30px',
                        height: isMobile ? '25px' : '30px',
                        borderRadius: '50%',
                        background: product.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: isMobile ? '8px' : '10px',
                        flexShrink: '0'
                      }}
                      whileHover={{ scale: isMobile ? 1 : 1.1 }}
                    >
                      <span style={{ color: '#fff', fontSize: isMobile ? '12px' : '14px' }}>{i+1}</span>
                    </motion.div>
                    <h4 style={{
                      color: '#2d3748',
                      margin: '0',
                      fontSize: isMobile ? '14px' : '16px'
                    }}>{feature.title}</h4>
                  </div>
                  <p style={{
                    color: '#4a5568',
                    fontSize: isMobile ? '12px' : '14px',
                    margin: '0',
                    marginLeft: isMobile ? '33px' : '40px'
                  }}>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              style={{
                display: 'flex',
                gap: '15px',
                marginTop: 'auto',
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 0.6 }
              }}
            >
              <motion.button
                style={{
                  padding: isMobile ? '10px 20px' : '12px 25px',
                  background: product.color,
                  border: 'none',
                  borderRadius: '50px',
                  color: '#ffffff',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: isMobile ? '13px' : '14px',
                  boxShadow: `0 4px 15px ${product.color}60`
                }}
                whileHover={{ 
                  scale: isMobile ? 1 : 1.05,
                  boxShadow: `0 6px 20px ${product.color}80`
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Request Demo
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div 
        style={{
          position: 'absolute',
          bottom: isMobile ? '10px' : '20px',
          right: isMobile ? '10px' : '20px',
          fontSize: isMobile ? '10px' : '12px',
          color: '#718096'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {product.id}
      </motion.div>
    </motion.div>
  );
};

const FloatingOrbs = ({ activeProduct }) => {
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    const newOrbs = Array.from({ length: 5 }).map(() => ({
      width: `${Math.random() * 200 + 100}px`,
      height: `${Math.random() * 200 + 100}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 100,
      duration: Math.random() * 20 + 10,
    }));
    setOrbs(newOrbs);
  }, [activeProduct]);

  if (orbs.length === 0) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: orb.width,
            height: orb.height,
            borderRadius: '50%',
            background: activeProduct 
              ? `radial-gradient(circle, ${activeProduct.color}10 0%, transparent 70%)`
              : 'radial-gradient(circle, #5B7DB110 0%, transparent 70%)',
            top: orb.top,
            left: orb.left,
            filter: 'blur(40px)'
          }}
          animate={{
            x: [0, orb.x, 0],
            y: [0, orb.y, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

export default function DigiceuticsDashboard() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const products = [
    {
      id: 'ideateX',
      title: 'ideateX',
      image: '/icons/ideatex.png',
      tagline: 'Transforming ideas into winning businesses - NextGen digital ideation lab',
      icon: '💡',
      color: '#00CECB',
      features: [
        {
          title: 'Step-by-step ideation',
          description: 'Guided process from concept to business plan'
        },
        {
          title: 'Business Canvas',
          description: 'Structured templates for business modeling'
        },
        {
          title: 'Validation Engine',
          description: 'Data-driven go/no-go decision making'
        },
        {
          title: 'Financial Planning',
          description: 'Revenue, expenses, cashflow and profit calculations'
        },
        {
          title: 'Program Management',
          description: 'End-to-end idea development tracking'
        },
        {
          title: 'All-in-One Solution',
          description: '360-degree view of your business concept'
        }
      ]
    },
    {
      id: 'iQLIMS',
      title: 'iQLIMS',
      image: '/icons/iqlims.png',
      tagline: 'Modern laboratory informatics for improved QC/QA and data management',
      icon: '🔬',
      color: '#FFC145',
      features: [
        {
          title: 'E2E Diagnostic Solution',
          description: 'Complete workflow from sample to report'
        },
        {
          title: 'Clinical Trial Management',
          description: 'Specialized tools for research labs'
        },
        {
          title: 'Compliance Analytics',
          description: 'Protocol analysis with automated alerts'
        },
        {
          title: 'Modular Informatics',
          description: 'Flexible MMIS architecture'
        },
        {
          title: 'Workflow Automation',
          description: 'Increased lab productivity'
        },
        {
          title: 'Regulatory Compliance',
          description: '21 CFR Part 11, HIPAA, HL7 ready'
        }
      ]
    },
    {
      id: 'IoMT',
      title: 'IoMT',
      image: '/icons/iomt.png',
      tagline: 'Secure medical device connectivity for healthcare automation',
      icon: '⚕️',
      color: '#A05EB5',
      features: [
        {
          title: 'Universal Connectivity',
          description: 'RS232, WIFI, Bluetooth, USB, RJ45'
        },
        {
          title: 'Secure Middleware',
          description: 'Encrypted device-to-application communication'
        },
        {
          title: 'Offline Storage',
          description: 'Data persistence without network'
        },
        {
          title: 'Protocol Translation',
          description: 'Bridging diverse medical devices'
        },
        {
          title: 'Healthcare Automation',
          description: 'Environmental monitoring solutions'
        },
        {
          title: 'Reliable Transmission',
          description: 'Guaranteed data delivery'
        }
      ]
    },
    {
      id: 'iQFORMS',
      title: 'iQFORMS',
      image: '/icons/iqforms.png',
      tagline: 'Cloud-based forms solution for clinical research and patient management',
      icon: '📋',
      color: '#5B7DB1',
      features: [
        {
          title: 'Real World EDC/eCRF',
          description: 'Electronic data capture for research'
        },
        {
          title: 'Site Management',
          description: 'Tools for SMO operations'
        },
        {
          title: 'Patient Wellness',
          description: 'Integrated patient solutions'
        },
        {
          title: 'AI Analytics',
          description: 'Data models and insights'
        },
        {
          title: 'Cloud Architecture',
          description: 'Single-stack simplified IT'
        },
        {
          title: 'Regulatory Ready',
          description: 'Compliant data collection'
        }
      ]
    },
    {
      id: 'aiotroniX',
      title: 'aiotroniX',
      image: '/icons/aiotronix.png',
      tagline: 'Industrial IoT automation for smart factories and intelligent systems',
      icon: '🏭',
      color: '#FF5E5B',
      features: [
        {
          title: 'Industrial Automation',
          description: 'IIoT for smart manufacturing'
        },
        {
          title: 'Real-time Monitoring',
          description: 'Equipment and process tracking'
        },
        {
          title: 'Predictive Analytics',
          description: 'AI-driven operational insights'
        },
        {
          title: 'Single-stack Architecture',
          description: 'Unified device management'
        },
        {
          title: 'Process Optimization',
          description: 'Efficiency and productivity gains'
        },
        {
          title: 'Safety Systems',
          description: 'Adaptive risk mitigation'
        }
      ]
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: isMobile ? '20px' : '40px',
      color: '#2d3748',
      fontFamily: "'Inter', sans-serif",
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
    }}>
      <FloatingOrbs activeProduct={activeProduct} />
      
      <header style={{
        marginBottom: isMobile ? '30px' : '50px',
        textAlign: 'center',
        padding: isMobile ? '0 10px' : '0'
      }}>
        {/* <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: isMobile ? '15px' : '20px'
        }}>
          <Image 
            src="/logo.png" 
            alt="Digiceutics Logo"
            width={isMobile ? 180 : 240}
            height={isMobile ? 60 : 80}
            style={{
              objectFit: 'contain',
              maxWidth: '100%',
              height: 'auto',
              marginLeft:isMobile ?'-200px':'100px',
            }}
          />
        </div> */}
        <motion.p
          style={{
            fontSize: isMobile ? '14px' : '18px',
            color: '#4a5568',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.5'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          At Digiceutics.ai, we are poised to revolutionize the tech landscape by providing innovative empowering digital solutions to businesses.
        </motion.p>
      </header>
      
      <motion.div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.div 
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '15px' : '30px',
            marginBottom: isMobile ? '20px' : '40px'
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.4 }
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              style={{
                background: 'rgba(255,255,255,0.7)',
                borderRadius: '15px',
                padding: isMobile ? '15px' : '20px',
                cursor: 'pointer',
                border: activeProduct?.id === product.id 
                  ? `2px solid ${product.color}`
                  : '2px solid rgba(0,0,0,0.05)',
                backdropFilter: 'blur(5px)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ 
                y: isMobile ? 0 : -5,
                background: 'rgba(255,255,255,0.9)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveProduct(product)}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: isMobile ? '10px' : '15px'
              }}>
                <motion.div 
                  style={{
                    width: isMobile ? '40px' : '50px',
                    height: isMobile ? '40px' : '50px',
                    borderRadius: '15px',
                    background: product.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: isMobile ? '10px' : '15px',
                    fontSize: isMobile ? '20px' : '24px',
                    color: '#ffffff',
                    boxShadow: `0 4px 15px ${product.color}60`
                  }}
                  whileHover={{ rotate: isMobile ? 0 : 10 }}
                >
                  {product.icon}
                </motion.div>
                <div style={{
                  height: isMobile ? '25px' : '30px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <h3 style={{
                    fontSize: isMobile ? '16px' : '20px',
                    fontWeight: '600',
                    margin: '0',
                    color: '#2d3748'
                  }}>{product.title}</h3>
                </div>
              </div>
              <p style={{
                color: '#4a5568',
                fontSize: isMobile ? '12px' : '14px',
                margin: '0'
              }}>{product.tagline}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          style={{ display: 'grid', gap: isMobile ? '15px' : '20px' }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.6 }
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              <ProductCard 
                product={product}
                isActive={activeProduct?.id === product.id}
                onClick={() => setActiveProduct(product)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}