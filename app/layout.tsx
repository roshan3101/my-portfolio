import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: 'Roshan Kumar Sahu | Full Stack Developer & AI Engineer',
    template: '%s | Roshan Kumar Sahu'
  },
  description: 'Full Stack Developer and AI Engineer specializing in scalable web applications, machine learning, and intelligent systems. View my portfolio, projects, and experience.',
  keywords: [
    'Full Stack Developer',
    'AI Engineer',
    'React',
    'Next.js',
    'Python',
    'Machine Learning',
    'TypeScript',
    'Node.js',
    'FastAPI',
    'MERN Stack',
    'Web Development',
    'Software Engineer',
    'Portfolio'
  ],
  authors: [{ name: 'Roshan Kumar Sahu' }],
  creator: 'Roshan Kumar Sahu',
  openGraph: {
    title: 'Roshan Kumar Sahu | Full Stack Developer & AI Engineer',
    description: 'Full Stack Developer and AI Engineer specializing in scalable web applications and intelligent systems.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Roshan Kumar Sahu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roshan Kumar Sahu | Full Stack Developer & AI Engineer',
    description: 'Full Stack Developer and AI Engineer specializing in scalable web applications and intelligent systems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
