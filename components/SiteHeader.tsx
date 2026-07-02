'use client'

import { useState } from 'react'
import { DonateBar } from './DonateBar'
import { Nav } from './Nav'

// Site-wide chrome: the closeable donate bar + the fixed navigation.
// Lives in the root layout so every page (home + sub-pages) shares it.
export function SiteHeader() {
  const [barVisible, setBarVisible] = useState(true)

  return (
    <>
      {barVisible && <DonateBar onClose={() => setBarVisible(false)} />}
      <Nav barVisible={barVisible} />
    </>
  )
}
