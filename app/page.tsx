'use client'

import { useState } from 'react'
import { DonateBar } from '@/components/DonateBar'
import { Nav } from '@/components/Nav'
import { Hero, FloatDonate, ValuesStrip, Letter, Stats } from '@/components/Hero'
import { Programs } from '@/components/Programs'
import { Impact } from '@/components/Impact'
import { Events } from '@/components/Events'
import { Donate } from '@/components/Donate'
import { Coaches } from '@/components/Coaches'
import { DonorWall } from '@/components/DonorWall'
import { Join } from '@/components/Join'
import { Footer } from '@/components/Footer'

export default function Home() {
  const [barVisible, setBarVisible] = useState(true)

  return (
    <>
      {barVisible && <DonateBar onClose={() => setBarVisible(false)} />}
      <Nav barVisible={barVisible} />
      <Hero />
      <ValuesStrip />
      <Letter />
      <Stats />
      <Programs />
      <Impact />
      <Events />
      <Donate />
      <Coaches />
<DonorWall />
      <Join />
      <Footer />
      <FloatDonate />
    </>
  )
}
