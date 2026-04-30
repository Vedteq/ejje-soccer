'use client'

import { Arrow } from './Arrow'

interface DonateBarProps {
  onClose: () => void
}

export function DonateBar({ onClose }: DonateBarProps) {
  return (
    <div className="donate-bar">
      <span className="script bar-hide-sm">Education changes everything →</span>
      <span className="bar-msg">
        Help us provide education to <strong>500 underserved students</strong> this year.
      </span>
      <a
        href="https://www.zeffy.com/donation-form/e6583dcc-fd51-4fee-9e71-19062c76afde"
        target="_blank"
        rel="noopener noreferrer"
        className="bar-cta"
      >
        Donate now <Arrow />
      </a>
      <button className="bar-close" onClick={onClose} aria-label="Close">×</button>
    </div>
  )
}
