'use client'

import { useState } from 'react'
import { Polaroid } from './Polaroid'
import { Arrow } from './Arrow'

const programs = [
  {
    name: 'Little Kickers', age: 'ages 5–7', tagline: 'First touches, first friends.',
    desc: 'A Saturday-morning intro to the game for our youngest players. Coordination, sharing, and fun — no scorekeeping, no pressure, just joy.',
    facts: [['Schedule', 'Saturdays · 10–11am'], ['Cohort', '60 kids / season'], ['Coaches', '8 volunteers + 4 teen assistants'], ['Season', 'Fall + Spring · 10 weeks each']],
    caption: 'First day jitters — Cohort 24',
  },
  {
    name: 'Youth League', age: 'ages 8–12', tagline: 'Where skills get real.',
    desc: 'Two weeknight practices plus a Saturday match. Mixed-skill teams to build both confidence and competition. Academic tutoring bundled in.',
    facts: [['Schedule', 'Tue/Thu 5:30pm + Sat games'], ['Cohort', '320 kids across 18 teams'], ['Coaches', '24 volunteers, CDC-certified'], ['Season', 'Year-round · 3 seasons']],
    caption: 'Saturday league — West Field',
  },
  {
    name: 'Academy Squad', age: 'ages 13–17', tagline: 'College prep on the pitch.',
    desc: 'For committed players eyeing high-school varsity or college ball. Higher-intensity training, travel tournaments, academic check-ins every Friday.',
    facts: [['Schedule', '4x/week + weekend travel'], ['Cohort', '80 players, tryouts each August'], ['Coaches', 'Licensed USSF Grade D+ staff'], ['Placements', '19 alumni on college rosters']],
    caption: 'Travel tourney — 2025',
  },
  {
    name: 'Girls Initiative', age: 'all ages', tagline: 'Built for her game.',
    desc: 'Dedicated girls-only practices and teams at every age level, with female coaches and mentors. Launched 2018 — now 40% of our total enrollment.',
    facts: [['Schedule', 'Parallel to all programs'], ['Cohort', '326 girls in 2025–26'], ['Mentors', '22 female coaches + alumni'], ['Launched', '2018']],
    caption: 'Girls Night Lights',
  },
  {
    name: 'Summer Camp', age: 'ages 6–14', tagline: 'Eight weeks. Two meals a day. Zero cost.',
    desc: 'Full-day summer program: morning training, lunch, quiet reading hour, afternoon scrimmages. Keeps kids active and fed when school is out.',
    facts: [['Dates', 'June 15 – August 8, 2026'], ['Cohort', '180 kids daily'], ['Meals', 'Breakfast, lunch, snack — daily'], ['Transport', 'Door-to-door bus included']],
    caption: "Summer '25 · Week 1",
  },
]

export function Programs() {
  const [active, setActive] = useState(0)

  return (
    <section id="programs" className="section on-pitch" data-section="programs">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ fontSize: 26, marginBottom: 12 }}>what we do</div>
            <h2 className="section-title">Five programs. <em>One club.</em></h2>
          </div>
          <p>From first kicks at five to college recruitment at seventeen, there&#39;s a place for every kid.</p>
        </div>
        <div className="programs">
          <div className="program-nav">
            {programs.map((p, i) => (
              <button key={i} className={`program-item ${i === active ? 'active' : ''}`} onClick={() => setActive(i)}>
                <span className="title">{p.name}</span>
                <span className="age">{p.age}</span>
              </button>
            ))}
          </div>
          <div className="program-panel" key={active} style={{ animation: 'fadeIn .4s ease' }}>
            <div className="program-photo-wrap">
              <Polaroid dark tilt="tilt-l" caption={programs[active].caption} label="replace w/ real photo" />
            </div>
            <div className="program-copy">
              <h3>{programs[active].tagline}</h3>
              <p>{programs[active].desc}</p>
              <div className="program-facts">
                {programs[active].facts.map(([k, v], i) => (
                  <div key={i} className="program-fact">
                    <span className="k">{k}</span>
                    <span className="v">{v}</span>
                  </div>
                ))}
              </div>
              <a href="#join" className="btn btn-primary">Sign a kid up <Arrow /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
