import type { Metadata } from 'next'
import { PipelinePage } from '@/components/PipelinePage'

export const metadata: Metadata = {
  title: 'International Pipeline (Africa) — EJJE Incorporated',
  description:
    'EJJE Incorporated’s international pipeline: educational sponsorships, clean-water borehole infrastructure, and athletic academy pathways across Sub-Saharan Africa — including Babylon School and Medina United FC in The Gambia.',
}

export default function InternationalPipelinePage() {
  return (
    <PipelinePage
      crumb="International Pipeline (Africa)"
      eyebrow="our work abroad"
      title="The International"
      titleEm="Pipeline."
      lead="Built for global foundations, infrastructure donors, and elite sports-for-development groups. Across Sub-Saharan Africa we pair education with the community infrastructure that keeps children enrolled — because in our model, classroom enrollment is a mandatory prerequisite for taking the field."
      tags={['Sub-Saharan Africa', 'The Gambia & beyond', 'Infrastructure + academy pathways']}
      pillarsHeading="Education, infrastructure, and a path forward."
      pillars={[
        {
          title: 'Educational Sponsorships',
          text:
            'Direct funding that covers school fees, tuition, uniforms, and textbooks — such as our ongoing work at Babylon School in Lamin, The Gambia. Sponsorship is tied to attendance: classroom enrollment is a mandatory prerequisite for taking the field, so every athlete we support is first a student.',
          highlight: 'Classroom enrollment is required before an athlete can play.',
        },
        {
          title: 'Sustainable Infrastructure Development',
          text:
            'Funding and engineering the critical community-stabilization projects that make everything else possible — specifically clean-water borehole well installations. Reliable local water improves regional public health, supports families, and keeps children healthy enough to stay in school rather than walking miles for water.',
          highlight: 'Clean-water boreholes stabilize whole communities, not just schools.',
        },
        {
          title: 'Athletic & Academy Pathways',
          text:
            'Partnering with youth academies such as Medina United FC to provide professional training gear and equipment, housing support for orphan athletes, and genuine pathways to international tournaments like the Florida Cup. We connect local talent to global opportunity without asking families to choose between sport and school.',
          highlight: 'Gear, housing for orphan athletes, and pathways to the Florida Cup.',
        },
      ]}
      facts={[
        { n: 'Babylon', l: 'School, Lamin — The Gambia — a sponsored partner site' },
        { n: 'Medina', l: 'United FC — our international academy partner' },
        { n: '$2.5k', sup: '+', l: 'Funds a community-wide clean-water borehole' },
        { n: '2', l: 'Of two pipelines translating giving into impact' },
      ]}
      otherHref="/impact/domestic"
      otherLabel="See the Domestic Pipeline"
      ctaTitle="Fund a school, a well, or an athlete."
      ctaText="Global dollars, documented on the ground. Your gift becomes tuition and textbooks, a clean-water borehole, or training gear and housing for a young athlete in Sub-Saharan Africa."
    />
  )
}
