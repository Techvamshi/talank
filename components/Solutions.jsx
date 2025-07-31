'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProductCard = ({ product, isActive, onClick }) => {
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef();

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
      ref={cardRef}
      onClick={onClick}
      className="product-card"
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        padding: isMobile ? '20px' : '24px',
        cursor: 'pointer',
        boxShadow: isActive 
          ? `0 8px 32px ${product.color}20, 0 0 0 1px ${product.color}20` 
          : '0 4px 24px rgba(0,0,0,0.05)',
        position: 'relative',
        overflow: 'hidden',
        height: isActive ? (isMobile ? 'auto' : '580px') : (isMobile ? '120px' : '160px'),
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        marginBottom: '16px',
        border: `1px solid ${isActive ? product.color + '20' : 'rgba(0,0,0,0.05)'}`,
        display: 'flex',
        flexDirection: 'column',

      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { type: 'spring', stiffness: 100 }
      }}
      whileHover={{ 
        y: isMobile ? 0 : -8,
        boxShadow: isActive 
          ? `0 12px 40px ${product.color}30, 0 0 0 1px ${product.color}30`
          : '0 8px 32px rgba(0,0,0,0.1)'
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div style={{ flex: isActive ? '0 0 auto' : '1' }}>
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: isMobile ? '12px' : '16px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: isMobile ? '36px' : '48px',
              height: isMobile ? '36px' : '48px',
              borderRadius: '12px',
              background: `${product.color}10`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: `1px solid ${product.color}20`
            }}>
              <span style={{
                fontSize: isMobile ? '20px' : '24px',
                color: product.color
              }}>
                {product.icon}
              </span>
            </div>
            <h3 style={{
              fontSize: isMobile ? '18px' : '20px',
              fontWeight: '600',
              margin: 0,
              color: '#111827'
            }}>
              {product.title}
            </h3>
          </div>
          <motion.div 
            style={{
              width: isMobile ? '32px' : '40px',
              height: isMobile ? '32px' : '40px',
              borderRadius: '50%',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: product.color,
              fontSize: isMobile ? '16px' : '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: `1px solid ${product.color}20`
            }}
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ 
              delay: 0.4,
              type: 'spring',
              stiffness: 500,
              damping: 10
            }}
            whileHover={{ rotate: isMobile ? 0 : 15 }}
          >
            {isActive ? '−' : '+'}
          </motion.div>
        </motion.div>
        
        <motion.p 
          style={{
            color: '#4B5563',
            fontSize: isMobile ? '14px' : '15px',
            marginBottom: isMobile ? '12px' : '16px',
            lineHeight: 1.5
          }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {product.tagline}
        </motion.p>
      </div>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1,
              height: 'auto',
              transition: { 
                opacity: { duration: 0.3 },
                height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            exit={{ 
              opacity: 0,
              height: 0,
              transition: { 
                opacity: { duration: 0.2 },
                height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }
            }}
          >
            <motion.div 
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: isMobile ? '16px' : '20px',
                marginBottom: isMobile ? '24px' : '32px',
                flex: '1 1 auto'
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
                    background: '#ffffff',
                    padding: isMobile ? '16px' : '20px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    border: `1px solid ${product.color}10`
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  whileHover={{ y: isMobile ? 0 : -4 }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: isMobile ? '8px' : '12px'
                  }}>
                    <div style={{
                      width: isMobile ? '28px' : '32px',
                      height: isMobile ? '28px' : '32px',
                      borderRadius: '8px',
                      background: `${product.color}10`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: isMobile ? '12px' : '16px',
                      border: `1px solid ${product.color}20`
                    }}>
                      <span style={{ 
                        color: product.color,
                        fontSize: isMobile ? '14px' : '16px',
                        fontWeight: '600'
                      }}>
                        {i+1}
                      </span>
                    </div>
                    <h4 style={{
                      color: '#111827',
                      margin: '0',
                      fontSize: isMobile ? '16px' : '17px',
                      fontWeight: '600'
                    }}>{feature.title}</h4>
                  </div>
                  <p style={{
                    color: '#4B5563',
                    fontSize: isMobile ? '13px' : '14px',
                    margin: '0',
                    marginLeft: isMobile ? '40px' : '48px',
                    lineHeight: 1.5
                  }}>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <div style={{
              flex: '0 0 auto',
              paddingTop: isMobile ? '16px' : '24px',
              borderTop: `1px solid ${product.color}10`,
              marginTop: 'auto'
            }}>
              <motion.button
                style={{
                  padding: isMobile ? '14px 28px' : '16px 32px',
                  background: product.color,
                  border: 'none',
                  borderRadius: '12px',
                  color: '#ffffff',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: isMobile ? '15px' : '16px',
                  boxShadow: `0 4px 16px ${product.color}40`,
                  width: isMobile ? '100%' : 'auto',
                  display: 'block',
                  margin: '0 auto',
                  marginBottom:'0%',
                }}
                whileHover={{ 
                  scale: isMobile ? 1 : 1.05,
                  boxShadow: `0 6px 20px ${product.color}60`
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Request Demo
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function DigiceuticsDashboard() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const productRefs = useRef({});
  const router = useRouter();
  
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
      id: 'iQLIMS',
      title: 'iQLIMS',
      tagline: 'Modern laboratory informatics for improved QC/QA and data management',
      icon: '🔬',
      color: '#F59E0B',
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
      tagline: 'Secure medical device connectivity for healthcare automation',
      icon: '⚕️',
      color: '#8B5CF6',
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
      tagline: 'Cloud-based forms solution for clinical research and patient management',
      icon: '📋',
      color: '#3B82F6',
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
      tagline: 'Industrial IoT automation for smart factories and intelligent systems',
      icon: '🏭',
      color: '#EF4444',
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

  const handleProductClick = (product) => {
    if (activeProduct?.id === product.id) {
      setActiveProduct(null);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      setActiveProduct(product);
      setTimeout(() => {
        productRefs.current[product.id]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
      router.push(`#${product.id}`);
    }
  };

  const setProductRef = (id, ref) => {
    productRefs.current[id] = ref;
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: isMobile ? '24px 16px' : '48px 32px',
      color: '#111827',
      fontFamily: "'Inter', sans-serif",
      background: '#F9FAFB',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <header style={{
        marginBottom: isMobile ? '40px' : '64px',
        textAlign: 'center'
      }}>
        <div style={{
          width: isMobile ? '180px' : '240px',
          height: isMobile ? '60px' : '80px',
          margin: '0 auto',
          position: 'relative',
          marginBottom: isMobile ? '24px' : '32px'
        }}>
          <Image 
            src="/center.png" 
            alt="Digiceutics Logo"
            width={isMobile ? 180 : 240}
            height={isMobile ? 60 : 80}
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))'
            }}
          />
        </div>
        
        <motion.h1
          style={{
            fontSize: isMobile ? '28px' : '40px',
            fontWeight: '700',
            marginBottom: '16px',
            background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Digital Solutions for Modern Healthcare
        </motion.h1>
        
        <motion.p
          style={{
            fontSize: isMobile ? '16px' : '18px',
            color: '#4B5563',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Transforming healthcare through innovative digital platforms that improve efficiency, compliance, and patient outcomes.
        </motion.p>
      </header>
      
      <motion.div 
        style={{ display: 'grid', gap: isMobile ? '20px' : '24px' }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.4 }
        }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            id={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            ref={(ref) => setProductRef(product.id, ref)}
          >
            <ProductCard 
              product={product}
              isActive={activeProduct?.id === product.id}
              onClick={() => handleProductClick(product)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}