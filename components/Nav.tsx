'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Arrow } from './Arrow'

const ZEFFY = 'https://www.zeffy.com/donation-form/e6583dcc-fd51-4fee-9e71-19062c76afde'

interface NavProps {
  barVisible: boolean
}

type DropItem = { label: string; sub: string; href: string }
type MenuEntry =
  | { label: string; href: string }
  | { label: string; items: DropItem[] }

const MENU: MenuEntry[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    items: [
      { label: 'Our Story & Mission', sub: 'Why we started — and why we can’t stop.', href: '/#about' },
      { label: 'Leadership & Governance', sub: 'Our executive and technology lineup.', href: '/leadership' },
    ],
  },
  {
    label: 'Our Impact',
    items: [
      { label: 'Domestic Pipeline (U.S.)', sub: 'K-12 support & college readiness in Florida.', href: '/impact/domestic' },
      { label: 'International Pipeline (Africa)', sub: 'Education, water & academy pathways.', href: '/impact/international' },
    ],
  },
  { label: 'Get Involved', href: '/#get-involved' },
]

export function Nav({ barVisible }: NavProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(pathname !== '/')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      // Determine whether the section currently under the nav line is dark.
      const sections = document.querySelectorAll('[data-section]')
      let isDark = false
      let found = false
      sections.forEach(s => {
        const r = s.getBoundingClientRect()
        if (r.top < 110 && r.bottom > 110) {
          found = true
          isDark = (s as HTMLElement).dataset.dark === '1'
        }
      })
      // Pages that don't declare sections above the fold default to a dark hero.
      setDark(found ? isDark : true)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`nav ${scrolled ? 'scrolled' : ''} ${dark ? 'on-dark' : ''}`}
        style={{ color: dark ? 'var(--chalk)' : 'var(--ink)', top: barVisible ? 44 : 0 }}
      >
        <Link href="/" className="nav-logo">
          <div className="crest">E</div>
          <span>EJJE Incorporated</span>
        </Link>

        <div className="nav-links">
          {MENU.map(entry =>
            'href' in entry ? (
              <Link key={entry.label} href={entry.href} className="nav-link">
                {entry.label}
              </Link>
            ) : (
              <div key={entry.label} className="nav-item">
                <button className="nav-trigger" aria-haspopup="true">
                  {entry.label}
                  <svg className="nav-caret" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="nav-dropdown" role="menu">
                  {entry.items.map(item => (
                    <Link key={item.href} href={item.href} role="menuitem">
                      <span className="d-title">{item.label}</span>
                      <span className="d-sub">{item.sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
          <a
            href={ZEFFY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '10px 18px', fontSize: 13, marginLeft: 8, textDecoration: 'none' }}
          >
            Donate <Arrow />
          </a>
        </div>

        <button
          className={`nav-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">×</button>
        {MENU.map(entry =>
          'href' in entry ? (
            <Link key={entry.label} href={entry.href} onClick={() => setMobileOpen(false)}>
              {entry.label}
            </Link>
          ) : (
            <div key={entry.label}>
              <div className="mm-group-label">{entry.label}</div>
              {entry.items.map(item => (
                <Link key={item.href} href={item.href} className="mm-sub" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          )
        )}
        <a
          href={ZEFFY}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary big"
          onClick={() => setMobileOpen(false)}
          style={{ textDecoration: 'none' }}
        >
          Donate Securely <Arrow />
        </a>
      </div>
    </>
  )
}
