import type { Metadata } from 'next'
import { Fraunces, Inter, Caveat, JetBrains_Mono } from 'next/font/google'
import './globals.css'

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
  title: 'EJJE Soccer Academy — Help us keep it free.',
  description: 'A 501(c)(3) nonprofit keeping youth soccer free for 800+ kids a year. No registration fees. No equipment surcharge. Just cleats, a ball, and a team.',
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
      <body>{children}</body>
    </html>
  )
}
