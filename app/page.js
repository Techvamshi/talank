'use client'

import ContactUsPage from '@/components/Contact'

import FoundingTeamSection from '@/components/Foundin'

import CircularMenu from '@/components/Solutions'
import React, { useState, useEffect } from 'react'
import Page from './hero/page'

import TALANKLoader from '@/components/TALANKLoader'
import Aboutt from '@/components/Aboutt'
import ConsultingSolution from '@/components/ConsultingSolution'
import TechSolutions from '@/components/TechSolutions'
import Consulting from '@/components/Consulting'
import BusinessGrowthConsulting from '@/components/first'

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Simulate loading (replace with your actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <TALANKLoader />;
  }

  return (
    <div style={{ overflowX: 'hidden' }}>
      <section id="home">
        <Page />
      </section>

      <section id="about" style={{
        marginTop: isMobile ? '-50px' : '-100px',
        paddingBottom: isMobile ? '40px' : '60px'
      }}>
        <Aboutt style={{
  justifyContent: 'center'
}} />
      </section>

    <BusinessGrowthConsulting />

      <section style={{
        transform:'scale(0.8)',
      }}>
          <Consulting  />
        </section>

      

      <section id="modulus" style={{
        padding: isMobile ? '40px 0' : '60px 0'
      }}>
        {/* <Modulus /> */}
        <ConsultingSolution />

        
        
      </section>
      <section id=''>
        <TechSolutions />

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


  // <section id="offering" style={{
  //       padding: isMobile ? '40px 0' : '60px 0'
  //     }}>
  //       {/* <OfferingSection /> */}
  //     </section>