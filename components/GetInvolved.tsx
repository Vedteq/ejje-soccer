import { Arrow } from './Arrow'
import { GetInvolvedForm } from './Join'

const premierPartners = [
  {
    name: 'Qoollege',
    tagline: 'AI-powered college matching, scholarships, essays & test prep.',
    url: 'https://qoollege.com',
    logo: '/images/logo-qoollege.png',
    logoBg: '#1a1a2e',
  },
  {
    name: 'Capt Sports Agency',
    tagline: 'Athlete management, scouting & development — Brooksville, FL.',
    url: 'https://www.captinstitute.com',
    logo: '/images/logo-capt.png',
    logoBg: '#ffffff',
  },
]

const partners = [
  'Hernando Soccer Club Springhill',
  'Medina United Football Academy',
  'Sunshine for Life',
  'SKP Travels',
  'My Life Moon',
  'Indigat',
  'Gorex Consulting',
  'Value Dental Springhill',
  'Springhill Florida',
]

const ways = [
  {
    title: 'Volunteer',
    desc: 'Tutor, mentor, or help us run school-supply drives. We need real humans more than anything else.',
    cta: 'Volunteer with us',
    href: '#get-involved-form',
  },
  {
    title: 'Partner',
    desc: 'Schools, businesses, and community orgs — partner with us to expand education access locally and abroad.',
    cta: 'Become a partner',
    href: '#get-involved-form',
  },
  {
    title: 'Sponsor a child',
    desc: 'Direct support for one student — school fees, supplies, mentorship — in the U.S. or overseas.',
    cta: 'Sponsor a student',
    href: '#get-involved-form',
  },
]

export function GetInvolved() {
  return (
    <section id="get-involved" className="section" data-section="get-involved" style={{ background: 'var(--chalk-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ fontSize: 26, marginBottom: 12 }}>get involved</div>
            <h2 className="section-title">Three ways to <em>show up.</em></h2>
          </div>
          <p>Donate, give time, or partner with us. Every contribution opens a door for a child.</p>
        </div>

        {/* Three ways cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          marginBottom: 64,
        }}>
          {ways.map(w => (
            <div key={w.title} style={{
              padding: '32px 28px',
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--line)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}>
              <h3 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 26, color: 'var(--ink)', margin: 0 }}>
                {w.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--muted)', flex: 1, margin: 0 }}>
                {w.desc}
              </p>
              <a
                href={w.href}
                className="btn btn-dark"
                style={{ alignSelf: 'flex-start', textDecoration: 'none', marginTop: 8 }}
              >
                {w.cta} <Arrow />
              </a>
            </div>
          ))}
        </div>

        {/* Premier Partners */}
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ fontSize: 18, marginBottom: 24, textAlign: 'center' }}>premier partners</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 860, margin: '0 auto' }}>
            {premierPartners.map(p => {
              const dark = p.logoBg !== '#ffffff'
              return (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 16,
                    padding: '40px 36px 32px',
                    background: p.logoBg,
                    borderRadius: 'var(--radius-lg)',
                    border: '2px solid var(--accent)',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    style={{
                      maxHeight: 72,
                      maxWidth: '80%',
                      objectFit: 'contain',
                      display: 'block',
                      mixBlendMode: dark ? 'normal' : 'multiply',
                    }}
                  />
                  <div style={{ fontSize: 13, color: dark ? 'rgba(255,255,255,0.65)' : 'var(--muted)', lineHeight: 1.5 }}>
                    {p.tagline}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600 }}>
                    {p.url.replace('https://', '')} →
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Partners */}
        <div style={{ marginBottom: 64 }}>
          <div className="eyebrow" style={{ fontSize: 18, marginBottom: 24, textAlign: 'center' }}>our sponsors &amp; partners</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 16px', justifyContent: 'center' }}>
            {partners.map(p => (
              <div key={p} style={{
                padding: '10px 20px',
                border: '1.5px solid var(--line)',
                borderRadius: 'var(--radius)',
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--ink)',
                background: 'white',
              }}>
                {p}
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 24, fontSize: 14, color: 'var(--muted)' }}>
            Want to partner with EJJE? Email <a href="mailto:soccer@ejje.net" style={{ color: 'var(--accent)' }}>soccer@ejje.net</a>
          </p>
        </div>

        {/* Form + sidebar */}
        <div id="get-involved-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 140 }}>
            <div className="eyebrow" style={{ fontSize: 22, marginBottom: 12 }}>tell us about yourself</div>
            <h3 className="display" style={{ fontSize: 44, marginBottom: 24 }}>One form. <em>Three minutes.</em></h3>
            <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 440, marginBottom: 32, lineHeight: 1.65 }}>
              Tell us how you&#39;d like to get involved. The form opens your email pre-filled and sends straight to Coach Eddie. We follow up within 48 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {([
                ['1', 'Pick how you want to help', 'Volunteer, partner, or sponsor.'],
                ['2', 'Hit send in your email', 'Goes directly to soccer@ejje.net.'],
                ['3', 'We follow up', 'A real human, within 48 hours.'],
              ] as const).map(([n, t, s]) => (
                <div key={n} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-caveat), cursive', fontSize: 44, color: 'var(--accent)', width: 40, lineHeight: 1 }}>{n}</span>
                  <div>
                    <strong style={{ fontSize: 15 }}>{t}</strong>
                    <div style={{ fontSize: 13, color: 'var(--muted)' }}>{s}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, padding: '16px 20px', background: 'white', borderRadius: 'var(--radius)', fontSize: 14, border: '1px solid var(--line)' }}>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>Prefer to call?</div>
              <a href="tel:+18133556671" style={{ color: 'var(--accent)', fontWeight: 600 }}>813-355-6671</a>
              <span style={{ color: 'var(--muted)', marginLeft: 8 }}>— Coach Eddie picks up.</span>
            </div>
          </div>
          <GetInvolvedForm />
        </div>
      </div>
    </section>
  )
}
