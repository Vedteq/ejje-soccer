import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Leadership & Governance — EJJE Incorporated',
  description:
    'Meet the executive and technology leadership behind EJJE Incorporated — a registered 501(c)(3) nonprofit bridging academic readiness in Florida with athletic development and community infrastructure in Sub-Saharan Africa.',
}

type Bio = {
  name: string
  initials: string
  role: string
  text: string
  anchor?: string
}

const executive: Bio[] = [
  {
    name: 'Edwin Oyakhilome',
    initials: 'EO',
    role: 'Founder & President',
    text:
      'Edwin founded EJJE Incorporated to turn a lifetime in global soccer and nonprofit work into a durable engine for youth opportunity. He sets the organization’s visionary direction, stewards its two pipelines across Florida and Sub-Saharan Africa, and holds the founding relationships that keep programs running on the ground. His leadership pairs athletic credibility with disciplined nonprofit governance.',
    anchor:
      'Also serves as **Vice Chairman of The Salvation Army of Hernando County**, anchoring EJJE’s executive trust in the local community.',
  },
  {
    name: 'Linda Ghalieh',
    initials: 'LG',
    role: 'Director of Community & Public Relations',
    text:
      'Linda leads EJJE’s community outreach and public storytelling. She runs the logistics behind our school-supply distribution drives, manages media and press engagement, and maintains the day-to-day relationships with Florida school districts that keep our domestic programs connected to the families who need them. Her work translates program impact into stories donors and partners can see.',
  },
  {
    name: 'Michael Nicol',
    initials: 'MN',
    role: 'Sub-Saharan Liaison',
    text:
      'Michael is EJJE’s global credibility anchor, managing international logistics and on-the-ground project tracking across our African programs. He coordinates directly with West African academy partners, verifying that sponsored resources — from tuition to equipment to infrastructure — reach their intended destinations. His oversight gives institutional funders confidence that international dollars are delivered and documented.',
    anchor:
      'Coordinates on-the-ground delivery with West African academy partners including **Medina United FC** in The Gambia.',
  },
]

const technology: Bio[] = [
  {
    name: 'Goriola Deen',
    initials: 'GD',
    role: 'Strategic Technology',
    text:
      'Goriola provides strategic oversight of EJJE’s data pipelines and technological scalability. He focuses on maximizing the organization’s digital platform infrastructure so that programs, reporting, and donor engagement can grow without friction. His mandate is to ensure EJJE’s technology footprint scales with its mission across two continents.',
  },
  {
    name: 'Roshan Soni',
    initials: 'RS',
    role: 'Technology Architect',
    text:
      'Roshan designs and executes EJJE’s digital architecture, ensuring seamless EdTech application integration across the organization. He owns data security and the underlying platform systems that hold student, donor, and program records. His engineering discipline gives EJJE a secure, integrated technology foundation that meets the expectations of major institutional partners.',
  },
]

function BioCard({ bio }: { bio: Bio }) {
  return (
    <div className="bio-card">
      <div className="bio-avatar">{bio.initials}</div>
      <div className="bio-name">{bio.name}</div>
      <div className="bio-role">{bio.role}</div>
      <p className="bio-text">{bio.text}</p>
      {bio.anchor && (
        <div
          className="bio-anchor"
          dangerouslySetInnerHTML={{
            __html: bio.anchor.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'),
          }}
        />
      )}
    </div>
  )
}

export default function LeadershipPage() {
  return (
    <>
      <header className="page-hero" data-section="lead-hero" data-dark="1">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link> · About Us · Leadership &amp; Governance
          </div>
          <div className="eyebrow">structured for accountability</div>
          <h1>
            Leadership &amp; <em>Governance</em>
          </h1>
          <p className="lead">
            EJJE Incorporated is led by a structured executive and technology team built to earn the confidence of
            major foundations and institutional grant officers. Our lineup pairs decades of on-the-ground nonprofit
            and athletic experience with modern data and platform infrastructure.
          </p>
          <div className="page-tags">
            <span className="page-tag">Registered 501(c)(3)</span>
            <span className="page-tag">Two-pipeline governance</span>
            <span className="page-tag">Tampa Bay, FL · Sub-Saharan Africa</span>
          </div>
        </div>
      </header>

      <section className="section" data-section="leadership">
        <div className="wrap">
          <div className="leadership-group">
            <div className="leadership-group-head">
              <h2>Executive Leadership</h2>
              <span className="count">who runs EJJE</span>
            </div>
            <div className="bio-grid">
              {executive.map(b => <BioCard key={b.name} bio={b} />)}
            </div>
          </div>

          <div className="leadership-group">
            <div className="leadership-group-head">
              <h2>Technology &amp; Strategy</h2>
              <span className="count">how EJJE scales</span>
            </div>
            <div className="bio-grid">
              {technology.map(b => <BioCard key={b.name} bio={b} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
