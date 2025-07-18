'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Montserrat } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

function Headerr() {
  const router = useRouter()
  const [activeId, setActiveId] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const observerRef = useRef(null)

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'offering' },
    { name: 'Solutions', id: 'circularMenu' },
    { name: 'Team', id: 'foundingTeam' },
    { name: 'Contact', id: 'contact' },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth-scroll / Router push
  const handleClick = (id) => {
    setActiveId(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else router.push(`/#${id}`)
  }

  // Intersection Observer for active section
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (observerRef.current) observerRef.current.disconnect()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    observerRef.current = observer

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      className={montserrat.className}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '1rem 2rem',
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.9)',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.05)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
      }}
    >
      <div style={{
        width: '100%',
        maxWidth: '1400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo with Subtle Hover Effect */}
        <motion.div
          onClick={() => router.push('/')}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
          }}
        >
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{
              height: '40px',
              objectFit: 'contain',
            }}
          />
        </motion.div>

        {/* Navigation with Underline Animation */}
        <nav style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
        }}>
          {navItems.map((item) => {
            const isActive = activeId === item.id
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  position: 'relative',
                }}
              >
                <button
                  onClick={() => handleClick(item.id)}
                  style={{
                    padding: '0.5rem 0',
                    fontSize: '0.95rem',
                    fontWeight: isActive ? '600' : '500',
                    color: isActive ? '#000' : 'rgba(0, 0, 0, 0.7)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.name}
                </button>
                {isActive && (
                  <motion.div
                    layoutId="navUnderline"
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#000',
                      borderRadius: '2px',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.div>
            )
          })}
        </nav>

        {/* CTA Button with Subtle Shadow */}
        <motion.button
          onClick={() => handleClick('contact')}
          whileHover={{ 
            y: -2,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: '0.6rem 1.5rem',
            borderRadius: '6px',
            fontSize: '0.95rem',
            fontWeight: '600',
            color: '#fff',
            backgroundColor: '#000',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          Get in Touch
        </motion.button>
      </div>
    </motion.header>
  )
}

export default Headerr