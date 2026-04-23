export function Partners() {
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

  return (
    <section className="section" style={{ paddingTop: 48, paddingBottom: 72, background: 'var(--chalk-2)' }} data-section="partners">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div className="eyebrow" style={{ fontSize: 22, marginBottom: 8 }}>our partners</div>
          <h2 className="section-title" style={{ margin: '0 auto' }}>The community <em>behind us.</em></h2>
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px 24px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {partners.map((p) => (
            <div key={p} style={{
              padding: '10px 22px',
              border: '1.5px solid var(--line)',
              borderRadius: 'var(--radius)',
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--ink)',
              letterSpacing: '0.02em',
              background: 'white',
            }}>
              {p}
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 32, fontSize: 14, color: 'var(--muted)' }}>
          Want to partner with EJJE? Email <a href="mailto:soccer@ejje.net" style={{ color: 'var(--accent)' }}>soccer@ejje.net</a>
        </p>
      </div>
    </section>
  )
}
