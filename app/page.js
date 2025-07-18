'use client'

import ContactUsPage from '@/components/Contact'
import Diverse from '@/components/Diverse'
import FoundingTeamSection from '@/components/Foundin'
import Mandi from '@/components/Mod'
import Modulus from '@/components/Modulus'
import CircularMenu from '@/components/Solutions'
import React, { useState, useEffect } from 'react'
import Page from './hero/page'
import AboutPage from '@/components/AboutPage'
import OfferingSection from '@/components/Domain'
import Head from '@/components/Head'

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <section id="home">
        <Page />
      </section>

      <section id="about" style={{
        marginTop: isMobile ? '-50px' : '-100px',
        paddingBottom: isMobile ? '40px' : '60px'
      }}>
        <AboutPage />
      </section>

      <section id="offering" style={{
        padding: isMobile ? '40px 0' : '60px 0'
      }}>
        <OfferingSection />
      </section>

      <section id="modulus" style={{
        padding: isMobile ? '40px 0' : '60px 0'
      }}>
        <Modulus />
      </section>

      {/* <section id="mandi"><Mandi /></section> */}

      <section id="diverse" style={{
        padding: isMobile ? '40px 0' : '60px 0'
      }}>
        <Diverse />
      </section>

      <section id="circularMenu" style={{
        padding: isMobile ? '40px 0' : '60px 0',
        
        zIndex:'-1',
      }}>
        <CircularMenu />
      </section>

      <section id="foundingTeam" style={{
        marginTop: isMobile ? '40px' : '',
        zIndex:'1',
      }}>
        <FoundingTeamSection />
      </section>

      <section id="contact" style={{
        padding: isMobile ? '40px 0' : '60px 0'
      }}>
        <ContactUsPage />
      </section>
    </div>
  )
}

export default HomePage