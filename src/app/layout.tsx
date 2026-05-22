import type { Metadata } from 'next'
import './globals.css'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { Loader } from '@/components/ui/Loader'
import { SmoothScroll } from '@/components/layout/SmoothScroll'

export const metadata: Metadata = {
  title: 'Saroj Devkota — Engineer · Designer · Creator',
  description:
    'Multidisciplinary professional: Web Developer, Network Engineer, Interior Designer, and Community Leader based in Kathmandu, Nepal.',
  keywords: ['Saroj Devkota', 'Web Developer', 'Network Engineer', 'Interior Designer', 'Kathmandu'],
  openGraph: {
    title: 'Saroj Devkota — Engineer · Designer · Creator',
    description: 'Building Digital Experiences, Enterprise Networks & Creative Spaces.',
    url: 'https://sarojdevkota.com',
    siteName: 'Saroj Devkota',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saroj Devkota',
    description: 'Multidisciplinary Engineer · Designer · Creator',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Loader />
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
