'use client'

import { Arrow } from './Arrow'

export function Hero() {
  return (
    <section id="hero" className="hero" data-section="hero">
      <div className="hero-bg" style={{
        backgroundImage: 'url(/images/e1430256e49d3a3842046121f6d80484.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,40,20,0.74)' }} />
      </div>
      <div className="hero-content">
        <div>
          <div className="eyebrow" style={{ fontSize: 26, marginBottom: 20, transform: 'rotate(-2deg)', display: 'inline-block' }}>
            — at home and around the world —
          </div>
          <h1 className="display">
            Education for <br />
            <span className="script">every child.</span>
          </h1>
          <p className="hero-lead">
            Millions of underserved children lack access to essential learning resources.
            EJJE Incorporated provides education, mentorship, and community support for children and families
            <strong> in the U.S. and internationally.</strong>
            <br /><br />
            <strong>Your gift opens the door to lifelong opportunity.</strong>
          </p>
          <div className="hero-ctas">
            <a
              href="https://www.zeffy.com/donation-form/e6583dcc-fd51-4fee-9e71-19062c76afde"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary big"
              style={{ textDecoration: 'none' }}
            >
              <span>♥</span> Donate now
            </a>
            <a href="#programs" className="btn btn-ghost big">Support a program</a>
          </div>
          <div className="hero-footnote">
            <span>501(c)(3) nonprofit</span>
            <span>Spring Hill, FL · Africa</span>
            <span>Since 2009</span>
          </div>
        </div>
        <div className="impact-card">
          <div className="impact-card-title">Get in touch</div>
          <h3 style={{ marginBottom: 20 }}>We&#39;d love to hear from you.</h3>
          <div className="impact-row">
            <span className="k">Phone</span>
            <a href="tel:+18133556671" className="v" style={{ color: 'var(--accent-2)', textDecoration: 'none' }}>813-355-6671</a>
          </div>
          <div className="impact-row">
            <span className="k">Email</span>
            <a href="mailto:soccer@ejje.net" className="v" style={{ color: 'var(--accent-2)', textDecoration: 'none' }}>soccer@ejje.net</a>
          </div>
          <div className="impact-row">
            <span className="k">Location</span>
            <span className="v">Spring Hill, FL</span>
          </div>
          <div className="impact-row">
            <span className="k">Reach</span>
            <span className="v">U.S. + Africa</span>
          </div>
          <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(250,244,232,0.12)' }}>
            <a
              href="#get-involved"
              className="btn btn-chalk"
              style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
            >
              Get involved <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FloatDonate() {
  return (
    <a
      href="https://www.zeffy.com/donation-form/e6583dcc-fd51-4fee-9e71-19062c76afde"
      target="_blank"
      rel="noopener noreferrer"
      className="float-donate"
      style={{ textDecoration: 'none' }}
    >
      <span className="heart">♥</span> Donate
    </a>
  )
}

export function ValuesStrip() {
  const items = ['Education', 'Mentorship', 'Community', 'Opportunity', 'Belonging', 'Hope']
  const render = () => items.map((v, i) => (
    <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 48 }}>
      <em>{v}</em>
      <span className="dot-sep" />
    </span>
  ))
  return (
    <div className="values-strip">
      <div className="values-track">
        <span>{render()}</span>
        <span>{render()}</span>
      </div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="section" data-section="about" style={{ background: 'var(--chalk-2)' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="eyebrow" style={{ fontSize: 28 }}>About EJJE</div>
          <h2 className="section-title" style={{ margin: '12px auto 0' }}>
            Why we started. <em>Why we can&#39;t stop.</em>
          </h2>
        </div>

        {/* Mission + Vision panel */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 32,
          marginBottom: 56,
          maxWidth: 1100,
          margin: '0 auto 56px',
        }}>
          <div style={{ padding: '32px 36px', background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--line)' }}>
            <div className="eyebrow" style={{ fontSize: 16, marginBottom: 8, color: 'var(--accent)' }}>Our Mission</div>
            <p style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 19, lineHeight: 1.5, color: 'var(--ink)', margin: 0 }}>
              EJJE Incorporated provides domestic and international support to underserved and underprivileged children and families by expanding access to quality education, essential resources, and community development programs.
            </p>
          </div>
          <div style={{ padding: '32px 36px', background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--line)' }}>
            <div className="eyebrow" style={{ fontSize: 16, marginBottom: 8, color: 'var(--accent)' }}>Our Vision</div>
            <p style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 19, lineHeight: 1.5, color: 'var(--ink)', margin: 0 }}>
              A world — at home and abroad — where every child has equal access to education and every community has the tools to learn, grow, and thrive.
            </p>
          </div>
        </div>

        {/* Founder letter */}
        <div className="letter">
          <p>
            EJJE was founded in 2009 with a simple promise: no child should be turned away because of money. What began as free youth sports for kids in Spring Hill, Florida has grown — over the years — into something much larger.
          </p>
          <p>
            We saw that opportunity didn&#39;t stop at the field. The kids who needed cleats also needed school supplies. The communities we served at home had counterparts overseas — in Tanzania, in The Gambia — where children played with footballs made of trash and walked miles to schools without textbooks.
          </p>
          <p>
            Today, EJJE Incorporated is education-first. We provide school supplies, tutoring, and mentorship to underserved students in the U.S., and we sponsor school fees, classroom resources, and teacher training internationally. Sports, mentorship, and community work continue alongside, but education is the heart of what we do now — because education is the starting point for opportunity, stability, and generational change.
          </p>
          <p>
            We can do this because people like you give. Not corporations. Not government grants. Neighbors and strangers who believe a child shouldn&#39;t have to be born rich to learn.
          </p>
          <p>
            If you can spare $25, $50, or whatever feels right — please do. It buys a backpack of school supplies. It pays for a tutoring session. It funds a classroom thousands of miles away. And it means we get to keep saying yes.
          </p>
          <p>Thank you for being part of this.</p>
          <div className="signature">— Eddie</div>
          <div className="sig-meta">Eddie Oyakhilome · Founder &amp; Executive Director, EJJE Incorporated</div>
        </div>
      </div>
    </section>
  )
}

// Backwards-compat export — page.tsx may still import Letter
export const Letter = About

export function Stats() {
  const stats = [
    { num: '17', sup: '', label: 'Years serving children and families — since 2009' },
    { num: '500', sup: '+', label: 'Underserved students our 2026 campaign aims to support' },
    { num: '4', sup: '', label: 'Program areas: Domestic Ed · International Ed · Community · Mentorship' },
    { num: '2', sup: '', label: 'Continents — Spring Hill, FL and communities across Africa' },
  ]
  return (
    <section className="section" style={{ paddingTop: 60, paddingBottom: 100 }} data-section="stats">
      <div className="wrap">
        <div className="stats">
          {stats.map((s, i) => (
            <div key={i} className="stat">
              <div className="stat-num">{s.num}<sup>{s.sup}</sup></div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
