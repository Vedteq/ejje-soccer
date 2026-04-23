import { Polaroid } from './Polaroid'
import { Arrow } from './Arrow'

const BASE = 'https://ejjeinc.org/_assets/media/'

const coaches = [
  {
    name: 'Eddie Oyakhilome',
    role: 'Founder · Executive Director',
    caption: 'Coach Eddie · 2009',
    src: BASE + '8f69da0331e26d475b1fb7791cfb55bf.jpg',
  },
  {
    name: 'Kevin Barrett',
    role: 'Head Coach · 10+ years alongside Coach Eddie',
    caption: 'Coach Kevin',
    src: BASE + '6fe0726388d3ef18bcd43d0646a84132.jpg',
  },
]

export function Coaches() {
  return (
    <section id="coaches" className="section" data-section="coaches">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ fontSize: 26, marginBottom: 12 }}>the staff</div>
            <h2 className="section-title">Coached by your <em>neighbors.</em></h2>
          </div>
          <p>Every EJJE coach lives in the community they serve. Most are alumni. All are volunteers.</p>
        </div>

        {/* Known coaches */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40, maxWidth: 600, marginBottom: 60 }}>
          {coaches.map((c, i) => (
            <div key={i} className="coach">
              <Polaroid
                tilt={i % 2 === 0 ? 'tilt-l' : 'tilt-r'}
                caption={c.caption}
                src={c.src}
                alt={c.name}
              />
              <div>
                <div className="coach-name">{c.name}</div>
                <div className="coach-role">{c.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Africa outreach */}
        <div style={{
          marginBottom: 40,
          padding: '28px 32px',
          background: 'var(--chalk-2)',
          borderRadius: 'var(--radius-lg)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 24,
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <Polaroid
              tilt="tilt-l"
              caption="Gambia coaching clinic"
              src={BASE + 'e8083a5366ee30e9f432285f1bc87fcf.jpg'}
              alt="Africa outreach"
              style={{ width: 120, flexShrink: 0 }}
            />
            <div>
              <div className="eyebrow" style={{ fontSize: 16, marginBottom: 6 }}>International partners</div>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>Medina United Football Academy</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>
                EJJE partners with Medina United in The Gambia — running coaches diploma courses certified by United Soccer Coaches (USA) and supporting youth development across West Africa.
              </div>
            </div>
          </div>
        </div>

        {/* Volunteer CTA */}
        <div style={{
          padding: 32,
          background: 'var(--pitch)',
          color: 'var(--chalk)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 40,
          flexWrap: 'wrap',
        }}>
          <div>
            <h3 className="display" style={{ fontSize: 36, marginBottom: 8 }}>Coach with us.</h3>
            <p style={{ color: 'rgba(250,244,232,0.75)', fontSize: 15, maxWidth: 500 }}>
              Open spots every season. No experience required — we train you, certify you, and cover background-check costs. Email us or fill out the volunteer form below.
            </p>
          </div>
          <a href="#join" className="btn btn-chalk" style={{ whiteSpace: 'nowrap' }}>Apply to volunteer <Arrow /></a>
        </div>
      </div>
    </section>
  )
}
