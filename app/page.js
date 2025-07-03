
import ContactUsPage from '@/components/Contact'
import Diverse from '@/components/Diverse'
import FoundingTeamSection from '@/components/Foundin'
import Mandi from '@/components/Mod'
import Modulus from '@/components/Modulus'
import CircularMenu from '@/components/Solutions'
import React from 'react'
import Page from './hero/page'
import AboutPage from '@/components/AboutPage'
import OfferingSection from '@/components/Domain'
import Head from '@/components/Head'

function page() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <section id="home"><Page /></section>
      <section id="about"><AboutPage /></section>
      <section id="offering"><OfferingSection /></section>
      <section id="modulus"><Modulus /></section>
      <section id="mandi"><Mandi /></section>
      <section id="diverse"><Diverse /></section>
      <section id="circularMenu"><CircularMenu /></section>
      <section id="foundingTeam"><FoundingTeamSection /></section>
      <section id="contact"><ContactUsPage /></section>
    </div>
  )
}


export default page