import Link from 'next/link'
import { Arrow } from './Arrow'

const pipelines = [
  {
    flag: '🇺🇸  Domestic Pipeline',
    title: 'Academic readiness in Florida',
    desc: 'Closing the equity gap for students in low-income Tampa Bay communities — where sports become the hook for classroom accountability.',
    points: [
      'K-12 tutoring & school-supply drives',
      'College-readiness mentorship & profiling',
      'Youth empowerment through sports',
    ],
    href: '/impact/domestic',
    cta: 'Explore the U.S. pipeline',
  },
  {
    flag: '🌍  International Pipeline',
    title: 'Development in Sub-Saharan Africa',
    desc: 'Elite athletic development paired with the critical community infrastructure that lets children stay enrolled and in the game.',
    points: [
      'Educational sponsorships (Babylon School, The Gambia)',
      'Clean-water borehole installations',
      'Academy pathways with Medina United FC',
    ],
    href: '/impact/international',
    cta: 'Explore the Africa pipeline',
  },
]

export function Pipelines() {
  return (
    <section id="impact-pipelines" className="section" data-section="impact-pipelines" style={{ background: 'var(--chalk-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ fontSize: 26, marginBottom: 12 }}>our impact</div>
            <h2 className="section-title">Two pipelines. <em>One mission.</em></h2>
          </div>
          <p>We run two distinct, measurable pipelines — one at home in Florida, one across Sub-Saharan Africa. Follow the money into either.</p>
        </div>
        <div className="pipeline-cards">
          {pipelines.map(p => (
            <Link key={p.href} href={p.href} className="pipeline-card">
              <span className="pc-flag">{p.flag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul>
                {p.points.map(pt => <li key={pt}>{pt}</li>)}
              </ul>
              <span className="pc-cta">{p.cta} <Arrow /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
