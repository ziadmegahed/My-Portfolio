import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ziad Megahed | AI & Machine Learning Engineer',
  description: 'Ziad Megahed is an AI & Machine Learning Engineer focused on Agentic AI, LLM applications, RAG, machine learning, MLOps, and AI infrastructure.',
  generator: 'v0.app',
  openGraph: {
    title: 'Ziad Megahed | AI & Machine Learning Engineer',
    description: 'Building intelligent systems with AI, LLMs & Agentic AI.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ziad Megahed | AI & Machine Learning Engineer',
    description: 'Building intelligent systems with AI, LLMs & Agentic AI.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
