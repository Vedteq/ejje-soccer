import type { Metadata } from 'next'
import { PipelinePage } from '@/components/PipelinePage'

export const metadata: Metadata = {
  title: 'Domestic Pipeline (U.S.) — EJJE Incorporated',
  description:
    'EJJE Incorporated’s U.S. pipeline: K-12 tutoring and school-supply support, college-readiness mentorship, and sports-based youth empowerment closing the equity gap in low-income Tampa Bay communities.',
}

export default function DomesticPipelinePage() {
  return (
    <PipelinePage
      crumb="Domestic Pipeline (U.S.)"
      eyebrow="our work at home"
      title="The Domestic"
      titleEm="Pipeline."
      lead="Isolating our work inside the United States so local corporate sponsors and donors can see their dollars at work in Florida. Every domestic program keeps education at the center — with sports as the hook that holds young people accountable in the classroom."
      tags={['United States', 'Anchored in Tampa Bay, FL', 'Low-income communities']}
      pillarsHeading="Closing the equity gap, at home."
      pillars={[
        {
          title: 'K-12 Tutoring & Academic Support',
          text:
            'Free, structured tutoring sessions paired with school-supply distribution drives, targeted at students in low-income communities. We remove the material barriers — books, backpacks, supplies — that quietly hold kids back, then add the consistent academic support that keeps them on grade level.',
          highlight: 'Directly closes the equity gap in underfunded Florida school districts.',
        },
        {
          title: 'College-Readiness Mentorship',
          text:
            'We demystify the college recruitment and entry process for underfunded families who have never navigated it before. Through academic profiling and tracking, we align each student’s GPA and test prep with their athletic metrics — turning a confusing process into a clear, personalized roadmap toward enrollment.',
          highlight: 'Aligns GPA and test-prep tracking with athletic performance data.',
        },
        {
          title: 'Youth Empowerment & Sports',
          text:
            'Sports-based youth development anchored in Tampa Bay, where athletics serve as the hook for classroom accountability. Playing time is earned through academic engagement, so the field becomes a lever that pulls young people back toward their studies, their confidence, and their community.',
          highlight: 'Athletics as a hook — classroom accountability as the requirement.',
        },
      ]}
      facts={[
        { n: 'K–12', l: 'Grade span served through tutoring and supply drives' },
        { n: '100', sup: '%', l: 'Of tutoring sessions provided free to families' },
        { n: 'Tampa', l: 'Bay, FL — the anchor for our domestic programs' },
        { n: '1', l: 'Of two pipelines translating giving into impact' },
      ]}
      otherHref="/impact/international"
      otherLabel="See the International Pipeline"
      ctaTitle="Fund a student in Florida."
      ctaText="Local dollars stay visible here. Your gift becomes a backpack of supplies, a tutoring session, or a college-readiness roadmap for a student in your own community."
    />
  )
}
