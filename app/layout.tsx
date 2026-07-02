import type { Metadata } from 'next'
import { Fraunces, Inter, Caveat, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/SiteHeader'
import { Footer } from '@/components/Footer'
import { FloatDonate } from '@/components/Hero'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  axes: ['opsz'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'EJJE Incorporated — Education access for underserved children, at home and abroad',
  description: 'A 501(c)(3) nonprofit expanding access to education, mentorship, and community support for underserved children and families across the U.S. and internationally.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${caveat.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SiteHeader />
        {children}
        <Footer />
        <FloatDonate />
      </body>
    </html>
  )
}
