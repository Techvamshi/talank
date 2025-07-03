'use client'
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect ,useRef } from 'react';


export default function HeroSection() {
  const [showHi, setShowHi] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [hiElements, setHiElements] = useState([]);

  useEffect(() => {
   
    const elements = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 80 - 40, 
      y: Math.random() * 80 - 40,
      size: Math.random() * 0.5 + 0.5, 
      delay: Math.random() * 0.5,
      duration: Math.random() * 0.5 + 0.5 
    }));
    setHiElements(elements);

    
    const timer1 = setTimeout(() => {
      setShowHi(false);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="hero-content relative min-h-[400px]">
      
      <AnimatePresence>
        {showHi && (
          <div className="absolute inset-0 flex items-center justify-center">
            {hiElements.map((hi) => (
              <motion.div
                key={hi.id}
                className="absolute text-4xl font-bold text-[#218BC9]"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: `${hi.x}px`,
                  y: `${hi.y}px`
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, hi.size, 0.3],
                  transition: {
                    delay: hi.delay,
                    duration: hi.duration,
                    ease: "easeInOut"
                  }
                }}
                exit={{
                  opacity: 0,
                  scale: 0,
                  transition: { duration: 0.3 }
                }}
              >
                Hello
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: { 
                duration: 0.8,
                ease: "easeOut"
              }
            }}
          >
            
            <motion.h1 
              className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            >
              <motion.span 
                className="text-[#218BC9]"
                initial={{ x: -20 }}
                animate={{ 
                  x: 0,
                  transition: { 
                    type: "spring",
                    stiffness: 100,
                    delay: 0.3
                  }
                }}
              >
                From Vision to{" "}
              </motion.span>
              <motion.span
                className="text-[#F55135] inline-block"
                initial={{ scale: 0.8, y: 20, opacity: 0 }}
                animate={{
                  scale: 1,
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 0.4
                  }
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                Reality
              </motion.span>
              <motion.div
                className="text-[#218BC9] block mt-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.6 }
                }}
              >
                We Build What the Future Demands.
              </motion.div>
            </motion.h1>

           
            <motion.div
              className="text-[#A0A0A0] mb-8"
              style={{ lineHeight: '1.3' }}
            >
              {"Our solutions are designed to optimize operations,".split("").map((char, i) => (
                <motion.span
                  key={`line1-${i}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.8 + i * 0.02,
                      type: "spring",
                      stiffness: 200
                    }
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <br />
              {"elevate customer experiences, and future-proof".split("").map((char, i) => (
                <motion.span
                  key={`line2-${i}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 1.0 + i * 0.02,
                      type: "spring",
                      stiffness: 200
                    }
                  }}
                >
                  {char}
                </motion.span>
              ))}
              <br />
              {"your business.".split("").map((char, i) => (
                <motion.span
                  key={`line3-${i}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 1.2 + i * 0.02,
                      type: "spring",
                      stiffness: 200
                    }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { 
                  delay: 0.1,
                  type: "spring",
                  stiffness: 300
                }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  yoyo: Infinity,
                  duration: 0.5
                }
              }}
            >
              <Link 
                href="/contact" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#218BC9] to-[#F55135] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                <span className="relative z-10 flex items-center gap-1">
                    <img 
                    src="/Ellipse 29.png" 
                    alt="icon" 
                    style={{ width: '30px', height: '30px' }} 
                    />
                    <span className="-translate-y-[2px] relative">onsult Us</span>
                </span>

                <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-[#F55135] to-[#218BC9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                />
                </Link>


            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative animated elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#218BC9] to-[#F55135]"
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: showContent ? 1 : 0,
          transition: { 
            delay: 1.8,
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
      />
    </div>
  );
}