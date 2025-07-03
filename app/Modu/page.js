
import ContactUsPage from '@/components/Contact'
import Diverse from '@/components/Diverse'
import FoundingTeamSection from '@/components/Foundin'
import Mandi from '@/components/Mod'
import Modulus from '@/components/Modulus'
import CircularMenu from '@/components/Solutions'
import React from 'react'

function page() {
  return (
    <div style={{ overflowX: 'hidden' }}>
        <Modulus />
        <Mandi />
        <Diverse />
        <CircularMenu />
        <ContactUsPage />
        <FoundingTeamSection />
        
    </div>
  )
}

export default page