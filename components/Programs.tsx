'use client'

import { useState } from 'react'
import { Polaroid } from './Polaroid'
import { Arrow } from './Arrow'

const BASE = '/images/'

const programs = [
  {
    name: 'Domestic Education',
    age: 'U.S. · K–12 + College Prep',
    tagline: 'Closing the gap for students at home.',
    desc: 'We support underserved students across the United States with the tools they need to succeed in school and beyond — from school supplies and tutoring to college prep and youth leadership initiatives.',
    facts: [
      ['Focus', 'Low-income U.S. communities'],
      ['Programs', 'Supplies · Tutoring · Mentorship'],
      ['Plus', 'After-school + college prep'],
      ['Anchor city', 'Tampa Bay, FL'],
    ],
    caption: 'Local students, local impact',
    src: BASE + 'f1f6a4a4d537b2455634692bf08cddb0.jpg',
  },
  {
    name: 'International Education',
    age: 'Global · Africa-focused',
    tagline: 'Sending children back to school.',
    desc: 'Across The Gambia, Tanzania, Kenya, Uganda, Ghana, and other regions we partner with, we sponsor school fees, send textbooks and learning materials, support teachers, and help build classroom environments where children can actually learn.',
    facts: [
      ['Countries', 'Gambia · Tanzania · Kenya · Uganda · Ghana'],
      ['Programs', 'School fees · Books · Classrooms'],
      ['Partners', 'Local educators + NGOs'],
      ['Reach', 'Multiple countries'],
    ],
    caption: 'International outreach',
    src: BASE + '23160504a0476d0ab685a3ba2b314cec.jpg',
  },
  {
    name: 'Community Support',
    age: 'Domestic + Global',
    tagline: 'Removing barriers to learning.',
    desc: 'Education only works when basic needs are met. We run nutrition drives, mental wellness initiatives, family support programs, and healthcare equipment delivery — building the foundation that lets kids show up for school.',
    facts: [
      ['Focus', 'Wraparound support'],
      ['Programs', 'Nutrition · Wellness · Family aid'],
      ['Plus', 'Medical supply drops abroad'],
      ['Where', 'U.S. + Africa'],
    ],
    caption: 'Community drives',
    src: BASE + 'e8083a5366ee30e9f432285f1bc87fcf.jpg',
  },
  {
    name: 'Youth Empowerment',
    age: 'Ages 8 – 18',
    tagline: 'Sports, leadership, and mentorship.',
    desc: 'Our roots are in youth sports, and we still believe in the power of mentorship through play and creative arts. Today this runs alongside our education work — keeping young people engaged, confident, and supported.',
    facts: [
      ['Focus', 'Personal + academic growth'],
      ['Programs', 'Mentorship · Leadership · Arts'],
      ['Plus', 'Coaching clinics (Gambia)'],
      ['Aim', 'Confidence + opportunity'],
    ],
    caption: 'Mentorship in action',
    src: BASE + '8f69da0331e26d475b1fb7791cfb55bf.jpg',
  },
]

export function Programs() {
  const [active, setActive] = useState(0)

  return (
    <section id="programs" className="section on-pitch" data-section="programs" data-dark="1">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ fontSize: 26, marginBottom: 12 }}>what we do</div>
            <h2 className="section-title">Four pillars. <em>One mission.</em></h2>
          </div>
          <p>Education at the center — at home and around the world. Mentorship and community work alongside.</p>
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
              <Polaroid
                dark
                tilt="tilt-l"
                caption={programs[active].caption}
                src={programs[active].src}
                alt={programs[active].name}
              />
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
              <a
                href="https://www.zeffy.com/donation-form/e6583dcc-fd51-4fee-9e71-19062c76afde"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ textDecoration: 'none' }}
              >
                Support this program <Arrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
