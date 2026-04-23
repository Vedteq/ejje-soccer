'use client'

import { useState } from 'react'
import { Arrow } from './Arrow'

type Role = 'player' | 'parent' | 'volunteer'

export function Join() {
  const [role, setRole] = useState<Role>('player')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [age, setAge] = useState('')
  const [program, setProgram] = useState('')
  const [volunteerRole, setVolunteerRole] = useState('')
  const [zip, setZip] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`EJJE Registration — ${role} — ${firstName} ${lastName}`)
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\n` +
      `Role: ${role}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      (role !== 'volunteer' ? `Player age: ${age}\nProgram: ${program}\n` : `Volunteer role: ${volunteerRole}\n`) +
      `Neighborhood/ZIP: ${zip}`
    )
    window.location.href = `mailto:soccer@ejje.net?subject=${subject}&body=${body}`
  }

  return (
    <section id="join" className="section" data-section="join">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 140 }}>
            <div className="eyebrow" style={{ fontSize: 26, marginBottom: 12 }}>join the club</div>
            <h2 className="section-title" style={{ marginBottom: 24 }}>Three clicks. <em>No fees.</em></h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 440, marginBottom: 32, lineHeight: 1.65 }}>
              Registration is always free and always open. Fill in the form — it opens your email app pre-filled and sends straight to Coach Eddie. We&#39;ll follow up within 48 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {([
                ['1', 'Fill out the form', 'Takes about two minutes.'],
                ['2', 'Hit send in your email', 'Goes directly to soccer@ejje.net.'],
                ['3', 'Show up to your first practice', "We'll have gear ready for you."],
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
            <div style={{ marginTop: 32, padding: '16px 20px', background: 'var(--chalk-2)', borderRadius: 'var(--radius)', fontSize: 14 }}>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>Prefer to call?</div>
              <a href="tel:+18133556671" style={{ color: 'var(--accent)', fontWeight: 600 }}>813-355-6671</a>
              <span style={{ color: 'var(--muted)', marginLeft: 8 }}>— Coach Eddie picks up.</span>
            </div>
          </div>
          <div className="join-form">
            <form onSubmit={handleSubmit}>
              <div className="form-field" style={{ marginBottom: 20 }}>
                <label>I&#39;m signing up as</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                  {(['player', 'parent', 'volunteer'] as Role[]).map(r => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setRole(r)}
                      style={{
                        padding: 14, borderRadius: 'var(--radius)',
                        border: `1px solid ${role === r ? 'var(--accent)' : 'var(--line)'}`,
                        background: role === r ? 'var(--accent)' : 'var(--chalk)',
                        color: role === r ? '#fff' : 'var(--ink)',
                        fontFamily: 'var(--font-inter), system-ui, sans-serif', fontSize: 13, fontWeight: 500,
                        textTransform: 'capitalize', cursor: 'pointer',
                      }}
                    >
                      {r === 'parent' ? 'Parent / Guardian' : r}
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>First name</label>
                  <input required placeholder="Mariana" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="form-field">
                  <label>Last name</label>
                  <input required placeholder="Reyes" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Email</label>
                  <input type="email" required placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-field">
                  <label>Phone</label>
                  <input required placeholder="(813) 555-0100" value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
              </div>
              {role !== 'volunteer' && (
                <div className="form-row">
                  <div className="form-field">
                    <label>Player age</label>
                    <select required value={age} onChange={e => setAge(e.target.value)}>
                      <option value="" disabled>Select age</option>
                      {Array.from({ length: 13 }, (_, i) => 5 + i).map(a => (
                        <option key={a} value={a}>{a} years old</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field">
                    <label>Preferred program</label>
                    <select required value={program} onChange={e => setProgram(e.target.value)}>
                      <option value="" disabled>Select program</option>
                      <option>Little Kickers (5–7)</option>
                      <option>Youth League (8–12)</option>
                      <option>Academy Squad (13–17)</option>
                      <option>Girls Initiative</option>
                      <option>Summer Camp</option>
                    </select>
                  </div>
                </div>
              )}
              {role === 'volunteer' && (
                <div className="form-field" style={{ marginBottom: 16 }}>
                  <label>How would you like to help?</label>
                  <select required value={volunteerRole} onChange={e => setVolunteerRole(e.target.value)}>
                    <option value="" disabled>Select a role</option>
                    <option>Coach (we&#39;ll train you)</option>
                    <option>Assistant coach</option>
                    <option>Referee</option>
                    <option>Game-day volunteer</option>
                    <option>Academic tutor</option>
                    <option>Fundraising / ops</option>
                  </select>
                </div>
              )}
              <div className="form-field" style={{ marginBottom: 24 }}>
                <label>Neighborhood or zip</label>
                <input required placeholder="e.g. Spring Hill, 34609" value={zip} onChange={e => setZip(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 18 }}>
                Open email to send registration <Arrow />
              </button>
              <p style={{ marginTop: 12, fontSize: 12, color: 'var(--muted)', textAlign: 'center' }}>
                This opens your email app pre-filled — just hit send. Goes to soccer@ejje.net.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
