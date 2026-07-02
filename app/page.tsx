import { Hero, ValuesStrip, About, Stats } from '@/components/Hero'
import { Pipelines } from '@/components/Pipelines'
import { Programs } from '@/components/Programs'
import { Impact } from '@/components/Impact'
import { Donate } from '@/components/Donate'
import { GetInvolved } from '@/components/GetInvolved'

export default function Home() {
  return (
    <>
      <Hero />
      <ValuesStrip />
      <About />
      <Stats />
      <Pipelines />
      <Programs />
      <Impact />
      <Donate />
      <GetInvolved />
    </>
  )
}
