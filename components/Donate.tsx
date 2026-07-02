'use client'

import { useState } from 'react'
import { Arrow } from './Arrow'

export function Donate() {
  const [amount, setAmount] = useState(50)
  const [custom, setCustom] = useState('')
  const [freq, setFreq] = useState<'once' | 'monthly'>('monthly')
  const amounts = [25, 50, 100, 250]
  const finalAmount = custom ? parseInt(custom) || 0 : amount

  const impacts = [
    { min: 0, text: "Every dollar puts a book in a child's hands." },
    { min: 25, text: `$${finalAmount} — provides a backpack of school supplies for one child.` },
    { min: 50, text: `$${finalAmount} — funds an after-school tutoring session for a student.` },
    { min: 100, text: `$${finalAmount} — supports an international student's school fees + books for a term.` },
    { min: 250, text: `$${finalAmount} — sponsors education for a student, U.S. or abroad, for a full term.` },
    { min: 500, text: `$${finalAmount} — helps build or upgrade a classroom — desks, books, learning tools.` },
  ]
  const impact = [...impacts].reverse().find(i => finalAmount >= i.min) || impacts[0]

  return (
    <section id="donate" className="section on-pitch" data-section="donate" data-dark="1">
      <div className="wrap">
        <div className="donate-wrap">
          <div>
            <div className="eyebrow" style={{ fontSize: 26, marginBottom: 12 }}>support education</div>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Open the door to <em>opportunity.</em>
            </h2>
            <p className="muted" style={{ fontSize: 18, maxWidth: 480, marginBottom: 28, lineHeight: 1.6 }}>
              EJJE is 100% donor-funded. Every gift becomes school supplies, tutoring, school fees, or classroom resources — for a child in the U.S. or abroad who needs them.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 500, marginBottom: 32 }}>
              <div>
                <div className="eyebrow" style={{ fontSize: 20, marginBottom: 4 }}>Tax-deductible</div>
                <p className="muted" style={{ fontSize: 13 }}>Registered 501(c)(3) nonprofit</p>
              </div>
              <div>
                <div className="eyebrow" style={{ fontSize: 20, marginBottom: 4 }}>Direct giving</div>
                <p className="muted" style={{ fontSize: 13 }}>Processed securely via Zeffy — zero platform fees.</p>
              </div>
            </div>
            <div style={{ padding: '20px 24px', background: 'rgba(250,244,232,0.07)', borderRadius: 'var(--radius)', border: '1px solid rgba(250,244,232,0.12)' }}>
              <div style={{ fontSize: 13, color: 'rgba(250,244,232,0.6)', marginBottom: 6 }}>Active campaign</div>
              <a
                href="https://gofund.me/a826a227"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-2)', fontSize: 14, fontWeight: 600 }}
              >
                Help Medina United U12 Boys → FL Cup International (GoFundMe)
              </a>
            </div>
          </div>
          <div className="donate-card">
            <div style={{ fontFamily: 'var(--font-caveat), cursive', fontSize: 28, color: 'var(--accent)', marginBottom: 12, lineHeight: 1 }}>
              support a student →
            </div>
            <div className="donate-toggle">
              <button className={freq === 'once' ? 'active' : ''} onClick={() => setFreq('once')}>One-time</button>
              <button className={freq === 'monthly' ? 'active' : ''} onClick={() => setFreq('monthly')}>Monthly</button>
            </div>
            <div className="donate-amounts">
              {amounts.map(a => (
                <button
                  key={a}
                  className={`donate-amount ${!custom && amount === a ? 'active' : ''}`}
                  onClick={() => { setAmount(a); setCustom('') }}
                >
                  ${a}
                </button>
              ))}
            </div>
            <div className="donate-custom">
              <span className="currency">$</span>
              <input
                type="number"
                placeholder="Other amount"
                value={custom}
                onChange={e => setCustom(e.target.value)}
              />
            </div>
            <div className="donate-impact">{impact.text}</div>
            <div className="zero-fee">
              <span className="badge">100%</span>
              <span><strong>100% of your gift goes directly to programs</strong> — zero platform fees. Processed securely via Zeffy.</span>
            </div>
            <a
              href="https://www.zeffy.com/donation-form/e6583dcc-fd51-4fee-9e71-19062c76afde"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: 18, textDecoration: 'none' }}
            >
              <span>♥</span> Donate ${finalAmount || 0}{freq === 'monthly' ? '/mo' : ''} <Arrow />
            </a>
            <p style={{ marginTop: 14, fontSize: 12, color: 'var(--muted)', textAlign: 'center' }}>
              Secure checkout via Zeffy · Receipt emailed instantly
            </p>
          </div>
        </div>

        {/* Cost-to-impact: translate dollars into physical deliverables */}
        <div style={{ marginTop: 72 }}>
          <div className="eyebrow" style={{ fontSize: 20, marginBottom: 6, color: 'var(--accent-2)' }}>your dollars at work</div>
          <h3 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 30, fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--chalk)', marginBottom: 8 }}>
            What your gift delivers.
          </h3>
          <div className="cost-grid">
            {[
              { amt: '$25', desc: 'Equips a student with a fully loaded backpack of school supplies.' },
              { amt: '$50', desc: 'Sponsors an international youth athlete’s academic tuition and books for a month.' },
              { amt: '$2,500 – $5,000', desc: 'Directly funds a community-wide clean-water borehole pipe installation.' },
            ].map(c => (
              <div key={c.amt} className="cost-card">
                <div className="amt">{c.amt}</div>
                <div className="desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
