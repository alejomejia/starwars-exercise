import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Logo } from '@/components/Logo/Logo'
import { Navigation } from '@/components/Navigation/Navigation'
import { Sound } from '@/components/Sound/Sound'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StarWars Frontend Exercise',
  description: 'StarWars frontend exercise to apply for a job position'
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-950">
          <header>
            <div className="px-6 py-4 flex justify-between items-center">
              <a className="w-32" href="/">
                <Logo />
              </a>
              <Navigation />
              <Sound />
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
