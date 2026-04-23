'use client'

import { useState } from 'react'
import { Arrow } from './Arrow'

const events = [
  {
    m: 'Spring', d: '2026', title: 'Spring Season',
    meta: 'Spring Hill, FL · All ages',
    desc: 'Spring season is underway. Contact us to register your player or enquire about open spots — registration is always free.',
  },
  {
    m: 'Summer', d: '2026', title: 'Summer Camp',
    meta: 'Spring Hill, FL · Ages 6–14 · Full-day',
    desc: 'Eight weeks of full-day summer camp. Morning training, lunch, afternoon scrimmages. Transport and meals included at no cost.',
  },
  {
    m: 'Fall', d: '2026', title: 'Fall Season',
    meta: 'Spring Hill, FL · All programs',
    desc: 'All five programs run through fall. Little Kickers, Youth League, Academy Squad, Girls Initiative — spots open every season.',
  },
  {
    m: 'Ongoing', d: '', title: 'Coaching Clinics',
    meta: 'Gambia · Florida · International',
    desc: 'EJJE partners with Medina United Football Academy to run coaching certification clinics locally and internationally. Open to aspiring coaches.',
  },
  {
    m: 'Ongoing', d: '', title: 'Community Outreach',
    meta: 'Spring Hill + Africa',
    desc: 'Collection drives, healthcare supply drops, and soccer equipment donations to underserved communities in Florida and Africa.',
  },
]

export function Events() {
  const [featured, setFeatured] = useState(0)

  return (
    <section id="events" className="section" style={{ background: 'var(--chalk-2)' }} data-section="events">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ fontSize: 26, marginBottom: 12 }}>come hang out</div>
            <h2 className="section-title">See you on the <em>pitch.</em></h2>
          </div>
          <p>For exact dates, locations, and schedules contact us directly — we&#39;ll get you sorted.</p>
        </div>
        <div className="events-wrap">
          <div className="event-list">
            {events.map((e, i) => (
              <div key={i} className={`event ${i === featured ? 'active' : ''}`} onClick={() => setFeatured(i)}>
                <div className="event-date">
                  <div className="m" style={{ fontSize: e.d ? undefined : 11 }}>{e.m}</div>
                  <div className="d" style={{ fontSize: e.d ? undefined : 20 }}>{e.d || '●'}</div>
                </div>
                <div>
                  <div className="event-title">{e.title}</div>
                  <div className="event-meta">{e.meta}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="event-feature">
            <div style={{
              background: 'var(--pitch)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px 32px 28px',
              marginBottom: 24,
              color: 'var(--chalk)',
            }}>
              <div className="eyebrow" style={{ fontSize: 20, marginBottom: 8, color: 'var(--accent-2)' }}>
                {events[featured].m}{events[featured].d ? ` ${events[featured].d}` : ''}
              </div>
              <h3 style={{ marginBottom: 12, color: 'var(--chalk)' }}>{events[featured].title}</h3>
              <p style={{ color: 'rgba(250,244,232,0.75)', fontSize: 15, lineHeight: 1.65, marginBottom: 0 }}>
                {events[featured].desc}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href="mailto:soccer@ejje.net"
                className="btn btn-dark"
                style={{ justifyContent: 'center', textDecoration: 'none' }}
              >
                Email us about this <Arrow />
              </a>
              <a
                href="tel:+18133556671"
                className="btn btn-ghost"
                style={{ color: 'var(--ink)', borderColor: 'var(--line)', justifyContent: 'center', textDecoration: 'none' }}
              >
                Call 813-355-6671
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
