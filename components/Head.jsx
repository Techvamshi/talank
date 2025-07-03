'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Montserrat } from 'next/font/google'
import { useRouter } from 'next/navigation'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] })

function Head() {
  const router = useRouter()
  const [activeId, setActiveId] = useState('home')
  const observerRef = useRef(null)                // keep a ref to disconnect later

  const navItems = [
    { name: 'Home',     id: 'home' },
    { name: 'About',    id: 'about' },
    { name: 'Service',  id: 'offering' },
    { name: 'Solution', id: 'circularMenu' },
    { name: 'Team',     id: 'foundingTeam' },
    { name: 'Contact',  id: 'contact' },
  ]

  /* ───────────────────────────
     Smooth‑scroll / Router push
  ─────────────────────────── */
  const handleClick = (id) => {
    setActiveId(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else    router.push(`/#${id}`)
  }

  /* ───────────────────────────
     Highlight while scrolling
  ─────────────────────────── */
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Disconnect previous observer (hot‑reload in dev)
    if (observerRef.current) observerRef.current.disconnect()

    // rootMargin shrinks viewport so section is 'active' near the middle
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 } // 40% from top, 50% from bottom
    )
    observerRef.current = observer

    // Observe the sections that actually exist on this page
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])  // run once on mount

  /* ───────────────────────────
     Mark‑up (unchanged visually)
  ─────────────────────────── */
  return (
    <div style={{
      position: 'fixed',
      top: 10, left: 0, right: 0, zIndex: 1000,
      width: '100%', display: 'flex', justifyContent: 'center',
      padding: '0 1rem',
      fontFamily: montserrat.style.fontFamily,
      overflowX: 'hidden', boxSizing: 'border-box',
      backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
    }}>
      <div style={{
        position: 'relative', width: '100%', maxWidth: '1200px',
        height: '43px', transform: 'translateX(25px)',
      }}>
        <img src="/header.png" alt="Header" style={{
          width: '100%', height: '40px', objectFit: 'cover', borderRadius: '8px',
        }}/>

        {/* Logo (click → home) */}
        <img
          src="/logo.png"
          alt="Logo"
          onClick={() => router.push('/')}
          style={{
            position: 'absolute', top: '-1px', left: '-29px',
            height: '41px', width: '180px', cursor: 'pointer',
          }}
        />

        <div style={{
          position: 'absolute', top: 0, marginTop: '-2px',
          height: '100%', display: 'flex', alignItems: 'center',
          gap: '38px', paddingRight: '20px', marginLeft: '300px',
        }}>
          {navItems.map((item) => {
            const isActive = activeId === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                style={{
                  padding: '1px 14px', borderRadius: '12px',
                  fontSize: '15.5px', fontWeight: 500,
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
                  cursor: 'pointer', transition: 'all 0.3s ease',
                }}
              >
                {item.name}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Head
