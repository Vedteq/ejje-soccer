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
    { min: 0, text: "Every dollar puts cleats on a kid's feet." },
    { min: 25, text: `$${finalAmount} — provides a jersey + shorts for one player, one season.` },
    { min: 50, text: `$${finalAmount} — sponsors a Little Kicker for an entire 10-week season.` },
    { min: 100, text: `$${finalAmount} — cleats, uniform, and meals for one Youth League player.` },
    { min: 250, text: `$${finalAmount} — funds a full Academy Squad travel weekend for two players.` },
    { min: 500, text: `$${finalAmount} — underwrites a summer camp scholarship. 8 weeks. 2 meals a day. One kid.` },
  ]
  const impact = [...impacts].reverse().find(i => finalAmount >= i.min) || impacts[0]

  return (
    <section id="donate" className="section on-pitch" data-section="donate">
      <div className="wrap">
        <div className="donate-wrap">
          <div>
            <div className="eyebrow" style={{ fontSize: 26, marginBottom: 12 }}>please give</div>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Keep the game <em>free.</em>
            </h2>
            <p className="muted" style={{ fontSize: 18, maxWidth: 480, marginBottom: 28, lineHeight: 1.6 }}>
              EJJE is 100% donor-funded. No membership fees, no registration costs, no &#34;equipment surcharge.&#34;
              Your gift is what keeps our fields open and our kids on them.
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
              <div style={{ fontSize: 13, color: 'rgba(250,244,232,0.6)', marginBottom: 6 }}>Also giving via GoFundMe?</div>
              <a
                href="https://gofund.me/a826a227"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-2)', fontSize: 14, fontWeight: 600 }}
              >
                Help Medina United U12 Boys → FL Cup International
              </a>
            </div>
          </div>
          <div className="donate-card">
            <div style={{ fontFamily: 'var(--font-caveat), cursive', fontSize: 28, color: 'var(--accent)', marginBottom: 12, lineHeight: 1 }}>
              make a gift →
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
      </div>
    </section>
  )
}
