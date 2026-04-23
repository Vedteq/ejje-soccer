'use client'

import { Arrow } from './Arrow'

interface DonateBarProps {
  onClose: () => void
}

export function DonateBar({ onClose }: DonateBarProps) {
  return (
    <div className="donate-bar">
      <span className="script bar-hide-sm">Help us keep soccer free →</span>
      <span className="bar-msg">
        Help Medina United U12 Boys — <strong>GoFundMe campaign live now.</strong>
      </span>
      <a href="https://gofund.me/a826a227" target="_blank" rel="noopener noreferrer" className="bar-cta">
        Give now <Arrow />
      </a>
      <button className="bar-close" onClick={onClose} aria-label="Close">×</button>
    </div>
  )
}
