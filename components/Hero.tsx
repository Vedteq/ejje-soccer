'use client'

import { Arrow } from './Arrow'

export function Hero() {
  return (
    <section id="hero" className="hero" data-section="hero">
      <div className="hero-bg" style={{
        backgroundImage: 'url(https://ejjeinc.org/_assets/media/e1430256e49d3a3842046121f6d80484.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,40,20,0.72)' }} />
      </div>
      <div className="hero-content">
        <div>
          <div className="eyebrow" style={{ fontSize: 26, marginBottom: 20, transform: 'rotate(-2deg)', display: 'inline-block' }}>
            — since 2009, and still free —
          </div>
          <h1 className="display">
            Every kid deserves a<br />
            <span className="script">chance to play.</span>
          </h1>
          <p className="hero-lead">
            We&#39;re a nonprofit keeping youth soccer free for kids in Spring Hill, FL — and equipping communities as far as Africa.
            No registration fees. No &#34;equipment surcharge.&#34; Just cleats, a ball, and a team.
            <br /><br />
            <strong>We can only keep it that way with your help.</strong>
          </p>
          <div className="hero-ctas">
            <a
              href="https://www.zeffy.com/donation-form/e6583dcc-fd51-4fee-9e71-19062c76afde"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary big"
              style={{ textDecoration: 'none' }}
            >
              <span>♥</span> Donate today
            </a>
            <a href="#join" className="btn btn-ghost big">Register a player</a>
          </div>
          <div className="hero-footnote">
            <span>501(c)(3) nonprofit</span>
            <span>Spring Hill, FL</span>
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
            <span className="k">Social</span>
            <a href="https://www.facebook.com/ejjesoccer" target="_blank" rel="noopener noreferrer" className="v" style={{ color: 'var(--accent-2)', textDecoration: 'none' }}>@ejjesoccer</a>
          </div>
          <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(250,244,232,0.12)' }}>
            <a
              href="#join"
              className="btn btn-chalk"
              style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
            >
              Register a player free <Arrow />
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
  const items = ['Teamwork', 'Discipline', 'Respect', 'Joy', 'Grit', 'Belonging']
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

export function Letter() {
  return (
    <section id="mission" className="section" data-section="mission" style={{ background: 'var(--chalk-2)' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="eyebrow" style={{ fontSize: 28 }}>A letter from our founder</div>
          <h2 className="section-title" style={{ margin: '12px auto 0' }}>
            Why we started. <em>Why we can&#39;t stop.</em>
          </h2>
        </div>
        <div className="letter">
          <p>
            In 2009, I saw kids in our neighborhood with real talent and nowhere to play — not because they lacked skill, but because their families couldn&#39;t afford registration fees, cleats, or uniforms. That&#39;s when EJJE was born: a promise that no child would ever be turned away because of money.
          </p>
          <p>
            Seventeen years later, we&#39;ve put thousands of kids on the pitch without charging them a single dollar. Cleats on us. Uniforms on us. Transport, meals, tournament fees — all on us. And our mission reaches beyond Spring Hill — to Africa, where we&#39;ve supported coaching clinics, clean water projects, and orphanage homes.
          </p>
          <p>
            The reason we can do this is simple: people like you give. Not corporations. Not government grants. Neighbors, parents, alumni, and strangers who believe a kid shouldn&#39;t have to be born rich to play a game.
          </p>
          <p>
            So this is my ask. If you can spare $25, or $50, or whatever feels right — please do. It goes straight to a kid who needs cleats. And it means we get to keep saying yes.
          </p>
          <p>Thank you for being part of this.</p>
          <div className="signature">— Coach Eddie</div>
          <div className="sig-meta">Eddie Oyakhilome · Founder &amp; Executive Director, EJJE Soccer Academy</div>
        </div>
      </div>
    </section>
  )
}

export function Stats() {
  const stats = [
    { num: '800', sup: '+', label: 'Kids playing for free every year across all age groups' },
    { num: '17', sup: '', label: 'Years running — since 2009, never charged a dime' },
    { num: '5', sup: '', label: 'Programs: Little Kickers, Youth League, Academy Squad, Girls Initiative, Summer Camp' },
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
