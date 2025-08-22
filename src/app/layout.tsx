import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OLYM3 AI Hub - Connect, Create, Innovate with AI & Blockchain',
  description: 'Join the future of AI and Blockchain innovation. Connect with developers, explore DeFi, GameFi, and DePin projects, and build the next generation of decentralized applications.',
  keywords: 'AI, Blockchain, DeFi, GameFi, DePin, Developers, Innovation, OLYM3',
  authors: [{ name: 'OLYM3 Team' }],
  openGraph: {
    title: 'OLYM3 AI Hub - Connect, Create, Innovate',
    description: 'Join the future of AI and Blockchain innovation',
    url: 'https://aibc.olym3.com',
    siteName: 'OLYM3 AI Hub',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OLYM3 AI Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OLYM3 AI Hub - Connect, Create, Innovate',
    description: 'Join the future of AI and Blockchain innovation',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
