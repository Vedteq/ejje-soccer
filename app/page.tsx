'use client'

import { useState } from 'react'
import { DonateBar } from '@/components/DonateBar'
import { Nav } from '@/components/Nav'
import { Hero, FloatDonate, ValuesStrip, About, Stats } from '@/components/Hero'
import { Programs } from '@/components/Programs'
import { Impact } from '@/components/Impact'
import { Donate } from '@/components/Donate'
import { GetInvolved } from '@/components/GetInvolved'
import { Footer } from '@/components/Footer'

export default function Home() {
  const [barVisible, setBarVisible] = useState(true)

  return (
    <>
      {barVisible && <DonateBar onClose={() => setBarVisible(false)} />}
      <Nav barVisible={barVisible} />
      <Hero />
      <ValuesStrip />
      <About />
      <Stats />
      <Programs />
      <Impact />
      <Donate />
      <GetInvolved />
      <Footer />
      <FloatDonate />
    </>
  )
}
