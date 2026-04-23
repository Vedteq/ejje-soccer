import { Arrow } from './Arrow'

const partners = [
  'Sunshine for Life',
  'Capt Sports Agency',
  'Medina United Football Academy',
  'Qoollege',
  'SKP Travels',
  'My Life Moon',
  'Indigat',
  'Gorex Consulting',
  'Value Dental',
  'Springhill Florida',
]

export function DonorWall() {
  return (
    <section id="donors" className="section" style={{ background: 'var(--chalk-2)' }} data-section="donors">
      <div className="wrap">
        <div className="donor-wall-intro">
          <div className="script" style={{ fontSize: 32, color: 'var(--accent)', marginBottom: 8, transform: 'rotate(-2deg)', display: 'inline-block' }}>
            from all of us —
          </div>
          <h2 className="section-title">Thank you.</h2>
          <p style={{ marginTop: 20, color: 'var(--muted)', fontSize: 16, lineHeight: 1.65 }}>
            Every kid on our field is here because a neighbor, a parent, an alum, or a stranger decided to give.
            Thank you to every donor, sponsor, and partner who makes this possible.
          </p>
        </div>

        {/* Partners */}
        <div style={{ marginBottom: 56 }}>
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
        </div>

        {/* Individual donor CTA */}
        <div style={{
          background: 'var(--pitch)',
          borderRadius: 'var(--radius-lg)',
          padding: '40px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 32,
          flexWrap: 'wrap',
        }}>
          <div>
            <h3 className="display" style={{ fontSize: 32, color: 'var(--chalk)', marginBottom: 8 }}>Add your name.</h3>
            <p style={{ color: 'rgba(250,244,232,0.7)', fontSize: 15, maxWidth: 460 }}>
              Every gift — of any size — keeps a kid on the field. Donate via Zeffy and your name joins the wall next season.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 220 }}>
            <a
              href="https://www.zeffy.com/donation-form/e6583dcc-fd51-4fee-9e71-19062c76afde"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-chalk"
              style={{ justifyContent: 'center', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              Donate via Zeffy <Arrow />
            </a>
            <a
              href="https://gofund.me/a826a227"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textAlign: 'center', fontSize: 13, color: 'var(--accent-2)', textDecoration: 'none' }}
            >
              GoFundMe — Help Medina United U12 Boys →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
