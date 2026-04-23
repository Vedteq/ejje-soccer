'use client'

import { useEffect, useState } from 'react'
import { Arrow } from './Arrow'

interface NavProps {
  barVisible: boolean
}

export function Nav({ barVisible }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [section, setSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('[data-section]')
      let cur = 'hero'
      sections.forEach(s => {
        const r = s.getBoundingClientRect()
        if (r.top < 100 && r.bottom > 100) cur = (s as HTMLElement).dataset.section || 'hero'
      })
      setSection(cur)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onDark = section === 'hero' || section === 'programs' || section === 'donate'

  return (
    <nav
      className={`nav ${scrolled ? 'scrolled' : ''} ${onDark ? 'on-dark' : ''}`}
      style={{ color: onDark ? 'var(--chalk)' : 'var(--ink)', top: barVisible ? 44 : 0 }}
    >
      <a href="#hero" className="nav-logo">
        <div className="crest">E</div>
        <span>EJJE Soccer Academy</span>
      </a>
      <div className="nav-links">
        <a href="#mission" className="nav-link">Mission</a>
        <a href="#programs" className="nav-link">Programs</a>
        <a href="#impact" className="nav-link">Kids</a>
        <a href="#events" className="nav-link">Events</a>
        <a href="#coaches" className="nav-link">Coaches</a>
        <a href="#donors" className="nav-link">Donors</a>
        <a href="#join" className="nav-link">Join</a>
        <a href="#donate" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 13, marginLeft: 8 }}>
          Donate <Arrow />
        </a>
      </div>
    </nav>
  )
}
