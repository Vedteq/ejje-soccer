import Link from 'next/link'
import { Arrow } from './Arrow'

const ZEFFY = 'https://www.zeffy.com/donation-form/e6583dcc-fd51-4fee-9e71-19062c76afde'

export type Pillar = { title: string; text: string; highlight?: string }
export type Fact = { n: string; sup?: string; l: string }

export interface PipelinePageProps {
  crumb: string
  eyebrow: string
  title: string
  titleEm: string
  lead: string
  tags: string[]
  pillarsHeading: string
  pillars: Pillar[]
  facts: Fact[]
  otherHref: string
  otherLabel: string
  ctaTitle: string
  ctaText: string
}

export function PipelinePage({
  crumb, eyebrow, title, titleEm, lead, tags,
  pillarsHeading, pillars, facts, otherHref, otherLabel, ctaTitle, ctaText,
}: PipelinePageProps) {
  return (
    <>
      <header className="page-hero" data-section="pipe-hero" data-dark="1">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link> · Our Impact · {crumb}
          </div>
          <div className="eyebrow">{eyebrow}</div>
          <h1>
            {title} <em>{titleEm}</em>
          </h1>
          <p className="lead">{lead}</p>
          <div className="page-tags">
            {tags.map(t => <span key={t} className="page-tag">{t}</span>)}
          </div>
        </div>
      </header>

      <section className="section" data-section="pillars">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ fontSize: 24, marginBottom: 12 }}>core pillars</div>
              <h2 className="section-title">{pillarsHeading}</h2>
            </div>
          </div>
          <div className="pillars">
            {pillars.map((p, i) => (
              <div key={p.title} className="pillar">
                <div className="pillar-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  {p.highlight && <div className="pillar-highlight">{p.highlight}</div>}
                </div>
              </div>
            ))}
          </div>

          <div className="pipeline-facts">
            {facts.map(f => (
              <div key={f.l} className="pipeline-fact">
                <div className="n">{f.n}{f.sup && <sup>{f.sup}</sup>}</div>
                <div className="l">{f.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-pitch" data-section="pipeline-cta" data-dark="1">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ fontSize: 24, marginBottom: 12 }}>support this pipeline</div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>{ctaTitle}</h2>
            <p className="muted" style={{ fontSize: 18, maxWidth: 520, marginBottom: 28, lineHeight: 1.6 }}>{ctaText}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={ZEFFY} target="_blank" rel="noopener noreferrer" className="btn btn-primary big" style={{ textDecoration: 'none' }}>
                <span>♥</span> Donate Securely
              </a>
              <Link href={otherHref} className="btn btn-ghost big">{otherLabel} <Arrow /></Link>
            </div>
          </div>
          <div className="zero-fee" style={{ alignSelf: 'center' }}>
            <span className="badge">100%</span>
            <span><strong>100% of your gift goes directly to programs</strong> — zero platform fees, processed securely via Zeffy.</span>
          </div>
        </div>
      </section>
    </>
  )
}
