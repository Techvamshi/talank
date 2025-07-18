'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Montserrat } from 'next/font/google'
import { useRouter } from 'next/navigation'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] })

function Head() {
  const router = useRouter()
  const [activeId, setActiveId] = useState('home')
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const observerRef = useRef(null)

  const navItems = [
    { name: 'Home',     id: 'home' },
    { name: 'About',    id: 'about' },
    { name: 'Service',  id: 'offering' },
    { name: 'Solution', id: 'circularMenu' },
    { name: 'Team',     id: 'foundingTeam' },
    { name: 'Contact',  id: 'contact' },
  ]

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const handleClick = (id) => {
    setActiveId(id)
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else    router.push(`/#${id}`)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (observerRef.current) observerRef.current.disconnect()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
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
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: isMobile ? '0.5rem 1rem' : '0.5rem 1rem',
      fontFamily: montserrat.style.fontFamily,
      boxSizing: 'border-box',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        height: isMobile ? '50px' : '43px',
      }}>
        {/* Header Background */}
        <img 
          src="/modifiedheader.png" 
          alt="Header Background" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />

        {/* Logo - Show only on mobile */}
{isMobile && (
  <div style={{
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    cursor: 'pointer',
  }} onClick={() => handleClick('home')}>
    <img 
      src="/TalankLogo.png" 
      alt="Logo" 
      style={{
        height: '30px',
        objectFit: 'contain',
      }}
    />
  </div>
)}


        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            top: 0,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: '38px',
            paddingRight: '20px',
            marginLeft: '50px',
            zIndex: 1,
          }}>
            {navItems.map((item) => {
              const isActive = activeId === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  style={{
                    padding: '1px 14px',
                    borderRadius: '12px',
                    fontSize: '15.5px',
                    fontWeight: 500,
                    color: isActive ? '#fff' : '#ffffffcc',
                    background: isActive ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                    border: isActive
                      ? '1px solid rgba(255,255,255,0.2)'
                      : '1px solid transparent',
                    backdropFilter: isActive ? 'blur(8px)' : 'none',
                    WebkitBackdropFilter: isActive ? 'blur(8px)' : 'none',
                    boxShadow: isActive
                      ? '0 0 10px rgba(255,255,255,0.2)'
                      : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.name}
                </button>
              )
            })}
          </div>
        )}

        {/* Mobile Menu Open Button (☰) */}
        {isMobile && !menuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '6px',
              color: 'white',
              fontSize: '1.3rem',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2,
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              marginTop:'-2px',
            }}
          >
            ☰
          </button>
        )}

        {/* Mobile Fullscreen Menu */}
        {isMobile && menuOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            zIndex: 999,
            padding: '5rem 1rem 2rem',
          }}>
            {/* Close Button inside menu */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontSize: '1.5rem',
                color: 'white',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Close Menu"
            >
              ✕
            </button>

            {/* Nav Items in mobile */}
            {navItems.map((item) => {
              const isActive = activeId === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  style={{
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#fff' : '#ffffffcc',
                    background: isActive ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                    border: isActive
                      ? '1px solid rgba(255,255,255,0.3)'
                      : '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    maxWidth: '300px',
                  }}
                >
                  {item.name}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Head
