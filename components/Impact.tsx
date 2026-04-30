import { Polaroid } from './Polaroid'

const BASE = '/images/'

const stories = [
  {
    quote: "With EJJE, I finally have the books I need to keep up in class.",
    name: 'Jordan',
    role: 'Student · United States',
    caption: 'Local · school-supply support',
    src: BASE + 'f1f6a4a4d537b2455634692bf08cddb0.jpg',
  },
  {
    quote: "I dream of being a teacher. EJJE helped me return to school.",
    name: 'Amina',
    role: 'Student · The Gambia',
    caption: 'International · back to school',
    src: BASE + '23160504a0476d0ab685a3ba2b314cec.jpg',
  },
  {
    quote: "Eddie is smart, patient and passionate. If you want your child supported by a true professional, call Eddie.",
    name: 'Jay F. Campbell',
    role: 'Parent · EJJE community',
    caption: 'EJJE · in the field',
    src: BASE + '8f69da0331e26d475b1fb7791cfb55bf.jpg',
  },
]

export function Impact() {
  return (
    <section id="impact" className="section" data-section="impact">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ fontSize: 26, marginBottom: 12 }}>stories of hope</div>
            <h2 className="section-title">Changing lives <em>locally and globally.</em></h2>
          </div>
          <p>One U.S. student, one international student, one community story. Multiply by hundreds.</p>
        </div>
        <div className="stories">
          {stories.map((s, i) => (
            <div key={i} className="story">
              <Polaroid tilt={i % 2 === 0 ? 'tilt-l' : 'tilt-r'} caption={s.caption} src={s.src} alt={s.caption} />
              <div className="story-quote">&#34;{s.quote}&#34;</div>
              <div className="story-attrib"><strong>{s.name}</strong> · {s.role}</div>
            </div>
          ))}
        </div>

        {/* Letter from the field — Tanzania */}
        <div style={{
          marginTop: 72,
          padding: '48px 48px 48px 40px',
          background: 'var(--pitch)',
          borderRadius: 'var(--radius-lg)',
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 48,
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'flex-end' }}>
            <Polaroid
              tilt="tilt-l"
              caption="Kathy · Young Life Africa"
              src={BASE + '1faa7b756369a734c8c78987a3801a35.png'}
              alt="Handwritten letter page 1"
              style={{ flex: '0 0 auto', width: 180 }}
            />
            <Polaroid
              tilt="tilt-r"
              caption="Tanzania · from the field"
              src={BASE + 'e6abebbb8e2d7a15d6a04b6f7e7335b3.png'}
              alt="Handwritten letter page 2"
              style={{ flex: '0 0 auto', width: 180, marginBottom: 24 }}
            />
          </div>
          <div>
            <div className="eyebrow" style={{ fontSize: 18, marginBottom: 16, color: 'var(--accent-2)' }}>
              a letter from the field
            </div>
            <p style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontSize: 20,
              fontStyle: 'italic',
              lineHeight: 1.5,
              color: 'var(--chalk)',
              marginBottom: 20,
            }}>
              &#8220;I want to express my gratitude for all of you who so generously made it possible for us to outfit youth in the poorest slum in Tanzania. Until recently they had been playing with a ball made of trash and no other equipment. The teenagers who received your gifts were moved to tears of joy. You all brought them dignity and hope.&#8221;
            </p>
            <div style={{ fontSize: 14, color: 'rgba(250,244,232,0.6)' }}>
              <strong style={{ color: 'var(--chalk)' }}>Kathy Conner</strong> · Young Life Africa · Tanzania
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
