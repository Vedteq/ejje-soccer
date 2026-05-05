'use client'

import { useState } from 'react'
import { Arrow } from './Arrow'

type Role = 'volunteer' | 'partner' | 'sponsor'

const ROLE_LABELS: Record<Role, string> = {
  volunteer: 'Volunteer',
  partner: 'Partner / Sponsor',
  sponsor: 'Sponsor a child',
}

const ROLE_OPTIONS: Record<Role, { label: string; options: string[] }> = {
  volunteer: {
    label: 'How would you like to help?',
    options: ['Tutor / academic support', 'Mentor', 'School supply drive coordinator', 'Fundraising / events', 'Outreach / community organizing'],
  },
  partner: {
    label: 'Type of partnership',
    options: ['Corporate sponsorship', 'School / institution partnership', 'Community organization', 'In-kind donation (supplies, services)', 'Other'],
  },
  sponsor: {
    label: 'Sponsorship interest',
    options: ['Sponsor a U.S. student', 'Sponsor an international student', 'Sponsor a classroom', 'Recurring monthly sponsorship', 'Open to suggestions'],
  },
}

export function GetInvolvedForm() {
  const [role, setRole] = useState<Role>('volunteer')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [interest, setInterest] = useState('')
  const [location, setLocation] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`EJJE — ${ROLE_LABELS[role]} — ${firstName} ${lastName}`)
    const body = encodeURIComponent(
      `Type: ${ROLE_LABELS[role]}\n` +
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Interest: ${interest}\n` +
      `Location: ${location}\n\n` +
      `Message:\n${message}`
    )
    window.location.href = `mailto:soccer@ejje.net?subject=${subject}&body=${body}`
  }

  return (
    <div className="join-form">
      <form onSubmit={handleSubmit}>
        <div className="form-field" style={{ marginBottom: 20 }}>
          <label>I&#39;d like to</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
            {(['volunteer', 'partner', 'sponsor'] as Role[]).map(r => (
              <button
                type="button"
                key={r}
                onClick={() => { setRole(r); setInterest('') }}
                style={{
                  padding: 14, borderRadius: 'var(--radius)',
                  border: `1px solid ${role === r ? 'var(--accent)' : 'var(--line)'}`,
                  background: role === r ? 'var(--accent)' : 'var(--chalk)',
                  color: role === r ? '#fff' : 'var(--ink)',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif', fontSize: 13, fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                {ROLE_LABELS[r]}
              </button>
            ))}
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label>First name</label>
            <input required placeholder="Jane" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className="form-field">
            <label>Last name</label>
            <input required placeholder="Doe" value={lastName} onChange={e => setLastName(e.target.value)} />
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
        <div className="form-field" style={{ marginBottom: 16 }}>
          <label>{ROLE_OPTIONS[role].label}</label>
          <select required value={interest} onChange={e => setInterest(e.target.value)}>
            <option value="" disabled>Select one</option>
            {ROLE_OPTIONS[role].options.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="form-field" style={{ marginBottom: 16 }}>
          <label>City / Location (optional)</label>
          <input placeholder="e.g. Tampa Bay, FL or remote" value={location} onChange={e => setLocation(e.target.value)} />
        </div>
        <div className="form-field" style={{ marginBottom: 24 }}>
          <label>Tell us a bit more (optional)</label>
          <textarea
            rows={3}
            placeholder="Anything you'd like Coach Eddie to know..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            style={{
              width: '100%',
              padding: 12,
              fontSize: 14,
              fontFamily: 'inherit',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--line)',
              background: 'var(--chalk)',
              color: 'var(--ink)',
              resize: 'vertical',
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: 18 }}>
          Open email to send <Arrow />
        </button>
        <p style={{ marginTop: 12, fontSize: 12, color: 'var(--muted)', textAlign: 'center' }}>
          This opens your email app pre-filled — just hit send. Goes to soccer@ejje.net.
        </p>
      </form>
    </div>
  )
}

// Backwards-compat export
export const Join = GetInvolvedForm
