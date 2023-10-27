import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Header } from '@/components/Header/Header'
import { AppContextProvider } from '@/context/provider'

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
      <body className={`${inter.className} antialased`}>
        <div className="relative min-h-screen bg-slate-950">
          <AppContextProvider>
            <Header />
            <div className="relative z-10 py-8 lg:py-16">{children}</div>
            <div className="w-96 h-96 bg-slate-500 absolute top-0 left-1/2 transform -translate-x-72 translate-y-6 blur-2xl rounded-full opacity-20"></div>
          </AppContextProvider>
        </div>
      </body>
    </html>
  )
}
